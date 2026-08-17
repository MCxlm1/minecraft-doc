/**
 * @beta
 * 表示世界中方块实体的动态属性。
 * 仅适用于方块实体。每个内容包在每个方块实体的动态属性存储中最多可使用 1KB。
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
     * 返回使用指定键存储的动态属性。键对于每个内容包是唯一的，不能用于检索其他内容包设置的动态属性。
     * 如果未找到该键，则返回 undefined。
     *
     * @param key - 要检索的动态属性的键。
     * @returns 返回存储的动态属性值；如果未找到该键，则返回 undefined。
     * @throws 可能抛出以下错误：
     * - {@link Error} - 通用错误。
     * - {@link InvalidBlockComponentError} - 当方块不包含此组件或组件无效时。
     * - {@link LocationInUnloadedChunkError} - 当方块位于未加载的区块中时。
     * - {@link LocationOutOfWorldBoundariesError} - 当方块位置超出世界边界时。
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 使用提供的键和值设置动态属性。键对于每个内容包是唯一的，不能用于设置其他内容包的动态属性。值可以是数字、字符串或 Vector3。
     * 将属性设置为 undefined 会将其从存储中移除。存储大小计入每个内容包 1KB 的限制。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param key - 要设置的动态属性的键。
     * @param value - 要存储的值。可以是数字、字符串或 Vector3。传入 undefined 会移除该属性。
     * @throws 可能抛出以下错误：
     * - {@link Error} - 通用错误。
     * - {@link InvalidBlockComponentError} - 当方块不包含此组件或组件无效时。
     * - {@link LocationInUnloadedChunkError} - 当方块位于未加载的区块中时。
     * - {@link LocationOutOfWorldBoundariesError} - 当方块位置超出世界边界时。
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 返回此方块实体的动态属性存储的当前大小（以字节为单位）。字节数仅计入你的内容包所设置的属性。1KB 限制是针对每个内容包的。
     *
     * @returns 返回此方块实体动态属性存储的当前大小（以字节为单位）。
     * @throws 可能抛出以下错误：
     * - {@link Error} - 通用错误。
     * - {@link InvalidBlockComponentError} - 当方块不包含此组件或组件无效时。
     * - {@link LocationInUnloadedChunkError} - 当方块位于未加载的区块中时。
     * - {@link LocationOutOfWorldBoundariesError} - 当方块位置超出世界边界时。
     */
    totalByteCount(): number;
}