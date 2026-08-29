/**
 * Manages callbacks that are connected to when a button is
 * pushed.
 */
export class ButtonPushEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a button is pushed.
     * @param callback
     */
    subscribe(callback: (arg: ButtonPushEvent) => void): (arg: ButtonPushEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a button is
     * pushed.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ButtonPushEvent) => void): void;
    protected constructor();
}
