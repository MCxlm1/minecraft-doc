/**
 * @beta
 * 管理与在聊天消息发送前触发的事件相关联的回调函数。
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
     * 添加一个回调函数，该函数将在新聊天消息发送前被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包在受限执行权限下被调用。
     * @returns
     * 返回一个在受限执行权限下被调用的闭包。
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其不再在新聊天消息发送前被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}