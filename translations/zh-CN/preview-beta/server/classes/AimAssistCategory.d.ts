/**
 * 存在于 world.aimAssist 注册表中的瞄准辅助类别的句柄。
 */
export class AimAssistCategory {
    private constructor();
    /**
     * @remarks
     * 用于未在 getBlockPriorities 中找到的方块类型的默认选择优先级。
     *
     * @throws
     * 使用此属性时可能抛出错误。
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * 用于未在 getEntityPriorities 中找到的实体类型的默认选择优先级。
     *
     * @throws
     * 使用此属性时可能抛出错误。
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
     * 获取用于方块定位的优先级设置。
     *
     * @returns
     * 将方块ID映射到其优先级设置的记录。数字越大，优先级越高。
     * @throws
     * 此函数可能抛出错误。
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块标签定位的优先级设置。
     *
     * @returns
     * 将方块标签映射到其优先级设置的记录。数字越大，优先级越高。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体定位的优先级设置。
     *
     * @returns
     * 将实体ID映射到其优先级设置的记录。数字越大，优先级越高。
     * @throws
     * 此函数可能抛出错误。
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体类型家族定位的优先级设置。
     *
     * @returns
     * 将实体类型家族映射到其优先级设置的记录。数字越大，优先级越高。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
}