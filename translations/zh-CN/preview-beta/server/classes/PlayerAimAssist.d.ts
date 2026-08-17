/**
 * 与玩家瞄准辅助相关的 API 容器。
 */
export class PlayerAimAssist {
    private constructor();
    /**
     * @remarks
     * 玩家当前激活的瞄准辅助设置，如果未激活则为 undefined。
     *
     */
    readonly settings?: PlayerAimAssistSettings;
    /**
     * @remarks
     * 设置玩家的瞄准辅助设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param settings
     * 要为玩家激活的瞄准辅助设置，如果为 undefined 则禁用瞄准辅助。
     * @throws 此函数可能抛出错误。
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