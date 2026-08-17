```typescript
/**
 * 表示世界中特定维度（例如末地）的类。
 */
export class Dimension {
    private constructor();
    /**
     * @remarks
     * 维度的高度范围。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly heightRange: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 维度的标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于语言文件中维度名称本地化的键。
     *
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 从世界种子计算特定类型生物群系最近位置。请注意，
     * calculateClosestBiomeFromSeed 可能是一项开销较大的操作，
     * 因此请避免在同一个 tick 内多次调用此方法。
     * 结果完全由世界生成算法和世界种子推导得出，因此如果生物群系在生成后被修改，
     * 返回的位置可能无法反映实际的地形。
     *
     * @param pos
     * 开始搜索生物群系的起始位置。
     * @param biomeToFind
     * 要查找的生物群系标识符。
     * @param options
     * 生物群系搜索的附加选择条件。
     * @returns
     * 返回生物群系的位置；如果找不到生物群系，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    calculateClosestBiomeFromSeed(
        pos: Vector3,
        biomeToFind: BiomeType | string,
        options?: BiomeSearchOptions,
    ): Vector3 | undefined;
    /**
     * @beta
     * @remarks
     * 将一个区域内的方块从维度的某一区域克隆到另一区域。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param beginLocation
     * 要克隆区域的西北下起始角。
     * @param endLocation
     * 要克隆区域的东南上结束角。
     * @param destination
     * 克隆目标区域的西北下起始角。
     * @param cloneMode
     * 指定克隆方块在目标位置放置的方式。
     * @param filter
     * 可选的方块过滤器，用于仅包含源区域中匹配的方块。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    cloneBlocks(
        beginLocation: Vector3,
        endLocation: Vector3,
        destination: Vector3,
        cloneMode: CloneMode,
        filter?: BlockFilter,
    ): void;
    /**
     * @remarks
     * 检查一个区域是否包含指定的生物群系。如果该区域部分超出世界边界，
     * 则只搜索边界内的部分。此操作的耗时与体积大小和要检查的生物群系数量成正比。
     *
     * @param volume
     * 要检查生物群系的区域。
     * @param biomeFilter
     * 要包含和排除的生物群系列表。以及要包含和排除的标签列表。
     * 如果在区域内发现生物群系出现在排除列表中，或包含任何排除标签，则返回 false。
     * @param isSuperset
     * 用于确定过滤器的严格程度。如果 superset 为 true，
     * 则区域必须包含包含列表中的一个或多个生物群系，或包含所有包含的标签。
     * 如果 superset 为 false，则区域必须仅包含包含列表中的生物群系，并且包含所有包含的标签。
     * @returns
     * 如果区域内的生物群系匹配传入的过滤器设置，则返回 true；否则返回 false。
     * @throws
     * 如果提供的区域包含未加载的区块，将抛出错误。
     * 如果提供的区域完全超出世界边界，将抛出错误。
     * 如果提供了未知的生物群系名称，将抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     *
     * {@link UnloadedChunksError}
     */
    containsBiomes(volume: BlockVolumeBase, biomeFilter: BiomeFilter, isSuperset: boolean): boolean;
    /**
     * @remarks
     * 在方块体积中搜索满足方块过滤器的方块。
     *
     * @param volume
     * 将被检查的方块体积。
     * @param filter
     * 将与体积中每个方块进行比对的方块过滤器。
     * @param allowUnloadedChunks
     * 如果设为 true，当部分或全部方块体积位于已加载区块之外时，
     * 将抑制 UnloadedChunksError。只会检查体积内已加载区块中的方块位置。
     * 默认值：false
     * @returns
     * 如果体积中至少有一个方块满足过滤器，则返回 true，否则返回 false。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;
    /**
     * @remarks
     * 在指定位置创建一次爆炸。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param location
     * 爆炸的位置。
     * @param radius
     * 要创建的爆炸半径，以方块为单位。
     * 范围：[0, 1000]
     * @param explosionOptions
     * 爆炸的附加可配置选项。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example createExplosion.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     *
     * function createExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   log('Creating an explosion of radius 10.');
     *   targetLocation.dimension.createExplosion(targetLocation, 10);
     * }
     * ```
     * @example createNoBlockExplosion.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { Vector3Utils } from '@minecraft/math';
     *
     * function createNoBlockExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const explodeNoBlocksLoc = Vector3Utils.floor(Vector3Utils.add(targetLocation, { x: 1, y: 2, z: 1 }));
     *
     *   log('Creating an explosion of radius 15 that does not break blocks.');
     *   targetLocation.dimension.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
     * }
     * ```
     * @example createExplosions.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { Vector3Utils } from '@minecraft/math';
     *
     * function createExplosions(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const explosionLoc = Vector3Utils.add(targetLocation, { x: 0.5, y: 0.5, z: 0.5 });
     *
     *   log('Creating an explosion of radius 15 that causes fire.');
     *   targetLocation.dimension.createExplosion(explosionLoc, 15, { causesFire: true });
     *
     *   const belowWaterLoc = Vector3Utils.add(targetLocation, { x: 3, y: 1, z: 3 });
     *
     *   log('Creating an explosion of radius 10 that can go underwater.');
     *   targetLocation.dimension.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
     * }
     * ```
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    /**
     * @remarks
     * 用一个特定的方块类型填充一个方块区域。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param volume
     * 要填充的方块体积。
     * @param block
     * 用于填充体积的方块类型。
     * @param options
     * 一组附加选项，例如方块过滤器，可用于在填充中包含/排除特定方块。
     * @returns
     * 返回一个 ListBlockVolume，其中包含所有被放置的方块。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    fillBlocks(
        volume: BlockVolumeBase,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): ListBlockVolume;
    /**
     * @remarks
     * 返回指定位置的生物群系类型。
     *
     * @param location
     * 要检查生物群系的位置。
     * @throws
     * 如果位置超出世界边界，将抛出错误。
     * 如果位置位于未加载区块中，将抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBiome(location: Vector3): BiomeType;
    /**
     * @remarks
     * 返回给定位置处的方块实例。
     *
     * @param location
     * 要返回方块的位置。
     * @returns
     * 指定位置的方块；如果询问的方块位于未加载区块中，则返回 'undefined'。
     * @throws
     * PositionInUnloadedChunkError：当尝试与不再处于已加载且运行的区块中的 Block 对象交互时抛出的异常。
     *
     * PositionOutOfWorldBoundariesError：当尝试与超出维度高度范围的位置交互时抛出的异常。
     *
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * @remarks
     * 根据给定的选项，获取某个方块位置上方找到的第一个方块（默认情况下会找到上方第一个实心方块）。
     *
     * @param location
     * 要获取上方方块的位置。
     * @param options
     * 用于判断方块是否为有效结果的选项。
     * @throws 此函数可能抛出错误。
     */
    getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @remarks
     * 根据给定的选项，获取某个方块位置下方找到的第一个方块（默认情况下会找到下方第一个实心方块）。
     *
     * @param location
     * 要获取下方方块的位置。
     * @param options
     * 用于判断方块是否为有效结果的选项。
     * @throws 此函数可能抛出错误。
     */
    getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @remarks
     * 获取从某个位置发出的向量所相交的第一个方块。
     *
     * @param location
     * 发起射线检查的位置。
     * @param direction
     * 投射射线的向量方向。
     * @param options
     * 处理此射线查询的附加选项。
     * @throws 此函数可能抛出错误。
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @remarks
     * 获取体积中满足方块查询选项的所有方块。
     *
     * @param volume
     * 将被检查的方块体积。
     * @param options
     * 方块查询选项，包括过滤条件以及可选地从某个位置按最近/最远距离排序。
     * @param allowUnloadedChunks
     * 如果设为 true，当部分或全部方块体积位于已加载区块之外时，
     * 将抑制 UnloadedChunksError。只会检查体积内已加载区块中的方块位置。
     * 默认值：false
     * @returns
     * 返回包含所有满足方块查询选项的方块位置的 ListBlockVolume。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link UnloadedChunksError}
     */

    getBlocks(volume: BlockVolumeBase, options: BlockQueryOptions, allowUnloadedChunks?: boolean): ListBlockVolume;
    /**
     * @remarks
     * 根据通过 EntityQueryOptions 筛选条件定义的一组条件，返回一组实体。
     *
     * @param options
     * 可用于筛选返回的实体集合的附加选项。
     * @returns
     * 实体数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     * @example bounceSkeletons.ts
     * ```typescript
     * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
     *
     * function bounceSkeletons(targetLocation: DimensionLocation) {
     *   const mobs = ['creeper', 'skeleton', 'sheep'];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
     *   }
     *
     *   const eqo: EntityQueryOptions = {
     *     type: 'skeleton',
     *   };
     *
     *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
     *     entity.applyKnockback(0, 0, 0, 1);
     *   }
     * }
     * ```
     * @example tagsQuery.ts
     * ```typescript
     * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
     *
     * function tagsQuery(targetLocation: DimensionLocation) {
     *   const mobs = ['creeper', 'skeleton', 'sheep'];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     const mobTypeId = mobs[i % mobs.length];
     *     const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
     *     entity.addTag('mobparty.' + mobTypeId);
     *   }
     *
     *   const eqo: EntityQueryOptions = {
     *     tags: ['mobparty.skeleton'],
     *   };
     *
     *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
     *     entity.kill();
     *   }
     * }
     * ```
     * @example testThatEntityIsFeatherItem.ts
     * ```typescript
     * import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     *
     * function testThatEntityIsFeatherItem(
     *   log: (message: string, status?: number) => void,
     *   targetLocation: DimensionLocation
     * ) {
     *   const items = targetLocation.dimension.getEntities({
     *     location: targetLocation,
     *     maxDistance: 20,
     *   });
     *
     *   for (const item of items) {
     *     const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;
     *
     *     if (itemComp) {
     *       if (itemComp.itemStack.typeId.endsWith('feather')) {
     *         log('Success! Found a feather', 1);
     *       }
     *     }
     *   }
     * }
     * ```
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * @remarks
     * 返回特定位置处的一组实体。
     *
     * @param location
     * 要返回实体所在的位置。
     * @returns
     * 指定位置处的零个或多个实体。
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @remarks
     * 获取与从某个位置发出的指定向量相交的实体。
     *
     * @param location
     * 射线发出的起始位置。
     * @param direction
     * 射线的方向向量。
     * @param options
     * 用于处理此射线检测查询的附加选项。
     * @returns
     * 射线命中结果数组，包含命中的实体与命中位置。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @beta
     * @remarks
     * 返回包含指定位置（例如掠夺者前哨站、废弃矿井等）的已生成结构数组。
     * 如果未找到任何结构，则数组为空。
     *
     * @param location
     * 要检查结构所在的位置。
     * @returns
     * 包含指定位置的已生成结构标识符数组；若未找到则为空数组。
     * @throws
     * 如果位置超出世界边界，将抛出错误。
     * 如果位置位于未加载区块中，将抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getGeneratedStructures(location: Vector3): (minecraftvanilladata.MinecraftFeatureTypes | string)[];
    /**
     * @remarks
     * 返回照射到某个方块位置的光线的总亮度等级。
     *
     * @param location
     * 要检查亮度的方块位置。
     * @returns
     * 该方块上的亮度等级。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(location: Vector3): number;
    /**
     * @remarks
     * 根据通过 EntityQueryOptions 筛选条件定义的一组条件，返回一组玩家。
     *
     * @param options
     * 可用于筛选返回的玩家集合的附加选项。
     * @returns
     * 玩家数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @remarks
     * 返回从天空照射到某个方块位置的光线亮度等级。
     *
     * @param location
     * 要检查亮度的方块位置。
     * @returns
     * 该方块上的亮度等级。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(location: Vector3): number;
    /**
     * @remarks
     * 返回给定 XZ 位置处的最高方块。
     *
     * @param locationXZ
     * 要获取最高方块的位置。
     * @param minHeight
     * 开始搜索的 Y 高度。默认值为维度最大高度。
     * @returns
     * 该位置处的最高方块；如果不存在则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * 返回当前天气。
     *
     * @returns
     * 返回一个 WeatherType，说明当前正在发生的天气的广泛类别。
     */
    getWeather(): WeatherType;
    /**
     * @remarks
     * 如果给定位置处的区块已加载（并且可有效用于脚本），则返回 true。
     *
     * @param location
     * 要检查区块是否已加载的位置。
     * @returns
     * 如果区块已加载则返回 true，否则返回 false。
     */
    isChunkLoaded(location: Vector3): boolean;
    /**
     * @remarks
     * 将指定地物放入维度中的指定位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param featureName
     * 地物的字符串标识符。
     * @param location
     * 放置地物的位置。
     * @param shouldThrow
     * 指定如果地物无法放置，函数调用是否会抛出错误。
     * 注意：如果使用未知地物名称或尝试在未加载区块中放置，
     * 函数调用始终会抛出错误。
     * 默认值：false
     * @returns
     * 表示地物是否成功放置的布尔值。
     * @throws
     * 如果地物名称无效，将抛出错误。
     * 如果位置位于未加载区块中，将抛出错误。
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean;
    /**
     * @remarks
     * 将指定地物规则放入维度中的指定位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param featureRuleName
     * 地物规则的字符串标识符。
     * @param location
     * 放置地物规则的位置。
     * @returns
     * 表示地物规则是否成功放置的布尔值。
     * @throws
     * 如果地物规则名称无效，将抛出错误。
     * 如果位置位于未加载区块中，将抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeatureRule(featureRuleName: string, location: Vector3): boolean;
    /**
     * @remarks
     * 为所有玩家播放声音。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param soundId
     * 声音的标识符。
     * @param location
     * 声音的位置。
     * @param soundOptions
     * 用于配置声音附加效果的附加选项。
     * @returns
     * 表示播放的声音实例。
     * @throws
     * 如果音量小于 0.0，将抛出错误。
     * 如果淡入淡出值小于 0.0，将抛出错误。
     * 如果音调小于 0.01，将抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): SoundInstance;
    /**
     * @remarks
     * 使用更广泛维度的上下文同步运行命令。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param commandString
     * 要运行的命令。请注意，命令字符串不应以斜杠开头。
     * @returns
     * 返回一个命令结果，其中包含命令中成功值的计数。
     * @throws
     * 如果命令因参数或命令语法不正确而失败，或命令出现错误情况，
     * 则抛出异常。请注意，在许多情况下，如果命令未执行
     * （例如目标选择器未找到匹配项），此方法不会抛出异常。
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * 使用 BlockPermutation 在世界中设置方块。
     * BlockPermutation 是带有特定状态的方块。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param location
     * 维度内要设置方块的位置。
     * @param permutation
     * 要设置的方块置换。
     * @throws
     * 如果位置位于未加载区块中或超出世界边界，则抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    /**
     * @remarks
     * 在维度内的给定位置设置方块。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param location
     * 维度内要设置方块的位置。
     * @param blockType
     * 要设置的方块类型。可以是字符串标识符或 BlockType。
     * 使用默认方块置换。
     * @throws
     * 如果位置位于未加载区块中或超出世界边界，则抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockType(location: Vector3, blockType: BlockType | string): void;
    /**
     * @remarks
     * 设置维度内的当前天气。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param weatherType
     * 设置要应用的天气类型。
     * @param duration
     * 设置天气持续时间（以 tick 为单位）。如果未提供持续时间，
     * 则持续时间将设置为 300 到 900 秒之间的随机值。
     * 范围：[1, 1000000]
     * @throws 此函数可能抛出错误。
     */

```
    setWeather(weatherType: WeatherType, duration?: number): void;
    /**
     * @remarks
     * 在指定位置创建一个新实体（例如生物）。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param identifier
     * 要生成的实体类型标识符。若未指定命名空间，则默认为 'minecraft:'。
     * @param location
     * 创建实体所在的位置。
     * @param options
     * 生成实体的可选参数。
     * @returns
     * 在指定位置新建的实体。
     * @throws 此函数可能抛出错误，包括：
     *
     * {@link EntitySpawnError} - 实体生成失败时。
     *
     * {@link minecraftcommon.InvalidArgumentError} - 参数无效时。
     *
     * {@link InvalidEntityError} - 实体无效时。
     *
     * {@link LocationInUnloadedChunkError} - 目标位置在未加载区块中时。
     *
     * {@link LocationOutOfWorldBoundariesError} - 目标位置超出世界边界时。
     * @example spawnAdultHorse.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { Vector3Utils } from '@minecraft/math';
     *
     * function spawnAdultHorse(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   log('Create a horse and triggering the ageable_grow_up event, ensuring the horse is created as an adult');
     *   targetLocation.dimension.spawnEntity(
     *     'minecraft:horse<minecraft:ageable_grow_up>',
     *     Vector3Utils.add(targetLocation, { x: 0, y: 1, z: 0 })
     *   );
     * }
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes, MinecraftEffectTypes } from '@minecraft/vanilla-data';
     *
     * function quickFoxLazyDog(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const fox = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *
     *   fox.addEffect(MinecraftEffectTypes.Speed, 10, {
     *     amplifier: 2,
     *   });
     *   log('Created a fox.');
     *
     *   const wolf = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Wolf, {
     *     x: targetLocation.x + 4,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *   wolf.addEffect(MinecraftEffectTypes.Slowness, 10, {
     *     amplifier: 2,
     *   });
     *   wolf.isSneaking = true;
     *   log('Created a sneaking wolf.', 1);
     * }
     * ```
     * @example triggerEvent.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function triggerEvent(targetLocation: DimensionLocation) {
     *   const creeper = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Creeper, targetLocation);
     *
     *   creeper.triggerEvent('minecraft:start_exploding_forced');
     * }
     * ```
     */
    spawnEntity<T = never>(
        identifier: EntityIdentifierType<NoInfer<T>>,
        location: Vector3,
        options?: SpawnEntityOptions,
    ): Entity;
    /**
     * @remarks
     * 在指定位置创建一个新的物品实例（作为实体存在）。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param itemStack
     * 要生成的物品实例。
     * @param location
     * 创建物品实例所在的位置。
     * @returns
     * 在指定位置新建的物品实例实体。
     * @throws 此函数可能抛出错误，包括：
     *
     * {@link LocationInUnloadedChunkError} - 目标位置在未加载区块中时。
     *
     * {@link LocationOutOfWorldBoundariesError} - 目标位置超出世界边界时。
     * @example itemStacks.ts
     * ```typescript
     * import { ItemStack, DimensionLocation } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function itemStacks(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
     *   const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
     *   const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };
     *
     *   const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1);
     *   const onePickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe, 1);
     *   const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5);
     *
     *   log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
     *   targetLocation.dimension.spawnItem(oneEmerald, oneItemLoc);
     *
     *   log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
     *   targetLocation.dimension.spawnItem(fiveEmeralds, fiveItemsLoc);
     *
     *   log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
     *   targetLocation.dimension.spawnItem(onePickaxe, diamondPickaxeLoc);
     * }
     * ```
     * @example spawnFeatherItem.ts
     * ```typescript
     * import { ItemStack, DimensionLocation } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function spawnFeatherItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
     *
     *   targetLocation.dimension.spawnItem(featherItem, targetLocation);
     *   log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
     * }
     * ```
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @remarks
     * 在世界中的指定位置创建一个新的粒子发射器。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param effectName
     * 要创建的粒子效果标识符。
     * @param location
     * 创建粒子发射器的位置。
     * @param molangVariables
     * 一组可选的、可自定义的变量，可针对该粒子进行调整。
     * @throws 此函数可能抛出错误，包括：
     *
     * {@link LocationInUnloadedChunkError} - 目标位置在未加载区块中时。
     *
     * {@link LocationOutOfWorldBoundariesError} - 目标位置超出世界边界时。
     * @example spawnParticle.ts
     * ```typescript
     * import { MolangVariableMap, DimensionLocation } from '@minecraft/server';
     *
     * function spawnParticle(targetLocation: DimensionLocation) {
     *   for (let i = 0; i < 100; i++) {
     *     const molang = new MolangVariableMap();
     *
     *     molang.setColorRGB('variable.color', { red: Math.random(), green: Math.random(), blue: Math.random() });
     *
     *     const newLocation = {
     *       x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
     *       y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
     *       z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
     *     };
     *     targetLocation.dimension.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
     *   }
     * }
     * ```
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @beta
     * @remarks
     * 在维度中的指定位置生成一个经验球。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param location
     * 生成经验球的位置。
     * @param amount
     * 给予经验球的经验数量。范围：[1, 12000]
     * @throws 此函数可能抛出错误，包括：
     *
     * {@link LocationInUnloadedChunkError} - 目标位置在未加载区块中时。
     *
     * {@link LocationOutOfWorldBoundariesError} - 目标位置超出世界边界时。
     */
    spawnXp(location: Vector3, amount: number): void;
    /**
     * @beta
     * @remarks
     * 停止为所有玩家播放所有声音。
     *
     * 此函数无法在受限执行模式下调用。
     *
     */
    stopAllSounds(): void;
    /**
     * @beta
     * @remarks
     * 停止为所有玩家播放指定声音。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param soundId
     * 声音的标识符。
     */
    stopSound(soundId: string): void;
}
```