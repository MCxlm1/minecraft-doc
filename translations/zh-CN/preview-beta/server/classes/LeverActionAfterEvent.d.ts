/**
 * 包含与拉杆激活或停用相关的
 * 更改信息。
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
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果拉杆已激活（即正在传输
     * 电力），则为 true。
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * 可选的触发拉杆激活的玩家。
     *
     */
    readonly player: Player;
}