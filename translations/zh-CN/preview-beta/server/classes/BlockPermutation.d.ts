/**
 * 包含 {@link BlockType} 与属性（有时也称为方块状态）的组合，
 * 用于描述一个方块（但不属于特定的 {@link Block}）。
 * @example addTranslatedSign.ts
 * ```typescript
 * import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   const dim = players[0].dimension;
 *
 *   const signBlock = dim.getBlock(targetLocation);
 *
 *   if (!signBlock) {
 *     log('Could not find a block at specified location.');
 *     return -1;
 *   }
 *   const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
 *
 *   signBlock.setPermutation(signPerm);
 *
 *   const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
 *
 *   signComponent?.setText({ translate: 'item.skull.player.name', with: [players[0].name] });
 * }
 * ```
 */
export class BlockPermutation {
    private constructor();
    /**
     * @remarks
     * 此 BlockPermutation 名称在 .lang 文件中使用的本地化键。
     *
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 此排列所拥有的 {@link BlockType}。
     *
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * 返回此方块在接触液体时是否会被移除。
     *
     * @param liquidType
     * 调用此函数时应使用的液体类型。
     * @returns
     * 此方块在接触液体时是否会被移除。
     * @throws
     * 此函数可能抛出错误。
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块是否可以在其上放置液体，即是否可以被水浸。
     *
     * @param liquidType
     * 调用此函数时应使用的液体类型。
     * @returns
     * 此方块是否可以在其上放置液体。
     * @throws
     * 此函数可能抛出错误。
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回与此方块关联的所有可用方块状态。
     *
     * @returns
     * 返回此排列所拥有的所有方块状态的列表。
     */
    getAllStates(): Record<string, boolean | number | string>;
    /**
     * @remarks
     * 基于此方块排列获取一个可用于物品 Container/ContainerSlot API 的原型物品实例。
     *
     * @param amount
     * 要放入原型物品实例中的此方块实例数量。
     * 默认值：1
     * 范围：[1, 255]
     * @returns
     * 基于此方块排列的原型物品实例；如果无法创建则返回 `undefined`。
     */
    getItemStack(amount?: number): ItemStack | undefined;
    /**
     * @remarks
     * 获取此排列的一个状态。
     *
     * @param stateName
     * 要返回值的方块状态名称。
     * @returns
     * 如果此排列拥有该状态则返回该状态，否则返回 `undefined`。
     */
    getState<T extends keyof minecraftvanilladata.BlockStateSuperset>(
        stateName: T,
    ): minecraftvanilladata.BlockStateSuperset[T] | undefined;
    /**
     * @remarks
     * 获取此排列的所有标签。
     *
     * @returns
     * 此排列的标签列表。
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查此排列是否具有特定标签。
     *
     * @returns
     * 如果排列具有该标签则返回 `true`，否则返回 `false`。
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
     * 调用此函数时应使用的液体类型。
     * @returns
     * 此方块是否阻止液体流动。
     * @throws
     * 此函数可能抛出错误。
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块在接触液体时是否会被移除并生成其物品。
     *
     * @param liquidType
     * 调用此函数时应使用的液体类型。
     * @returns
     * 此方块在接触液体时是否会被移除并生成其物品。
     * @throws
     * 此函数可能抛出错误。
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回指定排列是否与此排列匹配。如果未指定 states，则更广泛地按类型集合进行匹配。
     *
     * @param blockName
     * 要比较的方块类型标识符。
     * @param states
     * 要与该排列比较的可选状态集合。
     * @returns
     * 如果该排列匹配则返回 `true`，否则返回 `false`。
     */
    matches<T extends string = minecraftvanilladata.MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): boolean;
    /**
     * @remarks
     * 返回一个设置了特定属性的派生 BlockPermutation。
     *
     * @param name
     * 方块属性的标识符。
     * @param value
     * 方块属性的值。
     * @throws
     * 此函数可能抛出错误。
     */
    withState<T extends keyof minecraftvanilladata.BlockStateSuperset>(
        name: T,
        value: minecraftvanilladata.BlockStateSuperset[T],
    ): BlockPermutation;
    /**
     * @remarks
     * 给定一个类型标识符和一组可选属性，将返回一个可在其他方块 API（例如 block.setPermutation）中使用的 BlockPermutation 对象。
     *
     * @param blockName
     * 要检查的方块标识符。
     * @param states
     * 可选的一组方块状态。
     * @returns
     * 可用于其他方块 API 的 BlockPermutation 对象。
     * @throws
     * 此函数可能抛出错误。
     * @example addBlockColorCube.ts
     * ```typescript
     * import { BlockPermutation, DimensionLocation } from '@minecraft/server';
     * import { Vector3Utils } from '@minecraft/math';
     * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
     *
     * function addBlockColorCube(targetLocation: DimensionLocation) {
     *   const allWoolBlocks: string[] = [
     *     MinecraftBlockTypes.WhiteWool,
     *     MinecraftBlockTypes.OrangeWool,
     *     MinecraftBlockTypes.MagentaWool,
     *     MinecraftBlockTypes.LightBlueWool,
     *     MinecraftBlockTypes.YellowWool,
     *     MinecraftBlockTypes.LimeWool,
     *     MinecraftBlockTypes.PinkWool,
     *     MinecraftBlockTypes.GrayWool,
     *     MinecraftBlockTypes.LightGrayWool,
     *     MinecraftBlockTypes.CyanWool,
     *     MinecraftBlockTypes.PurpleWool,
     *     MinecraftBlockTypes.BlueWool,
     *     MinecraftBlockTypes.BrownWool,
     *     MinecraftBlockTypes.GreenWool,
     *     MinecraftBlockTypes.RedWool,
     *     MinecraftBlockTypes.BlackWool,
     *   ];
     *
     *   const cubeDim = 7;
     *
     *   let colorIndex = 0;
     *
     *   for (let x = 0; x <= cubeDim; x++) {
     *     for (let y = 0; y <= cubeDim; y++) {
     *       for (let z = 0; z <= cubeDim; z++) {
     *         colorIndex++;
     *         targetLocation.dimension
     *           .getBlock(Vector3Utils.add(targetLocation, { x, y, z }))
     *           ?.setPermutation(BlockPermutation.resolve(allWoolBlocks[colorIndex % allWoolBlocks.length]));
     *       }
     *     }
     *   }
     * }
     * ```
     */
    static resolve<T extends string = minecraftvanilladata.MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): BlockPermutation;
}