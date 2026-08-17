/**
 * 定义一个用于更灵活处理的 JSON 结构。
 * @example addTranslatedSign.ts
 * ```typescript
 * import { DimensionLocation, world, BlockPermutation, BlockComponentTypes } from '@minecraft/server';
 *
 * function placeTranslatedSign(location: DimensionLocation, text: string) {
 *   const signBlock = location.dimension.getBlock(location);
 *
 *   if (!signBlock) {
 *     console.warn('Could not find a block at specified location.');
 *     return;
 *   }
 *   const signPerm = BlockPermutation.resolve('minecraft:standing_sign', { ground_sign_direction: 8 });
 *   signBlock.setPermutation(signPerm);
 *
 *   const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
 *   if (signComponent) {
 *     signComponent.setText({ translate: 'item.skull.player.name', with: [text] });
 *   } else {
 *     console.error('Could not find a sign component on the block.');
 *   }
 * }
 *
 * placeTranslatedSign(
 *   {
 *     dimension: world.getDimension('overworld'),
 *     x: 0,
 *     y: 0,
 *     z: 0,
 *   },
 *   'Steve'
 * );
 * ```
 * @example showTranslatedMessageForm.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 * import { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';
 *
 * function showTranslatedMessageForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   const messageForm = new MessageFormData()
 *     .title({ translate: 'permissions.removeplayer' })
 *     .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] })
 *     .button1('Player 1')
 *     .button2('Player 2');
 *
 *   messageForm
 *     .show(players[0])
 *     .then((formData: MessageFormResponse) => {
 *       // player canceled the form, or another dialog was up and open.
 *       if (formData.canceled || formData.selection === undefined) {
 *         return;
 *       }
 *
 *       log(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);
 *     })
 *     .catch((error: Error) => {
 *       log('Failed to show form: ' + error);
 *       return -1;
 *     });
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
export interface RawMessage {
    /**
     * @remarks
     * 提供当前消息的原始文本（raw-text）等价物。
     *
     */
    rawtext?: RawMessage[];
    /**
     * @remarks
     * 提供一个标记（token），该标记将被替换为分数的值。
     *
     */
    score?: RawMessageScore;
    /**
     * @remarks
     * 提供一个要使用的字符串字面量值。
     *
     */
    text?: string;
    /**
     * @remarks
     * 提供一个翻译标记（token），如果客户端拥有与玩家语言匹配的可用资源，则该标记将在客户端被翻译。
     *
     */
    translate?: string;
    /**
     * @remarks
     * 翻译标记的参数。可以是字符串数组，也可以是包含原始文本对象数组的 RawMessage。
     *
     */
    with?: string[] | RawMessage;
}