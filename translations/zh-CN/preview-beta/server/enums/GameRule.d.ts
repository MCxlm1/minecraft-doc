/**
 * 游戏规则。这些值也可以通过 /gamerule 命令控制。
 */
export enum GameRule {
    /**
     * @remarks
     * 命令方块执行命令时是否通知管理员。
     *
     */
    CommandBlockOutput = 'commandBlockOutput',
    /**
     * @remarks
     * 控制命令方块能否执行命令。
     *
     */
    CommandBlocksEnabled = 'commandBlocksEnabled',
    /**
     * @remarks
     * 控制日夜循环是否推进。
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
     * 控制火焰是否蔓延。
     *
     */
    DoFireTick = 'doFireTick',
    /**
     * @remarks
     * 控制玩家是立即重生还是看到死亡界面。
     *
     */
    DoImmediateRespawn = 'doImmediateRespawn',
    /**
     * @remarks
     * 控制玩家是否需要面对不睡觉的后果（如幻翼生成）。
     *
     */
    DoInsomnia = 'doInsomnia',
    /**
     * @remarks
     * 当 dolimitedcrafting 设为 true 时，决定玩家是否只能合成已解锁的配方。
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
     * 控制实体是否会因溺水受到伤害。
     *
     */
    DrowningDamage = 'drowningDamage',
    /**
     * @remarks
     * 控制实体是否会因坠落受到伤害。
     *
     */
    FallDamage = 'fallDamage',
    /**
     * @remarks
     * 控制实体是否会因火焰受到伤害。
     *
     */
    FireDamage = 'fireDamage',
    /**
     * @remarks
     * 控制是否会有冰冻伤害。
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
     * 控制玩家死亡时是否保留物品栏物品。
     *
     */
    KeepInventory = 'keepInventory',
    /**
     * @remarks
     * 每游戏刻可以执行的最大连锁命令数量。
     *
     */
    MaxCommandChainLength = 'maxCommandChainLength',
    /**
     * @remarks
     * 控制世界中是否会发生生物破坏（例如苦力怕爆炸破坏方块）。
     *
     */
    MobGriefing = 'mobGriefing',
    /**
     * @remarks
     * 控制玩家能否自然恢复生命值。
     *
     */
    NaturalRegeneration = 'naturalRegeneration',
    /**
     * @remarks
     * 为了让时间推进到下一天，所需睡觉的玩家百分比。
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
     * 控制抛射物（具有抛射物组件的实体，如箭、投掷的三叉戟或烟花）能否破坏支持此交互的特定方块（如紫颂果、滴水石或饰纹陶罐）。对于哪些抛射物可以破坏特定方块存在限制。
     *
     */
    ProjectilesCanBreakBlocks = 'projectilesCanBreakBlocks',
    /**
     * @remarks
     * 控制玩家之间能否造成伤害。
     *
     */
    Pvp = 'pvp',
    /**
     * @remarks
     * 控制随机刻发生的频率。值为 0 或更小时将禁用随机刻。默认值为 1。
     *
     */
    RandomTickSpeed = 'randomTickSpeed',
    /**
     * @remarks
     * 控制内置（原版）配方是否会随着玩家游戏进度自动解锁（另一种替代方案是基于自定义游戏逻辑使用 /recipe 命令）。
     *
     */
    RecipesUnlock = 'recipesUnlock',
    /**
     * @remarks
     * 控制重生类方块（如床、重生锚）在其他维度是否会爆炸。
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
     * 控制是否显示边界方块的效果。
     *
     */
    ShowBorderEffect = 'showBorderEffect',
    /**
     * @remarks
     * 控制是否显示玩家坐标。
     *
     */
    ShowCoordinates = 'showCoordinates',
    /**
     * @remarks
     * 控制是否显示玩家已游玩的天数。
     *
     */
    ShowDaysPlayed = 'showDaysPlayed',
    /**
     * @remarks
     * 控制死亡信息是否在聊天中显示。
     *
     */
    ShowDeathMessages = 'showDeathMessages',
    /**
     * @remarks
     * 控制是否显示标准的配方玩家通知。设为 false 时，将不再发送“玩家已解锁配方”的玩家通知。
     *
     */
    ShowRecipeMessages = 'showRecipeMessages',
    /**
     * @remarks
     * 控制是否显示物品标签，例如“可放置于”“可破坏”、物品锁定图标等。
     *
     */
    ShowTags = 'showTags',
    /**
     * @remarks
     * 玩家允许生成在世界出生点周围的方块半径。不影响冒险模式。默认值为 10 个方块。
     *
     */
    SpawnRadius = 'spawnRadius',
    /**
     * @remarks
     * 影响 TNT 方块能否被点燃。
     *
     */
    TntExplodes = 'tntExplodes',
    /**
     * @remarks
     * 控制方块被爆炸破坏时是随机掉落战利品还是所有方块都掉落战利品。默认为 false。
     *
     */
    TntExplosionDropDecay = 'tntExplosionDropDecay',
}