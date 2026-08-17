/**
 * 包含一组可在世界范围内使用的事件。
 */
export class WorldAfterEvents {
    private constructor();

    /**
     * @remarks
     * 当方块容器关闭时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly blockContainerClosed: BlockContainerClosedAfterEventSignal;

    /**
     * @remarks
     * 当方块容器打开时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly blockContainerOpened: BlockContainerOpenedAfterEventSignal;

    /**
     * @remarks
     * 爆炸摧毁每个 BlockLocation 时触发此事件。该事件在方块已被摧毁后触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;

    /**
     * @remarks
     * 按下按钮时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 聊天消息广播或发送给玩家后触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly chatSend: ChatSendAfterEventSignal;

    /**
     * @remarks
     * 当触发实体事件以更新实体的组件定义状态时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;

    /**
     * @remarks
     * 当效果（如中毒）添加到实体时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;

    /**
     * @remarks
     * 当实体容器关闭时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityContainerClosed: EntityContainerClosedAfterEventSignal;

    /**
     * @remarks
     * 当实体容器打开时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityContainerOpened: EntityContainerOpenedAfterEventSignal;

    /**
     * @remarks
     * 当实体死亡时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityDie: EntityDieAfterEventSignal;

    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHeal: EntityHealAfterEventSignal;

    /**
     * @remarks
     * 实体生命值发生任何程度变化时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;

    /**
     * @remarks
     * 当实体击打（即近战攻击）方块时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;

    /**
     * @remarks
     * 当实体击打（即近战攻击）另一个实体时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;

    /**
     * @remarks
     * 当实体受到伤害时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;

    /**
     * @remarks
     * 当实体掉落物品时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityItemDrop: EntityItemDropAfterEventSignal;

    /**
     * @remarks
     * 当实体拾取物品时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityItemPickup: EntityItemPickupAfterEventSignal;

    /**
     * @remarks
     * 当实体加载时触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;

    /**
     * @remarks
     * 当实体被移除时触发（例如，可能被卸载，或在被杀死后被移除）。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;

    /**
     * @remarks
     * 当实体生成时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当实体开始潜行时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityStartSneaking: EntityStartSneakingAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当实体停止潜行时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityStopSneaking: EntityStopSneakingAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当实体被驯服时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityTamed: EntityTamedAfterEventSignal;

    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly entityUpgrade: EntityUpgradeAfterEventSignal;

    /**
     * @remarks
     * 爆炸发生后触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly explosion: ExplosionAfterEventSignal;

    /**
     * @remarks
     * 当 world.gameRules 属性发生改变时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品完成充能时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品结束充能时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品开始充能时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;

    /**
     * @remarks
     * 当玩家按下“使用物品 / 放置方块”按钮成功使用物品或放置方块时触发此事件。如果放置了多个方块，此事件仅在方块放置开始时发生一次。注意：此事件不能与锄或斧头物品一起使用。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品停止充能时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;

    /**
     * @remarks
     * 当玩家成功使用物品后松开“使用物品 / 放置方块”按钮时触发此事件。注意：此事件不能与锄或斧头物品一起使用。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;

    /**
     * @remarks
     * 当玩家成功使用物品时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;

    /**
     * @remarks
     * 拉杆已被拉动。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 此事件为内部实现细节，目前并不实际生效。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当包设置被更改时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly packSettingChange: PackSettingChangeAfterEventSignal;

    /**
     * @remarks
     * 当活塞伸展或收缩时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;

    /**
     * @remarks
     * 当方块被玩家破坏时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;

    /**
     * @remarks
     * 当 {@link InputButton} 状态改变时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;

    /**
     * @remarks
     * 当玩家取消破坏方块时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerCancelBreakingBlock: PlayerCancelBreakingBlockAfterEventSignal;

    /**
     * @remarks
     * 当玩家移动到不同维度时触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;

    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerEmote: PlayerEmoteAfterEventSignal;

    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家选中的槽位改变时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家的 {@link InputMode} 改变时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家的输入权限改变时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;

    /**
     * @remarks
     * 玩家与方块交互时的事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;

    /**
     * @remarks
     * 当玩家与实体交互时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;

/**
     * @remarks
     * 当物品被添加或移除到
     * 玩家物品栏时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家加入世界时触发此事件。
     * 另请参阅 playerSpawn，了解另一个相关事件，
     * 可用于捕获玩家首次在世界中生成时的情况。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;

    /**
     * @remarks
     * 当玩家离开世界时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;

    /**
     * @remarks
     * 当玩家放置方块时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;

    /**
     * @remarks
     * 当玩家生成或重生时触发此事件。请注意，
     * 此事件中的一个额外标志将告诉你
     * 玩家是在加入后立即生成还是重生。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;

    /**
     * @remarks
     * 当玩家开始破坏方块时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerStartBreakingBlock: PlayerStartBreakingBlockAfterEventSignal;

    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerSwingStart: PlayerSwingStartAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当玩家对实体使用命名牌时
     * 触发的事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerUseNameTag: PlayerUseNameTagAfterEventSignal;

    /**
     * @remarks
     * 压力板已弹回
     * （即压力板上没有实体）。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;

    /**
     * @remarks
     * 压力板已压下
     * （至少有一个实体移动到压力板上）。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;

    /**
     * @remarks
     * 当弹射物击中方块时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;

    /**
     * @remarks
     * 当弹射物击中实体时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 一个被追踪的音频的声明持续时间已结束。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly soundCompleted: SoundCompletedAfterEventSignal;

    /**
     * @remarks
     * 目标方块被击中。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;

    /**
     * @remarks
     * 绊线被触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;

    /**
     * @remarks
     * 当Minecraft中的天气变化时
     * 将触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;

    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly worldLoad: WorldLoadAfterEventSignal;

}