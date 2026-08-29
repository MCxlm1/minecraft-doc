/**
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 */
export class LeverActionEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a lever is moved
     * (activates or deactivates).
     * @param callback
     */
    subscribe(callback: (arg: LeverActionEvent) => void): (arg: LeverActionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a lever is moved
     * (activates or deactivates).
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: LeverActionEvent) => void): void;
    protected constructor();
}
