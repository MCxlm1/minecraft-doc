/**
 * @symbol Dimension
 * @description 表示世界中特定维度（如末地）的类。
 */
export class Dimension {
    /**
     * 维度的标识符。
     * @throws 使用此属性时可能抛出错误。
     */
    readonly "id": string;

    /**
     * @remarks
     * 在指定位置创建爆炸。
     * @param location 爆炸的位置。
     * @param radius 爆炸的半径（以方块为单位）。
     * @param explosionOptions 爆炸的可配置选项。
     * @throws 此函数可能抛出错误。
     */
    createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void;

    /**
     * @remarks
     * 返回给定位置的方块实例。
     * @param location 要获取方块的位置。
     * @returns 指定位置的方块。
     * @throws 此函数可能抛出错误。
     */
    getBlock(location: BlockLocation): Block;

    /**
     * @remarks
     * 获取从位置发出的向量相交的第一个方块。
     * @param location 起始位置。
     * @param direction 方向向量。
     * @param options 处理此射线查询的附加选项。
     * @throws 此函数可能抛出错误。
     */
    getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): Block;

    /**
     * @remarks
     * 根据 EntityQueryOptions 筛选条件返回一组实体。
     * @param getEntities 查询选项。
     * @returns 可用于遍历返回实体的实体迭代器。
     * @throws 此函数可能抛出错误。
     */
    getEntities(getEntities?: EntityQueryOptions): EntityIterator;

    /**
     * @remarks
     * 返回特定位置的实体集合。
     * @param location 要获取实体的位置。
     * @returns 指定位置的零个或多个实体。
     */
    getEntitiesAtBlockLocation(location: BlockLocation): Entity[];

    /**
     * @remarks
     * 获取与从位置发出的指定向量相交的实体。
     * @param location 起始位置。
     * @param direction 方向向量。
     * @param options 处理此射线查询的附加选项。
     * @throws 此函数可能抛出错误。
     */
    getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[];

    /**
     * @remarks
     * 根据 EntityQueryOptions 筛选条件返回一组玩家。
     * @param getPlayers 查询选项。
     * @returns 可用于遍历返回玩家的玩家迭代器。
     * @throws 此函数可能抛出错误。
     */
    getPlayers(getPlayers?: EntityQueryOptions): PlayerIterator;

    /**
     * @remarks
     * 从维度上下文运行指定命令。
     * @param commandString 要运行的命令，注意不要以斜杠开头。
     * @returns 对于返回数据的命令，返回包含命令响应值的 JSON 结构。
     * @throws 此函数可能抛出错误。
     */
    runCommand(commandString: string): any;

    /**
     * @remarks
     * 异步从维度上下文运行指定命令。建议尽可能使用异步方式。
     * @param commandString 要运行的命令，注意不要以斜杠开头。
     * @returns 对于返回数据的命令，返回包含命令响应值的 CommandResult。
     * @throws 此函数可能抛出错误。
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;

    /**
     * @remarks
     * 在指定位置创建新实体（如生物）。
     * @param identifier 要生成的实体类型标识符。
     * @param location 创建实体的位置。
     * @returns 在指定位置新创建的实体。
     * @throws 此函数可能抛出错误。
     */
    spawnEntity(identifier: string, location: BlockLocation | Location): Entity;

    /**
     * @remarks
     * 在指定位置创建新的物品堆叠实体。
     * @param item 要生成的物品堆叠。
     * @param location 创建物品堆叠的位置。
     * @returns 在指定位置新创建的物品堆叠实体。
     * @throws 此函数可能抛出错误。
     */
    spawnItem(item: ItemStack, location: BlockLocation | Location): Entity;

    /**
     * @remarks
     * 在世界中指定位置创建新的粒子发射器。
     * @param effectName 要创建的粒子标识符。
     * @param location 创建粒子发射器的位置。
     * @param molangVariables 可为此粒子发射器调整的附加自定义变量。
     * @returns 在指定位置新创建的粒子发射器。
     */
    spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void;

    protected constructor();
}
