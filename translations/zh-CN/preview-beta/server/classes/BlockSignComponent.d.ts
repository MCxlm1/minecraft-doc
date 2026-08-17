/**
 * 表示一个可以在其上显示文本的方块。
 * @example addSign.ts
 * ```typescript
 * import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function addSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
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
 *   signComponent?.setText(`Basic sign!\nThis is green on the front.`);
 * }
 * ```
 * @example addTwoSidedSign.ts
 * ```typescript
 * import {
 *   BlockPermutation,
 *   BlockSignComponent,
 *   SignSide,
 *   DyeColor,
 *   BlockComponentTypes,
 *   DimensionLocation,
 * } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function addTwoSidedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const signBlock = targetLocation.dimension.getBlock(targetLocation);
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
 *   if (signComponent) {
 *     signComponent.setText(`Party Sign!\nThis is green on the front.`);
 *     signComponent.setText(`Party Sign!\nThis is red on the back.`, SignSide.Back);
 *     signComponent.setTextDyeColor(DyeColor.Green);
 *     signComponent.setTextDyeColor(DyeColor.Red, SignSide.Back);
 *
 *     // players cannot edit sign!
 *     signComponent.setWaxed(true);
 *   } else {
 *     log('Could not find sign component.');
 *   }
 * }
 * ```
 * @example updateSignText.ts
 * ```typescript
 * import { BlockSignComponent, BlockComponentTypes, DimensionLocation, RawMessage, RawText } from '@minecraft/server';
 *
 * function updateSignText(targetLocation: DimensionLocation) {
 *   const block = targetLocation.dimension.getBlock(targetLocation);
 *   if (!block) {
 *     console.warn('Could not find a block at specified location.');
 *     return;
 *   }
 *
 *   const sign = block.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
 *   if (sign) {
 *     // RawMessage
 *     const helloWorldMessage: RawMessage = { text: 'Hello World' };
 *     sign.setText(helloWorldMessage);
 *
 *     // RawText
 *     const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
 *     sign.setText(helloWorldText);
 *
 *     // Regular string
 *     sign.setText('Hello World');
 *   } else {
 *     console.warn('Could not find a sign component on the block.');
 *   }
 * }
 * ```
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
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 玩家是否可以编辑该告示牌。如果告示牌使用了蜜脾或调用了 `setWaxed`，则会发生此情况。
     *
     * @throws 此属性在使用时可能会抛出错误。
     */
    readonly isWaxed: boolean;
    static readonly componentId = 'minecraft:sign';
    /**
     * @remarks
     * 如果 `setText` 被调用时使用的是 RawMessage 或 RawText 对象，则返回告示牌的 RawText；否则返回 undefined。
     *
     * @param side
     * 要读取的告示牌侧面。如果未提供，则返回告示牌正面的信息。
     * 默认值：0
     * @returns
     * 告示牌上的原始文本；如果未使用 RawMessage 或 RawText 设置文本，则返回 undefined。
     * @throws 此函数可能会抛出错误。
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * @remarks
     * 如果 `setText` 被调用时使用的是字符串，则返回告示牌的文本；否则返回 undefined。
     *
     * @param side
     * 要读取的告示牌侧面。如果未提供，则返回告示牌正面的信息。
     * 默认值：0
     * @returns
     * 告示牌上的文本；如果未使用字符串设置文本，则返回 undefined。
     * @throws 此函数可能会抛出错误。
     */
    getText(side?: SignSide): string | undefined;
    /**
     * @remarks
     * 获取文本上的染料颜色；如果告示牌未被染色，则返回 undefined。
     *
     * @param side
     * 要读取染料的告示牌侧面。如果未提供，则返回告示牌正面的染料。
     * 默认值：0
     * @returns
     * 文本的染料颜色；如果告示牌未被染色，则返回 undefined。
     * @throws 此函数可能会抛出错误。
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @remarks
     * 设置告示牌组件的文本。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param message
     * 要设置在告示牌上的信息。如果设置为字符串，则调用 `getText` 读取该字符串。如果设置为 RawMessage，则调用 `getRawText` 将返回 RawText。
     * @param side
     * 要设置信息的告示牌侧面。如果未提供，则信息将设置在告示牌的正面。
     * 默认值：0
     * @throws
     * 如果提供的信息长度超过 512 个字符，则抛出错误。
     */
    setText(message: RawMessage | string, side?: SignSide): void;
    /**
     * @remarks
     * 设置文本的染料颜色。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param color
     * 要应用于告示牌的染料颜色；如果为 undefined，则清除告示牌上的染料。
     * 默认值：null
     * @param side
     * 要设置颜色的告示牌侧面。如果未提供，则颜色将设置在告示牌的正面。
     * 默认值：0
     * @throws 此函数可能会抛出错误。
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @remarks
     * 使玩家无法编辑此告示牌。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param waxed
     * 是否对告示牌进行打蜡处理。如果为 true，则玩家无法编辑该告示牌。
     * @throws 此函数可能会抛出错误。
     */
    setWaxed(waxed: boolean): void;
}