/**
 * 包含与世界中实体生成相关的数据。
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
export class EntitySpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 初始化原因（Spawned、Born 等）。
     *
     */
    readonly cause: EntityInitializationCause;
    /**
     * @remarks
     * 被生成的实体。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    entity: Entity;
}