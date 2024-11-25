import { _decorator, Button, Component, EditBox, Label, Layout, Node, Sprite, SpriteFrame, EventTarget, Vec3 } from 'cc';
import { GameStage } from './GameStages';
import { gameStageEventTarget } from './GameController';
import { winningNumEventTarget } from './UIController';
const { ccclass, property } = _decorator;

const betAmountEventTarget = new EventTarget();
const redeemEventTarget = new EventTarget();

@ccclass('BetButtonControl')
export class BetButtonControl extends Component {
    @property(Button)
    private btnManual: Button = null;

    @property(Button)
    private btnAuto: Button = null;

    @property(Button)
    private btnHalf: Button = null;

    @property(Button)
    private btn2x: Button = null;

    @property(Button)
    private btnPlusBet: Button = null;

    @property(Button)
    private btnMinusBet: Button = null;

    @property(Button)
    private btnAutoBet: Button = null;

    @property(Button)
    private btnBet: Button = null;

    @property(Node)
    private autoNode: Node = null;
    
    @property(Node)
    private autoBetPanel: Node = null;

    @property(Node)
    private betAmountBtnParent: Node = null;

    @property(Node)
    private autoBetBtnParent: Node = null;

    @property(Layout)
    private manualAutoBtnLayout: Layout = null;

    @property(SpriteFrame)
    private sprNormal: SpriteFrame = null;

    @property(SpriteFrame)
    private sprPressed: SpriteFrame = null;

    @property(SpriteFrame)
    private sprBet_Betting: SpriteFrame = null;

    @property(SpriteFrame)
    private sprBet_Cancel: SpriteFrame = null;

    @property(SpriteFrame)
    private sprBet_Wait: SpriteFrame = null;

    @property(SpriteFrame)
    private sprBet_Redeem: SpriteFrame = null;

    @property(EditBox)
    private editBetAmt: EditBox = null;

    @property(EditBox)
    private editAutoBet: EditBox = null;

    @property(Label)
    private lblBet: Label = null;

    @property(Label)
    private lblWinAmount: Label = null;

    currentStage: GameStage = null;

    private autoRedeemAmt: number = 0;

    private autoBetCounter: number = 0;

    private isRedeemable: boolean = false;

    private isWait: boolean = false;

    protected onLoad(): void {
        this.btnManual.node.on(Button.EventType.CLICK, this.onClickedBtnManual, this);
        this.btnAuto.node.on(Button.EventType.CLICK, this.onClickedBtnAuto, this);
        this.btn2x.node.on(Button.EventType.CLICK, this.onClickedBtn2x, this);
        this.btnHalf.node.on(Button.EventType.CLICK, this.onClickedBtnHalf, this);
        this.btnPlusBet.node.on(Button.EventType.CLICK, this.onClickedBtnPlusBet, this);
        this.btnMinusBet.node.on(Button.EventType.CLICK, this.onClickedBtnMinusBet, this);
        this.btnAutoBet.node.on(Button.EventType.CLICK, this.onClickedBtnAutoBet, this);
        this.btnBet.node.on(Button.EventType.CLICK, () => this.onClickedBtnBet(), this);

        // Listen for the stageChanged event
        gameStageEventTarget.on('stageChanged', this.onStageChanged, this);
        winningNumEventTarget.on('WinningNum', this.onWinningNumChanged, this);
    }

    start() {
        this.onClickedBtnManual();
        this.betAmountBtnClicked();
    }

    onClickedBtnManual(): void {
        this.autoNode.active = false;
        this.autoBetPanel.active = false;
        this.manualAutoBtnLayout.paddingTop=14;
        this.manualAutoBtnLayout.spacingY=7;
        this.btnManual.node.getComponent(Sprite).spriteFrame = this.sprPressed;
        this.btnAuto.node.getComponent(Sprite).spriteFrame = this.sprNormal;
    }

    onClickedBtnAuto(): void {
        this.autoNode.active = true;
        this.manualAutoBtnLayout.paddingTop=0;
        this.manualAutoBtnLayout.spacingY=3;
        this.btnManual.node.getComponent(Sprite).spriteFrame = this.sprNormal;
        this.btnAuto.node.getComponent(Sprite).spriteFrame = this.sprPressed;
    }

    onClickedBtn2x(): void {
        let betAmt = this.editBetAmt.string;
        console.log(betAmt);
        if (betAmt) {
            betAmt = (parseInt(betAmt) * 2).toString();
            this.editBetAmt.string = betAmt;
        }
    }

    onClickedBtnHalf(): void {
        let betAmt = this.editBetAmt.string;
        if(betAmt == "1") return;
        if (betAmt) {
            betAmt = (parseInt(betAmt) / 2).toString();
            this.editBetAmt.string = betAmt;
        }
    }

    onClickedBtnPlusBet(): void {
        let autoRedeem = this.editAutoBet.string;
        let currentMultiplier = 0;
        if (autoRedeem) {
            currentMultiplier = parseFloat(autoRedeem.replace("X", ""));
        }
        currentMultiplier += 0.1;
        currentMultiplier = parseFloat(currentMultiplier.toFixed(2));
        this.editAutoBet.string = currentMultiplier.toFixed(2) + "X";
    }
    
    onClickedBtnMinusBet(): void {
        let autoRedeem = this.editAutoBet.string;
        let currentMultiplier = 0;
        if(autoRedeem == "1.01X") return;
        if (autoRedeem) {
            currentMultiplier = parseFloat(autoRedeem.replace("X", ""));
        }
        currentMultiplier -= 0.1;
        currentMultiplier = parseFloat(currentMultiplier.toFixed(2));
        this.editAutoBet.string = currentMultiplier.toFixed(2) + "X";
    }

    onClickedBtnAutoBet(): void {
        if(this.autoBetPanel.active) {
            this.autoBetPanel.active = false;
        } else {
            if(this.btnAutoBet.node.children[0].getComponent(Label).string == "自动投注"){
                this.autoBetPanel.active = true;
                for(let i = 0; i < this.autoBetBtnParent.children.length; i++) {
                    let btn = this.autoBetBtnParent.children[i].getComponent(Button);
                    btn.node.on(Button.EventType.CLICK, () => this.autoBetBtnClicked(i), this);
                }
            }else{
                this.btnAutoBet.node.children[0].getComponent(Label).string = "自动投注"
                this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
                this.lblBet.string = "投注";
                this.lblBet.node.position = new Vec3(0, 0);
                this.lblWinAmount.node.active = false;
                this.setBetBtnGroupInteractable(true);
            }
        }
    }

    autoBetBtnClicked(index: number): void {
        if(this.currentStage == 2){
            if(index == 0){
                this.btnAutoBet.node.children[0].getComponent(Label).string = "取消自动(∞)";
            }else if(index == 1){
                this.btnAutoBet.node.children[0].getComponent(Label).string = "取消自动(1000)";
            }else if(index == 2){
                this.btnAutoBet.node.children[0].getComponent(Label).string = "取消自动(100)";
            }else if(index == 3){
                this.btnAutoBet.node.children[0].getComponent(Label).string = "取消自动(50)";
            }else if(index == 4){
                this.btnAutoBet.node.children[0].getComponent(Label).string = "取消自动(30)";
            }else if(index == 5){
                this.btnAutoBet.node.children[0].getComponent(Label).string = "取消自动(10)";
            }
            this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Cancel;
            this.lblBet.string = "撤销";
            this.setBetBtnGroupInteractable(false);
            betAmountEventTarget.emit('betAmount', this.editBetAmt.string);
            this.autoRedeemValue();
            this.autoBetPanel.active = false;
        }
    }

    betAmountBtnClicked(): void {
        for(let i = 0; i < this.betAmountBtnParent.children.length; i++) {
            let btn = this.betAmountBtnParent.children[i].getComponent(Button);
            btn.node.on(Button.EventType.CLICK, () => {
                this.editBetAmt.string = btn.node.children[0].getComponent(Label).string;
            }, this);
        }
    }

    onClickedBtnBet(): void {
        console.log(this.currentStage+" : Stage");
        if(this.currentStage == 0){
            if(this.btnBet.node.getComponent(Sprite).spriteFrame.name == this.sprBet_Wait.name){
                this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Cancel;
                this.lblBet.string = "撤销";
                this.lblBet.node.position = new Vec3(0, 0);
                this.lblWinAmount.node.active = false;
                this.setBetBtnGroupInteractable(true);
            }else{
                this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
                this.lblBet.string = "投注";
            }
        }else if(this.currentStage == 2){
            if(this.btnBet.node.getComponent(Sprite).spriteFrame.name == this.sprBet_Betting.name){
                this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Cancel;
                this.lblBet.string = "撤销";
                this.setBetBtnGroupInteractable(false);
                betAmountEventTarget.emit('betAmount', this.editBetAmt.string);
                this.autoRedeemValue();
            }else{
                this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
                this.lblBet.string = "投注";
                this.setBetBtnGroupInteractable(true);
                betAmountEventTarget.emit('betAmount', -this.editBetAmt.string);
            }   
        }else if(this.currentStage == 3){
            if(this.btnBet.node.getComponent(Sprite).spriteFrame.name == this.sprBet_Betting.name){
                this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Wait;
                this.isWait = true;
                this.lblBet.string = "撤销";
                this.lblBet.node.position = new Vec3(0, 9);
                this.lblWinAmount.node.active = true;
                this.lblWinAmount.fontSize = 12;
                this.lblWinAmount.string = "请等待下一局";
                this.setBetBtnGroupInteractable(false);
            }else if(this.btnBet.node.getComponent(Sprite).spriteFrame.name == this.sprBet_Wait.name){
                this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
                this.lblBet.string = "投注";
                this.lblBet.node.position = new Vec3(0, 0);
                this.lblWinAmount.node.active = false;
                this.setBetBtnGroupInteractable(true);
            }else if(this.btnBet.node.getComponent(Sprite).spriteFrame.name == this.sprBet_Redeem.name){
                if(this.isRedeemable){
                    this.redeem();
                }
            }
        }
    }

    private onStageChanged(stage: GameStage): void {
        this.currentStage = stage;

        if(this.currentStage == 3){
            if(this.btnBet.node.getComponent(Sprite).spriteFrame == this.sprBet_Cancel){
                this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Redeem;
                betAmountEventTarget.emit('betAmount', this.editBetAmt.string);
                this.lblBet.string = "兑出筹码";
                this.lblBet.node.position = new Vec3(0, 9);
                this.lblWinAmount.node.active = true;
                this.lblWinAmount.fontSize = 16;
                this.lblWinAmount.string = "1.00";
                this.setBetBtnGroupInteractable(false);
                this.isRedeemable = true;
            }
        }else if (this.currentStage == 4){
            if(this.btnBet.node.getComponent(Sprite).spriteFrame == this.sprBet_Redeem){
                this.lblWinAmount.node.active = false;
                this.lblBet.node.position = new Vec3(0, 0);
                this.setBetBtnGroupInteractable(true);
                this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
                this.lblBet.string = "投注";
            }
        }
    }

    private onWinningNumChanged(winningNum: number): void {
        if(this.isWait == false){
            this.lblWinAmount.string = winningNum.toString();
            if(this.autoBetPanel.active){
                if(this.autoRedeemAmt <= winningNum){
                    this.redeem();
                }
            }
        }
    }

    setBetBtnGroupInteractable(interactable: boolean): void {
        for(let i = 0; i < this.betAmountBtnParent.children.length; i++) {
            let btn = this.betAmountBtnParent.children[i].getComponent(Button);
            btn.interactable = interactable;
        }
        this.btnManual.interactable = interactable;
        this.btnAuto.interactable = interactable;
        this.btnPlusBet.interactable = interactable;
        this.btnMinusBet.interactable = interactable;
        this.btnHalf.interactable = interactable;
        this.btn2x.interactable = interactable;
        this.editBetAmt.enabled = interactable;
        this.editAutoBet.enabled = interactable;
    }

    autoRedeemValue(): void {
        if(this.autoBetPanel.active){
            let autoRedeem = this.editAutoBet.string;
            let currentMultiplier = 0;
            if (autoRedeem) {
                currentMultiplier = parseFloat(autoRedeem.replace("X", ""));
            }
            this.autoRedeemAmt = currentMultiplier;
        }
    }

    redeem(): void {
        this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
        this.lblBet.string = "投注";
        this.lblBet.node.position = new Vec3(0, 0);
        this.lblWinAmount.node.active = false;
        this.setBetBtnGroupInteractable(true);
        this.isRedeemable = false;
        redeemEventTarget.emit('redeem', true, this.lblWinAmount.string);
    }

}
export { redeemEventTarget, betAmountEventTarget };