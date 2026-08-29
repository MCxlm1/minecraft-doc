/**
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an effect is added
     * to an entity.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EffectAddEvent) => void, options?: EntityEventOptions): (arg: EffectAddEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an effect is added
     * to an entity.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddEvent) => void): void;
    protected constructor();
}
