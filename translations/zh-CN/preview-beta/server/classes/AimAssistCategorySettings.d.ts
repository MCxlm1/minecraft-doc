/**
 * 用于通过 AimAssistRegistry.addCategory 创建 AimAssistCategory 的设置。
 */
export class AimAssistCategorySettings {
    /**
     * @remarks
     * 可选。用于未提供给 setBlockPriorities 的方块类型的默认目标优先级。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultBlockPriority: number;
    /**
     * @remarks
     * 可选。用于未提供给 setEntityPriorities 的实体类型的默认目标优先级。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultEntityPriority: number;
    /**
     * @remarks
     * 用于注册类别的唯一 Id。必须包含命名空间。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 构造函数，接受一个唯一 Id 以关联所创建的 AimAssistCategory。必须包含命名空间。
     *
     */
    constructor(identifier: string);
    /**
     * @remarks
     * 获取用于方块目标的优先级设置。
     *
     * @returns
     * 记录方块 Id 与其优先级设置的映射。数值越大优先级越高。
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块目标的优先级设置。
     *
     * @returns
     * 记录方块标签与其优先级设置的映射。数值越大优先级越高。
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体目标的优先级设置。
     *
     * @returns
     * 记录实体 Id 与其优先级设置的映射。数值越大优先级越高。
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体目标的优先级设置。
     *
     * @returns
     * 在 Record 中映射实体类型族系到其优先级设置。数值越大优先级越高。
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
    /**
     * @remarks
     * 设置用于方块目标的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockPriorities
     * 记录方块 Id 与其优先级设置的映射。数值越大优先级越高。
     */
    setBlockPriorities(
        blockPriorities: Record<keyof typeof minecraftvanilladata.MinecraftBlockTypes | string, number>,
    ): void;
    /**
     * @remarks
     * 设置用于方块目标的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockTagPriorities
     * 记录方块标签与其优先级设置的映射。数值越大优先级越高。
     */
    setBlockTagPriorities(blockTagPriorities: Record<string, number>): void;
    /**
     * @remarks
     * 设置用于实体目标的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param entityPriorities
     * 记录实体 Id 与其优先级设置的映射。数值越大优先级越高。
     */
    setEntityPriorities(
        entityPriorities: Record<keyof typeof minecraftvanilladata.MinecraftEntityTypes | string, number>,
    ): void;
    /**
     * @remarks
     * 设置用于实体目标的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param entityTypeFamilyPriorities
     * 在 Record 中映射实体类型族系到其优先级设置。数值越大优先级越高。
     */
    setEntityTypeFamilyPriorities(entityTypeFamilyPriorities: Record<string, number>): void;
}