/**
 * 包含客户端实例的输入信息。
 */
export class InputInfo {
    private constructor();
    /**
     * @remarks
     * 玩家上次使用的输入模式。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly lastInputModeUsed: InputMode;
    /**
     * @remarks
     * 玩家的触摸输入是否仅影响快捷栏。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * @param button - 输入按钮。
     * @returns 按钮状态。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * @returns 返回一个二维向量，表示移动方向。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}