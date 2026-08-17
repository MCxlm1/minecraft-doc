/**
 * 与玩家瞄具辅助相关的 API 容器。
 */
export class PlayerAimAssist {
    private constructor();
    /**
     * @remarks
     * 玩家当前活跃的瞄具辅助设置，如果未激活则为 undefined。
     *
     */
    readonly settings?: PlayerAimAssistSettings;
    /**
     * @remarks
     * 设置玩家的瞄具辅助设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param settings
     * 要为玩家激活的瞄具辅助设置，如果未定义则禁用瞄具辅助。
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