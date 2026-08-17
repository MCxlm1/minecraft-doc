/**
 * @beta
 * 管理与聊天消息发送前触发的事件相关联的回调。
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
     * 添加一个将在新聊天消息发送之前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在新聊天消息发送之前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}