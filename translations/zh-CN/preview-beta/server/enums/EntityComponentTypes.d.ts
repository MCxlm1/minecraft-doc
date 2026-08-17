/**
 * 可通过函数 Entity.getComponent 访问的实体组件类型。
 */
export enum EntityComponentTypes {
    /**
     * @remarks
     * 当添加时，此组件会使实体生成时附带一个指定 entityType 的骑乘者。
     *
     */
    AddRider = 'minecraft:addrider',
    /**
     * @remarks
     * 为实体添加成长计时器。可通过给予实体 feedItems 中定义的它喜欢的物品来加速成长。
     *
     */
    Ageable = 'minecraft:ageable',
    /**
     * @remarks
     * 定义此实体可在哪些方块中呼吸，并赋予其窒息的能力。
     *
     */
    Breathable = 'minecraft:breathable',
    /**
     * @remarks
     * 当添加时，此组件表示实体可以爬上梯子。
     *
     */
    CanClimb = 'minecraft:can_climb',
    /**
     * @remarks
     * 当添加时，此组件表示实体可以飞行，且寻路器不会局限于下方需要有实体方块的路径。
     *
     */
    CanFly = 'minecraft:can_fly',
    /**
     * @remarks
     * 当添加时，此组件表示实体可以像 Minecraft 中的马一样进行蓄力跳跃。
     *
     */
    CanPowerJump = 'minecraft:can_power_jump',
    /**
     * @remarks
     * 定义实体的颜色。仅对具有预定义颜色值的某些实体有效（例如羊、羊驼、潜影贝）。
     *
     */
    Color = 'minecraft:color',
    /**
     * @remarks
     * 定义实体的次要颜色。仅对具有预定义次要颜色值的某些实体有效（例如热带鱼）。
     *
     */
    Color2 = 'minecraft:color2',
    CursorInventory = 'minecraft:cursor_inventory',
    /**
     * @remarks
     * 表示此实体的末影箱物品栏属性。
     *
     */
    EnderInventory = 'minecraft:ender_inventory',
    /**
     * @remarks
     * 提供对生物装备槽位的访问。此组件存在于所有生物实体上。
     *
     */
    Equippable = 'minecraft:equippable',
    /**
     * @remarks
     * 当添加时，此组件表示此实体不会受到火焰伤害。
     *
     */
    FireImmune = 'minecraft:fire_immune',
    /**
     * @remarks
     * 当添加时，此组件表示此实体可以在液体方块中漂浮。
     *
     */
    FloatsInLiquid = 'minecraft:floats_in_liquid',
    /**
     * @remarks
     * 表示实体的飞行速度。
     *
     */
    FlyingSpeed = 'minecraft:flying_speed',
    /**
     * @remarks
     * 定义摩擦力对此实体的影响程度。
     *
     */
    FrictionModifier = 'minecraft:friction_modifier',
    /**
     * @remarks
     * 定义与此实体进行治疗互动的规则。
     *
     */
    Healable = 'minecraft:healable',
    /**
     * @remarks
     * 定义实体的生命值属性。
     *
     */
    Health = 'minecraft:health',
    /**
     * @remarks
     * 定义此实体的物品栏属性。
     *
     */
    Inventory = 'minecraft:inventory',
    /**
     * @remarks
     * 当添加时，此组件表示此实体为幼体。
     *
     */
    IsBaby = 'minecraft:is_baby',
    /**
     * @remarks
     * 当添加时，此组件表示此实体已充能。
     *
     */
    IsCharged = 'minecraft:is_charged',
    /**
     * @remarks
     * 当添加时，此组件表示此实体当前携带箱子。
     *
     */
    IsChested = 'minecraft:is_chested',
    /**
     * @remarks
     * 当添加时，此组件表示可以使用染料对此实体改变颜色。
     *
     */
    IsDyeable = 'minecraft:is_dyeable',
    /**
     * @remarks
     * 当添加时，此组件表示此实体在隐身时可以躲避敌对生物。
     *
     */
    IsHiddenWhenInvisible = 'minecraft:is_hidden_when_invisible',
    /**
     * @remarks
     * 当添加时，此组件表示此实体当前着火。
     *
     */
    IsIgnited = 'minecraft:is_ignited',
    /**
     * @remarks
     * 当添加时，此组件表示此实体是灾厄村民队长。
     *
     */
    IsIllagerCaptain = 'minecraft:is_illager_captain',
    /**
     * @remarks
     * 当添加时，此组件表示此实体当前已装备鞍。
     *
     */
    IsSaddled = 'minecraft:is_saddled',
    /**
     * @remarks
     * 当添加时，此组件表示此实体当前正在摇晃。
     *
     */
    IsShaking = 'minecraft:is_shaking',
    /**
     * @remarks
     * 当添加时，此组件表示此实体当前已被剪毛。
     *
     */
    IsSheared = 'minecraft:is_sheared',
    /**
     * @remarks
     * 当添加时，此组件表示此实体可以堆叠。
     *
     */
    IsStackable = 'minecraft:is_stackable',
    /**
     * @remarks
     * 当添加时，此组件表示此实体当前处于眩晕状态。
     *
     */
    IsStunned = 'minecraft:is_stunned',
    /**
     * @remarks
     * 当添加时，此组件表示此实体当前已被驯服。
     *
     */
    IsTamed = 'minecraft:is_tamed',
    /**
     * @remarks
     * 如果添加到实体上，表示该实体代表世界中的自由漂浮物品。可通过 itemStack 属性获取实际的物品堆叠内容。
     *
     */
    Item = 'minecraft:item',
    /**
     * @remarks
     * 定义此实体在熔岩中的基础移动速度。
     *
     */
    LavaMovement = 'minecraft:lava_movement',
    /**
     * @remarks
     * 允许此实体被拴绳拴住，并定义被拴住时的条件和事件。
     *
     */
    Leashable = 'minecraft:leashable',
    /**
     * @remarks
     * 当添加时，此组件表示此实体包含一个附加的变体值。可用于进一步区分变体。
     *
     */
    MarkVariant = 'minecraft:mark_variant',
    /**
     * @remarks
     * 定义此实体的常规移动速度。
     *
     */
    Movement = 'minecraft:movement',
    /**
     * @remarks
     * 当添加时，此移动控制允许生物在水中游泳并在陆地上行走。
     *
     */
    MovementAmphibious = 'minecraft:movement.amphibious',
    /**
     * @remarks
     * 当添加时，此组件允许实体进行移动。
     *
     */
    MovementBasic = 'minecraft:movement.basic',
    /**
     * @remarks
     * 当添加时，此移动控制使生物飞行。
     *
     */
    MovementFly = 'minecraft:movement.fly',
    /**
     * @remarks
     * 当添加时，此移动控制允许生物飞行、游泳、攀爬等。
     *
     */
    MovementGeneric = 'minecraft:movement.generic',
    /**
     * @remarks
     * 当添加时，此移动控制允许生物滑翔。
     *
     */
    MovementGlide = 'minecraft:movement.glide',
    /**
     * @remarks
     * 当添加时，此移动控制使生物悬停。
     *
     */
    MovementHover = 'minecraft:movement.hover',
    /**
     * @remarks
     * 使生物在移动时跳跃的移动控制，跳跃之间具有指定的延迟。
     *
     */
    MovementJump = 'minecraft:movement.jump',
    /**
     * @remarks
     * 当添加时，此移动控制使生物在移动时跳跃前进。
     *
     */
    MovementSkip = 'minecraft:movement.skip',
    /**
     * @remarks
     * 当添加时，此移动控制使生物左右摇摆，给人一种正在游泳的感觉。
     *
     */
    MovementSway = 'minecraft:movement.sway',
    /**
     * @remarks
     * 允许此实体生成包含垂直墙壁的路径（例如，像 Minecraft 蜘蛛那样）。
     *
     */
    NavigationClimb = 'minecraft:navigation.climb',
    /**
     * @remarks
     * 允许此实体像普通恶魂一样在空中飞行来生成路径。
     *
     */
    NavigationFloat = 'minecraft:navigation.float',
    /**
     * @remarks
     * 允许此实体在空中生成路径（例如，像 Minecraft 鹦鹉那样）。
     *
     */
    NavigationFly = 'minecraft:navigation.fly',
    /**
     * @remarks
     * 允许此实体通过行走、游泳、飞行和/或攀爬以及跳跃上下方块来生成路径。
     *
     */
    NavigationGeneric = 'minecraft:navigation.generic',
    /**
     * @remarks
     * 允许此实体在空中生成路径（例如，像 Minecraft 蜜蜂那样）。防止它们从空中掉落，并进行预测性移动。
     *
     */
    NavigationHover = 'minecraft:navigation.hover',
    /**
     * @remarks
     * 允许此实体像普通生物一样四处行走并跳跃上下方块来生成路径。
     *
     */
    NavigationWalk = 'minecraft:navigation.walk',
    /**
     * @beta
     * @remarks
     * 为实体添加 NPC 功能，例如自定义皮肤、名称和对话交互。
     *
     */
    Npc = 'minecraft:npc',
    /**
     * @remarks
     * 当存在于实体上时，此实体处于着火状态。
     *
     */
    OnFire = 'minecraft:onfire',
    /**
     * @remarks
     * 使用此组件读取玩家的消耗度。此组件仅对玩家可用。
     *
     */
    Exhaustion = 'minecraft:player.exhaustion',
    /**
     * @remarks
     * 使用此组件读取玩家的饥饿度。此组件仅对玩家可用。
     *
     */
    Hunger = 'minecraft:player.hunger',
    /**
     * @remarks
     * 使用此组件读取玩家的饱和度。此组件仅对玩家可用。
     *
     */
    Saturation = 'minecraft:player.saturation',
    /**
     * @remarks
     * 弹射物组件控制弹射物实体的属性，并允许将其向给定方向发射。当实体具有 minecraft:projectile 组件时，此组件存在。
     *
     */
    Projectile = 'minecraft:projectile',
    /**
     * @remarks
     * 设置实体可以推挤穿过的距离。
     *
     */
    PushThrough = 'minecraft:push_through',
    /**
     * @remarks
     * 当添加时，此组件使实体能够被另一个实体骑乘。
     *
     */
    Rideable = 'minecraft:rideable',
    /**
     * @remarks
     * 当实体骑乘另一个实体时，此组件会添加到该实体上。
     *
     */
    Riding = 'minecraft:riding',
    /**
     * @remarks
     * 设置实体的视觉大小。
     *
     */
    Scale = 'minecraft:scale',
    /**
     * @remarks
     * 皮肤 ID 值。可用于区分皮肤，例如村民的基础皮肤。
     *
     */
    SkinId = 'minecraft:skin_id',
    /**
     * @remarks
     * 定义实体携带物品的力量。
     *
     */
    Strength = 'minecraft:strength',
    /**
     * @remarks
     * 定义实体被玩家驯服的规则。
     *
     */
    Tameable = 'minecraft:tameable',
    /**
     * @remarks
     * 包含基于骑乘实体来驯服可骑乘实体的选项。
     *
     */
    TameMount = 'minecraft:tamemount',
    /**
     * @remarks
     * 用于确定实体所属的类型族。
     *
     */
    TypeFamily = 'minecraft:type_family',
    /**
     * @remarks
     * 定义此实体在水下的常规移动速度。
     *
     */
    UnderwaterMovement = 'minecraft:underwater_movement',

    /**
     * @remarks
     * 用于将实体的变种组件组与其他变种区分开（例如豹猫、村民）。
     *
     */
    Variant = 'minecraft:variant',
    /**
     * @remarks
     * 添加此组件后，表示该实体想要成为骑手。
     *
     */
    WantsJockey = 'minecraft:wants_jockey',
}