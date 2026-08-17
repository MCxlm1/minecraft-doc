/**
 * 管理与绊线被触发时相关的回调。
 *
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
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当绊线被触发时会被调用的回调函数。
     *
     * 该函数不能在受限执行模式下调用。
     *
     * 该函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回用于取消订阅的回调函数。
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当绊线被触发时会被调用的回调函数。
     *
     * 该函数不能在受限执行模式下调用。
     *
     * 该函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}