/**
 * 对存在于world.aimAssist注册表中的瞄准辅助类别的句柄。
 */
export class AimAssistCategory {
    private constructor();
    /**
     * @remarks
     * 用于未在getBlockPriorities中找到的方块类型的默认目标优先级。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * 用于未在getEntityPriorities中找到的实体类型的默认目标优先级。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly defaultEntityPriority: number;
    /**
     * @remarks
     * 与该类别关联的唯一标识符。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 获取用于方块目标的优先级设置。
     *
     * @returns
     * 记录方块ID到其优先级设置的映射。数字越大优先级越高。
     * @throws 此函数可能抛出错误。
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块目标的优先级设置。
     *
     * @returns
     * 记录方块标签到其优先级设置的映射。数字越大优先级越高。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体目标的优先级设置。
     *
     * @returns
     * 记录实体ID到其优先级设置的映射。数字越大优先级越高。
     * @throws 此函数可能抛出错误。
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体目标的优先级设置。
     *
     * @returns
     * 将实体类型家族映射到其优先级设置，以Record格式返回。数字越大优先级越高。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
}