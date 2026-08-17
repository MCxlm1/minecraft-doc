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
     * 玩家触摸输入是否仅影响触摸栏。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * 获取指定按钮的状态。
     *
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
     * 获取移动向量。
     *
     * @returns 移动向量。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}