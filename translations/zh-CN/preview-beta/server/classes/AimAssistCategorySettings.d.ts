export class AimAssistCategorySettings {
    /**
     * @remarks
     * 可选。用于未通过 setBlockPriorities 提供的方块类型的默认瞄准优先级。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultBlockPriority: number;
    /**
     * @remarks
     * 可选。用于未通过 setEntityPriorities 提供的实体类型的默认瞄准优先级。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultEntityPriority: number;
    /**
     * @remarks
     * 用于注册类别的唯一 ID。必须具有命名空间。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 构造函数，接受一个唯一 ID，用于关联创建的 AimAssistCategory。必须具有命名空间。
     *
     */
    constructor(identifier: string);
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     *
     * @returns
     * 记录，将方块 ID 映射到其优先级设置。数字越大优先级越高。
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     *
     * @returns
     * 记录，将方块标签映射到其优先级设置。数字越大优先级越高。
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     *
     * @returns
     * 记录，将实体 ID 映射到其优先级设置。数字越大优先级越高。
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     *
     * @returns
     * 将实体类型家族映射到其优先级设置的记录。数字越大优先级越高。
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
    /**
     * @remarks
     * 设置用于方块瞄准的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockPriorities
     * 记录，将方块 ID 映射到其优先级设置。数字越大优先级越高。
     */
    setBlockPriorities(
        blockPriorities: Record<keyof typeof minecraftvanilladata.MinecraftBlockTypes | string, number>,
    ): void;
    /**
     * @remarks
     * 设置用于方块瞄准的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockTagPriorities
     * 记录，将方块标签映射到其优先级设置的记录。数字越大优先级越高。
     */
    setBlockTagPriorities(blockTagPriorities: Record<string, number>): void;
    /**
     * @remarks
     * 设置用于实体瞄准的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param entityPriorities
     * 记录，将实体 ID 映射到其优先级设置。数字越大优先级越高。
     */
    setEntityPriorities(
        entityPriorities: Record<keyof typeof minecraftvanilladata.MinecraftEntityTypes | string, number>,
    ): void;
    /**
     * @remarks
     * 设置用于实体瞄准的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param entityTypeFamilyPriorities
     * 记录，将实体类型家族映射到其优先级设置的记录。数字越大优先级越高。
     */
    setEntityTypeFamilyPriorities(entityTypeFamilyPriorities: Record<string, number>): void;
}