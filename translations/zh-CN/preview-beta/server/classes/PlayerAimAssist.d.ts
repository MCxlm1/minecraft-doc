/**
 * 与玩家瞄准辅助相关的 API 容器。
 */
export class PlayerAimAssist {
    private constructor();
    /**
     * @remarks
     * 玩家当前活跃的瞄准辅助设置，如果未激活则为 undefined。
     *
     */
    readonly settings?: PlayerAimAssistSettings;
    /**
     * @remarks
     * 设置玩家的瞄准辅助设置。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param settings
     * 要激活的玩家瞄准辅助设置，如果未定义则禁用瞄准辅助。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link NamespaceNameError}
     */
    set(settings?: PlayerAimAssistSettings): void;
}