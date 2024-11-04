import { _decorator, Component, instantiate, Node, Prefab, tween, UIOpacity, Vec3 } from 'cc';
import { UIController } from './UIController';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property(Node)
    rocket: Node = null;

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

    private uiController: UIController = null;

    protected onLoad(): void {
        this.uiController = this.node.getComponent(UIController);
    }

    start(): void {
        this.startFadeAnimations();
        this.startVibrationEffect();
        this.uiController.rocketLaunch();
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

    initialLaunchRocket(): void {
        ///////////////////////////////////////////////////////////////////////////////////////////
    }

    vibrateRocket(node: Node, intensity: number, duration: number): void {
        if (!node) {
            console.error("Node is not initialized.");
            return;
        }

        const initialPosition = node.getPosition().clone();
        console.log("Starting vibration effect on node:", node.name);

        tween(node)
            .repeatForever(
                tween()
                    .by(duration, { position: new Vec3(intensity, 0, 0) }, { easing: "sineInOut" })
                    .by(duration, { position: new Vec3(-intensity * 2, 0, 0) }, { easing: "sineInOut" })
                    .by(duration, { position: new Vec3(intensity, 0, 0) }, { easing: "sineInOut" })
                    .call(() => {
                        // Reset to initial position after each cycle to prevent drifting
                        node.setPosition(initialPosition);
                    })
            )
            .start();

        console.log("Vibration tween started.");
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
        const initialPosition = this.rocketParent.getPosition();
        const targetPosition = new Vec3(initialPosition.x, initialPosition.y + departureOffset, initialPosition.z);

        // Create the tween for the upward movement and scaling down to zero
        tween(this.rocketParent)
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
            })
            .start();
    }
}


