/**
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
export class ExplosionEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs.
     * @param callback
     */
    subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionEvent) => void): void;
    protected constructor();
}
