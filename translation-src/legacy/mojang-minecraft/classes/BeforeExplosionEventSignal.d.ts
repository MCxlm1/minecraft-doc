/**
 * Manages callbacks that are connected to before an explosion
 * occurs.
 */
export class BeforeExplosionEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when before an explosion
     * occurs. The callback can optionally change or cancel
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called from before when an
     * explosion would occur.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void;
    protected constructor();
}
