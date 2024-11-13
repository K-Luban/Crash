import { _decorator, Component, instantiate, Node, Prefab, tween, UIOpacity, Vec3, EventTarget } from 'cc';
const { ccclass, property } = _decorator;

const rocketEventTarget = new EventTarget();

@ccclass('Rocket')
export class Rocket extends Component {

    @property(Node)
    rocket: Node = null;

    @property(Node)
    rocketNode: Node = null;

    @property(Node)
    light1: Node = null;

    @property(Node)
    light2: Node = null;

    @property(Node)
    flare: Node = null;

    @property(Node)
    rocketParent: Node = null;

    @property(Node)
    particleParent: Node = null;

    @property(Prefab)
    smokeParticle: Prefab = null;

    @property(Prefab)
    explodeParticle: Prefab = null;

    private _isLaunching: boolean = false;
    private _isDeparting: boolean = false;
    private _vibrationTween: any = null;

    protected start(): void {
        this.startVibrationEffect();
        //this.startFloatingAction();
        //this.startFlyingAction();
        //this.startDepartingUp();
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
        if (this.light1 && this.light2 && this.flare) {
            this.fadeInOut(this.light1, 0.3); // 0.5 seconds for each fade in/out
            this.fadeInOut(this.light2, 0.3);
            this.fadeInOut(this.flare, 0.3);
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
            this.vibrateRocket(this.rocket, 0.2, 0.1); // Adjust intensity and duration as needed
        } else {
            console.error("Rocket node is not initialized.");
        }
    }

    startDepartingUp() {
        const departureOffset = 500; // Set how far up the UFO should move
        const initialPosition = this.node.getPosition();
        const targetPosition = new Vec3(initialPosition.x, initialPosition.y + departureOffset, initialPosition.z);

        // Create the tween for the upward movement and scaling down to zero
        tween(this.rocketNode)
            .parallel(
                tween()
                    .call(() => {
                        const smokeInstance = instantiate(this.smokeParticle);
                        smokeInstance.setPosition(new Vec3(-25.653, -18.182, 0));
                        this.particleParent.addChild(smokeInstance);

                        const smokeInstance1 = instantiate(this.smokeParticle);
                        smokeInstance1.setPosition(new Vec3(2.491, -17.684, 0));
                        this.particleParent.addChild(smokeInstance1);
                    })
                    .to(2, { position: targetPosition }, { easing: "expoIn" }) // Move upwards to target position
                ,
                tween().to(2, { scale: new Vec3(0, 0, 0) }, { easing: "expoIn" })  // Shrink to zero size
            )
            .call(() => {
                this.flare.active = false;
                this.particleParent.children[1].destroy();
                this.particleParent.children[2].destroy();
                rocketEventTarget.emit('departingFinished',true);
                this.stopVibrationEffect();
            })
            .start();
    }

    startFloatingAction() {
        const floatHeight = 10;
        const floatDuration = 1;
    
        const originalPosition = this.rocketNode.position.clone();

        console.log("Starting floating action tween");
        if (this.rocketNode) {
            tween(this.rocketNode)
                .repeatForever(
                    tween()
                        .to(floatDuration, { position: new Vec3(originalPosition.x, originalPosition.y + floatHeight, originalPosition.z) }, { easing: 'sineInOut' })
                        .to(floatDuration, { position: originalPosition }, { easing: 'sineInOut' })
                )
                .start();
            console.log("Floating action tween started");
            this.fadeInOut(this.light1, 0.8);
            this.fadeInOut(this.light2, 0.5);
        } else {
            console.error("rocketNode is not initialized.");
        }
    }

    startFlyingAction() {
        this.rocketNode.active = true;
        this.rocketNode.setPosition(-50, -200);
        this.rocketNode.setScale(0, 0);
        tween(this.rocketNode)
            .parallel(
                tween().to(1, { position: new Vec3(0, 0) }, { easing: "expoIn" }),
                tween().to(1, { scale: new Vec3(1, 1) }, { easing: "expoIn" })
            )
            .call(() => {
                rocketEventTarget.emit('isFlying',true);
                this.startFloatingAction();
            })
            .start();
        
    }

    startExplodeAction(): void {
        const explodeInstance = instantiate(this.explodeParticle);
        explodeInstance.setPosition(this.rocketNode.position);
        this.node.addChild(explodeInstance);

        setTimeout(() => {
            explodeInstance.destroy();
            this.node.active = false;
        }, 800);
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