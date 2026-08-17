/**
 * 表示维度中的一个方块。方块代表维度中唯一的 X、Y 和 Z 坐标，
 * 并可获取/设置该位置的方块状态。此类型在 1.17.10.21 版本中
 * 进行了重大更新。
 */
export class Block {
    private constructor();

    /**
     * @remarks
     * 返回该方块所处的维度。
     *
     */
    readonly dimension: Dimension;

    /**
     * @remarks
     * 如果此方块是空气方块（即空区域），则返回 true。
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
     * 如果此方块是液体方块，则返回 true —— 例如，水和熔岩是液体，
     * 而空气和石头不是。含水方块（water logged blocks）不算液体方块。
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
     * 如果此方块是实心的且不可通过，则返回 true —— 例如，圆石和钻石块是实心的，
     * 而梯子和栅栏不是。
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
     * 如果此方块引用仍然有效，则返回 true
     * （例如，如果方块被卸载，则对该方块的引用将不再有效）。
     *
     */
    readonly isValid: boolean;

    /**
     * @remarks
     * 返回此方块是否被水浸没（waterlogged）。
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
     * 此方块名称在 .lang 文件中使用的本地化键。
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
     * 描述方块的其他配置数据。
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
     * 此方块的方块类型标识符。警告：原版方块名称可能会在未来的版本中更改，
     * 建议使用 'Block.matches' 进行方块比较。
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
     * 在返回前向上移动的步数。
     * 默认值：1
     * @returns
     * 返回上方对应步数处的方块；若不存在则返回 undefined。
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
     * 在返回前向下移动的步数。
     * 默认值：1
     * @returns
     * 返回下方对应步数处的方块；若不存在则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    below(steps?: number): Block | undefined;

    /**
     * @remarks
     * 返回此方块在 X 轴和 Z 轴上的中心点的 {@link Vector3}。
     *
     * @returns
     * 返回底部中心的坐标（X、Z 方向居中，Y 为该方块底部的 Y 坐标）。
     */
    bottomCenter(): Vector3;

    /**
     * @remarks
     * 返回此方块在接触液体时是否会被移除。
     *
     * @param liquidType
     * 调用此函数时应指定的液体类型。
     * @returns
     * 此方块接触液体时是否会被移除。
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
     * 返回此方块是否可以在其上放置液体，即是否可以含水（waterlogged）。
     *
     * @param liquidType
     * 调用此函数时应指定的液体类型。
     * @returns
     * 此方块是否可以在其上放置液体。
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
     * 检查将此方块类型或方块排列放置在此方块的指定面上是否有效。
     *
     * @param blockToPlace
     * 要检查放置位置的方块类型或方块排列。
     * @param faceToPlaceOn
     * 可选，指定此方块的某个面来检查是否可放置。
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
     * 返回此方块在 X、Y 和 Z 轴上的中心点的 {@link Vector3}。
     *
     * @returns
     * 返回方块中心的坐标（各轴均为 0.5 偏移）。
     */
    center(): Vector3;

    /**
     * @remarks
     * 返回此方块东侧的 {@link Block}（X 轴正方向）。
     *
     * @param steps
     * 在返回前向东移动的步数。
     * 默认值：1
     * @returns
     * 返回东侧对应步数处的方块；若不存在则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    east(steps?: number): Block | undefined;

    /**
     * @remarks
     * 获取方块的一个组件（表示额外能力）——例如，箱子方块的物品栏组件。
     *
     * @param componentId
     * 组件的标识符（例如 'minecraft:inventory'）。如果未指定命名空间前缀，
     * 则默认为 'minecraft:'。可用的组件 ID 包括 {@link BlockComponentTypes} 枚举中的
     * 以及通过 {@link BlockComponentRegistry} 注册的自定义组件 ID。
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
     * @returns
     * 返回此方块上的组件数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponents(): BlockComponent[];

    /**
     * @remarks
     * 基于此方块创建一个原型物品实例，可用于 Container/ContainerSlot API。
     *
     * @param amount
     * 要放入物品实例中的此方块的数量。
     * 默认值：1
     * 范围：[1, 255]
     * @param withData
     * 是否包含物品实例的其他数据属性。
     * 默认值：false
     * @returns
     * 一个包含指定数量和数据的物品实例。
     * 如果方块类型不兼容，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;

    /**
     * @remarks
     * 返回照射在某个方块上的总光照亮度级别。
     *
     * This function can't be called in restricted-execution mode.
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
     * 返回此方块的地图颜色。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getMapColor(): RGBA;

    /**
     * @remarks
     * 如果此方块具有 'minecraft:multi_block' 特性，则返回所有已加载方块部件的数组；
     * 如果不具有该特性，则返回 undefined。
     *
     * @returns
     * 返回已加载方块部件的数组；若方块不具有该特性，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getParts(): Block[] | undefined;

    /**
     * @remarks
     * 返回此方块的净红石信号强度。
     *
     * @returns
     * 如果红石信号强度不适用于此方块，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getRedstonePower(): number | undefined;

    /**
     * @remarks
     * 返回从天空照射到某个方块上的光照亮度级别。
     *
     * This function can't be called in restricted-execution mode.
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
     * 方块拥有的标签列表。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];

/**
     * @remarks
     * 如果指定组件存在于此方块上，则返回 true。
     *
     * @param componentId
     * 要检索的组件标识符（例如 'minecraft:inventory'）。如果未指定命名空间前缀，则假定为 'minecraft:'。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    hasComponent(componentId: string): boolean;

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
     * 应为其调用此函数的液体类型。
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
     * 返回液体是否可以从指定方向流入方块，或者当使用桶将液体放置其中时，液体是否可以从指定方向流出。
     *
     * @param liquidType
     * 应为其调用此函数的液体类型。
     * @returns
     * 液体是否可以从指定方向流入方块，或者当使用桶将液体放置其中时，液体是否可以从指定方向流出。
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
     * 返回此方块是否在接触液体时被移除并生成其物品。
     *
     * @param liquidType
     * 应为其调用此函数的液体类型。
     * @returns
     * 此方块是否在接触液体时被移除并生成其物品。
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
     * 用于匹配此API的方块类型标识符。
     * @param states
     * 可选的一组方块状态，用于测试此方块。
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
     * 返回此方块北侧（Z轴负方向）的 {@link Block}。
     *
     * @param steps
     * 返回前向北移动的步数。默认值：1
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
     * 偏移向量。例如，偏移量 0, 1, 0 将返回当前方块上方的方块。
     * @returns
     * 指定偏移处的方块，如果无法检索到该方块（例如，该方块及其相对区块尚未加载），则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    offset(offset: Vector3): Block | undefined;

    /**
     * @remarks
     * 将维度中的方块设置为置换的状态。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param permutation
     * 包含方块一组属性状态的置换。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setPermutation(permutation: BlockPermutation): void;

    /**
     * @remarks
     * 设置方块的类型。
     *
     * This function can't be called in restricted-execution mode.
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
     * This function can't be called in restricted-execution mode.
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
     * 返回此方块南侧（Z轴正方向）的 {@link Block}。
     *
     * @param steps
     * 返回前向南移动的步数。默认值：1
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
     * 通过首先检查放置是否有效，尝试将维度中的方块设置为置换的状态。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param permutation
     * 包含方块一组属性状态的置换。
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
     * 返回此方块西侧（X轴负方向）的 {@link Block}。
     *
     * @param steps
     * 返回前向西移动的步数。默认值：1
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;

}