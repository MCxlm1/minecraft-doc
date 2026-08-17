/**
 * 实体组件类型，可通过函数 Entity.getComponent 访问。
 */
export enum EntityComponentTypes {
    /**
     * @remarks
     * 当添加此组件时，实体将生成具有指定实体类型的骑手。
     *
     */
    AddRider = 'minecraft:addrider',
    /**
     * @remarks
     * 为实体添加一个成长计时器。通过给予实体其喜欢的物品（由 feedItems 定义）可以加速成长。
     *
     */
    Ageable = 'minecraft:ageable',
    /**
     * @remarks
     * 定义实体可以在哪些方块中呼吸，并赋予其窒息的能力。
     *
     */
    Breathable = 'minecraft:breathable',
    /**
     * @remarks
     * 当添加此组件时，表示实体可以爬梯子。
     *
     */
    CanClimb = 'minecraft:can_climb',
    /**
     * @remarks
     * 当添加此组件时，表示实体可以飞行，并且寻路器不会限制在下方需要有固体方块的路径上。
     *
     */
    CanFly = 'minecraft:can_fly',
    /**
     * @remarks
     * 当添加此组件时，表示实体可以像 Minecraft 中的马那样进行强力跳跃。
     *
     */
    CanPowerJump = 'minecraft:can_power_jump',
    /**
     * @remarks
     * 定义实体的颜色。仅适用于具有预定义颜色值的某些实体（例如，羊、羊驼、潜影贝）。
     *
     */
    Color = 'minecraft:color',
    /**
     * @remarks
     * 定义实体的次要颜色。仅适用于具有预定义次要颜色值的某些实体（例如，热带鱼）。
     *
     */
    Color2 = 'minecraft:color2',
    CursorInventory = 'minecraft:cursor_inventory',
    /**
     * @remarks
     * 表示此实体的末影物品栏属性。
     *
     */
    EnderInventory = 'minecraft:ender_inventory',
    /**
     * @remarks
     * 提供对生物装备槽的访问。此组件存在于所有生物实体上。
     *
     */
    Equippable = 'minecraft:equippable',
    /**
     * @remarks
     * 当添加此组件时，表示此实体不会受到火焰伤害。
     *
     */
    FireImmune = 'minecraft:fire_immune',
    /**
     * @remarks
     * 当添加此组件时，表示此实体可以在液体方块中漂浮。
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
     * 定义与此实体交互以治疗它的方式。
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
     * 当添加此组件时，表示此实体是幼年状态。
     *
     */
    IsBaby = 'minecraft:is_baby',
    /**
     * @remarks
     * 当添加此组件时，表示此实体处于充能状态。
     *
     */
    IsCharged = 'minecraft:is_charged',
    /**
     * @remarks
     * 当添加此组件时，表示此实体当前携带箱子。
     *
     */
    IsChested = 'minecraft:is_chested',
    /**
     * @remarks
     * 当添加此组件时，表示可以使用染料改变此实体的颜色。
     *
     */
    IsDyeable = 'minecraft:is_dyeable',
    /**
     * @remarks
     * 当添加此组件时，表示此实体在隐形时能够躲避敌对生物。
     *
     */
    IsHiddenWhenInvisible = 'minecraft:is_hidden_when_invisible',
    /**
     * @remarks
     * 当添加此组件时，表示此实体当前着火。
     *
     */
    IsIgnited = 'minecraft:is_ignited',
    /**
     * @remarks
     * 当添加此组件时，表示此实体是灾厄队长。
     *
     */
    IsIllagerCaptain = 'minecraft:is_illager_captain',
    /**
     * @remarks
     * 当添加此组件时，表示此实体当前已鞍。
     *
     */
    IsSaddled = 'minecraft:is_saddled',
    /**
     * @remarks
     * 当添加此组件时，表示此实体当前正在摇晃。
     *
     */
    IsShaking = 'minecraft:is_shaking',
    /**
     * @remarks
     * 当添加此组件时，表示此实体当前已被剪毛。
     *
     */
    IsSheared = 'minecraft:is_sheared',
    /**
     * @remarks
     * 当添加此组件时，表示此实体可以堆叠。
     *
     */
    IsStackable = 'minecraft:is_stackable',
    /**
     * @remarks
     * 当添加此组件时，表示此实体当前处于眩晕状态。
     *
     */
    IsStunned = 'minecraft:is_stunned',
    /**
     * @remarks
     * 当添加此组件时，表示此实体当前已被驯服。
     *
     */
    IsTamed = 'minecraft:is_tamed',
    /**
     * @remarks
     * 如果添加到实体上，则表示此实体代表世界中自由漂浮的物品。允许您通过 itemStack 属性检索实际的物品实例内容。
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
     * 允许此实体被拴绳拴住，并定义当被拴住时的条件和事件。
     *
     */
    Leashable = 'minecraft:leashable',
    /**
     * @remarks
     * 当添加此组件时，表示此实体包含一个额外的变体值。可用于进一步区分变体。
     *
     */
    MarkVariant = 'minecraft:mark_variant',
    /**
     * @remarks
     * 定义此实体的一般移动速度。
     *
     */
    Movement = 'minecraft:movement',
    /**
     * @remarks
     * 当添加此组件时，此移动控制允许生物在水中游泳并在陆地上行走。
     *
     */
    MovementAmphibious = 'minecraft:movement.amphibious',
    /**
     * @remarks
     * 当添加此组件时，此组件允许实体移动。
     *
     */
    MovementBasic = 'minecraft:movement.basic',
    /**
     * @remarks
     * 当添加此组件时，此移动控制使生物飞行。
     *
     */
    MovementFly = 'minecraft:movement.fly',
    /**
     * @remarks
     * 当添加此组件时，此移动控制允许生物进行飞行、游泳、攀爬等动作。
     *
     */
    MovementGeneric = 'minecraft:movement.generic',
    /**
     * @remarks
     * 当添加此组件时，此移动控制允许生物滑翔。
     *
     */
    MovementGlide = 'minecraft:movement.glide',
    /**
     * @remarks
     * 当添加此组件时，此移动控制使生物悬停。
     *
     */
    MovementHover = 'minecraft:movement.hover',
    /**
     * @remarks
     * 移动控制，使生物在移动时跳跃，并在跳跃之间指定延迟。
     *
     */
    MovementJump = 'minecraft:movement.jump',
    /**
     * @remarks
     * 当添加此组件时，此移动控制使生物在移动时单脚跳。
     *
     */
    MovementSkip = 'minecraft:movement.skip',
    /**
     * @remarks
     * 当添加此组件时，此移动控制使生物左右摇摆，给人以游泳的印象。
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
     * 允许此实体像普通恶魂一样在空中飞行以生成路径。
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
     * 允许此实体通过行走、游泳、飞行和/或攀爬以及跳跃方块来生成路径。
     *
     */
    NavigationGeneric = 'minecraft:navigation.generic',
    /**
     * @remarks
     * 允许此实体在空中生成路径（例如，像 Minecraft 蜜蜂那样）。防止它们从天空中掉落，并进行预测性移动。
     *
     */
    NavigationHover = 'minecraft:navigation.hover',
    /**
     * @remarks
     * 允许此实体像普通生物一样通过行走和跳跃方块来生成路径。
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
     * 当存在于实体上时，此实体着火。
     *
     */
    OnFire = 'minecraft:onfire',
    /**
     * @remarks
     * 使用此组件读取玩家的疲劳度。仅对玩家可用。
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
     * 弹射物组件控制弹射物实体的属性，并允许其朝给定方向发射。当实体具有 minecraft:projectile 组件时，此组件存在。
     *
     */
    Projectile = 'minecraft:projectile',
    /**
     * @remarks
     * 设置实体可以推过的距离。
     *
     */
    PushThrough = 'minecraft:push_through',
    /**
     * @remarks
     * 当添加此组件时，此组件使实体可以被另一个实体骑乘。
     *
     */
    Rideable = 'minecraft:rideable',
    /**
     * @remarks
     * 当实体正在骑乘另一个实体时，此组件会被添加到该实体上。
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
     * 定义实体携带物品的强度。
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
     * 包含基于骑乘者驯服可骑乘实体的选项。
     *
     */
    TameMount = 'minecraft:tamemount',
    /**
     * @remarks
     * 用于确定实体所属的类型家族。
     *
     */
    TypeFamily = 'minecraft:type_family',
    /**
     * @remarks
     * 定义此实体在水下的通用移动速度。
     *
     */

    UnderwaterMovement = 'minecraft:underwater_movement',
    /**
     * @remarks
     * 用于将实体变体的组件组与其他实体区分开。（例如：豹猫、村民。）
     *
     */
    Variant = 'minecraft:variant',
    /**
     * @remarks
     * 添加后，此组件表示该实体想要成为骑手（jockey）。
     *
     */
    WantsJockey = 'minecraft:wants_jockey',
}