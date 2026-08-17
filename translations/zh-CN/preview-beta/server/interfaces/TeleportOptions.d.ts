/**
 * 包含用于传送实体的附加选项。
 * @example teleport.ts
 * ```typescript
 * import { system, DimensionLocation } from '@minecraft/server';
 * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function teleport(targetLocation: DimensionLocation) {
 *   const cow = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Cow, targetLocation);
 *
 *   system.runTimeout(() => {
 *     cow.teleport(
 *       { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 },
 *       {
 *         facingLocation: targetLocation,
 *       }
 *     );
 *   }, 20);
 * }
 * ```
 * @example teleportMovement.ts
 * ```typescript
 * import { system, DimensionLocation } from '@minecraft/server';
 * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function teleportMovement(targetLocation: DimensionLocation) {
 *   const pig = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Pig, targetLocation);
 *
 *   let inc = 1;
 *   const runId = system.runInterval(() => {
 *     pig.teleport(
 *       { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
 *       {
 *         facingLocation: targetLocation,
 *       }
 *     );
 *
 *     if (inc > 100) {
 *       system.clearRun(runId);
 *     }
 *     inc++;
 *   }, 4);
 * }
 * ```
 */
export interface TeleportOptions {
    /**
     * @remarks
     * 是否检查方块是否会阻挡传送后的
     * 实体。
     *
     */
    checkForBlocks?: boolean;
    /**
     * @remarks
     * 要传送到的维度。如果未
     * 指定，则实体将在其所在的维度
     * 内传送。
     *
     */
    dimension?: Dimension;
    /**
     * @remarks
     * 传送后实体应面对的位置。
     *
     */
    facingLocation?: Vector3;
    /**
     * @remarks
     * 是否保留传送后实体的速度。
     *
     */
    keepVelocity?: boolean;
    /**
     * @remarks
     * 传送后实体的旋转。
     *
     */
    rotation?: Vector2;
}