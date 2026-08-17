/**
 * 与 AimAssistRegistry.addPreset 一起使用时用于创建 AimAssistPreset 的设置。
 */
export class AimAssistPresetSettings {
    /**
     * @remarks
     * 可选。默认的瞄准辅助分类 Id，用于未在 setItemSettings 中提供的物品。
     *
     * 此属性不能在受限执行模式下编辑。
     *
     */
    defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手的瞄准辅助分类 Id。
     *
     * 此属性不能在受限执行模式下编辑。
     *
     */
    handSettings?: string;
    /**
     * @remarks
     * 用于注册预设的唯一 Id。必须带有命名空间。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 构造函数，接受一个唯一 Id 以关联所创建的 AimAssistPreset。必须带有命名空间。
     *
     */
    constructor(identifier: string);
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块标签列表。
     *
     * @returns
     * 方块标签数组。
     */
    getExcludedBlockTagTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块 Id 列表。
     *
     * @returns
     * 方块 Id 数组。
     */
    getExcludedBlockTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体 Id 列表。
     *
     * @returns
     * 实体 Id 数组。
     */
    getExcludedEntityTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体类型族列表。
     *
     * @returns
     * 实体类型族数组。
     */
    getExcludedEntityTypeFamilyTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取每个物品的瞄准辅助分类 Id。
     *
     * @returns
     * 将物品 Id 映射到瞄准辅助分类 Id 的记录。
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * 获取手持时会使用瞄准辅助瞄准液体方块的物品 Id 列表。
     *
     * @returns
     * 物品 Id 数组。
     */
    getLiquidTargetingItems(): string[] | undefined;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的方块标签列表。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param targets
     * 方块标签数组。
     */
    setExcludedBlockTagTargets(targets?: string[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的方块 Id 列表。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param targets
     * 方块 Id 数组。
     */
    setExcludedBlockTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftBlockTypes | string)[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的实体 Id 列表。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param targets
     * 实体 Id 数组。
     */
    setExcludedEntityTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftEntityTypes | string)[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的实体类型族列表。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param targets
     * 实体类型族数组。
     */
    setExcludedEntityTypeFamilyTargets(targets?: string[]): void;
    /**
     * @remarks
     * 设置每个物品的瞄准辅助分类 Id。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param itemSettings
     * 将物品 Id 映射到瞄准辅助分类 Id 的记录。分类 Id 必须带有命名空间。
     */
    setItemSettings(itemSettings: Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>): void;
    /**
     * @remarks
     * 设置手持时会使用瞄准辅助瞄准液体方块的物品 Id 列表。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param items
     * 物品 Id 数组。
     */
    setLiquidTargetingItems(items?: (keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]): void;
}