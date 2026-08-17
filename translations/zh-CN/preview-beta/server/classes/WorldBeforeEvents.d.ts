/**
 * 一组在实际动作发生前触发的事件。在大多数情况下，你可以取消或修改即将发生的事件。
 * 注意，在 before 事件中，任何修改游戏状态的 API 都将无法工作并会抛出错误（例如，dimension.spawnEntity）。
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * 此事件在聊天消息被广播或发送给玩家后触发。
     *
     * 此属性可在早期执行模式下读取。
     *
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
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * @remarks
     * 此事件在效果被添加到实体后触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHeal: EntityHealBeforeEventSignal;
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHurt: EntityHurtBeforeEventSignal;
    /**
     * @remarks
     * 此事件在实体拾取物品前触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityItemPickup: EntityItemPickupBeforeEventSignal;
    /**
     * @remarks
     * 在实体从世界中移除前触发（例如，卸载或在被杀死后移除）。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 在实体被驯服前触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityTamed: EntityTamedBeforeEventSignal;
    /**
     * @remarks
     * 此事件在爆炸发生后触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks
     * 此事件在物品被玩家成功使用时触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * 此事件在方块被玩家破坏前触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @remarks
     * 在玩家与方块交互前触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @remarks
     * 在玩家与实体交互前触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks
     * 在玩家离开游戏时触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 此事件在方块被玩家放置前触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly weatherChange: WeatherChangeBeforeEventSignal;
}