import { _decorator, Button, Component, EditBox, Layout, Node, Sprite, SpriteFrame, Toggle } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MAButtonControl')
export class MAButtonControl extends Component {
    @property(Button)
    private btnManual: Button = null;

    @property(Button)
    private btnAuto: Button = null;

    @property(Button)
    private btnHalf: Button = null;

    @property(Button)
    private btn2x: Button = null;
    
    @property(Node)
    private autoNode: Node = null;

    @property(Layout)
    private mABtnLayout: Layout = null;

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
    }

    start() {
        this.onClickedBtnManual();
    }

    onClickedBtnManual(): void {
        this.autoNode.active = false;
        this.mABtnLayout.paddingTop=14;
        this.mABtnLayout.spacingY=7;
        this.btnManual.node.getComponent(Sprite).spriteFrame = this.sprPressed;
        this.btnAuto.node.getComponent(Sprite).spriteFrame = this.sprNormal;
    }

    onClickedBtnAuto(): void {
        this.autoNode.active = true;
        this.mABtnLayout.paddingTop=0;
        this.mABtnLayout.spacingY=3;
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

}


