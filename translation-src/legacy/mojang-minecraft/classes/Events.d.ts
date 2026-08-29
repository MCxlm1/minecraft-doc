/**
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class Events {
    /**
     * This event fires before a chat message is broadcast or
     * delivered. The event can be canceled, and the message can
     * also be updated.
     */
    readonly "beforeChat": BeforeChatEventSignal;
    /**
     * This event is fired before the triggering of an entity event
     * that updates the component definition state of an entity.
     * Within this event, you can cancel or shape the impacted
     * components and event triggers.
     */
    readonly "beforeDataDrivenEntityTriggerEvent": BeforeDataDrivenEntityTriggerEventSignal;
    /**
     * This event is fired before an explosion occurs.
     */
    readonly "beforeExplosion": BeforeExplosionEventSignal;
    /**
     * For custom items, this event is triggered before the set of
     * defined components for the item change in response to a
     * triggered event. Note that this event is only fired for
     * custom data-driven items.
     */
    readonly "beforeItemDefinitionEvent": BeforeItemDefinitionEventSignal;
    /**
     * This event fires before an item is used by an entity or
     * player.
     */
    readonly "beforeItemUse": BeforeItemUseEventSignal;
    /**
     * This event fires before an item is used on a block by an
     * entity or player.
     */
    readonly "beforeItemUseOn": BeforeItemUseOnEventSignal;
    /**
     * Fires before a piston is activated.
     */
    readonly "beforePistonActivate": BeforePistonActivateEventSignal;
    /**
     * This event fires for a block that is broken by a player.
     */
    readonly "blockBreak": BlockBreakEventSignal;
    /**
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     */
    readonly "blockExplode": BlockExplodeEventSignal;
    /**
     * This event fires for a block that is placed by a player.
     */
    readonly "blockPlace": BlockPlaceEventSignal;
    /**
     * This event fires when a button is pushed.
     */
    readonly "buttonPush": ButtonPushEventSignal;
    /**
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     */
    readonly "chat": ChatEventSignal;
    /**
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     */
    readonly "dataDrivenEntityTriggerEvent": DataDrivenEntityTriggerEventSignal;
    /**
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     */
    readonly "effectAdd": EffectAddEventSignal;
    /**
     * This event fires when a new entity is created.
     */
    readonly "entityCreate": EntityCreateEventSignal;
    /**
     * This event fires when an entity hits (makes a melee attack)
     * and potentially impacts another entity or block.
     */
    readonly "entityHit": EntityHitEventSignal;
    /**
     * This event fires when an entity is hurt (takes damage).
     */
    readonly "entityHurt": EntityHurtEventSignal;
    /**
     * This event is fired after an explosion occurs.
     */
    readonly "explosion": ExplosionEventSignal;
    /**
     * This event fires when a chargeable item completes charging.
     */
    readonly "itemCompleteCharge": ItemCompleteChargeEventSignal;
    /**
     * For custom items, this event is triggered when the
     * fundamental set of defined components for the item change.
     * Note that this event is only fired for custom data-driven
     * items.
     */
    readonly "itemDefinitionEvent": ItemDefinitionEventSignal;
    /**
     * This event fires when a chargeable item is released from
     * charging.
     */
    readonly "itemReleaseCharge": ItemReleaseChargeEventSignal;
    /**
     * This event fires when a chargeable item starts charging.
     */
    readonly "itemStartCharge": ItemStartChargeEventSignal;
    /**
     * This event fires when any particular item is starting to be
     * used by an entity or player.
     */
    readonly "itemStartUseOn": ItemStartUseOnEventSignal;
    /**
     * This event fires when a chargeable item stops charging.
     */
    readonly "itemStopCharge": ItemStopChargeEventSignal;
    /**
     * This event fires when any particular item is ending being
     * used by an entity or player.
     */
    readonly "itemStopUseOn": ItemStopUseOnEventSignal;
    /**
     * This event fires when any particular item is used by an
     * entity or player.
     */
    readonly "itemUse": ItemUseEventSignal;
    /**
     * This event fires when any particular item is used on a block
     * by an entity or player.
     */
    readonly "itemUseOn": ItemUseOnEventSignal;
    /**
     * This event fires when a lever activates or is deactivated.
     */
    readonly "leverActivate": LeverActionEventSignal;
    /**
     * This event fires when a piston expands or retracts.
     */
    readonly "pistonActivate": PistonActivateEventSignal;
    /**
     * This event fires when a player joins a world.
     */
    readonly "playerJoin": PlayerJoinEventSignal;
    /**
     * This event fires when a player leaves a world.
     */
    readonly "playerLeave": PlayerLeaveEventSignal;
    /**
     * This event fires when a projectile hits an entity or block.
     */
    "projectileHit": ProjectileHitEventSignal;
    /**
     * This event fires every tick - which is 20 times per second.
     */
    readonly "tick": TickEventSignal;
    /**
     * This event will be triggered when the weather changes within
     * Minecraft.
     */
    readonly "weatherChange": WeatherChangeEventSignal;
    /**
     * This event fires when the script environment is initialized
     * on a World. In addition, you can register dynamic properties
     * within the scope of a world Initialize event.
     */
    readonly "worldInitialize": WorldInitializeEventSignal;
    protected constructor();
}
