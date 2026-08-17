/**
 * 一组在实际行动发生前触发的事件。在大多数情况下，你可以取消或修改即将发生的事件。注意，在“之前”事件中，任何修改游戏状态的API将无法工作并会抛出错误（例如 dimension.spawnEntity）。
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * 在聊天消息被广播或发送给玩家前触发。
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
     * 在效果被添加到实体前触发。
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
     * 在实体从世界中移除前触发（例如，被卸载或在被杀死后移除）。
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
     * 此事件在爆炸发生前触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks
     * 此事件在玩家成功使用物品前触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * 此事件在玩家破坏方块前触发。
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
     * 在玩家离开游戏前触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 此事件在玩家放置方块前触发。
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