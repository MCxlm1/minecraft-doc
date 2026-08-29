/**
 * Represents a block that can display text on it.
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
     * Whether or not players can edit the sign. This happens if a
     * sign has had a honeycomb used on it or `setWaxed` was called
     * on the sign.
     *
     * @throws This property can throw when used.
     */
    readonly isWaxed: boolean;
    static readonly componentId = 'minecraft:sign';
    /**
     * @remarks
     * Returns the RawText of the sign if `setText` was called with
     * a RawMessage or a RawText object, otherwise returns
     * undefined.
     *
     * @param side
     * The side of the sign to read the message from. If not
     * provided, this will return the message from the front side
     * of the sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * @remarks
     * Returns the text of the sign if `setText` was called with a
     * string, otherwise returns undefined.
     *
     * @param side
     * The side of the sign to read the message from. If not
     * provided, this will return the message from the front side
     * of the sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getText(side?: SignSide): string | undefined;
    /**
     * @remarks
     * Gets the dye that is on the text or undefined if the sign
     * has not been dyed.
     *
     * @param side
     * The side of the sign to read the dye from. If not provided,
     * this will return the dye on the front side of the sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @remarks
     * Sets the text of the sign component.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param message
     * The message to set on the sign. If set to a string, then
     * call `getText` to read that string. If set to a RawMessage,
     * then calling `getRawText` will return a RawText.
     * @param side
     * The side of the sign the message will be set on. If not
     * provided, the message will be set on the front side of the
     * sign.
     * Defaults to: 0
     * @throws
     * Throws if the provided message is greater than 512
     * characters in length.
     */
    setText(message: RawMessage | string, side?: SignSide): void;
    /**
     * @remarks
     * Sets the dye color of the text.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param color
     * The dye color to apply to the sign or undefined to clear the
     * dye on the sign.
     * Defaults to: null
     * @param side
     * The side of the sign the color will be set on. If not
     * provided, the color will be set on the front side of the
     * sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @remarks
     * Makes it so players cannot edit this sign.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setWaxed(waxed: boolean): void;
}
