import { _decorator, Button, Component, Label, Node, ScrollView, tween, UIOpacity, v3, Vec3, EventTarget, SpriteFrame, Sprite, Prefab, instantiate, Tween } from 'cc';
import { GameController } from './GameController';
import { Rocket } from './Model/Rocket';
import { GameStage } from './GameStages';
const { ccclass, property } = _decorator;

const countdownEventTarget = new EventTarget();
const winningNumEventTarget = new EventTarget();

@ccclass('UIController')
export class UIController extends Component {
    
    @property(Button)
    private btnCopyID: Button = null;

    @property(Button)
    private btnCopyBC: Button = null;

    @property(Button)
    private btnInfo: Button = null;

    @property(Button)
    private btnCloseInfo: Button = null;

    @property(Button)
    private btnHistory: Button = null;

    @property(Button)
    private btnCloseHistory: Button = null;

    @property(Label)
    private lblID: Label = null;

    @property(Label)
    private lblBC: Label = null;

    @property(Label)
    private lblWinningNum: Label = null;

    @property(Label)
    private lblUserWallet: Label = null;

    @property(Label)
    private lblCountdown: Label = null;

    @property(Label)
    private lblBadgeWinNum1: Label = null;

    @property(Label)
    private lblBadgeWinNum2: Label = null;

    @property(Node)
    private copySuccessPanel: Node = null;

    @property(Node)
    private infoPanel: Node = null;

    @property(Node)
    private counterPanel: Node = null;

    @property(Node)
    private multipierPanel: Node = null;

    @property(Node)
    private rocketParent: Node = null;

    @property(Node)
    private topUI: Node = null;

    @property(Node)
    private bottomUI: Node = null;

    @property(Node)
    private commonUI: Node = null;

    @property(Node)
    private flareNode: Node = null;

    @property(Node)
    private explodeLBLNode: Node = null;

    @property(Node)
    private winningPanel: Node = null;

    @property(Node)
    private winBadge: Node = null;

    @property(Node)
    private winBadgeFlare: Node = null;

    @property(Node)
    private historyPanel: Node = null;

    @property(Node)
    private historyItemParent: Node = null;

    @property(Node)
    private historyS_Panel: Node = null;

    @property(Node)
    private historyS_ItemParent: Node = null;

    @property(Node)
    private starNode: Node = null;

    @property(Sprite)
    private bgSprite: Sprite = null;

    @property(Prefab)
    private historyItemPrefab: Prefab = null;

    @property(Prefab)
    private historyS_ItemPrefab: Prefab = null;

    private gameController: GameController = null;

    private bgTween: Tween<Node> = null;

    protected onLoad(): void {
        this.btnCopyID.node.on(Button.EventType.CLICK, () => this.copyAction(this.lblID), this);
        this.btnCopyBC.node.on(Button.EventType.CLICK, () => this.copyAction(this.lblBC), this);
        this.btnInfo.node.on(Button.EventType.CLICK, () => this.onClickedBtnInfo(), this);
        this.btnCloseInfo.node.on(Button.EventType.CLICK, () => this.onClickedBtnCloseInfo(), this);
        this.btnHistory.node.on(Button.EventType.CLICK, () => this.onClickedBtnHistory(), this);
        this.btnCloseHistory.node.on(Button.EventType.CLICK, () => this.onClickedBtnCloseHistory(), this);
    }

    protected start(): void {
        this.gameController = this.node.getComponent(GameController);
        this.lblUserWallet.string = this.gameController.userWallet.toString();
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

    rocketLaunchCounter(): void {
        let countdownValue = 6;
        this.schedule(() => {
            if (countdownValue >= 0) {
                this.lblCountdown.string = countdownValue.toString();
            }

            if (countdownValue === 1) {
                countdownEventTarget.emit('countdownIsOne');
            }

            if (countdownValue < 0) {
                this.unscheduleAllCallbacks(); // Stop the countdown
                // this.lblCountdown.string = "Start!"; // Optionally show a final message
            }

            countdownValue--;
        }, 1);
    }

    countUpToWinningNum(num: number): void {
        let currentNum = 1.00;
        const interval = 100; // milliseconds
        const step = 0.01;
    
        const countUpInterval = setInterval(() => {
                if (currentNum >= num) {
                clearInterval(countUpInterval);
                console.log('Reached winning number:', num);
                countdownEventTarget.emit('Exploded');
                return;
            }
            
            currentNum = parseFloat((currentNum + step).toFixed(2));
            winningNumEventTarget.emit('WinningNum', currentNum);
            this.lblWinningNum.string = currentNum.toString() + "X";
        }, interval);

        const uiOpacity = this.flareNode.getComponent(UIOpacity);
        tween(uiOpacity)
            .repeatForever(
                tween()
                    .to(0.5, { opacity: 255 }, { easing: "sineInOut" })
                    .to(0.5, { opacity: 0 }, { easing: "sineInOut" })
            )
            .start();
    }

    zoomInExplodeLBL(): void {
        this.explodeLBLNode.active = true;
        this.explodeLBLNode.setScale(1.8, 1.8);
        tween(this.explodeLBLNode)
            .to(0.5, { scale: new Vec3(1, 1, 1) })
            .start();
    }

    zoomInWinningPanel(num: number): void {
        this.winningPanel.active = true;
        this.winBadge.setScale(0, 0);
        tween(this.winBadge)
            .to(0.3, { scale: new Vec3(1, 1, 1) })
            .call(() => {
                this.lblBadgeWinNum2.string = num.toString();;
                let currentNum = 0.00;
                const interval = 10; // milliseconds
                const step = 0.01;

                const countUpInterval = setInterval(() => {
                    if (currentNum >= num) {
                        clearInterval(countUpInterval);
                        setTimeout(() => {
                            tween(this.winBadge)
                                .to(0.5, { scale: new Vec3(0, 0, 0) })
                                .call(() => {
                                    this.winningPanel.active = false;
                                })
                                .start();
                        }, 2000);
                        return;
                    }
            
                    currentNum = parseFloat((currentNum + step).toFixed(2));
                    this.lblBadgeWinNum1.string = currentNum.toString();
                }, interval);
                
                const uiOpacity = this.winBadgeFlare.getComponent(UIOpacity);
                tween(uiOpacity)
                    .repeatForever(
                        tween()
                            .to(0.5, { opacity: 255 }, { easing: "sineInOut" })
                            .to(0.5, { opacity: 0 }, { easing: "sineInOut" })
                    )
                    .start();
            })
            .start();
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

    bgAnimation(): void {
        this.bgTween = tween(this.bgSprite.node)
            .to(60, { position: v3(0, -356.549, 0) })
            .call(() => {
                this.stopBgAnimation();
            })
            .start();
    }

    stopBgAnimation(): void {
        if (this.bgTween) {
            this.bgTween.stop();
            this.bgTween = null; // Optionally clear the reference
        }
    }

    scaleUp(node: Node, scale: Vec3, duration: number): void {
        tween(node)
            .to(duration, { scale: scale })
            .call(() => {
                node.active = false;
            })
            .start();
    }

    showHistoryS_Panel(winNum: number): void {
        this.historyS_Panel.getComponent(ScrollView).scrollToRight();
        if (this.historyS_ItemParent.children.length >= 20) {
            this.historyS_ItemParent.children[0].destroy();
        }
        
        const item = instantiate(this.historyS_ItemPrefab);
        item.parent = this.historyS_ItemParent;
        item.children[0].getComponent(Label).string = winNum.toString()+"X";
    }

    onClickedBtnHistory(): void {
        this.historyPanel.active = true;
        let numbers = this.gameController.winningNumbers;
        for (let i = 0; i < numbers.length; i++) {
            const item = instantiate(this.historyItemPrefab);
            item.parent = this.historyItemParent;
            item.children[0].getComponent(Label).string = numbers[i].toString()+"X";
        }
    }

    onClickedBtnCloseHistory(): void {
        this.historyPanel.active = false;
        this.historyItemParent.children.forEach(child => {
            child.destroy();
        });
    }

    onClickedBtnInfo(): void {
        this.infoPanel.active = true;
        this.rocketLaunchCounter();
    }

    onClickedBtnCloseInfo(): void {
        this.infoPanel.active = false;
        this.infoPanel.children[0].children[1].getComponent(ScrollView).scrollToTop();
    }

    initialGameStageUI(): void{
        this.resetAllUI();
        this.explodeLBLNode.active = false;
        this.multipierPanel.active = false;
        this.topUI.active = true;
        this.bottomUI.active = true;
        this.commonUI.active = true;
        this.rocketParent.active = true;
        this.counterPanel.active = true;
        this.lblCountdown.string = "6";
        this.stopBgAnimation();
        this.bgSprite.node.setPosition(0, 671.973);
    }

    launchingGameStageUI(): void{
        this.rocketLaunchCounter();
    }

    inFlightGameStageUI(): void{
        this.counterPanel.active = false;
        this.fadeInOut(this.starNode, 0.5);
        this.bgSprite.node.setPosition(0, 450);
        this.bgAnimation();
        this.multipierPanel.active = true;
        this.lblWinningNum.string = "1.00X";
    }

    resetAllUI(): void{
        this.topUI.active = false;
        this.bottomUI.active = false;
        this.commonUI.active = false;
        this.rocketParent.active = false;
    }

    public updateUserWallet(amount: string): void {
        this.lblUserWallet.string = amount;
    }
}

export { countdownEventTarget, winningNumEventTarget };