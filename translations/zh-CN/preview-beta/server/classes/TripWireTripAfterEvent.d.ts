/**
 * 包含与绊线被触发事件相关的信息。
 * @example tripWireTripEvent.ts
 * ```typescript
 * import { world, system, BlockPermutation, TripWireTripAfterEvent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function tripWireTripEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // set up a tripwire
 *   const redstone = targetLocation.dimension.getBlock({
 *     x: targetLocation.x,
 *     y: targetLocation.y - 1,
 *     z: targetLocation.z,
 *   });
 *   const tripwire = targetLocation.dimension.getBlock(targetLocation);
 *
 *   if (redstone === undefined || tripwire === undefined) {
 *     log('Could not find block at location.');
 *     return -1;
 *   }
 *
 *   redstone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.RedstoneBlock));
 *   tripwire.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.TripWire));
 *
 *   world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {
 *     const eventLoc = tripWireTripEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
 *       log(
 *         'Tripwire trip event at tick ' +
 *           system.currentTick +
 *           (tripWireTripEvent.sources.length > 0 ? ' by entity ' + tripWireTripEvent.sources[0].id : '')
 *       );
 *     }
 *   });
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 该方块是否具有红石信号。
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * 导致绊线被触发的来源实体。
     *
     */
    readonly sources: Entity[];
}