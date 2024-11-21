import { _decorator, Component, instantiate, Node, Prefab, tween, UIOpacity, Vec3, EventTarget, Animation, Quat, UITransform, Size, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

const rocketEventTarget = new EventTarget();

@ccclass('Rocket')
export class Rocket extends Component {

    @property(Node)
    rocket: Node = null;

    @property(Node)
    rocketNode: Node = null;

    @property(Node)
    flare: Node = null;

    @property(Node)
    rocketParent: Node = null;

    @property(Node)
    particleParent: Node = null;

    @property(Node)
    fireNode: Node = null;

    @property(Prefab)
    smokeParticle: Prefab = null;

    @property(Prefab)
    explodeParticle: Prefab = null;

    @property(SpriteFrame)
    rocketDefaultSprite: SpriteFrame = null;

    rocketAnim: Animation = null;
    private _isLaunching: boolean = false;
    private _isDeparting: boolean = false;
    private _vibrationTween: any = null;
    private _floatingTween: any = null;

    protected start(): void {
        this.startVibrationEffect();
        this.rocketAnim = this.rocket.getComponent(Animation);
    }

    fadeInOut(node: Node, duration: number): void {
        const uiOpacity = node.getComponent(UIOpacity);
        if (uiOpacity) {
            tween(uiOpacity)
                .repeatForever(
                    tween()
                        .to(duration, { opacity: 255 }, { easing: "sineInOut" })
                        .to(duration, { opacity: 0 }, { easing: "sineInOut" })
                )
                .start();
        } else {
            console.warn("Node does not have a UIOpacity component:", node);
        }
    }

    startFadeAnimations(): void {
        if (this.flare) {
            this.fadeInOut(this.flare, 0.5);
        } else {
            console.error("One or more nodes are not initialized.");
        }
    }

    vibrateRocket(node: Node, intensity: number, duration: number): void {
        if (!node) {
            console.error("Node is not initialized.");
            return;
        }

        const initialPosition = node.getPosition().clone();
        console.log("Starting vibration effect on node:", node.name);

        this.flare.active = true;
        this.startFadeAnimations();

        this._vibrationTween = tween(node)
            .repeatForever(
                tween()
                    .by(duration, { position: new Vec3(intensity, 0, 0) }, { easing: "sineInOut" })
                    .by(duration, { position: new Vec3(-intensity * 2, 0, 0) }, { easing: "sineInOut" })
                    .by(duration, { position: new Vec3(intensity, 0, 0) }, { easing: "sineInOut" })
                    .call(() => {
                        node.setPosition(initialPosition);
                    })
            )
            .start();

        console.log("Vibration tween started.");
    }

    stopVibrationEffect(): void {
        if (this._vibrationTween) {
            this._vibrationTween.stop();
            this._vibrationTween = null;
            console.log("Vibration tween stopped.");
        } else {
            console.warn("No vibration tween to stop.");
        }
    }

    startVibrationEffect(): void {
        if (this.rocket) {
            console.log("Rocket node is initialized:", this.rocket.name);
            this.vibrateRocket(this.rocket, 0.1, 0.1); // Adjust intensity and duration as needed
        } else {
            console.error("Rocket node is not initialized.");
        }
    }

    startDepartingUp() {
        this.fireNode.active = true;
        this.fireNode.setScale(1, 2);
        this.fireNode.getComponent(Animation).play();
        const departureOffset = 500; // Set how far up the UFO should move
        const initialPosition = this.node.getPosition();
        const targetPosition = new Vec3(initialPosition.x, initialPosition.y + departureOffset, initialPosition.z);

        // Create the tween for the upward movement
        tween(this.rocketNode)
            .call(() => {
                // Instantiate and position the smoke particles
                const smokeInstance = instantiate(this.smokeParticle);
                smokeInstance.setPosition(new Vec3(-25.653, -18.182, 0));
                this.particleParent.addChild(smokeInstance);

                const smokeInstance1 = instantiate(this.smokeParticle);
                smokeInstance1.setPosition(new Vec3(2.491, -17.684, 0));
                this.particleParent.addChild(smokeInstance1);
            })
            .to(2, { position: targetPosition }, { easing: "expoIn" }) // Move upwards to target position
            .call(() => {
                // Disable flare and destroy smoke particles
                this.flare.active = false;
                this.particleParent.children[1].destroy();
                this.particleParent.children[2].destroy();
                // Emit event and stop vibration effect
                rocketEventTarget.emit('departingFinished', true);
                this.stopVibrationEffect();
                console.log(this.rocketNode.getComponent(UITransform).contentSize+'---------------'+this.rocketNode.getScale());
            })
            .start();
    }

    startFloatingAction() {
        const floatHeight = 10;
        const floatDuration = 1;
    
        const originalPosition = this.rocketNode.position.clone();

        console.log("Starting floating action tween");
        if (this.rocketNode) {
            this._floatingTween = tween(this.rocketNode)
                .repeatForever(
                    tween()
                        .to(floatDuration, { position: new Vec3(originalPosition.x, originalPosition.y + floatHeight, originalPosition.z) }, { easing: 'sineInOut' })
                        .to(floatDuration, { position: originalPosition }, { easing: 'sineInOut' })
                )
                .start();
            console.log("Floating action tween started");
        } else {
            console.error("rocketNode is not initialized.");
        }
    }

    stopFloatingAction() {
        if (this._floatingTween) {
            this._floatingTween.stop();
            this._floatingTween = null;
            console.log("Floating action tween stopped");
        } else {
            console.warn("No floating action tween to stop.");
        }
    }

    startFlyingAction() {
        this.rocketNode.active = true;
        this.rocketNode.setPosition(-400, -180);
        this.rocketNode.setRotationFromEuler(0, 0, -80); // Initial rotation
        this.rocketNode.setScale(1, 1, 1);
    
        this.fireNode.active = true;
        this.fireNode.getComponent(Animation).play();
    
        console.log("Rocket Content Size:", this.rocketNode.getComponent(UITransform).contentSize);
        console.log("Rocket Scale:", this.rocketNode.getScale());
    
        tween(this.rocketNode)
            .to(1, { 
                position: new Vec3(100, 0),
                rotation: Quat.fromEuler(new Quat(), 0, 0, -45) // Use static method Quat.fromEuler
            }, { easing: "expoIn" })
            .call(() => {
                rocketEventTarget.emit('isFlying', true);
                this.startFloatingAction();
                this.rocketAnim.play();
                console.log("Rocket Content Size After Tween:", this.rocketNode.getComponent(UITransform).contentSize);
                console.log("Rocket Scale After Tween:", this.rocketNode.getScale());
            })
            .start();
    }
    

    startExplodeAction(): void {
        const explodeInstance = instantiate(this.explodeParticle);
        explodeInstance.setPosition(this.rocketNode.position);
        this.node.addChild(explodeInstance);

        const animation = explodeInstance.getComponent(Animation);
        if (animation) {
            animation.play();
            animation.on(Animation.EventType.FINISHED, () => {
                this.node.active = false;
                explodeInstance.destroy();
                this.rocketAnim.stop();
                this.node.active = false;
                this.rocketNode.setPosition(new Vec3(8.951, -0.557));
                this.rocketNode.setRotationFromEuler(0, 0, 0);
                this.fireNode.active = false;
                this.stopFloatingAction();
                this.rocket.getComponent(Sprite).spriteFrame = this.rocketDefaultSprite;
            }, this);
        }
    }

    get isLaunching(): boolean {
        return this._isLaunching;
    }

    set isLaunching(value: boolean) {
        this._isLaunching = value;
        rocketEventTarget.emit('isLaunchingChanged', value);
    }

    get isDeparting(): boolean {
        return this._isDeparting;
    }

    set isDeparting(value: boolean) {
        this._isDeparting = value;
        rocketEventTarget.emit('isDepartingChanged', value);
    }
}

export { rocketEventTarget };