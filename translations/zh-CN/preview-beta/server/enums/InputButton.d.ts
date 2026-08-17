/**
 * 所有支持的输入按钮。通过 {@link Player.inputInfo} 使用 {@link InputInfo.getButtonState}，
 * 或通过 {@link WorldAfterEvents.playerButtonInput} 使用 {@link PlayerButtonInputAfterEvent}。
 */
export enum InputButton {
    /**
     * @remarks
     * 此按钮映射到控制器、键盘和触摸界面上的 'Jump' 按钮。
     *
     */
    Jump = 'Jump',
    /**
     * @remarks
     * 此按钮映射到控制器、键盘和触摸界面上的 'Sneak' 按钮。默认情况下，键盘上是 shift 键，Xbox 控制器上是 B 键。
     * 在触摸界面上，此按钮只会被按下 1 tick 或更短时间，然后会立即释放，即使用户一直按住手指。
     * 下马或离开船不会发送 'Sneak' 按钮变化事件。
     *
     */
    Sneak = 'Sneak',
}