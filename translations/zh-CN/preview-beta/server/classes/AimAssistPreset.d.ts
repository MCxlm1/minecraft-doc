/**
 * 表示一个存在于 world.aimAssist 注册表中的瞄准辅助预设。
 */
export class AimAssistPreset {
    private constructor();
    /**
     * @remarks
     * 可选。默认的瞄准辅助类别ID，用于未提供给 setItemSettings 的物品。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手的瞄准辅助类别ID。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly handSettings?: string;
    /**
     * @remarks
     * 与预设关联的唯一ID。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 获取从瞄准辅助目标中排除的方块标签列表。
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
     * 获取从瞄准辅助目标中排除的方块ID列表。
     *
     * @returns
     * 方块ID数组。
     * @throws 此函数可能抛出错误。
     */
    getExcludedBlockTargets(): string[];
    /**
     * @remarks
     * 获取从瞄准辅助目标中排除的实体ID列表。
     *
     * @returns
     * 实体ID数组。
     * @throws 此函数可能抛出错误。
     */
    getExcludedEntityTargets(): string[];
    /**
     * @remarks
     * 获取从瞄准辅助目标中排除的实体类型族列表。
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
     * 获取每个物品的瞄准辅助类别ID。
     *
     * @returns
     * 将物品ID映射到瞄准辅助类别ID的记录。
     * @throws 此函数可能抛出错误。
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * 获取手持时瞄准辅助会瞄准液体方块的物品ID列表。
     *
     * @returns
     * 物品ID数组。
     * @throws 此函数可能抛出错误。
     */
    getLiquidTargetingItems(): string[];
}