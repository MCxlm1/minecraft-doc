/**
 * 所有受支持的不同输入按钮。可与
 * {@link InputInfo.getButtonState}（通过 {@link
 * Player.inputInfo}）或 {@link PlayerButtonInputAfterEvent}（通过
 * {@link WorldAfterEvents.playerButtonInput}）一起使用。
 */
export enum InputButton {
    /**
     * @remarks
     * 此按钮映射到控制器、键盘和触摸界面上的“跳跃”按钮。
     *
     */
    Jump = 'Jump',
    /**
     * @remarks
     * 此按钮映射到控制器、键盘和触摸界面上的“潜行”按钮。默认情况下，在键盘上为 Shift 键，
     * 在 Xbox 控制器上为 B 键。在触摸界面上，此按钮仅会按下 1 刻或更短时间，然后立即释放，
     * 即使玩家按住手指。从马背上下来或退出船不会发送潜行按钮变化事件。
     *
     */
    Sneak = 'Sneak',
}