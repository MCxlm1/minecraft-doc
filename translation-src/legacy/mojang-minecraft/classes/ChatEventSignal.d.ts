/**
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
export class ChatEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when new chat messages
     * are sent.
     * @param callback
     * @example custom_command.js
     * ```typescript
     *        const chatCallback = World.events.beforeChat.subscribe((eventData) => {
     *          if (eventData.message.includes("cancel")) {
     *            // Cancel event if the message contains "cancel"
     *            eventData.canceled = true;
     *          } else {
     *            // Modify chat message being sent
     *            eventData.message = `Modified '${eventData.message}'`;
     *          }
     *        });
     *
     * ```
     */
    subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when new chat messages
     * are sent.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatEvent) => void): void;
    protected constructor();
}
