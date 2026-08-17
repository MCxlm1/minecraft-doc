/**
 * 所有支持的输入按钮。与 {@link InputInfo.getButtonState} 通过 {@link
 * Player.inputInfo} 或 {@link PlayerButtonInputAfterEvent} 通过
 * {@link WorldAfterEvents.playerButtonInput} 一起使用
 */
export enum InputButton {
    /**
     * @remarks
     * 此映射到控制器、键盘和触摸界面上的'跳跃'按钮。
     *
     */
    Jump = 'Jump',
    /**
     * @remarks
     * 此映射到控制器、键盘和触摸界面上的'潜行'按钮。默认情况下，在键盘上是shift键，在Xbox控制器上是B键。在触摸界面上，它只会被按下1 tick或更短时间，然后立即释放，即使用户按住手指不放。下马或离开船不会发送潜行按钮更改事件。
     *
     */
    Sneak = 'Sneak',
}