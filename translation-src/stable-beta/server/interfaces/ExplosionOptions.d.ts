/**
 * Additional configuration options for the
 * {@link Dimension.createExplosion} method.
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
     * Whether parts of the explosion also impact underwater.
     *
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * Whether the explosion will break blocks within the blast
     * radius.
     *
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     *
     */
    causesFire?: boolean;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     */
    source?: Entity;
}
