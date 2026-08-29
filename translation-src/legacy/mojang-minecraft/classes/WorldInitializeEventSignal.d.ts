/**
 * Manages callbacks that are run at the initialization of the
 * scripting environment for a World. Do note that this event
 * may run multiple times within a session in the case that the
 * /reload command is used.
 */
export class WorldInitializeEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when the scripting
     * environment is initialized for a World.
     * @param callback
     */
    subscribe(callback: (arg: WorldInitializeEvent) => void): (arg: WorldInitializeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called the scripting
     * environment is initialized for a World.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WorldInitializeEvent) => void): void;
    protected constructor();
}
