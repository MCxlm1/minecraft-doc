/**
 * 玩家按下按钮时的事件数据。
 */
export class PlayerButtonInputAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此事件所涉及的按钮。
     *
     */
    readonly button: InputButton;
    /**
     * @remarks
     * 此按钮切换到的状态。
     *
     */
    readonly newButtonState: ButtonState;
    /**
     * @remarks
     * 执行输入事件的玩家。
     *
     */
    readonly player: Player;
}