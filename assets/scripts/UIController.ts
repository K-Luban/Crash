import { _decorator, Button, Component, Label, Node, tween, UIOpacity, v3, Vec3 } from 'cc';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {
    @property(Label)
    private lblID: Label = null;

    @property(Label)
    private lblBC: Label = null;

    @property(Button)
    private btnCopyID: Button = null;

    @property(Button)
    private btnCopyBC: Button = null;

    @property(Label)
    private lblCountdown: Label = null;

    @property(Node)
    private copySuccessPanel: Node = null;

    private gameController: GameController = null;

    protected onLoad(): void {
        this.btnCopyID.node.on(Button.EventType.CLICK, () => this.copyAction(this.lblID), this);
        this.btnCopyBC.node.on(Button.EventType.CLICK, () => this.copyAction(this.lblBC), this);
        this.gameController = this.node.getComponent(GameController);
    }

    copyAction(label: Label): void {
        const text = label.string;// need to change later from global ID
        if (text && navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    this.copySuccessPanel.active = true;
                    const uiOpacity = this.copySuccessPanel.getComponent(UIOpacity);
                    if (uiOpacity) {
                        tween(uiOpacity)
                        .to(1, { opacity: 0 })
                        .start();
                    }
                    tween(this.copySuccessPanel)
                    .to(1, { position: v3(this.copySuccessPanel.position.x, this.copySuccessPanel.position.y + 100) })
                    .call(() => {
                        this.copySuccessPanel.active = false; 
                        this.copySuccessPanel.position = new Vec3(190,388,0);
                        this.copySuccessPanel.getComponent(UIOpacity).opacity = 255;
                    })
                    .start();
                })
                .catch((err) => {
                    console.error("Could not copy text: ", err);
                });
        } else {
            console.error("Clipboard API not available.");
        }
    }

    rocketLaunch(): void {
        let countdownValue = 5;
        this.schedule(() => {
            countdownValue--;

            if (countdownValue >= 0) {
                this.lblCountdown.string = countdownValue.toString();
            }

            if (countdownValue === 2) {
                // Call startDepartingUp when countdown is 2
                if (this.gameController) {
                    this.gameController.startDepartingUp();
                } else {
                    console.error("GameController is not initialized.");
                }
            }

            if (countdownValue < 0) {
                this.unscheduleAllCallbacks(); // Stop the countdown
                // this.lblCountdown.string = "Start!"; // Optionally show a final message
            }
        }, 1);
    }
}


