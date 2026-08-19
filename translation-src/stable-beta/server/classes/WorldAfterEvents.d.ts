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
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly blockContainerClosed: BlockContainerClosedAfterEventSignal;
    /**
     * @remarks
     * This event fires when a block container is opened.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly blockContainerOpened: BlockContainerOpenedAfterEventSignal;
    /**
     * @remarks
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a button is pushed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @remarks
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity container is closed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityContainerClosed: EntityContainerClosedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity container is opened.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityContainerOpened: EntityContainerOpenedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity dies.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityHeal: EntityHealAfterEventSignal;
    /**
     * @remarks
     * This event fires when entity health changes in any degree.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) a block.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) another entity.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is hurt (takes damage).
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity drops items.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityItemDrop: EntityItemDropAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity picks up items.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityItemPickup: EntityItemPickupAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is loaded.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is removed (for example, potentially
     * unloaded, or removed after being killed).
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is spawned.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @rc
     * @remarks
     * This event fires when an entity starts sneaking.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityStartSneaking: EntityStartSneakingAfterEventSignal;
    /**
     * @rc
     * @remarks
     * This event fires when an entity stops sneaking.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityStopSneaking: EntityStopSneakingAfterEventSignal;
    /**
     * @rc
     * @remarks
     * This event fires when an entity is tamed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityTamed: EntityTamedAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly entityUpgrade: EntityUpgradeAfterEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @remarks
     * This event fires when a world.gameRules property has
     * changed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item completes charging.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item is released from
     * charging.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item starts charging.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
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
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item stops charging.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player releases the Use Item / Place
     * Block button after successfully using an item. Note: This
     * event cannot be used with Hoe or Axe items.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @remarks
     * A lever has been pulled.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is an internal implementation detail, and is
     * otherwise not currently functional.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is triggered when a pack setting is changed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly packSettingChange: PackSettingChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a piston expands or retracts.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is broken by a player.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when an {@link InputButton} state is
     * changed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player cancels breaking a block.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerCancelBreakingBlock: PlayerCancelBreakingBlockAfterEventSignal;
    /**
     * @remarks
     * Fires when a player moved to a different dimension.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerEmote: PlayerEmoteAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player's selected slot changes.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player's {@link InputMode} changes.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a players input permissions change.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
    /**
     * @remarks
     * An event for when a player interacts with a block.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player interacts with an entity.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when an item gets added or removed to the
     * player's inventory.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player leaves a world.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is placed by a player.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player starts breaking a block.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerStartBreakingBlock: PlayerStartBreakingBlockAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerSwingStart: PlayerSwingStartAfterEventSignal;
    /**
     * @beta
     * @remarks
     * An event for when a player uses a named name tag on an
     * entity.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly playerUseNameTag: PlayerUseNameTagAfterEventSignal;
    /**
     * @remarks
     * A pressure plate has popped back up (i.e., there are no
     * entities on the pressure plate.)
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @remarks
     * A pressure plate has pushed (at least one entity has moved
     * onto a pressure plate.)
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @remarks
     * This event fires when a projectile hits a block.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a projectile hits an entity.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @rc
     * @remarks
     * A tracked sound's declared duration elapsed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly soundCompleted: SoundCompletedAfterEventSignal;
    /**
     * @remarks
     * A target block was hit.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @remarks
     * A trip wire was tripped.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    /**
     * @remarks
     * This event will be triggered when the weather changes within
     * Minecraft.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a {@link WorldClock} is paused.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly worldClockOnPaused: WorldClockOnPausedAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a {@link WorldClock} is resumed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly worldClockOnResumed: WorldClockOnResumedAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when the time of a {@link WorldClock} hits
     * a {@link TimeMarker} on the clock. This can happen during a
     * regular level tick or when the time is set.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly worldClockOnTimeMarker: WorldClockOnTimeMarkerAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a {@link WorldClock} time is changed.
     * This can happen when the time is directly set through
     * scripts or commands or when the clock reaches the maximum
     * time and restarts.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly worldClockOnTimeModified: WorldClockOnTimeModifiedAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly worldLoad: WorldLoadAfterEventSignal;
}
