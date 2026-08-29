/**
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 */
export class BeforeChatEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called before new chat messages
     * are sent.
     * @param callback
     */
    subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before new chat
     * messages are sent.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
    protected constructor();
}
