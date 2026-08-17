/**
 * 管理连接到拉杆移动（激活或停用）的回调。
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
     * 添加一个回调，当拉杆移动（激活或停用）时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在拉杆移动（激活或停用）时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}