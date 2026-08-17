/**
 * 战利品表相关 API 的管理器。允许根据方块和实体的战利品表生成掉落物。
 */
export class LootTableManager {
    private constructor();
    /**
     * @remarks
     * 从指定方块生成战利品，如同该方块已被挖掘。
     *
     * @param block
     * 要从中生成战利品的方块。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空；如果提供的工具不足以挖掘该方块，则为 undefined。
     * @throws
     * 如果方块位于未加载的区块中，或方块的位置超出世界边界，则抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     *
     * {@link UnloadedChunksError}
     */
    generateLootFromBlock(block: Block, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的方块排列生成战利品，如同该方块排列已被挖掘。
     *
     * @param blockPermutation
     * 要从中生成战利品的方块排列。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空；如果提供的工具不足以挖掘该方块，则为 undefined。
     */
    generateLootFromBlockPermutation(blockPermutation: BlockPermutation, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的方块类型生成战利品，如同该方块类型已被挖掘。
     *
     * @param scriptBlockType
     * 要从中生成战利品的方块类型。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空；如果提供的工具不足以挖掘该方块，则为 undefined。
     */
    generateLootFromBlockType(scriptBlockType: BlockType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定实体生成战利品，如同该实体已被击杀。
     *
     * @param entity
     * 要从中生成战利品的实体。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空；如果实体无效，则为 undefined。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    generateLootFromEntity(entity: Entity, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的实体类型生成战利品，如同该实体类型已被击杀。
     *
     * @param entityType
     * 要从中生成战利品的实体类型。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空。
     */
    generateLootFromEntityType(entityType: EntityType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的战利品表生成战利品。
     *
     * @param lootTable
     * 要从中生成战利品的战利品表。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空；如果提供的工具不足以挖掘该方块，则为 undefined。
     */
    generateLootFromTable(lootTable: LootTable, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从世界的当前注册表中检索单个战利品表。
     *
     * @param path
     * 要检索的战利品表路径。不包含文件扩展名或 'loot_tables/' 文件夹前缀。示例：
     * `entities/creeper`。
     * @returns
     * 如果找到对应战利品表，则返回 LootTable；如果提供的路径不对应任何现有战利品表，则返回 `undefined`。
     */
    getLootTable(path: string): LootTable | undefined;
}