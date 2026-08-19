/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 * @example customCommand.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 *
 * function customCommand(targetLocation: DimensionLocation) {
 *   const chatCallback = world.beforeEvents.chatSend.subscribe(eventData => {
 *     if (eventData.message.includes('cancel')) {
 *       // Cancel event if the message contains "cancel"
 *       eventData.cancel = true;
 *     } else {
 *       const args = eventData.message.split(' ');
 *
 *       if (args.length > 0) {
 *         switch (args[0].toLowerCase()) {
 *           case 'echo':
 *             // Send a modified version of chat message
 *             world.sendMessage(`Echo '${eventData.message.substring(4).trim()}'`);
 *             break;
 *           case 'help':
 *             world.sendMessage(`Available commands: echo <message>`);
 *             break;
 *         }
 *       }
 *     }
 *   });
 * }
 * ```
 */
export class ChatSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before new chat messages
     * are sent.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before new chat
     * messages are sent.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}
