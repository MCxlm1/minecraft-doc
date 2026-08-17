/**
 * 游戏规则。这些值也可以通过 /gamerule 命令进行控制。
 */
export enum GameRule {
    /**
     * @remarks
     * 命令方块执行命令时是否应通知管理员。
     *
     */
    CommandBlockOutput = 'commandBlockOutput',
    /**
     * @remarks
     * 控制命令方块是否能执行命令。
     *
     */
    CommandBlocksEnabled = 'commandBlocksEnabled',
    /**
     * @remarks
     * 控制昼夜循环是否推进。
     *
     */
    DoDayLightCycle = 'doDayLightCycle',
    /**
     * @remarks
     * 控制非生物实体是否掉落物品，例如物品展示框。
     *
     */
    DoEntityDrops = 'doEntityDrops',
    /**
     * @remarks
     * 控制火势是否蔓延。
     *
     */
    DoFireTick = 'doFireTick',
    /**
     * @remarks
     * 控制玩家死亡后是立即重生还是显示死亡界面。
     *
     */
    DoImmediateRespawn = 'doImmediateRespawn',
    /**
     * @remarks
     * 控制玩家是否承受不睡觉带来的影响（例如幻翼生成）。
     *
     */
    DoInsomnia = 'doInsomnia',
    /**
     * @remarks
     * 当 dolimitedcrafting 设置为 true 时，决定玩家是否只能合成那些已解锁的配方。
     *
     */
    DoLimitedCrafting = 'doLimitedCrafting',
    /**
     * @remarks
     * 控制生物是否掉落战利品。
     *
     */
    DoMobLoot = 'doMobLoot',
    /**
     * @remarks
     * 控制生物是否在世界中自然生成。
     *
     */
    DoMobSpawning = 'doMobSpawning',
    /**
     * @remarks
     * 控制方块被破坏时是否掉落物品。
     *
     */
    DoTileDrops = 'doTileDrops',
    /**
     * @remarks
     * 控制天气是否能自然变化。
     *
     */
    DoWeatherCycle = 'doWeatherCycle',
    /**
     * @remarks
     * 控制实体是否因溺水受到伤害。
     *
     */
    DrowningDamage = 'drowningDamage',
    /**
     * @remarks
     * 控制实体是否因坠落受到伤害。
     *
     */
    FallDamage = 'fallDamage',
    /**
     * @remarks
     * 控制实体是否因火焰受到伤害。
     *
     */
    FireDamage = 'fireDamage',
    /**
     * @remarks
     * 控制是否因冰冻受到伤害。
     *
     */
    FreezeDamage = 'freezeDamage',
    /**
     * @remarks
     * /function 命令可以同时执行的最大命令数量。
     *
     */
    FunctionCommandLimit = 'functionCommandLimit',
    /**
     * @remarks
     * 控制玩家死亡时是否保留物品栏。
     *
     */
    KeepInventory = 'keepInventory',
    /**
     * @remarks
     * 每 tick 可以执行的最大连锁命令数量。
     *
     */
    MaxCommandChainLength = 'maxCommandChainLength',
    /**
     * @remarks
     * 控制世界中是否会发生生物破坏行为。例如：苦力怕爆炸摧毁方块。
     *
     */
    MobGriefing = 'mobGriefing',
    /**
     * @remarks
     * 控制玩家是否能自然回复生命值。
     *
     */
    NaturalRegeneration = 'naturalRegeneration',
    /**
     * @remarks
     * 进入下一天所需的入睡玩家百分比。
     *
     */
    PlayersSleepingPercentage = 'playersSleepingPercentage',
    /**
     * @beta
     * @remarks
     * 控制哪些玩家路径点会自动添加到玩家的定位器栏中。
     *
     */
    PlayerWaypoints = 'playerWaypoints',
    /**
     * @remarks
     * 控制投射物（具有投射物组件的实体，如箭、投掷的三叉戟或烟花）是否能破坏支持该交互的特定方块（例如紫颂果、滴水石或饰纹陶罐）。同时适用哪些投射物可以破坏哪些方块的限制。
     *
     */
    ProjectilesCanBreakBlocks = 'projectilesCanBreakBlocks',
    /**
     * @remarks
     * 控制玩家之间是否能互相造成伤害。
     *
     */
    Pvp = 'pvp',
    /**
     * @remarks
     * 控制随机 tick 发生的频率。值为 0 或更小时将禁用随机 tick。默认值为 1。
     *
     */
    RandomTickSpeed = 'randomTickSpeed',
    /**
     * @remarks
     * 控制当玩家在游戏进程中推进时，内置（原版）配方是否自动解锁（另一种替代方案是基于自定义游戏逻辑使用 /recipe 命令）。
     *
     */
    RecipesUnlock = 'recipesUnlock',
    /**
     * @remarks
     * 控制重生方块（如床、重生锚）是否在其他维度中爆炸。
     *
     */
    RespawnBlocksExplode = 'respawnBlocksExplode',
    /**
     * @remarks
     * 控制命令输出是否显示给玩家。也控制命令方块的输出是否默认存储。
     *
     */
    SendCommandFeedback = 'sendCommandFeedback',
    /**
     * @remarks
     * 控制边界方块效果是否显示。
     *
     */
    ShowBorderEffect = 'showBorderEffect',
    /**
     * @remarks
     * 控制玩家坐标是否显示。
     *
     */
    ShowCoordinates = 'showCoordinates',
    /**
     * @remarks
     * 控制玩家已游玩天数是否显示。
     *
     */
    ShowDaysPlayed = 'showDaysPlayed',
    /**
     * @remarks
     * 控制死亡消息是否在聊天中显示。
     *
     */
    ShowDeathMessages = 'showDeathMessages',
    /**
     * @remarks
     * 控制配方的标准玩家通知是否显示。当设置为 false 时，不再发送“玩家已解锁配方”的玩家通知。
     *
     */
    ShowRecipeMessages = 'showRecipeMessages',
    /**
     * @remarks
     * 控制物品标签是否显示。例如“可放置于”“可破坏”、物品锁定图标等。
     *
     */
    ShowTags = 'showTags',
    /**
     * @remarks
     * 玩家在世界出生点周围允许出生的方块半径。不影响冒险模式。默认值为 10 个方块。
     *
     */
    SpawnRadius = 'spawnRadius',
    /**
     * @remarks
     * 影响 TNT 方块是否可以被点燃。
     *
     */
    TntExplodes = 'tntExplodes',
    /**
     * @remarks
     * 控制被爆炸摧毁的方块是随机掉落战利品还是所有方块都掉落战利品。默认为 false。
     *
     */
    TntExplosionDropDecay = 'tntExplosionDropDecay',
}