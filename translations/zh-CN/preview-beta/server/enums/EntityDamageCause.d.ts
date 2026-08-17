/**
 * 描述实体受到的伤害来源。
 */
export enum EntityDamageCause {
    /**
     * @remarks
     * 由落下的铁砧造成的伤害。
     *
     */
    anvil = 'anvil',
    /**
     * @remarks
     * 由非实体爆炸造成的伤害。例如，床爆炸。
     *
     */
    blockExplosion = 'blockExplosion',
    /**
     * @remarks
     * 由营火造成的伤害。
     *
     */
    campfire = 'campfire',
    /**
     * @remarks
     * 未使用。
     *
     */
    charging = 'charging',
    /**
     * @remarks
     * 通过物理接触实体或方块造成的伤害。例如，触碰甜浆果丛或河豚。
     *
     */
    contact = 'contact',
    /**
     * @remarks
     * 实体因空气耗尽并处于液体方块内而造成的伤害。
     *
     */
    drowning = 'drowning',
    /**
     * @remarks
     * 由实体攻击造成的伤害。
     *
     */
    entityAttack = 'entityAttack',
    /**
     * @remarks
     * 由实体爆炸造成的伤害。例如，苦力怕或凋灵。
     *
     */
    entityExplosion = 'entityExplosion',
    /**
     * @remarks
     * 由跌落至地面造成的伤害。
     *
     */
    fall = 'fall',
    /**
     * @remarks
     * 由下落的方块造成的伤害。注意：铁砧和钟乳石有各自的伤害原因。
     *
     */
    fallingBlock = 'fallingBlock',
    /**
     * @remarks
     * 由着火造成的伤害。
     *
     */
    fire = 'fire',
    /**
     * @remarks
     * 由持续燃烧造成的伤害。
     *
     */
    fireTick = 'fireTick',
    /**
     * @remarks
     * 由烟花造成的伤害。
     *
     */
    fireworks = 'fireworks',
    /**
     * @remarks
     * 使用鞘翅滑翔时高速撞墙造成的伤害。
     *
     */
    flyIntoWall = 'flyIntoWall',
    /**
     * @remarks
     * 因停留在细雪方块内造成的伤害。
     *
     */
    freezing = 'freezing',
    /**
     * @remarks
     * 因触碰熔岩方块造成的伤害。
     *
     */
    lava = 'lava',
    /**
     * @remarks
     * 因被闪电击中造成的伤害。
     *
     */
    lightning = 'lightning',
    maceSmash = 'maceSmash',
    /**
     * @remarks
     * 由魔法攻击造成的伤害。例如，唤魔者尖牙或潮涌核心方块。
     *
     */
    magic = 'magic',
    /**
     * @remarks
     * 因触碰岩浆块造成的伤害。
     *
     */
    magma = 'magma',
    /**
     * @remarks
     * 由无来源造成的伤害。例如，来自命令或脚本。
     *
     */
    none = 'none',
    /**
     * @remarks
     * 由间接来源造成的伤害。例如，在行为包中将生物生命值设为 0。
     *
     */
    override = 'override',
    /**
     * @remarks
     * 由活塞造成的伤害。
     *
     */
    piston = 'piston',
    /**
     * @remarks
     * 由弹射物造成的伤害。
     *
     */
    projectile = 'projectile',
    /**
     * @remarks
     * 由山羊冲撞造成的伤害。
     *
     */
    ramAttack = 'ramAttack',
    /**
     * @remarks
     * 由 /kill 命令造成的伤害。
     *
     */
    selfDestruct = 'selfDestruct',
    /**
     * @remarks
     * 由循声守卫的音波尖啸攻击造成的伤害。
     *
     */
    sonicBoom = 'sonicBoom',
    /**
     * @remarks
     * 由灵魂营火造成的伤害。
     *
     */
    soulCampfire = 'soulCampfire',
    /**
     * @remarks
     * 由下落的钟乳石方块造成的伤害。
     *
     */
    stalactite = 'stalactite',
    /**
     * @remarks
     * 因触碰石笋方块造成的伤害。
     *
     */
    stalagmite = 'stalagmite',
    /**
     * @remarks
     * 因饥饿条为空而随时间造成的伤害。
     *
     */
    starve = 'starve',
    /**
     * @remarks
     * 实体因空气耗尽并处于非液体方块内而造成的伤害。
     *
     */
    suffocation = 'suffocation',
    /**
     * @remarks
     * 实体处于不宜居的气候中造成的伤害。例如，雪傀儡在温度大于 1 的生物群系中。
     *
     */
    temperature = 'temperature',
    /**
     * @remarks
     * 由荆棘盔甲附魔和守卫者荆棘效果造成的伤害。
     *
     */
    thorns = 'thorns',
    /**
     * @remarks
     * 因掉入虚空而随时间造成的伤害。
     *
     */
    'void' = 'void',
    /**
     * @remarks
     * 由凋灵效果造成的伤害。例如，触碰凋灵玫瑰。
     *
     */
    wither = 'wither',
}