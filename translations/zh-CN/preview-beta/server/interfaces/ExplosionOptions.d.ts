/**
 * 为 {@link
 * Dimension.createExplosion} 方法提供的额外配置选项。
 * @example createNoBlockExplosion.ts
 * ```typescript
 * import { DimensionLocation } from '@minecraft/server';
 * import { Vector3Utils } from '@minecraft/math';
 *
 * function createNoBlockExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const explodeNoBlocksLoc = Vector3Utils.floor(Vector3Utils.add(targetLocation, { x: 1, y: 2, z: 1 }));
 *
 *   log('Creating an explosion of radius 15 that does not break blocks.');
 *   targetLocation.dimension.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
 * }
 * ```
 * @example createExplosions.ts
 * ```typescript
 * import { DimensionLocation } from '@minecraft/server';
 * import { Vector3Utils } from '@minecraft/math';
 *
 * function createExplosions(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const explosionLoc = Vector3Utils.add(targetLocation, { x: 0.5, y: 0.5, z: 0.5 });
 *
 *   log('Creating an explosion of radius 15 that causes fire.');
 *   targetLocation.dimension.createExplosion(explosionLoc, 15, { causesFire: true });
 *
 *   const belowWaterLoc = Vector3Utils.add(targetLocation, { x: 3, y: 1, z: 3 });
 *
 *   log('Creating an explosion of radius 10 that can go underwater.');
 *   targetLocation.dimension.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
 * }
 * ```
 */
export interface ExplosionOptions {
    /**
     * @remarks
     * 是否爆炸的部分也会影响水下。
     *
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * 爆炸是否会破坏爆炸半径内的方块。
     *
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * 如果为 true，则爆炸会在爆炸半径内或附近产生火焰。
     *
     */
    causesFire?: boolean;
    /**
     * @remarks
     * 爆炸的可选来源。
     *
     */
    source?: Entity;
}