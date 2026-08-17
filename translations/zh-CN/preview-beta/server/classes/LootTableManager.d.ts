/**
 * 管理战利品表相关 API。允许根据方块和实体的战利品表生成掉落物。
 */
export class LootTableManager {
    private constructor();
    /**
     * @remarks
     * 从给定的方块生成战利品，如同其被开采一样。
     *
     * @param block
     * 要生成战利品的方块。
     * @param tool
     * 可选。在战利品操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落战利品，则为空数组；如果提供的工具不足以开采该方块，则为 undefined。
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
     * 从给定的方块置换生成战利品，如同其被开采一样。
     *
     * @param blockPermutation
     * 要生成战利品的方块置换。
     * @param tool
     * 可选。在战利品操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落战利品，则为空数组；如果提供的工具不足以开采该方块，则为 undefined。
     */
    generateLootFromBlockPermutation(blockPermutation: BlockPermutation, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的方块类型生成战利品，如同其被开采一样。
     *
     * @param scriptBlockType
     * 要生成战利品的方块类型。
     * @param tool
     * 可选。在战利品操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落战利品，则为空数组；如果提供的工具不足以开采该方块，则为 undefined。
     */
    generateLootFromBlockType(scriptBlockType: BlockType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的实体生成战利品，如同其被击杀一样。
     *
     * @param entity
     * 要生成战利品的实体。
     * @param tool
     * 可选。在战利品操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落战利品，则为空数组；如果实体无效，则为 undefined。
     * @throws 如果实体无效，则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    generateLootFromEntity(entity: Entity, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的实体类型生成战利品，如同其被击杀一样。
     *
     * @param entityType
     * 要生成战利品的实体类型。
     * @param tool
     * 可选。在战利品操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落战利品，则为空数组。
     */
    generateLootFromEntityType(entityType: EntityType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的战利品表生成战利品。
     *
     * @param lootTable
     * 要生成战利品的战利品表。
     * @param tool
     * 可选。在战利品操作中使用的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。如果没有掉落战利品，则为空数组；如果提供的工具不足以开采该方块，则为 undefined。
     */
    generateLootFromTable(lootTable: LootTable, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从世界的当前注册表中获取一个战利品表。
     *
     * @param path
     * 要获取的战利品表的路径。不包括文件扩展名或 'loot_tables/' 文件夹前缀。例如：`entities/creeper`。
     * @returns
     * 如果找到，返回一个 LootTable；如果提供的路径不对应于现有的战利品表，则返回 `undefined`。
     */
    getLootTable(path: string): LootTable | undefined;
}
```