/**
 * 所有受支持的输入按钮。可通过 {@link InputInfo.getButtonState} 与 {@link Player.inputInfo} 配合使用，
 * 或通过 {@link PlayerButtonInputAfterEvent} 与 {@link WorldAfterEvents.playerButtonInput} 配合使用。
 */
export enum InputButton {
    /**
     * @remarks
     * 这映射到控制器、键盘和触摸界面上的“跳跃”按钮。
     *
     */
    Jump = 'Jump',
    /**
     * @remarks
     * 这映射到控制器、键盘和触摸界面上的“潜行”按钮。默认情况下，在键盘上为 shift，在 Xbox 控制器上为 B。
     * 在触摸界面上，此按钮只会被按下 1 tick 或更短时间，然后即使玩家手指未松开也会立即释放。
     * 下马或离开船不会发送潜行按钮更改事件。
     *
     */
    Sneak = 'Sneak',
}