import { _decorator, Button, Component, Label, Node } from 'cc';
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

    protected onLoad(): void {
        this.btnCopyID.node.on(Button.EventType.CLICK, this.copyID, this);
        this.btnCopyBC.node.on(Button.EventType.CLICK, this.copyBC_ID, this);
    }

    copyID(): void {
        const text = this.lblID.string;// need to change later from global ID
        if (text && navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log("Text copied to clipboard:", text);
                })
                .catch((err) => {
                    console.error("Could not copy text: ", err);
                });
        } else {
            console.error("Clipboard API not available.");
        }
    }

    copyBC_ID(): void {
        const text = this.lblBC.string;// need to change later from global ID
        if (text && navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log("Text copied to clipboard:", text);
                })
                .catch((err) => {
                    console.error("Could not copy text: ", err);
                });
        } else {
            console.error("Clipboard API not available.");
        }
    }
}


