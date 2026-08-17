/**
 * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}).
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
     * 此 BlockPermutation 名称的本地化键，用于 .lang 文件。
     *
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 此置换所对应的 {@link BlockType}。
     *
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * 返回此方块在接触液体时是否被移除。
     *
     * @param liquidType
     * 调用此函数时应指定的液体类型。
     * @returns
     * 此方块在接触液体时是否被移除。
     * @throws 此函数可能会抛出错误。
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块是否可以在其上方放置液体，即是否可被水淹。
     *
     * @param liquidType
     * 调用此函数时应指定的液体类型。
     * @returns
     * 此方块是否可以在其上方放置液体。
     * @throws 此函数可能会抛出错误。
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块关联的所有可用方块状态。
     *
     * @returns
     * 返回此置换所拥有的所有方块状态的列表。
     */
    getAllStates(): Record<string, boolean | number | string>;
    /**
     * @remarks
     * 基于此方块置换检索一个原型物品实例，可用于物品容器/容器槽 API。
     *
     * @param amount
     * 要放入原型物品实例中的此方块实例数量。
     * 默认值：1
     * 范围：[1, 255]
     * @returns
     * 返回原型物品实例，如果无法创建则返回 undefined。
     */
    getItemStack(amount?: number): ItemStack | undefined;
    /**
     * @remarks
     * 获取置换的某个状态。
     *
     * @param stateName
     * 要返回值的方块状态名称。
     * @returns
     * 如果置换具有该状态则返回状态值，否则返回 `undefined`。
     */
    getState<T extends keyof minecraftvanilladata.BlockStateSuperset>(
        stateName: T,
    ): minecraftvanilladata.BlockStateSuperset[T] | undefined;
    /**
     * @remarks
     * 创建置换的副本。
     *
     * @returns
     * 返回此置换拥有的所有标签的数组。
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查置换是否具有特定标签。
     *
     * @returns
     * 如果置换具有该标签则返回 `true`，否则返回 `false`。
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
     * 调用此函数时应指定的液体类型。
     * @returns
     * 此方块是否阻止液体流动。
     * @throws 此函数可能会抛出错误。
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块在接触液体时是否被移除并生成其物品。
     *
     * @param liquidType
     * 调用此函数时应指定的液体类型。
     * @returns
     * 此方块在接触液体时是否被移除并生成其物品。
     * @throws 此函数可能会抛出错误。
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回指定置换是否与此置换匹配。如果未指定状态，则更广泛地检查类型集合。
     *
     * @param blockName
     * 要比较的可选状态集合。
     * @returns
     * 如果置换匹配则返回 true，否则返回 false。
     */
    matches<T extends string = minecraftvanilladata.MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): boolean;
    /**
     * @remarks
     * 返回设置了特定属性的派生 BlockPermutation。
     *
     * @param name
     * 方块属性的标识符。
     * @param value
     * 方块属性的值。
     * @returns
     * 返回设置了指定属性的 BlockPermutation。
     * @throws 此函数可能会抛出错误。
     */
    withState<T extends keyof minecraftvanilladata.BlockStateSuperset>(
        name: T,
        value: minecraftvanilladata.BlockStateSuperset[T],
    ): BlockPermutation;
    /**
     * @remarks
     * 给定类型标识符和可选属性集，返回一个可用的 BlockPermutation 对象，用于其他方块 API（如 block.setPermutation）。
     *
     * @param blockName
     * 要检查的方块标识符。
     * @returns
     * 返回一个 BlockPermutation 对象。
     * @throws 此函数可能会抛出错误。
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