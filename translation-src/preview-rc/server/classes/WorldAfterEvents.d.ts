/**
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class WorldAfterEvents {
    private constructor();
    /**
     * @remarks
     * This event fires when a block container is closed.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly blockContainerClosed: BlockContainerClosedAfterEventSignal;
    /**
     * @remarks
     * This event fires when a block container is opened.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly blockContainerOpened: BlockContainerOpenedAfterEventSignal;
    /**
     * @remarks
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a button is pushed.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @remarks
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity container is closed.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityContainerClosed: EntityContainerClosedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity container is opened.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityContainerOpened: EntityContainerOpenedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity dies.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHeal: EntityHealAfterEventSignal;
    /**
     * @remarks
     * This event fires when entity health changes in any degree.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) a block.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) another entity.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is hurt (takes damage).
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity drops items.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityItemDrop: EntityItemDropAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity picks up items.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityItemPickup: EntityItemPickupAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is loaded.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is removed (for example, potentially
     * unloaded, or removed after being killed).
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is spawned.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly entityUpgrade: EntityUpgradeAfterEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @remarks
     * This event fires when a world.gameRules property has
     * changed.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item completes charging.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item is released from
     * charging.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item starts charging.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player successfully uses an item or
     * places a block by pressing the Use Item / Place Block
     * button. If multiple blocks are placed, this event will only
     * occur once at the beginning of the block placement. Note:
     * This event cannot be used with Hoe or Axe items.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item stops charging.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player releases the Use Item / Place
     * Block button after successfully using an item. Note: This
     * event cannot be used with Hoe or Axe items.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @remarks
     * A lever has been pulled.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @remarks
     * This event fires when a piston expands or retracts.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is broken by a player.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when an {@link InputButton} state is
     * changed.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player cancels breaking a block.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerCancelBreakingBlock: PlayerCancelBreakingBlockAfterEventSignal;
    /**
     * @remarks
     * Fires when a player moved to a different dimension.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly playerEmote: PlayerEmoteAfterEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player's selected slot changes.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player's {@link InputMode} changes.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a players input permissions change.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
    /**
     * @remarks
     * An event for when a player interacts with a block.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player interacts with an entity.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when an item gets added or removed to the
     * player's inventory.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player leaves a world.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is placed by a player.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player starts breaking a block.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerStartBreakingBlock: PlayerStartBreakingBlockAfterEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly playerSwingStart: PlayerSwingStartAfterEventSignal;
    /**
     * @remarks
     * A pressure plate has popped back up (i.e., there are no
     * entities on the pressure plate.)
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @remarks
     * A pressure plate has pushed (at least one entity has moved
     * onto a pressure plate.)
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @remarks
     * This event fires when a projectile hits a block.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a projectile hits an entity.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @remarks
     * A target block was hit.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @remarks
     * A trip wire was tripped.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    /**
     * @remarks
     * This event will be triggered when the weather changes within
     * Minecraft.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly worldLoad: WorldLoadAfterEventSignal;
}
