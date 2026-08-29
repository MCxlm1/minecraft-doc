/**
 * An event that can be subscribed to. Leverage the token to
 * clean up handlers
 */
export declare interface EventSink<T> {
    /**
     * @remarks
     */
    subscribe(handler: EventHandler<T>): IEventToken;
}
