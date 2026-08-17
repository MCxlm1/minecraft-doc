/**
 * 管理与拉杆移动（激活或取消激活）相关的回调。
 * @example leverActionEvent.ts
 * ```typescript
 * import { world, system, BlockPermutation, LeverActionAfterEvent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function leverActionEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // set up a lever
 *   const cobblestone = targetLocation.dimension.getBlock(targetLocation);
 *   const lever = targetLocation.dimension.getBlock({
 *     x: targetLocation.x,
 *     y: targetLocation.y + 1,
 *     z: targetLocation.z,
 *   });
 *
 *   if (cobblestone === undefined || lever === undefined) {
 *     log('Could not find block at location.');
 *     return -1;
 *   }
 *
 *   cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
 *   lever.setPermutation(
 *     BlockPermutation.resolve(MinecraftBlockTypes.Lever).withState('lever_direction', 'up_north_south')
 *   );
 *
 *   world.afterEvents.leverAction.subscribe((leverActionEvent: LeverActionAfterEvent) => {
 *     const eventLoc = leverActionEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
 *       log('Lever activate event at tick ' + system.currentTick);
 *     }
 *   });
 * }
 * ```
 */
export class LeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当拉杆被移动（激活或取消激活）时将调用该回调。
     *
     * 不能在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     * @param callback - 要添加的回调函数，参数为 LeverActionAfterEvent 事件。
     * @returns 返回传入的回调函数本身，可用于取消订阅。
     *
     */
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在拉杆被移动（激活或取消激活）时不再被调用。
     *
     * 不能在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     * @param callback - 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}