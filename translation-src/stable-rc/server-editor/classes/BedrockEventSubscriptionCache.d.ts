/**
 * A cache for bedrock event subscriptions. Stores off a
 * subscription by event key, and upon teardown unregisters all
 * subscriptions.
 */
export declare class BedrockEventSubscriptionCache {
    /**
     * @remarks
     * Constructs a new instance of the
     * `BedrockEventSubscriptionCache` class
     *
     */
    constructor(mEvents: minecraftserver.WorldAfterEvents);
    /**
     * @remarks
     * Subcribes to a bedrock event using the key of the desired
     * event. When subscribed, the event handler is both returned,
     * but also cached internally for unsubscription. This means
     * the caller of the subscription does not need to worry about
     * unsubscription since the cache will automatically
     * unsubscribe handlers on overall teardown.
     *
     * @param event
     * The event on the bedrock APIs to which to subscribe
     * @param params
     * The parameters to the subscription method for the event.
     * Auto complete will display this for you
     */
    subscribeToBedrockEvent<T extends keyof minecraftserver.WorldAfterEvents>(
        event: T,
        ...params: Parameters<minecraftserver.WorldAfterEvents[T]['subscribe']>
    ):
        | ((arg: minecraftserver.BlockBreakAfterEvent) => void)
        | ((arg: minecraftserver.BlockExplodeAfterEvent) => void)
        | ((arg: minecraftserver.ChatSendAfterEvent) => void)
        | ((arg: minecraftserver.DataDrivenEntityTriggerAfterEvent) => void)
        | ((arg: minecraftserver.EffectAddAfterEvent) => void)
        | ((arg: minecraftserver.EntityDieAfterEvent) => void)
        | ((arg: minecraftserver.EntityHealthChangedAfterEvent) => void)
        | ((arg: minecraftserver.EntityHitBlockAfterEvent) => void)
        | ((arg: minecraftserver.EntityHitEntityAfterEvent) => void)
        | ((arg: minecraftserver.EntityHurtAfterEvent) => void)
        | ((arg: minecraftserver.EntityRemovedAfterEvent) => void)
        | ((arg: minecraftserver.ExplosionAfterEvent) => void)
        | ((arg: minecraftserver.ItemCompleteUseAfterEvent) => void)
        | ((arg: minecraftserver.ItemDefinitionTriggeredAfterEvent) => void)
        | ((arg: minecraftserver.ItemUseOnAfterEvent) => void)
        | ((arg: minecraftserver.LeverActionAfterEvent) => void)
        | ((arg: minecraftserver.MessageReceiveAfterEvent) => void)
        | ((arg: minecraftserver.PistonActivateAfterEvent) => void)
        | ((arg: minecraftserver.PlayerJoinAfterEvent) => void)
        | ((arg: minecraftserver.PlayerSpawnAfterEvent) => void)
        | ((arg: minecraftserver.ProjectileHitAfterEvent) => void)
        | ((arg: minecraftserver.TargetBlockHitAfterEvent) => void)
        | ((arg: minecraftserver.TripWireTripAfterEvent) => void)
        | ((arg: minecraftserver.WeatherChangeAfterEvent) => void)
        | ((arg: minecraftserver.WorldInitializeAfterEvent) => void);
    teardown(): void;
}
