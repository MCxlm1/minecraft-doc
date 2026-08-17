/**
 * 当存在于实体上时，该实体正在着火。
 * @example setOnFire.ts
 * ```typescript
 * import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
 * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);
 *
 *   skelly.setOnFire(20, true);
 *
 *   system.runTimeout(() => {
 *     const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
 *     log(onfire?.onFireTicksRemaining + ' fire ticks remaining.');
 *
 *     skelly.extinguishFire(true);
 *     log('Never mind. Fire extinguished.');
 *   }, 20);
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 火熄灭前剩余的 tick 数。
     *
     */
    readonly onFireTicksRemaining: number;
    static readonly componentId = 'minecraft:onfire';
}