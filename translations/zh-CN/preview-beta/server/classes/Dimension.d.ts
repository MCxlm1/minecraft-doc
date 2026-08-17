/**
 * 表示世界内特定维度（例如末地）的类。
 */
export class Dimension {
    private constructor();

    /**
     * @remarks
     * 维度的高度范围。
     *
     * @throws 使用此属性时可能抛出错误。
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
     * 语言文件用于本地化维度名称的键。
     *
     */
    readonly localizationKey: string;

    /**
     * @remarks
     * 根据世界种子计算特定类型最近生物群系的位置。请注意，
     * calculateClosestBiomeFromSeed 可能是一项开销较大的操作，
     * 因此请避免在单个 tick 内多次调用。结果完全由世界生成
     * 算法和世界种子决定，因此若生物群系在生成后已被修改，
     * 返回的位置可能无法反映实际当前地形。
     *
     * @param pos
     * 开始搜索生物群系的起始位置。
     * @param biomeToFind
     * 要查找的生物群系标识符。
     * @param options
     * 生物群系搜索的附加筛选条件。
     * @returns
     * 返回生物群系的位置；若未找到，则返回 undefined。
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
     * 将维度中一个区域的方块克隆到另一个区域。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param beginLocation
     * 待克隆区域的西北下起始角。
     * @param endLocation
     * 待克隆区域的东南上结束角。
     * @param destination
     * 目标区域的西北下起始角。
     * @param cloneMode
     * 指定克隆方块在目标位置的放置方式。
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
     * 检查某个区域是否包含指定的生物群系。如果该区域部分位于
     * 世界边界内，则仅搜索边界内的部分。此操作的耗时与体积的
     * 面积及要检查的生物群系数量成正比。
     *
     * @param volume
     * 要检查生物群系的区域。
     * @param biomeFilter
     * 要包含和排除的生物群系列表，以及要包含和排除的标签列表。
     * 如果在区域内找到位于排除列表中的生物群系，或包含任何排除
     * 标签的生物群系，则返回 false。
     * @param isSuperset
     * Superset 用于确定过滤的严格程度。若 superset 为 true，
     * 则区域必须包含包含列表中的一个或多个生物群系，或包含所有
     * 包含标签的生物群系。若 superset 为 false，则区域必须仅包含
     * 包含列表中的生物群系，且这些生物群系包含所有包含标签。
     * @returns
     * 如果区域内的生物群系符合传入的过滤设置，则返回 true；
     * 否则返回 false。
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
     * 将针对体积中每个方块进行匹配的方块过滤器。
     * @param allowUnloadedChunks
     * 如果设置为 true，则在部分或全部方块体积位于已加载区块
     * 之外时，抑制 UnloadedChunksError。仅检查体积内位于已加载
     * 区块中的方块位置。
     * 默认值：false
     * @returns
     * 如果体积中至少有一个方块满足过滤器，则返回 true，
     * 否则返回 false。
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
     * 使用特定的方块类型填充一个方块区域。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param volume
     * 要填充的方块体积。
     * @param block
     * 用于填充体积的方块类型。
     * @param options
     * 一组附加选项，例如可用于在填充中包含/排除特定方块的
     * 方块过滤器。
     * @returns
     * 返回一个 ListBlockVolume，其中包含所有已放置的方块。
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
     * 如果位置位于未加载的区块中，将抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBiome(location: Vector3): BiomeType;

    /**
     * @remarks
     * 返回给定位置的方块实例。
     *
     * @param location
     * 要获取方块的位置。
     * @returns
     * 指定位置的方块；如果请求的是未加载区块中的方块，
     * 则返回 'undefined'。
     * @throws
     * PositionInUnloadedChunkError：当尝试与不再位于已加载且
     * 正在 tick 的区块中的 Block 对象交互时抛出的异常。
     *
     * PositionOutOfWorldBoundariesError：当尝试与维度高度范围
     * 之外的位置交互时抛出的异常。
     *
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;

    /**
     * @remarks
     * 根据给定的选项，获取给定方块位置上方找到的第一个方块
     * （默认将找到上方第一个实心方块）。
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
     * 根据给定的选项，获取给定方块位置下方找到的第一个方块
     * （默认将找到下方第一个实心方块）。
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
     * 用于处理此射线投射查询的附加选项。
     * @throws 此函数可能抛出错误。
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;

    /**
     * @remarks
     * 获取满足方块查询条件的一个体积内的所有方块。
     *
     * @param volume
     * 将检查的方块体积。
     * @param options
     * 方块查询选项，包含筛选条件，以及可选的按与某一位置的距离进行最近/最远排序。
     * @param allowUnloadedChunks
     * 若设为 true，当部分或全部方块体积位于已加载区块之外时，将抑制 UnloadedChunksError。
     * 只会检查体积内位于已加载区块中的方块位置。
     * 默认值：false
     * @returns
     * 返回一个 ListBlockVolume，其中包含满足方块查询条件的所有方块位置。
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
     * 根据 EntityQueryOptions 筛选条件定义的一组条件，返回一组实体。
     *
     * @param options
     * 可用于过滤返回实体集合的附加选项。
     * @returns
     * 一个实体数组。
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
     * 返回指定位置的一组实体。
     *
     * @param location
     * 要返回实体的位置。
     * @returns
     * 指定位置的零个或多个实体。
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];

    /**
     * @remarks
     * 获取从某一位置发出的指定向量所穿过的实体。
     *
     * @param location
     * 射线起点的位置。
     * @param direction
     * 射线的方向向量。
     * @param options
     * 用于处理此射线检测查询的附加选项。
     * @returns
     * 返回射线命中的实体列表。
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
     * 返回包含指定位置的已生成结构（例如：掠夺者前哨站、废弃矿井等）的数组。
     * 如果没有找到任何结构，数组将为空。
     *
     * @param location
     * 要检查结构的位置。
     * @returns
     * 返回一个包含指定位置所在已生成结构的数组；如果未找到任何结构，则为空数组。
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
     * 返回照射到某个方块位置的光的总亮度等级。
     *
     * @param location
     * 要检查亮度的方块位置。
     * @returns
     * 方块上的亮度等级。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(location: Vector3): number;

    /**
     * @remarks
     * 根据 EntityQueryOptions 筛选条件定义的一组条件，返回一组玩家。
     *
     * @param options
     * 可用于过滤返回的玩家集合的附加选项。
     * @returns
     * 一个玩家数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];

    /**
     * @remarks
     * 返回天空照射到某个方块位置的光的亮度等级。
     *
     * @param location
     * 要检查亮度的方块位置。
     * @returns
     * 方块上的亮度等级。
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
     * 开始搜索的 Y 高度。默认为维度最大高度。
     * @returns
     * 该位置的最高方块；如果不存在则为 undefined。
     * @throws 此函数可能抛出错误。
     */
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;

    /**
     * @beta
     * @remarks
     * 返回当前天气。
     *
     * @returns
     * 返回一个 WeatherType，用于说明当前天气的总体类别。
     */
    getWeather(): WeatherType;

    /**
     * @remarks
     * 如果给定位置处的区块已加载（且可用于脚本），则返回 true。
     *
     * @param location
     * 要检查区块是否已加载的位置。
     * @returns
     * 如果区块已加载则返回 true，否则返回 false。
     */
    isChunkLoaded(location: Vector3): boolean;

    /**
     * @remarks
     * 在维度中的指定位置放置给定地物。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param featureName
     * 地物的字符串标识符。
     * @param location
     * 放置地物的位置。
     * @param shouldThrow
     * 指定当无法放置地物时函数调用是否抛出错误。
     * 注意：如果使用未知地物名称，或尝试在未加载区块中放置，函数调用将始终抛出错误。
     * 默认值：false
     * @returns
     * 如果地物放置成功则返回 true，否则返回 false。
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
     * 在维度中的指定位置放置给定地物规则。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param featureRuleName
     * 地物规则的字符串标识符。
     * @param location
     * 放置地物规则的位置。
     * @returns
     * 如果地物规则放置成功则返回 true，否则返回 false。
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
     * 为所有玩家播放一个声音。
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
     * 返回一个可用于控制该声音的 SoundInstance。
     * @throws
     * 如果 volume 小于 0.0，将抛出错误。
     * 如果 fade 小于 0.0，将抛出错误。
     * 如果 pitch 小于 0.01，将抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): SoundInstance;

    /**
     * @remarks
     * 使用更广泛维度的上下文同步运行一条命令。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param commandString
     * 要运行的命令。注意：命令字符串不应以斜杠开头。
     * @returns
     * 返回一个命令结果，其中包含命令成功执行的结果数量。
     * @throws
     * 如果命令因参数或命令语法不正确而失败，或在命令的错误情况下，将抛出异常。注意，在很多情况下，如果命令未生效（例如目标选择器未找到匹配项），此方法不会抛出异常。
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;

    /**
     * @remarks
     * 使用 BlockPermutation（方块置换）在世界中设置一个方块。
     * BlockPermutation 是带有特定状态的方块。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param location
     * 维度内要设置方块的位置。
     * @param permutation
     * 要设置的方块置换。
     * @throws
     * 如果位置位于未加载的区块内或超出世界边界，则抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;

    /**
     * @remarks
     * 在维度内的指定位置设置一个方块。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param location
     * 维度内要设置方块的位置。
     * @param blockType
     * 要设置的方块类型。可以是字符串标识符或 BlockType。将使用默认方块置换。
     * @throws
     * 如果位置位于未加载的区块内或超出世界边界，则抛出异常。
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
     * 设置天气的持续时间（以刻为单位）。如果未提供持续时间，则会将持续时间设置为 300 到 900 秒之间的随机值。范围：[1, 1000000]
     * @throws
     * 此函数可能抛出错误。
     */
    setWeather(weatherType: WeatherType, duration?: number): void;

    /**
     * @remarks
     * 在指定位置创建一个新实体（例如，一个生物）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 要生成的实体类型标识符。如果未指定命名空间，则默认为 'minecraft:'。
     * @param location
     * 创建实体所在的位置。
     * @returns
     * 在指定位置创建的新实体。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link EntitySpawnError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
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
     * 在指定位置创建一个新的物品实例作为实体。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param location
     * 创建物品实例所在的位置。
     * @returns
     * 在指定位置创建的新物品实例实体。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
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
     * This function can't be called in restricted-execution mode.
     *
     * @param effectName
     * 要创建的粒子标识符。
     * @param location
     * 创建粒子发射器所在的位置。
     * @param molangVariables
     * 一组可选的、可自定义的变量，可用于调整此粒子。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
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
     * 在维度内的指定位置生成一个经验球。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param location
     * 生成经验球所在的位置。
     * @param amount
     * 给经验球的经验值数量。范围：[1, 12000]
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnXp(location: Vector3, amount: number): void;

    /**
     * @beta
     * @remarks
     * 停止所有玩家播放所有声音。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    stopAllSounds(): void;

    /**
     * @beta
     * @remarks
     * 停止所有玩家播放某个声音。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param soundId
     * 声音的标识符。
     */
    stopSound(soundId: string): void;

}