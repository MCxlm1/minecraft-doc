/**
 * 管理按钮被按下时连接的调用回调。
 * @example buttonPushEvent.ts
 * ```typescript
 * import { world, system, BlockPermutation, ButtonPushAfterEvent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function buttonPushEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // set up a button on cobblestone
 *   const cobblestone = targetLocation.dimension.getBlock(targetLocation);
 *   const button = targetLocation.dimension.getBlock({
 *     x: targetLocation.x,
 *     y: targetLocation.y + 1,
 *     z: targetLocation.z,
 *   });
 *
 *   if (cobblestone === undefined || button === undefined) {
 *     log('Could not find block at location.');
 *     return -1;
 *   }
 *
 *   cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
 *   button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState('facing_direction', 1));
 *
 *   world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
 *     const eventLoc = buttonPushEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
 *       log('Button push event at tick ' + system.currentTick);
 *     }
 *   });
 * }
 * ```
 */
export class ButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在按钮被按下时调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 按钮被按下时要调用的函数。
     * @returns
     * 返回用于取消订阅的回调函数。
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在按钮被按下时调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}