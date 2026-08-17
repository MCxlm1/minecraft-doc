/**
 * 表示存在于 world.aimAssist 注册表中的瞄准辅助预设的句柄。
 */
export class AimAssistPreset {
    private constructor();
    /**
     * @remarks
     * 可选。默认的瞄准辅助类别 Id，用于未通过 setItemSettings 提供的物品。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手的瞄准辅助类别 Id。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly handSettings?: string;
    /**
     * @remarks
     * 与此预设关联的唯一 Id。
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
     * 获取要从瞄准辅助目标中排除的方块 Id 列表。
     *
     * @returns
     * 方块 Id 数组。
     * @throws 此函数可能抛出错误。
     */
    getExcludedBlockTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体 Id 列表。
     *
     * @returns
     * 实体 Id 数组。
     * @throws 此函数可能抛出错误。
     */
    getExcludedEntityTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体类型族列表。
     *
     * @returns
     * 实体类型族数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getExcludedEntityTypeFamilyTargets(): string[];
    /**
     * @remarks
     * 获取每个物品的瞄准辅助类别 Id。
     *
     * @returns
     * 将物品 Id 映射到瞄准辅助类别 Id 的记录。
     * @throws 此函数可能抛出错误。
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * 获取在手持时瞄准辅助会瞄准液体方块的物品 Id 列表。
     *
     * @returns
     * 物品 Id 数组。
     * @throws 此函数可能抛出错误。
     */
    getLiquidTargetingItems(): string[];
}