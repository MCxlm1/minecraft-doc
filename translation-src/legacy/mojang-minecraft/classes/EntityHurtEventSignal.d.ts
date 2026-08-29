/**
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an entity is hurt.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EntityHurtEvent) => void, options?: EntityEventOptions): (arg: EntityHurtEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is hurt.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHurtEvent) => void): void;
    protected constructor();
}
