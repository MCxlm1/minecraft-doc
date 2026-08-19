/**
 * 一组在实际动作发生之前触发的事件。在大多数情况下，你可以取消或修改即将发生的事件。
 * 请注意，在 before 事件中，任何修改游戏状态的 API 将无法生效并会抛出错误。
 * （例如，dimension.spawnEntity）
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * 当聊天消息被广播或发送给玩家后触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
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
     * 此事件在向实体添加效果后触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHeal: EntityHealBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHurt: EntityHurtBeforeEventSignal;
    /**
     * @remarks
     * 此事件在实体拾取物品之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityItemPickup: EntityItemPickupBeforeEventSignal;
    /**
     * @remarks
     * 在实体从世界中移除之前触发（例如，实体被卸载或在被击杀后移除）。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @rc
     * @remarks
     * 在实体被驯服之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityTamed: EntityTamedBeforeEventSignal;
    /**
     * @remarks
     * 此事件在爆炸发生前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks
     * 此事件在玩家成功使用物品时触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * 此事件在玩家破坏方块之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @remarks
     * 在玩家与方块交互之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @remarks
     * 在玩家与实体交互之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks
     * 在玩家离开游戏时触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 此事件在玩家放置方块之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly weatherChange: WeatherChangeBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 此事件在 {@link WorldClock} 达到其最大时间并即将重启时触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldClockOnRestart: WorldClockOnRestartBeforeEventSignal;
}