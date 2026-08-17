/**
 * 管理与绊线被触发时相关的回调。
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
     * 添加一个回调，当绊线被触发时将调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当绊线被触发时要执行的回调函数。该回调接收一个 {@link TripWireTripAfterEvent} 对象作为参数。
     * @returns 返回传入的回调函数本身，便于后续通过 unsubscribe 取消订阅。
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在绊线被触发时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}