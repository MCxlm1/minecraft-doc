/**
 * 包含一组在世界范围内可用的事件。
 * 涵盖整个世界的作用域。
 */
export class WorldAfterEvents {
    private constructor();

    /**
     * @remarks
     * 当方块容器关闭时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly blockContainerClosed: BlockContainerClosedAfterEventSignal;

    /**
     * @remarks
     * 当方块容器打开时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly blockContainerOpened: BlockContainerOpenedAfterEventSignal;

    /**
     * @remarks
     * 爆炸摧毁的每个方块位置都会触发此事件。
     * 该事件在方块已被摧毁后触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;

    /**
     * @remarks
     * 当按钮被按下时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 聊天消息已广播或发送给玩家后触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly chatSend: ChatSendAfterEventSignal;

    /**
     * @remarks
     * 当实体事件被触发并会更新实体的组件定义状态时，
     * 触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;

    /**
     * @remarks
     * 当效果（如中毒）被添加到实体上时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;

    /**
     * @remarks
     * 当实体容器关闭时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityContainerClosed: EntityContainerClosedAfterEventSignal;

    /**
     * @remarks
     * 当实体容器打开时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityContainerOpened: EntityContainerOpenedAfterEventSignal;

    /**
     * @remarks
     * 当实体死亡时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityDie: EntityDieAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHeal: EntityHealAfterEventSignal;

    /**
     * @remarks
     * 当实体生命值发生任何程度的变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;

    /**
     * @remarks
     * 当实体击中方块（即近战攻击方块）时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;

    /**
     * @remarks
     * 当实体击中另一个实体（即近战攻击实体）时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;

    /**
     * @remarks
     * 当实体受伤（受到伤害）时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;

    /**
     * @remarks
     * 当实体掉落物品时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityItemDrop: EntityItemDropAfterEventSignal;

    /**
     * @remarks
     * 当实体拾取物品时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityItemPickup: EntityItemPickupAfterEventSignal;

    /**
     * @remarks
     * 当实体被加载时触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;

    /**
     * @remarks
     * 当实体被移除时触发（例如，可能被卸载，或在被击杀后被移除）。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;

    /**
     * @remarks
     * 当实体生成时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;

    /**
     * @rc
     * @remarks
     * 当实体开始潜行时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityStartSneaking: EntityStartSneakingAfterEventSignal;

    /**
     * @rc
     * @remarks
     * 当实体停止潜行时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityStopSneaking: EntityStopSneakingAfterEventSignal;

    /**
     * @rc
     * @remarks
     * 当实体被驯服时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityTamed: EntityTamedAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityUpgrade: EntityUpgradeAfterEventSignal;

    /**
     * @remarks
     * 爆炸发生后触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly explosion: ExplosionAfterEventSignal;

    /**
     * @remarks
     * 当 world.gameRules 属性发生变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品完成充能时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品停止充能时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品开始充能时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;

    /**
     * @remarks
     * 当玩家按下“使用物品 / 放置方块”按钮并成功使用物品或放置方块时触发此事件。
     * 如果放置了多个方块，此事件只会在方块放置开始时触发一次。
     * 注意：此事件不适用于锄头或斧头物品。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品停止充能时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;

    /**
     * @remarks
     * 当玩家成功使用物品后松开“使用物品 / 放置方块”按钮时触发此事件。
     * 注意：此事件不适用于锄头或斧头物品。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;

    /**
     * @remarks
     * 当玩家成功使用物品时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;

    /**
     * @remarks
     * 拉杆被拉动。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 此事件是内部实现细节，目前不具备实际功能。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当某个包（pack）设置被更改时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly packSettingChange: PackSettingChangeAfterEventSignal;

    /**
     * @remarks
     * 当活塞伸展或收缩时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;

    /**
     * @remarks
     * 当玩家破坏方块时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;

    /**
     * @remarks
     * 当 {@link InputButton} 状态发生变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;

    /**
     * @remarks
     * 当玩家取消破坏方块时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerCancelBreakingBlock: PlayerCancelBreakingBlockAfterEventSignal;

    /**
     * @remarks
     * 当玩家移动到不同维度时触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerEmote: PlayerEmoteAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家选择的槽位发生变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家的 {@link InputMode} 发生变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家的输入权限发生变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家与方块交互时触发的事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;

    /**
     * @remarks
     * 当玩家与实体交互时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;

    /**
     * @remarks
     * 当物品被添加或移除到玩家物品栏时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家加入世界时触发此事件。另请参阅 playerSpawn，这是另一个相关事件，可用于捕获玩家在世界中首次生成的情况。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;

    /**
     * @remarks
     * 当玩家离开世界时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;

    /**
     * @remarks
     * 当玩家放置方块时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;

    /**
     * @remarks
     * 当玩家生成或重生时触发此事件。请注意，此事件中的一个附加标志会告诉你玩家是在加入后立即生成还是重生。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;

    /**
     * @remarks
     * 当玩家开始破坏方块时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerStartBreakingBlock: PlayerStartBreakingBlockAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerSwingStart: PlayerSwingStartAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当玩家对实体使用命名牌时触发的事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerUseNameTag: PlayerUseNameTagAfterEventSignal;

    /**
     * @remarks
     * 压力板已弹起（即压力板上没有实体）。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;

    /**
     * @remarks
     * 压力板已被按下（至少有一个实体移动到压力板上）。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;

    /**
     * @remarks
     * 当投射物击中方块时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;

    /**
     * @remarks
     * 当投射物击中实体时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;

    /**
     * @rc
     * @remarks
     * 跟踪的声音的声明时长已结束。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly soundCompleted: SoundCompletedAfterEventSignal;

    /**
     * @remarks
     * 目标方块被击中。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;

    /**
     * @remarks
     * 绊线被触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;

    /**
     * @remarks
     * 当 Minecraft 中的天气发生变化时，将触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当 {@link WorldClock} 被暂停时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldClockOnPaused: WorldClockOnPausedAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当 {@link WorldClock} 被恢复时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldClockOnResumed: WorldClockOnResumedAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当 {@link WorldClock} 的时间到达时钟上的 {@link TimeMarker} 时触发此事件。这可能发生在常规游戏 tick 期间或设置时间时。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldClockOnTimeMarker: WorldClockOnTimeMarkerAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当 {@link WorldClock} 的时间被更改时触发此事件。当通过脚本或命令直接设置时间，或时钟达到最大时间并重新开始时，可能会发生这种情况。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldClockOnTimeModified: WorldClockOnTimeModifiedAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldLoad: WorldLoadAfterEventSignal;

}