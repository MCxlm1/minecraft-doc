/**
 * 对存在于 world.aimAssist 注册表中的瞄准辅助类别的句柄。
 */
export class AimAssistCategory {
    private constructor();
    /**
     * @remarks
     * 默认用于在 getBlockPriorities 中未找到的方块类型的瞄准优先级。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * 默认用于在 getEntityPriorities 中未找到的实体类型的瞄准优先级。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly defaultEntityPriority: number;
    /**
     * @remarks
     * 与此类别关联的唯一标识符。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     *
     * @returns
     * 返回一个记录，将方块 ID 映射到其优先级设置。数字越大，优先级越高。
     * @throws 此函数可能抛出错误。
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     *
     * @returns
     * 返回一个记录，将方块标签映射到其优先级设置。数字越大，优先级越高。
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
     * 返回一个记录，将实体 ID 映射到其优先级设置。数字越大，优先级越高。
     * @throws 此函数可能抛出错误。
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     *
     * @returns
     * 将实体类型族映射到其在 Record 中的优先级设置。数字越大，优先级越高。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
}