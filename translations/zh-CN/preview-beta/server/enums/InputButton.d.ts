/**
 * 所有支持的输入按钮。通过{@link Player.inputInfo}使用{@link InputInfo.getButtonState}，
 * 或通过{@link WorldAfterEvents.playerButtonInput}使用{@link PlayerButtonInputAfterEvent}。
 */
export enum InputButton {
    /**
     * @remarks
     * 这映射到控制器、键盘和触摸界面的“跳跃”按钮。
     *
     */
    Jump = 'Jump',
    /**
     * @remarks
     * 这映射到控制器、键盘和触摸界面的“潜行”按钮。默认情况下，在键盘上是Shift键，
     * 在Xbox控制器上是B键。在触摸界面上，此按钮只会被按下1刻或更短时间，
     * 然后会立即释放，即使用户按住手指不放。下马或离开船不会发送潜行按钮变化事件。
     *
     */
    Sneak = 'Sneak',
}