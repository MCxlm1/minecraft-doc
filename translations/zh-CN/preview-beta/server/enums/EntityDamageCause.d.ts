/**
 * 描述来自实体的伤害来源。
 */
export enum EntityDamageCause {
    /**
     * @remarks
     * 由下落的铁砧造成的伤害。
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
     * 由物理接触实体或方块造成的伤害。例如，
     * 触碰甜浆果丛或河豚。
     *
     */
    contact = 'contact',
    /**
     * @remarks
     * 由实体在液体方块中且空气耗尽造成的伤害。
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
     * 由实体爆炸造成的伤害。例如，苦力怕或凋零。
     *
     */
    entityExplosion = 'entityExplosion',
    /**
     * @remarks
     * 由坠落地面造成的伤害。
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
     * 由使用鞘翅滑翔时高速撞墙造成的伤害。
     *
     */
    flyIntoWall = 'flyIntoWall',
    /**
     * @remarks
     * 由待在细雪方块内造成的伤害。
     *
     */
    freezing = 'freezing',
    /**
     * @remarks
     * 由接触熔岩块造成的伤害。
     *
     */
    lava = 'lava',
    /**
     * @remarks
     * 由被闪电击中造成的伤害。
     *
     */
    lightning = 'lightning',
    maceSmash = 'maceSmash',
    /**
     * @remarks
     * 由魔法攻击造成的伤害。例如，唤魔者尖牙或潮涌核心。
     *
     */
    magic = 'magic',
    /**
     * @remarks
     * 由接触岩浆块造成的伤害。
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
     * 由间接来源造成的伤害。例如，在行为包中将生物的生命值设为0。
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
     * 由监守者的音波尖啸攻击造成的伤害。
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
     * 由接触石笋方块造成的伤害。
     *
     */
    stalagmite = 'stalagmite',
    /**
     * @remarks
     * 由饥饿值归零随时间造成的伤害。
     *
     */
    starve = 'starve',
    /**
     * @remarks
     * 由实体在非液体方块中且空气耗尽造成的伤害。
     *
     */
    suffocation = 'suffocation',
    /**
     * @remarks
     * 由实体处于不适宜生存的气候中造成的伤害。
     * 例如，雪傀儡在温度
     * 大于1的生物群系中。
     *
     */
    temperature = 'temperature',
    /**
     * @remarks
     * 由荆棘盔甲附魔和
     * 守卫者荆棘效果造成的伤害。
     *
     */
    thorns = 'thorns',
    /**
     * @remarks
     * 由掉入虚空随时间造成的伤害。
     *
     */
    'void' = 'void',
    /**
     * @remarks
     * 由凋零效果造成的伤害。例如，接触凋零玫瑰。
     *
     */
    wither = 'wither',
}