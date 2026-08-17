/**
 * @beta
 * 表示世界中方块的动态属性。
 * 仅可通过方块实体使用。每个内容包在每个方块实体的动态属性存储中最多使用1KB。
 * @example rememberPlayerInteraction.ts
 * ```typescript
 * import { system } from '@minecraft/server-v2';
 *
 * system.beforeEvents.startup.subscribe(initEvent => {
 *   initEvent.blockComponentRegistry.registerCustomComponent('scripting_demo_pack:block_entity_onPlayerInteract', {
 *     onPlayerInteract: e => {
 *       if (e.player === undefined) {
 *         return;
 *       }
 *
 *       const dynamicProperties = e.block.getComponent('minecraft:dynamic_properties');
 *       if (!dynamicProperties) {
 *         return;
 *       }
 *
 *       const lastInteractorValue = dynamicProperties.get('last_interactor');
 *       const lastVisitor = typeof lastInteractorValue === 'string' ? lastInteractorValue : 'unknown';
 *       const lastTick = Number(dynamicProperties.get('last_interact_tick') ?? system.currentTick);
 *       const ticksAgo = Math.max(0, system.currentTick - lastTick);
 *
 *       if (lastVisitor === e.player.name) {
 *         e.player.sendMessage("do you remember that player? I 'member, it was here " + String(ticksAgo) + ' ticks ago!');
 *       } else {
 *         e.player.sendMessage("oh, I don't remember that player");
 *       }
 *
 *       dynamicProperties.set('last_interactor', e.player.name);
 *       dynamicProperties.set('last_interact_tick', system.currentTick);
 *     },
 *   });
 * });
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockDynamicPropertiesComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:dynamic_properties';
    /**
     * @remarks
     * 使用提供的键返回存储的动态属性。
     * 键对每个内容包是唯一的，不能用于检索其他内容包设置的动态属性。
     * 如果未找到键，则返回 undefined。
     *
     * @param key - 要检索的键。
     * @returns 返回存储的动态属性值，如果未找到则返回 undefined。
     * @throws 此函数可能会抛出错误。
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 使用提供的键和值设置动态属性。
     * 键对每个内容包是唯一的，不能用于为其他内容包设置动态属性。
     * 值可以是布尔值、数字、字符串或 Vector3。
     * 使用 undefined 值设置属性会将其从存储中移除。
     * 存储大小使用计入每个内容包的 1KB 限制。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param key - 要设置的键。
     * @param value - 要设置的值，如果为 undefined 则移除该属性。
     * @throws 此函数可能会抛出错误。
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 返回此方块实体的动态属性存储的当前大小（字节）。
     * 字节计数仅计算你的内容包设置的属性。
     * 1KB 限制是每个内容包的。
     *
     * @returns 返回当前动态属性存储的大小（字节）。
     * @throws 此函数可能会抛出错误。
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    totalByteCount(): number;
}