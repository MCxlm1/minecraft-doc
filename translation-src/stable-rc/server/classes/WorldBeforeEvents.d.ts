/**
 * A set of events that fire before an actual action occurs. In
 * most cases, you can potentially cancel or modify the
 * impending event. Note that in before events any APIs that
 * modify gameplay state will not function and will throw an
 * error. (e.g., dimension.spawnEntity)
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @remarks
     * This event is triggered after an event has been added to an
     * entity.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHeal: EntityHealBeforeEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHurt: EntityHurtBeforeEventSignal;
    /**
     * @remarks
     * This event fires before an entity picks up an item.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityItemPickup: EntityItemPickupBeforeEventSignal;
    /**
     * @remarks
     * Fires before an entity is removed from the world (for
     * example, unloaded or removed after being killed.)
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * This event fires before a block is broken by a player.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @remarks
     * Fires before a player interacts with a block.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @remarks
     * Fires before a player interacts with an entity.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks
     * Fires when a player leaves the game.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly weatherChange: WeatherChangeBeforeEventSignal;
}
