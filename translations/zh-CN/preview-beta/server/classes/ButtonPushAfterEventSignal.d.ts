/**
 * 管理按钮被按下时触发的回调。
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
     * 添加一个将在按钮被按下时调用的回调。
     *
     * 无法在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     *
     * @param callback - 要添加的回调，接收按钮按下事件。
     * @returns 返回传入的回调函数，以便后续取消订阅。
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在按钮被按下时会调用的回调。
     *
     * 无法在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}