/**
 * Manages callbacks that are connected to when a button is
 * pushed.
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
     * Adds a callback that will be called when a button is pushed.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a button is
     * pushed.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}
