/**
 * 包含与按钮按下变化相关的信息。
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
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 可选的触发按钮按下的来源。
     *
     */
    readonly source: Entity;
}