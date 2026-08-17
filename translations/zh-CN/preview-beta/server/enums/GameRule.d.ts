/**
 * 游戏规则。这些值也可以通过/gamerule命令控制。
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
     * 控制命令方块是否可以执行命令。
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
     * 决定玩家是否只能合成已解锁的配方，当dolimitedcrafting设为true时生效。
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
     * 控制实体是否因溺水而受到伤害。
     *
     */
    DrowningDamage = 'drowningDamage',
    /**
     * @remarks
     * 控制实体是否因坠落而受到伤害。
     *
     */
    FallDamage = 'fallDamage',
    /**
     * @remarks
     * 控制实体是否因火焰而受到伤害。
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
     * 通过/function命令同时执行的最大命令数量。
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
     * 每tick可执行的连锁命令最大数量。
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
     * 控制玩家是否可以自然恢复生命值。
     *
     */
    NaturalRegeneration = 'naturalRegeneration',
    /**
     * @remarks
     * 需要睡觉的玩家百分比，达到该比例才能推进到下一天。
     *
     */
    PlayersSleepingPercentage = 'playersSleepingPercentage',
    /**
     * @beta
     * @remarks
     * 控制哪些玩家航点会自动添加到玩家的定位器栏中。
     *
     */
    PlayerWaypoints = 'playerWaypoints',
    /**
     * @remarks
     * 控制投射物（具有投射物组件的实体，如箭、投掷的三叉戟或烟花）是否能够破坏某些支持该交互的方块（例如紫颂果、滴水石或饰纹陶罐）。哪些投射物能破坏特定方块仍有限制。
     *
     */
    ProjectilesCanBreakBlocks = 'projectilesCanBreakBlocks',
    /**
     * @remarks
     * 控制玩家之间是否能互相伤害。
     *
     */
    Pvp = 'pvp',
    /**
     * @remarks
     * 控制随机tick的频率。值为0或更小时将禁用随机tick。默认值为1。
     *
     */
    RandomTickSpeed = 'randomTickSpeed',
    /**
     * @remarks
     * 控制内置（原版）配方是否随着玩家游戏进程自动解锁（另一种替代方案是根据自定义游戏逻辑使用/recipe命令）。
     *
     */
    RecipesUnlock = 'recipesUnlock',
    /**
     * @remarks
     * 控制重生方块（如床、重生锚）在其他维度中是否爆炸。
     *
     */
    RespawnBlocksExplode = 'respawnBlocksExplode',
    /**
     * @remarks
     * 控制命令输出是否显示给玩家。同时控制命令方块的输出是否默认存储。
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
     * 控制玩家已游玩的游戏天数是否显示。
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
     * 控制配方的标准玩家通知是否显示。当设为false时，'玩家解锁了配方'将不再作为玩家通知发送。
     *
     */
    ShowRecipeMessages = 'showRecipeMessages',
    /**
     * @remarks
     * 控制物品标签是否显示，例如'Can Place On'、'Can Destroy'、物品锁定图标等。
     *
     */
    ShowTags = 'showTags',
    /**
     * @remarks
     * 玩家在世界出生点周围允许出生的方块半径。不影响冒险模式。默认值为10个方块。
     *
     */
    SpawnRadius = 'spawnRadius',
    /**
     * @remarks
     * 影响TNT方块是否可以被点燃。
     *
     */
    TntExplodes = 'tntExplodes',
    /**
     * @remarks
     * 控制方块被爆炸破坏时是否随机掉落战利品，或所有方块都掉落。默认为false。
     *
     */
    TntExplosionDropDecay = 'tntExplosionDropDecay',
}