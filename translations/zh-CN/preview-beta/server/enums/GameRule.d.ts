/**
 * 游戏规则。这些值也可以通过
 * /gamerule 命令进行控制。
 */
export enum GameRule {
    /**
     * @remarks
     * 命令方块是否应在执行命令时通知管理员。
     *
     */
    CommandBlockOutput = 'commandBlockOutput',
    /**
     * @remarks
     * 控制命令方块是否能够执行命令。
     *
     */
    CommandBlocksEnabled = 'commandBlocksEnabled',
    /**
     * @remarks
     * 控制昼夜循环是否进行。
     *
     */
    DoDayLightCycle = 'doDayLightCycle',
    /**
     * @remarks
     * 控制非生物实体是否掉落物品。例如：物品展示框
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
     * 控制玩家是否立即重生还是显示死亡画面。
     *
     */
    DoImmediateRespawn = 'doImmediateRespawn',
    /**
     * @remarks
     * 控制玩家是否要处理不睡觉的后果（例如幻翼生成）。
     *
     */
    DoInsomnia = 'doInsomnia',
    /**
     * @remarks
     * 决定玩家是否只能合成那些他们已经解锁的配方——当
     * dolimitedcrafting 设置为 true 时。
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
     * 控制生物是否自然生成在世界中。
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
     * 控制天气是否能够自然变化。
     *
     */
    DoWeatherCycle = 'doWeatherCycle',
    /**
     * @remarks
     * 控制实体是否受到溺水伤害。
     *
     */
    DrowningDamage = 'drowningDamage',
    /**
     * @remarks
     * 控制实体是否受到坠落伤害。
     *
     */
    FallDamage = 'fallDamage',
    /**
     * @remarks
     * 控制实体是否受到火焰伤害。
     *
     */
    FireDamage = 'fireDamage',
    /**
     * @remarks
     * 控制是否有冰冻伤害。
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
     * 控制玩家死亡时是否保留他们的物品栏。
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
     * 控制世界中是否可能发生生物破坏。
     * 例如：爬行者爆炸破坏方块。
     *
     */
    MobGriefing = 'mobGriefing',
    /**
     * @remarks
     * 控制玩家是否能够自然恢复生命值。
     *
     */
    NaturalRegeneration = 'naturalRegeneration',
    /**
     * @remarks
     * 需要睡觉的玩家百分比，以便推进到第二天。
     *
     */
    PlayersSleepingPercentage = 'playersSleepingPercentage',
    /**
     * @beta
     * @remarks
     * 控制哪些玩家航点会自动添加到玩家定位器栏。
     *
     */
    PlayerWaypoints = 'playerWaypoints',
    /**
     * @remarks
     * 控制投射物（具有投射物组件的实体，如箭、投掷的三叉戟或烟花）能否破坏某些支持此交互的方块（如
     * 紫颂果、滴水石锥或饰纹陶罐）。对哪些投射物可以破坏哪些方块有限制。
     *
     */
    ProjectilesCanBreakBlocks = 'projectilesCanBreakBlocks',
    /**
     * @remarks
     * 控制玩家是否可以互相伤害。
     *
     */
    Pvp = 'pvp',
    /**
     * @remarks
     * 控制随机刻发生的频率。值为0或更小将禁用随机刻。默认值是1。
     *
     */
    RandomTickSpeed = 'randomTickSpeed',
    /**
     * @remarks
     * 控制内置（原版）配方是否随着玩家游戏进程自动解锁
     * （另一种替代方案是根据自定义游戏逻辑使用 /recipe 命令。）
     *
     */
    RecipesUnlock = 'recipesUnlock',
    /**
     * @remarks
     * 控制重生方块（例如床、重生锚）是否在其他维度爆炸。
     *
     */
    RespawnBlocksExplode = 'respawnBlocksExplode',
    /**
     * @remarks
     * 控制命令输出是否显示给玩家。
     * 同时控制命令方块输出是否默认存储。
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
     * 控制是否显示配方的标准玩家通知。当设置为 false 时，'玩家解锁了配方' 将不再作为玩家通知发送。
     *
     */
    ShowRecipeMessages = 'showRecipeMessages',
    /**
     * @remarks
     * 控制物品标签是否显示。例如：“Can Place On”、
     * “Can Destroy”、物品锁定图标等。
     *
     */
    ShowTags = 'showTags',
    /**
     * @remarks
     * 从世界出生点开始的半径，玩家被允许出生在这个范围内。不影响冒险模式。默认值是10个方块。
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
     * 控制方块被爆炸破坏时是否随机掉落战利品，还是所有方块都掉落战利品。默认为 false。
     *
     */
    TntExplosionDropDecay = 'tntExplosionDropDecay',
}