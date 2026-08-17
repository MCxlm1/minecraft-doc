/**
 * 包含客户端实例的输入信息。
 */
export class InputInfo {
    private constructor();
    /**
     * @remarks
     * 玩家最后使用的输入模式。
     *
     * @throws 当此属性被访问时可能抛出错误，例如实体无效或发生引擎错误。
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
     * @throws 当此属性被访问时可能抛出错误，例如实体无效。
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * 获取指定输入按钮的状态。
     *
     * @param button 要查询状态的输入按钮。
     * @returns 该按钮的当前状态。
     * @throws 当函数执行时可能抛出错误，例如实体无效或发生引擎错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * 获取当前的移动向量。
     *
     * @returns 表示移动输入方向的二维向量。
     * @throws 当函数执行时可能抛出错误，例如实体无效。
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}