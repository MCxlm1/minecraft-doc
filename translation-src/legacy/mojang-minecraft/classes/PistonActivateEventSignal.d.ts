/**
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a piston expands or
     * retracts.
     * @param callback
     * @example pistonEvent.ts
     * ```typescript
     *          let canceled = false;
     *
     *          const pistonLoc = new mc.BlockLocation(
     *            Math.floor(targetLocation.x) + 1,
     *            Math.floor(targetLocation.y) + 2,
     *            Math.floor(targetLocation.z) + 1
     *          );
     *
     *          const pistonCallback = mc.world.events.beforePistonActivate.subscribe((pistonEvent: mc.BeforePistonActivateEvent) => {
     *            if (pistonEvent.piston.location.equals(pistonLoc)) {
     *              log("Cancelling piston event");
     *              pistonEvent.cancel = true;
     *              canceled = true;
     *            }
     *          });
     * ```
     */
    subscribe(callback: (arg: PistonActivateEvent) => void): (arg: PistonActivateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateEvent) => void): void;
    protected constructor();
}
