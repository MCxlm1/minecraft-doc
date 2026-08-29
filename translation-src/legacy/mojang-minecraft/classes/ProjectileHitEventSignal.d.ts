/**
 * Manages callbacks that are connected to when a projectile
 * hits an entity or block.
 */
export class ProjectileHitEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits
     * an entity or block.
     * @param callback
     */
    subscribe(callback: (arg: ProjectileHitEvent) => void): (arg: ProjectileHitEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * an entity or block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ProjectileHitEvent) => void): void;
    protected constructor();
}
