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
     * 玩家触摸输入是否仅影响快捷栏。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * @param button 要查询状态的按钮。
     * @returns 指定按钮的当前状态。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * @returns 当前移动向量。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}