import { _decorator, Component, instantiate, Node, Prefab, tween, UIOpacity, Vec3, EventTarget, systemEvent } from 'cc';
import { UIController, countdownEventTarget } from './UIController';
import { Rocket, rocketEventTarget } from './Model/Rocket';
import { GameStage } from './GameStages';
import { redeemEventTarget, betAmountEventTarget } from './BetButtonControl';

const { ccclass, property } = _decorator;

const gameStageEventTarget = new EventTarget();

@ccclass('GameController')
export class GameController extends Component {

    @property(Node)
    rocketParent: Node = null;

    rocket: Rocket = null;

    private _winningNum: number = 0;

    public currentStage: GameStage = GameStage.INITIALIZING;

    private uiController: UIController = null;

    private _winningNumbers: number[] = [];

    private _betAmount: number = 0;

    private _userWallet: number = 10000;

    private userRedeemAmount: number = 0;

    protected onLoad(): void {
        rocketEventTarget.on('isLaunchingChanged', this.onIsLaunchingChanged, this);
        rocketEventTarget.on('isDepartingChanged', this.onIsDepartingChanged, this);
        countdownEventTarget.on('countdownIsOne', this.onCountdownIsOne, this);
        countdownEventTarget.on('Exploded', this.onExploded, this);
        rocketEventTarget.on('departingFinished', this.onDepartingFinished, this);
        rocketEventTarget.on('isFlying', this.onIsFlying, this);
        redeemEventTarget.on('redeem', this.onRedeem, this);
        betAmountEventTarget.on('betAmount', this.onBetAmount, this);
    }

    start(): void {  
        this.uiController = this.node.getComponent(UIController);
        this.rocket = this.rocketParent.getComponent(Rocket);
        this.setGameStage(GameStage.INITIALIZING);
    }

    private onIsLaunchingChanged(isLaunching: boolean): void {
        console.log('isLaunching changed:', isLaunching);
    }

    private onIsDepartingChanged(isDeparting: boolean): void {
        console.log('isDeparting changed:', isDeparting);
    }

    private onCountdownIsOne(): void {
        console.log('Countdown reached 1');
        // Add your logic here to handle the countdown reaching 2
        this.rocket.startDepartingUp();
    }

    private onExploded(): void {
        console.log('Exploded');
        this.setGameStage(GameStage.EXPLODING);
        this.rocket.startExplodeAction();
        this.uiController.zoomInExplodeLBL();

        setTimeout(() => {
            this.setGameStage(GameStage.INITIALIZING);
        }, 3000);
    }

    private onDepartingFinished(isFinished: boolean): void {
        console.log('Departing finished');
        if (isFinished) {
            this.setGameStage(GameStage.IN_FLIGHT);
        }
    }

    private onIsFlying(isFlying: boolean): void {
        if (isFlying) {
            this.winningNum = this.generateWinningNumber();
            this.storeWinningNumber(this.winningNum);
            this.uiController.countUpToWinningNum(this.winningNum);
        }
    }

    private storeWinningNumber(number: number): void {
        if (this.winningNumbers.length >= 20) {
            this.winningNumbers.shift(); // Remove the oldest number
        }
        this.winningNumbers.push(number);
        console.log('Winning numbers:', this.winningNumbers);
    }

    private onRedeem(redeem: boolean, winAmount: string): void {
        if(redeem){
            this.userRedeemAmount = parseFloat(winAmount);
            this.uiController.zoomInWinningPanel(this.userRedeemAmount);
            this.userWallet += (this.betAmount * this.userRedeemAmount);
            this.uiController.updateUserWallet(this.userWallet.toString());
        }
    }

    private onBetAmount(betAmount: string): void {
        this.betAmount = parseFloat(betAmount);
        this.userWallet -= this.betAmount;
        this.uiController.updateUserWallet(this.userWallet.toString());
    }

    private setGameStage(stage: GameStage): void {
        this.currentStage = stage;
        console.log('Game stage changed to:', GameStage[stage]);
        
        // Emit the stage change event
        gameStageEventTarget.emit('stageChanged', stage);

        // Handle logic for each stage
        switch (stage) {
            case GameStage.INITIALIZING:
                this.initializeGame();
                break;
            case GameStage.READY:
                this.prepareForLaunch();
                break;
            case GameStage.LAUNCHING:
                this.launchRocket();
                break;
            case GameStage.IN_FLIGHT:
                this.handleInFlight();
                break;
            case GameStage.EXPLODING:
                this.handleExploding();
                break;
            case GameStage.COMPLETED:
                this.completeGame();
                break;
        }
    }

    private initializeGame(): void {
        // Logic for initializing the game
        this.uiController.initialGameStageUI();
        this.rocket.node.active = true;
        this.rocket.startVibrationEffect();
        setTimeout(() => {
            this.setGameStage(GameStage.LAUNCHING);
        }, 1500);
    }

    private prepareForLaunch(): void {
        // Logic for preparing the game for launch
        //this.uiController.readyGameStageUI();
    }

    private launchRocket(): void {
        // Logic for launching the rocket
        this.uiController.launchingGameStageUI();
    }

    private handleInFlight(): void {
        // Logic for handling in-flight stage
        this.uiController.inFlightGameStageUI();
        this.rocket.startFlyingAction();
    }

    private handleExploding(): void {
        // Logic for handling landing stage
        this.uiController.showHistoryS_Panel(this.winningNum);
    }

    private completeGame(): void {
        // Logic for completing the game
    }
    
    generateWinningNumber(): number {
        let min = 1;
        let max = 2;
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    }

    get winningNum(): number {
        return this._winningNum;
    }

    set winningNum(value: number) {
        this._winningNum = value;
        console.log('Winning number set to:', value);
    }

    get userWallet(): number {
        return this._userWallet;
    }

    set userWallet(value: number) {
        this._userWallet = value;
        console.log('User wallet set to:', value);
    }

    get betAmount(): number {
        return this._betAmount;
    }

    set betAmount(value: number) {
        this._betAmount = value;
        console.log('Bet amount set to:', value);
    }

    get winningNumbers(): number[] {
        return this._winningNumbers;
    }

    set winningNumbers(numbers: number[]) {
        this._winningNumbers = numbers;
        console.log('Winning numbers set to:', numbers);
    }


}

export { gameStageEventTarget };
