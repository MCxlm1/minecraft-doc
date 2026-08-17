/**
 * 注册一个基于脚本的事件处理器，用于处理
 * 实体生成时发生的情况。
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 用于注册一个事件处理器，以处理实体生成时发生的情况。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 处理生成事件的函数。
     * @returns
     * 返回传入的回调函数。
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
     * 取消注册之前订阅到此订阅事件的方法。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 之前传入 subscribe 事件中、需要取消注册的原始函数。
     */
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}