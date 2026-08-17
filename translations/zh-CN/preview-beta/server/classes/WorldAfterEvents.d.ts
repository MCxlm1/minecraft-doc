/**
 * 包含一组在世界范围内可用的事件。
 */
export class WorldAfterEvents {
    private constructor();
    /**
     * @remarks
     * 方块容器关闭时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly blockContainerClosed: BlockContainerClosedAfterEventSignal;
    /**
     * @remarks
     * 方块容器打开时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly blockContainerOpened: BlockContainerOpenedAfterEventSignal;
    /**
     * @remarks
     * 每次爆炸摧毁一个方块位置时触发此事件。该事件在方块已被摧毁后触发。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks
     * 按钮被按下时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * 聊天消息广播或发送给玩家后触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * @remarks
     * 当触发实体事件以更新实体的组件定义状态时，触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @remarks
     * 当效果（如中毒）添加到实体时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @remarks
     * 实体容器关闭时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityContainerClosed: EntityContainerClosedAfterEventSignal;
    /**
     * @remarks
     * 实体容器打开时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityContainerOpened: EntityContainerOpenedAfterEventSignal;
    /**
     * @remarks
     * 实体死亡时触发此事件。
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
     * 实体生命值发生任何程度的变化时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @remarks
     * 实体撞击（即近战攻击）方块时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @remarks
     * 实体撞击（即近战攻击）另一个实体时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @remarks
     * 实体受伤（受到伤害）时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @remarks
     * 实体掉落物品时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityItemDrop: EntityItemDropAfterEventSignal;
    /**
     * @remarks
     * 实体拾取物品时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityItemPickup: EntityItemPickupAfterEventSignal;
    /**
     * @remarks
     * 实体加载时触发。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @remarks
     * 实体被移除时触发（例如，可能被卸载，或在被击杀后移除）。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @remarks
     * 实体生成时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * 实体开始潜行时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityStartSneaking: EntityStartSneakingAfterEventSignal;
    /**
     * @beta
     * @remarks
     * 实体停止潜行时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityStopSneaking: EntityStopSneakingAfterEventSignal;
    /**
     * @beta
     * @remarks
     * 实体被驯服时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly entityTamed: EntityTamedAfterEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly entityUpgrade: EntityUpgradeAfterEventSignal;
    /**
     * @remarks
     * 爆炸发生后触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @remarks
     * world.gameRules 属性发生更改时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    /**
     * @remarks
     * 可充能物品完成充能时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @remarks
     * 可充能物品从充能状态释放时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @remarks
     * 可充能物品开始充能时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @remarks
     * 玩家按下“使用物品/放置方块”按钮并成功使用物品或放置方块时触发此事件。如果放置了多个方块，此事件仅在方块放置开始的位置触发一次。注意：此事件不能与锄头或斧头物品一起使用。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @remarks
     * 可充能物品停止充能时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks
     * 玩家成功使用物品后松开“使用物品/放置方块”按钮时触发此事件。注意：此事件不能与锄头或斧头物品一起使用。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @remarks
     * 物品被玩家成功使用时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @remarks
     * 拉杆已被拉动。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * 此事件是内部实现细节，当前不具备功能性。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * @beta
     * @remarks
     * 包设置发生更改时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly packSettingChange: PackSettingChangeAfterEventSignal;
    /**
     * @remarks
     * 活塞伸展或收缩时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @remarks
     * 玩家破坏方块时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @remarks
     * 当 {@link InputButton} 状态改变时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;
    /**
     * @remarks
     * 玩家取消破坏方块时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerCancelBreakingBlock: PlayerCancelBreakingBlockAfterEventSignal;
    /**
     * @remarks
     * 玩家移动到不同维度时触发。
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
     * 玩家选择的快捷栏槽位发生变化时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal;
    /**
     * @remarks
     * 当玩家的 {@link InputMode} 改变时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;
    /**
     * @remarks
     * 玩家的输入权限类别改变时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
    /**
     * @remarks
     * 玩家与方块交互时触发的事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @remarks
     * 玩家与实体交互时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @remarks
     * 当物品添加到玩家物品栏或从玩家物品栏移除时触发此事件。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal;
    /**
     * @remarks
     * 玩家加入世界时触发此事件。另请参阅 playerSpawn，这是另一个相关事件，可在玩家首次在世界中生成时捕获。
     *
     * This property can be read in early-execution mode.
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
     * 当玩家放置方块时，此事件针对该方块触发。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * @remarks
     * 当玩家生成或重生时触发此事件。请注意，
     * 此事件中的一个附加标志将告知您玩家是
     * 刚刚加入后生成，还是重生。
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
     * 当玩家对实体使用命名牌时触发的事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly playerUseNameTag: PlayerUseNameTagAfterEventSignal;
    /**
     * @remarks
     * 压力板已弹回（即压力板上没有实体）。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @remarks
     * 压力板已被按下（至少有一个实体移动到了压力板上）。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @remarks
     * 当投射物击中方块时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @remarks
     * 当投射物击中实体时触发此事件。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @beta
     * @remarks
     * 被追踪的声音所声明的持续时间已结束。
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
     * 当 Minecraft 中的天气发生变化时，将触发此事件。
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