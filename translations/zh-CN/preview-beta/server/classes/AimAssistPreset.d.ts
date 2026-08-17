/**
 * 对 world.aimAssist 注册表中存在的瞄准辅助预设的句柄。
 */
export class AimAssistPreset {
    private constructor();
    /**
     * @remarks
     * 可选。默认的瞄准辅助类别 ID，用于未提供给 setItemSettings 的物品。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手的瞄准辅助类别 ID。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly handSettings?: string;
    /**
     * @remarks
     * 与此预设关联的唯一 ID。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块标签列表。
     *
     * @returns
     * 方块标签数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getExcludedBlockTagTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块 ID 列表。
     *
     * @returns
     * 方块 ID 数组。
     * @throws 此函数可能抛出错误。
     */
    getExcludedBlockTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体 ID 列表。
     *
     * @returns
     * 实体 ID 数组。
     * @throws 此函数可能抛出错误。
     */
    getExcludedEntityTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体类型系列列表。
     *
     * @returns
     * 实体类型系列数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getExcludedEntityTypeFamilyTargets(): string[];
    /**
     * @remarks
     * 获取每个物品的瞄准辅助类别 ID。
     *
     * @returns
     * 将物品 ID 映射到瞄准辅助类别 ID 的映射表。
     * @throws 此函数可能抛出错误。
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * 获取手持时将瞄准液体方块的物品 ID 列表。
     *
     * @returns
     * 物品 ID 数组。
     * @throws 此函数可能抛出错误。
     */
    getLiquidTargetingItems(): string[];
}