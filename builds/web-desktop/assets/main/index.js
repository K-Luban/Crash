System.register("bundle://main/_virtual/BetButtonControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameController.ts', './UIController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EventTarget, Button, Node, Layout, SpriteFrame, EditBox, Label, Sprite, Vec3, Component, gameStageEventTarget, winningNumEventTarget;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Button = module.Button;
      Node = module.Node;
      Layout = module.Layout;
      SpriteFrame = module.SpriteFrame;
      EditBox = module.EditBox;
      Label = module.Label;
      Sprite = module.Sprite;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      gameStageEventTarget = module.gameStageEventTarget;
    }, function (module) {
      winningNumEventTarget = module.winningNumEventTarget;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "94ae5IxmX9HH7tZ1piLiipG", "BetButtonControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var betAmountEventTarget = exports('betAmountEventTarget', new EventTarget());
      var redeemEventTarget = exports('redeemEventTarget', new EventTarget());
      var BetButtonControl = exports('BetButtonControl', (_dec = ccclass('BetButtonControl'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Layout), _dec14 = property(SpriteFrame), _dec15 = property(SpriteFrame), _dec16 = property(SpriteFrame), _dec17 = property(SpriteFrame), _dec18 = property(SpriteFrame), _dec19 = property(SpriteFrame), _dec20 = property(EditBox), _dec21 = property(EditBox), _dec22 = property(Label), _dec23 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BetButtonControl, _Component);
        function BetButtonControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnManual", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnAuto", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnHalf", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn2x", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnPlusBet", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnMinusBet", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnAutoBet", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnBet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoNode", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoBetPanel", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betAmountBtnParent", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "manualAutoBtnLayout", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprNormal", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprPressed", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprBet_Betting", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprBet_Cancel", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprBet_Wait", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprBet_Redeem", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editBetAmt", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "editAutoBet", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBet", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblWinAmount", _descriptor22, _assertThisInitialized(_this));
          _this.currentStage = null;
          _this.winAmount = 1.00;
          _this.isRedeemable = false;
          _this.isWait = false;
          return _this;
        }
        var _proto = BetButtonControl.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.btnManual.node.on(Button.EventType.CLICK, this.onClickedBtnManual, this);
          this.btnAuto.node.on(Button.EventType.CLICK, this.onClickedBtnAuto, this);
          this.btn2x.node.on(Button.EventType.CLICK, this.onClickedBtn2x, this);
          this.btnHalf.node.on(Button.EventType.CLICK, this.onClickedBtnHalf, this);
          this.btnPlusBet.node.on(Button.EventType.CLICK, this.onClickedBtnPlusBet, this);
          this.btnMinusBet.node.on(Button.EventType.CLICK, this.onClickedBtnMinusBet, this);
          this.btnAutoBet.node.on(Button.EventType.CLICK, this.onClickedBtnAutoBet, this);
          this.btnBet.node.on(Button.EventType.CLICK, function () {
            return _this2.onClickedBtnBet();
          }, this);

          // Listen for the stageChanged event
          gameStageEventTarget.on('stageChanged', this.onStageChanged, this);
          winningNumEventTarget.on('WinningNum', this.onWinningNumChanged, this);
        };
        _proto.start = function start() {
          this.onClickedBtnManual();
          this.betAmountBtnClicked();
        };
        _proto.onClickedBtnManual = function onClickedBtnManual() {
          this.autoNode.active = false;
          this.autoBetPanel.active = false;
          this.manualAutoBtnLayout.paddingTop = 14;
          this.manualAutoBtnLayout.spacingY = 7;
          this.btnManual.node.getComponent(Sprite).spriteFrame = this.sprPressed;
          this.btnAuto.node.getComponent(Sprite).spriteFrame = this.sprNormal;
        };
        _proto.onClickedBtnAuto = function onClickedBtnAuto() {
          this.autoNode.active = true;
          this.manualAutoBtnLayout.paddingTop = 0;
          this.manualAutoBtnLayout.spacingY = 3;
          this.btnManual.node.getComponent(Sprite).spriteFrame = this.sprNormal;
          this.btnAuto.node.getComponent(Sprite).spriteFrame = this.sprPressed;
        };
        _proto.onClickedBtn2x = function onClickedBtn2x() {
          var betAmt = this.editBetAmt.string;
          console.log(betAmt);
          if (betAmt) {
            betAmt = (parseInt(betAmt) * 2).toString();
            this.editBetAmt.string = betAmt;
          }
        };
        _proto.onClickedBtnHalf = function onClickedBtnHalf() {
          var betAmt = this.editBetAmt.string;
          if (betAmt == "1") return;
          if (betAmt) {
            betAmt = (parseInt(betAmt) / 2).toString();
            this.editBetAmt.string = betAmt;
          }
        };
        _proto.onClickedBtnPlusBet = function onClickedBtnPlusBet() {
          var autoRedeem = this.editAutoBet.string;
          var currentMultiplier = 0;
          if (autoRedeem) {
            currentMultiplier = parseFloat(autoRedeem.replace("X", ""));
          }
          currentMultiplier += 0.1;
          currentMultiplier = parseFloat(currentMultiplier.toFixed(2));
          this.editAutoBet.string = currentMultiplier.toFixed(2) + "X";
        };
        _proto.onClickedBtnMinusBet = function onClickedBtnMinusBet() {
          var autoRedeem = this.editAutoBet.string;
          var currentMultiplier = 0;
          if (autoRedeem == "1.01X") return;
          if (autoRedeem) {
            currentMultiplier = parseFloat(autoRedeem.replace("X", ""));
          }
          currentMultiplier -= 0.1;
          currentMultiplier = parseFloat(currentMultiplier.toFixed(2));
          this.editAutoBet.string = currentMultiplier.toFixed(2) + "X";
        };
        _proto.onClickedBtnAutoBet = function onClickedBtnAutoBet() {
          if (this.autoBetPanel.active) {
            this.autoBetPanel.active = false;
          } else {
            this.autoBetPanel.active = true;
          }
        };
        _proto.betAmountBtnClicked = function betAmountBtnClicked() {
          var _this3 = this;
          var _loop = function _loop() {
            var btn = _this3.betAmountBtnParent.children[i].getComponent(Button);
            btn.node.on(Button.EventType.CLICK, function () {
              _this3.editBetAmt.string = btn.node.children[0].getComponent(Label).string;
            }, _this3);
          };
          for (var i = 0; i < this.betAmountBtnParent.children.length; i++) {
            _loop();
          }
        };
        _proto.onClickedBtnBet = function onClickedBtnBet() {
          console.log(this.currentStage + " : Stage");
          if (this.currentStage == 0) {
            if (this.btnBet.node.getComponent(Sprite).spriteFrame.name == this.sprBet_Wait.name) {
              this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Cancel;
              this.lblBet.string = "撤销";
              this.lblBet.node.position = new Vec3(0, 0);
              this.lblWinAmount.node.active = false;
              this.setBetBtnGroupInteractable(true);
            } else {
              this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
              this.lblBet.string = "投注";
            }
          } else if (this.currentStage == 2) {
            if (this.btnBet.node.getComponent(Sprite).spriteFrame.name == this.sprBet_Betting.name) {
              this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Cancel;
              this.lblBet.string = "撤销";
              this.setBetBtnGroupInteractable(false);
              betAmountEventTarget.emit('betAmount', this.editBetAmt.string);
            } else {
              this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
              this.lblBet.string = "投注";
              this.setBetBtnGroupInteractable(true);
              betAmountEventTarget.emit('betAmount', -this.editBetAmt.string);
            }
          } else if (this.currentStage == 3) {
            if (this.btnBet.node.getComponent(Sprite).spriteFrame.name == this.sprBet_Betting.name) {
              this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Wait;
              this.isWait = true;
              this.lblBet.string = "撤销";
              this.lblBet.node.position = new Vec3(0, 9);
              this.lblWinAmount.node.active = true;
              this.lblWinAmount.fontSize = 12;
              this.lblWinAmount.string = "请等待下一局";
              this.setBetBtnGroupInteractable(false);
            } else if (this.btnBet.node.getComponent(Sprite).spriteFrame.name == this.sprBet_Wait.name) {
              this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
              this.lblBet.string = "投注";
              this.lblBet.node.position = new Vec3(0, 0);
              this.lblWinAmount.node.active = false;
              this.setBetBtnGroupInteractable(true);
            } else if (this.btnBet.node.getComponent(Sprite).spriteFrame.name == this.sprBet_Redeem.name) {
              if (this.isRedeemable) {
                this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
                this.lblBet.string = "投注";
                this.lblBet.node.position = new Vec3(0, 0);
                this.lblWinAmount.node.active = false;
                this.setBetBtnGroupInteractable(true);
                this.isRedeemable = false;
                redeemEventTarget.emit('redeem', true, this.lblWinAmount.string);
              }
            }
          }
        };
        _proto.onStageChanged = function onStageChanged(stage) {
          this.currentStage = stage;
          if (this.currentStage == 3) {
            if (this.btnBet.node.getComponent(Sprite).spriteFrame == this.sprBet_Cancel) {
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
          } else if (this.currentStage == 4) {
            if (this.btnBet.node.getComponent(Sprite).spriteFrame == this.sprBet_Redeem) {
              this.lblWinAmount.node.active = false;
              this.lblBet.node.position = new Vec3(0, 0);
              this.setBetBtnGroupInteractable(true);
              this.btnBet.node.getComponent(Sprite).spriteFrame = this.sprBet_Betting;
              this.lblBet.string = "投注";
            }
          }
        };
        _proto.onWinningNumChanged = function onWinningNumChanged(winningNum) {
          if (this.isWait == false) {
            this.lblWinAmount.string = winningNum.toString();
          }
        };
        _proto.setBetBtnGroupInteractable = function setBetBtnGroupInteractable(interactable) {
          for (var i = 0; i < this.betAmountBtnParent.children.length; i++) {
            var btn = this.betAmountBtnParent.children[i].getComponent(Button);
            btn.interactable = interactable;
          }
          this.btnManual.interactable = interactable;
          this.btnAuto.interactable = interactable;
          this.btnPlusBet.interactable = interactable;
          this.btnMinusBet.interactable = interactable;
          this.btnAutoBet.interactable = interactable;
          this.btnHalf.interactable = interactable;
          this.btn2x.interactable = interactable;
          this.editBetAmt.enabled = interactable;
          this.editAutoBet.enabled = interactable;
        };
        return BetButtonControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnManual", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnAuto", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnHalf", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn2x", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnPlusBet", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnMinusBet", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnAutoBet", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnBet", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "autoNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "autoBetPanel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "betAmountBtnParent", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "manualAutoBtnLayout", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sprNormal", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "sprPressed", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "sprBet_Betting", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "sprBet_Cancel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "sprBet_Wait", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "sprBet_Redeem", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "editBetAmt", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "editAutoBet", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "lblBet", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "lblWinAmount", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("bundle://main/_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Canvas, UITransform, instantiate, Label, Color, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      Color = module.Color;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("bundle://main/_virtual/GameController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIController.ts', './Rocket.ts', './GameStages.ts', './BetButtonControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EventTarget, Node, Component, countdownEventTarget, UIController, rocketEventTarget, Rocket, GameStage, redeemEventTarget, betAmountEventTarget;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      countdownEventTarget = module.countdownEventTarget;
      UIController = module.UIController;
    }, function (module) {
      rocketEventTarget = module.rocketEventTarget;
      Rocket = module.Rocket;
    }, function (module) {
      GameStage = module.GameStage;
    }, function (module) {
      redeemEventTarget = module.redeemEventTarget;
      betAmountEventTarget = module.betAmountEventTarget;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a407bnzrBBEB7pIkG7VeBIl", "GameController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var gameStageEventTarget = exports('gameStageEventTarget', new EventTarget());
      var GameController = exports('GameController', (_dec = ccclass('GameController'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameController, _Component);
        function GameController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rocketParent", _descriptor, _assertThisInitialized(_this));
          _this.rocket = null;
          _this._winningNum = 0;
          _this.currentStage = GameStage.INITIALIZING;
          _this.uiController = null;
          _this._winningNumbers = [];
          _this._betAmount = 0;
          _this._userWallet = 10000;
          _this.userRedeemAmount = 0;
          return _this;
        }
        var _proto = GameController.prototype;
        _proto.onLoad = function onLoad() {
          rocketEventTarget.on('isLaunchingChanged', this.onIsLaunchingChanged, this);
          rocketEventTarget.on('isDepartingChanged', this.onIsDepartingChanged, this);
          countdownEventTarget.on('countdownIsOne', this.onCountdownIsOne, this);
          countdownEventTarget.on('Exploded', this.onExploded, this);
          rocketEventTarget.on('departingFinished', this.onDepartingFinished, this);
          rocketEventTarget.on('isFlying', this.onIsFlying, this);
          redeemEventTarget.on('redeem', this.onRedeem, this);
          betAmountEventTarget.on('betAmount', this.onBetAmount, this);
        };
        _proto.start = function start() {
          this.uiController = this.node.getComponent(UIController);
          this.rocket = this.rocketParent.getComponent(Rocket);
          this.setGameStage(GameStage.INITIALIZING);
        };
        _proto.onIsLaunchingChanged = function onIsLaunchingChanged(isLaunching) {
          console.log('isLaunching changed:', isLaunching);
        };
        _proto.onIsDepartingChanged = function onIsDepartingChanged(isDeparting) {
          console.log('isDeparting changed:', isDeparting);
        };
        _proto.onCountdownIsOne = function onCountdownIsOne() {
          console.log('Countdown reached 1');
          // Add your logic here to handle the countdown reaching 2
          this.rocket.startDepartingUp();
        };
        _proto.onExploded = function onExploded() {
          var _this2 = this;
          console.log('Exploded');
          this.setGameStage(GameStage.EXPLODING);
          this.rocket.startExplodeAction();
          this.uiController.zoomInExplodeLBL();
          setTimeout(function () {
            _this2.setGameStage(GameStage.INITIALIZING);
          }, 3000);
        };
        _proto.onDepartingFinished = function onDepartingFinished(isFinished) {
          console.log('Departing finished');
          if (isFinished) {
            this.setGameStage(GameStage.IN_FLIGHT);
          }
        };
        _proto.onIsFlying = function onIsFlying(isFlying) {
          if (isFlying) {
            this.winningNum = this.generateWinningNumber();
            this.storeWinningNumber(this.winningNum);
            this.uiController.countUpToWinningNum(this.winningNum);
          }
        };
        _proto.storeWinningNumber = function storeWinningNumber(number) {
          if (this.winningNumbers.length >= 20) {
            this.winningNumbers.shift(); // Remove the oldest number
          }

          this.winningNumbers.push(number);
          console.log('Winning numbers:', this.winningNumbers);
        };
        _proto.onRedeem = function onRedeem(redeem, winAmount) {
          if (redeem) {
            this.userRedeemAmount = parseFloat(winAmount);
            this.uiController.zoomInWinningPanel(this.userRedeemAmount);
            this.userWallet += this.betAmount * this.userRedeemAmount;
            this.uiController.updateUserWallet(this.userWallet.toString());
          }
        };
        _proto.onBetAmount = function onBetAmount(betAmount) {
          this.betAmount = parseFloat(betAmount);
          this.userWallet -= this.betAmount;
          this.uiController.updateUserWallet(this.userWallet.toString());
        };
        _proto.setGameStage = function setGameStage(stage) {
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
        };
        _proto.initializeGame = function initializeGame() {
          var _this3 = this;
          // Logic for initializing the game
          this.uiController.initialGameStageUI();
          setTimeout(function () {
            _this3.setGameStage(GameStage.LAUNCHING);
          }, 1500);
        };
        _proto.prepareForLaunch = function prepareForLaunch() {
          // Logic for preparing the game for launch
          //this.uiController.readyGameStageUI();
        };
        _proto.launchRocket = function launchRocket() {
          // Logic for launching the rocket
          this.uiController.launchingGameStageUI();
        };
        _proto.handleInFlight = function handleInFlight() {
          // Logic for handling in-flight stage
          this.uiController.inFlightGameStageUI();
          this.rocket.startFlyingAction();
        };
        _proto.handleExploding = function handleExploding() {
          // Logic for handling landing stage
          this.uiController.showHistoryS_Panel(this.winningNum);
        };
        _proto.completeGame = function completeGame() {
          // Logic for completing the game
        };
        _proto.generateWinningNumber = function generateWinningNumber() {
          var min = 1;
          var max = 2;
          return parseFloat((Math.random() * (max - min) + min).toFixed(2));
        };
        _createClass(GameController, [{
          key: "winningNum",
          get: function get() {
            return this._winningNum;
          },
          set: function set(value) {
            this._winningNum = value;
            console.log('Winning number set to:', value);
          }
        }, {
          key: "userWallet",
          get: function get() {
            return this._userWallet;
          },
          set: function set(value) {
            this._userWallet = value;
            console.log('User wallet set to:', value);
          }
        }, {
          key: "betAmount",
          get: function get() {
            return this._betAmount;
          },
          set: function set(value) {
            this._betAmount = value;
            console.log('Bet amount set to:', value);
          }
        }, {
          key: "winningNumbers",
          get: function get() {
            return this._winningNumbers;
          },
          set: function set(numbers) {
            this._winningNumbers = numbers;
            console.log('Winning numbers set to:', numbers);
          }
        }]);
        return GameController;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "rocketParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("bundle://main/_virtual/GameStages.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b4e7dp+AnNJr6tMgaXjZ1RM", "GameStages", undefined);
      var GameStage = exports('GameStage', /*#__PURE__*/function (GameStage) {
        GameStage[GameStage["INITIALIZING"] = 0] = "INITIALIZING";
        GameStage[GameStage["READY"] = 1] = "READY";
        GameStage[GameStage["LAUNCHING"] = 2] = "LAUNCHING";
        GameStage[GameStage["IN_FLIGHT"] = 3] = "IN_FLIGHT";
        GameStage[GameStage["EXPLODING"] = 4] = "EXPLODING";
        GameStage[GameStage["COMPLETED"] = 5] = "COMPLETED";
        return GameStage;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("bundle://main/_virtual/main", ['./debug-view-runtime-control.ts', './BetButtonControl.ts', './GameController.ts', './GameStages.ts', './Rocket.ts', './UIController.ts'], function () {
  return {
    setters: [null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("bundle://main/_virtual/Rocket.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EventTarget, Node, Prefab, UIOpacity, tween, Vec3, instantiate, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Node = module.Node;
      Prefab = module.Prefab;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "c5df6wNH0xLsYXhCR2KS05f", "Rocket", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var rocketEventTarget = exports('rocketEventTarget', new EventTarget());
      var Rocket = exports('Rocket', (_dec = ccclass('Rocket'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rocket, _Component);
        function Rocket() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rocket", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rocketNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flare", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rocketParent", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particleParent", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "smokeParticle", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "explodeParticle", _descriptor9, _assertThisInitialized(_this));
          _this._isLaunching = false;
          _this._isDeparting = false;
          _this._vibrationTween = null;
          return _this;
        }
        var _proto = Rocket.prototype;
        _proto.start = function start() {
          this.startVibrationEffect();
          //this.startFloatingAction();
          //this.startFlyingAction();
          //this.startDepartingUp();
        };

        _proto.fadeInOut = function fadeInOut(node, duration) {
          var uiOpacity = node.getComponent(UIOpacity);
          if (uiOpacity) {
            tween(uiOpacity).repeatForever(tween().to(duration, {
              opacity: 255
            }, {
              easing: "sineInOut"
            }).to(duration, {
              opacity: 0
            }, {
              easing: "sineInOut"
            })).start();
          } else {
            console.warn("Node does not have a UIOpacity component:", node);
          }
        };
        _proto.startFadeAnimations = function startFadeAnimations() {
          if (this.light1 && this.light2 && this.flare) {
            this.fadeInOut(this.light1, 0.3); // 0.5 seconds for each fade in/out
            this.fadeInOut(this.light2, 0.3);
            this.fadeInOut(this.flare, 0.3);
          } else {
            console.error("One or more nodes are not initialized.");
          }
        };
        _proto.vibrateRocket = function vibrateRocket(node, intensity, duration) {
          if (!node) {
            console.error("Node is not initialized.");
            return;
          }
          var initialPosition = node.getPosition().clone();
          console.log("Starting vibration effect on node:", node.name);
          this._vibrationTween = tween(node).repeatForever(tween().by(duration, {
            position: new Vec3(intensity, 0, 0)
          }, {
            easing: "sineInOut"
          }).by(duration, {
            position: new Vec3(-intensity * 2, 0, 0)
          }, {
            easing: "sineInOut"
          }).by(duration, {
            position: new Vec3(intensity, 0, 0)
          }, {
            easing: "sineInOut"
          }).call(function () {
            node.setPosition(initialPosition);
          })).start();
          console.log("Vibration tween started.");
        };
        _proto.stopVibrationEffect = function stopVibrationEffect() {
          if (this._vibrationTween) {
            this._vibrationTween.stop();
            this._vibrationTween = null;
            console.log("Vibration tween stopped.");
          } else {
            console.warn("No vibration tween to stop.");
          }
        };
        _proto.startVibrationEffect = function startVibrationEffect() {
          if (this.rocket) {
            console.log("Rocket node is initialized:", this.rocket.name);
            this.vibrateRocket(this.rocket, 0.2, 0.1); // Adjust intensity and duration as needed
          } else {
            console.error("Rocket node is not initialized.");
          }
        };
        _proto.startDepartingUp = function startDepartingUp() {
          var _this2 = this;
          var departureOffset = 500; // Set how far up the UFO should move
          var initialPosition = this.node.getPosition();
          var targetPosition = new Vec3(initialPosition.x, initialPosition.y + departureOffset, initialPosition.z);

          // Create the tween for the upward movement and scaling down to zero
          tween(this.rocketNode).parallel(tween().call(function () {
            var smokeInstance = instantiate(_this2.smokeParticle);
            smokeInstance.setPosition(new Vec3(-25.653, -18.182, 0));
            _this2.particleParent.addChild(smokeInstance);
            var smokeInstance1 = instantiate(_this2.smokeParticle);
            smokeInstance1.setPosition(new Vec3(2.491, -17.684, 0));
            _this2.particleParent.addChild(smokeInstance1);
          }).to(2, {
            position: targetPosition
          }, {
            easing: "expoIn"
          }) // Move upwards to target position
          , tween().to(2, {
            scale: new Vec3(0, 0, 0)
          }, {
            easing: "expoIn"
          }) // Shrink to zero size
          ).call(function () {
            _this2.flare.active = false;
            _this2.particleParent.children[1].destroy();
            _this2.particleParent.children[2].destroy();
            rocketEventTarget.emit('departingFinished', true);
            _this2.stopVibrationEffect();
          }).start();
        };
        _proto.startFloatingAction = function startFloatingAction() {
          var floatHeight = 10;
          var floatDuration = 1;
          var originalPosition = this.rocketNode.position.clone();
          console.log("Starting floating action tween");
          if (this.rocketNode) {
            tween(this.rocketNode).repeatForever(tween().to(floatDuration, {
              position: new Vec3(originalPosition.x, originalPosition.y + floatHeight, originalPosition.z)
            }, {
              easing: 'sineInOut'
            }).to(floatDuration, {
              position: originalPosition
            }, {
              easing: 'sineInOut'
            })).start();
            console.log("Floating action tween started");
            this.fadeInOut(this.light1, 0.8);
            this.fadeInOut(this.light2, 0.5);
          } else {
            console.error("rocketNode is not initialized.");
          }
        };
        _proto.startFlyingAction = function startFlyingAction() {
          var _this3 = this;
          this.rocketNode.active = true;
          this.rocketNode.setPosition(-50, -200);
          this.rocketNode.setScale(0, 0);
          tween(this.rocketNode).parallel(tween().to(1, {
            position: new Vec3(0, 0)
          }, {
            easing: "expoIn"
          }), tween().to(1, {
            scale: new Vec3(1, 1)
          }, {
            easing: "expoIn"
          })).call(function () {
            rocketEventTarget.emit('isFlying', true);
            _this3.startFloatingAction();
          }).start();
        };
        _proto.startExplodeAction = function startExplodeAction() {
          var _this4 = this;
          var explodeInstance = instantiate(this.explodeParticle);
          explodeInstance.setPosition(this.rocketNode.position);
          this.node.addChild(explodeInstance);
          setTimeout(function () {
            explodeInstance.destroy();
            _this4.node.active = false;
          }, 800);
        };
        _createClass(Rocket, [{
          key: "isLaunching",
          get: function get() {
            return this._isLaunching;
          },
          set: function set(value) {
            this._isLaunching = value;
            rocketEventTarget.emit('isLaunchingChanged', value);
          }
        }, {
          key: "isDeparting",
          get: function get() {
            return this._isDeparting;
          },
          set: function set(value) {
            this._isDeparting = value;
            rocketEventTarget.emit('isDepartingChanged', value);
          }
        }]);
        return Rocket;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rocket", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rocketNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "light1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "light2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "flare", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rocketParent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "particleParent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "smokeParticle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "explodeParticle", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("bundle://main/_virtual/rollupPluginModLoBabelHelpers.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        applyDecoratedDescriptor: _applyDecoratedDescriptor,
        assertThisInitialized: _assertThisInitialized,
        createClass: _createClass,
        inheritsLoose: _inheritsLoose,
        initializerDefineProperty: _initializerDefineProperty,
        setPrototypeOf: _setPrototypeOf,
        toPrimitive: _toPrimitive,
        toPropertyKey: _toPropertyKey
      });
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = exports('setPrototypeOf', Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        });
        return _setPrototypeOf(o, p);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
    }
  };
});

System.register("bundle://main/_virtual/UIController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameController.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EventTarget, Button, Label, Node, Sprite, SpriteFrame, Prefab, UIOpacity, tween, v3, Vec3, ScrollView, instantiate, Component, GameController;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Button = module.Button;
      Label = module.Label;
      Node = module.Node;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      v3 = module.v3;
      Vec3 = module.Vec3;
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GameController = module.GameController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35;
      cclegacy._RF.push({}, "237e3NaMwRKEaRYrmSTFnhz", "UIController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var countdownEventTarget = exports('countdownEventTarget', new EventTarget());
      var winningNumEventTarget = exports('winningNumEventTarget', new EventTarget());
      var UIController = exports('UIController', (_dec = ccclass('UIController'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Sprite), _dec33 = property(SpriteFrame), _dec34 = property(SpriteFrame), _dec35 = property(Prefab), _dec36 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIController, _Component);
        function UIController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnCopyID", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnCopyBC", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnInfo", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnCloseInfo", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnHistory", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnCloseHistory", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblID", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBC", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblWinningNum", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblUserWallet", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblCountdown", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBadgeWinNum1", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lblBadgeWinNum2", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "copySuccessPanel", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "infoPanel", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "counterPanel", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipierPanel", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rocketParent", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topUI", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomUI", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "commonUI", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flareNode", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "explodeLBLNode", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winningPanel", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBadge", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBadgeFlare", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyPanel", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyItemParent", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyS_Panel", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyS_ItemParent", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgSprite", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgInitialSpriteFrame", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgFlightSpriteFrame", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyItemPrefab", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "historyS_ItemPrefab", _descriptor35, _assertThisInitialized(_this));
          _this.gameController = null;
          return _this;
        }
        var _proto = UIController.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.btnCopyID.node.on(Button.EventType.CLICK, function () {
            return _this2.copyAction(_this2.lblID);
          }, this);
          this.btnCopyBC.node.on(Button.EventType.CLICK, function () {
            return _this2.copyAction(_this2.lblBC);
          }, this);
          this.btnInfo.node.on(Button.EventType.CLICK, function () {
            return _this2.onClickedBtnInfo();
          }, this);
          this.btnCloseInfo.node.on(Button.EventType.CLICK, function () {
            return _this2.onClickedBtnCloseInfo();
          }, this);
          this.btnHistory.node.on(Button.EventType.CLICK, function () {
            return _this2.onClickedBtnHistory();
          }, this);
          this.btnCloseHistory.node.on(Button.EventType.CLICK, function () {
            return _this2.onClickedBtnCloseHistory();
          }, this);
        };
        _proto.start = function start() {
          this.gameController = this.node.getComponent(GameController);
          this.lblUserWallet.string = this.gameController.userWallet.toString();
        };
        _proto.copyAction = function copyAction(label) {
          var _this3 = this;
          var text = label.string; // need to change later from global ID
          if (text && navigator.clipboard) {
            navigator.clipboard.writeText(text).then(function () {
              _this3.copySuccessPanel.active = true;
              var uiOpacity = _this3.copySuccessPanel.getComponent(UIOpacity);
              if (uiOpacity) {
                tween(uiOpacity).to(1, {
                  opacity: 0
                }).start();
              }
              tween(_this3.copySuccessPanel).to(1, {
                position: v3(_this3.copySuccessPanel.position.x, _this3.copySuccessPanel.position.y + 100)
              }).call(function () {
                _this3.copySuccessPanel.active = false;
                _this3.copySuccessPanel.position = new Vec3(190, 388, 0);
                _this3.copySuccessPanel.getComponent(UIOpacity).opacity = 255;
              }).start();
            })["catch"](function (err) {
              console.error("Could not copy text: ", err);
            });
          } else {
            console.error("Clipboard API not available.");
          }
        };
        _proto.rocketLaunchCounter = function rocketLaunchCounter() {
          var _this4 = this;
          var countdownValue = 6;
          this.schedule(function () {
            if (countdownValue >= 0) {
              _this4.lblCountdown.string = countdownValue.toString();
            }
            if (countdownValue === 1) {
              countdownEventTarget.emit('countdownIsOne');
            }
            if (countdownValue < 0) {
              _this4.unscheduleAllCallbacks(); // Stop the countdown
              // this.lblCountdown.string = "Start!"; // Optionally show a final message
            }

            countdownValue--;
          }, 1);
        };
        _proto.countUpToWinningNum = function countUpToWinningNum(num) {
          var _this5 = this;
          var currentNum = 1.00;
          var interval = 100; // milliseconds
          var step = 0.01;
          var countUpInterval = setInterval(function () {
            if (currentNum >= num) {
              clearInterval(countUpInterval);
              console.log('Reached winning number:', num);
              countdownEventTarget.emit('Exploded');
              return;
            }
            currentNum = parseFloat((currentNum + step).toFixed(2));
            winningNumEventTarget.emit('WinningNum', currentNum);
            _this5.lblWinningNum.string = currentNum.toString() + "X";
          }, interval);
          var uiOpacity = this.flareNode.getComponent(UIOpacity);
          tween(uiOpacity).repeatForever(tween().to(0.5, {
            opacity: 255
          }, {
            easing: "sineInOut"
          }).to(0.5, {
            opacity: 0
          }, {
            easing: "sineInOut"
          })).start();
        };
        _proto.zoomInExplodeLBL = function zoomInExplodeLBL() {
          this.explodeLBLNode.active = true;
          this.explodeLBLNode.setScale(1.8, 1.8);
          tween(this.explodeLBLNode).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };
        _proto.zoomInWinningPanel = function zoomInWinningPanel(num) {
          var _this6 = this;
          this.winningPanel.active = true;
          this.winBadge.setScale(0, 0);
          tween(this.winBadge).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }).call(function () {
            _this6.lblBadgeWinNum2.string = num.toString();
            var currentNum = 0.00;
            var interval = 10; // milliseconds
            var step = 0.01;
            var countUpInterval = setInterval(function () {
              if (currentNum >= num) {
                clearInterval(countUpInterval);
                setTimeout(function () {
                  tween(_this6.winBadge).to(0.5, {
                    scale: new Vec3(0, 0, 0)
                  }).call(function () {
                    _this6.winningPanel.active = false;
                  }).start();
                }, 2000);
                return;
              }
              currentNum = parseFloat((currentNum + step).toFixed(2));
              _this6.lblBadgeWinNum1.string = currentNum.toString();
            }, interval);
            var uiOpacity = _this6.winBadgeFlare.getComponent(UIOpacity);
            tween(uiOpacity).repeatForever(tween().to(0.5, {
              opacity: 255
            }, {
              easing: "sineInOut"
            }).to(0.5, {
              opacity: 0
            }, {
              easing: "sineInOut"
            })).start();
          }).start();
        };
        _proto.showHistoryS_Panel = function showHistoryS_Panel(winNum) {
          this.historyS_Panel.getComponent(ScrollView).scrollToRight();
          if (this.historyS_ItemParent.children.length >= 20) {
            this.historyS_ItemParent.children[0].destroy();
          }
          var item = instantiate(this.historyS_ItemPrefab);
          item.parent = this.historyS_ItemParent;
          item.children[0].getComponent(Label).string = winNum.toString() + "X";
        };
        _proto.onClickedBtnHistory = function onClickedBtnHistory() {
          this.historyPanel.active = true;
          var numbers = this.gameController.winningNumbers;
          for (var i = 0; i < numbers.length; i++) {
            var item = instantiate(this.historyItemPrefab);
            item.parent = this.historyItemParent;
            item.children[0].getComponent(Label).string = numbers[i].toString() + "X";
          }
        };
        _proto.onClickedBtnCloseHistory = function onClickedBtnCloseHistory() {
          this.historyPanel.active = false;
          this.historyItemParent.children.forEach(function (child) {
            child.destroy();
          });
        };
        _proto.onClickedBtnInfo = function onClickedBtnInfo() {
          this.infoPanel.active = true;
          this.rocketLaunchCounter();
        };
        _proto.onClickedBtnCloseInfo = function onClickedBtnCloseInfo() {
          this.infoPanel.active = false;
          this.infoPanel.children[0].children[1].getComponent(ScrollView).scrollToTop();
        };
        _proto.initialGameStageUI = function initialGameStageUI() {
          this.resetAllUI();
          this.explodeLBLNode.active = false;
          this.multipierPanel.active = false;
          this.topUI.active = true;
          this.bottomUI.active = true;
          this.commonUI.active = true;
          this.rocketParent.active = true;
          this.counterPanel.active = true;
          this.lblCountdown.string = "6";
          this.bgSprite.spriteFrame = this.bgInitialSpriteFrame;
        };
        _proto.launchingGameStageUI = function launchingGameStageUI() {
          this.rocketLaunchCounter();
        };
        _proto.inFlightGameStageUI = function inFlightGameStageUI() {
          this.flareNode.active = true;
          this.rocketParent.children[0].children[1].destroy();
          this.rocketParent.children[0].children[2].destroy();
          this.counterPanel.active = false;
          this.bgSprite.spriteFrame = this.bgFlightSpriteFrame;
          this.multipierPanel.active = true;
          this.lblWinningNum.string = "1.00X";
        };
        _proto.resetAllUI = function resetAllUI() {
          this.topUI.active = false;
          this.bottomUI.active = false;
          this.commonUI.active = false;
          this.rocketParent.active = false;
        };
        _proto.updateUserWallet = function updateUserWallet(amount) {
          this.lblUserWallet.string = amount;
        };
        return UIController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnCopyID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnCopyBC", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnInfo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnCloseInfo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnHistory", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnCloseHistory", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblID", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lblBC", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lblWinningNum", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lblUserWallet", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lblCountdown", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lblBadgeWinNum1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lblBadgeWinNum2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "copySuccessPanel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "infoPanel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "counterPanel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "multipierPanel", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "rocketParent", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "topUI", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "bottomUI", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "commonUI", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "flareNode", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "explodeLBLNode", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "winningPanel", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "winBadge", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "winBadgeFlare", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "historyPanel", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "historyItemParent", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "historyS_Panel", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "historyS_ItemParent", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "bgSprite", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "bgInitialSpriteFrame", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "bgFlightSpriteFrame", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "historyItemPrefab", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "historyS_ItemPrefab", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'bundle://main/_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});