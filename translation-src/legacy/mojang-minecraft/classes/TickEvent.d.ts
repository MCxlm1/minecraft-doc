/**
 * An event for handling updates, that fires 20 times every
 * second.
 */
export class TickEvent {
    /**
     * Current tick at the time this event was fired.
     */
    readonly "currentTick": number;
    /**
     * Time since the last tick was fired.
     */
    readonly "deltaTime": number;
    protected constructor();
}
