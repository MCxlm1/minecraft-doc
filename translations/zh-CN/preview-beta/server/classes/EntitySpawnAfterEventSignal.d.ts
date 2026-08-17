/**
 * 注册一个基于脚本的事件处理器，用于处理实体生成时的事件。
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册一个事件处理器，用于处理实体生成时的事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 处理生成事件的函数。
     * @returns
     * 返回一个函数，可用于取消注册此事件处理器。
     * @example logEntitySpawnEvent.ts
     * ```typescript
     * import { world, system, EntitySpawnAfterEvent, DimensionLocation } from '@minecraft/server';
     * import { Vector3Utils } from '@minecraft/math';
     *
     * function logEntitySpawnEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   // register a new function that is called when a new entity is created.
     *   world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
     *     if (entityEvent && entityEvent.entity) {
     *       log(`New entity of type ${entityEvent.entity.typeId} created!`, 1);
     *     } else {
     *       log(`The entity event did not work as expected.`, -1);
     *     }
     *   });
     *
     *   system.runTimeout(() => {
     *     targetLocation.dimension.spawnEntity(
     *       'minecraft:horse<minecraft:ageable_grow_up>',
     *       Vector3Utils.add(targetLocation, { x: 0, y: 1, z: 0 })
     *     );
     *   }, 20);
     * }
     * ```
     */
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * 取消注册一个先前通过 subscribe 方法注册的事件处理器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 原始函数，该函数之前通过 subscribe 方法注册，现在需要取消注册。
     */
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}