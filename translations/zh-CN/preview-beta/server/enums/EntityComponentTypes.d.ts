/**
 * 可通过 Entity.getComponent 函数访问的实体组件类型。
 */
export enum EntityComponentTypes {
    /**
     * @remarks
     * 添加后，此组件将使实体生成一个指定 entityType 的骑乘者。
     *
     */
    AddRider = 'minecraft:addrider',
    /**
     * @remarks
     * 为实体添加成长的计时器。可通过给予实体 feedItems 定义中其喜欢的物品来加速成长。
     *
     */
    Ageable = 'minecraft:ageable',
    /**
     * @remarks
     * 定义该实体可在哪些方块中呼吸，并赋予其窒息的能力。
     *
     */
    Breathable = 'minecraft:breathable',
    /**
     * @remarks
     * 添加后，此组件表示该实体可以爬上梯子。
     *
     */
    CanClimb = 'minecraft:can_climb',
    /**
     * @remarks
     * 添加后，此组件表示该实体可以飞行，且寻路器将不再局限于下方必须有固体方块的路径。
     *
     */
    CanFly = 'minecraft:can_fly',
    /**
     * @remarks
     * 添加后，此组件表示该实体能够像 Minecraft 中的马一样进行蓄力跳跃。
     *
     */
    CanPowerJump = 'minecraft:can_power_jump',
    /**
     * @remarks
     * 定义实体的颜色。仅对具有预定义颜色值的某些实体生效（例如羊、羊驼、潜影贝）。
     *
     */
    Color = 'minecraft:color',
    /**
     * @remarks
     * 定义实体的次要颜色。仅对具有预定义次要颜色值的某些实体生效（例如热带鱼）。
     *
     */
    Color2 = 'minecraft:color2',
    CursorInventory = 'minecraft:cursor_inventory',
    /**
     * @remarks
     * 表示该实体的末影箱物品栏属性。
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
     * 添加后，此组件表示该实体不会受到火焰伤害。
     *
     */
    FireImmune = 'minecraft:fire_immune',
    /**
     * @remarks
     * 添加后，此组件表示该实体可以在液体方块中漂浮。
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
     * 定义摩擦力对该实体的影响程度。
     *
     */
    FrictionModifier = 'minecraft:friction_modifier',
    /**
     * @remarks
     * 定义与治疗该实体相关的交互。
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
     * 定义该实体的物品栏属性。
     *
     */
    Inventory = 'minecraft:inventory',
    /**
     * @remarks
     * 添加后，此组件表示该实体为幼年状态。
     *
     */
    IsBaby = 'minecraft:is_baby',
    /**
     * @remarks
     * 添加后，此组件表示该实体处于充能状态。
     *
     */
    IsCharged = 'minecraft:is_charged',
    /**
     * @remarks
     * 添加后，此组件表示该实体当前携带箱子。
     *
     */
    IsChested = 'minecraft:is_chested',
    /**
     * @remarks
     * 添加后，此组件表示可使用染料改变该实体的颜色。
     *
     */
    IsDyeable = 'minecraft:is_dyeable',
    /**
     * @remarks
     * 添加后，此组件表示该实体在隐形时可以躲避敌对生物。
     *
     */
    IsHiddenWhenInvisible = 'minecraft:is_hidden_when_invisible',
    /**
     * @remarks
     * 添加后，此组件表示该实体当前着火。
     *
     */
    IsIgnited = 'minecraft:is_ignited',
    /**
     * @remarks
     * 添加后，此组件表示该实体是灾厄村民队长。
     *
     */
    IsIllagerCaptain = 'minecraft:is_illager_captain',
    /**
     * @remarks
     * 添加后，此组件表示该实体当前已被装上鞍。
     *
     */
    IsSaddled = 'minecraft:is_saddled',
    /**
     * @remarks
     * 添加后，此组件表示该实体当前正在抖动。
     *
     */
    IsShaking = 'minecraft:is_shaking',
    /**
     * @remarks
     * 添加后，此组件表示该实体当前已被剪毛。
     *
     */
    IsSheared = 'minecraft:is_sheared',
    /**
     * @remarks
     * 添加后，此组件表示该实体可以被堆叠。
     *
     */
    IsStackable = 'minecraft:is_stackable',
    /**
     * @remarks
     * 添加后，此组件表示该实体当前处于眩晕状态。
     *
     */
    IsStunned = 'minecraft:is_stunned',
    /**
     * @remarks
     * 添加后，此组件表示该实体当前已被驯服。
     *
     */
    IsTamed = 'minecraft:is_tamed',
    /**
     * @remarks
     * 添加到实体后，表示该实体代表世界中的浮空物品。可通过 itemStack 属性获取实际的物品堆叠内容。
     *
     */
    Item = 'minecraft:item',
    /**
     * @remarks
     * 定义该实体在熔岩中的基础移动速度。
     *
     */
    LavaMovement = 'minecraft:lava_movement',
    /**
     * @remarks
     * 允许该实体被拴绳牵引，并定义其被牵引时的条件和事件。
     *
     */
    Leashable = 'minecraft:leashable',
    /**
     * @remarks
     * 添加后，此组件表示该实体包含一个额外的变体值。可用于进一步区分变体。
     *
     */
    MarkVariant = 'minecraft:mark_variant',
    /**
     * @remarks
     * 定义该实体的常规移动速度。
     *
     */
    Movement = 'minecraft:movement',
    /**
     * @remarks
     * 添加后，此移动控制允许生物在水中游泳并在陆地上行走。
     *
     */
    MovementAmphibious = 'minecraft:movement.amphibious',
    /**
     * @remarks
     * 添加后，此组件允许实体的移动。
     *
     */
    MovementBasic = 'minecraft:movement.basic',
    /**
     * @remarks
     * 添加后，此移动控制使生物能够飞行。
     *
     */
    MovementFly = 'minecraft:movement.fly',
    /**
     * @remarks
     * 添加后，此移动控制允许生物飞行、游泳、攀爬等。
     *
     */
    MovementGeneric = 'minecraft:movement.generic',
    /**
     * @remarks
     * 添加后，此移动控制允许生物滑翔。
     *
     */
    MovementGlide = 'minecraft:movement.glide',
    /**
     * @remarks
     * 添加后，此移动控制使生物悬停。
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
     * 添加后，此移动控制使生物在移动时单足跳。
     *
     */
    MovementSkip = 'minecraft:movement.skip',
    /**
     * @remarks
     * 添加后，此移动控制使生物左右摇摆，营造出游泳的效果。
     *
     */
    MovementSway = 'minecraft:movement.sway',
    /**
     * @remarks
     * 允许该实体生成包含垂直墙面的路径（例如，像 Minecraft 蜘蛛那样）。
     *
     */
    NavigationClimb = 'minecraft:navigation.climb',
    /**
     * @remarks
     * 允许该实体像普通恶魂那样在空中飞行来生成路径。
     *
     */
    NavigationFloat = 'minecraft:navigation.float',
    /**
     * @remarks
     * 允许该实体在空中生成路径（例如，像 Minecraft 鹦鹉那样）。
     *
     */
    NavigationFly = 'minecraft:navigation.fly',
    /**
     * @remarks
     * 允许该实体通过步行、游泳、飞行和/或攀爬以及跳跃上下方块来生成路径。
     *
     */
    NavigationGeneric = 'minecraft:navigation.generic',
    /**
     * @remarks
     * 允许该实体在空中生成路径（例如，像 Minecraft 蜜蜂那样）。防止它们从空中掉落，并进行预测性移动。
     *
     */
    NavigationHover = 'minecraft:navigation.hover',
    /**
     * @remarks
     * 允许该实体像普通生物那样通过四处行走和跳跃上下方块来生成路径。
     *
     */
    NavigationWalk = 'minecraft:navigation.walk',
    /**
     * @beta
     * @remarks
     * 为实体添加 NPC 能力，例如自定义皮肤、名称和对话交互。
     *
     */
    Npc = 'minecraft:npc',
    /**
     * @remarks
     * 当此组件存在于实体上时，该实体着火。
     *
     */
    OnFire = 'minecraft:onfire',
    /**
     * @remarks
     * 使用此组件读取玩家的消耗度。仅对玩家可用。
     *
     */
    Exhaustion = 'minecraft:player.exhaustion',
    /**
     * @remarks
     * 使用此组件读取玩家的饥饿度。仅对玩家可用。
     *
     */
    Hunger = 'minecraft:player.hunger',
    /**
     * @remarks
     * 使用此组件读取玩家的饱和度。仅对玩家可用。
     *
     */
    Saturation = 'minecraft:player.saturation',
    /**
     * @remarks
     * 投射物组件控制投射物实体的属性，并允许其朝指定方向发射。当实体具有 minecraft:projectile 组件时，此组件存在。
     *
     */
    Projectile = 'minecraft:projectile',
    /**
     * @remarks
     * 设置实体可以推动穿过的距离。
     *
     */
    PushThrough = 'minecraft:push_through',
    /**
     * @remarks
     * 添加后，此组件使实体可被其他实体骑乘。
     *
     */
    Rideable = 'minecraft:rideable',
    /**
     * @remarks
     * 当实体骑乘其他实体时，此组件会被添加到该实体上。
     *
     */
    Riding = 'minecraft:riding',
    /**
     * @remarks
     * 设置实体的视觉尺寸。
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
     * 包含根据骑乘实体来驯服可骑乘实体的选项。
     *
     */
    TameMount = 'minecraft:tamemount',
    /**
     * @remarks
     * 用于确定该实体所属的类型族群。
     *
     */
    TypeFamily = 'minecraft:type_family',
    /**
     * @remarks
     * 定义该实体在水下的常规移动速度。
     *
     */
    UnderwaterMovement = 'minecraft:underwater_movement',
}

    /**
     * @remarks
     * 用于将某个实体变体的组件组与其他实体变体区分开来。（例如：豹猫、村民。）
     *
     */
    Variant = 'minecraft:variant',
    /**
     * @remarks
     * 当添加此组件时，表示该实体想要成为一个骑手。
     *
     */
    WantsJockey = 'minecraft:wants_jockey',
}