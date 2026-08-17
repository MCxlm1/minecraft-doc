/**
 * @beta
 * 管理连接到聊天消息发送前触发的事件的回调。
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
     * 添加一个将在新聊天消息发送前调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     * @returns
     * 以受限执行权限被调用的闭包。
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在新聊天消息发送前调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}