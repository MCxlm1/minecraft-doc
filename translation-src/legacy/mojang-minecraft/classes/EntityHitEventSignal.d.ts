/**
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 */
export class EntityHitEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits
     * another entity.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity makes a
     * melee attack on another entity.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitEvent) => void): void;
    protected constructor();
}
