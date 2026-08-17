/**
 * 用于 AimAssistRegistry.addPreset 创建 AimAssistPreset 的设置。
 */
export class AimAssistPresetSettings {
    /**
     * @remarks
     * 可选。默认的瞄准辅助类别ID，用于未提供给 setItemSettings 的物品。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手的瞄准辅助类别ID。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    handSettings?: string;
    /**
     * @remarks
     * 用于注册预设的唯一ID。必须包含命名空间。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 构造函数，接受一个唯一ID与创建的 AimAssistPreset 关联。必须包含命名空间。
     *
     * @param identifier - 用于关联预设的唯一ID。必须包含命名空间。
     */
    constructor(identifier: string);
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块标签列表。
     *
     * @returns
     * 方块标签的数组。
     */
    getExcludedBlockTagTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块ID列表。
     *
     * @returns
     * 方块ID的数组。
     */
    getExcludedBlockTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体ID列表。
     *
     * @returns
     * 实体ID的数组。
     */
    getExcludedEntityTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体类型家族列表。
     *
     * @returns
     * 实体类型家族的数组。
     */
    getExcludedEntityTypeFamilyTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取每个物品的瞄准辅助类别ID。
     *
     * @returns
     * 映射物品ID到瞄准辅助类别ID的记录。
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * 获取手持时将瞄准液体方块进行瞄准辅助的物品ID列表。
     *
     * @returns
     * 物品ID的数组。
     */
    getLiquidTargetingItems(): string[] | undefined;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的方块标签列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 方块标签的数组。
     */
    setExcludedBlockTagTargets(targets?: string[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的方块ID列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 方块ID的数组。
     */
    setExcludedBlockTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftBlockTypes | string)[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的实体ID列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 实体ID的数组。
     */
    setExcludedEntityTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftEntityTypes | string)[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的实体类型家族列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 实体类型家族的数组。
     */
    setExcludedEntityTypeFamilyTargets(targets?: string[]): void;
    /**
     * @remarks
     * 设置每个物品的瞄准辅助类别ID。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param itemSettings
     * 映射物品ID到瞄准辅助类别ID的记录。类别ID必须包含命名空间。
     */
    setItemSettings(itemSettings: Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>): void;
    /**
     * @remarks
     * 设置手持时将瞄准液体方块进行瞄准辅助的物品ID列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param items
     * 物品ID的数组。
     */
    setLiquidTargetingItems(items?: (keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]): void;
}