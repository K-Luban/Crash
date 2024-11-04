import { _decorator, Button, Component, EditBox, Label, Layout, Node, Sprite, SpriteFrame, Toggle } from 'cc';
const { ccclass, property } = _decorator;

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

    @property(Node)
    private autoNode: Node = null;
    
    @property(Node)
    private autoBetPanel: Node = null;

    @property(Node)
    private betAmountBtnParent: Node = null;

    @property(Layout)
    private manualAutoBtnLayout: Layout = null;

    @property(SpriteFrame)
    private sprNormal: SpriteFrame = null;

    @property(SpriteFrame)
    private sprPressed: SpriteFrame = null;

    @property(EditBox)
    private editBetAmt: EditBox = null;

    @property(EditBox)
    private editAutoBet: EditBox = null;

    protected onLoad(): void {
        this.btnManual.node.on(Button.EventType.CLICK, this.onClickedBtnManual, this);
        this.btnAuto.node.on(Button.EventType.CLICK, this.onClickedBtnAuto, this);
        this.btn2x.node.on(Button.EventType.CLICK, this.onClickedBtn2x, this);
        this.btnHalf.node.on(Button.EventType.CLICK, this.onClickedBtnHalf, this);
        this.btnPlusBet.node.on(Button.EventType.CLICK, this.onClickedBtnPlusBet, this);
        this.btnMinusBet.node.on(Button.EventType.CLICK, this.onClickedBtnMinusBet, this);
        this.btnAutoBet.node.on(Button.EventType.CLICK, this.onClickedBtnAutoBet, this);
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
            this.autoBetPanel.active = true;
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

}


