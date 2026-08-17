/**
 * 战利品表相关API的管理器。允许根据方块和实体的战利品表生成掉落物。
 */
export class LootTableManager {
    private constructor();
    /**
     * @remarks
     * 从给定方块生成战利品，如同已被挖掘。
     *
     * @param block
     * 要从中生成战利品的方块。
     * @param tool
     * 可选。在掠夺操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落则为空数组，如果提供的工具不足以挖掘该方块则为undefined。
     * @throws
     * 如果方块位于未加载的区块中，或方块位置超出世界边界，则抛出错误。
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
     * 从给定方块变体生成战利品，如同已被挖掘。
     *
     * @param blockPermutation
     * 要从中生成战利品的方块变体。
     * @param tool
     * 可选。在掠夺操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落则为空数组，如果提供的工具不足以挖掘该方块则为undefined。
     */
    generateLootFromBlockPermutation(blockPermutation: BlockPermutation, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定方块类型生成战利品，如同已被挖掘。
     *
     * @param scriptBlockType
     * 要从中生成战利品的方块类型。
     * @param tool
     * 可选。在掠夺操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落则为空数组，如果提供的工具不足以挖掘该方块则为undefined。
     */
    generateLootFromBlockType(scriptBlockType: BlockType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定实体生成战利品，如同已被击杀。
     *
     * @param entity
     * 要从中生成战利品的实体。
     * @param tool
     * 可选。在掠夺操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落则为空数组，如果实体无效则为undefined。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    generateLootFromEntity(entity: Entity, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定实体类型生成战利品，如同已被击杀。
     *
     * @param entityType
     * 要从中生成战利品的实体类型。
     * @param tool
     * 可选。在掠夺操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落则为空数组。
     */
    generateLootFromEntityType(entityType: EntityType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定战利品表生成战利品。
     *
     * @param lootTable
     * 要从中生成战利品的战利品表。
     * @param tool
     * 可选。在掠夺操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落则为空数组，如果提供的工具不足以挖掘该方块则为undefined。
     */
    generateLootFromTable(lootTable: LootTable, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从世界的当前注册表中获取单个战利品表。
     *
     * @param path
     * 要获取的战利品表路径。不包括文件扩展名或 'loot_tables/' 文件夹前缀。示例：`entities/creeper`。
     * @returns
     * 如果找到则返回一个战利品表，如果提供的路径不对应于现有的战利品表则返回 `undefined`。
     */
    getLootTable(path: string): LootTable | undefined;
}