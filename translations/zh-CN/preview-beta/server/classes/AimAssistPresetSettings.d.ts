/**
 * 用于通过 AimAssistRegistry.addPreset 创建 AimAssistPreset 的设置。
 */
export class AimAssistPresetSettings {
    /**
     * @remarks
     * 可选。默认的辅助瞄准类别 ID，用于未通过 setItemSettings 提供的物品。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手的辅助瞄准类别 ID。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    handSettings?: string;
    /**
     * @remarks
     * 用于注册预设的唯一 ID。必须包含命名空间。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 构造函数，接受一个唯一 ID 以与创建的 AimAssistPreset 关联。必须包含命名空间。
     *
     * @param identifier
     * 用于注册预设的唯一 ID。必须包含命名空间。
     */
    constructor(identifier: string);
    /**
     * @remarks
     * 获取要从辅助瞄准目标中排除的方块标签列表。
     *
     * @returns
     * 方块标签数组。
     */
    getExcludedBlockTagTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从辅助瞄准目标中排除的方块 ID 列表。
     *
     * @returns
     * 方块 ID 数组。
     */
    getExcludedBlockTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从辅助瞄准目标中排除的实体 ID 列表。
     *
     * @returns
     * 实体 ID 数组。
     */
    getExcludedEntityTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从辅助瞄准目标中排除的实体类型族列表。
     *
     * @returns
     * 实体类型族数组。
     */
    getExcludedEntityTypeFamilyTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取逐物品的辅助瞄准类别 ID。
     *
     * @returns
     * 将物品 ID 映射到辅助瞄准类别 ID 的记录。
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * 获取手持时将使用辅助瞄准瞄准液体方块的物品 ID 列表。
     *
     * @returns
     * 物品 ID 数组。
     */
    getLiquidTargetingItems(): string[] | undefined;
    /**
     * @remarks
     * 设置要从辅助瞄准目标中排除的方块标签列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 方块标签数组。
     */
    setExcludedBlockTagTargets(targets?: string[]): void;
    /**
     * @remarks
     * 设置要从辅助瞄准目标中排除的方块 ID 列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 方块 ID 数组。
     */
    setExcludedBlockTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftBlockTypes | string)[]): void;
    /**
     * @remarks
     * 设置要从辅助瞄准目标中排除的实体 ID 列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 实体 ID 数组。
     */
    setExcludedEntityTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftEntityTypes | string)[]): void;
    /**
     * @remarks
     * 设置要从辅助瞄准目标中排除的实体类型族列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 实体类型族数组。
     */
    setExcludedEntityTypeFamilyTargets(targets?: string[]): void;
    /**
     * @remarks
     * 设置逐物品的辅助瞄准类别 ID。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param itemSettings
     * 将物品 ID 映射到辅助瞄准类别 ID 的记录。类别 ID 必须包含命名空间。
     */
    setItemSettings(itemSettings: Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>): void;
    /**
     * @remarks
     * 设置手持时将使用辅助瞄准瞄准液体方块的物品 ID 列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param items
     * 物品 ID 数组。
     */
    setLiquidTargetingItems(items?: (keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]): void;
}