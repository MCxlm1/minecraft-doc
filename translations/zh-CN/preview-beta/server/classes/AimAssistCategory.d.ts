/**
 * 指向 world.aimAssist 注册表中存在的瞄准辅助类别的句柄。
 */
export class AimAssistCategory {
    private constructor();
    /**
     * @remarks
     * 在 getBlockPriorities 中未找到的方块类型所使用的默认瞄准优先级。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * 在 getEntityPriorities 中未找到的实体类型所使用的默认瞄准优先级。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly defaultEntityPriority: number;
    /**
     * @remarks
     * 该类别的唯一标识符。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     *
     * @returns
     * 将方块 ID 映射到其优先级设置的记录。数值越大，优先级越高。
     * @throws 此函数可能抛出错误。
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     *
     * @returns
     * 将方块标签映射到其优先级设置的记录。数值越大，优先级越高。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     *
     * @returns
     * 将实体 ID 映射到其优先级设置的记录。数值越大，优先级越高。
     * @throws 此函数可能抛出错误。
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     *
     * @returns
     * 将实体类型家族映射到其优先级设置的记录。数值越大，优先级越高。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
}