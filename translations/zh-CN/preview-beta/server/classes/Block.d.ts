/**
 * 表示维度中的一个方块。方块代表维度中唯一的 X、Y、Z 坐标，并获取/设置该位置的方块状态。此类型在 1.17.10.21 版本中进行了重大更新。
 */
export class Block {
    private constructor();
    /**
     * @remarks
     * 返回该方块所在的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 如果此方块为空气方块（即空区域），则返回 true。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isAir: boolean;
    /**
     * @remarks
     * 如果此方块是液体方块，则返回 true -（例如，水和岩浆是液体，而空气和石头不是。含水的方块不是液体方块）。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isLiquid: boolean;
    /**
     * @beta
     * @remarks
     * 如果此方块是坚固且不可通过的，则返回 true -（例如，圆石方块和钻石方块是坚固的，而梯子和栅栏方块不是）。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isSolid: boolean;
    /**
     * @remarks
     * 如果此方块引用仍然有效，则返回 true（例如，如果方块被卸载，对该方块的引用将不再有效）。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 返回此方块是否含水。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isWaterlogged: boolean;
    /**
     * @remarks
     * 用于 .lang 文件中此方块名称本地化的键。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 指定方块的坐标。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 描述该方块的附加方块配置数据。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly permutation: BlockPermutation;
    /**
     * @remarks
     * 获取方块的类型。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * 此方块类型的标识符。警告：原版方块名称在未来的版本中可能会更改，请尽量使用 'Block.matches' 进行方块比较。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly typeId: string;
    /**
     * @remarks
     * 方块的 X 坐标。
     *
     */
    readonly x: number;
    /**
     * @remarks
     * 方块的 Y 坐标。
     *
     */
    readonly y: number;
    /**
     * @remarks
     * 方块的 Z 坐标。
     *
     */
    readonly z: number;
    /**
     * @remarks
     * 返回此方块上方的 {@link Block}（Y 轴正方向）。
     *
     * @param steps
     * 向上移动的步数，然后返回。
     * 默认值：1
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    above(steps?: number): Block | undefined;
    /**
     * @remarks
     * 返回此方块下方的 {@link Block}（Y 轴负方向）。
     *
     * @param steps
     * 向下移动的步数，然后返回。
     * 默认值：1
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    below(steps?: number): Block | undefined;
    /**
     * @remarks
     * 返回此方块在 X 和 Z 轴上的中心 {@link Vector3}。
     *
     */
    bottomCenter(): Vector3;
    /**
     * @remarks
     * 返回此方块在被液体接触时是否会被移除。
     *
     * @param liquidType
     * 调用此函数时应使用的液体类型。
     * @returns
     * 此方块在被液体接触时是否会被移除。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块上方是否可以放置液体，即是否可以被水浸没。
     *
     * @param liquidType
     * 调用此函数时应使用的液体类型。
     * @returns
     * 此方块上方是否可以放置液体。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @beta
     * @remarks
     * 检查将指定的方块类型或方块排列放置到此方块的指定面上是否有效。
     *
     * @param blockToPlace
     * 要检查放置的方块类型或方块排列。
     * @param faceToPlaceOn
     * 可选的，要检查放置于此方块的特定面。
     * @returns
     * 如果方块类型或排列可以放置在此方块上，则返回 `true`，否则返回 `false`。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean;
    /**
     * @remarks
     * 返回此方块在 X、Y 和 Z 轴上的中心 {@link Vector3}。
     *
     */
    center(): Vector3;
    /**
     * @remarks
     * 返回此方块东侧的 {@link Block}（X 轴正方向）。
     *
     * @param steps
     * 向东移动的步数，然后返回。
     * 默认值：1
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    east(steps?: number): Block | undefined;
    /**
     * @remarks
     * 获取方块的组件（表示附加功能）——例如，箱子方块的物品栏组件。
     *
     * @param componentId
     * 组件的标识符（例如 'minecraft:inventory'）。如果未指定命名空间前缀，则默认为 'minecraft:'。可用的组件 ID 为 {@link BlockComponentTypes} 枚举中的值，以及通过 {@link BlockComponentRegistry} 注册的自定义组件 ID。
     * @returns
     * 如果组件存在于方块上，则返回该组件，否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponent<T extends string>(componentId: T): BlockComponentReturnType<T> | undefined;
    /**
     * @remarks
     * 返回此方块上存在的所有脚本组件。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponents(): BlockComponent[];
    /**
     * @remarks
     * 基于此方块创建可用于 Container/ContainerSlot API 的原型物品实例。
     *
     * @param amount
     * 要放入物品实例中的此方块实例数量。
     * 默认值：1
     * 范围：[1, 255]
     * @param withData
     * 是否包含物品实例的附加数据面。
     * 默认值：false
     * @returns
     * 一个包含指定数量和数据的物品实例。如果方块类型不兼容，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;
    /**
     * @remarks
     * 返回照射在某个方块上的光的总亮度级别。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @returns
     * 方块上的亮度级别。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(): number;
    /**
     * @beta
     * @returns
     * 返回方块的贴图颜色。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getMapColor(): RGBA;
    /**
     * @remarks
     * 如果此方块具有 'minecraft:multi_block' 特性，则返回所有已加载的方块部件数组。如果不具有该特性，则返回 undefined。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getParts(): Block[] | undefined;
    /**
     * @remarks
     * 返回此方块的净红石能量。
     *
     * @returns
     * 如果红石能量不适用于此方块，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getRedstonePower(): number | undefined;
    /**
     * @remarks
     * 返回从天空照射到某个方块的光的亮度级别。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @returns
     * 方块上的亮度级别。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(): number;
    /**
     * @remarks
     * 返回方块的一组标签。
     *
     * @returns
     * 该方块拥有的标签列表。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 如果此方块上存在指定组件，则返回 true。
     *
     * @param componentId
     * 要检索的组件标识符（例如 'minecraft:inventory'）。如果未指定命名空间前缀，则默认为 'minecraft:'。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    hasComponent(componentId: string): boolean;
}

    /**
     * @remarks
     * 检查此方块的置换是否具有特定标签。
     *
     * @param tag
     * 要检查的标签。
     * @returns
     * 如果此方块的置换具有该标签，则返回 `true`，否则返回 `false`。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example checkBlockTags.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     *
     * function checkBlockTags(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   // Fetch the block
     *   const block = targetLocation.dimension.getBlock(targetLocation);
     *
     *   // check that the block is loaded
     *   if (block) {
     *     log(`Block is dirt: ${block.hasTag('dirt')}`);
     *     log(`Block is wood: ${block.hasTag('wood')}`);
     *     log(`Block is stone: ${block.hasTag('stone')}`);
     *   }
     * }
     * ```
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回此方块是否阻止液体流动。
     *
     * @param liquidType
     * 此函数应针对的液体类型。
     * @returns
     * 此方块是否阻止液体流动。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回液体是否可以从指定方向流入此方块，或者当使用水桶将液体放入时，是否可以从指定方向流出。
     *
     * @param liquidType
     * 此函数应针对的液体类型。
     * @param flowDirection
     * 要检查的液体流动方向。
     * @returns
     * 液体是否可以从指定方向流入此方块，或者当使用水桶将液体放入时，是否可以从指定方向流出。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    liquidCanFlowFromDirection(liquidType: LiquidType, flowDirection: Direction): boolean;
    /**
     * @remarks
     * 返回此方块在接触液体时是否会被移除并生成其物品。
     *
     * @param liquidType
     * 此函数应针对的液体类型。
     * @returns
     * 此方块在接触液体时是否会被移除并生成其物品。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 测试此方块是否匹配特定条件。
     *
     * @param blockName
     * 用于匹配此 API 的方块类型标识符。
     * @param states
     * 可选的方块状态集合，用于测试此方块。
     * @returns
     * 如果方块匹配指定条件，则返回 true。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks
     * 返回此方块北方的 {@link Block}（Z 轴负方向）。
     *
     * @param steps
     * 向北移动后再返回的步数。默认为：1。
     * @returns
     * 此方块北方的 {@link Block}，如果无法获取则为 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    north(steps?: number): Block | undefined;
    /**
     * @remarks
     * 返回相对于此方块的偏移向量处的方块。
     *
     * @param offset
     * 偏移向量。例如，偏移 0, 1, 0 将返回当前方块上方的方块。
     * @returns
     * 指定偏移处的方块，如果无法获取该方块（例如，该方块及其相对区块尚未加载），则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    offset(offset: Vector3): Block | undefined;
    /**
     * @remarks
     * 将维度中的方块设置为该置换的状态。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param permutation
     * 包含该方块一组属性状态的置换。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * @remarks
     * 设置方块类型。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param blockType
     * 要应用的方块类型标识符 - 例如 minecraft:powered_repeater。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setType(blockType: BlockType | string): void;
    /**
     * @remarks
     * 设置此方块是否具有含水状态 - 例如，楼梯是否浸没在水中。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param isWaterlogged
     * 如果方块内部应有水，则为 true。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setWaterlogged(isWaterlogged: boolean): void;
    /**
     * @remarks
     * 返回此方块南方的 {@link Block}（Z 轴正方向）。
     *
     * @param steps
     * 向南移动后再返回的步数。默认为：1。
     * @returns
     * 此方块南方的 {@link Block}，如果无法获取则为 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    south(steps?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * 尝试通过首先检查放置是否有效，将维度中的方块设置为该置换的状态。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param permutation
     * 包含该方块一组属性状态的置换。
     * @returns
     * 如果方块置换数据成功设置，则返回 `true`，否则返回 `false`。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
    /**
     * @remarks
     * 返回此方块西方的 {@link Block}（X 轴负方向）。
     *
     * @param steps
     * 向西移动后再返回的步数。默认为：1。
     * @returns
     * 此方块西方的 {@link Block}，如果无法获取则为 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;
}