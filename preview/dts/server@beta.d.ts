// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server",
 *   "version": "2.11.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
// @ts-ignore Optional types-only package, will decay to any if @minecraft/vanilla-data isn't installed
import type * as minecraftvanilladata from '@minecraft/vanilla-data';
/**
 * 指定用于瞄准辅助的不同目标模式。
 */
export enum AimAssistTargetMode {
    /**
     * @remarks
     * 基于角度的瞄准。
     *
     */
    Angle = 'Angle',
    /**
     * @remarks
     * 基于距离的瞄准。
     *
     */
    Distance = 'Distance',
}

/**
 * 可通过 Block.getComponent 函数访问的方块组件类型。
 */
export enum BlockComponentTypes {
    /**
     * @beta
     */
    DynamicProperties = 'minecraft:dynamic_properties',
    FluidContainer = 'minecraft:fluid_container',
    /**
     * @beta
     */
    Instrument = 'minecraft:instrument_sound',
    /**
     * @remarks
     * 表示世界中方块的物品栏。用于箱子等方块。
     *
     */
    Inventory = 'minecraft:inventory',
    /**
     * @remarks
     * 表示方块在地图上显示的颜色。
     *
     */
    MapColor = 'minecraft:map_color',
    /**
     * @remarks
     * 表示一个可以移动的方块（如活塞）。
     *
     */
    Movable = 'minecraft:movable',
    /**
     * @remarks
     * 如果存在，则此方块具有类似活塞的行为。包含用于发现方块活塞状态的附加属性。
     *
     */
    Piston = 'minecraft:piston',
    /**
     * @remarks
     * 表示方块与降水（如雨或雪）的交互方式。
     *
     */
    PrecipitationInteractions = 'minecraft:precipitation_interactions',
    /**
     * @remarks
     * 表示可以播放唱片的方块。
     *
     */
    RecordPlayer = 'minecraft:record_player',
    /**
     * @remarks
     * 表示可以输出红石信号的方块。
     *
     */
    RedstoneProducer = 'minecraft:redstone_producer',
    /**
     * @remarks
     * 表示可以显示文本的方块。
     *
     */
    Sign = 'minecraft:sign',
}

/**
 * 描述方块活塞状态的枚举。
 */
export enum BlockPistonState {
    /**
     * @remarks
     * 活塞是否完全展开。
     *
     */
    Expanded = 'Expanded',
    /**
     * @remarks
     * 活塞是否正在展开。
     *
     */
    Expanding = 'Expanding',
    /**
     * @remarks
     * 活塞是否完全收回。
     *
     */
    Retracted = 'Retracted',
    /**
     * @remarks
     * 活塞是否正在收回。
     *
     */
    Retracting = 'Retracting',
}

/**
 * 对两个 BlockVolume 对象进行
 * 相交测试的结果描述
 */
export enum BlockVolumeIntersection {
    /**
     * @remarks
     * 体积 B 与体积 A 没有交点
     *
     */
    Disjoint = 0,
    /**
     * @remarks
     * 体积 B 完全位于体积 A 内部
     *
     */
    Contains = 1,
    /**
     * @remarks
     * 体积 B 与体积 A 部分相交
     *
     */
    Intersects = 2,
}

/**
 * 关于使用 {@link
 * ItemBookComponent} 时产生的错误原因枚举。
 */
export enum BookErrorReason {
    /**
     * @remarks
     * 请求的页面内容超过了最大页面长度
     * 256。
     *
     */
    ExceedsMaxPageLength = 'ExceedsMaxPageLength',
    /**
     * @remarks
     * 无法创建页面，因为它会超过最大
     * 页数 50。
     *
     */
    ExceedsMaxPages = 'ExceedsMaxPages',
    /**
     * @remarks
     * 签署的标题超过了最大标题长度
     * 16。
     *
     */
    ExceedsTitleLength = 'ExceedsTitleLength',
}

/**
 * 按钮在键盘、控制器或触摸界面上的状态。
 */
export enum ButtonState {
    Pressed = 'Pressed',
    Released = 'Released',
}

/**
 * @beta
 * 表示应用于摄像机的抖动类型。
 */
export enum CameraShakeType {
    /**
     * @remarks
     * 一种位置抖动，使摄像机沿其各轴移动。
     *
     */
    Positional = 'Positional',
    /**
     * @remarks
     * 一种旋转抖动，使摄像机绕其各轴旋转。
     *
     */
    Rotational = 'Rotational',
}

/**
 * @beta
 * 用于克隆方块时克隆模式的枚举。
 */
export enum CloneMode {
    /**
     * @remarks
     * 将源区域的方块克隆到目标区域，保持源区域不变。
     *
     */
    Copy = 0,
    /**
     * @remarks
     * 将源区域的方块克隆到目标区域，允许源区域和目标区域重叠。
     *
     */
    ForceCopy = 1,
    /**
     * @remarks
     * 将源区域的方块克隆到目标区域
     * 并用空气替换源区域。
     *
     */
    Move = 2,
}

/**
 * 执行自定义命令所需的权限等级。
 */
export enum CommandPermissionLevel {
    /**
     * @remarks
     * 任何对象都可以运行此等级。
     *
     */
    Any = 0,
    /**
     * @remarks
     * 任何操作员都可以运行此命令，包括命令方块。
     *
     */
    GameDirectors = 1,
    /**
     * @remarks
     * 任何操作员都可以运行此命令，但不包括命令方块。
     *
     */
    Admin = 2,
    /**
     * @remarks
     * 任何服务器主机都可以运行此命令。
     *
     */
    Host = 3,
    /**
     * @remarks
     * 只有专用服务器可以运行此命令。
     *
     */
    Owner = 4,
}

/**
 * 导致{@link
 * @minecraft/server.ContainerRulesError}被抛出的原因。
 */
export enum ContainerRulesErrorReason {
    /**
     * @remarks
     * 当尝试添加已在{@link
     * ContainerRules.bannedItems}中定义的物品时抛出。
     *
     */
    BannedItem = 'BannedItem',
    /**
     * @remarks
     * 当尝试添加带有`Storage Item`组件的物品
     * 到{@link
     * ContainerRules.allowNestedStorageItems}设置为false的容器时抛出。
     *
     */
    NestedStorageItem = 'NestedStorageItem',
    /**
     * @remarks
     * 当尝试添加未在非空
     * {@link ContainerRules.allowedItems}中定义的物品时抛出。
     *
     */
    NotAllowedItem = 'NotAllowedItem',
    /**
     * @remarks
     * 当尝试添加导致容器
     * 重量超过{@link ContainerRules.weightLimit}的物品时抛出。
     *
     */
    OverWeightLimit = 'OverWeightLimit',
    /**
     * @remarks
     * 当尝试添加由`Storage Weight Modifier`组件定义的零重量物品
     * 到容器，该容器定义了
     * {@link ContainerRules.weightLimit}
     *
     */
    ZeroWeightItem = 'ZeroWeightItem',
}

/**
 * 控制方案类型，定义玩家如何移动，作为对
 * 玩家输入的响应。
 * 有关控制方案的更多详细信息，请参阅以下页面：
 * https://learn.microsoft.com/en-us/minecraft/creator/documents/controlschemes
 */
export enum ControlScheme {
    CameraRelative = 'CameraRelative',
    CameraRelativeStrafe = 'CameraRelativeStrafe',
    LockedPlayerRelativeStrafe = 'LockedPlayerRelativeStrafe',
    PlayerRelative = 'PlayerRelative',
    PlayerRelativeStrafe = 'PlayerRelativeStrafe',
}

/**
 * 自定义命令注册失败的原因。
 */
export enum CustomCommandErrorReason {
    /**
     * @remarks
     * 命令名称已注册。
     *
     */
    AlreadyRegistered = 'AlreadyRegistered',
    /**
     * @remarks
     * 自定义命令引用了尚未注册的枚举。
     *
     */
    EnumDependencyMissing = 'EnumDependencyMissing',
    /**
     * @remarks
     * 提供的自定义命令命名空间与此附加包之前的注册不匹配。
     *
     */
    NamespaceMismatch = 'NamespaceMismatch',
    /**
     * @remarks
     * 自定义命令中定义了太多命令参数。
     *
     */
    ParameterLimit = 'ParameterLimit',
    /**
     * @remarks
     * 世界初始化事件后无法访问自定义命令注册表。
     *
     */
    RegistryInvalid = 'RegistryInvalid',
    /**
     * @remarks
     * 重载期间不能重新定义命令参数。只能更改脚本闭包本身。
     *
     */
    RegistryReadOnly = 'RegistryReadOnly',
    /**
     * @beta
     * @remarks
     * 非枚举类型命令参数不能使用 enumName。
     *
     */
    UnexpectedEnumName = 'UnexpectedEnumName',
}

/**
 * 自定义命令所接受的参数类型。
 */
export enum CustomCommandParamType {
    /**
     * @remarks
     * 方块类型参数提供一个 {@link BlockType}。
     *
     */
    BlockType = 'BlockType',
    /**
     * @remarks
     * 布尔值参数。
     *
     */
    Boolean = 'Boolean',
    /**
     * @remarks
     * 实体选择器参数提供一个 {@link Entity}。
     *
     */
    EntitySelector = 'EntitySelector',
    /**
     * @remarks
     * 实体类型参数提供一个 {@link EntityType}。
     *
     */
    EntityType = 'EntityType',
    /**
     * @remarks
     * 命令枚举参数。
     *
     */
    Enum = 'Enum',
    /**
     * @remarks
     * 浮点数参数。
     *
     */
    Float = 'Float',
    /**
     * @remarks
     * 整数参数。
     *
     */
    Integer = 'Integer',
    /**
     * @remarks
     * 物品类型参数提供一个 {@link ItemType}。
     *
     */
    ItemType = 'ItemType',
    /**
     * @remarks
     * 位置参数提供一个 {@link
     * @minecraft/server.Location}。
     *
     */
    Location = 'Location',
    /**
     * @remarks
     * 玩家选择器参数提供一个 {@link Player}。
     *
     */
    PlayerSelector = 'PlayerSelector',
    /**
     * @remarks
     * 字符串参数。
     *
     */
    String = 'String',
}

/**
 * Who executed the command.
 */
export enum CustomCommandSource {
    /**
     * @remarks
     * 命令源自命令方块。
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 命令源自实体或玩家。
     *
     */
    Entity = 'Entity',
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 命令源自服务器。
     *
     */
    Server = 'Server',
}

export enum CustomCommandStatus {
    Success = 0,
    Failure = 1,
}

export enum CustomComponentNameErrorReason {
    NoNamespace = 1,
    DisallowedNamespace = 2,
}

/**
 * 用于表示 Minecraft 中不同难度等级的枚举。
 */
export enum Difficulty {
    /**
     * @remarks
     * 简单难度等级。
     *
     */
    Easy = 'Easy',
    /**
     * @remarks
     * 困难难度等级。
     *
     */
    Hard = 'Hard',
    /**
     * @remarks
     * 普通难度等级。
     *
     */
    Normal = 'Normal',
    /**
     * @remarks
     * 和平难度等级。
     *
     */
    Peaceful = 'Peaceful',
}

/**
 * 一个通用的相对方向枚举。
 */
export enum Direction {
    /**
     * @remarks
     * 返回此物品下方（y - 1）的 {@link Block}。
     *
     */
    Down = 'Down',
    /**
     * @remarks
     * 返回此物品东侧（x + 1）的 {@link Block}。
     *
     */
    East = 'East',
    /**
     * @remarks
     * 返回此物品北侧（z - 1）的 {@link Block}。
     *
     */
    North = 'North',
    /**
     * @remarks
     * 返回此物品南侧（z + 1）的 {@link Block}。
     *
     */
    South = 'South',
    /**
     * @remarks
     * 返回此物品上方（y + 1）的 {@link Block}。
     *
     */
    Up = 'Up',
    /**
     * @remarks
     * 返回此物品西侧（x - 1）的 {@link Block}。
     *
     */
    West = 'West',
}

/**
 * 指定在记分板上显示分数的机制。
 */
export enum DisplaySlotId {
    /**
     * @remarks
     * 在玩家名称下方显示分数。
     *
     */
    BelowName = 'BelowName',
    /**
     * @remarks
     * 在暂停屏幕上以列表形式显示分数。
     *
     */
    List = 'List',
    /**
     * @remarks
     * 在玩家屏幕侧面显示分数。
     *
     */
    Sidebar = 'Sidebar',
}

/**
 * 指定可用作染料的不同颜色。
 */
export enum DyeColor {
    /**
     * @remarks
     * 黑色染料颜色。
     *
     */
    Black = 'Black',
    /**
     * @remarks
     * 蓝色染料颜色。
     *
     */
    Blue = 'Blue',
    /**
     * @remarks
     * 棕色染料颜色。
     *
     */
    Brown = 'Brown',
    /**
     * @remarks
     * 青色染料颜色。
     *
     */
    Cyan = 'Cyan',
    /**
     * @remarks
     * 灰色染料颜色。
     *
     */
    Gray = 'Gray',
    /**
     * @remarks
     * 绿色染料颜色。
     *
     */
    Green = 'Green',
    /**
     * @remarks
     * 淡蓝色染料颜色。
     *
     */
    LightBlue = 'LightBlue',
    /**
     * @remarks
     * 黄绿色染料颜色。
     *
     */
    Lime = 'Lime',
    /**
     * @remarks
     * 品红色染料颜色。
     *
     */
    Magenta = 'Magenta',
    /**
     * @remarks
     * 橙色染料颜色。
     *
     */
    Orange = 'Orange',
    /**
     * @remarks
     * 粉红色染料颜色。
     *
     */
    Pink = 'Pink',
    /**
     * @remarks
     * 紫色染料颜色。
     *
     */
    Purple = 'Purple',
    /**
     * @remarks
     * 红色染料颜色。
     *
     */
    Red = 'Red',
    /**
     * @remarks
     * 银色染料颜色。
     *
     */
    Silver = 'Silver',
    /**
     * @remarks
     * 白色染料颜色。
     *
     */
    White = 'White',
    /**
     * @remarks
     * 黄色染料颜色。
     *
     */
    Yellow = 'Yellow',
}

export enum EasingType {
    InBack = 'InBack',
    InBounce = 'InBounce',
    InCirc = 'InCirc',
    InCubic = 'InCubic',
    InElastic = 'InElastic',
    InExpo = 'InExpo',
    InOutBack = 'InOutBack',
    InOutBounce = 'InOutBounce',
    InOutCirc = 'InOutCirc',
    InOutCubic = 'InOutCubic',
    InOutElastic = 'InOutElastic',
    InOutExpo = 'InOutExpo',
    InOutQuad = 'InOutQuad',
    InOutQuart = 'InOutQuart',
    InOutQuint = 'InOutQuint',
    InOutSine = 'InOutSine',
    InQuad = 'InQuad',
    InQuart = 'InQuart',
    InQuint = 'InQuint',
    InSine = 'InSine',
    Linear = 'Linear',
    OutBack = 'OutBack',
    OutBounce = 'OutBounce',
    OutCirc = 'OutCirc',
    OutCubic = 'OutCubic',
    OutElastic = 'OutElastic',
    OutExpo = 'OutExpo',
    OutQuad = 'OutQuad',
    OutQuart = 'OutQuart',
    OutQuint = 'OutQuint',
    OutSine = 'OutSine',
    Spring = 'Spring',
}

export enum EnchantmentSlot {
    ArmorFeet = 'ArmorFeet',
    ArmorHead = 'ArmorHead',
    ArmorLegs = 'ArmorLegs',
    ArmorTorso = 'ArmorTorso',
    Axe = 'Axe',
    Bow = 'Bow',
    CarrotStick = 'CarrotStick',
    CosmeticHead = 'CosmeticHead',
    Crossbow = 'Crossbow',
    Elytra = 'Elytra',
    FishingRod = 'FishingRod',
    Flintsteel = 'Flintsteel',
    Hoe = 'Hoe',
    MeleeSpear = 'MeleeSpear',
    Pickaxe = 'Pickaxe',
    Shears = 'Shears',
    Shield = 'Shield',
    Shovel = 'Shovel',
    Spear = 'Spear',
    Sword = 'Sword',
}

/**
 * 实体的附着位置点。包含头部、身体、腿等用于附着相机的点。
 */
export enum EntityAttachPoint {
    Body = 'Body',
    BreathingPoint = 'BreathingPoint',
    DropAttachPoint = 'DropAttachPoint',
    ExplosionPoint = 'ExplosionPoint',
    Eyes = 'Eyes',
    Feet = 'Feet',
    Head = 'Head',
    Mouth = 'Mouth',
    WeaponAttachPoint = 'WeaponAttachPoint',
}

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

/**
 * 描述实体的治疗来源。
 */
export enum EntityHealCause {
    /**
     * @remarks
     * 由药水等物品引起的治疗。
     *
     */
    Heal = 'Heal',
    /**
     * @remarks
     * 由再生效果引起的治疗。
     *
     */
    Regeneration = 'Regeneration',
    /**
     * @remarks
     * 当饥饿值满时引起的治疗。
     *
     */
    SelfHeal = 'SelfHeal',
    /**
     * @remarks
     * 当不死图腾被激活时引起的治疗。
     *
     */
    TotemOfUndying = 'TotemOfUndying',
}

/**
 * 描述实体初始化原因的枚举。
 */
export enum EntityInitializationCause {
    /**
     * @remarks
     * 当实体作为其他实体的子实体被创建时的情况，例如牛繁殖小牛，或史莱姆死亡后分裂出更小的史莱姆。
     *
     */
    Born = 'Born',
    /**
     * @remarks
     * 当实体由事件创建时的情况，例如流浪商人生成羊驼。
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * 当实体被加载到世界中时的情况。
     *
     */
    Loaded = 'Loaded',
    /**
     * @remarks
     * 当实体在世界中自然生成时的情况。
     *
     */
    Spawned = 'Spawned',
    /**
     * @remarks
     * 当实体被转化为另一个实体时的情况。
     *
     */
    Transformed = 'Transformed',
}

/**
 * 枚举，描述实体挥动的来源。作为 {@link PlayerSwingStartAfterEvent} 的一部分发送。
 */
export enum EntitySwingSource {
    /**
     * @remarks
     * 当实体作为攻击的一部分进行挥动时发送。
     *
     */
    Attack = 'Attack',
    /**
     * @remarks
     * 当实体作为建造动作的一部分进行挥动时发送。
     *
     */
    Build = 'Build',
    /**
     * @remarks
     * 当实体作为丢弃物品的一部分进行挥动时发送。
     *
     */
    DropItem = 'DropItem',
    /**
     * @remarks
     * 当实体作为事件响应的一部分进行挥动时发送。
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * 当实体作为交互的一部分进行挥动时发送。
     *
     */
    Interact = 'Interact',
    /**
     * @remarks
     * 当实体作为挖掘动作的一部分进行挥动时发送。
     *
     */
    Mine = 'Mine',
    /**
     * @remarks
     * 当实体的挥动没有可确定的来源时发送。
     *
     */
    None = 'None',
    /**
     * @remarks
     * 当实体作为投掷物品的一部分进行挥动时发送。
     *
     */
    ThrowItem = 'ThrowItem',
    /**
     * @remarks
     * 当实体作为使用物品的一部分进行挥动时发送。
     *
     */
    UseItem = 'UseItem',
}

/**
 * 生物的设备槽位。包括盔甲、副手和主手槽位。
 */
export enum EquipmentSlot {
    /**
     * @beta
     * @remarks
     * 身体槽位。该槽位用于放置非人形生物的盔甲。
     *
     */
    Body = 'Body',
    /**
     * @remarks
     * 胸部槽位。该槽位用于放置胸甲或鞘翅等物品。
     *
     */
    Chest = 'Chest',
    /**
     * @remarks
     * 脚部槽位。该槽位用于放置靴子等物品。
     *
     */
    Feet = 'Feet',
    /**
     * @remarks
     * 头部槽位。该槽位用于放置头盔或雕刻南瓜等物品。
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * 腿部槽位。该槽位用于放置护腿等物品。
     *
     */
    Legs = 'Legs',
    /**
     * @remarks
     * 主手槽位。对于玩家而言，主手槽位指当前激活的快捷栏槽位。
     *
     */
    Mainhand = 'Mainhand',
    /**
     * @remarks
     * 副手槽位。该槽位用于放置盾牌和地图等物品。
     *
     */
    Offhand = 'Offhand',
}

/**
 * 表示用于流体容器方块（如炼药锅）中的流体类型。
 */
export enum FluidType {
    /**
     * @remarks
     * 表示熔岩作为一种流体类型。
     *
     */
    Lava = 'Lava',
    /**
     * @remarks
     * 表示药水作为一种流体类型。
     *
     */
    Potion = 'Potion',
    /**
     * @remarks
     * 表示细雪作为一种流体类型。
     *
     */
    PowderSnow = 'PowderSnow',
    /**
     * @remarks
     * 表示水作为一种流体类型。
     *
     */
    Water = 'Water',
}

/**
 * 表示当前世界体验的游戏模式。
 */
export enum GameMode {
    /**
     * @remarks
     * 世界处于一种更受限的体验中，方块可能无法被操作。
     *
     */
    Adventure = 'Adventure',
    /**
     * @remarks
     * 世界处于完全创造模式。在创造模式下，玩家拥有物品选择标签页和生存选择标签页中的所有资源。
     * 他们还可以立即破坏方块，包括那些通常不可破坏的方块。命令方块和结构方块也可以在创造模式中使用。
     * 物品也不会损失耐久度或消失。
     *
     */
    Creative = 'Creative',
    /**
     * @remarks
     * 世界处于旁观者模式。在旁观者模式下，旁观者始终飞行，无法落地。
     * 旁观者可以无碰撞地穿过固体方块和实体，但不能使用物品或与方块、生物交互。
     * 旁观者无法被生物或其他玩家看到，其他旁观者除外；旁观者显示为透明的悬浮头颅。
     *
     */
    Spectator = 'Spectator',
    /**
     * @remarks
     * 世界处于生存模式，玩家可能受伤，实体也可能并非和平。
     * 生存模式要求玩家在生成的世界中生存，同时收集资源、建造结构。
     * 各种活动会逐渐消耗玩家的生命值和饥饿值。
     *
     */
    Survival = 'Survival',
}

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

/**
 * 描述客户端的图形模式。由 {@link
 * Player.graphicsMode} 使用。
 */
export enum GraphicsMode {
    /**
     * @remarks
     * 一种图形模式，指的是延迟技术
     * 预览图形模式设置。
     *
     */
    Deferred = 'Deferred',
    /**
     * @remarks
     * 一种图形模式，指的是精美图形模式
     * 设置。在此设置中，大多数特殊图形效果
     * 都会开启。
     *
     */
    Fancy = 'Fancy',
    /**
     * @remarks
     * 一种图形模式，指的是光线追踪图形模式
     * 设置。此设置会启用光线追踪。
     *
     */
    RayTraced = 'RayTraced',
    /**
     * @remarks
     * 一种图形模式，指的是简单图形模式
     * 设置。在此设置中，大多数图形效果
     * 都会关闭。
     *
     */
    Simple = 'Simple',
}

/**
 * 指定与实体当前持有的物品相关的选项。
 */
export enum HeldItemOption {
    /**
     * @remarks
     * 正在持有任何物品。
     *
     */
    AnyItem = 'AnyItem',
    /**
     * @remarks
     * 没有持有物品。
     *
     */
    NoItem = 'NoItem',
}

export enum HudElement {
    PaperDoll = 0,
    Armor = 1,
    ToolTips = 2,
    TouchControls = 3,
    Crosshair = 4,
    Hotbar = 5,
    Health = 6,
    ProgressBar = 7,
    Hunger = 8,
    AirBubbles = 9,
    HorseHealth = 10,
    StatusEffects = 11,
    ItemText = 12,
}

/**
 * 用于指定如何处理 HUD 元素可见性的
 * 枚举。
 */
export enum HudVisibility {
    /**
     * @remarks
     * 指定此 HUD 元素应被隐藏。
     *
     */
    Hide = 0,
    /**
     * @remarks
     * 指定此 HUD 元素应重置为其默认状态
     * （虽然大多数 HUD 元素可见，但某些 HUD
     * 元素可由玩家通过设置隐藏。）
     *
     */
    Reset = 1,
}

/**
 * 所有受支持的不同输入按钮。可与
 * {@link InputInfo.getButtonState}（通过 {@link
 * Player.inputInfo}）或 {@link PlayerButtonInputAfterEvent}（通过
 * {@link WorldAfterEvents.playerButtonInput}）一起使用。
 */
export enum InputButton {
    /**
     * @remarks
     * 此按钮映射到控制器、键盘和触摸界面上的“跳跃”按钮。
     *
     */
    Jump = 'Jump',
    /**
     * @remarks
     * 此按钮映射到控制器、键盘和触摸界面上的“潜行”按钮。默认情况下，在键盘上为 Shift 键，
     * 在 Xbox 控制器上为 B 键。在触摸界面上，此按钮仅会按下 1 刻或更短时间，然后立即释放，
     * 即使玩家按住手指。从马背上下来或退出船不会发送潜行按钮变化事件。
     *
     */
    Sneak = 'Sneak',
}

/**
 * 描述设备输入的类型。
 */
export enum InputMode {
    /**
     * @remarks
     * 游戏手柄输入。
     *
     */
    Gamepad = 'Gamepad',
    /**
     * @remarks
     * 键盘和鼠标输入。
     *
     */
    KeyboardAndMouse = 'KeyboardAndMouse',
    /**
     * @remarks
     * 运动控制器输入。
     *
     */
    MotionController = 'MotionController',
    /**
     * @remarks
     * 触摸输入。
     *
     */
    Touch = 'Touch',
}

/**
 * 输入权限类别。由 {@link
 * PlayerInputPermissionCategoryChangeAfterEvent} 指定
 * 哪个类别被更改，并由 {@link
 * PlayerInputPermissions} 获取或设置权限。
 */
export enum InputPermissionCategory {
    /**
     * @remarks
     * 与摄像机移动相关的玩家输入。
     *
     */
    Camera = 1,
    /**
     * @remarks
     * 与所有玩家移动相关的玩家输入。禁用此项等同于禁用跳跃、潜行、横向移动、骑乘和解除骑乘。
     *
     */
    Movement = 2,
    /**
     * @remarks
     * 用于在世界中横向移动的玩家输入。这相当于键盘上的 WASD，或手柄或触摸屏上的移动摇杆。
     *
     */
    LateralMovement = 4,
    /**
     * @remarks
     * 与潜行相关的玩家输入。这也会影响向下飞行。
     *
     */
    Sneak = 5,
    /**
     * @remarks
     * 与跳跃相关的玩家输入。这也会影响向上飞行。
     *
     */
    Jump = 6,
    /**
     * @remarks
     * 与骑乘载具相关的玩家输入。
     *
     */
    Mount = 7,
    /**
     * @remarks
     * 与解除骑乘相关的玩家输入。禁用后，玩家仍可通过其他方式解除骑乘，例如骑马时仍可跳下，在船上时玩家可以进入另一艘船。
     *
     */
    Dismount = 8,
    /**
     * @remarks
     * 与玩家向前移动相关的玩家输入。
     *
     */
    MoveForward = 9,
    /**
     * @remarks
     * 与玩家向后移动相关的玩家输入。
     *
     */
    MoveBackward = 10,
    /**
     * @remarks
     * 与玩家向左移动相关的玩家输入。
     *
     */
    MoveLeft = 11,
    /**
     * @remarks
     * 与玩家向右移动相关的玩家输入。
     *
     */
    MoveRight = 12,
}

/**
 * 可通过 ItemStack.getComponent 函数访问的
 * 物品组件类型。
 */
export enum ItemComponentTypes {
    /**
     * @beta
     */
    BlockDynamicProperties = 'minecraft:block_actor_dynamic_properties',
    /**
     * @remarks
     * minecraft:book 组件。
     *
     */
    Book = 'minecraft:book',
    Compostable = 'minecraft:compostable',
    /**
     * @remarks
     * minecraft:cooldown 组件。
     *
     */
    Cooldown = 'minecraft:cooldown',
    /**
     * @remarks
     * minecraft:durability 组件。
     *
     */
    Durability = 'minecraft:durability',
    Dyeable = 'minecraft:dyeable',
    /**
     * @remarks
     * minecraft:enchantable 组件。
     *
     */
    Enchantable = 'minecraft:enchantable',
    /**
     * @remarks
     * minecraft:food 组件。
     *
     */
    Food = 'minecraft:food',
    Inventory = 'minecraft:inventory',
    Potion = 'minecraft:potion',
}

/**
 * 描述一个物品如何在容器内移动。
 */
export enum ItemLockMode {
    /**
     * @remarks
     * 该物品不能被丢弃或用于合成。
     *
     */
    inventory = 'inventory',
    /**
     * @remarks
     * 该物品没有容器限制。
     *
     */
    none = 'none',
    /**
     * @remarks
     * 该物品不能从所在槽位移走、被丢弃或用于
     * 合成。
     *
     */
    slot = 'slot',
}

/**
 * 指定如何处理与现有液体重叠的可含水方块。
 */
export enum LiquidSettings {
    /**
     * @remarks
     * 使可含水方块在与现有液体重叠时变为含水状态。
     *
     */
    ApplyWaterlogging = 'ApplyWaterlogging',
    /**
     * @remarks
     * 不使任何与现有液体重叠的可含水方块变为含水状态。
     *
     */
    IgnoreWaterlogging = 'IgnoreWaterlogging',
}

/**
 * 表示可以放置在方块上或在世界中动态流动的液体类型。
 */
export enum LiquidType {
    /**
     * @remarks
     * 表示水作为一种液体类型。
     *
     */
    Water = 'Water',
}

/**
 * 代表定位栏操作可能失败的不同原因的枚举。
 */
export enum LocatorBarErrorReason {
    /**
     * @remarks
     * 该路径点已存在于定位栏中，无法再次添加。
     *
     */
    WaypointAlreadyExists = 'WaypointAlreadyExists',
    /**
     * @remarks
     * 已达到路径点数量上限，无法继续添加。
     *
     */
    WaypointLimitExceeded = 'WaypointLimitExceeded',
    /**
     * @remarks
     * 指定的路径点不存在于定位栏中。
     *
     */
    WaypointNotFound = 'WaypointNotFound',
}

/**
 * 描述设备的内存。
 */
export enum MemoryTier {
    /**
     * @remarks
     * 极低档的最大内存为 1.5GB。
     *
     */
    SuperLow = 0,
    /**
     * @remarks
     *  低档的最大内存为 2GB。
     *
     */
    Low = 1,
    /**
     * @remarks
     * 中档的最大内存为 4GB。
     *
     */
    Mid = 2,
    /**
     * @remarks
     * 高档的最大内存为 8GB。
     *
     */
    High = 3,
    /**
     * @remarks
     * 超高档的内存为 8GB 以上。
     *
     */
    SuperHigh = 4,
}

/**
 * 包含基于当前日期的不同月相的枚举，
 * 使用 world.getMoonPhase
 * 获取当前月相。
 *
 * 月相控制各种生物行为，例如
 * 沼泽生物群系中生成的史莱姆数量、
 * 骷髅和僵尸生成时带有盔甲的几率，
 * 以及蜘蛛生成时带有特定状态效果的
 * 几率。
 */
export enum MoonPhase {
    /**
     * @remarks
     * 最亮的月相。在该月相期间，猫有 50% 的几率
     * 生成为黑猫。
     *
     */
    FullMoon = 0,
    /**
     * @remarks
     * 满月之后的月相。
     *
     */
    WaningGibbous = 1,
    /**
     * @remarks
     * 蛾眉月之后的月相。
     *
     */
    FirstQuarter = 2,
    /**
     * @remarks
     * 下弦月之后的月相。
     *
     */
    WaningCrescent = 3,
    /**
     * @remarks
     * 最暗的月相。
     *
     */
    NewMoon = 4,
    /**
     * @remarks
     * 新月之后的月相。
     *
     */
    WaxingCrescent = 5,
    /**
     * @remarks
     * 亏凸月之后的月相。
     *
     */
    LastQuarter = 6,
    /**
     * @remarks
     * 上弦月之后的月相。
     *
     */
    WaxingGibbous = 7,
}

export enum MovementType {
    Immovable = 'Immovable',
    Popped = 'Popped',
    Push = 'Push',
    PushPull = 'PushPull',
}

/**
 * 描述命名空间名称错误被抛出原因的枚举
 */
export enum NamespaceNameErrorReason {
    /**
     * @remarks
     * 使用了受限制的命名空间
     *
     */
    DisallowedNamespace = 'DisallowedNamespace',
    /**
     * @remarks
     * 当需要命名空间时，名称缺少命名空间
     *
     */
    NoNamespace = 'NoNamespace',
}

/**
 * 用于指定目标及其参与者列表的显示排序方式。
 */
export enum ObjectiveSortOrder {
    /**
     * @remarks
     * 目标参与者列表按升序（例如 A-Z）显示。
     *
     */
    Ascending = 0,
    /**
     * @remarks
     * 目标参与者列表按降序（例如 Z-A）显示。
     *
     */
    Descending = 1,
}

/**
 * 包含用于 EntityColorComponent 和 EntityColor2Component 的颜色枚举
 */
export enum PaletteColor {
    /**
     * @remarks
     * 十六进制颜色 #f0f0f0
     *
     */
    White = 0,
    /**
     * @remarks
     * 十六进制颜色 #F9801D
     *
     */
    Orange = 1,
    /**
     * @remarks
     * 十六进制颜色 #C74EBD
     *
     */
    Magenta = 2,
    /**
     * @remarks
     * 十六进制颜色 #3AB3DA
     *
     */
    LightBlue = 3,
    /**
     * @remarks
     * 十六进制颜色 #FED83D
     *
     */
    Yellow = 4,
    /**
     * @remarks
     * 十六进制颜色 #80C71F
     *
     */
    Lime = 5,
    /**
     * @remarks
     * 十六进制颜色 #F38BAA
     *
     */
    Pink = 6,
    /**
     * @remarks
     * 十六进制颜色 #474F52
     *
     */
    Gray = 7,
    /**
     * @remarks
     * 十六进制颜色 #9D9D97
     *
     */
    Silver = 8,
    /**
     * @remarks
     * 十六进制颜色 #169C9C
     *
     */
    Cyan = 9,
    /**
     * @remarks
     * 十六进制颜色 #8932B8
     *
     */
    Purple = 10,
    /**
     * @remarks
     * 十六进制颜色 #3C44AA
     *
     */
    Blue = 11,
    /**
     * @remarks
     * 十六进制颜色 #835432
     *
     */
    Brown = 12,
    /**
     * @remarks
     * 十六进制颜色 #5E7C16
     *
     */
    Green = 13,
    /**
     * @remarks
     * 十六进制颜色 #B02E26
     *
     */
    Red = 14,
    /**
     * @remarks
     * 十六进制颜色 #1D1D21
     *
     */
    Black = 15,
}

/**
 * 描述设备属于哪种平台。
 */
export enum PlatformType {
    /**
     * @remarks
     * 专用游戏设备。
     *
     */
    Console = 'Console',
    /**
     * @remarks
     * 个人计算机（PC）。
     *
     */
    Desktop = 'Desktop',
    /**
     * @remarks
     *  手持设备，如智能手机或平板电脑。
     *
     */
    Mobile = 'Mobile',
}

/**
 * 指定玩家物品栏类型。
 */
export enum PlayerInventoryType {
    /**
     * @remarks
     * 快捷栏物品栏。
     *
     */
    Hotbar = 'Hotbar',
    /**
     * @remarks
     * 主物品栏。
     *
     */
    Inventory = 'Inventory',
}

/**
 * 玩家权限等级。
 */
export enum PlayerPermissionLevel {
    /**
     * @remarks
     * 访客只能观察世界，不能与之交互。
     *
     */
    Visitor = 0,
    /**
     * @remarks
     * 成员可以建造和挖掘，攻击玩家和生物，以及
     * 与物品和实体交互。
     *
     */
    Member = 1,
    /**
     * @remarks
     * 操作员可以传送和使用命令，此外还能
     * 做成员能做的一切。
     *
     */
    Operator = 2,
    Custom = 3,
}

/**
 * 玩家的分屏槽位。
 */
export enum PlayerSplitScreenSlot {
    /**
     * @remarks
     * 分屏会话中的第一个玩家。这是主玩家。
     *
     */
    First = 'First',
    /**
     * @remarks
     * 分屏会话中的第四个玩家。
     *
     */
    Fourth = 'Fourth',
    /**
     * @remarks
     * 分屏会话中的第二个玩家。
     *
     */
    Second = 'Second',
    /**
     * @remarks
     * 分屏会话中的第三个玩家。
     *
     */
    Third = 'Third',
}

/**
 * @beta
 */
export enum PlayerWaypointsMode {
    Everyone = 'Everyone',
    Off = 'Off',
}

/**
 * @beta
 * 指定方块兴趣点查询如何根据票券占用情况筛选实例。
 */
export enum PoiBlockOccupancyFilter {
    /**
     * @remarks
     * 包含所有 POI 实例，无论其占用情况或可用票券数量如何。
     *
     */
    Any = 'Any',
    /**
     * @remarks
     * 包含没有可用票券的 POI 实例。
     *
     */
    Full = 'Full',
    /**
     * @remarks
     * 包含至少有一个票券可供领取的 POI 实例。
     *
     */
    HasVacancy = 'HasVacancy',
}

/**
 * 包含记分板的目标和参与者。
 */
export enum ScoreboardIdentityType {
    /**
     * @remarks
     * 此记分板参与者与一个实体绑定。
     *
     */
    Entity = 'Entity',
    /**
     * @remarks
     * 此记分板参与者与一个伪玩家实体绑定 - 通常用于将分数存储为数据或作为抽象进度。
     *
     */
    FakePlayer = 'FakePlayer',
    /**
     * @remarks
     * 此记分板参与者与一个玩家绑定。
     *
     */
    Player = 'Player',
}

/**
 * 描述脚本事件的来源。
 */
export enum ScriptEventSource {
    /**
     * @remarks
     * 脚本事件源于一个方块，例如
     * 命令方块。
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 脚本事件源于一个实体，例如玩家、
     * 命令方块矿车或动画控制器。
     *
     */
    Entity = 'Entity',
    /**
     * @remarks
     * 脚本事件源于 NPC 对话。
     *
     */
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 脚本事件源于服务器，例如来自
     * runCommand API 调用或专用服务器控制台。
     *
     */
    Server = 'Server',
}

/**
 * 表示告示牌的一个面。
 */
export enum SignSide {
    /**
     * @remarks
     * 告示牌的背面。
     *
     */
    Back = 'Back',
    /**
     * @remarks
     * 告示牌的正面。
     *
     */
    Front = 'Front',
}

export enum StickyType {
    None = 'None',
    Same = 'Same',
}

/**
 * 指定当放置结构时，结构方块应如何动画显示。
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * 方块将随机地一次一个放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds 来
     * 控制所有方块放置完成所需的时间。
     *
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * 方块将从下到上一次一层放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds 来
     * 控制所有方块放置完成所需的时间。
     *
     */
    Layers = 'Layers',
    /**
     * @remarks
     * 所有方块将立即放置。
     *
     */
    None = 'None',
}

/**
 * 指定放置结构时应如何进行镜像。
 */
export enum StructureMirrorAxis {
    /**
     * @remarks
     * 无镜像。
     *
     */
    None = 'None',
    /**
     * @remarks
     * 结构沿 X 轴镜像。
     *
     */
    X = 'X',
    /**
     * @remarks
     * 结构沿 X 轴和 Z 轴镜像。
     *
     */
    XZ = 'XZ',
    /**
     * @remarks
     * 结构沿 Z 轴镜像。
     *
     */
    Z = 'Z',
}

/**
 * 描述结构放置旋转的枚举。
 */
export enum StructureRotation {
    /**
     * @remarks
     * 不旋转。
     *
     */
    None = 'None',
    /**
     * @remarks
     * 180度旋转。
     *
     */
    Rotate180 = 'Rotate180',
    /**
     * @remarks
     * 270度旋转。
     *
     */
    Rotate270 = 'Rotate270',
    /**
     * @remarks
     * 90度旋转。
     *
     */
    Rotate90 = 'Rotate90',
}

/**
 * 指定结构应该如何保存。
 */
export enum StructureSaveMode {
    /**
     * @remarks
     * 该结构将临时保存到内存中。
     * 该结构将持续存在，直到世界关闭。
     *
     */
    Memory = 'Memory',
    /**
     * @remarks
     * 该结构将保存到世界文件中，并在世界加载之间持续存在。
     * 已保存的结构可通过 @minecraft/server.StructureManager.delete 从世界中移除。
     *
     */
    World = 'World',
}

/**
 * 抛出 {@link
 * @minecraft/server.TickingAreaError} 的原因。
 */
export enum TickingAreaErrorReason {
    /**
     * @remarks
     * 添加了一个标识符已存在的常加载区域。
     *
     */
    IdentifierAlreadyExists = 'IdentifierAlreadyExists',
    /**
     * @remarks
     * 添加此常加载区域导致常加载区域数量超过 {@link TickingAreaManager.maxChunkCount} 指定的限制。
     *
     */
    OverChunkLimit = 'OverChunkLimit',
    /**
     * @remarks
     * 常加载区域的长度或宽度超过了 255 个区块的限制。
     *
     */
    SideLengthExceeded = 'SideLengthExceeded',
    /**
     * @remarks
     * 尝试删除标识符未在 {@link TickingAreaManager} 中注册的常加载区域。
     *
     */
    UnknownIdentifier = 'UnknownIdentifier',
}

/**
 * 提供 Minecraft 日中常见时段的
 * 数值。
 */
export enum TimeOfDay {
    /**
     * @remarks
     * 将时间设置到一天开始，即 Minecraft 中的时刻
     * 1,000（相当于上午 7:00）。
     *
     */
    Day = 1000,
    /**
     * @remarks
     * 将时间设置到正午，即 Minecraft 中的时刻
     * 6,000。
     *
     */
    Noon = 6000,
    /**
     * @remarks
     * 将时间设置到日落，即 Minecraft 中的时刻
     * 12,000（相当于下午 6:00）。
     *
     */
    Sunset = 12000,
    /**
     * @remarks
     * 将时间设置到夜晚，即 Minecraft 中的时刻
     * 13,000（相当于下午 7:00）。
     *
     */
    Night = 13000,
    /**
     * @remarks
     * 将时间设置到午夜，即 Minecraft 中的时刻
     * 18,000（相当于午夜 12:00）。
     *
     */
    Midnight = 18000,
    /**
     * @remarks
     * 将时间设置到日出，即 Minecraft 中的时刻
     * 23,000（相当于上午 5:00）。
     *
     */
    Sunrise = 23000,
}

/**
 * 应用于方块或方块一部分的着色逻辑。当世界位置作为上下文的一部分时，
 * 颜色可能会变化，因为生物群系通常会影响最终的着色。
 */
export enum TintMethod {
    /**
     * @remarks
     * 指定白桦树叶的着色方法。
     *
     */
    BirchFoliage = 'BirchFoliage',
    /**
     * @remarks
     * 指定默认树叶的着色方法。
     *
     */
    DefaultFoliage = 'DefaultFoliage',
    /**
     * @remarks
     * 指定干枯树叶的着色方法。
     *
     */
    DryFoliage = 'DryFoliage',
    /**
     * @remarks
     * 指定常绿树叶的着色方法。
     *
     */
    EvergreenFoliage = 'EvergreenFoliage',
    /**
     * @remarks
     * 指定草丛的着色方法。
     *
     */
    Grass = 'Grass',
    /**
     * @remarks
     * 指定无着色方法，产生白色着色。
     *
     */
    None = 'None',
    /**
     * @remarks
     * 指定水的着色方法。
     *
     */
    Water = 'Water',
}

/**
 * @beta
 * 一个枚举，表示看门狗决定终止某个行为包脚本执行的原因。
 */
export enum WatchdogTerminateReason {
    /**
     * @remarks
     * 行为包的脚本运行时因脚本无响应（挂起或无限循环）而被终止。
     *
     */
    Hang = 'Hang',
    /**
     * @remarks
     * 行为包的脚本运行时因堆栈溢出（长且可能无限的函数调用链）而被终止。
     *
     */
    StackOverflow = 'StackOverflow',
}

/**
 * 表示不同纹理图标的枚举，
 * 这些图标可用于定位条上的路径点显示。
 */
export enum WaypointTexture {
    /**
     * @remarks
     * 圆形路径点图标纹理。
     *
     */
    Circle = 'minecraft:circle',
    /**
     * @remarks
     * 小方形路径点图标纹理。
     *
     */
    SmallSquare = 'minecraft:small_square',
    /**
     * @remarks
     * 小星形路径点图标纹理。
     *
     */
    SmallStar = 'minecraft:small_star',
    /**
     * @remarks
     * 方形路径点图标纹理。
     *
     */
    Square = 'minecraft:square',
}

/**
 * 用于指定世界中的天气类型。
 */
export enum WeatherType {
    /**
     * @remarks
     * 指定晴朗的天气条件。
     *
     */
    Clear = 'Clear',
    /**
     * @remarks
     * 指定降雨天气条件。
     *
     */
    Rain = 'Rain',
    /**
     * @remarks
     * 指定降雨和雷暴天气条件。
     *
     */
    Thunder = 'Thunder',
}

export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap
    ? BlockComponentTypeMap[T]
    : BlockCustomComponentInstance;

export type BlockComponentTypeMap = {
    dynamic_properties: BlockDynamicPropertiesComponent;
    fluid_container: BlockFluidContainerComponent;
    instrument_sound: BlockInstrumentComponent;
    inventory: BlockInventoryComponent;
    map_color: BlockMapColorComponent;
    'minecraft:dynamic_properties': BlockDynamicPropertiesComponent;
    'minecraft:fluid_container': BlockFluidContainerComponent;
    'minecraft:instrument_sound': BlockInstrumentComponent;
    'minecraft:inventory': BlockInventoryComponent;
    'minecraft:map_color': BlockMapColorComponent;
    'minecraft:movable': BlockMovableComponent;
    'minecraft:piston': BlockPistonComponent;
    'minecraft:precipitation_interactions': BlockPrecipitationInteractionsComponent;
    'minecraft:record_player': BlockRecordPlayerComponent;
    'minecraft:redstone_producer': BlockRedstoneProducerComponent;
    'minecraft:sign': BlockSignComponent;
    movable: BlockMovableComponent;
    piston: BlockPistonComponent;
    precipitation_interactions: BlockPrecipitationInteractionsComponent;
    record_player: BlockRecordPlayerComponent;
    redstone_producer: BlockRedstoneProducerComponent;
    sign: BlockSignComponent;
};

/**
 * 用于 {@link BlockPermutation} 匹配和解析函数的类型别名，用于将方块状态参数类型缩小为
 * {@link @minecraft/vanilla-data.BlockStateMapping} 所映射的类型。
 */
export type BlockStateArg<T> = T extends `${minecraftvanilladata.MinecraftBlockTypes}`
    ? T extends keyof minecraftvanilladata.BlockStateMapping
        ? minecraftvanilladata.BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;

export type EntityComponentReturnType<T extends string> = T extends keyof EntityComponentTypeMap
    ? EntityComponentTypeMap[T]
    : EntityComponent;

export type EntityComponentTypeMap = {
    addrider: EntityAddRiderComponent;
    ageable: EntityAgeableComponent;
    breathable: EntityBreathableComponent;
    can_climb: EntityCanClimbComponent;
    can_fly: EntityCanFlyComponent;
    can_power_jump: EntityCanPowerJumpComponent;
    color: EntityColorComponent;
    color2: EntityColor2Component;
    cursor_inventory: PlayerCursorInventoryComponent;
    ender_inventory: EntityEnderInventoryComponent;
    equippable: EntityEquippableComponent;
    fire_immune: EntityFireImmuneComponent;
    floats_in_liquid: EntityFloatsInLiquidComponent;
    flying_speed: EntityFlyingSpeedComponent;
    friction_modifier: EntityFrictionModifierComponent;
    healable: EntityHealableComponent;
    health: EntityHealthComponent;
    inventory: EntityInventoryComponent;
    is_baby: EntityIsBabyComponent;
    is_charged: EntityIsChargedComponent;
    is_chested: EntityIsChestedComponent;
    is_dyeable: EntityIsDyeableComponent;
    is_hidden_when_invisible: EntityIsHiddenWhenInvisibleComponent;
    is_ignited: EntityIsIgnitedComponent;
    is_illager_captain: EntityIsIllagerCaptainComponent;
    is_saddled: EntityIsSaddledComponent;
    is_shaking: EntityIsShakingComponent;
    is_sheared: EntityIsShearedComponent;
    is_stackable: EntityIsStackableComponent;
    is_stunned: EntityIsStunnedComponent;
    is_tamed: EntityIsTamedComponent;
    item: EntityItemComponent;
    lava_movement: EntityLavaMovementComponent;
    leashable: EntityLeashableComponent;
    mark_variant: EntityMarkVariantComponent;
    'minecraft:addrider': EntityAddRiderComponent;
    'minecraft:ageable': EntityAgeableComponent;
    'minecraft:breathable': EntityBreathableComponent;
    'minecraft:can_climb': EntityCanClimbComponent;
    'minecraft:can_fly': EntityCanFlyComponent;
    'minecraft:can_power_jump': EntityCanPowerJumpComponent;
    'minecraft:color': EntityColorComponent;
    'minecraft:color2': EntityColor2Component;
    'minecraft:cursor_inventory': PlayerCursorInventoryComponent;
    'minecraft:ender_inventory': EntityEnderInventoryComponent;
    'minecraft:equippable': EntityEquippableComponent;
    'minecraft:fire_immune': EntityFireImmuneComponent;
    'minecraft:floats_in_liquid': EntityFloatsInLiquidComponent;
    'minecraft:flying_speed': EntityFlyingSpeedComponent;
    'minecraft:friction_modifier': EntityFrictionModifierComponent;
    'minecraft:healable': EntityHealableComponent;
    'minecraft:health': EntityHealthComponent;
    'minecraft:inventory': EntityInventoryComponent;
    'minecraft:is_baby': EntityIsBabyComponent;
    'minecraft:is_charged': EntityIsChargedComponent;
    'minecraft:is_chested': EntityIsChestedComponent;
    'minecraft:is_dyeable': EntityIsDyeableComponent;
    'minecraft:is_hidden_when_invisible': EntityIsHiddenWhenInvisibleComponent;
    'minecraft:is_ignited': EntityIsIgnitedComponent;
    'minecraft:is_illager_captain': EntityIsIllagerCaptainComponent;
    'minecraft:is_saddled': EntityIsSaddledComponent;
    'minecraft:is_shaking': EntityIsShakingComponent;
    'minecraft:is_sheared': EntityIsShearedComponent;
    'minecraft:is_stackable': EntityIsStackableComponent;
    'minecraft:is_stunned': EntityIsStunnedComponent;
    'minecraft:is_tamed': EntityIsTamedComponent;
    'minecraft:item': EntityItemComponent;
    'minecraft:lava_movement': EntityLavaMovementComponent;
    'minecraft:leashable': EntityLeashableComponent;
    'minecraft:mark_variant': EntityMarkVariantComponent;
    'minecraft:movement': EntityMovementComponent;
    'minecraft:movement.amphibious': EntityMovementAmphibiousComponent;
    'minecraft:movement.basic': EntityMovementBasicComponent;
    'minecraft:movement.fly': EntityMovementFlyComponent;
    'minecraft:movement.generic': EntityMovementGenericComponent;
    'minecraft:movement.glide': EntityMovementGlideComponent;
    'minecraft:movement.hover': EntityMovementHoverComponent;
    'minecraft:movement.jump': EntityMovementJumpComponent;
    'minecraft:movement.skip': EntityMovementSkipComponent;
    'minecraft:movement.sway': EntityMovementSwayComponent;
    'minecraft:navigation.climb': EntityNavigationClimbComponent;
    'minecraft:navigation.float': EntityNavigationFloatComponent;
    'minecraft:navigation.fly': EntityNavigationFlyComponent;
    'minecraft:navigation.generic': EntityNavigationGenericComponent;
    'minecraft:navigation.hover': EntityNavigationHoverComponent;
    'minecraft:navigation.walk': EntityNavigationWalkComponent;
    'minecraft:npc': EntityNpcComponent;
    'minecraft:onfire': EntityOnFireComponent;
    'minecraft:player.exhaustion': EntityExhaustionComponent;
    'minecraft:player.hunger': EntityHungerComponent;
    'minecraft:player.saturation': EntitySaturationComponent;
    'minecraft:projectile': EntityProjectileComponent;
    'minecraft:push_through': EntityPushThroughComponent;
    'minecraft:rideable': EntityRideableComponent;
    'minecraft:riding': EntityRidingComponent;
    'minecraft:scale': EntityScaleComponent;
    'minecraft:skin_id': EntitySkinIdComponent;
    'minecraft:strength': EntityStrengthComponent;
    'minecraft:tameable': EntityTameableComponent;
    'minecraft:tamemount': EntityTameMountComponent;
    'minecraft:type_family': EntityTypeFamilyComponent;
    'minecraft:underwater_movement': EntityUnderwaterMovementComponent;
    'minecraft:variant': EntityVariantComponent;
    'minecraft:wants_jockey': EntityWantsJockeyComponent;
    movement: EntityMovementComponent;
    'movement.amphibious': EntityMovementAmphibiousComponent;
    'movement.basic': EntityMovementBasicComponent;
    'movement.fly': EntityMovementFlyComponent;
    'movement.generic': EntityMovementGenericComponent;
    'movement.glide': EntityMovementGlideComponent;
    'movement.hover': EntityMovementHoverComponent;
    'movement.jump': EntityMovementJumpComponent;
    'movement.skip': EntityMovementSkipComponent;
    'movement.sway': EntityMovementSwayComponent;
    'navigation.climb': EntityNavigationClimbComponent;
    'navigation.float': EntityNavigationFloatComponent;
    'navigation.fly': EntityNavigationFlyComponent;
    'navigation.generic': EntityNavigationGenericComponent;
    'navigation.hover': EntityNavigationHoverComponent;
    'navigation.walk': EntityNavigationWalkComponent;
    npc: EntityNpcComponent;
    onfire: EntityOnFireComponent;
    'player.exhaustion': EntityExhaustionComponent;
    'player.hunger': EntityHungerComponent;
    'player.saturation': EntitySaturationComponent;
    projectile: EntityProjectileComponent;
    push_through: EntityPushThroughComponent;
    rideable: EntityRideableComponent;
    riding: EntityRidingComponent;
    scale: EntityScaleComponent;
    skin_id: EntitySkinIdComponent;
    strength: EntityStrengthComponent;
    tameable: EntityTameableComponent;
    tamemount: EntityTameMountComponent;
    type_family: EntityTypeFamilyComponent;
    underwater_movement: EntityUnderwaterMovementComponent;
    variant: EntityVariantComponent;
    wants_jockey: EntityWantsJockeyComponent;
};

/**
 * @beta
 */
export type EntityIdentifierType<T> = [T] extends [never]
    ? VanillaEntityIdentifier
    : T extends string
      ? VanillaEntityIdentifier | T
      : never;

export type ItemComponentReturnType<T extends string> = T extends keyof ItemComponentTypeMap
    ? ItemComponentTypeMap[T]
    : ItemCustomComponentInstance;

export type ItemComponentTypeMap = {
    block_actor_dynamic_properties: ItemBlockDynamicPropertiesComponent;
    book: ItemBookComponent;
    compostable: ItemCompostableComponent;
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    dyeable: ItemDyeableComponent;
    enchantable: ItemEnchantableComponent;
    food: ItemFoodComponent;
    inventory: ItemInventoryComponent;
    'minecraft:block_actor_dynamic_properties': ItemBlockDynamicPropertiesComponent;
    'minecraft:book': ItemBookComponent;
    'minecraft:compostable': ItemCompostableComponent;
    'minecraft:cooldown': ItemCooldownComponent;
    'minecraft:durability': ItemDurabilityComponent;
    'minecraft:dyeable': ItemDyeableComponent;
    'minecraft:enchantable': ItemEnchantableComponent;
    'minecraft:food': ItemFoodComponent;
    'minecraft:inventory': ItemInventoryComponent;
    'minecraft:potion': ItemPotionComponent;
    potion: ItemPotionComponent;
};

/**
 * @beta
 */
export type VanillaEntityIdentifier =
    | EntityType
    | minecraftvanilladata.MinecraftEntityTypes
    | `${minecraftvanilladata.MinecraftEntityTypes}`
    | `${minecraftvanilladata.MinecraftEntityTypes}<${string}>`;

/**
 * 对存在于 world.aimAssist 注册表中的瞄准辅助类别的句柄。
 */
export class AimAssistCategory {
    private constructor();
    /**
     * @remarks
     * 默认用于在 getBlockPriorities 中未找到的方块类型的瞄准优先级。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * 默认用于在 getEntityPriorities 中未找到的实体类型的瞄准优先级。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly defaultEntityPriority: number;
    /**
     * @remarks
     * 与此类别关联的唯一标识符。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     *
     * @returns
     * 返回一个记录，将方块 ID 映射到其优先级设置。数字越大，优先级越高。
     * @throws 此函数可能抛出错误。
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     *
     * @returns
     * 返回一个记录，将方块标签映射到其优先级设置。数字越大，优先级越高。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     *
     * @returns
     * 返回一个记录，将实体 ID 映射到其优先级设置。数字越大，优先级越高。
     * @throws 此函数可能抛出错误。
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     *
     * @returns
     * 将实体类型族映射到其在 Record 中的优先级设置。数字越大，优先级越高。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
}

/**
 * 与 AimAssistRegistry.addCategory 一起使用的设置，
 * 用于创建 AimAssistCategory。
 */
export class AimAssistCategorySettings {
    /**
     * @remarks
     * 可选。用于未向 setBlockPriorities 提供的
     * 方块类型的默认目标优先级。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultBlockPriority: number;
    /**
     * @remarks
     * 可选。用于未向 setEntityPriorities 提供的
     * 实体类型的默认目标优先级。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultEntityPriority: number;
    /**
     * @remarks
     * 用于注册类别的唯一 ID。必须具有
     * 命名空间。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 构造函数，接受一个唯一 ID 以关联到创建的
     * AimAssistCategory。必须具有命名空间。
     *
     */
    constructor(identifier: string);
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     *
     * @returns
     * 将方块 ID 映射到其优先级设置的记录。
     * 数字越大优先级越高。
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于方块瞄准的优先级设置。
     *
     * @returns
     * 将方块标签映射到其优先级设置的记录。
     * 数字越大优先级越高。
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     *
     * @returns
     * 将实体 ID 映射到其优先级设置的记录。
     * 数字越大优先级越高。
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @remarks
     * 获取用于实体瞄准的优先级设置。
     *
     * @returns
     * 将实体类型族映射到其优先级设置的记录。
     * 数字越大优先级越高。
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
    /**
     * @remarks
     * 设置用于方块瞄准的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockPriorities
     * 将方块 ID 映射到其优先级设置的记录。数字越大优先级越高。
     */
    setBlockPriorities(
        blockPriorities: Record<keyof typeof minecraftvanilladata.MinecraftBlockTypes | string, number>,
    ): void;
    /**
     * @remarks
     * 设置用于方块瞄准的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockTagPriorities
     * 将方块标签映射到其优先级设置的记录。数字越大优先级越高。
     */
    setBlockTagPriorities(blockTagPriorities: Record<string, number>): void;
    /**
     * @remarks
     * 设置用于实体瞄准的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param entityPriorities
     * 将实体 ID 映射到其优先级设置的记录。数字越大优先级越高。
     */
    setEntityPriorities(
        entityPriorities: Record<keyof typeof minecraftvanilladata.MinecraftEntityTypes | string, number>,
    ): void;
    /**
     * @remarks
     * 设置用于实体瞄准的优先级设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param entityTypeFamilyPriorities
     * 将实体类型族映射到其优先级设置的记录。数字越大优先级越高。
     */
    setEntityTypeFamilyPriorities(entityTypeFamilyPriorities: Record<string, number>): void;
}

/**
 * 对 world.aimAssist 注册表中存在的瞄准辅助预设的句柄。
 */
export class AimAssistPreset {
    private constructor();
    /**
     * @remarks
     * 可选。默认的瞄准辅助类别 ID，用于未提供给 setItemSettings 的物品。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手的瞄准辅助类别 ID。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly handSettings?: string;
    /**
     * @remarks
     * 与此预设关联的唯一 ID。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块标签列表。
     *
     * @returns
     * 方块标签数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getExcludedBlockTagTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块 ID 列表。
     *
     * @returns
     * 方块 ID 数组。
     * @throws 此函数可能抛出错误。
     */
    getExcludedBlockTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体 ID 列表。
     *
     * @returns
     * 实体 ID 数组。
     * @throws 此函数可能抛出错误。
     */
    getExcludedEntityTargets(): string[];
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体类型系列列表。
     *
     * @returns
     * 实体类型系列数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getExcludedEntityTypeFamilyTargets(): string[];
    /**
     * @remarks
     * 获取每个物品的瞄准辅助类别 ID。
     *
     * @returns
     * 将物品 ID 映射到瞄准辅助类别 ID 的映射表。
     * @throws 此函数可能抛出错误。
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * 获取手持时将瞄准液体方块的物品 ID 列表。
     *
     * @returns
     * 物品 ID 数组。
     * @throws 此函数可能抛出错误。
     */
    getLiquidTargetingItems(): string[];
}

/**
 * 与 AimAssistRegistry.addPreset 配合使用，
 * 用于创建 AimAssistPreset 的设置。
 */
export class AimAssistPresetSettings {
    /**
     * @remarks
     * 可选。默认的瞄准辅助类别 ID，用于未通过 setItemSettings 指定的物品。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultItemSettings?: string;
    /**
     * @remarks
     * 可选。用于空手时的瞄准辅助类别 ID。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    handSettings?: string;
    /**
     * @remarks
     * 用于注册预设的唯一 ID。必须带有命名空间。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * 构造函数，接受一个唯一 ID 以与所创建的 AimAssistPreset 关联。必须带有命名空间。
     *
     * @param identifier
     * 要与所创建的 AimAssistPreset 关联的唯一 ID。必须带有命名空间。
     */
    constructor(identifier: string);
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块标签列表。
     *
     * @returns
     * 方块标签数组。
     */
    getExcludedBlockTagTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的方块 ID 列表。
     *
     * @returns
     * 方块 ID 数组。
     */
    getExcludedBlockTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体 ID 列表。
     *
     * @returns
     * 实体 ID 数组。
     */
    getExcludedEntityTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取要从瞄准辅助目标中排除的实体类型族列表。
     *
     * @returns
     * 实体类型族数组。
     */
    getExcludedEntityTypeFamilyTargets(): string[] | undefined;
    /**
     * @remarks
     * 获取每个物品的瞄准辅助类别 ID。
     *
     * @returns
     * 将物品 ID 映射到瞄准辅助类别 ID 的记录。
     */
    getItemSettings(): Record<string, string>;
    /**
     * @remarks
     * 获取手持时会使用瞄准辅助瞄准液体方块的物品 ID 列表。
     *
     * @returns
     * 物品 ID 数组。
     */
    getLiquidTargetingItems(): string[] | undefined;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的方块标签列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 方块标签数组。
     */
    setExcludedBlockTagTargets(targets?: string[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的方块 ID 列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 方块 ID 数组。
     */
    setExcludedBlockTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftBlockTypes | string)[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的实体 ID 列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 实体 ID 数组。
     */
    setExcludedEntityTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftEntityTypes | string)[]): void;
    /**
     * @remarks
     * 设置要从瞄准辅助目标中排除的实体类型族列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targets
     * 实体类型族数组。
     */
    setExcludedEntityTypeFamilyTargets(targets?: string[]): void;
    /**
     * @remarks
     * 设置每个物品的瞄准辅助类别 ID。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param itemSettings
     * 将物品 ID 映射到瞄准辅助类别 ID 的记录。类别 ID 必须带有命名空间。
     */
    setItemSettings(itemSettings: Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>): void;
    /**
     * @remarks
     * 设置手持时会使用瞄准辅助瞄准液体方块的物品 ID 列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param items
     * 物品 ID 数组。
     */
    setLiquidTargetingItems(items?: (keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]): void;
}

/**
 * 一个容器，用于管理与世界的瞄准辅助设置
 * 相关的 API。
 */
export class AimAssistRegistry {
    private constructor();
    /**
     * @remarks
     * 默认的瞄准辅助类别 Id，在未另行指定时
     * 使用。
     *
     */
    static readonly DefaultCategoryId = 'minecraft:default';
    /**
     * @remarks
     * 默认的瞄准辅助预设 Id，在未另行指定时
     * 使用。
     *
     */
    static readonly DefaultPresetId = 'minecraft:aim_assist_default';
    /**
     * @remarks
     * 向注册表添加一个瞄准辅助类别。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param category
     * 用于创建新类别的类别设置。
     * @returns
     * 已创建的类别句柄。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addCategory(category: AimAssistCategorySettings): AimAssistCategory;
    /**
     * @remarks
     * 向注册表添加一个瞄准辅助预设。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param preset
     * 用于创建新预设的预设设置。
     * @returns
     * 已创建的预设句柄。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
    /**
     * @remarks
     * 获取注册表中的所有可用类别。
     *
     * @returns
     * 包含所有可用类别对象的数组。
     */
    getCategories(): AimAssistCategory[];
    /**
     * @remarks
     * 获取与所提供的 Id 关联的类别。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param categoryId
     * 要检索的类别的 Id。必须包含命名空间。
     * @returns
     * 如果存在则返回类别对象，否则返回
     * undefined。
     */
    getCategory(categoryId: string): AimAssistCategory | undefined;
    /**
     * @remarks
     * 获取与所提供的 Id 关联的预设。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param presetId
     * 要检索的预设的 Id。必须包含命名空间。
     * @returns
     * 如果存在则返回预设对象，否则返回 undefined。
     */
    getPreset(presetId: string): AimAssistPreset | undefined;
    /**
     * @remarks
     * 获取注册表中的所有可用预设。
     *
     * @returns
     * 包含所有可用预设对象的数组。
     */
    getPresets(): AimAssistPreset[];
}

/**
 * @beta
 * 描述一个单独的旗帜图案，包含颜色和图案类型。
 */
export class BannerPattern {
    private constructor();
    /**
     * @remarks
     * 应用于此旗帜图案的颜色。
     *
     */
    readonly color: string;
    /**
     * @remarks
     * 应用于旗帜的图案类型（例如渐变、V形、十字等）。
     *
     */
    readonly pattern: string;
}

/**
 * 描述一种生物群系类型。
 */
export class BiomeType {
    private constructor();
    /**
     * @remarks
     * 生物群系类型的标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 返回该生物群系的标签列表。
     *
     * @returns 该生物群系的标签列表。
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查该生物群系是否拥有所有指定的标签。
     *
     * @param tags
     * 用于检查该生物群系的标签列表。
     * @returns 如果该生物群系拥有所有指定的标签，则返回 true；否则返回 false。
     */
    hasTags(tags: string[]): boolean;
}

/**
 * 支持 Minecraft 中已注册的可用生物群系类型目录。
 */
export class BiomeTypes {
    private constructor();
    /**
     * @remarks
     * 返回特定的生物群系类型。
     *
     * @param typeName
     * 生物群系的标识符。通常应使用命名空间标识符（如 minecraft:frozen_peaks）。
     * @returns
     * 如果该生物群系存在，则返回 BiomeType 对象；否则返回 undefined。
     */
    static get(typeName: string): BiomeType | undefined;
    /**
     * @remarks
     * 返回 Minecraft 中所有已注册的生物群系类型。
     *
     * @returns
     * 所有已注册的生物群系类型数组。
     */
    static getAll(): BiomeType[];
}

/**
 * 表示维度中的一个方块。方块代表维度中唯一的 X、Y 和 Z 坐标，
 * 并可获取/设置该位置的方块状态。此类型在 1.17.10.21 版本中
 * 进行了重大更新。
 */
export class Block {
    private constructor();

    /**
     * @remarks
     * 返回该方块所处的维度。
     *
     */
    readonly dimension: Dimension;

    /**
     * @remarks
     * 如果此方块是空气方块（即空区域），则返回 true。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isAir: boolean;

    /**
     * @remarks
     * 如果此方块是液体方块，则返回 true —— 例如，水和熔岩是液体，
     * 而空气和石头不是。含水方块（water logged blocks）不算液体方块。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isLiquid: boolean;

    /**
     * @beta
     * @remarks
     * 如果此方块是实心的且不可通过，则返回 true —— 例如，圆石和钻石块是实心的，
     * 而梯子和栅栏不是。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isSolid: boolean;

    /**
     * @remarks
     * 如果此方块引用仍然有效，则返回 true
     * （例如，如果方块被卸载，则对该方块的引用将不再有效）。
     *
     */
    readonly isValid: boolean;

    /**
     * @remarks
     * 返回此方块是否被水浸没（waterlogged）。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isWaterlogged: boolean;

    /**
     * @remarks
     * 此方块名称在 .lang 文件中使用的本地化键。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly localizationKey: string;

    /**
     * @remarks
     * 指定方块的坐标。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly location: Vector3;

    /**
     * @remarks
     * 描述方块的其他配置数据。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly permutation: BlockPermutation;

    /**
     * @remarks
     * 获取方块的类型。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly 'type': BlockType;

    /**
     * @remarks
     * 此方块的方块类型标识符。警告：原版方块名称可能会在未来的版本中更改，
     * 建议使用 'Block.matches' 进行方块比较。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly typeId: string;

    /**
     * @remarks
     * 方块的 X 坐标。
     *
     */
    readonly x: number;

    /**
     * @remarks
     * 方块的 Y 坐标。
     *
     */
    readonly y: number;

    /**
     * @remarks
     * 方块的 Z 坐标。
     *
     */
    readonly z: number;

    /**
     * @remarks
     * 返回此方块上方的 {@link Block}（Y 轴正方向）。
     *
     * @param steps
     * 在返回前向上移动的步数。
     * 默认值：1
     * @returns
     * 返回上方对应步数处的方块；若不存在则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    above(steps?: number): Block | undefined;

    /**
     * @remarks
     * 返回此方块下方的 {@link Block}（Y 轴负方向）。
     *
     * @param steps
     * 在返回前向下移动的步数。
     * 默认值：1
     * @returns
     * 返回下方对应步数处的方块；若不存在则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    below(steps?: number): Block | undefined;

    /**
     * @remarks
     * 返回此方块在 X 轴和 Z 轴上的中心点的 {@link Vector3}。
     *
     * @returns
     * 返回底部中心的坐标（X、Z 方向居中，Y 为该方块底部的 Y 坐标）。
     */
    bottomCenter(): Vector3;

    /**
     * @remarks
     * 返回此方块在接触液体时是否会被移除。
     *
     * @param liquidType
     * 调用此函数时应指定的液体类型。
     * @returns
     * 此方块接触液体时是否会被移除。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;

    /**
     * @remarks
     * 返回此方块是否可以在其上放置液体，即是否可以含水（waterlogged）。
     *
     * @param liquidType
     * 调用此函数时应指定的液体类型。
     * @returns
     * 此方块是否可以在其上放置液体。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canContainLiquid(liquidType: LiquidType): boolean;

    /**
     * @beta
     * @remarks
     * 检查将此方块类型或方块排列放置在此方块的指定面上是否有效。
     *
     * @param blockToPlace
     * 要检查放置位置的方块类型或方块排列。
     * @param faceToPlaceOn
     * 可选，指定此方块的某个面来检查是否可放置。
     * @returns
     * 如果方块类型或排列可以放置在此方块上，则返回 `true`，否则返回 `false`。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean;

    /**
     * @remarks
     * 返回此方块在 X、Y 和 Z 轴上的中心点的 {@link Vector3}。
     *
     * @returns
     * 返回方块中心的坐标（各轴均为 0.5 偏移）。
     */
    center(): Vector3;

    /**
     * @remarks
     * 返回此方块东侧的 {@link Block}（X 轴正方向）。
     *
     * @param steps
     * 在返回前向东移动的步数。
     * 默认值：1
     * @returns
     * 返回东侧对应步数处的方块；若不存在则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    east(steps?: number): Block | undefined;

    /**
     * @remarks
     * 获取方块的一个组件（表示额外能力）——例如，箱子方块的物品栏组件。
     *
     * @param componentId
     * 组件的标识符（例如 'minecraft:inventory'）。如果未指定命名空间前缀，
     * 则默认为 'minecraft:'。可用的组件 ID 包括 {@link BlockComponentTypes} 枚举中的
     * 以及通过 {@link BlockComponentRegistry} 注册的自定义组件 ID。
     * @returns
     * 如果组件存在于方块上，则返回该组件，否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponent<T extends string>(componentId: T): BlockComponentReturnType<T> | undefined;

    /**
     * @remarks
     * 返回此方块上存在的所有脚本组件。
     *
     * @returns
     * 返回此方块上的组件数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponents(): BlockComponent[];

    /**
     * @remarks
     * 基于此方块创建一个原型物品实例，可用于 Container/ContainerSlot API。
     *
     * @param amount
     * 要放入物品实例中的此方块的数量。
     * 默认值：1
     * 范围：[1, 255]
     * @param withData
     * 是否包含物品实例的其他数据属性。
     * 默认值：false
     * @returns
     * 一个包含指定数量和数据的物品实例。
     * 如果方块类型不兼容，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;

    /**
     * @remarks
     * 返回照射在某个方块上的总光照亮度级别。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 方块上的亮度级别。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(): number;

    /**
     * @beta
     * @returns
     * 返回此方块的地图颜色。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getMapColor(): RGBA;

    /**
     * @remarks
     * 如果此方块具有 'minecraft:multi_block' 特性，则返回所有已加载方块部件的数组；
     * 如果不具有该特性，则返回 undefined。
     *
     * @returns
     * 返回已加载方块部件的数组；若方块不具有该特性，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getParts(): Block[] | undefined;

    /**
     * @remarks
     * 返回此方块的净红石信号强度。
     *
     * @returns
     * 如果红石信号强度不适用于此方块，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getRedstonePower(): number | undefined;

    /**
     * @remarks
     * 返回从天空照射到某个方块上的光照亮度级别。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 方块上的亮度级别。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(): number;

    /**
     * @remarks
     * 返回方块的一组标签。
     *
     * @returns
     * 方块拥有的标签列表。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];

/**
     * @remarks
     * 如果指定组件存在于此方块上，则返回 true。
     *
     * @param componentId
     * 要检索的组件标识符（例如 'minecraft:inventory'）。如果未指定命名空间前缀，则假定为 'minecraft:'。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    hasComponent(componentId: string): boolean;

    /**
     * @remarks
     * 检查此方块的置换是否具有特定标签。
     *
     * @param tag
     * 要检查的标签。
     * @returns
     * 如果此方块的置换具有该标签，则返回 `true`，否则返回 `false`。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example checkBlockTags.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     *
     * function checkBlockTags(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   // Fetch the block
     *   const block = targetLocation.dimension.getBlock(targetLocation);
     *
     *   // check that the block is loaded
     *   if (block) {
     *     log(`Block is dirt: ${block.hasTag('dirt')}`);
     *     log(`Block is wood: ${block.hasTag('wood')}`);
     *     log(`Block is stone: ${block.hasTag('stone')}`);
     *   }
     * }
     * ```
     */
    hasTag(tag: string): boolean;

    /**
     * @remarks
     * 返回此方块是否阻止液体流动。
     *
     * @param liquidType
     * 应为其调用此函数的液体类型。
     * @returns
     * 此方块是否阻止液体流动。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;

    /**
     * @remarks
     * 返回液体是否可以从指定方向流入方块，或者当使用桶将液体放置其中时，液体是否可以从指定方向流出。
     *
     * @param liquidType
     * 应为其调用此函数的液体类型。
     * @returns
     * 液体是否可以从指定方向流入方块，或者当使用桶将液体放置其中时，液体是否可以从指定方向流出。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    liquidCanFlowFromDirection(liquidType: LiquidType, flowDirection: Direction): boolean;

    /**
     * @remarks
     * 返回此方块是否在接触液体时被移除并生成其物品。
     *
     * @param liquidType
     * 应为其调用此函数的液体类型。
     * @returns
     * 此方块是否在接触液体时被移除并生成其物品。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;

    /**
     * @remarks
     * 测试此方块是否匹配特定条件。
     *
     * @param blockName
     * 用于匹配此API的方块类型标识符。
     * @param states
     * 可选的一组方块状态，用于测试此方块。
     * @returns
     * 如果方块匹配指定条件，则返回 true。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;

    /**
     * @remarks
     * 返回此方块北侧（Z轴负方向）的 {@link Block}。
     *
     * @param steps
     * 返回前向北移动的步数。默认值：1
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    north(steps?: number): Block | undefined;

    /**
     * @remarks
     * 返回相对于此方块的偏移向量处的方块。
     *
     * @param offset
     * 偏移向量。例如，偏移量 0, 1, 0 将返回当前方块上方的方块。
     * @returns
     * 指定偏移处的方块，如果无法检索到该方块（例如，该方块及其相对区块尚未加载），则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    offset(offset: Vector3): Block | undefined;

    /**
     * @remarks
     * 将维度中的方块设置为置换的状态。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param permutation
     * 包含方块一组属性状态的置换。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setPermutation(permutation: BlockPermutation): void;

    /**
     * @remarks
     * 设置方块的类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param blockType
     * 要应用的方块类型标识符 - 例如 minecraft:powered_repeater。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setType(blockType: BlockType | string): void;

    /**
     * @remarks
     * 设置此方块是否具有含水状态 - 例如，楼梯是否浸没在水中。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param isWaterlogged
     * 如果方块内部应有水，则为 true。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setWaterlogged(isWaterlogged: boolean): void;

    /**
     * @remarks
     * 返回此方块南侧（Z轴正方向）的 {@link Block}。
     *
     * @param steps
     * 返回前向南移动的步数。默认值：1
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    south(steps?: number): Block | undefined;

    /**
     * @beta
     * @remarks
     * 通过首先检查放置是否有效，尝试将维度中的方块设置为置换的状态。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param permutation
     * 包含方块一组属性状态的置换。
     * @returns
     * 如果方块置换数据成功设置，则返回 `true`，否则返回 `false`。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    trySetPermutation(permutation: BlockPermutation): boolean;

    /**
     * @remarks
     * 返回此方块西侧（X轴负方向）的 {@link Block}。
     *
     * @param steps
     * 返回前向西移动的步数。默认值：1
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;

}

/**
 * @beta
 * 边界框工具类，提供多个用于创建和操作 {@link BlockBoundingBox} 对象的有用函数。
 */
export class BlockBoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * 创建一个经过验证的 {@link BlockBoundingBox} 实例，其中最小值和最大值分量保证满足 (min <= max)。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param min
     * 一个角落的世界坐标
     * @param max
     * 与之对角的另一个角落的世界坐标
     * @returns
     * 返回一个有效的 {@link BlockBoundingBox} 实例。
     */
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 沿每个轴将 {@link BlockBoundingBox} 扩展给定的大小。
     * 大小为负数时可进行收缩。
     * 注意：如果收缩大小大于跨度，角落可能会反转，但最小值/最大值关系仍然正确。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要扩展的 {@link BlockBoundingBox} 对象
     * @param size
     * 沿各轴的扩展量
     * @returns
     * 返回一个表示更改后的新 {@link BlockBoundingBox} 对象
     */
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    /**
     * @remarks
     * 检查两个 {@link BlockBoundingBox} 对象是否完全相同。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要比较的第一个边界框
     * @param other
     * 要比较的第二个边界框
     * @returns
     * 如果两个边界框完全相同则返回 true，否则返回 false。
     */
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 扩展初始边界框对象的边界以包含第二个边界框参数。
     * 生成的 {@link BlockBoundingBox} 对象将是一个恰好能包含这两个盒子的边界框。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要扩展的边界框
     * @param other
     * 要包含的另一个边界框
     * @returns
     * 返回一个新的 {@link BlockBoundingBox} 实例，表示能同时包含两者的最小边界框。
     */
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    /**
     * @remarks
     * 计算给定 {@link BlockBoundingBox} 对象的中心方块。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要计算中心的边界框
     * @returns
     * 注意：{@link BlockBoundingBox} 对象表示整个方块，因此边界为奇数的盒子的中心在数学上并不居中……
     * 即 BlockBoundingBox( 0,0,0 -> 3,3,3 ) 的中心为 (1,1,1)（而不是预期的 (1.5, 1.5, 1.5)）。
     */
    static getCenter(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 计算表示两个相交 BlockBoundingBox 的交集区域的 BlockBoundingBox。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 第一个边界框
     * @param other
     * 第二个边界框
     * @returns
     * 返回两个边界框的交集区域；如果它们不相交，则返回 undefined。
     */
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    /**
     * @remarks
     * 获取 BlockBoundingBox 各轴分量的跨度。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要获取跨度的边界框
     * @returns
     * 返回一个包含各轴跨度的 Vector3 对象。
     */
    static getSpan(box: BlockBoundingBox): Vector3;
    /**
     * @remarks
     * 检查两个 BlockBoundingBox 对象是否相交。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 第一个边界框
     * @param other
     * 第二个边界框
     * @returns
     * 如果相交返回 true，否则返回 false。
     */
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 检查给定坐标是否位于 BlockBoundingBox 内部。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要检查的边界框
     * @param pos
     * 要检查的坐标
     * @returns
     * 如果坐标在边界框内返回 true，否则返回 false。
     */
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * 检查 BlockBoundingBox 是否有效（即 min <= max）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要检查的边界框
     * @returns
     * 如果边界框有效返回 true，否则返回 false。
     */
    static isValid(box: BlockBoundingBox): boolean;
    /**
     * @remarks
     * 按给定数量移动一个 BlockBoundingBox。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param box
     * 要移动的边界框
     * @param delta
     * 移动向量
     * @returns
     * 返回一个新的 BlockBoundingBox 对象，表示移动后的结果。
     */
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}

/**
 * 与方块关联的组件的基础类型。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 此组件所属的方块实例。
     *
     */
    readonly block: Block;
}

/**
 * 包含有关特定方块被破坏的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 导致破坏的方块。
     *
     */
    readonly blockDestructionSource?: Block;
    /**
     * @remarks
     * 返回此方块在被破坏之前的方块置换信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 造成破坏的实体。
     *
     */
    readonly entitySource?: Entity;
}

/**
 * 包含有关特定方块排列的信息，
 * 该排列是从先前排列更改而来的。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentBlockStateChangeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 之前的 BlockPermutation。
     *
     */
    readonly previousPermutation: BlockPermutation;
}

/**
 * 包含由实体发送给世界中此方块的事件相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回接收该事件的方块的置换信息。
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 发送该事件的实体。
     *
     */
    readonly entitySource: Entity;
    /**
     * @remarks
     * 实体触发的事件的名称。
     *
     */
    readonly name: string;
}

/**
 * 包含有关实体坠落到特定方块上的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 落到该方块上的实体。
     *
     */
    readonly entity?: Entity;
    /**
     * @remarks
     * 实体落到该方块时下落的距离。
     *
     */
    readonly fallDistance: number;
}

/**
 * 包含有关被放置的特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 此位置之前被替换的方块。
     *
     */
    readonly previousBlock: BlockPermutation;
}

/**
 * 包含有关正在被玩家破坏的
 * 特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerBreakEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回此方块在被破坏前的
     * 置换信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 破坏此方块的玩家。
     *
     */
    readonly player?: Player;
}

/**
 * 包含有关一个特定方块
 * 被交互时的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被交互的方块面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 相对于玩家交互的方块的底部
     * 西北角的位置。
     *
     */
    readonly faceLocation?: Vector3;
    /**
     * @remarks
     * 与该方块交互的玩家。
     *
     */
    readonly player?: Player;
}

/**
 * 包含关于玩家放置方块前发生的事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 若设置为 true，则取消方块放置事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 被放置到的方块面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 若事件未被取消，则将放置的方块置换。若设置为不同的方块置换，则改为放置该置换。
     *
     */
    permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * 正在放置此方块的玩家。
     *
     */
    readonly player?: Player;
}

/**
 * 包含关于特定方块随机
 * 刻的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRandomTickEvent extends BlockEvent {
    private constructor();
}

/**
 * 包含有关特定方块红石
 * 更新事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRedstoneUpdateEvent extends BlockEvent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 红石组件的第一次更新事件。
     *
     */
    readonly firstUpdate: boolean;
    /**
     * @remarks
     * 通过此方块的红石信号强度。它
     *  保证大于等于该方块的
     * 'minecraft:redstone_consumer'组件的`min_power`。
     *
     */
    readonly powerLevel: number;
    /**
     * @remarks
     * 来自上一刻通过此方块的红石信号强度。它
     *  保证大于等于该方块的
     * 'minecraft:redstone_consumer'组件的
     * `min_power`。
     *
     */
    readonly previousPowerLevel: number;
}

export class BlockComponentRegistry {
    private constructor();
    /**
     * @remarks
     * 此函数可在早期执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link BlockCustomComponentAlreadyRegisteredError}
     *
     * {@link BlockCustomComponentReloadNewComponentError}
     *
     * {@link BlockCustomComponentReloadNewEventError}
     *
     * {@link BlockCustomComponentReloadVersionError}
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}

/**
 * 包含关于实体离开特定方块的
 * 信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 离开该方块的实体。
     *
     */
    readonly entity?: Entity;
}

/**
 * 包含关于实体踩上特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 踩上方块的实体。
     *
     */
    readonly entity?: Entity;
}

/**
 * 包含关于特定方块刻的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentTickEvent extends BlockEvent {
    private constructor();
}

/**
 * 包含关于某个容器方块被关闭时的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerClosedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 正在关闭的方块容器的来源。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    closeSource: ContainerAccessSource;
}

/**
 * 管理与方块容器关闭时
 * 相关的回调。
 */
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在方块容器关闭时
     * 会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当方块容器关闭时，会被调用的回调函数。
     * @param options - 可选，用于配置事件访问的选项。
     * @returns - 返回一个回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 从方块容器关闭时被调用的回调中
     * 移除一个回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 需要移除的回调函数。
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}

/**
 * 包含有关特定容器方块
 * 被打开时的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerOpenedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被打开的方块容器的来源。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    openSource: ContainerAccessSource;
}

/**
 * 管理当方块容器打开时调用的回调。
 */
export class BlockContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当方块容器打开时会被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     * @param callback - 要添加的回调函数。
     * @param options - 方块容器访问事件选项。
     * @returns 返回一个函数，用于移除该回调。
     *
     */
    subscribe(
        callback: (arg0: BlockContainerOpenedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在方块容器打开时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     * @param callback - 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: BlockContainerOpenedAfterEvent) => void): void;
}

/** 方块上自定义组件的一个实例。 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentInstance extends BlockComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}

/**
 * @beta
 * 表示世界中方块的动态属性。
 * 仅可通过方块实体使用。每个内容包在每个方块实体的动态属性存储中最多使用1KB。
 * @example rememberPlayerInteraction.ts
 * ```typescript
 * import { system } from '@minecraft/server-v2';
 *
 * system.beforeEvents.startup.subscribe(initEvent => {
 *   initEvent.blockComponentRegistry.registerCustomComponent('scripting_demo_pack:block_entity_onPlayerInteract', {
 *     onPlayerInteract: e => {
 *       if (e.player === undefined) {
 *         return;
 *       }
 *
 *       const dynamicProperties = e.block.getComponent('minecraft:dynamic_properties');
 *       if (!dynamicProperties) {
 *         return;
 *       }
 *
 *       const lastInteractorValue = dynamicProperties.get('last_interactor');
 *       const lastVisitor = typeof lastInteractorValue === 'string' ? lastInteractorValue : 'unknown';
 *       const lastTick = Number(dynamicProperties.get('last_interact_tick') ?? system.currentTick);
 *       const ticksAgo = Math.max(0, system.currentTick - lastTick);
 *
 *       if (lastVisitor === e.player.name) {
 *         e.player.sendMessage("do you remember that player? I 'member, it was here " + String(ticksAgo) + ' ticks ago!');
 *       } else {
 *         e.player.sendMessage("oh, I don't remember that player");
 *       }
 *
 *       dynamicProperties.set('last_interactor', e.player.name);
 *       dynamicProperties.set('last_interact_tick', system.currentTick);
 *     },
 *   });
 * });
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockDynamicPropertiesComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:dynamic_properties';
    /**
     * @remarks
     * 使用提供的键返回存储的动态属性。
     * 键对每个内容包是唯一的，不能用于检索其他内容包设置的动态属性。
     * 如果未找到键，则返回 undefined。
     *
     * @param key - 要检索的键。
     * @returns 返回存储的动态属性值，如果未找到则返回 undefined。
     * @throws 此函数可能会抛出错误。
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 使用提供的键和值设置动态属性。
     * 键对每个内容包是唯一的，不能用于为其他内容包设置动态属性。
     * 值可以是布尔值、数字、字符串或 Vector3。
     * 使用 undefined 值设置属性会将其从存储中移除。
     * 存储大小使用计入每个内容包的 1KB 限制。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param key - 要设置的键。
     * @param value - 要设置的值，如果为 undefined 则移除该属性。
     * @throws 此函数可能会抛出错误。
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 返回此方块实体的动态属性存储的当前大小（字节）。
     * 字节计数仅计算你的内容包设置的属性。
     * 1KB 限制是每个内容包的。
     *
     * @returns 返回当前动态属性存储的大小（字节）。
     * @throws 此函数可能会抛出错误。
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    totalByteCount(): number;
}

/**
 * 包含关于影响一个特定方块的事件的
 * 信息。
 */
export class BlockEvent {
    private constructor();
    /**
     * @remarks
     * 此事件位置所在世界中的当前方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 包含此事件所涉及方块的维度。
     *
     */
    readonly dimension: Dimension;
}

/**
 * 包含关于特定方块发生的爆炸
 * 的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 已爆炸方块的描述。
     *
     */
    readonly explodedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 爆炸的可选来源。
     *
     */
    readonly source?: Entity;
}

/**
 * 管理当爆炸发生时（影响各个方块时）所关联的回调。
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当爆炸发生时（影响各个方块时）会调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 用于接收爆炸事件的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当爆炸发生时（影响各个方块时）不再调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}

/**
 * 表示世界中方块的流体容器。用于像炼药锅这样的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 流体容器的相对填充等级。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    fillLevel: number;
    /**
     * @remarks
     * 容器中流体的自定义颜色。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    fluidColor: RGBA;
    static readonly componentId = 'minecraft:fluid_container';
    /**
     * @remarks
     * 向流体添加染料。染料颜色将与任何现有自定义颜色组合。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param dye - 要添加的染料物品类型。
     * @throws 如果染料类型无效或无法添加时抛出错误。
     */
    addDye(dye: ItemType): void;
    /**
     * @remarks
     * 获取容器中的当前流体类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 当前流体类型。
     * @throws 如果无法获取流体类型时抛出错误。
     */
    getFluidType(): FluidType;
    /**
     * @remarks
     * 设置容器中的当前流体类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fluidType - 要设置的流体类型。
     * @throws 如果流体类型无效或无法设置时抛出错误。
     */
    setFluidType(fluidType: FluidType): void;
    /**
     * @remarks
     * 在容器中设置药水物品。将容器的流体类型更改为药水。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param itemStack - 要设置的药水物品实例。
     * @throws 如果物品无效或无法设置时抛出错误。
     */
    setPotion(itemStack: ItemStack): void;
}

/**
 * @beta
 * 表示方块的上表面和下表面可以分配的乐器。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInstrumentComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:instrument_sound';
    /**
     * @remarks
     * 一个 getter 方法，用于获取指定有效面方向对应的乐器名称。
     *
     * @param face
     * 要获取乐器名称的面方向。
     * @returns
     * 返回给定有效面方向对应的乐器名称。
     * @throws 当 face 无效时抛出 {@link minecraftcommon.InvalidArgumentError}。
     * 当组件位置位于未加载区块中时抛出 {@link LocationInUnloadedChunkError}。
     * 当组件位置超出世界边界时抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    getInstrumentName(face: Direction): string;
    /**
     * @remarks
     * 在组件的方块位置使用可选的 WorldSoundOptions 播放指定有效面方向的乐器声音。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param face
     * 要播放乐器声音的面方向。
     * @param soundOptions
     * 播放乐器声音时要使用的可选 WorldSoundOptions；如果省略，则使用默认值。
     * @throws 当 face 无效时抛出 {@link minecraftcommon.InvalidArgumentError}。
     * 当组件位置位于未加载区块中时抛出 {@link LocationInUnloadedChunkError}。
     * 当组件位置超出世界边界时抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    playInstrumentSound(face: Direction, soundOptions?: WorldSoundOptions): void;
}

/**
 * 表示世界中方块的库存。用于箱子等方块。
 * @example placeItemsInChest.ts
 * ```typescript
 * import { ItemStack, BlockInventoryComponent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes, MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function placeItemsInChest(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // Fetch block
 *   const block = targetLocation.dimension.getBlock(targetLocation);
 *
 *   if (!block) {
 *     log('Could not find block. Maybe it is not loaded?', -1);
 *     return;
 *   }
 *
 *   // Make it a chest
 *   block.setType(MinecraftBlockTypes.Chest);
 *
 *   // Get the inventory
 *   const inventoryComponent = block.getComponent('inventory') as BlockInventoryComponent;
 *
 *   if (!inventoryComponent || !inventoryComponent.container) {
 *     log('Could not find inventory component.', -1);
 *     return;
 *   }
 *
 *   const inventoryContainer = inventoryComponent.container;
 *
 *   // Set slot 0 to a stack of 10 apples
 *   inventoryContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 包含 {@link ItemStack} 的容器。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly container?: Container;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * BlockLocationIterator 返回其迭代的方块体积的下一个方块位置。
 * BlockLocationIterator 用于抽象其来源的方块体积的形状（因此它可以表示组成矩形、立方体、球体、线条和复杂形状的所有方块位置）。
 * 每次迭代传递返回父形状中的下一个有效方块位置。
 * 除非父形状另有指定，否则 BlockLocationIterator 将按 X 增加、Z 增加、Y 增加的顺序遍历 3D 空间。
 * （实际上是在 XZ 平面上逐步移动，当该平面中的所有位置都耗尽时，将 Y 坐标增加到下一个 XZ 切片。）
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @beta
     * @remarks
     * 检查底层方块体积是否已失效。
     * 如果在创建迭代器与迭代之间修改了方块体积，则返回 false，否则返回 true。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    isValid(): boolean;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     */
    next(): IteratorResult<Vector3>;
}

/**
 * 表示方块在地图上显示时的颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMapColorComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 该方块定义的基础地图颜色。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly color: RGBA;
    /**
     * @remarks
     * 返回基础颜色与指定位置处计算出的着色值相乘后的颜色。
     *
     */
    readonly tintedColor: RGBA;
    /**
     * @remarks
     * 应用于颜色的着色类型。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly tintMethod: TintMethod;
    static readonly componentId = 'minecraft:map_color';
}

/**
 * 表示一个可移动的方块（如活塞）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMovableComponent extends BlockComponent {
    private constructor();
    /**
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly movementType: MovementType;
    /**
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly stickyType: StickyType;
    static readonly componentId = 'minecraft:movable';
}

/**
 * 包含类型 {@link BlockType} 与属性（有时也称为方块状态）的组合，用于描述一个方块（但不属于特定的 {@link Block}）。
 * @example addTranslatedSign.ts
 * ```typescript
 * import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   const dim = players[0].dimension;
 *
 *   const signBlock = dim.getBlock(targetLocation);
 *
 *   if (!signBlock) {
 *     log('Could not find a block at specified location.');
 *     return -1;
 *   }
 *   const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
 *
 *   signBlock.setPermutation(signPerm);
 *
 *   const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
 *
 *   signComponent?.setText({ translate: 'item.skull.player.name', with: [players[0].name] });
 * }
 * ```
 */
export class BlockPermutation {
    private constructor();
    /**
     * @remarks
     * 此 BlockPermutation 名称在 .lang 文件中使用的本地化键。
     *
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * 此排列所对应的 {@link BlockType}。
     *
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * 返回此方块在接触液体时是否会被移除。
     *
     * @param liquidType
     * 调用此函数时所用的液体类型。
     * @returns
     * 此方块在接触液体时是否会被移除。
     * @throws
     * 当 liquidType 参数无效时可能抛出错误。
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块是否可以在其上放置液体，即是否可以被水logged（含水）。
     *
     * @param liquidType
     * 调用此函数时所用的液体类型。
     * @returns
     * 此方块是否可以在其上放置液体。
     * @throws
     * 当 liquidType 参数无效时可能抛出错误。
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回与此方块关联的所有可用方块状态。
     *
     * @returns
     * 返回此排列所拥有的所有方块状态的列表。
     */
    getAllStates(): Record<string, boolean | number | string>;
    /**
     * @remarks
     * 基于此方块排列获取一个原型物品实例（item stack），可用于物品容器/容器槽 API。
     *
     * @param amount
     * 要放入原型物品实例中的此方块实例数量。
     * 默认值：1
     * 范围：[1, 255]
     * @returns
     * 如果成功，返回对应的原型物品实例；否则返回 `undefined`。
     */
    getItemStack(amount?: number): ItemStack | undefined;
    /**
     * @remarks
     * 获取此排列的一个状态。
     *
     * @param stateName
     * 要返回其值的方块状态的名称。
     * @returns
     * 如果此排列具有该状态，则返回该状态；否则返回 `undefined`。
     */
    getState<T extends keyof minecraftvanilladata.BlockStateSuperset>(
        stateName: T,
    ): minecraftvanilladata.BlockStateSuperset[T] | undefined;
    /**
     * @remarks
     * 返回此排列的所有标签。
     *
     * @returns
     * 此排列拥有的所有标签的数组。
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查此排列是否具有指定标签。
     *
     * @param tag
     * 要检查的标签字符串。
     * @returns
     * 如果此排列具有该标签，则返回 `true`，否则返回 `false`。
     * @example checkBlockTags.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     *
     * function checkBlockTags(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   // Fetch the block
     *   const block = targetLocation.dimension.getBlock(targetLocation);
     *
     *   // check that the block is loaded
     *   if (block) {
     *     log(`Block is dirt: ${block.hasTag('dirt')}`);
     *     log(`Block is wood: ${block.hasTag('wood')}`);
     *     log(`Block is stone: ${block.hasTag('stone')}`);
     *   }
     * }
     * ```
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回此方块是否会阻止液体流动。
     *
     * @param liquidType
     * 调用此函数时所用的液体类型。
     * @returns
     * 此方块是否会阻止液体流动。
     * @throws
     * 当 liquidType 参数无效时可能抛出错误。
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回此方块在接触液体时是否会被移除并生成其物品。
     *
     * @param liquidType
     * 调用此函数时所用的液体类型。
     * @returns
     * 此方块在接触液体时是否会被移除并生成其物品。
     * @throws
     * 当 liquidType 参数无效时可能抛出错误。
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * 返回指定排列是否与此排列匹配。如果未指定 states，则更宽泛地根据类型集合进行匹配。
     *
     * @param blockName
     * 要比较的方块类型标识符。
     * @param states
     * 可选的要比较的状态集合。
     * @returns
     * 如果指定排列与此排列匹配，则返回 `true`，否则返回 `false`。
     */
    matches<T extends string = minecraftvanilladata.MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): boolean;
    /**
     * @remarks
     * 返回设置了特定属性后的派生 BlockPermutation。
     *
     * @param name
     * 方块属性的标识符。
     * @param value
     * 方块属性的值。
     * @returns
     * 设置了指定属性值后的 BlockPermutation。
     * @throws
     * 当属性名称或值无效时可能抛出错误。
     */
    withState<T extends keyof minecraftvanilladata.BlockStateSuperset>(
        name: T,
        value: minecraftvanilladata.BlockStateSuperset[T],
    ): BlockPermutation;
    /**
     * @remarks
     * 给定一个类型标识符和一组可选的属性，返回可用于其他方块 API（如 block.setPermutation）的 BlockPermutation 对象。
     *
     * @param blockName
     * 要检查的方块标识符。
     * @param states
     * 可选的要设置的方块状态集合。
     * @returns
     * 一个与给定类型和状态对应的 BlockPermutation 对象。
     * @throws
     * 当 blockName 或 states 无效时可能抛出错误。
     * @example addBlockColorCube.ts
     * ```typescript
     * import { BlockPermutation, DimensionLocation } from '@minecraft/server';
     * import { Vector3Utils } from '@minecraft/math';
     * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
     *
     * function addBlockColorCube(targetLocation: DimensionLocation) {
     *   const allWoolBlocks: string[] = [
     *     MinecraftBlockTypes.WhiteWool,
     *     MinecraftBlockTypes.OrangeWool,
     *     MinecraftBlockTypes.MagentaWool,
     *     MinecraftBlockTypes.LightBlueWool,
     *     MinecraftBlockTypes.YellowWool,
     *     MinecraftBlockTypes.LimeWool,
     *     MinecraftBlockTypes.PinkWool,
     *     MinecraftBlockTypes.GrayWool,
     *     MinecraftBlockTypes.LightGrayWool,
     *     MinecraftBlockTypes.CyanWool,
     *     MinecraftBlockTypes.PurpleWool,
     *     MinecraftBlockTypes.BlueWool,
     *     MinecraftBlockTypes.BrownWool,
     *     MinecraftBlockTypes.GreenWool,
     *     MinecraftBlockTypes.RedWool,
     *     MinecraftBlockTypes.BlackWool,
     *   ];
     *
     *   const cubeDim = 7;
     *
     *   let colorIndex = 0;
     *
     *   for (let x = 0; x <= cubeDim; x++) {
     *     for (let y = 0; y <= cubeDim; y++) {
     *       for (let z = 0; z <= cubeDim; z++) {
     *         colorIndex++;
     *         targetLocation.dimension
     *           .getBlock(Vector3Utils.add(targetLocation, { x, y, z }))
     *           ?.setPermutation(BlockPermutation.resolve(allWoolBlocks[colorIndex % allWoolBlocks.length]));
     *       }
     *     }
     *   }
     * }
     * ```
     */
    static resolve<T extends string = minecraftvanilladata.MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): BlockPermutation;
}

/**
 * 当存在时，此方块具有类似活塞的行为。包含
 * 用于发现方块活塞状态的附加属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 活塞是否正在展开或缩回。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isMoving: boolean;
    /**
     * @remarks
     * 活塞的当前状态。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly state: BlockPistonState;
    static readonly componentId = 'minecraft:piston';
    /**
     * @remarks
     * 获取与此活塞连接的一组方块。
     *
     * @throws 此函数可能抛出错误。
     */
    getAttachedBlocks(): Block[];
    /**
     * @remarks
     * 获取与此活塞连接的一组方块位置。
     *
     * @throws 此函数可能抛出错误。
     */
    getAttachedBlocksLocations(): Vector3[];
}

/**
 * 表示方块与降水（如雨或雪）的交互方式。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPrecipitationInteractionsComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:precipitation_interactions';
    /**
     * @remarks
     * 如果降雪会自然在此方块上堆积，则返回 `true`；如果雪不会在此方块上堆积，则返回 `false`。
     *
     * @returns 如果此方块会自然积雪则返回 `true`，否则返回 `false`。
     *
     * @throws 当该方块位置处于未加载区块时抛出 {@link LocationInUnloadedChunkError}；
     * 当该方块位置超出世界边界时抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    accumulatesSnow(): boolean;
    /**
     * @remarks
     * 如果此方块内部可以容纳雪（例如被雪覆盖的花朵），则返回 `true`；如果此方块内部不能容纳雪，则返回 `false`。
     *
     * @returns 如果此方块可以内含积雪则返回 `true`，否则返回 `false`。
     *
     * @throws 当该方块位置处于未加载区块时抛出 {@link LocationInUnloadedChunkError}；
     * 当该方块位置超出世界边界时抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    isSnowLoggable(): boolean;
    /**
     * @remarks
     * 如果雨水不会穿过此方块，则返回 `true`；如果雨水会穿过此方块，则返回 `false`。
     *
     * @returns 如果此方块会阻挡雨水则返回 `true`，否则返回 `false`。
     *
     * @throws 当该方块位置处于未加载区块时抛出 {@link LocationInUnloadedChunkError}；
     * 当该方块位置超出世界边界时抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    obstructsRain(): boolean;
}

/**
 * 表示可以播放唱片的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:record_player';
    /**
     * @remarks
     * 弹出此唱片播放方块当前设置的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 当无法弹出唱片时抛出错误。
     */
    ejectRecord(): void;
    /**
     * @remarks
     * 获取此唱片播放方块当前设置的唱片。
     *
     * @returns 当前设置的唱片，若未设置则返回 undefined。
     * @throws 当无法获取唱片时抛出错误。
     */
    getRecord(): ItemStack | undefined;
    /**
     * @remarks
     * 若唱片播放方块当前正在播放唱片，则返回 true。
     *
     * @returns 是否正在播放唱片。
     * @throws 当无法获取播放状态时抛出错误。
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * 暂停此唱片播放方块当前正在播放的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 当无法暂停唱片时抛出错误。
     */
    pauseRecord(): void;
    /**
     * @remarks
     * 播放此唱片播放方块当前设置的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 当无法播放唱片时抛出错误。
     */
    playRecord(): void;
    /**
     * @remarks
     * 根据物品类型设置并播放唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param recordItemType
     * 要设置的唱片物品类型。
     * @param startPlaying
     * 是否立即开始播放。默认为 true。
     * @throws 当唱片设置失败时抛出错误。
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}

/**
 * 表示一个能够输出红石信号的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 获取此方块向电路系统输出的功率。
     * 如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则返回错误。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    readonly power: number;
    static readonly componentId = 'minecraft:redstone_producer';
    /**
     * @remarks
     * 获取此方块能够连接电路并输出功率的面。如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则返回错误。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    getConnectedFaces(): Direction[];
    /**
     * @remarks
     * 获取强功率输出到相邻方块的面。如果'minecraft:redstone_producer'方块组件未定义'strongly_powered_face'，则此方法返回'undefined'。如果方块不再有效或方块没有'minecraft:redstone_producer'组件，则返回错误。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidBlockComponentError}
     */
    getStronglyPoweredFace(): Direction | undefined;
}

/**
 * 表示一个可以显示文本在其上的方块。
 * @example addSign.ts
 * ```typescript
 * import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function addSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   const dim = players[0].dimension;
 *
 *   const signBlock = dim.getBlock(targetLocation);
 *
 *   if (!signBlock) {
 *     log('Could not find a block at specified location.');
 *     return -1;
 *   }
 *   const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
 *
 *   signBlock.setPermutation(signPerm);
 *
 *   const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
 *
 *   signComponent?.setText(`Basic sign!\nThis is green on the front.`);
 * }
 * ```
 * @example addTwoSidedSign.ts
 * ```typescript
 * import {
 *   BlockPermutation,
 *   BlockSignComponent,
 *   SignSide,
 *   DyeColor,
 *   BlockComponentTypes,
 *   DimensionLocation,
 * } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function addTwoSidedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const signBlock = targetLocation.dimension.getBlock(targetLocation);
 *
 *   if (!signBlock) {
 *     log('Could not find a block at specified location.');
 *     return -1;
 *   }
 *   const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
 *
 *   signBlock.setPermutation(signPerm);
 *
 *   const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
 *
 *   if (signComponent) {
 *     signComponent.setText(`Party Sign!\nThis is green on the front.`);
 *     signComponent.setText(`Party Sign!\nThis is red on the back.`, SignSide.Back);
 *     signComponent.setTextDyeColor(DyeColor.Green);
 *     signComponent.setTextDyeColor(DyeColor.Red, SignSide.Back);
 *
 *     // players cannot edit sign!
 *     signComponent.setWaxed(true);
 *   } else {
 *     log('Could not find sign component.');
 *   }
 * }
 * ```
 * @example updateSignText.ts
 * ```typescript
 * import { BlockSignComponent, BlockComponentTypes, DimensionLocation, RawMessage, RawText } from '@minecraft/server';
 *
 * function updateSignText(targetLocation: DimensionLocation) {
 *   const block = targetLocation.dimension.getBlock(targetLocation);
 *   if (!block) {
 *     console.warn('Could not find a block at specified location.');
 *     return;
 *   }
 *
 *   const sign = block.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
 *   if (sign) {
 *     // RawMessage
 *     const helloWorldMessage: RawMessage = { text: 'Hello World' };
 *     sign.setText(helloWorldMessage);
 *
 *     // RawText
 *     const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
 *     sign.setText(helloWorldText);
 *
 *     // Regular string
 *     sign.setText('Hello World');
 *   } else {
 *     console.warn('Could not find a sign component on the block.');
 *   }
 * }
 * ```
 * @example addTranslatedSign.ts
 * ```typescript
 * import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   const dim = players[0].dimension;
 *
 *   const signBlock = dim.getBlock(targetLocation);
 *
 *   if (!signBlock) {
 *     log('Could not find a block at specified location.');
 *     return -1;
 *   }
 *   const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
 *
 *   signBlock.setPermutation(signPerm);
 *
 *   const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
 *
 *   signComponent?.setText({ translate: 'item.skull.player.name', with: [players[0].name] });
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 表示玩家是否可以编辑该告示牌。如果告示牌上使用了蜂巢或调用了 `setWaxed` 方法，则会出现此情况。
     *
     * @throws 此属性在使用时可能会抛出错误。
     */
    readonly isWaxed: boolean;
    static readonly componentId = 'minecraft:sign';
    /**
     * @remarks
     * 如果 `setText` 使用 RawMessage 或 RawText 对象调用，则返回告示牌的 RawText，否则返回 undefined。
     *
     * @param side
     * 要读取消息的告示牌侧面。如果未提供，则返回告示牌正面的消息。
     * 默认值：0
     * @returns 如果通过 RawMessage 或 RawText 设置文本，则返回 RawText 对象；否则返回 undefined。
     * @throws 此函数可能会抛出错误。
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * @remarks
     * 如果 `setText` 使用字符串调用，则返回告示牌的文本，否则返回 undefined。
     *
     * @param side
     * 要读取消息的告示牌侧面。如果未提供，则返回告示牌正面的消息。
     * 默认值：0
     * @returns 如果通过字符串设置文本，则返回字符串；否则返回 undefined。
     * @throws 此函数可能会抛出错误。
     */
    getText(side?: SignSide): string | undefined;
    /**
     * @remarks
     * 获取文本上的染料颜色，如果告示牌未染色则返回 undefined。
     *
     * @param side
     * 要读取染料的告示牌侧面。如果未提供，则返回告示牌正面的染料颜色。
     * 默认值：0
     * @returns 如果告示牌已染色，则返回 DyeColor 枚举值；否则返回 undefined。
     * @throws 此函数可能会抛出错误。
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @remarks
     * 设置告示牌组件的文本。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param message
     * 要设置在告示牌上的消息。如果设置为字符串，则调用 `getText` 可读取该字符串。如果设置为 RawMessage，则调用 `getRawText` 会返回一个 RawText。
     * @param side
     * 消息将设置在其上的告示牌侧面。如果未提供，消息将设置在告示牌正面。
     * 默认值：0
     * @throws
     * 如果提供的消息长度超过 512 个字符，则会抛出错误。
     */
    setText(message: RawMessage | string, side?: SignSide): void;
    /**
     * @remarks
     * 设置文本的染料颜色。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param color
     * 要应用于告示牌的染料颜色，或 undefined 以清除告示牌的染料。
     * 默认值：null
     * @param side
     * 颜色将设置在其上的告示牌侧面。如果未提供，颜色将设置在告示牌正面。
     * 默认值：0
     * @throws 此函数可能会抛出错误。
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @remarks
     * 使玩家无法编辑此告示牌。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waxed
     * 是否锁定该告示牌，使其无法被玩家编辑。
     * @throws 此函数可能会抛出错误。
     */
    setWaxed(waxed: boolean): void;
}

/**
 * 枚举所有 {@link BlockStateType}。
 */
export class BlockStates {
    private constructor();
    /**
     * @remarks
     * 获取一个特定的方块状态实例。
     *
     * @param stateName - 要获取的方块状态名称。
     *
     * @returns
     * 返回找到的 {@link BlockStateType} 状态实例。如果未找到，则返回 undefined。
     */
    static get(stateName: string): BlockStateType | undefined;
    /**
     * @remarks
     * 获取所有可用方块状态的集合。
     *
     * @returns
     * 返回所有可用方块状态的数组。
     */
    static getAll(): BlockStateType[];
}

/**
 * 表示方块实例的可配置状态值。
 * 例如，楼梯的朝向方向可作为
 * 方块状态访问。
 */
export class BlockStateType {
    private constructor();
    /**
     * @remarks
     * 方块属性的标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 方块属性的一组有效值。
     *
     */
    readonly validValues: (boolean | number | string)[];
}

/**
 * 方块的类型（或模板）。不包含
 * 除其表示的方块类型之外的置换数据（状态）
 * 它表示。此类型在版本
 * 1.17.10.21 中引入。
 */
export class BlockType {
    private constructor();
    /**
     * @remarks
     * 方块类型名称 - 例如 `minecraft:acacia_stairs`。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于此 BlockType 名称本地化的键，在
     * .lang 文件中使用。
     *
     */
    readonly localizationKey: string;
}

/**
 * 包含此世界中可用的 Minecraft 方块类型
 * 的目录。
 */
export class BlockTypes {
    private constructor();
    /**
     * @remarks
     * 返回指定标识符的 BlockType 对象。
     *
     * @param typeName
     * 方块类型的标识符。应遵循 namespace:id
     * 模式，例如 minecraft:dirt。
     * @returns
     * BlockType 对象，如果方块类型在此世界中不可用，
     * 则返回 undefined。
     */
    static get(typeName: string): BlockType | undefined;
    /**
     * @remarks
     * 返回所有可用方块类型的集合。
     *
     * @returns
     * 包含所有可用方块类型的 BlockType 数组。
     */
    static getAll(): BlockType[];
}

/**
 * BlockVolume 是一个简单接口对象，表示世界方块位置处给定大小（以方块为单位）的 3D 矩形。
 * 请注意，这些值并不类似于 “min” 和 “max” 值，因为向量分量不保证按任何顺序排列。
 * 此外，这些向量位置不能与 BlockLocation 互换。
 * 如果你希望将此体积表示为 BlockLocation 的范围，可以使用 getBoundingBox 工具函数。
 * 该体积类会保持角索引的初始顺序。想象一下在编辑器中为每个角分配的位置——当你移动角时
 * （可能会反转边界的最小/最大关系）——你最初选择的左上角通常会变成右下角。
 * 在手动编辑此类体积时，你需要在编辑时保持角的身份——BlockVolume 工具函数会处理这一点。
 *
 * 需要注意，这里衡量的是方块大小（to/from）——普通 AABB (0,0,0) 到 (0,0,0) 传统上大小为 (0,0,0)。
 * 然而，由于我们测量的是方块，BlockVolume 的大小或跨度实际上为 (1,1,1)。
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * 世界方块位置，表示 3D 矩形中的一个角。
     *
     */
    'from': Vector3;
    /**
     * @remarks
     * 世界方块位置，表示 3D 矩形中相对的另一个角。
     *
     */
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    /**
     * @remarks
     * 检查给定位置是否直接与 BlockVolume 的外表面相邻。
     *
     *
     * @param pos
     * 要测试的世界方块位置。
     * @returns
     * 如果位置在内部或距离超过 0 个方块，则返回 false；
     * 如果位置直接接触 BlockVolume 的外表面，则返回 true。
     */
    doesLocationTouchFaces(pos: Vector3): boolean;
    /**
     * @remarks
     * 检查两个 BlockVolume 是否直接相邻且两个面接触。
     *
     * @param other
     * 要测试的体积。
     * @returns
     * 如果两个 BlockVolume 的外表面在任意点接触且直接相邻，则返回 true。
     */
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    /**
     * @remarks
     * 返回一个枚举，表示两个 BlockVolume 对象之间的交集。
     *
     * @returns
     * 两个 BlockVolume 对象的交集类型。
     */
    intersects(other: BlockVolume): BlockVolumeIntersection;
}

/**
 * BlockVolume 的基础类型。
 */
export class BlockVolumeBase {
    private constructor();
    /**
     * @remarks
     * 获取一个 {@link BlockLocationIterator}，它表示指定体积内的所有方块世界位置。
     *
     * @returns 一个 {@link BlockLocationIterator}，用于遍历该体积内的所有方块世界位置。
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @beta
     * @remarks
     * 返回一个 {@link BlockBoundingBox} 对象，表示该体积已验证的最小和最大坐标。
     *
     * @returns 表示该体积已验证最小和最大坐标的 {@link BlockBoundingBox} 对象。
     * @throws 此函数可能抛出错误。
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 返回 BlockVolume 的容量（体积），即 W*D*H。
     *
     * @returns 该 BlockVolume 的容量（体积），等于 W*D*H。
     */
    getCapacity(): number;
    /**
     * @beta
     * @remarks
     * 返回体积内与给定位置最近的方块位置列表，按距离排序（最近的在前）。
     *
     * @param count
     * 要返回的最近位置数量。
     * @param location
     * 用于测量距离的位置。
     * @returns 按距离排序（最近在前）的方块位置列表，共 `count` 个位置。
     * @throws 当 `count` 超出有效范围时抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getClosest(count: number, location: Vector3): Vector3[];
    /**
     * @beta
     * @remarks
     * 返回体积内与给定位置最远的方块位置列表，按距离排序（最远的在前）。
     *
     * @param count
     * 要返回的最远位置数量。
     * @param location
     * 用于测量距离的位置。
     * @returns 按距离排序（最远在前）的方块位置列表，共 `count` 个位置。
     * @throws 当 `count` 超出有效范围时抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getFarthest(count: number, location: Vector3): Vector3[];
    /**
     * @remarks
     * 获取体积的最大角落位置（保证 >= min）。
     *
     * @returns 体积的最大角落位置，其坐标大于或等于最小角落位置。
     * @throws 此函数可能抛出错误。
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取体积的最小角落位置（保证 <= max）。
     *
     * @returns 体积的最小角落位置，其坐标小于或等于最大角落位置。
     * @throws 此函数可能抛出错误。
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取一个 {@link Vector3} 对象，其中每个分量表示该轴方向上的方块数量。
     *
     * @returns 一个 {@link Vector3} 对象，其每个分量表示该轴方向上的方块数量。
     */
    getSpan(): Vector3;
    /**
     * @remarks
     * 检查给定的世界方块位置是否位于 BlockVolume 内。
     *
     * @returns 如果该位置位于 BlockVolume 内，则返回 true；否则返回 false。
     */
    isInside(location: Vector3): boolean;
    /**
     * @remarks
     * 按指定数量移动 BlockVolume。
     *
     * @param delta
     * 移动的方块数量。
     */
    translate(delta: Vector3): void;
}

/**
 * 包含与按钮按下变化相关的信息。
 * @example buttonPushEvent.ts
 * ```typescript
 * import { world, system, BlockPermutation, ButtonPushAfterEvent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function buttonPushEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // set up a button on cobblestone
 *   const cobblestone = targetLocation.dimension.getBlock(targetLocation);
 *   const button = targetLocation.dimension.getBlock({
 *     x: targetLocation.x,
 *     y: targetLocation.y + 1,
 *     z: targetLocation.z,
 *   });
 *
 *   if (cobblestone === undefined || button === undefined) {
 *     log('Could not find block at location.');
 *     return -1;
 *   }
 *
 *   cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
 *   button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState('facing_direction', 1));
 *
 *   world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
 *     const eventLoc = buttonPushEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
 *       log('Button push event at tick ' + system.currentTick);
 *     }
 *   });
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 触发按钮按下的可选来源。
     *
     */
    readonly source: Entity;
}

/**
 * 管理按钮被按下时连接的调用回调。
 * @example buttonPushEvent.ts
 * ```typescript
 * import { world, system, BlockPermutation, ButtonPushAfterEvent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function buttonPushEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // set up a button on cobblestone
 *   const cobblestone = targetLocation.dimension.getBlock(targetLocation);
 *   const button = targetLocation.dimension.getBlock({
 *     x: targetLocation.x,
 *     y: targetLocation.y + 1,
 *     z: targetLocation.z,
 *   });
 *
 *   if (cobblestone === undefined || button === undefined) {
 *     log('Could not find block at location.');
 *     return -1;
 *   }
 *
 *   cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
 *   button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState('facing_direction', 1));
 *
 *   world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
 *     const eventLoc = buttonPushEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
 *       log('Button push event at tick ' + system.currentTick);
 *     }
 *   });
 * }
 * ```
 */
export class ButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在按钮被按下时调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 按钮被按下时要调用的函数。
     * @returns
     * 返回用于取消订阅的回调函数。
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在按钮被按下时调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}

/**
 * 包含与指定玩家活跃相机相关的
 * 方法。
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * 返回相机是否有效可访问和使用。当
     * 相机被视为有效，当拥有玩家
     * 已加载且自身有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @beta
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    addShake(shakeCameraOptions: CameraShakeOptions): void;
    /**
     * @remarks
     * 将相机附加到非玩家实体。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param attachCameraOptions
     * 相机附加到的实体的选项。包含实体标识符和可选的实体位置。
     * @throws 此函数可能抛出错误。
     */
    attachToEntity(attachCameraOptions?: CameraAttachOptions): void;
    /**
     * @remarks
     * 清除指定玩家的活跃相机。导致
     * 指定玩家结束任何进行中的相机
     * 视角，包括任何平滑相机运动，并返回
     * 到正常视角。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    clear(): void;
    /**
     * @remarks
     * 开始相机淡入淡出过渡。淡入淡出过渡是一种
     * 全屏颜色，先淡入，保持，然后淡出。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fadeCameraOptions
     * 关于相机淡入淡出操作的额外选项。
     * @throws 此函数可能抛出错误。
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @param splineType 样条类型。
     * @param cameraAnimationOptions 相机动画选项。
     * @throws 此函数可能抛出错误。
     */
    playAnimation(splineType: CatmullRomSpline | LinearSpline, cameraAnimationOptions: AnimationOptions): void;
    /**
     * @remarks
     * 设置指定玩家的当前活跃相机。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件标识符。
     * @param setOptions
     * 相机的额外选项。
     * @throws 此函数可能抛出错误。
     */
    setCamera(
        cameraPreset: string,
        setOptions?:
            | CameraFixedBoomOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions
            | CameraTargetOptions,
    ): void;
    /**
     * @beta
     * @remarks
     * 设置当前活跃相机并带有平滑过渡。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件标识符。
     * @param easeOptions
     * 将相机从上一个相机平滑过渡到当前相机的选项。
     * @throws
     * 当平滑过渡到 minecraft:first_person 预设时，当前未启用实验性相机切换开关时会抛出错误。
     */
    setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void;
    /**
     * @remarks
     * 设置指定玩家的当前活跃相机，并
     * 将位置和旋转重置为 JSON 中定义的
     * 值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cameraPreset
     * 在 JSON 中定义的相机预设文件标识符。
     * @param easeOptions
     * 将相机平滑过渡回其原始位置和旋转的选项。
     * @throws 此函数可能抛出错误。
     */
    setDefaultCamera(cameraPreset: string, easeOptions?: EaseOptions): void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @param fovCameraOptions 视野选项。
     * @throws 此函数可能抛出错误。
     */
    setFov(fovCameraOptions?: CameraFovOptions): void;
    /**
     * @beta
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    stopShaking(): void;
}

/**
 * @beta
 * 尝试将已破坏方块的方块实体数据复制到掉落物品的战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CarryOverBlockEntityDataFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 如果为 true，且方块实体拥有 dynamic_properties，则函数会将方块实体的动态属性复制到掉落的物品上。
     *
     */
    readonly dynamicProperties: boolean;
}

/**
 * CatmullRom 样条曲线创建。
 */
export class CatmullRomSpline {
    /**
     * @remarks
     * CatmullRom 曲线的控制点。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    controlPoints: Vector3[];
}

/**
 * @beta
 * 当玩家输入聊天消息时触发的事件。
 */
export class ChatSendAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在广播的消息。
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 发送聊天消息的玩家。
     *
     */
    readonly sender: Player;
    /**
     * @remarks
     * 可选的要接收此消息的玩家列表。若已定义，此消息将直接发送给一个或多个玩家（即非广播消息）。
     *
     */
    readonly targets?: Player[];
}

/**
 * @beta
 * 管理与聊天消息发送相关的回调，该回调在聊天消息被
 * 发送时触发。
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当新的聊天消息被发送时，
     * 该回调将被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 当新的聊天消息被发送时调用的回调函数。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在新的聊天消息发送时
     * 不再被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}

/**
 * @beta
 * 当玩家输入聊天消息时触发的事件。
 */
export class ChatSendBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果在beforeChat事件处理程序中设置为true，则此消息不会广播出去。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 正在广播的消息。
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 发送聊天消息的玩家。
     *
     */
    readonly sender: Player;
    /**
     * @remarks
     * 可选的接收此消息的玩家列表。如果定义，此消息将直接针对一个或多个玩家（即不广播）。可以修改此列表以更改消息接收者。
     *
     */
    targets?: Player[];
}

/**
 * @beta
 * 管理连接到聊天消息发送前触发的事件的回调。
 * @example customCommand.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 *
 * function customCommand(targetLocation: DimensionLocation) {
 *   const chatCallback = world.beforeEvents.chatSend.subscribe(eventData => {
 *     if (eventData.message.includes('cancel')) {
 *       // Cancel event if the message contains "cancel"
 *       eventData.cancel = true;
 *     } else {
 *       const args = eventData.message.split(' ');
 *
 *       if (args.length > 0) {
 *         switch (args[0].toLowerCase()) {
 *           case 'echo':
 *             // Send a modified version of chat message
 *             world.sendMessage(`Echo '${eventData.message.substring(4).trim()}'`);
 *             break;
 *           case 'help':
 *             world.sendMessage(`Available commands: echo <message>`);
 *             break;
 *         }
 *       }
 *     }
 *   });
 * }
 * ```
 */
export class ChatSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在新聊天消息发送前调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     * @returns
     * 以受限执行权限被调用的闭包。
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在新聊天消息发送前调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}

/**
 * 包含客户端实例的设备信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ClientSystemInfo extends SystemInfo {
    private constructor();
    /**
     * @remarks
     * 客户端选择的区域设置（例如 en_US、fr_FR、ja_JP）。请注意，在大多数情况下，服务器脚本不应使用此属性手动本地化文本。相反，应使用带有 translate 字段的 {@link RawMessage} 发送本地化键，让每个客户端自动以自己的语言解析它们。直接使用区域设置进行本地化较为脆弱，并且当同一服务器上有不同语言的玩家时，可能会产生意外结果。
     *
     */
    readonly locale: string;
    /**
     * @remarks
     * 设备的最大渲染距离（以区块为单位）。
     *
     */
    readonly maxRenderDistance: number;
    /**
     * @remarks
     * 设备的平台类型。
     *
     */
    readonly platformType: PlatformType;
}

/**
 * 包含命令执行结果返回的数据。
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * 如果命令作用于多个实体、方块或物品，则返回此命令成功应用的数量。
     *
     */
    readonly successCount: number;
}

/**
 * 下游 Component 实现的基类。
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * 返回该组件是否有效。如果其所有者有效，并且满足该组件所需的任何额外验证，
     * 则该组件被视为有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 组件的标识符。
     *
     */
    readonly typeId: string;
}

/**
 * 表示一个可容纳多组物品的容器。用于玩家、箱子矿车、羊驼等实体。
 * @example containers.ts
 * ```typescript
 * import { ItemStack, EntityInventoryComponent, BlockInventoryComponent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes, MinecraftItemTypes, MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function containers(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const xLocation = targetLocation; // left chest location
 *   const xPlusTwoLocation = { x: targetLocation.x + 2, y: targetLocation.y, z: targetLocation.z }; // right chest
 *
 *   const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
 *     x: targetLocation.x + 4,
 *     y: targetLocation.y,
 *     z: targetLocation.z,
 *   });
 *
 *   const xChestBlock = targetLocation.dimension.getBlock(xLocation);
 *   const xPlusTwoChestBlock = targetLocation.dimension.getBlock(xPlusTwoLocation);
 *
 *   if (!xChestBlock || !xPlusTwoChestBlock) {
 *     log('Could not retrieve chest blocks.');
 *     return;
 *   }
 *
 *   xChestBlock.setType(MinecraftBlockTypes.Chest);
 *   xPlusTwoChestBlock.setType(MinecraftBlockTypes.Chest);
 *
 *   const xPlusTwoChestInventoryComp = xPlusTwoChestBlock.getComponent('inventory') as BlockInventoryComponent;
 *   const xChestInventoryComponent = xChestBlock.getComponent('inventory') as BlockInventoryComponent;
 *   const chestCartInventoryComp = chestCart.getComponent('inventory') as EntityInventoryComponent;
 *
 *   const xPlusTwoChestContainer = xPlusTwoChestInventoryComp.container;
 *   const xChestContainer = xChestInventoryComponent.container;
 *   const chestCartContainer = chestCartInventoryComp.container;
 *
 *   if (!xPlusTwoChestContainer || !xChestContainer || !chestCartContainer) {
 *     log('Could not retrieve chest containers.');
 *     return;
 *   }
 *
 *   xPlusTwoChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
 *   if (xPlusTwoChestContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
 *     log('Expected apple in x+2 container slot index 0', -1);
 *   }
 *
 *   xPlusTwoChestContainer.setItem(1, new ItemStack(MinecraftItemTypes.Emerald, 10));
 *   if (xPlusTwoChestContainer.getItem(1)?.typeId !== MinecraftItemTypes.Emerald) {
 *     log('Expected emerald in x+2 container slot index 1', -1);
 *   }
 *
 *   if (xPlusTwoChestContainer.size !== 27) {
 *     log('Unexpected size: ' + xPlusTwoChestContainer.size, -1);
 *   }
 *
 *   if (xPlusTwoChestContainer.emptySlotsCount !== 25) {
 *     log('Unexpected emptySlotsCount: ' + xPlusTwoChestContainer.emptySlotsCount, -1);
 *   }
 *
 *   xChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Cake, 10));
 *
 *   xPlusTwoChestContainer.transferItem(0, chestCartContainer); // transfer the apple from the xPlusTwo chest to a chest cart
 *   xPlusTwoChestContainer.swapItems(1, 0, xChestContainer); // swap the cake from x and the emerald from xPlusTwo
 *
 *   if (chestCartContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
 *     log('Expected apple in minecraft chest container slot index 0', -1);
 *   }
 *
 *   if (xChestContainer.getItem(0)?.typeId === MinecraftItemTypes.Emerald) {
 *     log('Expected emerald in x container slot index 0', -1);
 *   }
 *
 *   if (xPlusTwoChestContainer.getItem(1)?.typeId === MinecraftItemTypes.Cake) {
 *     log('Expected cake in x+2 container slot index 1', -1);
 *   }
 * }
 * ```
 */
export class Container {
    private constructor();

    /**
     * @remarks
     * 若定义了这些规则，则其他容器操作在会导致这些规则失效时抛出异常。
     * 例如，将潜影盒放入原版收纳袋中。
     *
     */
    readonly containerRules?: ContainerRules;

    /**
     * @remarks
     * 容器中空槽位的数量。
     *
     * @throws
     * 若容器无效则抛出异常。
     */
    readonly emptySlotsCount: number;

    /**
     * @remarks
     * 返回容器对象（或该容器关联的实体或方块）在此上下文中是否仍可继续使用。
     *
     */
    readonly isValid: boolean;

    /**
     * @remarks
     * 此容器中的槽位数量。例如，一个标准单方块箱子的尺寸为 27。注意，
     * 玩家的物品栏容器共有 36 个槽位，即 9 个快捷栏槽位加 27 个物品栏槽位。
     *
     * @throws
     * 若容器无效则抛出异常。
     */
    readonly size: number;

    /**
     * @remarks
     * 容器中所有物品的合计重量。
     *
     * @throws 使用此属性时可能抛出异常。
     *
     * {@link InvalidContainerError}
     */
    readonly weight: number;

    /**
     * @remarks
     * 向容器中添加一个物品。该物品会被放置到第一个可用槽位中，并可与此前已存在的同类物品叠加。
     * 注意，若希望将物品放置到特定槽位，请使用 {@link Container.setItem}。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param itemStack
     * 要添加的物品实例。
     * @throws
     * 不会因超出重量上限而抛出 {@link ContainerRules} 错误，
     * 而会改为添加物品直至达到重量上限。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;

    /**
     * @remarks
     * 清空容器中的所有物品。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws
     * 若容器无效则抛出异常。
     */
    clearAll(): void;

    /**
     * @remarks
     * 尝试在容器中查找某个物品。
     *
     * @param itemStack
     * 要查找的物品。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    contains(itemStack: ItemStack): boolean;

    /**
     * @remarks
     * 在容器中查找第一个匹配物品的索引。
     *
     * @param itemStack
     * 要查找的物品。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    find(itemStack: ItemStack): number | undefined;

    /**
     * @remarks
     * 在容器中查找最后一个匹配物品的索引。
     *
     * @param itemStack
     * 要查找的物品。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    findLast(itemStack: ItemStack): number | undefined;

    /**
     * @remarks
     * 在容器中查找第一个空槽位的索引。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    firstEmptySlot(): number | undefined;

    /**
     * @remarks
     * 在容器中查找第一个物品的索引。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    firstItem(): number | undefined;

    /**
     * @remarks
     * 获取指定槽位中物品的 {@link ItemStack}。
     * 若槽位为空，则返回 `undefined`。此方法不会更改或清空指定槽位的内容。
     * 如需获得特定槽位的引用，请参阅 {@link Container.getSlot}。
     *
     * @param slot
     * 要从中获取物品的槽位的零基索引。
     * 最小值：0
     * @throws
     * 若容器无效，或 `slot` 索引超出边界，则抛出异常。
     * @example getFirstHotbarItem.ts
     * ```typescript
     * import { world, EntityInventoryComponent, DimensionLocation } from '@minecraft/server';
     *
     * function getFirstHotbarItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   for (const player of world.getAllPlayers()) {
     *     const inventory = player.getComponent(EntityInventoryComponent.componentId) as EntityInventoryComponent;
     *     if (inventory && inventory.container) {
     *       const firstItem = inventory.container.getItem(0);
     *
     *       if (firstItem) {
     *         log('First item in hotbar is: ' + firstItem.typeId);
     *       }
     *
     *       return inventory.container.getItem(0);
     *     }
     *     return undefined;
     *   }
     * }
     * ```
     */
    getItem(slot: number): ItemStack | undefined;

    /**
     * @remarks
     * 返回一个容器槽位。该槽位可作为此容器中指定索引处槽位的引用。
     *
     * @param slot
     * 要返回的槽位索引。此索引必须位于容器边界内。
     * 最小值：0
     * @throws
     * 若容器无效，或 `slot` 索引超出边界，则抛出异常。
     */
    getSlot(slot: number): ContainerSlot;

    /**
     * @remarks
     * 将一个物品从一个槽位移到另一个槽位，可能跨容器进行。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param fromSlot
     * 要从此容器中移出物品的槽位的零基索引。
     * 最小值：0
     * @param toSlot
     * 要将物品移入 `toContainer` 中目标槽位的零基索引。
     * 最小值：0
     * @param toContainer
     * 目标容器。注意，此容器可以与源容器相同。
     * @throws
     * 若此容器或 `toContainer` 无效，或 `fromSlot`、`toSlot` 索引超出边界，则抛出异常。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     * @example moveBetweenContainers.ts
     * ```typescript
     * import { world, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function moveBetweenContainers(targetLocation: DimensionLocation) {
     *   const players = world.getAllPlayers();
     *
     *   const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y,
     *     z: targetLocation.z,
     *   });
     *
     *   if (players.length > 0) {
     *     const fromPlayer = players[0];
     *
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *     const toInventory = chestCart.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *       fromInventory.container.moveItem(0, 0, toInventory.container);
     *     }
     *   }
     * }
     * ```
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;

    /**
     * @remarks
     * 在特定槽位中设置一个物品实例。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param slot
     * 要设置物品的槽位的零基索引。
     * 最小值：0
     * @param itemStack
     * 要放置到指定槽位中的物品实例。将 `itemStack` 设置为 undefined 会清空该槽位。
     * @throws
     * 若容器无效，或 `slot` 索引超出边界，则抛出异常。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    setItem(slot: number, itemStack?: ItemStack): void;

/**
     * @remarks
     * 交换两个容器内不同槽位之间的物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param slot
     * 从该容器中交换的槽位的从零开始的索引。
     * 最小值：0
     * @param otherSlot
     * 要交换的槽位的从零开始的索引。
     * 最小值：0
     * @param otherContainer
     * 目标容器以进行交换。注意，此容器可以与源容器相同。
     * @throws
     * 如果此容器或 `otherContainer` 无效，或者 `slot` 或 `otherSlot` 超出范围，则抛出异常。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;

    /**
     * @remarks
     * 将一个物品从一个槽位移到另一个容器，或移动到同一容器中的第一个可用槽位。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fromSlot
     * 从该容器中转移物品的槽位的从零开始的索引。
     * 最小值：0
     * @param toContainer
     * 目标容器以进行转移。注意，此容器可以与源容器相同。
     * @returns
     * 一个包含无法转移的物品的 itemStack。如果所有物品都转移成功，则返回 undefined。
     * @throws
     * 如果此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
     * 对于超重限制，不会抛出 {@link ContainerRules} 错误，而是会添加物品直至达到重量限制。
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     * @example transferBetweenContainers.ts
     * ```typescript
     * import { world, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function transferBetweenContainers(targetLocation: DimensionLocation) {
     *   const players = world.getAllPlayers();
     *
     *   const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y,
     *     z: targetLocation.z,
     *   });
     *
     *   if (players.length > 0) {
     *     const fromPlayer = players[0];
     *
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *     const toInventory = chestCart.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *       fromInventory.container.transferItem(0, toInventory.container);
     *     }
     *   }
     * }
     * ```
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;

}

/**
 * 表示更大容器（如实体物品栏）中的一个槽位。
 */
export class ContainerSlot {
    private constructor();
    /**
     * @remarks
     * 物品堆叠中的物品数量。有效值范围为 1-255。
     * 提供的值将被限制到该物品的最大堆叠数量。
     *
     * 此属性无法在受限执行模式下编辑。
     *
     * 边界：[1, 255]
     * @throws
     * 如果值超出 1-255 的范围，则抛出异常。
     */
    amount: number;
    /**
     * @remarks
     * 返回该物品是否可堆叠。如果物品的最大堆叠数量大于 1，
     * 且物品不包含任何自定义数据或属性，则该物品被视为可堆叠。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * 返回 ContainerSlot 是否有效。如果容器存在且已加载，
     * 并且槽位索引有效，则容器槽位有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取或设置物品在死亡时是否保留。
     *
     * 此属性无法在受限执行模式下编辑。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * 获取或设置物品的锁定模式。默认值为 `ItemLockMode.none`。
     *
     * 此属性无法在受限执行模式下编辑。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * 最大堆叠数量。该值根据物品类型不同而变化。例如，
     * 火把的最大堆叠数量为 64，而鸡蛋的最大堆叠数量为 16。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * 该物品堆叠的给定名称。当光标悬停在物品上时会显示名称标签。
     * 将名称标签设置为空字符串或 `undefined` 将移除名称标签。
     *
     * 此属性无法在受限执行模式下编辑。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。如果名称长度超过 255 个字符，也会抛出异常。
     */
    nameTag?: string;
    /**
     * @remarks
     * 物品的类型。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidContainerSlotError}
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * 该物品堆叠的类型标识符。如果未指定命名空间，
     * 则默认为 'minecraft:'。示例包括 'wheat' 或 'apple'。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    readonly typeId: string;
    /**
     * @remarks
     * 清除已在此物品堆叠上设置的所有动态属性。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 返回此容器槽位中的物品是否可以被破坏。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * 返回此容器槽位中的物品是否能被放置。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * 返回属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回该属性的值，如果该属性尚未设置，则返回 undefined。
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 返回此物品堆叠上已使用的可用动态属性标识符集合。
     *
     * @returns
     * 返回在此物品堆叠上设置的动态属性的字符串数组。
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * 返回当前为此物品堆叠存储的所有动态属性的总大小（以字节为单位）。
     * 这包括键和值的大小。这可用于诊断性能警告迹象——例如，
     * 如果某个实体具有许多兆字节的关联动态属性，则可能在不同设备上加载缓慢。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * 创建物品堆叠的精确副本，包括任何自定义数据或属性。
     *
     * @returns
     * 返回槽位中物品的副本。如果槽位为空，则返回 undefined。
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getItem(): ItemStack | undefined;
    /**
     * @remarks
     * 返回 ItemStack 的 lore 值——一个次要显示字符串。
     *
     * @returns
     * 一个 lore 字符串数组。如果物品没有 lore，则返回空数组。
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getLore(): string[];
    /**
     * @remarks
     * 返回 ItemStack 的 lore 值——一个次要显示字符串。
     * 字符串形式的 lore 行将被转换为 {@link RawMessage}，
     * 并放在 {@link RawMessage.text} 下。
     *
     * @returns
     * 一个 lore 行数组。如果物品没有 lore，则返回空数组。
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getRawLore(): RawMessage[];
    /**
     * @remarks
     * 返回槽位中物品的所有标签。
     *
     * @returns
     * 返回槽位中物品的所有标签。如果槽位为空，则返回空数组。
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 如果此槽位中有物品，则返回 true。
     *
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    hasItem(): boolean;
    /**
     * @remarks
     * 返回槽位中的物品是否具有给定的标签。
     *
     * @param tag
     * 物品标签。
     * @returns
     * 当槽位为空或槽位中的物品不具有给定标签时，返回 false。
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * 返回此物品堆叠是否可以与给定的 `itemStack` 堆叠。
     * 这通过比较物品类型以及物品堆叠关联的任何自定义数据和属性来确定。
     * 每个物品堆叠的数量不纳入考虑。
     *
     * @param itemStack
     * 被比较的 ItemStack。
     * @returns
     * 返回此物品堆叠是否可以与给定的 `itemStack` 堆叠。
     * @throws
     * 如果槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * 此物品在冒险模式下可以破坏的方块类型列表。
     * 方块名称会显示在物品的工具提示中。将该值设置为 undefined 将清除列表。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param blockIdentifiers
     * 方块列表，以其标识符给出。
     * @throws
     * 如果槽位的容器无效，则抛出异常。如果提供的任何方块标识符无效，也会抛出异常。
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 此物品在冒险模式下可以被放置在其上的方块类型列表。
     * 这仅适用于方块物品。方块名称会显示在物品的工具提示中。
     * 将该值设置为 undefined 将清除列表。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param blockIdentifiers
     * 方块列表，以其标识符给出。
     * @throws
     * 如果槽位的容器无效，则抛出异常。如果提供的任何方块标识符无效，也会抛出异常。
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * 设置多个具有特定值的动态属性。
     *
     * @param values
     * 要设置的动态属性的键值对记录。如果数据值为 null，则改为移除该属性。
     * @throws
     * 如果槽位的容器无效，则抛出异常；如果参数值超出允许范围，则抛出对应异常；
     * 如果不支持此功能，则抛出对应异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidContainerSlotError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    /**
     * @remarks
     * 将指定属性设置为一个值。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性的数据值。如果值为 null，则改为移除该属性。
     * @throws
     * 如果槽位的容器无效，则抛出异常；如果参数值超出允许范围，则抛出对应异常；
     * 如果不支持此功能，则抛出对应异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidContainerSlotError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 将给定的 ItemStack 放入槽位，替换任何现有物品。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param itemStack
     * 要放入槽位的 ItemStack。
     * @throws
     * 如果槽位的容器无效，则抛出异常；如果违反容器规则，则抛出异常。
     *
     * {@link ContainerRulesError}
     *
     * {@link InvalidContainerSlotError}
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * 设置 ItemStack 的 lore 值——一个次要显示字符串。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param loreList
     * lore 字符串列表。将此参数设置为 undefined 将清除 lore。
     * @throws
     * 如果槽位的容器无效，则抛出异常；如果参数值超出允许范围，则抛出对应异常；
     * 如果发生其他错误，则抛出异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}

/**
 * 关于命令来源的详细信息。
 */
export class CustomCommandOrigin {
    private constructor();
    /**
     * @remarks
     * 如果此命令是通过NPC发起的，则返回发起NPC对话的实体。
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * 如果此命令是通过方块（例如命令方块）触发的，则来源方块。
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * 如果此命令是由实体（例如NPC）触发的，则来源实体。
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * 返回触发此命令的来源类型。
     *
     */
    readonly sourceType: CustomCommandSource;
}

/**
 * 提供注册自定义命令的功能。
 */
export class CustomCommandRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个自定义命令，该命令在执行时触发脚本回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 当命令执行时触发的回调。
     * @throws 此函数可能抛出错误。
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCommand(
        customCommand: CustomCommand,
        callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
    ): void;
    /**
     * @remarks
     * 注册一个自定义命令枚举。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param name
     * 要注册的枚举名称。
     * @param values
     * 枚举的值列表。
     * @throws 此函数可能抛出错误。
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerEnum(name: string, values: string[]): void;
}

/**
 * 包含自定义组件的 JSON 参数
 */
export class CustomComponentParameters {
    private constructor();
    /**
     * @remarks
     * 包含自定义组件定义中的参数的 JSON 对象
     *
     */
    readonly params: unknown;
}

/**
 * 检查战利品来源是否被特定类型的实体伤害的
 * 战利品条件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DamagedByEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     *
     */
    readonly entityType: string;
}

/**
 * 包含与数据驱动实体事件触发相关的信息，例如鸡身上的 minecraft:ageable_grow_up 事件。
 */
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    /**
     * @remarks
     * 事件所触发的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 正在触发的数据驱动事件的名称。
     *
     */
    readonly eventId: string;
    /**
     * @remarks
     * 一个可更新的组件状态修改列表，这些修改是此触发事件的效果。
     *
     */
    getModifiers(): DefinitionModifier[];
}

/**
 * 包含与数据驱动实体事件触发相关的事件注册，
 * 例如小鸡身上的
 * minecraft:ageable_grow_up 事件。
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在数据驱动实体事件触发后会被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 数据驱动实体事件被触发时要调用的回调函数。
     * @param options
     * 用于过滤数据驱动实体事件的选项。
     * @returns
     * 用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在数据驱动实体事件触发后会被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}

/**
 * 表示世界中某个特定维度（例如末地）的类。
 */
export class Dimension {
    private constructor();

    /**
     * @remarks
     * 维度的高度范围。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly heightRange: minecraftcommon.NumberRange;

    /**
     * @remarks
     * 维度的标识符。
     *
     */
    readonly id: string;

    /**
     * @remarks
     * 语言文件用于本地化维度名称的键。
     *
     */
    readonly localizationKey: string;

    /**
     * @beta
     * @remarks
     * 提供对此维度的兴趣点（POI）管理器的访问。此属性仅在启用 POI 实验玩法时可用。
     *
     */
    readonly poiManager: PoiManager;

    /**
     * @remarks
     * 根据世界种子计算指定类型生物群系的最近位置。请注意，calculateClosestBiomeFromSeed 是一项开销较大的操作，因此请避免在单个游戏刻内进行多次调用。结果纯粹来源于世界生成算法和世界种子，因此如果生物群系在生成后被修改过，返回的位置可能无法反映实际当前地形。
     *
     * @param pos
     * 开始查找生物群系的起始位置。
     * @param biomeToFind
     * 要查找的生物群系的标识符。
     * @param options
     * 生物群系搜索的附加筛选条件。
     * @returns
     * 返回生物群系的位置；如果找不到生物群系则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    calculateClosestBiomeFromSeed(
        pos: Vector3,
        biomeToFind: BiomeType | string,
        options?: BiomeSearchOptions,
    ): Vector3 | undefined;

    /**
     * @rc
     * @remarks
     * 将维度中一个区域的方块克隆到另一个区域。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param beginLocation
     * 要克隆的源区域的西北下角起始位置。
     * @param endLocation
     * 要克隆的源区域的东南上角结束位置。
     * @param destination
     * 克隆目标区域的西北下角起始位置。
     * @param cloneMode
     * 指定克隆的方块在目标位置的放置方式。
     * @param filter
     * 可选的方块过滤器，用于仅包含源区域中匹配的方块。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    cloneBlocks(
        beginLocation: Vector3,
        endLocation: Vector3,
        destination: Vector3,
        cloneMode: CloneMode,
        filter?: BlockFilter,
    ): void;

    /**
     * @remarks
     * 检查某区域是否包含指定的生物群系。如果区域部分位于世界边界内，则仅搜索边界内的部分。此操作的耗时与区域体积和要检查的生物群系数量成正比。
     *
     * @param volume
     * 要检查生物群系的区域。
     * @param biomeFilter
     * 要包含和排除的生物群系列表，以及要包含和排除的标签列表。如果在区域中发现了排除列表中的生物群系，或包含任何排除标签的生物群系，则返回 false。
     * @param isSuperset
     * isSuperset 用于确定过滤的严格程度。如果设置为 true，则区域必须包含包含列表中的一个或多个生物群系，或包含所有包含标签的生物群系。如果设置为 false，则区域必须仅包含包含列表中的生物群系，且这些生物群系必须包含所有包含标签。
     * @returns
     * 如果区域中的生物群系与传入的过滤设置匹配，则返回 true；否则返回 false。
     * @throws
     * 如果提供的区域包含未加载的区块，将抛出错误。
     * 如果提供的区域完全位于世界边界之外，将抛出错误。
     * 如果提供了未知的生物群系名称，将抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     *
     * {@link UnloadedChunksError}
     */
    containsBiomes(volume: BlockVolumeBase, biomeFilter: BiomeFilter, isSuperset: boolean): boolean;

    /**
     * @remarks
     * 在方块体积中搜索满足方块过滤器的方块。
     *
     * @param volume
     * 要检查的方块体积。
     * @param filter
     * 用于对体积中每个方块进行检查的方块过滤器。
     * @param allowUnloadedChunks
     * 如果设置为 true，当方块体积部分或全部位于已加载区块之外时，将抑制 UnloadedChunksError 错误。此时仅检查体积中位于已加载区块内的方块位置。
     * 默认值：false
     * @returns
     * 如果体积中至少有一个方块满足过滤器，则返回 true；否则返回 false。
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;

    /**
     * @remarks
     * 在指定位置创建爆炸。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param location
     * 爆炸的位置。
     * @param radius
     * 要创建的爆炸半径（以方块为单位）。
     * 范围：[0, 1000]
     * @param explosionOptions
     * 爆炸的附加可配置选项。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example createExplosion.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     *
     * function createExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   log('Creating an explosion of radius 10.');
     *   targetLocation.dimension.createExplosion(targetLocation, 10);
     * }
     * ```
     * @example createNoBlockExplosion.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { Vector3Utils } from '@minecraft/math';
     *
     * function createNoBlockExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const explodeNoBlocksLoc = Vector3Utils.floor(Vector3Utils.add(targetLocation, { x: 1, y: 2, z: 1 }));
     *
     *   log('Creating an explosion of radius 15 that does not break blocks.');
     *   targetLocation.dimension.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
     * }
     * ```
     * @example createExplosions.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { Vector3Utils } from '@minecraft/math';
     *
     * function createExplosions(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const explosionLoc = Vector3Utils.add(targetLocation, { x: 0.5, y: 0.5, z: 0.5 });
     *
     *   log('Creating an explosion of radius 15 that causes fire.');
     *   targetLocation.dimension.createExplosion(explosionLoc, 15, { causesFire: true });
     *
     *   const belowWaterLoc = Vector3Utils.add(targetLocation, { x: 3, y: 1, z: 3 });
     *
     *   log('Creating an explosion of radius 10 that can go underwater.');
     *   targetLocation.dimension.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
     * }
     * ```
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;

    /**
     * @remarks
     * 用指定的方块类型填充一个方块区域。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param volume
     * 要填充的方块体积。
     * @param block
     * 用于填充该体积的方块类型。
     * @param options
     * 一组附加选项，例如可用于在填充中包含/排除特定方块的方块过滤器。
     * @returns
     * 返回一个 ListBlockVolume，其中包含所有被放置的方块。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    fillBlocks(
        volume: BlockVolumeBase,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): ListBlockVolume;

    /**
     * @remarks
     * 返回指定位置的生物群系类型。
     *
     * @param location
     * 要检查生物群系的位置。
     * @returns
     * 指定位置的生物群系类型。
     * @throws
     * 如果位置超出世界边界，将抛出错误。
     * 如果位置位于未加载的区块中，将抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBiome(location: Vector3): BiomeType;

    /**
     * @remarks
     * 返回给定位置的方块实例。
     *
     * @param location
     * 要返回方块的位置。
     * @returns
     * 指定位置的方块；如果查询的位置位于未加载的区块中，则返回 undefined。
     * @throws
     * PositionInUnloadedChunkError：尝试与不再处于已加载且正在运行的区块中的方块对象交互时抛出的异常
     *
     * PositionOutOfWorldBoundariesError：尝试与维度高度范围之外的位置交互时抛出的异常
     *
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;

    /**
     * @remarks
     * 根据给定选项获取给定方块位置上方找到的第一个方块（默认查找上方的第一个实心方块）。
     *
     * @param location
     * 用于检索其上方方块的位置。
     * @param options
     * 用于判定方块是否为有效结果的选项。
     * @returns
     * 上方找到的第一个符合条件的方块；如果未找到则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;

    /**
     * @remarks
     * 根据给定选项获取给定方块位置下方找到的第一个方块（默认查找下方的第一个实心方块）。
     *
     * @param location
     * 用于检索其下方方块的位置。
     * @param options
     * 用于判定方块是否为有效结果的选项。
     * @returns
     * 下方找到的第一个符合条件的方块；如果未找到则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;

    /**
     * @remarks
     * 获取从某个位置沿向量发出的射线所命中的第一个方块。
     *
     * @param location
     * 发起射线检测的起始位置。
     * @param direction
     * 射线投射的方向向量。
     * @param options
     * 处理此射线查询的附加选项。
     * @returns
     * 射线命中的方块结果，若未命中任何方块则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;

    /**
     * @rc
     * @remarks
     * 获取一个体积范围内所有满足方块查询条件的方块。
     *
     * @param volume
     * 将要检查的方块体积范围。
     * @param options
     * 方块查询选项，包括筛选条件，以及可选的按某位置距离进行最近/最远排序。
     * @param allowUnloadedChunks
     * 若设置为 true，当部分或全部方块体积位于已加载区块之外时，将抑制 UnloadedChunksError。此时只会检查体积范围内位于已加载区块中的方块位置。
     * 默认值：false
     * @returns
     * 返回一个 ListBlockVolume，其中包含所有满足方块查询条件的方块位置。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link UnloadedChunksError}
     */
    getBlocks(volume: BlockVolumeBase, options: BlockQueryOptions, allowUnloadedChunks?: boolean): ListBlockVolume;

    /**
     * @remarks
     * 根据 EntityQueryOptions 中定义的一组筛选条件返回一组实体。
     *
     * @param options
     * 可用于筛选返回实体集合的附加选项。
     * @returns
     * 一个实体数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     * @example bounceSkeletons.ts
     * ```typescript
     * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
     *
     * function bounceSkeletons(targetLocation: DimensionLocation) {
     *   const mobs = ['creeper', 'skeleton', 'sheep'];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
     *   }
     *
     *   const eqo: EntityQueryOptions = {
     *     type: 'skeleton',
     *   };
     *
     *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
     *     entity.applyKnockback(0, 0, 0, 1);
     *   }
     * }
     * ```
     * @example tagsQuery.ts
     * ```typescript
     * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
     *
     * function tagsQuery(targetLocation: DimensionLocation) {
     *   const mobs = ['creeper', 'skeleton', 'sheep'];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     const mobTypeId = mobs[i % mobs.length];
     *     const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
     *     entity.addTag('mobparty.' + mobTypeId);
     *   }
     *
     *   const eqo: EntityQueryOptions = {
     *     tags: ['mobparty.skeleton'],
     *   };
     *
     *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
     *     entity.kill();
     *   }
     * }
     * ```
     * @example testThatEntityIsFeatherItem.ts
     * ```typescript
     * import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     *
     * function testThatEntityIsFeatherItem(
     *   log: (message: string, status?: number) => void,
     *   targetLocation: DimensionLocation
     * ) {
     *   const items = targetLocation.dimension.getEntities({
     *     location: targetLocation,
     *     maxDistance: 20,
     *   });
     *
     *   for (const item of items) {
     *     const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;
     *
     *     if (itemComp) {
     *       if (itemComp.itemStack.typeId.endsWith('feather')) {
     *         log('Success! Found a feather', 1);
     *       }
     *     }
     *   }
     * }
     * ```
     */
    getEntities(options?: EntityQueryOptions): Entity[];

    /**
     * @remarks
     * 返回位于特定位置的一组实体。
     *
     * @param location
     * 要返回实体的位置。
     * @returns
     * 指定位置处的零个或多个实体。
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];

    /**
     * @remarks
     * 获取与从某个位置发出的指定向量射线相交的实体。
     *
     * @param location
     * 发起射线检测的起始位置。
     * @param direction
     * 射线投射的方向向量。
     * @param options
     * 处理此射线查询的附加选项。
     * @returns
     * 射线命中的实体结果数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];

    /**
     * @beta
     * @remarks
     * 返回包含指定位置的已生成结构的数组（例如：掠夺者前哨站、废弃矿井等）。如果未找到任何结构，该数组为空。
     *
     * @param location
     * 要检查结构的位置。
     * @returns
     * 包含该位置的结构类型数组。
     * @throws
     * 如果位置超出世界边界，将抛出错误。
     * 如果位置位于未加载的区块中，将抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getGeneratedStructures(location: Vector3): (minecraftvanilladata.MinecraftFeatureTypes | string)[];

    /**
     * @remarks
     * 返回照射在特定方块位置上的光照总亮度等级。
     *
     * @param location
     * 要检查亮度的方块位置。
     * @returns
     * 该方块上的亮度等级。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(location: Vector3): number;

    /**
     * @remarks
     * 根据 EntityQueryOptions 中定义的一组筛选条件返回一组玩家。
     *
     * @param options
     * 可用于筛选返回玩家集合的附加选项。
     * @returns
     * 一个玩家数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];

    /**
     * @remarks
     * 返回天空光照射在特定方块位置上的亮度等级。
     *
     * @param location
     * 要检查亮度的方块位置。
     * @returns
     * 该方块上的亮度等级。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(location: Vector3): number;

    /**
     * @remarks
     * 返回给定 XZ 坐标位置处的最高方块。
     *
     * @param locationXZ
     * 要获取最顶端方块的 XZ 坐标位置。
     * @param minHeight
     * 开始搜索的 Y 高度。默认为维度的最大高度。
     * @returns
     * 该位置最顶端的方块，若未找到则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;

    /**
     * @beta
     * @remarks
     * 返回当前天气。
     *
     * @returns
     * 返回一个 WeatherType，用于说明当前正在进行的天气的大致类别。
     */
    getWeather(): WeatherType;

    /**
     * @remarks
     * 如果给定位置处的区块已加载（且可用于脚本），则返回 true。
     *
     * @param location
     * 要检查区块是否已加载的位置。
     * @returns
     * 若该位置处的区块已加载则返回 true，否则返回 false。
     */
    isChunkLoaded(location: Vector3): boolean;

    /**
     * @remarks
     * 将指定的地物放置到维度的指定位置。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param featureName
     * 地物的字符串标识符。
     * @param location
     * 放置地物的位置。
     * @param shouldThrow
     * 指定如果地物无法放置时，函数调用是否会抛出错误。
     * 注意：如果使用未知的地物名称或尝试在未加载的区块中放置，函数调用将始终抛出错误。
     * 默认值：false
     * @returns
     * 若地物成功放置则返回 true，否则返回 false。
     * @throws
     * 如果地物名称无效，将抛出错误。
     * 如果位置位于未加载的区块中，将抛出错误。
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean;

    /**
     * @remarks
     * 将指定的地物规则放置到维度的指定位置。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param featureRuleName
     * 地物规则的字符串标识符。
     * @param location
     * 放置地物规则的位置。
     * @returns
     * 若地物规则成功放置则返回 true，否则返回 false。
     * @throws
     * 如果地物规则名称无效，将抛出错误。
     * 如果位置位于未加载的区块中，将抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeatureRule(featureRuleName: string, location: Vector3): boolean;

    /**
     * @remarks
     * 为所有玩家播放一个声音。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param soundId
     * 声音的标识符。
     * @param location
     * 声音的位置。
     * @param soundOptions
     * 用于配置声音附加效果的附加选项。
     * @returns
     * 表示该声音播放的 SoundInstance。
     * @throws
     * 如果音量小于 0.0，将抛出错误。
     * 如果淡入时间小于 0.0，将抛出错误。
     * 如果音调小于 0.01，将抛出错误。
     * 如果音量小于 0.0，将抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): SoundInstance;

    /**
     * @remarks
     * 使用更广泛维度的上下文同步运行一条命令。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param commandString
     * 要运行的命令。注意命令字符串不应以斜杠开头。
     * @returns
     * 返回一个命令结果，其中包含命令成功执行的数值计数。
     * @throws
     * 当命令因参数不正确或命令语法错误而失败，或命令出现错误情况时抛出异常。请注意，在许多情况下，如果命令未生效（例如目标选择器没有匹配到任何目标），此方法不会抛出异常。
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;

    /**
     * @remarks
     * 使用 BlockPermutation 在世界中设置一个方块。
     * BlockPermutation 是具有特定状态的方块。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param location
     * 维度内要设置方块的位置。
     * @param permutation
     * 要设置的方块排列。
     * @throws
     * 如果该位置位于未加载的区块内或超出世界边界，则抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;

    /**
     * @remarks
     * 在维度内的给定位置设置一个方块。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param location
     * 维度内要设置方块的位置。
     * @param blockType
     * 要设置的方块类型。可以是字符串标识符或 BlockType。将使用默认的方块排列。
     * @throws
     * 如果该位置位于未加载的区块内或超出世界边界，则抛出异常。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockType(location: Vector3, blockType: BlockType | string): void;

    /**
     * @remarks
     * 设置维度内的当前天气。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param weatherType
     * 设置要应用的天气类型。
     * @param duration
     * 设置天气的持续时间（以刻为单位）。如果未提供持续时间，则持续时间将被设置为 300 到 900 秒之间的随机时长。
     * 取值范围：[1, 1000000]
     * @throws 此函数可能抛出错误。
     */
    setWeather(weatherType: WeatherType, duration?: number): void;

    /**
     * @remarks
     * 在指定位置创建一个新实体（例如生物）。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 要生成的实体类型的标识符。如果未指定命名空间，则假定为 'minecraft:'。
     * @param location
     * 创建实体的位置。
     * @returns
     * 在指定位置新创建的实体。
     * @throws 此函数可能抛出错误。
     *
     * {@link EntitySpawnError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example spawnAdultHorse.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { Vector3Utils } from '@minecraft/math';
     *
     * function spawnAdultHorse(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   log('Create a horse and triggering the ageable_grow_up event, ensuring the horse is created as an adult');
     *   targetLocation.dimension.spawnEntity(
     *     'minecraft:horse<minecraft:ageable_grow_up>',
     *     Vector3Utils.add(targetLocation, { x: 0, y: 1, z: 0 })
     *   );
     * }
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes, MinecraftEffectTypes } from '@minecraft/vanilla-data';
     *
     * function quickFoxLazyDog(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const fox = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *
     *   fox.addEffect(MinecraftEffectTypes.Speed, 10, {
     *     amplifier: 2,
     *   });
     *   log('Created a fox.');
     *
     *   const wolf = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Wolf, {
     *     x: targetLocation.x + 4,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *   wolf.addEffect(MinecraftEffectTypes.Slowness, 10, {
     *     amplifier: 2,
     *   });
     *   wolf.isSneaking = true;
     *   log('Created a sneaking wolf.', 1);
     * }
     * ```
     * @example triggerEvent.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function triggerEvent(targetLocation: DimensionLocation) {
     *   const creeper = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Creeper, targetLocation);
     *
     *   creeper.triggerEvent('minecraft:start_exploding_forced');
     * }
     * ```
     */
    spawnEntity<T = never>(
        identifier: EntityIdentifierType<NoInfer<T>>,
        location: Vector3,
        options?: SpawnEntityOptions,
    ): Entity;

    /**
     * @remarks
     * 在指定位置创建一个新的物品实例实体。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param location
     * 创建物品实例的位置。
     * @returns
     * 在指定位置新创建的物品实例实体。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example itemStacks.ts
     * ```typescript
     * import { ItemStack, DimensionLocation } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function itemStacks(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
     *   const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
     *   const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };
     *
     *   const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1);
     *   const onePickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe, 1);
     *   const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5);
     *
     *   log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
     *   targetLocation.dimension.spawnItem(oneEmerald, oneItemLoc);
     *
     *   log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
     *   targetLocation.dimension.spawnItem(fiveEmeralds, fiveItemsLoc);
     *
     *   log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
     *   targetLocation.dimension.spawnItem(onePickaxe, diamondPickaxeLoc);
     * }
     * ```
     * @example spawnFeatherItem.ts
     * ```typescript
     * import { ItemStack, DimensionLocation } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function spawnFeatherItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
     *
     *   targetLocation.dimension.spawnItem(featherItem, targetLocation);
     *   log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
     * }
     * ```
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;

    /**
     * @remarks
     * 在世界中的指定位置创建一个新的粒子发射器。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param effectName
     * 要创建的粒子的标识符。
     * @param location
     * 创建粒子发射器的位置。
     * @param molangVariables
     * 一组可选的、可针对此粒子进行调整的自定义变量。
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example spawnParticle.ts
     * ```typescript
     * import { MolangVariableMap, DimensionLocation } from '@minecraft/server';
     *
     * function spawnParticle(targetLocation: DimensionLocation) {
     *   for (let i = 0; i < 100; i++) {
     *     const molang = new MolangVariableMap();
     *
     *     molang.setColorRGB('variable.color', { red: Math.random(), green: Math.random(), blue: Math.random() });
     *
     *     const newLocation = {
     *       x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
     *       y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
     *       z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
     *     };
     *     targetLocation.dimension.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
     *   }
     * }
     * ```
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;

    /**
     * @beta
     * @remarks
     * 在维度中的指定位置生成一个经验球。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param location
     * 生成经验球的位置。
     * @param amount
     * 赋予经验球的经验值数量。
     * 取值范围：[1, 12000]
     * @throws 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnXp(location: Vector3, amount: number): void;

    /**
     * @beta
     * @remarks
     * 停止为所有玩家播放的所有声音。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    stopAllSounds(): void;

    /**
     * @beta
     * @remarks
     * 停止为所有玩家播放的某个声音。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param soundId
     * 声音的标识符。
     */
    stopSound(soundId: string): void;

}

/**
 * 提供注册自定义维度的功能。
 * 自定义维度只能在系统启动事件期间注册。
 */
export class DimensionRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个新的自定义维度类型。必须在系统启动事件期间调用。
     * 维度将使用虚空生成器创建。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param typeId
     * 自定义维度的命名空间标识符（例如：'mypack:my_dimension'）。
     * 必须包含命名空间，且仅使用有效的标识符字符。
     * @throws
     * 当 typeId 对应的维度已注册时，抛出 {@link CustomDimensionAlreadyRegisteredError}。
     * 当注册表无效时，抛出 {@link CustomDimensionInvalidRegistryError}。
     * 当 typeId 不符合命名要求时，抛出 {@link CustomDimensionNameError}。
     * 当在重载过程中尝试注册新维度时，抛出 {@link CustomDimensionReloadNewDimensionError}。
     * 发生引擎错误时，抛出 {@link minecraftcommon.EngineError}。
     * 当命名空间名称无效时，抛出 {@link NamespaceNameError}。
     */
    registerCustomDimension(typeId: string): void;
}

/**
 * 表示一种维度类型。目前仅适用于原版维度。
 */
export class DimensionType {
    private constructor();
    /**
     * @remarks
     * 维度类型的标识符。目前仅适用于原版维度。
     *
     */
    readonly typeId: string;
}

/**
 * 用于访问所有可用的维度类型。当前
 * 仅适用于原版维度。
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * 通过字符串标识符检索维度类型。
     * 当前仅适用于原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param dimensionTypeId 维度类型的字符串标识符。
     * @returns 返回对应的维度类型，若未找到则返回 undefined。
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * 检索所有维度类型的数组。当前仅
     * 适用于原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @returns 所有维度类型的数组。
     */
    static getAll(): DimensionType[];
}

/**
 * 表示已添加到实体上的效果（如中毒效果）。
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * 获取可能应用于此效果的放大器数值。示例值通常范围为 0 到 4。例如：效果“跳跃提升 II”的放大器值为 1。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 获取此效果的玩家友好名称。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 获取此效果的完整指定持续时间（以刻为单位）。每秒有 20 刻。可使用 {@link TicksPerSecond} 常量在刻与秒之间进行转换。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly duration: number;
    /**
     * @remarks
     * 返回此效果实例是否可在当前上下文中使用。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取此效果的类型 ID。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly typeId: string;
}

/**
 * 包含与效果（如中毒）被添加到实体时相关的变更信息。
 */
export class EffectAddAfterEvent {
    private constructor();
    /**
     * @remarks
     * 效果的附加属性和详细信息。
     *
     */
    readonly effect: Effect;
    /**
     * @remarks
     * 该效果被添加到的实体。
     *
     */
    readonly entity: Entity;
}

/**
 * 管理与效果添加到实体时
 * 相关的回调。
 */
export class EffectAddAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在
     * 效果添加到实体时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当效果添加到实体时调用的回调函数。
     * @param options - 可选的事件选项。
     * @returns 返回传入的回调函数，便于后续用于取消订阅。
     */
    subscribe(
        callback: (arg0: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EffectAddAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当效果添加到实体时
     * 会被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}

/**
 * 包含与效果变化（如中毒）被添加到
 * 实体相关的信息。
 */
export class EffectAddBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 当设置为 true 时将取消事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 效果持续时间。
     *
     */
    duration: number;
    /**
     * @remarks
     * 正在添加的效果类型。
     *
     */
    readonly effectType: string;
    /**
     * @remarks
     * 正在添加效果的实体。
     *
     */
    readonly entity: Entity;
}

/**
 * 管理与效果添加到实体时相关的回调。
 */
export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当效果添加到实体时将会调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在效果添加到实体时不再被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}

/**
 * 表示一种效果类型（如中毒），可以应用于实体。
 */
export class EffectType {
    private constructor();
    /**
     * @remarks
     * 此效果类型的标识符名称。
     *
     * @returns
     * 效果类型的标识符。
     */
    getName(): string;
}

/**
 * 表示一种效果类型，比如中毒，可以应用于
 * 实体。
 */
export class EffectTypes {
    private constructor();
    /**
     * @remarks
     * 给定标识符的效果类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 效果的标识符。
     * @returns
     * 给定标识符的效果类型，如果效果不存在
     * 则返回undefined。
     */
    static get(identifier: string): EffectType | undefined;
    /**
     * @remarks
     * 获取所有效果。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 所有效果的列表。
     */
    static getAll(): EffectType[];
}

/**
 * 表示战利品池中的一个完全空条目。如果选择了此条目，则不会掉落任何物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EmptyLootItem extends LootPoolEntry {
    private constructor();
}

export class EnchantInfo {
    private constructor();
    readonly enchantment: string;
    readonly range: minecraftcommon.NumberRange;
}

/**
 * 包含一种附魔类型的信息。
 */
export class EnchantmentType {
    /**
     * @remarks
     * 附魔类型的名称。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 该附魔类型可拥有的最大等级。
     *
     */
    readonly maxLevel: number;
    /**
     * @param enchantmentType - 附魔类型的字符串标识符。
     * @throws 如果传入的附魔类型标识无效，将抛出错误。
     */
    constructor(enchantmentType: string);
}

/**
 * 包含此世界中可用的 Minecraft 附魔类型目录。
 */
export class EnchantmentTypes {
    private constructor();
    /**
     * @remarks
     * 根据指定标识符获取附魔。
     *
     * @param enchantmentId
     * 附魔的标识符。例如，"minecraft:flame"。
     * @returns
     * 如果可用，返回一个表示指定附魔的 EnchantmentType 对象。
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
    /**
     * @remarks
     * 返回所有可用附魔类型的集合。
     *
     * @returns
     * 所有可用附魔类型的数组。
     */
    static getAll(): EnchantmentType[];
}

/**
 * 战利品物品函数，用于对掉落物应用随机附魔，
 * 使用与原版生物生成时装备附魔相同的算法。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomEquipmentFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 决定装备被附魔可能性的值。
     *
     */
    readonly chance: number;
}

/**
 * 随机附魔掉落物品的战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomlyFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 确定是否在随机选择的附魔中包含宝藏附魔。
     *
     */
    readonly treasure: boolean;
}

/**
 * 战利品物品函数，对掉落的物品应用随机附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantWithLevelsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 值范围，函数从中随机选择要应用的附魔等级。
     * 包含最小值和最大值。
     *
     */
    readonly levels: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 决定是否在随机附魔选择中包含宝藏附魔的值。
     *
     */
    readonly treasure: boolean;
}

/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
    private constructor();
    /**
     * @remarks
     * Dimension that the entity is currently within.
     *
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it. This
     * property is accessible even if {@link Entity.isValid} is
     * false.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Whether the entity is touching a climbable block. For
     * example, a player next to a ladder or a spider next to a
     * stone wall.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isClimbing: boolean;
    /**
     * @remarks
     * Whether the entity has a fall distance greater than 0, or
     * greater than 1 while gliding.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isFalling: boolean;
    /**
     * @remarks
     * Whether any part of the entity is inside a water block.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isInWater: boolean;
    /**
     * @remarks
     * Whether the entity is on top of a solid block. This property
     * may behave in unexpected ways. This property will always be
     * true when an Entity is first spawned, and if the Entity has
     * no gravity this property may be incorrect.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isOnGround: boolean;
    /**
     * @remarks
     * If true, the entity is currently sleeping.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isSleeping: boolean;
    /**
     * @remarks
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    isSneaking: boolean;
    /**
     * @remarks
     * Whether the entity is sprinting. For example, a player using
     * the sprint action, an ocelot running away or a pig boosting
     * with Carrot on a Stick.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isSprinting: boolean;
    /**
     * @remarks
     * Whether the entity is in the swimming state. For example, a
     * player using the swim action or a fish in water.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isSwimming: boolean;
    /**
     * @remarks
     * Returns whether the entity can be manipulated by script. A
     * Player is considered valid when it's EntityLifetimeState is
     * set to Loaded.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * Key for the localization of this entity's name used in .lang
     * files.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * Current location of the entity.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Boolean which determines if the player nameplate should be
     * depth tested for visibility.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    nameplateDepthTested: boolean;
    /**
     * @remarks
     * Float that determines the render distance of this entity's
     * nameplate.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    nameplateRenderDistance: number;
    /**
     * @remarks
     * Given name of the entity.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    nameTag: string;
    /**
     * @remarks
     * Returns a scoreboard identity that represents this entity.
     * Will remain valid when the entity is killed.
     *
     */
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * @beta
     * @remarks
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking. If the entity
     * currently has no target returns undefined.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly target?: Entity;
    /**
     * @remarks
     * Identifier of the type of the entity - for example,
     * 'minecraft:skeleton'. This property is accessible even if
     * {@link Entity.isValid} is false.
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * Adds or updates an effect, like poison, to the entity.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply. There are
     * 20 ticks per second. Use {@link TicksPerSecond} constant to
     * convert between ticks and seconds. The value must be within
     * the range [0, 20000000].
     * Bounds: [1, 20000000]
     * @param options
     * Additional options for the effect.
     * @returns
     * Returns nothing if the effect was added or updated
     * successfully. This can throw an error if the duration or
     * amplifier are outside of the valid ranges, or if the effect
     * does not exist.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     * @example spawnPoisonedVillager.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEffectTypes } from '@minecraft/vanilla-data';
     *
     * function spawnPoisonedVillager(targetLocation: DimensionLocation) {
     *   const villagerType = 'minecraft:villager_v2<minecraft:ageable_grow_up>';
     *   const villager = targetLocation.dimension.spawnEntity(villagerType, targetLocation);
     *   const duration = 20;
     *
     *   villager.addEffect(MinecraftEffectTypes.Poison, duration, { amplifier: 1 });
     * }
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes, MinecraftEffectTypes } from '@minecraft/vanilla-data';
     *
     * function quickFoxLazyDog(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const fox = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *
     *   fox.addEffect(MinecraftEffectTypes.Speed, 10, {
     *     amplifier: 2,
     *   });
     *   log('Created a fox.');
     *
     *   const wolf = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Wolf, {
     *     x: targetLocation.x + 4,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *   wolf.addEffect(MinecraftEffectTypes.Slowness, 10, {
     *     amplifier: 2,
     *   });
     *   wolf.isSneaking = true;
     *   log('Created a sneaking wolf.', 1);
     * }
     * ```
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
    /**
     * @remarks
     * Adds an item to the entity's inventory.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @returns
     * Returns undefined if the item was fully added or returns an
     * ItemStack with the remaining count.
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     *
     * {@link InvalidEntityComponentError}
     *
     * {@link InvalidEntityError}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks
     * Adds a specified tag to an entity.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param tag
     * Content of the tag to add. The tag must be less than 256
     * characters.
     * @returns
     * Returns true if the tag was added successfully. This can
     * fail if the tag already exists on the entity.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     * @example tagsQuery.ts
     * ```typescript
     * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
     *
     * function tagsQuery(targetLocation: DimensionLocation) {
     *   const mobs = ['creeper', 'skeleton', 'sheep'];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     const mobTypeId = mobs[i % mobs.length];
     *     const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
     *     entity.addTag('mobparty.' + mobTypeId);
     *   }
     *
     *   const eqo: EntityQueryOptions = {
     *     tags: ['mobparty.skeleton'],
     *   };
     *
     *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
     *     entity.kill();
     *   }
     * }
     * ```
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * Applies a set of damage to an entity.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param amount
     * Amount of damage to apply.
     * @param options
     * Additional options about the source of damage, which may add
     * additional effects or spur additional behaviors on this
     * entity.
     * @returns
     * Whether the entity takes any damage. This can return false
     * if the entity is invulnerable or if the damage applied is
     * less than or equal to 0.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     * @example applyDamageThenHeal.ts
     * ```typescript
     * import { system, EntityHealthComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function applyDamageThenHeal(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);
     *
     *   skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton
     *
     *   system.runTimeout(() => {
     *     const health = skelly.getComponent(EntityComponentTypes.Health) as EntityHealthComponent;
     *     log('Skeleton health before heal: ' + health?.currentValue);
     *     health?.resetToMaxValue();
     *     log('Skeleton health after heal: ' + health?.currentValue);
     *   }, 20);
     * }
     * ```
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param vector
     * Impulse vector.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     * @example applyImpulse.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function applyImpulse(targetLocation: DimensionLocation) {
     *   const zombie = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Zombie, targetLocation);
     *
     *   zombie.clearVelocity();
     *
     *   // throw the zombie up in the air
     *   zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * }
     * ```
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param verticalStrength
     * Knockback strength for the vertical vector.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     * @example bounceSkeletons.ts
     * ```typescript
     * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
     *
     * function bounceSkeletons(targetLocation: DimensionLocation) {
     *   const mobs = ['creeper', 'skeleton', 'sheep'];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
     *   }
     *
     *   const eqo: EntityQueryOptions = {
     *     type: 'skeleton',
     *   };
     *
     *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
     *     entity.applyKnockback(0, 0, 0, 1);
     *   }
     * }
     * ```
     */
    applyKnockback(horizontalForce: VectorXZ, verticalStrength: number): void;
    /**
     * @remarks
     * Clears all dynamic properties that have been set on this
     * entity.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * Sets the current velocity of the Entity to zero.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     * @example applyImpulse.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function applyImpulse(targetLocation: DimensionLocation) {
     *   const zombie = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Zombie, targetLocation);
     *
     *   zombie.clearVelocity();
     *
     *   // throw the zombie up in the air
     *   zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * }
     * ```
     */
    clearVelocity(): void;
    /**
     * @remarks
     * Extinguishes the fire if the entity is on fire. Note that
     * you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param useEffects
     * Whether to show any visual effects connected to the
     * extinguishing.
     * Defaults to: true
     * @returns
     * Returns whether the entity was on fire.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     * @example setOnFire.ts
     * ```typescript
     * import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);
     *
     *   skelly.setOnFire(20, true);
     *
     *   system.runTimeout(() => {
     *     const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
     *     log(onfire?.onFireTicksRemaining + ' fire ticks remaining.');
     *
     *     skelly.extinguishFire(true);
     *     log('Never mind. Fire extinguished.');
     *   }, 20);
     * }
     * ```
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @remarks
     * Gets the entity's collision bounds.
     *
     * @returns
     * An axis-aligned bounding box.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getAABB(): AABB;
    /**
     * @remarks
     * Gets the solid blocks that this entity is directly standing
     * on. Ignores pressure plates.
     *
     * @param options
     * Additional configuration options for what blocks are
     * returned.
     * @returns
     * The solid blocks that this entity is directly standing on.
     * Returns an empty list if the entity is jumping or flying.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getAllBlocksStandingOn(options?: GetBlocksStandingOnOptions): Block[];
    /**
     * @remarks
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @remarks
     * Gets a single solid block closest to the center of the
     * entity that this entity is directly standing on. Ignores
     * pressure plates.
     *
     * @param options
     * Additional configuration options for what block is returned.
     * @returns
     * A single solid block closest to the center of the entity
     * that this entity is directly standing on. Undefined if
     * entity is flying or jumping.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getBlockStandingOn(options?: GetBlocksStandingOnOptions): Block | undefined;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:health').
     * If no namespace prefix is specified, 'minecraft:' is
     * assumed. Available component IDs can be found as part of the
     * {@link EntityComponentTypes} enum.
     * @returns
     * Returns the component if it exists on the entity, otherwise
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getComponent<T extends string>(componentId: T): EntityComponentReturnType<T> | undefined;
    /**
     * @remarks
     * Returns all scripting components that are present on this
     * entity.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getComponents(): EntityComponent[];
    /**
     * @remarks
     * Returns a property value.
     *
     * @param identifier
     * The property identifier.
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Returns the available set of dynamic property identifiers
     * that have been used on this entity.
     *
     * @returns
     * A string array of the dynamic properties set on this entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * Returns the total size, in bytes, of all the dynamic
     * properties that are currently stored for this entity. This
     * includes the size of both the key and the value.  This can
     * be useful for diagnosing performance warning signs - if, for
     * example, an entity has many megabytes of associated dynamic
     * properties, it may be slow to load on various devices.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, undefined if the effect is not present, or throws an
     * error if the effect does not exist.
     *
     * @param effectType
     * The effect identifier.
     * @returns
     * Effect object for the specified effect, undefined if the
     * effect is not present, or throws an error if the effect does
     * not exist.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @remarks
     * Returns a set of effects applied to this entity.
     *
     * @returns
     * List of effects.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getEffects(): Effect[];
    /**
     * @remarks
     * Gets the entities that this entity is looking at by
     * performing a ray cast from the view of this entity.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns a set of entities from the direction that this
     * entity is looking at.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @remarks
     * Returns the current location of the head component of this
     * entity.
     *
     * @returns
     * Returns the current location of the head component of this
     * entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getHeadLocation(): Vector3;
    /**
     * @remarks
     * Gets an entity Property value. If the property was set using
     * the setProperty function within the same tick, the updated
     * value will not be reflected until the subsequent tick.
     *
     * @param identifier
     * The entity Property identifier.
     * @returns
     * Returns the current property value. For enum properties, a
     * string is returned. For float and int properties, a number
     * is returned. For undefined properties, undefined is
     * returned.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    getProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @remarks
     * Returns the current rotation component of this entity.
     *
     * @returns
     * Returns a Vec2 containing the rotation of this entity (in
     * degrees).
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getRotation(): Vector2;
    /**
     * @remarks
     * Returns all tags associated with the entity.
     *
     * @returns
     * An array containing all tags as strings.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns the current velocity vector of the entity.
     *
     * @returns
     * Returns the current velocity vector of the entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     * @example getFireworkVelocity.ts
     * ```typescript
     * import { system, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function getFireworkVelocity(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const fireworkRocket = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.FireworksRocket, targetLocation);
     *
     *   system.runTimeout(() => {
     *     const velocity = fireworkRocket.getVelocity();
     *
     *     log('Velocity of firework is: (x: ' + velocity.x + ', y:' + velocity.y + ', z:' + velocity.z + ')');
     *   }, 5);
     * }
     * ```
     */
    getVelocity(): Vector3;
    /**
     * @remarks
     * Returns the current view direction of the entity.
     *
     * @returns
     * Returns the current view direction of the entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getViewDirection(): Vector3;
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     * @returns
     * Returns true if the specified component is present on this
     * entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Returns whether an entity has a particular tag.
     *
     * @param tag
     * Identifier of the tag to test for.
     * @returns
     * Returns whether an entity has a particular tag.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @returns
     * Returns true if entity can be killed (even if it is already
     * dead), otherwise it returns false.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     * @example tagsQuery.ts
     * ```typescript
     * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
     *
     * function tagsQuery(targetLocation: DimensionLocation) {
     *   const mobs = ['creeper', 'skeleton', 'sheep'];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     const mobTypeId = mobs[i % mobs.length];
     *     const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
     *     entity.addTag('mobparty.' + mobTypeId);
     *   }
     *
     *   const eqo: EntityQueryOptions = {
     *     tags: ['mobparty.skeleton'],
     *   };
     *
     *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
     *     entity.kill();
     *   }
     * }
     * ```
     */
    kill(): boolean;
    /**
     * @remarks
     * Sets the rotation of the entity to face a target location.
     * Both pitch and yaw will be set, if applicable, such as for
     * mobs where the pitch controls the head tilt and the yaw
     * controls the body rotation.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param targetLocation
     * The target location that this entity should face/look
     * towards.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    lookAt(targetLocation: Vector3): void;
    /**
     * @remarks
     * Matches the entity against the passed in options. Uses the
     * location of the entity for matching if the location is not
     * specified in the passed in EntityQueryOptions.
     *
     * @param options
     * The query to perform the match against.
     * @returns
     * Returns true if the entity matches the criteria in the
     * passed in EntityQueryOptions, otherwise it returns false.
     * @throws
     * Throws if the query options are misconfigured.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    matches(options: EntityQueryOptions): boolean;
    /**
     * @remarks
     * Cause the entity to play the given animation.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param animationName
     * The animation identifier. e.g. animation.creeper.swelling
     * @param options
     * Additional options to control the playback and transitions
     * of the animation.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @remarks
     * Immediately removes the entity from the world. The removed
     * entity will not perform a death animation or drop loot upon
     * removal.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    remove(): void;
    /**
     * @remarks
     * Removes the specified EffectType on the entity, or returns
     * false if the effect is not present.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param effectType
     * The effect identifier.
     * @returns
     * Returns true if the effect has been removed. Returns false
     * if the effect is not found or does not exist.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * @remarks
     * Removes a specified tag from an entity.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param tag
     * Content of the tag to remove.
     * @returns
     * Returns whether the tag existed on the entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * Resets an Entity Property back to its default value, as
     * specified in the Entity's definition. This property change
     * is not applied until the next tick.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * The Entity Property identifier.
     * @returns
     * Returns the default property value. For enum properties, a
     * string is returned. For float and int properties, a number
     * is returned. For undefined properties, undefined is
     * returned.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidEntityError}
     */
    resetProperty(identifier: string): boolean | number | string;
    /**
     * @remarks
     * Runs a synchronous command on the entity.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param commandString
     * The command string. Note: This should not include a leading
     * forward slash.
     * @returns
     * A command result containing whether the command was
     * successful.
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * Sets multiple dynamic properties with specific values.
     *
     * @param values
     * A Record of key value pairs of the dynamic properties to
     * set. If the data value is null, it will remove that property
     * instead.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;
    /**
     * @remarks
     * Sets a specified property to a value.
     *
     * @param identifier
     * The property identifier.
     * @param value
     * Data value of the property to set. If the value is null, it
     * will remove the property instead.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Sets an entity on fire (if it is not in water or rain). Note
     * that you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param seconds
     * Length of time to set the entity on fire.
     * @param useEffects
     * Whether side-effects should be applied (e.g. thawing freeze)
     * and other conditions such as rain or fire protection should
     * be taken into consideration.
     * Defaults to: true
     * @returns
     * Whether the entity was set on fire. This can fail if seconds
     * is less than or equal to zero, the entity is wet or the
     * entity is immune to fire.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     * @example setOnFire.ts
     * ```typescript
     * import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);
     *
     *   skelly.setOnFire(20, true);
     *
     *   system.runTimeout(() => {
     *     const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
     *     log(onfire?.onFireTicksRemaining + ' fire ticks remaining.');
     *
     *     skelly.extinguishFire(true);
     *     log('Never mind. Fire extinguished.');
     *   }, 20);
     * }
     * ```
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @remarks
     * Sets an Entity Property to the provided value. This property
     * change is not applied until the next tick.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * The Entity Property identifier.
     * @param value
     * The property value. The provided type must be compatible
     * with the type specified in the entity's definition.
     * @throws
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the
     * property type.
     * Throws if the provided value is outside the expected range
     * (int, float properties).
     * Throws if the provided string value does not match the set
     * of accepted enum values (enum properties
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * Sets the main rotation of the entity.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param rotation
     * The x and y rotation of the entity (in degrees). For most
     * mobs, the x rotation controls the head tilt and the y
     * rotation controls the body rotation.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setRotation(rotation: Vector2): void;
    /**
     * @remarks
     * Teleports the selected entity to a new location
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param location
     * New location for the entity.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     * @example teleport.ts
     * ```typescript
     * import { system, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function teleport(targetLocation: DimensionLocation) {
     *   const cow = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Cow, targetLocation);
     *
     *   system.runTimeout(() => {
     *     cow.teleport(
     *       { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 },
     *       {
     *         facingLocation: targetLocation,
     *       }
     *     );
     *   }, 20);
     * }
     * ```
     * @example teleportMovement.ts
     * ```typescript
     * import { system, DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function teleportMovement(targetLocation: DimensionLocation) {
     *   const pig = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Pig, targetLocation);
     *
     *   let inc = 1;
     *   const runId = system.runInterval(() => {
     *     pig.teleport(
     *       { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
     *       {
     *         facingLocation: targetLocation,
     *       }
     *     );
     *
     *     if (inc > 100) {
     *       system.clearRun(runId);
     *     }
     *     inc++;
     *   }, 4);
     * }
     * ```
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws
     * If the event is not defined in the definition of the entity,
     * an error will be thrown.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     * @example triggerEvent.ts
     * ```typescript
     * // A function that spawns a creeper and triggers it to explode immediately
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function spawnExplodingCreeper(location: DimensionLocation) {
     *   const creeper = location.dimension.spawnEntity(MinecraftEntityTypes.Creeper, location);
     *
     *   creeper.triggerEvent('minecraft:start_exploding_forced');
     * }
     * ```
     * @example triggerEvent.ts
     * ```typescript
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function triggerEvent(targetLocation: DimensionLocation) {
     *   const creeper = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Creeper, targetLocation);
     *
     *   creeper.triggerEvent('minecraft:start_exploding_forced');
     * }
     * ```
     */
    triggerEvent(eventName: string): void;
    /**
     * @remarks
     * Attempts to try a teleport, but may not complete the
     * teleport operation (for example, if there are blocks at the
     * destination.)
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param location
     * Location to teleport the entity to.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @returns
     * Returns whether the teleport succeeded. This can fail if the
     * destination chunk is unloaded or if the teleport would
     * result in intersecting with blocks.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

/**
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     *
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /**
     * @remarks
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}

/**
 * 为实体添加一个成长计时器。可以通过给予实体定义在 feedItems 中的它喜欢的物品来加速成长。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体成长前的时长，-1 表示永远为幼体。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly duration: number;
    /**
     * @remarks
     * 当此实体成长时运行的事件。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * 使用的喂食物品在成功互动后会转化为此物品。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * 实体成长时掉落的物品列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getDropItems(): string[];
    /**
     * @remarks
     * 可以喂给实体的物品列表。包括用于物品名称的 'item' 和用于定义成长时间的 'growth'。
     *
     * @throws 此函数可能抛出错误。
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}

/**
 * 这是一个基础抽象类，适用于任何以数字为核心且具有最小值、最大值和默认定义值的实体组件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此属性在当前实例上的当前值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly currentValue: number;
    /**
     * @remarks
     * 返回此属性的默认定义值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly defaultValue: number;
    /**
     * @remarks
     * 返回此属性在考虑其他环境组件或因素后的有效最大值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly effectiveMax: number;
    /**
     * @remarks
     * 返回此属性在考虑其他环境组件或因素后的有效最小值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly effectiveMin: number;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的默认值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的最大值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * 将此属性的当前值重置为定义的最小值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * 设置此属性的当前值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param value 要设置的属性值。
     * @returns 如果属性当前值设置成功，则返回 true；否则返回 false。
     *
     * @throws
     * 如果值超出范围，将抛出 ArgumentOutOfBoundsError 错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setCurrentValue(value: number): boolean;
}

/**
 * 实体移动事件系列的基类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该生物此移动方式的最大转向速率。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly maxTurn: number;
}

/**
 * 定义此实体可以呼吸的方块，
 * 并赋予其窒息能力。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 该实体当前的空气供应量。
     *
     * This property can't be edited in restricted-execution mode.
     *
     * @throws
     * 如果空气供应量超出范围
     * [suffocationTime, maxAirSupply]，将抛出错误。
     */
    airSupply: number;
    /**
     * @remarks
     * 如果为 true，此实体可以在空气中呼吸。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * 如果为 true，此实体可以在熔岩中呼吸。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * 如果为 true，此实体可以在固体方块中呼吸。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * 如果为 true，此实体可以在水中呼吸。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly breathesWater: boolean;
    /**
     * @beta
     * @remarks
     * 如果为 true，实体能够呼吸。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly canBreathe: boolean;
    /**
     * @remarks
     * 如果为 true，此实体在水中时
     * 会产生可见的气泡。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * 恢复到最大呼吸量所需的时间（秒）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * 两次窒息伤害之间的时间（秒）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * 实体可以屏住呼吸的时间（秒）。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly totalSupply: number;
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * 此实体可以呼吸的方块列表，此外还有
     * 针对各类方块的独立属性。
     *
     * @returns 此实体可以呼吸的方块排列列表。
     * @throws 此函数可能抛出错误。
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * 此实体不能呼吸的方块列表。
     *
     * @returns 此实体不能呼吸的方块排列列表。
     * @throws 此函数可能抛出错误。
     */
    getNonBreatheBlocks(): BlockPermutation[];
}

/**
 * 添加此组件后，表示实体可以攀爬梯子。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_climb';
}

/**
 * 添加此组件后，表示该实体可以
 * 飞行，且寻路器不会限制路径下方
 * 必须有固体方块位于其下方。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}

/**
 * 当添加此组件时，表示该实体可以像 Minecraft 中的马一样进行蓄力跳跃。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_power_jump';
}

/**
 * 定义实体的次要颜色。仅对某些具有预定义次要颜色的实体有效（例如，热带鱼）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly value: PaletteColor;
    static readonly componentId = 'minecraft:color2';
}

/**
 * 定义实体的颜色。仅适用于某些具有预定义颜色值的实体（例如，绵羊、羊驼、潜影贝）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:color';
}

/**
 * 下游实体组件的基类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 拥有此组件的实体。如果实体已被移除，则该实体将为未定义。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly entity: Entity;
}

/**
 * 包含关于特定实体容器被关闭时的信息。
 */
export class EntityContainerClosedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被关闭的实体容器的来源。
     *
     */
    readonly closeSource: ContainerAccessSource;
    readonly entity: Entity;
}

/**
 * 管理与实体容器关闭时相关的回调。
 */
export class EntityContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调在实体容器关闭时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数。
     * @param options - 可选的事件访问选项。
     * @returns 用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityContainerClosedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调在实体容器关闭时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): void;
}

/**
 * 包含有关特定实体容器被打开时的信息。
 */
export class EntityContainerOpenedAfterEvent {
    private constructor();
    readonly entity: Entity;
    /**
     * @remarks
     * 被打开的实体容器的来源。
     *
     */
    readonly openSource: ContainerAccessSource;
}

/**
 * 管理当实体容器被打开时
 * 所连接的回调。
 */
export class EntityContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调会在实体容器
     * 被打开时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当实体容器被打开时要调用的回调函数。
     * @param options - 实体容器访问事件的选项。
     * @returns 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: EntityContainerOpenedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调会在实体容器
     * 被打开时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): void;
}

/**
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
export class EntityDefinitionFeedItem {
    private constructor();
    /**
     * @remarks
     * The amount by which an entity's age will increase when fed
     * this item. Values usually range between 0 and 1.
     *
     */
    readonly growth: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
    /**
     * @remarks
     * Type ID of the resulting item after feeding has occurred.
     * This will usually be empty but is used for scenarios such as
     * feeding a Nautilus with a bucket of fish, where the result
     * item will be an empty bucket.
     *
     */
    readonly resultItem?: string;
}

/**
 * 包含游戏中实体死亡相关的数据。
 */
export class EntityDieAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果已指定，则提供有关导致此实体死亡的伤害来源的更多信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 现已死亡的实体对象。
     *
     */
    readonly deadEntity: Entity;
}

/**
 * 支持注册一个在实体死亡后
 * 触发的事件。
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅一个在实体死亡时触发的事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 实体死亡时要调用的函数。
     * @param options
     * 用于在订阅触发时进行额外筛选的
     * 选项。
     * @returns
     * 返回一个闭包，可在后续下游调用中
     * 用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 当实体死亡时，停止此事件调用
     * 你的函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}

/**
 * 表示此实体的末影箱物品属性。该组件始终存在于玩家身上，其容器中的任何物品都会在玩家打开末影箱时显示。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEnderInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 定义此实体的末影箱容器。如果实体已被移除，容器将为 undefined。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:ender_inventory';
}

/**
 * 提供对生物装备槽的访问。此组件
 * 存在于玩家实体上。
 * @example givePlayerElytra.ts
 * ```typescript
 * // Gives the player Elytra
 * import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function giveEquipment(player: Player) {
 *   const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
 *   if (equipmentCompPlayer) {
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.Elytra));
 *   }
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回所有者的总护甲等级。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly totalArmor: number;
    /**
     * @remarks
     * 返回所有者的总韧性等级。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly totalToughness: number;
    static readonly componentId = 'minecraft:equippable';
    /**
     * @remarks
     * 获取给定装备槽的已装备物品。
     *
     * @param equipmentSlot
     * 装备槽。例如 "head", "chest", "offhand"
     * @returns
     * 返回装备到给定装备槽的物品。如果
     * 为空，则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @remarks
     * 获取与给定装备槽对应的
     * ContainerSlot。
     *
     * @param equipmentSlot
     * 装备槽。例如 "head", "chest", "offhand"。
     * @returns
     * 返回与给定装备槽对应的
     * ContainerSlot。
     * @throws 此函数可能抛出错误。
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * 替换给定装备槽中的物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param equipmentSlot
     * 装备槽。例如 "head", "chest", "offhand"。
     * @param itemStack
     * 要装备的物品。如果为 undefined，则清空该槽位。
     * @throws 此函数可能抛出错误。
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}

/**
 * 定义与实体在疲劳度方面的交互。
 * 封装了 `minecraft.player.exhaustion` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityExhaustionComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.exhaustion';
}

/**
 * 当添加该组件时，表示此实体不会受到火焰伤害。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:fire_immune';
}

/**
 * 当添加时，此组件表示该实体可以
 * 在液体方块中漂浮。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:floats_in_liquid';
}

/**
 * 表示实体的飞行速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 关联实体的飞行速度的当前值。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:flying_speed';
}

/**
 * 定义摩擦力对该实体的影响程度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 关联实体的摩擦力修改器的当前值。
     *
     * @throws 当使用此属性时可能抛出错误。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:friction_modifier';
}

/**
 * 战利品物品条件，用于检查生物掉落战利品时
 * 其标记变种值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasMarkVariantCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 生物必须具有的标记变种值，
     * 此条件才能通过。
     *
     */
    readonly value: number;
}

/**
 * 检查生物掉落战利品时其变体值的战利品物品条件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasVariantCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过时生物必须具有的变体值。
     *
     */
    readonly value: number;
}

/**
 * 定义与此实体交互以治疗它的方式。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 决定物品是否可以在实体处于满生命值时使用。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * 一组可以专门治疗该实体的物品。
     *
     * @returns
     * 可用于治疗该实体的物品列表。
     * @throws 此函数可能抛出错误。
     */
    getFeedItems(): FeedItem[];
}

/**
 * 包含与实体被治疗相关的信息。
 */
export class EntityHealAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被治疗的实体。
     *
     */
    readonly healedEntity: Entity;
    /**
     * @remarks
     * 描述治疗量。
     *
     */
    readonly healing: number;
    /**
     * @remarks
     * 关于治疗来源的信息。
     *
     */
    readonly healSource: EntityHealSource;
}

/**
 * 管理与实体被治疗时触发的回调。
 */
export class EntityHealAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在实体被治疗时会被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要订阅的回调函数。
     * @param options 事件订阅选项。
     * @returns 用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityHealAfterEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体被治疗时会被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}

/**
 * 关于将受到治疗实体的相关信息。
 */
export class EntityHealBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * 将受到治疗的实体。
     *
     */
    readonly healedEntity: Entity;
    /**
     * @remarks
     * 描述治疗量。
     *
     */
    healing: number;
    /**
     * @remarks
     * 治疗来源的信息。
     *
     */
    readonly healSource: EntityHealSource;
}

/**
 * 管理与实体即将被治愈时
 * 相关的回调。
 */
export class EntityHealBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体即将被治愈时
     * 调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * @param options
     * 可选的事件选项。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityHealBeforeEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在实体即将被治愈时
     * 调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: EntityHealBeforeEvent) => void): void;
}

/**
 * 提供关于治疗如何应用于
 * 实体的信息。
 */
export class EntityHealSource {
    private constructor();
    /**
     * @remarks
     * 治疗来源的原因枚举器。
     *
     */
    readonly cause: EntityHealCause;
}

/**
 * 包含与实体生命值变化相关的信息。
 * 警告：不要在此事件中改变实体的生命值，
 * 否则会导致无限循环！
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 生命值发生变化的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体的新生命值。
     *
     */
    readonly newValue: number;
    /**
     * @remarks
     * 实体的旧生命值。
     *
     */
    readonly oldValue: number;
}

/**
 * @remarks
 * 添加一个回调函数，该函数将在实体的生命值发生变化时被调用。
 *
 * This function can't be called in restricted-execution mode.
 *
 * This function can be called in early-execution mode.
 *
 * @param callback - 要添加的回调函数，参数为实体生命值变化事件。
 * @param options - （可选）事件选项。
 * @returns 返回传入的回调函数。
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，该函数将在实体的生命值发生变化时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数，参数为实体生命值变化事件。
     * @param options - （可选）事件选项。
     * @returns 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其不再在实体生命值变化时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}

/**
 * 定义实体的生命值属性。
 * @example applyDamageThenHeal.ts
 * ```typescript
 * import { system, EntityHealthComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
 * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function applyDamageThenHeal(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);
 *
 *   skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton
 *
 *   system.runTimeout(() => {
 *     const health = skelly.getComponent(EntityComponentTypes.Health) as EntityHealthComponent;
 *     log('Skeleton health before heal: ' + health?.currentValue);
 *     health?.resetToMaxValue();
 *     log('Skeleton health after heal: ' + health?.currentValue);
 *   }, 20);
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:health';
}

/**
 * 包含与实体击中方块相关的信息。
 */
export class EntityHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被击中的方块面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 进行攻击的实体。
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * 被攻击击中的方块。
     *
     */
    readonly hitBlock: Block;
    /**
     * @remarks
     * 被攻击击中的方块置换。
     *
     */
    readonly hitBlockPermutation: BlockPermutation;
}

/**
 * 管理当实体击中方块时所连接的回调函数。
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体击中方块时将会调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 当实体击中方块时要调用的函数。
     * @param options - （可选）事件监听选项，用于过滤回调触发条件。
     * @returns 返回传入的 callback 函数，以便后续用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当实体击中方块时将被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}

/**
 * 包含与一个实体击中（近战攻击）另一个实体相关的信息。
 */
export class EntityHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 进行击打/近战攻击的实体。
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * 被该攻击击中的实体。
     *
     */
    readonly hitEntity: Entity;
}

/**
 * 管理实体对另一个实体进行近战
 * 攻击时的回调。
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体击中
     * 另一个实体时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调在实体对另一个实体进行近战
     * 攻击时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}

/**
 * 定义此实体与饥饿度的交互。封装了 `minecraft.player.hunger` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHungerComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.hunger';
}

/**
 * 包含与实体受伤相关的信息。
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * 描述造成的伤害量。
     *
     */
    readonly damage: number;
    /**
     * @remarks
     * 可能施加此伤害的实体的来源信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 受到伤害的实体。
     *
     */
    readonly hurtEntity: Entity;
}

/**
 * 管理与实体受伤时
 * 相关的回调。
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体受伤时调用的回调。
     * @param callback - 要添加的回调函数。
     * @param options - 可选的选项参数。
     * @returns 返回传入的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityHurtAfterEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体受伤时调用的回调。
     * @param callback - 要移除的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}

/**
 * 包含与将要受伤的实体相关的信息。
 */
export class EntityHurtBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * 描述将要造成的伤害量。
     *
     */
    damage: number;
    /**
     * @remarks
     * 可能造成此伤害的实体的来源信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 将要受伤的实体。
     *
     */
    readonly hurtEntity: Entity;
}

/**
 * 管理当实体即将受到伤害时触发的
 * 回调。
 */
export class EntityHurtBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体即将受到伤害时
     * 调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 这个闭包在受限执行权限下被调用。
     * @returns
     * 在受限执行权限下被调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityHurtBeforeEvent) => void,
        options?: EntityHurtBeforeEventOptions,
    ): (arg0: EntityHurtBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当实体即将受到伤害时
     * 不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 这个闭包在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: EntityHurtBeforeEvent) => void): void;
}

/**
 * 定义此实体的物品栏属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体每额外获得一点强度可增加的槽位
     * 数量。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * 如果为 true，则此物品栏的内容可被漏斗
     * 移除。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * 定义此实体的容器。如果实体已被移除，
     * 则容器为 undefined。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    /**
     * @remarks
     * 此实体拥有的容器类型。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly containerType: string;
    /**
     * @remarks
     * 容器拥有的槽位数量。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * 如果为 true，则实体死亡时不会掉落其物品栏。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * 如果为 true，则此实体的物品栏只能由其
     * 所有者或实体本身访问。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * 当添加此组件时，表示该实体是一个幼年实体。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_baby';
}

/**
 * 添加此组件时，表示该实体已充能。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_charged';
}

/**
 * 当添加此组件时，表示该实体当前
 * 正携带一个箱子。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_chested';
}

/**
 * 当添加此组件时，表示染料可用于该实体
 * 以改变其颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}

/**
 * 添加此组件后，表示该实体在隐身时可以躲避敌对生物。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}

/**
 * 当添加此组件时，表示该实体
 * 当前正在着火。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_ignited';
}

/**
 * 添加此组件时，表示该实体为灾厄队长。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_illager_captain';
}

/**
 * 当添加该组件时，表示此实体当前已被鞍具。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_saddled';
}

/**
 * 当添加此组件时，表示该实体当前
 * 正在晃动。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_shaking';
}

/**
 * 添加此组件后，表示该实体
 * 当前已被剪毛。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_sheared';
}

/**
 * 添加此组件后，表示此实体可被
 * 堆叠。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stackable';
}

/**
 * 添加此组件时，表示该实体
 * 当前处于眩晕状态。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stunned';
}

/**
 * 添加此组件后，表示该实体当前
 * 已被驯服。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 返回已驯服该实体的玩家；如果该实体没有玩家所有者，
     * 则返回 'undefined'。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly tamedToPlayer?: Player;
    /**
     * @beta
     * @remarks
     * 返回已驯服该实体的玩家的 ID；如果该实体没有玩家所有者，
     * 则返回 'undefined'。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:is_tamed';
}

/**
 * 若添加到实体上，此组件表示该实体代表世界中的一个自由漂浮物品。可通过 itemStack 属性获取实际的物品实例内容。
 * @example testThatEntityIsFeatherItem.ts
 * ```typescript
 * import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
 *
 * function testThatEntityIsFeatherItem(
 *   log: (message: string, status?: number) => void,
 *   targetLocation: DimensionLocation
 * ) {
 *   const items = targetLocation.dimension.getEntities({
 *     location: targetLocation,
 *     maxDistance: 20,
 *   });
 *
 *   for (const item of items) {
 *     const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;
 *
 *     if (itemComp) {
 *       if (itemComp.itemStack.typeId.endsWith('feather')) {
 *         log('Success! Found a feather', 1);
 *       }
 *     }
 *   }
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体在世界中所代表的物品实例。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}

/**
 * 包含与实体掉落物品相关的信息。
 */
export class EntityItemDropAfterEvent {
    private constructor();
    /**
     * @remarks
     * 掉落了物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体已掉落的物品列表。
     *
     */
    readonly items: Entity[];
}

/**
 * 管理与实体掉落物品时相关的回调。
 */
export class EntityItemDropAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体掉落物品时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当实体掉落物品时要调用的回调函数。
     * @param options - 可选的额外事件选项。
     * @returns 所订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityItemDropAfterEvent) => void,
        options?: EntityItemDropEventOptions,
    ): (arg0: EntityItemDropAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体掉落物品时不再被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityItemDropAfterEvent) => void): void;
}

/**
 * 包含与实体拾取物品相关的信息。
 */
export class EntityItemPickupAfterEvent {
    private constructor();
    /**
     * @remarks
     * 拾取物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体拾取的物品列表。
     *
     */
    readonly items: ItemStack[];
}

/**
 * 管理实体拾取物品时调用的回调。
 */
export class EntityItemPickupAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体拾取物品时将被调用。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @param options - 操作选项。
     * @returns 返回用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityItemPickupAfterEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体拾取物品时被调用。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityItemPickupAfterEvent) => void): void;
}

/**
 * 包含与实体捡起一个
 * 物品相关的信息。
 */
export class EntityItemPickupBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则该物品不会被捡起。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 将要捡起该物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 将要被捡起的物品。
     *
     */
    readonly item: Entity;
}

/**
 * 管理与实体即将拾取物品时相关的回调，当实体即将
 * 拾取一个物品时。
 */
export class EntityItemPickupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体即将拾取
     * 一个物品时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityItemPickupBeforeEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调在实体即将
     * 拾取一个物品时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: EntityItemPickupBeforeEvent) => void): void;
}

/**
 * 战利品物品条件，用于检查
 * 掉落战利品的实体类型。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityKilledCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     * 示例：'minecraft:skeleton'。
     * 
     */
    readonly entityType: string;
}

/**
 * 定义此实体在熔岩中的基础移动速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:lava_movement';
}

/**
 * 允许实体被拴绳。定义实体被拴绳时的条件和事件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果另一个实体可以通过将自己的拴绳系在该实体上来“偷走”被拴住的实体，则返回 true。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * 拴绳变紧并限制移动的距离（以方块为单位）。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * 如果实体已被拴绳，则返回 true。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * 手持拴绳的实体。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * 手持拴绳的实体的标识符。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * 拴绳断裂时的距离（以方块为单位）。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * “弹簧”效果开始起作用，使该实体靠近拴住它的实体时的距离（以方块为单位）。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * 将此实体拴到另一个实体上。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param leashHolder
     * 要拴住此实体的目标实体。
     * @throws
     * 如果要拴到的实体超出最大距离，或玩家处于死亡或旁观者模式时，抛出异常。
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * 如果此实体已被拴到另一个实体上，则解除拴绳。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    unleash(): void;
}

/**
 * 包含世界内加载实体的相关数据。这可能在未加载的区块重新加载，或实体改变维度时发生。
 */
export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被加载的实体。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    entity: Entity;
}

/**
 * 注册一个基于脚本的事件处理器，用于处理实体加载时发生的事情。
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 用于注册事件处理程序的方法，处理实体加载时发生的事情。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 处理加载事件的函数。
     * @returns
     * 返回一个函数，可用于取消事件处理程序的注册。
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * 取消注册之前订阅到该事件的函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 最初传递给subscribe事件的函数，将被取消注册。
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}

/**
 * 附加变体值。可用于进一步
 * 区分变体。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体的标记变体值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:mark_variant';
}

/**
 * 添加此移动控制后，允许该生物在水中游泳
 * 并在陆地上行走。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.amphibious';
}

/**
 * 该组件用于调整实体的移动方式。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.basic';
}

/**
 * 定义该实体的常规移动速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement';
}

/**
 * 当添加此移动控制时，会使生物飞行。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.fly';
}

/**
 * 当添加此移动控制时，生物可以飞行、游泳、
 * 攀爬等。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.generic';
}

/**
 * 添加后，此移动控制将使该生物能够滑翔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 实体转向时生效的速度。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * 滑翔过程中的起始速度。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}

/**
 * 添加后，此移动控制将使生物悬停。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.hover';
}

/**
 * 移动控制，使生物在移动时跳跃，并在跳跃之间
 * 有指定延迟。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.jump';
}

/**
 * 当添加此移动控制时，生物会随着移动而跳跃。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.skip';
}

/**
 * 添加后，此移动控制会使生物左右摇摆，营造出它在游泳的印象。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 摇摆运动的幅度。
     *
     * @throws 使用时可能抛出异常。
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * 摇摆频率大小。
     *
     * @throws 使用时可能抛出异常。
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}

/**
 * 允许该实体生成包含垂直墙壁的路径
 * （例如，像 Minecraft 蜘蛛那样。）
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.climb';
}

/**
 * 允许该实体生成包含竖直墙壁的路径
 * （例如，像Minecraft中的蜘蛛那样）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 告诉路径查找器在寻找路径时避免造成
     * 伤害的方块。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * @remarks
     * 告诉路径查找器在寻找路径时避免传送门（如下界传送门）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly avoidPortals: boolean;
    /**
     * @remarks
     * 指示路径查找器在创建路径时是否应避免暴露在阳光下的方块。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly avoidSun: boolean;
    /**
     * @remarks
     * 告诉路径查找器在创建路径时避免水。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly avoidWater: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以从水中跳出（如海豚）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canBreach: boolean;
    /**
     * @remarks
     * 告诉路径查找器可以穿过关闭的门并将其破坏。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canBreakDoors: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以漂浮。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canFloat: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以跳跃越过方块。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canJump: boolean;
    /**
     * @remarks
     * 告诉路径查找器可以穿过关闭的门，假设AI会打开门。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canOpenDoors: boolean;
    /**
     * @remarks
     * 告诉路径查找器可以穿过关闭的铁门，假设AI会打开门。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canOpenIronDoors: boolean;
    /**
     * @remarks
     * 是否可以通过门创建路径。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canPassDoors: boolean;
    /**
     * @remarks
     * 告诉路径查找器可以在空中开始寻路。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canPathFromAir: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以在熔岩表面移动。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canPathOverLava: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以在水面移动。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canPathOverWater: boolean;
    /**
     * @remarks
     * 告诉路径查找器在水中时是否会被重力拉下。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canSink: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以在水中任意寻路，并沿该路径播放游泳动画。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canSwim: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以在水外的地面上行走。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canWalk: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以在熔岩中行走，如同在地面上行走。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canWalkInLava: boolean;
    /**
     * @remarks
     * 告诉路径查找器是否可以在地面行走或潜行于水下。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isAmphibious: boolean;
}

/**
 * 允许此实体像普通恶魂一样在空中飞行来生成路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.float';
}

/**
 * 允许该实体在空中生成路径（例如，像 Minecraft 中的鹦鹉那样）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.fly';
}

/**
 * 允许此实体通过行走、游泳、
 * 飞行和/或攀爬以及上下跳跃
 * 方块来生成路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.generic';
}

/**
 * 允许该实体在空中生成路径（例如，
 * 像 Minecraft 蜜蜂那样。）防止它们从
 * 空中掉落并进行预测性移动。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.hover';
}

/**
 * 允许该实体像普通生物一样，通过四处走动和
 * 跳跃方块来生成路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.walk';
}

/**
 * @beta
 * 为实体添加NPC能力，例如自定义皮肤、
 * 名称和对话交互。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 玩家首次与NPC交互时打开的
     * 对话场景。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    defaultScene: string;
    /**
     * @remarks
     * NPC向玩家显示的名称。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    name: string;
    /**
     * @remarks
     * NPC将使用的皮肤索引。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    skinIndex: number;
    static readonly componentId = 'minecraft:npc';
}

/**
 * 当存在于实体上时，该实体处于着火状态。
 * @example setOnFire.ts
 * ```typescript
 * import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
 * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);
 *
 *   skelly.setOnFire(20, true);
 *
 *   system.runTimeout(() => {
 *     const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
 *     log(onfire?.onFireTicksRemaining + ' fire ticks remaining.');
 *
 *     skelly.extinguishFire(true);
 *     log('Never mind. Fire extinguished.');
 *   }, 20);
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 火熄灭前剩余的刻数。
     *
     */
    readonly onFireTicksRemaining: number;
    static readonly componentId = 'minecraft:onfire';
}

/**
 * 弹射物组件控制弹射物实体的属性，并允许其向指定方向射击。
 * 当实体拥有 minecraft:projectile 组件时，此组件存在。
 * @example shootArrow.ts
 * ```typescript
 * import { DimensionLocation, EntityProjectileComponent } from '@minecraft/server';
 *
 * function shootArrow(targetLocation: DimensionLocation) {
 *   const velocity = { x: 0, y: 1, z: 5 };
 *
 *   const arrow = targetLocation.dimension.spawnEntity('minecraft:arrow', {
 *     x: targetLocation.x,
 *     y: targetLocation.y + 2,
 *     z: targetLocation.z,
 *   });
 *
 *   const projectileComp = arrow.getComponent('minecraft:projectile') as EntityProjectileComponent;
 *
 *   projectileComp?.shoot(velocity);
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 弹射物在空气中飞行时，每 tick 保持的速度比例。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    airInertia: number;
    /**
     * @remarks
     * 如果为 true，实体受伤时将着火。默认燃烧持续时间为 5 秒。可通过 onFireTime 属性修改此持续时间。如果实体免疫或处于潮湿状态，则不会着火。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * 如果为 true，弹射物被玩家击中时会生成暴击粒子。例如：玩家攻击潜影贝子弹。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * 如果为 true，弹射物受到伤害时会被销毁。例如：玩家攻击潜影贝子弹。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * 应用于弹射物的重力。当实体不在地面上时，每 tick 从弹射物的垂直位置变化中减去此值。值越大，弹射物下落越快。如果为负数，实体将上升而非下降。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    gravity: number;
    /**
     * @remarks
     * 弹射物击中实体时播放的声音。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    hitEntitySound?: string;
    /**
     * @remarks
     * 弹射物击中地面时播放的声音。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    hitGroundSound?: string;
    /**
     * @remarks
     * 弹射物击中物体时生成的粒子。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    hitParticle?: string;
    /**
     * @remarks
     * 如果为 true，且天气为雷暴，实体与天空有视线通路，则实体被击中时将被闪电击中。例如：投掷的带有引雷附魔的三叉戟。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * 弹射物在液体中飞行时，每 tick 保持的速度比例。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * 当 catchFireOnHurt 设置为 true 时，被击中的实体着火的持续时间（秒）。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * 弹射物的所有者。用于确定弹射物可以碰撞和伤害的对象。它还决定了哪个实体被指定为攻击者。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * 如果为 true，弹射物在未造成伤害时会在生物身上弹跳。例如：生成时的凋灵。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * 如果为 true，弹射物击中实体时将停止移动，如同被格挡。例如：投掷三叉戟的击中行为。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * 以给定的速度射击弹射物。弹射物将从其当前位置射出。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param velocity
     * 射击弹射物的速度。这控制弹射物射击的速度和方向。
     * @param options
     * 射击的可选配置。
     * @throws
     * 如果组件或实体不再存在，则抛出错误。
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}

/**
 * 设置实体可以推动通过的距离。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体推动通过的距离值。
     *
     * @throws 该属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:push_through';
}

/**
 * 实体从世界中移除时发生的事件数据
 * 从世界（例如，实体被卸载是因为
 * 它距离玩家过远。）
 */
export class EntityRemoveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被移除实体的ID。
     *
     */
    readonly removedEntityId: string;
    /**
     * @remarks
     * 被移除实体的类型标识符 - 例如
     * 'minecraft:skeleton'。
     *
     */
    readonly typeId: string;
}

/**
 * 允许注册一个事件，该事件在实体
 * 从游戏中移除时触发（例如，卸载后，或
 * 死亡几秒后）。
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 每当实体从游戏中移除时，
     * 将调用你的函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要调用的函数。
     * @param options
     * 此事件的其他过滤选项。
     * @returns
     * 返回一个闭包，可用于后续的取消订阅
     * 操作。
     */
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * 当实体被移除时，将取消
     * 你的函数的订阅。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要取消订阅的函数。
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}

/**
 * 当实体从世界中被移除时发生的事件的数据
 * （例如，实体因距离玩家过远而被卸载）。
 */
export class EntityRemoveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 对正在被移除的实体的引用。
     *
     */
    readonly removedEntity: Entity;
}

/**
 * 允许注册一个事件，当实体
 * 从游戏中移除时触发（例如，卸载，或
 * 死亡几秒后）。
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Will call your function every time an entity is being
     * removed from the game.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要调用的函数。
     * 此闭包以受限执行权限调用。
     * @returns
     * 返回一个可在后续取消订阅操作中使用的闭包。
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * 取消订阅你的函数，使其在实体被移除时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}

/**
 * 当添加此组件时，该组件赋予实体被其他实体骑乘的能力。
 * @example minibiomes.ts
 * ```typescript
 * import { EntityComponentTypes } from '@minecraft/server';
 * import { Test, register } from '@minecraft/server-gametest';
 * import { MinecraftBlockTypes, MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function minibiomes(test: Test) {
 *   const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
 *   const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });
 *
 *   test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });
 *
 *   const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);
 *
 *   minecartRideableComp?.addRider(pig);
 *
 *   test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
 * }
 * register('ChallengeTests', 'minibiomes', minibiomes).structureName('gametests:minibiomes').maxTicks(160);
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 用于控制此实体的坐席的从零开始的索引。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * 确定如果实体处于蹲伏状态时是否不支持交互。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * 当玩家查看并准备骑乘此实体时（通常使用触摸屏控制）应显示的文本。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly interactText: string;
    /**
     * @remarks
     * 生物成为乘客的最大宽度。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly passengerMaxWidth: number;
    /**
     * @remarks
     * 如果为 true，此实体将把具有正确 family_types 的实体拉入任何可用的坐席。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * 如果为 true，当骑手查看此实体时，此实体将被选中。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * 为此实体定义的骑手坐席数量。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * 将一个实体作为骑手添加到此实体上。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * @param rider
     * 将成为此实体骑手的实体。
     * @returns
     * 如果成功添加骑手实体，则返回 true。
     * @throws 此函数可能抛出错误。
     * @example minibiomes.ts
     * ```typescript
     * import { EntityComponentTypes } from '@minecraft/server';
     * import { Test, register } from '@minecraft/server-gametest';
     * import { MinecraftBlockTypes, MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function minibiomes(test: Test) {
     *   const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
     *   const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });
     *
     *   test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });
     *
     *   const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);
     *
     *   minecartRideableComp?.addRider(pig);
     *
     *   test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
     * }
     * register('ChallengeTests', 'minibiomes', minibiomes).structureName('gametests:minibiomes').maxTicks(160);
     * ```
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * 弹射出此实体的指定骑手。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * @param rider
     * 应从此实体弹射出的实体。
     * @throws 此函数可能抛出错误。
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * 弹射出此实体的所有骑手。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    ejectRiders(): void;
    /**
     * @remarks
     * 此实体可作为骑手支持的实体类型字符串列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * 获取当前正骑乘此实体的所有实体的列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * 获取骑乘此实体的实体在每个位置的位置和骑手数量的列表。
     *
     * @throws 此函数可能抛出错误。
     */
    getSeats(): Seat[];
}

/**
 * 该组件会在任何实体骑乘另一个实体时添加到该实体上。
 * 也就是当该实体正在骑乘另一实体时。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体当前骑乘的实体。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = 'minecraft:riding';
}

/**
 * 定义与此实体在饱和度方面的交互。
 * 包装了 `minecraft.player.saturation` 属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySaturationComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.saturation';
}

/**
 * 设置实体的视觉大小。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体上设置的缩放属性的当前值。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:scale';
}

/**
 * 皮肤ID值。可用于区分皮肤，例如
 * 村民的基础皮肤。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回实体皮肤ID标识符的值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:skin_id';
}

/**
 * 包含与世界中实体生成相关的
 * 数据。
 * @example logEntitySpawnEvent.ts
 * ```typescript
 * import { world, system, EntitySpawnAfterEvent, DimensionLocation } from '@minecraft/server';
 * import { Vector3Utils } from '@minecraft/math';
 *
 * function logEntitySpawnEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // register a new function that is called when a new entity is created.
 *   world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
 *     if (entityEvent && entityEvent.entity) {
 *       log(`New entity of type ${entityEvent.entity.typeId} created!`, 1);
 *     } else {
 *       log(`The entity event did not work as expected.`, -1);
 *     }
 *   });
 *
 *   system.runTimeout(() => {
 *     targetLocation.dimension.spawnEntity(
 *       'minecraft:horse<minecraft:ageable_grow_up>',
 *       Vector3Utils.add(targetLocation, { x: 0, y: 1, z: 0 })
 *     );
 *   }, 20);
 * }
 * ```
 */
export class EntitySpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 初始化原因（生成、出生等）。
     *
     */
    readonly cause: EntityInitializationCause;
    /**
     * @remarks
     * 已生成的实体。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    entity: Entity;
}

/**
 * 注册一个基于脚本的事件处理器，用于处理
 * 实体生成时发生的情况。
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 用于注册一个事件处理器，以处理实体生成时发生的情况。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 处理生成事件的函数。
     * @returns
     * 返回传入的回调函数。
     * @example logEntitySpawnEvent.ts
     * ```typescript
     * import { world, system, EntitySpawnAfterEvent, DimensionLocation } from '@minecraft/server';
     * import { Vector3Utils } from '@minecraft/math';
     *
     * function logEntitySpawnEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   // register a new function that is called when a new entity is created.
     *   world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
     *     if (entityEvent && entityEvent.entity) {
     *       log(`New entity of type ${entityEvent.entity.typeId} created!`, 1);
     *     } else {
     *       log(`The entity event did not work as expected.`, -1);
     *     }
     *   });
     *
     *   system.runTimeout(() => {
     *     targetLocation.dimension.spawnEntity(
     *       'minecraft:horse<minecraft:ageable_grow_up>',
     *       Vector3Utils.add(targetLocation, { x: 0, y: 1, z: 0 })
     *     );
     *   }, 20);
     * }
     * ```
     */
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * 取消注册之前订阅到此订阅事件的方法。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 之前传入 subscribe 事件中、需要取消注册的原始函数。
     */
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}

/**
 * @beta
 * 包含与实体开始潜行相关的数据。
 */
export class EntityStartSneakingAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已开始潜行的实体。
     *
     */
    readonly entity: Entity;
}

/**
 * @beta
 * 管理与实体开始潜行时相关的回调。
 */
export class EntityStartSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体开始潜行时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 用于监听实体开始潜行事件的回调函数。
     * @param options - 可选的选项，用于过滤事件。
     * @returns 返回一个用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityStartSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStartSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体开始潜行时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): void;
}

/**
 * @beta
 * 包含与实体停止潜行相关的数据。
 */
export class EntityStopSneakingAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已停止潜行的实体。
     *
     */
    readonly entity: Entity;
}

/**
 * @beta
 * 管理当实体停止潜行时
 * 连接的回调。
 */
export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体停止潜行时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 当实体停止潜行时要调用的回调。
     * @param options - 可选的用于筛选事件的选项。
     * @returns 返回一个函数，调用该函数可取消订阅此回调。
     */
    subscribe(
        callback: (arg0: EntityStopSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体停止潜行时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}

/**
 * 定义实体携带物品的能力。实体具有更高的力量时，将拥有更高的潜在携带容量和更多物品槽位。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该实体的最大力量，如实体类型定义中所定义。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly max: number;
    /**
     * @remarks
     * 已为实体设置的力量组件的当前值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:strength';
}

/**
 * 定义实体被玩家驯服的规则。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回一组可用于驯服该实体的物品。
     *
     * @throws 此属性可能在使用时抛出错误。
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * 如果实体被玩家驯服则返回true。
     *
     * @throws 此属性可能在使用时抛出错误。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 每次使用物品驯服实体的概率，介于
     * 0.0 和 1.0 之间，其中 1.0 表示 100%
     *
     * @throws 此属性可能在使用时抛出错误。
     */
    readonly probability: number;
    /**
     * @remarks
     * 返回驯服该实体的玩家，或 'undefined'
     * 如果实体未被驯服。
     *
     * @throws 此属性可能在使用时抛出错误。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回驯服该实体的玩家ID，或
     * 'undefined' 如果实体未被驯服。
     *
     * @throws 此属性可能在使用时抛出错误。
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * 设置该实体被给定玩家驯服。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param player
     * 该实体应被其驯服的玩家。
     * @returns
     * 如果实体被驯服则返回true。
     * @throws 此函数可能抛出错误。
     */
    tame(player: Player): boolean;
}

/**
 * @beta
 * 包含与被驯服实体相关的数据。
 */
export class EntityTamedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly tamingEntity: Entity;
}

/**
 * @rc
 * 管理与实体被驯服时连接的回调。
 * 
 */
export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - 此函数无法在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当实体被驯服后触发时执行的函数。
     * @param options - 可选的事件订阅选项。
     * @returns 返回传入的回调函数，可将其用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityTamedAfterEvent) => void,
        options?: EntityTamedEventOptions,
    ): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - 此函数无法在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}

/**
 * @beta
 * 包含关于实体被驯服
 * 之前的事件的信息。
 */
export class EntityTamedBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 当设置为 true 时，将取消事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 正在被驯服的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 正在尝试驯服该实体的实体。
     *
     */
    readonly tamingEntity: Entity;
}

/**
 * @rc
 * 管理与实体被驯服之前触发的回调。
 */
export class EntityTamedBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包会在受限执行权限下被调用。
     * @param options
     * 可选的事件监听选项。
     * @returns
     * 返回一个在受限执行权限下被调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityTamedBeforeEvent) => void,
        options?: EntityTamedEventOptions,
    ): (arg0: EntityTamedBeforeEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包会在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: EntityTamedBeforeEvent) => void): void;
}

/**
 * 包含基于骑乘该实体的生物来驯服可骑乘实体的选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 如果实体已被驯服，则返回 true。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * 如果实体已被玩家驯服，则返回 true。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @remarks
     * 返回驯服该实体的玩家，如果实体未被玩家驯服则返回 'undefined'。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * 返回驯服该实体的玩家 ID，如果实体未被驯服则返回 'undefined'。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * 将此可骑乘实体设置为驯服状态。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param showParticles
     * 是否在驯服该实体时显示效果粒子。
     * @throws 此函数可能抛出错误。
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks
     * 将此可骑乘实体设置为由指定玩家驯服。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param showParticles
     * 是否在驯服该实体时显示效果粒子。
     * @param player
     * 应驯服该实体的玩家。
     * @returns
     * 如果实体被驯服，则返回 true。
     * @throws 此函数可能抛出错误。
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}

/**
 * 表示关于一种实体类型的信息。
 */
export class EntityType {
    private constructor();
    /**
     * @remarks
     * 此实体类型的标识符 - 例如，
     * 'minecraft:skeleton'。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于在 .lang 文件中本地化此 EntityType 名称的键。
     *
     */
    readonly localizationKey: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:type_family';
    /**
     * @returns 该实体的类型家族列表。
     * @throws 此函数可能抛出错误。
     */
    getTypeFamilies(): string[];
    /**
     * @param typeFamily 要检查的类型家族名称。
     * @returns 如果实体具有该类型家族，则返回 true；否则返回 false。
     * @throws 此函数可能抛出错误。
     */
    hasTypeFamily(typeFamily: string): boolean;
}

/**
 * 用于访问当前世界中所有可用的
 * 实体类型。
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * 通过字符串标识符检索实体类型。
     * @param identifier - 实体类型标识符。
     * @returns 返回对应的实体类型，如果未找到则返回 undefined。
     *
     */
    static get<T = never>(identifier: EntityIdentifierType<NoInfer<T>>): EntityType | undefined;
    /**
     * @remarks
     * 检索当前世界中所有实体类型的集合。
     * @returns 返回当前世界中所有实体类型的数组。
     *
     */
    static getAll(): EntityType[];
}

/**
 * 定义此实体在水下的通用移动速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:underwater_movement';
}

/**
 * 包含与数据驱动的实体版本升级触发相关的信息。
 */
export class EntityUpgradeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 触发升级的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 被触发的数据驱动升级的名称。
     *
     */
    readonly upgradeId: string;
    /**
     * @remarks
     * 一个可更新的组件状态修改列表，这些修改是所触发升级的效果。
     *
     */
    getModifiers(): DefinitionModifier[];
}

/**
 * Contains event registration related to firing of a data
 * driven entity version upgrade.
 */
export class EntityUpgradeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a data driven
     * entity version upgrade is triggered.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityUpgradeAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: EntityUpgradeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called after a data driven
     * entity version upgrade is triggered.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): void;
}

/**
 * 用于区分实体变体的组件组，
 * 与其他实体不同（例如：豹猫, 村民）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体的当前变体值，通过
     * 组件指定。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:variant';
}

/**
 * 当添加此组件时，表示该实体想要成为一名骑手。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:wants_jockey';
}

/**
 * 跟踪实体位置的路径点。该路径点会随着实体的移动自动更新，并在实体被移除时失效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWaypoint extends Waypoint {
    /**
     * @remarks
     * 此路径点正在跟踪的实体。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 控制路径点何时显示的可见性规则，具体基于实体的状态（例如潜行、隐身、死亡）。
     *
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entityRules: EntityVisibilityRules;
    /**
     * @param entity 要跟踪的实体。
     * @param textureSelector 用于选择路径点纹理的纹理选择器。
     * @param entityRules 控制路径点基于实体状态显示的可见性规则。
     * @param color 路径点的可选颜色。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(
        entity: Entity,
        textureSelector: WaypointTextureSelector,
        entityRules: EntityVisibilityRules,
        color?: RGB,
    );
}

/**
 * 战利品物品函数，用于修改掉落的藏宝图，
 * 以标记某个位置。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplorationMapFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 决定掉落哪种类型的藏宝图。
     *
     */
    readonly destination: string;
}

/**
 * 包含有关已发生的爆炸的信息。
 */
export class ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 爆炸发生的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 爆炸的可选来源。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 受此爆炸事件影响的方块集合。
     *
     * @returns 受此爆炸事件影响的方块数组。
     */
    getImpactedBlocks(): Block[];
}

/**
 * 管理在爆炸发生时
 * 相关的回调。
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在爆炸发生时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调函数。
     * @returns - 返回传入的回调函数，便于取消订阅。
     */
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在爆炸发生时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}

/**
 * 包含有关已发生的爆炸的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消爆炸事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 更新受此爆炸事件影响的方块集合。
     *
     * @param blocks
     * 受此爆炸影响的新方块列表。
     */
    setImpactedBlocks(blocks: Block[]): void;
}

/**
 * 管理与爆炸发生前
 * 相关的回调。
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在爆炸发生前
     * 被调用。该回调可以选择更改或取消
     * 爆炸行为。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权调用。
     * @returns
     * 以受限执行特权调用的闭包。
     */
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在
     * 爆炸发生前被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权调用。
     */
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}

/**
 * 确定战利品掉落是否应被爆炸摧毁的
 * 战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionDecayFunction extends LootItemFunction {
    private constructor();
}

/**
 * 作为 Healable 组件的一部分，表示可喂食给实体以产生
 * 生命值效果的特定物品。
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * 实体食用此物品时恢复的生命值。
     * 该数字为从 0 开始的整数。示例值最高可达 40。
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * 可喂食的物品类型标识符。若未指定命名空间，则默认为 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
     *
     */
    readonly item: string;
    /**
     * @remarks
     * 喂食后所得物品的类型 ID。通常为空，但在某些场景下会使用，例如用一桶鱼喂食鹦鹉螺时，所得物品将是一个空桶。
     *
     */
    readonly resultItem?: string;
    /**
     * @remarks
     * 作为 Healable 组件的一部分，喂食物品后可能产生的可选副作用集合。
     *
     * @returns 返回一个 FeedItemEffect 数组，表示喂食该物品后可能产生的副作用。
     */
    getEffects(): FeedItemEffect[];
}

/**
 * 表示因食物物品被喂给实体而产生的一种效果。
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * 获取可能已应用于此效果的放大器。有效值为从 0 开始的整数，通常范围在 0 到 4 之间。
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 此效果因实体被喂食此物品而应用的概率。有效值范围在 0 到 1 之间。
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 获取此效果的持续时间（以刻为单位）。
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取要应用的效果的标识符。示例值包括 'fire_resistance' 或 'regeneration'。
     *
     */
    readonly name: string;
}

/**
 * 一种战利品物品函数，用于使用另一个战利品表填充掉落的容器物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FillContainerFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 用于填充容器的战利品表路径。
     * 填充。
     *
     */
    readonly lootTable: string;
}

/**
 * 表示与流体容器相关的常量。
 */
export class FluidContainer {
    private constructor();
    /**
     * @remarks
     * 表示流体容器最大填充等级的常量。
     *
     */
    static readonly maxFillLevel = 6;
    /**
     * @remarks
     * 表示流体容器最小填充等级的常量。
     *
     */
    static readonly minFillLevel = 0;
}

/**
 * @beta
 * 提供对玩家实体迷雾定义堆栈的访问，允许脚本进行推入、弹出、移除和查询活跃的迷雾定义。
 */
export class FogSettings {
    private constructor();
    /**
     * @remarks
     * 返回当前在玩家迷雾堆栈上的迷雾标识符列表，顺序从底部到顶部。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 当前在堆栈上的迷雾定义标识符数组。
     * @throws
     * 如果实体无效则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getStack(): string[];
    /**
     * @remarks
     * 返回当前存在于玩家迷雾堆栈上的标签列表。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 与堆栈上迷雾设置关联的标签字符串数组。
     * @throws
     * 如果实体无效则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 从玩家迷雾堆栈中移除最近推入的迷雾定义。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param tag
     * 可选的标签，用于标识要弹出的条目。若提供，则从堆栈顶部向底部搜索，并移除具有该标签的最近推入的条目。若省略，则无论标签如何，移除最近推入的条目。
     * @returns
     * 返回被弹出的迷雾定义的标识符；如果堆栈未改变则返回 undefined。
     * @throws
     * 如果实体无效则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    pop(tag?: string): string | undefined;
    /**
     * @remarks
     * 将新的迷雾定义推入玩家迷雾堆栈。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fogId
     * 要推入堆栈的迷雾定义的标识符（例如 'minecraft:fog_bamboo_jungle'）。
     * @param tag
     * 可选的标签，用于在堆栈上标记此迷雾定义，使其可由 pop 或 remove 定位。若省略，该条目将以标签 'untagged' 存储。
     * @returns
     * 返回迷雾定义在堆栈中插入位置的从零开始的索引。
     * @throws
     * 如果实体无效、迷雾标识符无效，或已超过 16 个堆栈上限，则抛出错误。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    push(fogId: string, tag?: string): number;
    /**
     * @remarks
     * 从玩家迷雾堆栈中移除所有带有给定标签的迷雾定义。如果未提供标签，则清除所有迷雾定义。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param tag
     * 可选的标签，用于标识要移除的条目。若省略，则清除所有迷雾定义，不论标签如何。
     * @returns
     * 如果至少移除一个条目则返回 true；如果堆栈未改变则返回 false。
     * @throws
     * 如果实体无效则抛出错误。
     *
     * {@link InvalidEntityError}
     */
    remove(tag?: string): boolean;
    /**
     * @remarks
     * 将玩家的迷雾堆栈设置为给定的迷雾标识符列表，替换任何现有条目。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fogIds
     * 要在玩家迷雾堆栈上设置的迷雾定义标识符堆栈（例如 ['minecraft:fog_bamboo_jungle']）。最多 16 个条目。
     * @param tag
     * 可选的标签，用于关联新条目，以便通过 pop 或 remove 定位它们。
     * @throws
     * 如果实体无效、提供的迷雾标识符超过 16 个，或任何迷雾标识符无效，则抛出错误。
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    setStack(fogIds: string[], tag?: string): void;
}

/**
 * 包含关于已更改的 world.gameRules 属性的信息。
 */
export class GameRuleChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 与已更改的 world.gameRules 属性相关的规则标识符。
     *
     */
    readonly rule: GameRule;
    /**
     * @remarks
     * 已更改后的 world.gameRules 属性的值。
     *
     */
    readonly value: boolean | number;
}

/**
 * 管理与 world.gameRules 属性更改时连接的回调。
 */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在 world.gameRules 属性更改时调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在 world.gameRules 属性更改时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}

/**
 * 表示世界体验的游戏规则。
 */
export class GameRules {
    private constructor();
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    commandBlockOutput: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    commandBlocksEnabled: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    doDayLightCycle: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    doEntityDrops: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    doFireTick: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    doImmediateRespawn: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    doInsomnia: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    doLimitedCrafting: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    doMobLoot: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    doMobSpawning: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    doTileDrops: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    doWeatherCycle: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    drowningDamage: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    fallDamage: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    fireDamage: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    freezeDamage: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    functionCommandLimit: number;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    keepInventory: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    maxCommandChainLength: number;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    mobGriefing: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    naturalRegeneration: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    playersSleepingPercentage: number;
    /**
     * @beta
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    playerWaypoints: PlayerWaypointsMode;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    projectilesCanBreakBlocks: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    pvp: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    randomTickSpeed: number;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    recipesUnlock: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    respawnBlocksExplode: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    sendCommandFeedback: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    showBorderEffect: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    showCoordinates: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    showDaysPlayed: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    showDeathMessages: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    showRecipeMessages: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    showTags: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    spawnRadius: number;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    tntExplodes: boolean;
    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    tntExplosionDropDecay: boolean;
}

/**
 * 包含客户端实例的输入信息。
 */
export class InputInfo {
    private constructor();
    /**
     * @remarks
     * 玩家最后使用的输入模式。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly lastInputModeUsed: InputMode;
    /**
     * @remarks
     * 玩家的触摸输入是否仅影响快捷栏。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * @param button - 要获取状态的按钮。
     * @returns 返回按钮的状态。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * @returns 返回当前的移动向量。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}

/**
 * 战利品物品条件，用于检查掉落战利品的实体是否为幼年生物。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class IsBabyCondition extends LootItemCondition {
    private constructor();
}

export class ISerializable {
    private constructor();
}

/**
 * @beta
 * 表示方块的动态属性。仅可从方块实体获取。
 * 每个内容包在每个方块实体的动态属性存储中最多可存储 1KB 数据。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBlockDynamicPropertiesComponent extends ItemComponent {
    private constructor();
    static readonly componentId = 'minecraft:block_actor_dynamic_properties';
    /**
     * @remarks
     * 返回使用提供的键存储的动态属性。键对每个内容包唯一，
     * 不能用于检索其他内容包设置的动态属性。如果未找到该键，则返回 undefined。
     *
     * @param key - 要获取的动态属性的键。
     * @returns - 返回与键关联的动态属性值；如果未找到键，则返回 undefined。
     * @throws - 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * 使用提供的键和值设置动态属性。键对每个内容包唯一，
     * 不能用于为其他内容包设置动态属性。值可以是数字、字符串或 Vector3。
     * 将属性设置为 undefined 会将其从存储中移除。
     * 存储大小使用会计入每个内容包 1KB 的限制。
     *
     * @param key - 要设置的动态属性的键。
     * @param value - 要设置的动态属性的值，可以是数字、字符串或 Vector3；设置为 undefined 时移除该属性。
     * @throws - 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * 返回此方块动态属性存储的当前大小（以字节为单位）。
     * 字节数仅计入你的内容包设置的属性。
     * 1KB 限制是每个内容包的限制。
     *
     * @returns - 此方块动态属性存储的当前字节大小。
     * @throws - 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    totalByteCount(): number;
}

/**
 * 当物品上存在此组件时，该物品即为书。可以
 * 访问和修改书的内容，并为其签名。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 书的作者名称（如果书已签名），
     * 否则为 undefined。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly author?: string;
    /**
     * @remarks
     * 书中以字符串格式表示的页面内容。
     * 非字符串格式的条目将为 undefined。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly contents: (string | undefined)[];
    /**
     * @remarks
     * 确定书是否已签名。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly isSigned: boolean;
    /**
     * @remarks
     * 书包含的页面数量。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly pageCount: number;
    /**
     * @remarks
     * 书中以 {@link
     * RawMessage} 格式表示的页面内容。非 {@link RawMessage} 格式
     * 的条目将为 undefined。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly rawContents: (RawMessage | undefined)[];
    /**
     * @remarks
     * 书的标题（如果书已签名），否则为 undefined。
     *
     * @throws 该属性在使用时可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    readonly title?: string;
    static readonly componentId = 'minecraft:book';
    /**
     * @remarks
     * 获取指定索引页面的字符串格式内容。
     *
     * @param pageIndex
     * 页面的索引。
     * @returns
     * 如果提供了有效索引且页面内容为字符串格式，则返回页面内容，
     * 否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getPageContent(pageIndex: number): string | undefined;
    /**
     * @remarks
     * 获取指定索引页面的 {@link RawMessage}
     * 格式内容（给定索引）。
     *
     * @param pageIndex
     * 页面的索引。
     * @returns
     * 如果提供了有效索引且页面内容为 {@link RawMessage} 格式，
     * 则返回页面内容，否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks
     * 在指定索引处插入一页。如果索引
     * 大于当前书本页数，将创建空白页。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式的页面内容
     * 最大限制为 256 个字符。书本最大页数限制为 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex
     * 页面的索引。
     * @param content
     * 要设置的页面内容。可以是单个字符串或
     * {@link RawMessage}，或字符串和/或 {@link
     * RawMessage} 的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    insertPage(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 移除指定索引处的页面。该页之后的现有页面
     * 将向前移动以填补空白。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex
     * 页面的索引。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidItemStackError}
     */
    removePage(pageIndex: number): void;
    /**
     * @remarks
     * 设置书本的页面内容。已有的页面
     * 将被清除。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式的页面内容
     * 最大限制为 256 个字符。
     * 书本最大页数限制为 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param contents
     * 每一页内容的数组。每个页面可以是单个
     * 字符串或 {@link RawMessage}，或字符串和/或
     * {@link RawMessage} 的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setContents(contents: ((RawMessage | string)[] | RawMessage | string)[]): void;
    /**
     * @remarks
     * 设置或创建指定页面的内容。如果索引
     * 大于当前书本页数，将创建空白页。
     * 字符串以及 {@link RawMessage} 的 JSON 表示形式的页面内容
     * 最大限制为 256 个字符。
     * 书本最大页数限制为 50 页。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pageIndex
     * 页面的索引。
     * @param content
     * 要设置的页面内容。可以是单个字符串或
     * {@link RawMessage}，或字符串和/或 {@link
     * RawMessage} 的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setPageContent(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 为书签名，赋予其标题和作者名称。一旦签名，
     * 玩家便无法再直接编辑该书。
     * 标题的最大字符限制为 16。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param title
     * 为书设置的标题。
     * @param author
     * 书作者的名称。
     * @throws 此函数可能抛出错误。
     *
     * {@link BookError}
     *
     * {@link InvalidEntityError}
     *
     * {@link InvalidItemStackError}
     */
    signBook(title: string, author: string): void;
}

/**
 * 包含可充能物品完成充能的相关信息。
 */
export class ItemCompleteUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 返回已完成充能的物品实例。
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * 返回在充能完成其周期之前剩余的持续时间（以刻为单位）。
     *
     */
    readonly useDuration: number;
}

/**
 * 管理与可充能物品充能完成相关的回调。
 */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充能物品完成充能时将调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要添加的回调。
     * @returns 返回一个可用于取消订阅的函数。
     */
    subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在可充能物品完成充能时不再被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}

/**
 * 包含与可充能物品完成充能相关的信息。
 */
export class ItemCompleteUseEvent {
    private constructor();
    /**
     * @remarks
     * 返回已完成充能的物品实例。
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
}

/**
 * 物品组件的基类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
}

/**
 * 包含关于物品在因击中实体而损坏前的信息，
 * 该损坏来自对实体的攻击。
 */
export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    /**
     * @remarks
     * 攻击实体。
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * 事件发生时，应用到物品耐久度的伤害，
     * 该伤害在事件发生时产生。
     *
     */
    durabilityDamage: number;
    /**
     * @remarks
     * 被击中的实体。
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * 用于击中实体的物品实例。
     *
     */
    itemStack?: ItemStack;
}

/**
 * 包含与可充能物品通过组件完成充能
 * 相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentCompleteUseEvent extends ItemCompleteUseEvent {
    private constructor();
}

/**
 * 包含有关正在被消耗的食物物品的信息。
 */
export class ItemComponentConsumeEvent {
    private constructor();
    /**
     * @remarks
     * 被消耗的物品实例。
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 消耗该物品的源实体。
     *
     */
    readonly source: Entity;
}

/**
 * 包含关于物品用于击中实体时的信息。
 */
export class ItemComponentHitEntityEvent {
    private constructor();
    /**
     * @remarks
     * 攻击实体。
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * 击中是否命中或产生任何效果。
     *
     */
    readonly hadEffect: boolean;
    /**
     * @remarks
     * 被击中的实体。
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * 用于击中实体的物品堆叠。
     *
     */
    readonly itemStack?: ItemStack;
}

/**
 * 包含使用物品挖掘方块的相关信息。
 */
export class ItemComponentMineBlockEvent {
    private constructor();
    /**
     * @remarks
     * 此事件影响的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 用于挖掘方块的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 被挖掘的方块置换。
     *
     */
    readonly minedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 挖掘该方块的实体。
     *
     */
    readonly source: Entity;
}

/**
 * 提供为物品注册自定义组件的功能。
 */
export class ItemComponentRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个可用于物品 JSON 配置的物品自定义组件。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param name
     * 表示此自定义组件的 ID。必须带有命名空间。该 ID 可在物品的 JSON 配置中的 'minecraft:custom_components' 物品组件下指定。
     * @param itemCustomComponent
     * 事件函数的集合，当使用此自定义组件 ID 的物品上发生对应事件时，将调用这些函数。
     * @throws 此函数可能抛出错误。
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link ItemCustomComponentAlreadyRegisteredError}
     *
     * {@link ItemCustomComponentReloadNewComponentError}
     *
     * {@link ItemCustomComponentReloadNewEventError}
     *
     * {@link ItemCustomComponentReloadVersionError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}

/**
 * 包含有关物品使用情况的信息。
 */
export class ItemComponentUseEvent {
    private constructor();
    /**
     * @remarks
     * 物品被使用时的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 使用该物品的玩家。
     *
     */
    readonly source: Player;
}

/**
 * 包含有关在方块上通过组件
 * 使用物品的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * 在方块上使用该物品的实体。
     *
     */
    readonly source: Entity;
    /**
     * @remarks
     * 此物品被使用于其上的方块置换。
     *
     */
    readonly usedOnBlockPermutation: BlockPermutation;
}

/**
 * 当此组件存在时，如果堆肥几率在 [1 - 100] 范围内，
 * 该物品可以在堆肥桶方块中被堆肥。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 这是物品在堆肥桶方块中堆肥并生成一层堆肥层的百分比几率。
     * 请注意，此 API 也会返回原版物品中可堆肥但未使用堆肥物品组件
     * 的物品的堆肥几率。
     *
     * @throws
     * 如果值超出 [1 - 100] 范围，则抛出异常。
     */
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}

/**
 * 当物品上存在该组件时，物品被实体使用后
 * 会具有冷却效果。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 表示该物品关联的冷却类别。
     *
     * @throws 当使用该属性时可能会抛出错误。
     */
    readonly cooldownCategory: string;
    /**
     * @remarks
     * 该物品冷却所需的时间，以刻为单位。
     *
     * @throws 当使用该属性时可能会抛出错误。
     */
    readonly cooldownTicks: number;
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @param player
     * 要查询冷却时间的玩家。
     * @returns
     * 物品剩余的冷却时间，以刻为单位。
     * @throws 此函数可能会抛出错误。
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * 如果物品是传递的冷却类别，则返回 true，
     * 否则返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param cooldownCategory
     * 可能与该物品关联的冷却类别。
     * @returns
     * 如果物品是给定的冷却类别，则返回 true。
     * @throws 此函数可能会抛出错误。
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks
     * 为该物品开始一个新的冷却周期。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param player
     * 要开始冷却的玩家。
     * @throws 此函数可能会抛出错误。
     */
    startCooldown(player: Player): void;
}

/**
 * 物品上自定义组件的一个实例。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentInstance extends ItemComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}

/**
 * 当物品上存在此组件时，该物品会在使用过程中承受伤害。
 * 请注意，此组件仅适用于数据驱动的物品。
 * @example giveHurtDiamondSword.ts
 * ```typescript
 * import {
 *   world,
 *   ItemStack,
 *   EntityInventoryComponent,
 *   EntityComponentTypes,
 *   ItemComponentTypes,
 *   ItemDurabilityComponent,
 *   DimensionLocation,
 * } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function giveHurtDiamondSword(targetLocation: DimensionLocation) {
 *   const hurtDiamondSword = new ItemStack(MinecraftItemTypes.DiamondSword);
 *
 *   const durabilityComponent = hurtDiamondSword.getComponent(ItemComponentTypes.Durability) as ItemDurabilityComponent;
 *
 *   if (durabilityComponent !== undefined) {
 *     durabilityComponent.damage = durabilityComponent.maxDurability / 2;
 *   }
 *
 *   for (const player of world.getAllPlayers()) {
 *     const inventory = player.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
 *     if (inventory && inventory.container) {
 *       inventory.container.addItem(hurtDiamondSword);
 *     }
 *   }
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 返回此特定物品当前的伤害等级。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    damage: number;
    /**
     * @remarks
     * 表示此物品在损坏之前可承受的伤害量。
     *
     * @throws 此属性被访问时可能会抛出错误。
     */
    readonly maxDurability: number;
    /**
     * @remarks
     * 该物品是否会损坏或丢失耐久度。设置为 true 会暂时移除物品的耐久度 HUD，
     * 并冻结物品的耐久度损失。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    unbreakable: boolean;
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * 返回在给定的耐久附魔等级下，使用 damageRange 属性计算出的该物品受损的最大几率。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param unbreakingEnchantmentLevel
     * 计算受损几率时要考虑的耐久附魔等级。
     * 传入的 unbreaking 参数必须在 [0, 3] 范围内。
     * 默认值：0
     * 范围：[0, 3]
     * @returns 返回该物品受损的最大几率。
     * @throws 当 unbreakingEnchantmentLevel 超出 [0, 3] 范围时，此函数会抛出错误。
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks
     * 用于计算物品损坏几率的一组数字范围，损坏几率将落在此范围内。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回用于计算损坏几率的数字范围。
     * @throws 此函数可能抛出错误。
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}

/**
 * 当物品上存在该组件时，此物品可被染色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDyeableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 设置并返回物品当前的颜色。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    color?: RGB;
    /**
     * @remarks
     * 返回物品的默认颜色。
     *
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly defaultColor?: RGB;
    static readonly componentId = 'minecraft:dyeable';
}

/**
 * 当物品上存在此组件时，该物品可以附加附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws 此属性在被使用时可能抛出错误。
     */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = 'minecraft:enchantable';
    /**
     * @remarks
     * 向物品实例添加一个附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantment
     * 要添加的附魔接口。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 当附魔类型不存在时抛出。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 当附魔等级超出给定附魔类型的允许范围时抛出。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: 当附魔与物品实例不兼容时抛出。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /**
     * @remarks
     * 向物品实例添加一组附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantments
     * 要添加的附魔列表。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果任一附魔类型不存在则抛出。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 如果任一附魔等级超出给定附魔类型的允许范围则抛出。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: 如果任一附魔与物品实例不兼容则抛出。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /**
     * @remarks
     * 检查附魔是否可以添加到物品实例。
     *
     * @param enchantment
     * 要添加的附魔接口。
     * @returns
     * 如果附魔可以添加到物品实例，则返回 true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 当附魔类型不存在时抛出。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 当附魔等级超出给定附魔类型的允许范围时抛出。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * 从物品实例获取指定类型的附魔。
     *
     * @param enchantmentType
     * 要获取的附魔类型。
     * @returns
     * 如果物品实例上存在该附魔，则返回该附魔。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 当附魔类型不存在时抛出。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * 获取物品实例上的所有附魔。
     *
     * @returns
     * 返回物品实例上的附魔列表。
     * @throws 此函数可能抛出错误。
     */
    getEnchantments(): Enchantment[];
    /**
     * @remarks
     * 检查物品实例是否拥有给定的附魔类型。
     *
     * @param enchantmentType
     * 要检查的附魔类型。
     * @returns
     * 如果物品实例拥有该附魔类型，则返回 true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 当附魔类型不存在时抛出。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * 移除该物品实例上的所有附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * 移除指定类型的附魔。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param enchantmentType
     * 要移除的附魔类型。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 当附魔类型不存在时抛出。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

/**
 * 当存在于物品上时，该物品可被实体消耗。请注意，此组件仅适用于数据驱动的物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 如果为 true，则玩家始终可以食用该物品（即使不饿）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * 表示该食物物品被食用时会为实体提供多少营养值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly nutrition: number;
    /**
     * @remarks
     * 当物品被食用时，此值将根据公式（营养值 * 饱和度修饰符 * 2）用于应用饱和度增益效果。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * 若指定，则会将当前使用的物品转换为该属性所指定的物品。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}

/**
 * 该组件添加到带有 `Storage Item` 组件的物品上。
 * 可以访问和修改此物品的库存容器。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemInventoryComponent extends ItemComponent {
    private constructor();
    /**
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * 当此组件存在于物品上时，该物品即为药水物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 与药水物品关联的 PotionDeliveryType。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    readonly potionDeliveryType: PotionDeliveryType;
    /**
     * @remarks
     * 与药水物品关联的 PotionEffectType。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    readonly potionEffectType: PotionEffectType;
    static readonly componentId = 'minecraft:potion';
}

/**
 * 包含与可充能物品相关的信息，当玩家使用完该物品并释放蓄力动作时。
 */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 返回触发此物品事件的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * 返回以刻为单位的剩余时间，在充能完成其周期之前。
     *
     */
    readonly useDuration: number;
}

/**
 * 管理与可充电物品释放充能相关的回调函数。
 * 该回调在物品释放充能时触发。
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，该函数将在可充电物品
     * 释放充能时被调用。
     * @param callback 要添加的回调函数。
     * @returns 返回用于取消订阅的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当可充电物品释放充能时被调用的回调函数。
     * @param callback 要移除的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}

/**
 * 定义一个物品集合。
 * @example itemStacks.ts
 * ```typescript
 * import { ItemStack, DimensionLocation } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function itemStacks(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
 *   const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
 *   const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };
 *
 *   const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1);
 *   const onePickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe, 1);
 *   const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5);
 *
 *   log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
 *   targetLocation.dimension.spawnItem(oneEmerald, oneItemLoc);
 *
 *   log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
 *   targetLocation.dimension.spawnItem(fiveEmeralds, fiveItemsLoc);
 *
 *   log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
 *   targetLocation.dimension.spawnItem(onePickaxe, diamondPickaxeLoc);
 * }
 * ```
 * @example givePlayerEquipment.ts
 * ```typescript
 * import {
 *   world,
 *   ItemStack,
 *   EntityEquippableComponent,
 *   EquipmentSlot,
 *   EntityComponentTypes,
 *   DimensionLocation,
 * } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function givePlayerEquipment(targetLocation: DimensionLocation) {
 *   const players = world.getAllPlayers();
 *
 *   const armorStandLoc = { x: targetLocation.x, y: targetLocation.y, z: targetLocation.z + 4 };
 *   const armorStand = players[0].dimension.spawnEntity(MinecraftItemTypes.ArmorStand, armorStandLoc);
 *
 *   const equipmentCompPlayer = players[0].getComponent(EntityComponentTypes.Equippable) as EntityEquippableComponent;
 *   if (equipmentCompPlayer) {
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
 *     equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
 *   }
 *
 *   const equipmentCompArmorStand = armorStand.getComponent(EntityComponentTypes.Equippable) as EntityEquippableComponent;
 *   if (equipmentCompArmorStand) {
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
 *     equipmentCompArmorStand.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
 *   }
 * }
 * ```
 * @example spawnFeatherItem.ts
 * ```typescript
 * import { ItemStack, DimensionLocation } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function spawnFeatherItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
 *
 *   targetLocation.dimension.spawnItem(featherItem, targetLocation);
 *   log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
 * }
 * ```
 */
export class ItemStack {
    /**
     * @remarks
     * 物品堆叠中的物品数量。有效值范围为 1-255。提供的值将被限制到物品的最大堆叠大小。
     *
     * 此属性在限制执行模式下无法编辑。
     *
     * 范围：[1, 255]
     * @throws
     * 如果值超出 1-255 范围则抛出异常。
     */
    amount: number;

    /**
     * @remarks
     * 返回物品是否可堆叠。如果物品的最大堆叠大小大于 1 且不包含任何自定义数据或属性，则该物品被视为可堆叠。
     *
     */
    readonly isStackable: boolean;

    /**
     * @remarks
     * 获取或设置物品是否在死亡时保留。
     *
     * 此属性在限制执行模式下无法编辑。
     *
     */
    keepOnDeath: boolean;

    /**
     * @remarks
     * 用于 .lang 文件中该物品名称本地化的键。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly localizationKey: string;

    /**
     * @remarks
     * 获取或设置物品的锁定模式。默认值为 `ItemLockMode.none`。
     *
     * 此属性在限制执行模式下无法编辑。
     *
     */
    lockMode: ItemLockMode;

    /**
     * @remarks
     * 最大堆叠大小。该值根据物品类型而不同。例如，火把的最大堆叠大小为 64，而鸡蛋的最大堆叠大小为 16。
     *
     */
    readonly maxAmount: number;

    /**
     * @remarks
     * 此物品堆叠的给定名称。悬停在物品上时会显示名称标签。将名称标签设置为空字符串或 `undefined` 将移除名称标签。
     *
     * 此属性在限制执行模式下无法编辑。
     *
     * @throws
     * 如果长度超过 255 个字符则抛出异常。
     */
    nameTag?: string;

    /**
     * @remarks
     * 物品的类型。
     *
     */
    readonly 'type': ItemType;

    /**
     * @remarks
     * 物品堆叠类型的标识符。如果未指定命名空间，则默认为 'minecraft:'。示例包括 'wheat' 或 'apple'。
     *
     */
    readonly typeId: string;

    /**
     * @remarks
     * 物品堆叠中所有物品的总重量，加上由 `Storage Item` 组件定义的物品容器中所有物品的重量。每个物品的重量可通过 `Storage Weight Modifier` 组件修改。
     *
     */
    readonly weight: number;

    /**
     * @remarks
     * 创建一个新的物品堆叠实例，用于在游戏世界中。
     *
     * @param itemType
     * 要创建的物品类型。请参阅 {@link @minecraft/vanilla-data.MinecraftItemTypes} 枚举，了解 Minecraft 体验中的标准物品类型列表。
     * @param amount
     * 物品堆叠中的物品数量，范围 1-255。提供的值将被限制到物品的最大堆叠大小。注意某些物品只能有一个物品在堆叠中。
     * 默认值：1
     * 范围：[1, 255]
     * @throws
     * 如果 `itemType` 无效，或 `amount` 超出 1-255 范围，则抛出异常。
     */
    constructor(itemType: ItemType | string, amount?: number);

    /**
     * @remarks
     * 清除此物品堆叠上设置的所有动态属性。
     *
     */
    clearDynamicProperties(): void;

    /**
     * @remarks
     * 创建物品堆叠的精确副本，包括任何自定义数据或属性。
     *
     * @returns
     * 返回此物品堆叠的副本。
     */
    clone(): ItemStack;

    /**
     * @remarks
     * 获取此物品在冒险模式下可以破坏的方块类型列表。
     *
     * 此函数在限制执行模式下无法调用。
     *
     */
    getCanDestroy(): string[];

    /**
     * @remarks
     * 获取此物品在冒险模式下可以放置在其上的方块类型列表。
     *
     * 此函数在限制执行模式下无法调用。
     *
     */
    getCanPlaceOn(): string[];

    /**
     * @remarks
     * 获取物品堆叠的组件（表示附加能力）。
     *
     * @param componentId
     * 组件的标识符（例如 'minecraft:food'）。如果未指定命名空间前缀，则默认为 'minecraft:'。可用的组件 ID 包括 {@link ItemComponentTypes} 枚举中的 ID 以及通过 {@link ItemComponentRegistry} 注册的自定义组件 ID。
     * @returns
     * 如果组件存在于物品堆叠上，则返回该组件，否则返回 undefined。
     * @example giveHurtDiamondSword.ts
     * ```typescript
     * import {
     *   world,
     *   ItemStack,
     *   EntityInventoryComponent,
     *   EntityComponentTypes,
     *   ItemComponentTypes,
     *   ItemDurabilityComponent,
     *   DimensionLocation,
     * } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function giveHurtDiamondSword(targetLocation: DimensionLocation) {
     *   const hurtDiamondSword = new ItemStack(MinecraftItemTypes.DiamondSword);
     *
     *   const durabilityComponent = hurtDiamondSword.getComponent(ItemComponentTypes.Durability) as ItemDurabilityComponent;
     *
     *   if (durabilityComponent !== undefined) {
     *     durabilityComponent.damage = durabilityComponent.maxDurability / 2;
     *   }
     *
     *   for (const player of world.getAllPlayers()) {
     *     const inventory = player.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *     if (inventory && inventory.container) {
     *       inventory.container.addItem(hurtDiamondSword);
     *     }
     *   }
     * }
     * ```
     */
    getComponent<T extends string>(componentId: T): ItemComponentReturnType<T> | undefined;

    /**
     * @remarks
     * 返回此物品堆叠上存在的所有脚本组件。
     *
     */
    getComponents(): ItemComponent[];

    /**
     * @remarks
     * 返回属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回属性的值，如果属性未设置，则返回 undefined。
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;

    /**
     * @remarks
     * 返回此实体上已使用的可用动态属性标识符集合。
     *
     * @returns
     * 此实体上设置的动态属性字符串数组。
     */
    getDynamicPropertyIds(): string[];

    /**
     * @remarks
     * 返回当前为此实体存储的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这对于诊断性能警告信号可能很有用 - 例如，如果实体有大量关联的动态属性（数兆字节），则可能在不同设备上加载缓慢。
     *
     */
    getDynamicPropertyTotalByteCount(): number;

    /**
     * @remarks
     * 返回 ItemStack 的 lore 值（次要显示字符串）。
     *
     * @returns
     * 一个 lore 行数组。如果物品没有 lore，则返回空数组。
     */
    getLore(): string[];

/**
     * @remarks
     * 返回物品实例的 lore 值——一个次要显示字符串。
     * 字符串形式的 lore 行将转换为 {@link RawMessage} 并置于 {@link RawMessage.text} 下。
     *
     * @returns
     * 一个 lore 行数组。如果物品没有 lore，则返回空数组。
     */
    getRawLore(): RawMessage[];

    /**
     * @remarks
     * 返回与此物品堆关联的一组标签。
     *
     */
    getTags(): string[];

    /**
     * @remarks
     * 如果指定组件存在于该物品堆上，则返回 true。
     *
     * @param componentId
     * 要获取的组件标识符（例如 'minecraft:food'）。如果未指定命名空间前缀，则默认为 'minecraft:'。
     * @returns
     * 如果组件存在则返回 true，否则返回 false。
     */
    hasComponent(componentId: string): boolean;

    /**
     * @remarks
     * 检查此物品堆是否具有特定的关联标签。
     *
     * @param tag
     * 要搜索的标签。
     * @returns
     * 如果物品堆有关联标签则返回 true，否则返回 false。
     */
    hasTag(tag: string): boolean;

    /**
     * @remarks
     * 返回此物品堆是否可与给定的 `itemStack` 堆叠。通过比较物品类型以及物品堆关联的自定义数据和属性来确定。不考虑每个物品堆的数量，但对于不可堆叠的物品，始终返回 false。
     *
     * @param itemStack
     * 要检查堆叠兼容性的物品堆。
     * @returns
     * 如果物品堆与传入的 itemStack 可堆叠则返回 true；对于不可堆叠的物品返回 false。
     */
    isStackableWith(itemStack: ItemStack): boolean;

    /**
     * @remarks
     * 版本安全的检查物品是否匹配的方法。
     *
     * @param itemName
     * 物品的标识符。
     * @param states
     *  仅适用于方块。一组可选的用于比较的状态。如果未指定 states，则更广泛地匹配类型集合。
     * @returns
     * 返回一个布尔值，指示指定的物品是否匹配。
     */
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;

    /**
     * @remarks
     * 在冒险模式下此物品可破坏的方块类型列表。方块名称会显示在物品的工具提示中。将值设置为 undefined 将清除列表。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param blockIdentifiers
     * 此物品可破坏的方块类型字符串列表。
     * @throws
     * 如果提供的任何方块标识符无效，则抛出错误。
     * @example giveDestroyRestrictedPickaxe.ts
     * ```typescript
     * import { world, ItemStack, EntityInventoryComponent, DimensionLocation } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function giveDestroyRestrictedPickaxe(targetLocation: DimensionLocation) {
     *   for (const player of world.getAllPlayers()) {
     *     const specialPickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe);
     *     specialPickaxe.setCanDestroy([MinecraftItemTypes.Cobblestone, MinecraftItemTypes.Obsidian]);
     *
     *     const inventory = player.getComponent('inventory') as EntityInventoryComponent;
     *     if (inventory === undefined || inventory.container === undefined) {
     *       return;
     *     }
     *
     *     inventory.container.addItem(specialPickaxe);
     *   }
     * }
     * ```
     */
    setCanDestroy(blockIdentifiers?: string[]): void;

    /**
     * @remarks
     * 在冒险模式下此物品可放置的方块类型列表。仅适用于方块物品。方块名称会显示在物品的工具提示中。将值设置为 undefined 将清除列表。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param blockIdentifiers
     * 此物品可放置的方块类型字符串列表。
     * @throws
     * 如果提供的任何方块标识符无效，则抛出错误。
     * @example givePlaceRestrictedGoldBlock.ts
     * ```typescript
     * import { world, ItemStack, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function givePlaceRestrictedGoldBlock(targetLocation: DimensionLocation) {
     *   for (const player of world.getAllPlayers()) {
     *     const specialGoldBlock = new ItemStack(MinecraftItemTypes.GoldBlock);
     *     specialGoldBlock.setCanPlaceOn([MinecraftItemTypes.GrassBlock, MinecraftItemTypes.Dirt]);
     *
     *     const inventory = player.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
     *     if (inventory === undefined || inventory.container === undefined) {
     *       return;
     *     }
     *
     *     inventory.container.addItem(specialGoldBlock);
     *   }
     * }
     * ```
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;

    /**
     * @remarks
     * 设置多个具有特定值的动态属性。
     *
     * @param values
     * 要设置的动态属性的键值对记录。如果数据值为 null，则移除该属性。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;

    /**
     * @remarks
     * 将指定属性设置为一个值。注意：此函数仅适用于不可堆叠的物品。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性的数据值。如果值为 null，则移除该属性。
     * @throws
     * 如果物品堆是可堆叠的，则抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;

    /**
     * @remarks
     * 设置物品实例的 lore 值——一个次要显示字符串。如果设置为空字符串或 undefined，则清除 lore 列表。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param loreList
     * lore 行列表。列表中的每个元素代表一个新行。最大 lore 行数为 20，最大 lore 行长度为 50 个字符。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     * @example diamondAwesomeSword.ts
     * ```typescript
     * import { EntityComponentTypes, ItemStack, Player } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function giveAwesomeSword(player: Player) {
     *   const diamondAwesomeSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);
     *   diamondAwesomeSword.setLore(['§c§lDiamond Sword of Awesome§r', '+10 coolness', '§p+4 shiny§r']);
     *
     *   // hover over/select the item in your inventory to see the lore.
     *   const inventory = player.getComponent(EntityComponentTypes.Inventory);
     *   if (inventory === undefined || inventory.container === undefined) {
     *     return;
     *   }
     *
     *   inventory.container.setItem(0, diamondAwesomeSword);
     * }
     * ```
     */
    setLore(loreList?: (RawMessage | string)[]): void;

}

/**
 * 包含与可充能物品开始充能相关的信息。
 */
export class ItemStartUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在开始充能的受影响物品实例。
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * 返回充能完成其周期前剩余的时间（以刻为单位）。
     *
     */
    readonly useDuration: number;
}

/**
 * 管理与可充能物品开始充能时
 * 相关的回调。
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充能物品开始充能时将调用该回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 将在可充能物品开始充能时被调用的回调。
     * @returns - 被添加的回调。
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在可充能物品开始充能时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}

/**
 * 包含物品在方块上使用的相关信息。当玩家按下“使用物品/放置方块”按钮成功使用物品或放置方块时，
 * 触发此事件。在执行建造操作时，该事件会在首次交互的方块上触发。
 * 注意：此事件不能与锄头或斧头物品一起使用。
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 物品被使用的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 物品被使用的方块的面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 正在开始使用的受影响的物品实例。在某些游戏场景中可能为 undefined，例如空手按下按钮时。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
}

/**
 * 管理与物品开始在方块上使用事件相关的回调。
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当物品在方块上使用时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当物品在方块上使用时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}

/**
 * 包含与可充能物品完成其使用周期，
 * 或玩家对该物品停止使用动作相关的信息。
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在停止充能的受影响物品实例。
     * 当传送到不同维度时，ItemStopUseAfterEvent 可能会被触发，此时该值可能为 undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * 返回以刻为单位的剩余时间，表示充能完成其周期前剩余的持续时间。
     *
     */
    readonly useDuration: number;
}

/**
 * 管理与已注册 minecraft:chargeable 组件的物品停止充能相关的回调。
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充能物品停止充能时将调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 停止充能时调用的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在可充能物品停止充能时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}

/**
 * 包含有关物品停止在方块上使用的相关信息。此事件在玩家通过按下“使用物品 / 放置方块”按钮成功使用物品或放置方块时触发。
 * 如果放置了多个方块，此事件仅在方块放置开始时触发一次。
 * 注意：此事件不能用于锄头或斧头类物品。
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 物品所使用的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在方块上使用的受影响物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
}

/**
 * 管理与物品停止对方块使用事件相关的回调。
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当物品停止对方块使用时将调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 当物品停止对方块使用时将调用的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在物品对方块使用时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}

/**
 * 表示物品的类型 - 例如，羊毛。
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * 返回物品类型的标识符 - 例如，
     * 'minecraft:apple'。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于 .lang 文件中此 ItemType 名称
     * 本地化的键。
     *
     */
    readonly localizationKey: string;
}

/**
 * 返回 Minecraft 中已注册的物品类型集合。
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * 返回指定的物品类型，如果存在的话。
     * @param itemId - 物品的标识符字符串。
     * @returns 如果找到该物品类型，则返回对应的 ItemType 对象；否则返回 undefined。
     *
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * 检索所有在 Minecraft 中注册的
     * 可用物品类型。
     * @returns 所有可用物品类型的数组。
     *
     */
    static getAll(): ItemType[];
}

/**
 * 包含与在方块上使用物品相关的信息。
 * 此事件在玩家使用的物品
 * 成功触发实体交互时触发。
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在使用的被影响的物品实例。
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
}

/**
 * 管理连接至物品使用事件的回调。
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在物品被使用时会调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 物品使用事件触发时要调用的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在物品被使用时会调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}

/**
 * 包含与物品正在被使用相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，将取消物品使用行为。
     *
     */
    cancel: boolean;
}

/**
 * 管理在使用物品之前触发的回调。
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在物品使用前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权调用。
     * @returns
     * 以受限执行特权调用的闭包。
     */
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在物品使用前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权调用。
     */
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}

/**
 * 包含在方块上使用物品的
 * 相关信息。
 */
export class ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * 该事件影响的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 物品被使用时方块的面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 相对于物品所使用方块的
     * 底部西北角的位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 在方块上使用的物品实例。
     *
     */
    readonly itemStack: ItemStack;
}

/**
 * 战利品物品条件，检查掉落来源是否被特定类型的实体杀死。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class KilledByEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     * 示例：'minecraft:skeleton'。
     *
     */
    readonly entityType: string;
}

/**
 * 战利品条件，用于检查掉落战利品的来源是否
 * 被玩家杀死。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class KilledByPlayerCondition extends LootItemCondition {
    private constructor();
}

/**
 * 战利品条件，用于检查战利品掉落的来源是否被
 * 玩家或玩家的宠物杀死。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class KilledByPlayerOrPetsCondition extends LootItemCondition {
    private constructor();
}

/**
 * 包含与拉杆激活或停用相关的
 * 更改信息。
 * @example leverActionEvent.ts
 * ```typescript
 * import { world, system, BlockPermutation, LeverActionAfterEvent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function leverActionEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // set up a lever
 *   const cobblestone = targetLocation.dimension.getBlock(targetLocation);
 *   const lever = targetLocation.dimension.getBlock({
 *     x: targetLocation.x,
 *     y: targetLocation.y + 1,
 *     z: targetLocation.z,
 *   });
 *
 *   if (cobblestone === undefined || lever === undefined) {
 *     log('Could not find block at location.');
 *     return -1;
 *   }
 *
 *   cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
 *   lever.setPermutation(
 *     BlockPermutation.resolve(MinecraftBlockTypes.Lever).withState('lever_direction', 'up_north_south')
 *   );
 *
 *   world.afterEvents.leverAction.subscribe((leverActionEvent: LeverActionAfterEvent) => {
 *     const eventLoc = leverActionEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
 *       log('Lever activate event at tick ' + system.currentTick);
 *     }
 *   });
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果拉杆已激活（即正在传输
     * 电力），则为 true。
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * 可选的触发拉杆激活的玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理与拉杆移动（激活或取消激活）相关的回调。
 * @example leverActionEvent.ts
 * ```typescript
 * import { world, system, BlockPermutation, LeverActionAfterEvent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function leverActionEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // set up a lever
 *   const cobblestone = targetLocation.dimension.getBlock(targetLocation);
 *   const lever = targetLocation.dimension.getBlock({
 *     x: targetLocation.x,
 *     y: targetLocation.y + 1,
 *     z: targetLocation.z,
 *   });
 *
 *   if (cobblestone === undefined || lever === undefined) {
 *     log('Could not find block at location.');
 *     return -1;
 *   }
 *
 *   cobblestone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone));
 *   lever.setPermutation(
 *     BlockPermutation.resolve(MinecraftBlockTypes.Lever).withState('lever_direction', 'up_north_south')
 *   );
 *
 *   world.afterEvents.leverAction.subscribe((leverActionEvent: LeverActionAfterEvent) => {
 *     const eventLoc = leverActionEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
 *       log('Lever activate event at tick ' + system.currentTick);
 *     }
 *   });
 * }
 * ```
 */
export class LeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当拉杆被移动（激活或取消激活）时将调用该回调。
     *
     * 不能在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     * @param callback - 要添加的回调函数，参数为 LeverActionAfterEvent 事件。
     * @returns 返回传入的回调函数本身，可用于取消订阅。
     *
     */
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在拉杆被移动（激活或取消激活）时不再被调用。
     *
     * 不能在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     * @param callback - 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}

/**
 * 在点之间进行线性插值的样条。
 */
export class LinearSpline {
    /**
     * @remarks
     * 线性样条的控制点。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    controlPoints: Vector3[];
}

/**
 * Volume composed of an unordered container of unique block
 * locations.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ListBlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * Creates a new instance of ListBlockVolume.
     *
     * @param locations
     * Initial array of block locations that ListBlockVolume will
     * be constructed with.
     */
    constructor(locations: Vector3[]);
    /**
     * @remarks
     * Insert block locations into container.
     *
     * @param locations
     * Array of block locations to be inserted into container.
     */
    add(locations: Vector3[]): void;
    /**
     * @remarks
     * Remove block locations from container.
     *
     * @param locations
     * Array of block locations to be removed from container.
     */
    remove(locations: Vector3[]): void;
}

/**
 * 指向世界中固定位置的路标。
 * 与实体路标不同，位置路标始终有效，并且可以更新其位置。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationWaypoint extends Waypoint {
    /**
     * @throws 此函数可能引发错误。
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(dimensionLocation: DimensionLocation, textureSelector: WaypointTextureSelector, color?: RGB);
    /**
     * @remarks
     * 更新此路标指向的维度和位置。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * @param dimensionLocation
     * 路标的新 {@link DimensionLocation}（维度和坐标）。
     */
    setDimensionLocation(dimensionLocation: DimensionLocation): void;
}

/**
 * 管理玩家定位栏上显示的路径点集合。允许添加、移除和查询路径点，
 * 并具有最大容量限制。
 *
 * 定位栏中的无效路径点将在下一个游戏刻自动移除。
 * 这包括与已从世界中移除的实体绑定的路径点。
 *
 * 注意：你可以使用 `playerWaypoints` {@link GameRule} 控制是否自动将原版玩家路径点添加到定位栏。
 * 可接受值为 `off`（玩家不会显示在定位栏上）和 `everyone`（所有玩家都显示在定位栏上）。
 *
 * 注意：你只能修改、移除或查询由本包添加的路径点。
 * @example sharedWaypoint.ts
 * ```typescript
 * /\*
 * import { world, LocationWaypoint, WaypointTextureSelector, WaypointTexture } from "@minecraft/server"
 *
 * function sharedWaypoint() {
 *   const players = world.getAllPlayers();
 *
 *   if (players.length < 2) {
 *     console.warn("Need at least 2 players for this example.");
 *     return;
 *   }
 *
 *   const playerA = players[0];
 *   const playerB = players[1];
 *
 *   // Create a single waypoint at a specific location
 *   const textureSelector: WaypointTextureSelector = {
 *     textureBoundsList: [
 *       { lowerBound: 0, texture: WaypointTexture.Circle }
 *     ]
 *   };
 *
 *   const waypoint = new LocationWaypoint(
 *     { dimension: playerA.dimension, x: 100, y: 64, z: 100 },
 *     textureSelector,
 *     { red: 1, green: 0, blue: 0 } // Initially red
 *   );
 *
 *   // Add the same waypoint to both players' locator bars
 *   playerA.locatorBar.addWaypoint(waypoint);
 *   playerB.locatorBar.addWaypoint(waypoint);
 *
 *   // Change the color - this affects both players
 *   waypoint.color = { red: 0, green: 1, blue: 0 }; // Now green for both players
 * }
 * *\/
 * ```
 */
export class LocatorBar {
    private constructor();
    /**
     * @remarks
     * 定位栏中当前的路径点数量。
     *
     */
    readonly count: number;
    /**
     * @remarks
     * 可添加到定位栏的路径点最大数量。
     *
     */
    readonly maxCount: number;
    /**
     * @remarks
     * 将路径点添加到定位栏。如果路径点已存在、达到最大路径点数量限制
     * 或路径点无效，则抛出错误。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要添加到定位栏的 {@link Waypoint}。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 发生引擎错误时抛出。
     *
     * {@link InvalidWaypointError} - 路径点无效时抛出。
     *
     * {@link LocatorBarError} - 路径点已存在或达到最大数量限制时抛出。
     */
    addWaypoint(waypoint: Waypoint): void;
    /**
     * @remarks
     * 返回当前定位栏中所有路径点的数组。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 当前定位栏中所有路径点的数组。
     */
    getAllWaypoints(): Waypoint[];
    /**
     * @remarks
     * 检查指定路径点是否存在于定位栏中。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要检查的 {@link Waypoint}。
     * @returns 如果路径点存在，返回 `true`；否则返回 `false`。
     */
    hasWaypoint(waypoint: Waypoint): boolean;
    /**
     * @remarks
     * 从定位栏中移除所有路径点，将其完全清空。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 发生引擎错误时抛出。
     */
    removeAllWaypoints(): void;
    /**
     * @remarks
     * 从定位栏中移除指定路径点。如果路径点不存在于定位栏中，则抛出错误。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要从定位栏中移除的 {@link Waypoint}。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 发生引擎错误时抛出。
     *
     * {@link LocatorBarError} - 路径点不存在于定位栏中时抛出。
     */
    removeWaypoint(waypoint: Waypoint): void;
}

/**
 * 用于战利品物品的函数，如果提供的工具拥有抢夺附魔，则会掉落额外物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootingEnchantFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择要掉落的额外物品数量的值范围。包含最小值和最大值。
     *
     */
    readonly count: minecraftcommon.NumberRange;
}

/**
 * 表示一个包含要掉落物品的战利品池条目。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootItem extends LootPoolEntry {
    private constructor();
    readonly conditions: LootItemCondition[];
    readonly functions: LootItemFunction[];
    /**
     * @remarks
     * 此条目中包含的物品名称。
     *
     */
    readonly name?: ItemType;
}

/**
 * 一个抽象基类，所有战利品物品条件均派生自该类。
 * 战利品物品条件是一组规则或要求，必须满足这些规则或要求，战利品才会掉落。
 */
export class LootItemCondition {
    private constructor();
}

/**
 * 一个抽象基类，所有战利品物品函数都派生自该类。
 * 战利品物品函数可以在战利品掉落发生时以多种方式修改它们，
 * 可选依赖于一组必须满足的条件。
 */
export class LootItemFunction {
    private constructor();
    readonly conditions: LootItemCondition[];
}

/**
 * 一个条目集合，这些条目分别决定战利品掉落。
 * 可以包含决定掉落结果的值，包括抽取次数、额外抽取次数和等级。
 */
export class LootPool {
    private constructor();
    /**
     * @remarks
     * 根据玩家的幸运等级返回战利品池额外抽取的次数，表示为从最小抽取次数到最大抽取次数的范围。
     *
     */
    readonly bonusRolls: minecraftcommon.NumberRange;
    readonly conditions: LootItemCondition[];
    /**
     * @remarks
     * 获取战利品池中包含的所有战利品池条目的完整列表。
     *
     */
    readonly entries: LootPoolEntry[];
    /**
     * @remarks
     * 返回战利品池将被抽取的次数，表示为从最小抽取次数到最大抽取次数的范围。
     *
     */
    readonly rolls: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 获取给定战利品表的战利品池等级值（如果存在）。
     *
     */
    readonly tiers?: LootPoolTiers;
}

/**
 * 表示战利品表中的一个条目，描述一次战利品掉落时可能掉落的物品。
 * 可以包含一个物品、另一个战利品表、指向另一个战利品表的路径，或一个空的掉落物。
 */
export class LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 获取给定战利品池条目的质量。
     *
     */
    readonly quality: number;
    /**
     * @remarks
     * 获取给定战利品池条目的子表。
     *
     */
    readonly subTable?: LootPoolEntry;
    /**
     * @remarks
     * 获取给定战利品池条目的权重。
     *
     */
    readonly weight: number;
}

/**
 * 表示阶层战利品池中决定战利品掉落的数值。来自阶层战利品池的潜在掉落是有序的，
 * 并通过此对象中的数值控制的逻辑来选择。
 */
export class LootPoolTiers {
    private constructor();
    /**
     * @remarks
     * 每次额外掷骰尝试升级掉落物品阶层的概率。
     *
     */
    readonly bonusChance: number;
    /**
     * @remarks
     * 战利品掉落尝试升级其阶层的次数，从而增加其在战利品池条目数组中的位置，导致更高阶层的掉落。
     *
     */
    readonly bonusRolls: number;
    /**
     * @remarks
     * 表示确定掉落哪个阶层战利品的起始点上界。下界始终为1。例如，值为3将导致阶层掉落逻辑从战利品池条目数组中随机选择1到3之间的位置开始。
     *
     */
    readonly initialRange: number;
}

/**
 * 表示单个战利品表，它决定了在杀死生物、破坏方块、填充
 * 容器等情况下生成的物品。
 */
export class LootTable {
    private constructor();
    /**
     * @remarks
     * 返回表示此战利品表的 JSON 文件的路径
     * 此文件不包含文件扩展名，也不包含 'loot_tables/'
     * 文件夹前缀。示例：`entities/creeper`。
     *
     */
    readonly path: string;
    /**
     * @remarks
     * 返回给定战利品表上的战利品池数组。
     *
     */
    readonly pools: LootPool[];
}

/**
 * 表示一个战利品池条目，其中包含另一个独立的嵌套战利品表。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableEntry extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 获取存储在父战利品池中作为子表的战利品表。
     *
     */
    readonly lootTable: LootTable;
}

/**
 * 战利品表相关 API 的管理器。允许根据方块和实体的战利品表生成掉落物。
 */
export class LootTableManager {
    private constructor();
    /**
     * @remarks
     * 从指定方块生成战利品，如同该方块已被挖掘。
     *
     * @param block
     * 要从中生成战利品的方块。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空；如果提供的工具不足以挖掘该方块，则为 undefined。
     * @throws
     * 如果方块位于未加载的区块中，或方块的位置超出世界边界，则抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     *
     * {@link UnloadedChunksError}
     */
    generateLootFromBlock(block: Block, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的方块排列生成战利品，如同该方块排列已被挖掘。
     *
     * @param blockPermutation
     * 要从中生成战利品的方块排列。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空；如果提供的工具不足以挖掘该方块，则为 undefined。
     */
    generateLootFromBlockPermutation(blockPermutation: BlockPermutation, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的方块类型生成战利品，如同该方块类型已被挖掘。
     *
     * @param scriptBlockType
     * 要从中生成战利品的方块类型。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空；如果提供的工具不足以挖掘该方块，则为 undefined。
     */
    generateLootFromBlockType(scriptBlockType: BlockType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定实体生成战利品，如同该实体已被击杀。
     *
     * @param entity
     * 要从中生成战利品的实体。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空；如果实体无效，则为 undefined。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    generateLootFromEntity(entity: Entity, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的实体类型生成战利品，如同该实体类型已被击杀。
     *
     * @param entityType
     * 要从中生成战利品的实体类型。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空。
     */
    generateLootFromEntityType(entityType: EntityType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从给定的战利品表生成战利品。
     *
     * @param lootTable
     * 要从中生成战利品的战利品表。
     * @param tool
     * 可选。用于掠夺操作的工具。
     * @returns
     * 从战利品掉落事件中掉落的物品实例数组。
     * 如果没有掉落战利品，则可能为空；如果提供的工具不足以挖掘该方块，则为 undefined。
     */
    generateLootFromTable(lootTable: LootTable, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * 从世界的当前注册表中检索单个战利品表。
     *
     * @param path
     * 要检索的战利品表路径。不包含文件扩展名或 'loot_tables/' 文件夹前缀。示例：
     * `entities/creeper`。
     * @returns
     * 如果找到对应战利品表，则返回 LootTable；如果提供的路径不对应任何现有战利品表，则返回 `undefined`。
     */
    getLootTable(path: string): LootTable | undefined;
}

/**
 * 表示一个战利品池条目，包含对另一个战利品表的引用，
 * 由其路径描述。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableReference extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 被引用的战利品表的路径。示例：
     * `loot_tables/chests/village/village_bundle.json`
     *
     */
    readonly path: string;
}

/**
 * 检查是否使用了合适的工具触发战利品事件的条件。可以描述物品类型、数量、耐久度、附魔或要比较的物品标签数组。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MatchToolCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的堆叠大小或数量。
     *
     */
    readonly count: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 此条件通过所需的耐久度值。
     *
     */
    readonly durability: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 此条件通过所需的附魔数组。
     *
     */
    readonly enchantments: EnchantInfo[];
    /**
     * @remarks
     * 此条件通过所需的工具物品名称。
     *
     */
    readonly itemName: string;
    /**
     * @remarks
     * 必须全部匹配此条件才能通过的物品标签数组。
     *
     */
    readonly itemTagsAll: string[];
    /**
     * @remarks
     * 至少匹配其中一个即可通过此条件的物品标签数组。
     *
     */
    readonly itemTagsAny: string[];
    /**
     * @remarks
     * 零个匹配即可通过此条件的物品标签数组。
     *
     */
    readonly itemTagsNone: string[];
}

/**
 * @beta
 * 一个特定的当前内部事件，用于从客户端向服务器传递消息。
 */
export class MessageReceiveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 消息标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 消息。
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 发送消息的玩家。
     *
     */
    readonly player: Player;
}

/**
 * 包含一组附加变量值，用于进一步
 * 定义渲染和动画的工作方式。
 */
export class MolangVariableMap {
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.r` - 红色值 [0-1]
     * - `<variable_name>.g` - 绿色值 [0-1]
     * - `<variable_name>.b` - 蓝色值 [0-1]
     *
     * @param variableName
     * 要设置的变量名称。
     * @param color
     * RGB 颜色值。
     * @throws 此函数可能抛出错误。
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.r` - 红色值 [0-1]
     * - `<variable_name>.g` - 绿色值 [0-1]
     * - `<variable_name>.b` - 蓝色值 [0-1]
     * - `<variable_name>.a` - Alpha（透明度）颜色值
     * [0-1]
     *
     * @param variableName
     * 要设置的变量名称。
     * @param color
     * RGBA 颜色值。
     * @throws 此函数可能抛出错误。
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * @remarks
     * 在 Molang 变量映射中设置一个数值（小数）。
     *
     * @param variableName
     * 要设置的基于浮点数的变量名称。
     * @param number
     * 要设置的基于 Molang 的变量值。
     * @throws 此函数可能抛出错误。
     */
    setFloat(variableName: string, number: number): void;
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.speed` - 提供的速度值
     * - `<variable_name>.direction_x` - 来自所提供 {@link
     * Vector3} 的 X 值
     * - `<variable_name>.direction_y` - 来自所提供 {@link
     * Vector3} 的 Y 值
     * - `<variable_name>.direction_z` - 来自所提供 {@link
     * Vector3} 的 Z 值
     *
     * @param variableName
     * 要设置的变量名称。
     * @param speed
     * 速度值。
     * @param direction
     * 方向向量。
     * @throws 此函数可能抛出错误。
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.x` - 来自所提供 {@link Vector3}
     * 的 X 值
     * - `<variable_name>.y` - 来自所提供 {@link Vector3}
     * 的 Y 值
     * - `<variable_name>.z` - 来自所提供 {@link Vector3}
     * 的 Z 值
     *
     * @param variableName
     * 要设置的变量名称。
     * @param vector
     * 三维向量。
     * @throws 此函数可能抛出错误。
     */
    setVector3(variableName: string, vector: Vector3): void;
}

/**
 * @beta
 * 发生更改的包设置的名称和值。
 */
export class PackSettingChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 设置的名称。
     *
     */
    readonly settingName: string;
    /**
     * @remarks
     * 设置的值。
     *
     */
    readonly settingValue: string[] | boolean | number | string;
}

/**
 * @beta
 */
export class PackSettingChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): (arg0: PackSettingChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): void;
}

/**
 * 战利品物品条件，用于检查掠夺实体
 * 当前是否为特定类型实体的乘客。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PassengerOfEntityCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过所需的实体类型。
     *
     */
    readonly entityType: string;
}

/**
 * 包含与活塞伸展或收缩时变化相关的信息。
 * @example pistonAfterEvent.ts
 * ```typescript
 * import {
 *   world,
 *   system,
 *   BlockPermutation,
 *   BlockPistonState,
 *   PistonActivateAfterEvent,
 *   DimensionLocation,
 * } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function pistonAfterEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // set up a couple of piston blocks
 *   const piston = targetLocation.dimension.getBlock(targetLocation);
 *   const button = targetLocation.dimension.getBlock({
 *     x: targetLocation.x,
 *     y: targetLocation.y + 1,
 *     z: targetLocation.z,
 *   });
 *
 *   if (piston === undefined || button === undefined) {
 *     log('Could not find block at location.');
 *     return -1;
 *   }
 *
 *   piston.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Piston).withState('facing_direction', 3));
 *   button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState('facing_direction', 1));
 *
 *   world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
 *     const eventLoc = pistonEvent.piston.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
 *       log(
 *         'Piston event at ' +
 *           system.currentTick +
 *           (pistonEvent.piston.isMoving ? ' Moving' : '') +
 *           (pistonEvent.piston.state === BlockPistonState.Expanding ? ' Expanding' : '') +
 *           (pistonEvent.piston.state === BlockPistonState.Expanded ? ' Expanded' : '') +
 *           (pistonEvent.piston.state === BlockPistonState.Retracting ? ' Retracting' : '') +
 *           (pistonEvent.piston.state === BlockPistonState.Retracted ? ' Retracted' : '')
 *       );
 *     }
 *   });
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 若活塞正在伸展，则为 true。
     *
     */
    readonly isExpanding: boolean;
    /**
     * @remarks
     * 包含活塞的附加属性和详情。
     *
     */
    readonly piston: BlockPistonComponent;
}

/**
 * 管理与活塞激活相关的回调。
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 活塞激活后事件触发时执行的回调函数。
     * @returns 返回传入的回调函数，可用于取消订阅。
     * @example pistonAfterEvent.ts
     * ```typescript
     * import {
     *   world,
     *   system,
     *   BlockPermutation,
     *   BlockPistonState,
     *   PistonActivateAfterEvent,
     *   DimensionLocation,
     * } from '@minecraft/server';
     * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
     *
     * function pistonAfterEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   // set up a couple of piston blocks
     *   const piston = targetLocation.dimension.getBlock(targetLocation);
     *   const button = targetLocation.dimension.getBlock({
     *     x: targetLocation.x,
     *     y: targetLocation.y + 1,
     *     z: targetLocation.z,
     *   });
     *
     *   if (piston === undefined || button === undefined) {
     *     log('Could not find block at location.');
     *     return -1;
     *   }
     *
     *   piston.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Piston).withState('facing_direction', 3));
     *   button.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.AcaciaButton).withState('facing_direction', 1));
     *
     *   world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
     *     const eventLoc = pistonEvent.piston.block.location;
     *
     *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
     *       log(
     *         'Piston event at ' +
     *           system.currentTick +
     *           (pistonEvent.piston.isMoving ? ' Moving' : '') +
     *           (pistonEvent.piston.state === BlockPistonState.Expanding ? ' Expanding' : '') +
     *           (pistonEvent.piston.state === BlockPistonState.Expanded ? ' Expanded' : '') +
     *           (pistonEvent.piston.state === BlockPistonState.Retracting ? ' Retracting' : '') +
     *           (pistonEvent.piston.state === BlockPistonState.Retracted ? ' Retracted' : '')
     *       );
     *     }
     *   });
     * }
     * ```
     */
    subscribe(callback: (arg0: PistonActivateAfterEvent) => void): (arg0: PistonActivateAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在活塞伸展或收回时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PistonActivateAfterEvent) => void): void;
}

/**
 * Represents a player within the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /**
     * @remarks
     * The player's Camera.
     *
     * @throws This property can throw when used.
     */
    readonly camera: Camera;
    /**
     * @beta
     * @remarks
     * The player's chat display name, composed from
     * {@link Player.chatNamePrefix} + {@link Player.name} +
     * {@link Player.chatNameSuffix}. This is the name shown as the
     * author of chat messages sent by this player. To change the
     * name shown above the player's head, use
     * {@link Entity.nameTag}.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly chatDisplayName: string;
    /**
     * @beta
     * @remarks
     * An optional string that, when set, is prepended to the text
     * of chat messages sent by this player. Useful for applying
     * formatting or color codes to a player's messages (e.g., '§a'
     * to make their messages green). Does not affect the player's
     * name display - use {@link Player.chatNamePrefix} for the
     * name shown in chat, or {@link Entity.nameTag} for the name
     * above the player's head. Set to undefined to clear.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    chatMessagePrefix?: string;
    /**
     * @beta
     * @remarks
     * An optional string that, when set, is prepended to the
     * player's name in chat messages. Does not affect the name tag
     * above the player's head or the player list - use
     * {@link Entity.nameTag} for that. To prefix the message text
     * itself, use {@link Player.chatMessagePrefix}. Set to
     * undefined to clear.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    chatNamePrefix?: string;
    /**
     * @beta
     * @remarks
     * An optional string that, when set, is appended to the
     * player's name in chat messages. Does not affect the name tag
     * above the player's head or the player list - use
     * {@link Entity.nameTag} for that. See also
     * {@link Player.chatNamePrefix}. Set to undefined to clear.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    chatNameSuffix?: string;
    /**
     * @remarks
     * Contains the player's device information.
     *
     * @throws This property can throw when used.
     */
    readonly clientSystemInfo: ClientSystemInfo;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    commandPermissionLevel: CommandPermissionLevel;
    /**
     * @rc
     * @remarks
     * Contains methods for manipulating the render distance fog
     * settings of a Player.
     *
     */
    readonly fogSettings: FogSettings;
    /**
     * @remarks
     * Gets the current graphics mode of the player's client. This
     * can be changed in the Video section of the settings menu
     * based on what hardware is available.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly graphicsMode: GraphicsMode;
    /**
     * @remarks
     * Contains the player's input information.
     *
     */
    readonly inputInfo: InputInfo;
    /**
     * @remarks
     * Input permissions of the player.
     *
     */
    readonly inputPermissions: PlayerInputPermissions;
    /**
     * @remarks
     * If true, the player is currently emoting.
     *
     * @throws This property can throw when used.
     */
    readonly isEmoting: boolean;
    /**
     * @remarks
     * Whether the player is flying. For example, in Creative or
     * Spectator mode.
     *
     * @throws This property can throw when used.
     */
    readonly isFlying: boolean;
    /**
     * @remarks
     * Whether the player is gliding with Elytra.
     *
     * @throws This property can throw when used.
     */
    readonly isGliding: boolean;
    /**
     * @remarks
     * Whether the player is jumping. This will remain true while
     * the player is holding the jump action.
     *
     * @throws This property can throw when used.
     */
    readonly isJumping: boolean;
    /**
     * @remarks
     * The current overall level for the player, based on their
     * experience.
     *
     * @throws This property can throw when used.
     */
    readonly level: number;
    /**
     * @remarks
     * The player's Locator Bar. This property is used for managing
     * waypoints displayed on the HUD.
     *
     */
    readonly locatorBar: LocatorBar;
    /**
     * @remarks
     * Name of the player.
     *
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @remarks
     * Contains methods for manipulating the on-screen display of a
     * Player.
     *
     * @throws This property can throw when used.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @beta
     * @remarks
     * An identifier that can be used to identify a player across
     * sessions.
     *
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly persistentId: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly playerPermissionLevel: PlayerPermissionLevel;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    selectedSlotIndex: number;
    /**
     * @remarks
     * The overall total set of experience needed to achieve the
     * next level for a player.
     *
     * @throws This property can throw when used.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @remarks
     * The current set of experience achieved for the player.
     *
     * @throws This property can throw when used.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks
     * Adds/removes experience to/from the Player and returns the
     * current experience of the Player.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param amount
     * Amount of experience to add. Note that this can be negative.
     * Min/max bounds at -2^24 ~ 2^24
     * Bounds: [-16777216, 16777216]
     * @returns
     * Returns the current experience of the Player.
     * @throws This function can throw errors.
     */
    addExperience(amount: number): number;
    /**
     * @remarks
     * Adds/removes level to/from the Player and returns the
     * current level of the Player.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param amount
     * Amount to add to the player. Min/max bounds at -2^24 ~ 2^24
     * Bounds: [-16777216, 16777216]
     * @returns
     * Returns the current level of the Player.
     * @throws This function can throw errors.
     */
    addLevels(amount: number): number;
    /**
     * @remarks
     * For this player, removes all overrides of any Entity
     * Properties on the target Entity. This change is not applied
     * until the next tick and will not apply to other players.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param targetEntity
     * The Entity or the ID of the Entity whose Entity Property
     * overrides are being cleared.
     * @throws
     * Throws if the Entity or Entity ID is invalid.
     */
    clearPropertyOverridesForEntity(targetEntity: Entity | string): void;
    /**
     * @beta
     * @remarks
     * Eats an item, providing the item's hunger and saturation
     * effects to the player. Can only be used on food items.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param itemStack
     * The item to eat.
     * @throws
     * Throws if the item is not a food item.
     */
    eatItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * The player's aim-assist settings.
     *
     */
    getAimAssist(): PlayerAimAssist;
    /**
     * @remarks
     * Returns the player's current control scheme.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getControlScheme(): ControlScheme;
    /**
     * @remarks
     * Retrieves the active gamemode for this player, if specified.
     *
     * @throws This function can throw errors.
     */
    getGameMode(): GameMode;
    /**
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     *
     * @param cooldownCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(cooldownCategory: string): number;
    /**
     * @beta
     * @remarks
     * Gets the player's ping in milliseconds.
     *
     * @returns
     * The player's ping in milliseconds.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getPing(): number;
    /**
     * @remarks
     * Gets the current spawn point of the player.
     *
     * @throws This function can throw errors.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @beta
     * @remarks
     * Returns the split screen slot of the player.
     *
     * @returns
     * The split screen slot of the player or undefined if the
     * player is not in a split screen session.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getSplitScreenSlot(): PlayerSplitScreenSlot | undefined;
    /**
     * @remarks
     *  Gets the total experience of the Player.
     *
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /**
     * @remarks
     * Plays a music track that only this particular player can
     * hear.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param trackId
     * Identifier of the music track to play.
     * @param musicOptions
     * Additional options for the music track.
     * @throws This function can throw errors.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Plays a sound that only this particular player can hear.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     * @example playMusicAndSound.ts
     * ```typescript
     * import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, DimensionLocation } from '@minecraft/server';
     *
     * function playMusicAndSound(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   const musicOptions: MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   world.playMusic('music.menu', musicOptions);
     *
     *   const worldSoundOptions: WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   world.playSound('ambient.weather.thunder', targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound('bucket.fill_water', playerSoundOptions);
     * }
     * ```
     */
    playSound(soundId: SoundDefinition | string, soundOptions?: PlayerSoundOptions): SoundInstance;
    /**
     * @beta
     * @remarks
     * This is an internal-facing method for posting a system
     * message to downstream clients.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * Queues an additional music track that only this particular
     * player can hear. If a track is not playing, a music track
     * will play.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param trackId
     * Identifier of the music track to play.
     * @param musicOptions
     * Additional options for the music track.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * For this player, removes the override on an Entity Property.
     * This change is not applied until the next tick and will not
     * apply to other players.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param targetEntity
     * The Entity whose Entity Property override is being removed.
     * @param identifier
     * The Entity Property identifier.
     * @throws
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the
     * property type.
     */
    removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void;
    /**
     * @remarks
     * Resets the level of the player.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    resetLevel(): void;
    /**
     * @remarks
     * Sends a message to the player.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @example nestedTranslation.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function nestedTranslation(targetLocation: DimensionLocation) {
     *   // Displays "Apple or Coal"
     *   const rawMessage = {
     *     translate: 'accessibility.list.or.two',
     *     with: { rawtext: [{ translate: 'item.apple.name' }, { translate: 'item.coal.name' }] },
     *   };
     *   world.sendMessage(rawMessage);
     * }
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function scoreWildcard(targetLocation: DimensionLocation) {
     *   // Displays the player's score for objective "obj". Each player will see their own score.
     *   const rawMessage = { score: { name: '*', objective: 'obj' } };
     *   world.sendMessage(rawMessage);
     * }
     * ```
     * @example sendBasicMessage.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function sendBasicMessage(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].sendMessage('Hello World!');
     * }
     * ```
     * @example sendPlayerMessages.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function sendPlayerMessages(targetLocation: DimensionLocation) {
     *   for (const player of world.getAllPlayers()) {
     *     // Displays "First or Second"
     *     const rawMessage = { translate: 'accessibility.list.or.two', with: ['First', 'Second'] };
     *     player.sendMessage(rawMessage);
     *
     *     // Displays "Hello, world!"
     *     player.sendMessage('Hello, world!');
     *
     *     // Displays "Welcome, Amazing Player 1!"
     *     player.sendMessage({ translate: 'authentication.welcome', with: ['Amazing Player 1'] });
     *
     *     // Displays the player's score for objective "obj". Each player will see their own score.
     *     const rawMessageWithScore = { score: { name: '*', objective: 'obj' } };
     *     player.sendMessage(rawMessageWithScore);
     *
     *     // Displays "Apple or Coal"
     *     const rawMessageWithNestedTranslations = {
     *       translate: 'accessibility.list.or.two',
     *       with: { rawtext: [{ translate: 'item.apple.name' }, { translate: 'item.coal.name' }] },
     *     };
     *     player.sendMessage(rawMessageWithNestedTranslations);
     *   }
     * }
     * ```
     * @example sendTranslatedMessage.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function sendTranslatedMessage(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].sendMessage({ translate: 'authentication.welcome', with: ['Amazing Player 1'] });
     * }
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Set a player's control scheme. The player's active camera
     * preset must be set by scripts like with camera.setCamera()
     * or commands.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param controlScheme
     * Control scheme type. If this argument is undefined, this
     * method will clear the player's control scheme back to the
     * player camera's default control scheme.
     * @returns
     * Returns nothing if the control scheme was added or updated
     * successfully. This can throw an InvalidArgumentError if the
     * control scheme is not allowed by the player's current
     * camera.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setControlScheme(controlScheme?: ControlScheme): void;
    /**
     * @remarks
     * Sets a gamemode override for this player.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param gameMode
     * Active gamemode.
     * @throws This function can throw errors.
     */
    setGameMode(gameMode?: GameMode): void;
    /**
     * @remarks
     * For this player, overrides an Entity Property on the target
     * Entity to the provided value. This property must be client
     * synced. This change is not applied until the next tick and
     * will not apply to other players.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param targetEntity
     * The Entity whose Entity Property is being overriden.
     * @param identifier
     * The Entity Property identifier.
     * @param value
     * The override value. The provided type must be compatible
     * with the type specified in the entity's definition.
     * @throws
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the
     * property type.
     * Throws if the provided value is outside the expected range
     * (int, float properties).
     * Throws if the provided string value does not match the set
     * of accepted enum values (enum properties)
     */
    setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * Sets the current starting spawn point for this particular
     * player.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world. Only visible to the target player.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param effectName
     * Identifier of the particle to create.
     * @param location
     * The location at which to create the particle emitter.
     * @param molangVariables
     * A set of optional, customizable variables that can be
     * adjusted for this particle.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example spawnParticle.ts
     * ```typescript
     * import { world, MolangVariableMap, Vector3 } from '@minecraft/server';
     *
     * world.afterEvents.playerSpawn.subscribe(event => {
     *   const targetLocation = event.player.location;
     *   for (let i = 0; i < 100; i++) {
     *     const molang = new MolangVariableMap();
     *
     *     molang.setColorRGB('variable.color', {
     *       red: Math.random(),
     *       green: Math.random(),
     *       blue: Math.random(),
     *     });
     *
     *     const newLocation: Vector3 = {
     *       x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
     *       y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
     *       z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
     *     };
     *     event.player.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
     *   }
     * });
     * ```
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param cooldownCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * Bounds: [0, 32767]
     * @throws This function can throw errors.
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /**
     * @beta
     * @remarks
     * Stops all sounds from playing for this particular player.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopAllSounds(): void;
    /**
     * @remarks
     * Stops any music tracks from playing for this particular
     * player.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    stopMusic(): void;
    /**
     * @beta
     * @remarks
     * Stops a sound from playing for this particular player.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param soundId
     * Identifier of the sound.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopSound(soundId: string): void;
}

/**
 * 与玩家瞄准辅助相关的 API 容器。
 */
export class PlayerAimAssist {
    private constructor();
    /**
     * @remarks
     * 玩家当前活跃的瞄准辅助设置，如果未激活则为 undefined。
     *
     */
    readonly settings?: PlayerAimAssistSettings;
    /**
     * @remarks
     * 设置玩家的瞄准辅助设置。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param settings
     * 要激活的玩家瞄准辅助设置，如果未定义则禁用瞄准辅助。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link NamespaceNameError}
     */
    set(settings?: PlayerAimAssistSettings): void;
}

/**
 * 包含玩家破坏方块后事件的相关信息。
 * 该事件在方块被破坏后触发。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回此方块在被破坏前的置换信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 方块被破坏后用于破坏方块的物品实例；如果空手则为 undefined。
     *
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * @remarks
     * 方块被破坏前用于破坏方块的物品实例；如果空手则为 undefined。
     *
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * @remarks
     * 触发此事件的玩家，即破坏该方块的玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理当玩家破坏方块时
 * 触发的回调。
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当玩家破坏方块时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当方块被破坏时调用的回调函数。
     * @param options - 可选，用于过滤事件条件的选项。
     * @returns 返回一个函数，用于取消订阅该回调。
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当玩家破坏方块时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}

/**
 * 包含关于一个事件的信息，该事件发生在玩家
 * 破坏方块之前。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消方块破坏事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 用于破坏方块的物品堆叠，或
     * 空手时为 undefined。
     *
     */
    itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的破坏方块的玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家破坏方块前相关的回调。
 */
export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家破坏方块之前被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包将以受限执行权限调用。
     * @param options
     * 可选的事件选项。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家破坏方块之前被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包将以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
}

/**
 * 玩家按下按钮时的事件数据。
 */
export class PlayerButtonInputAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此事件涉及的按钮。
     *
     */
    readonly button: InputButton;
    /**
     * @remarks
     * 此按钮转换到的状态。
     *
     */
    readonly newButtonState: ButtonState;
    /**
     * @remarks
     * 执行输入事件的玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家输入相关的回调函数。
 */
export class PlayerButtonInputAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，该函数将在玩家执行输入后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 玩家执行输入后要调用的回调函数。
     * @param options - （可选）输入事件的附加选项。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg0: PlayerButtonInputAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家执行输入后会被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}

/**
 * 包含玩家取消破坏方块后相关事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCancelBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 玩家取消破坏的方块的置换。
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 玩家取消破坏方块时的进度，取值范围为开区间 (0, 1)。
     *
     */
    readonly breakProgress: number;
    /**
     * @remarks
     * 正在被破坏的方块的面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 玩家用来破坏方块的物品实例；如果空手则为 undefined。
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * 本事件中取消破坏方块的玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理玩家取消破坏方块时连接的回调。
 */
export class PlayerCancelBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在玩家取消破坏方块时将被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要添加的回调。
     * @param options - 用于配置事件的选项。
     * @returns 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerCancelBreakingBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家取消破坏方块时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void): void;
}

/**
 * 表示玩家的光标栏物品栏。用于在物品栏用户界面中在不同容器之间移动物品。不适用于触摸控制。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当前玩家光标栏物品栏中的物品实例。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    /**
     * @remarks
     * 清空玩家的光标栏物品栏。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    clear(): void;
}

/**
 * 包含与玩家维度变更相关的
 * 信息。
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家正在离开的维度。
     *
     */
    readonly fromDimension: Dimension;
    /**
     * @remarks
     * 玩家在改变维度前所在的位置。
     *
     */
    readonly fromLocation: Vector3;
    /**
     * @remarks
     * 正在改变维度的玩家句柄。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家即将前往的维度。
     *
     */
    readonly toDimension: Dimension;
    /**
     * @remarks
     * 玩家改变维度后将生成的位置。
     *
     */
    readonly toLocation: Vector3;
}

/**
 * 管理与玩家成功改变维度相关的回调。
 */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 将指定回调订阅到玩家维度变化后事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调。
     * @returns 返回已订阅的回调。
     */
    subscribe(
        callback: (arg0: PlayerDimensionChangeAfterEvent) => void,
    ): (arg0: PlayerDimensionChangeAfterEvent) => void;
    /**
     * @remarks
     * 从玩家维度变化后事件中移除指定回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}

export class PlayerEmoteAfterEvent {
    private constructor();
    readonly personaPieceId: string;
    readonly player: Player;
}

export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调函数。
     * @returns 用于取消订阅的函数。
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}

/**
 * 包含关于玩家游戏模式更改后事件的信息。
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 更改前的游戏模式。
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * 此事件的来源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 更改后的当前游戏模式。
     *
     */
    readonly toGameMode: GameMode;
}

/**
 * 管理在玩家的游戏模式改变后连接的回调。
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家的游戏模式改变后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     * @param callback - 要添加的回调函数。
     * @returns - 返回传入的回调函数，可用于取消订阅。
     *
     */
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家的游戏模式改变后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     * @param callback - 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}

/**
 * 包含玩家与实体交互之前事件的相关信息。
 */
export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 若设为 true，游戏模式变更将被取消。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 当前游戏模式。
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * 此事件的来源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 要变更成的游戏模式。
     *
     */
    toGameMode: GameMode;
}

/**
 * 管理与玩家游戏模式更改前相关的回调，
 * 该回调在玩家游戏模式更改前被调用。
 */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家游戏模式
     * 更改前被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerGameModeChangeBeforeEvent) => void,
    ): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调将在玩家游戏模式
     * 更改前被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}

/**
 * 包含关于玩家更改所选
 * 快捷栏插槽后的事件信息。
 */
export class PlayerHotbarSelectedSlotChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 新选择的物品栏物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 新选择的快捷栏插槽索引。
     *
     */
    readonly newSlotSelected: number;
    /**
     * @remarks
     * 该事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 之前选择的快捷栏插槽索引。
     *
     */
    readonly previousSlotSelected: number;
}

/**
 * 管理玩家选中的快捷栏槽位发生变化后
 * 所关联的回调。
 */
export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家选中的
     * 快捷栏槽位发生变化后被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 当此事件触发时被调用的函数回调。
     * @param options
     * 事件订阅的附加过滤选项。
     * @returns
     * 返回一个函数，用于取消对此事件的订阅。
     */
    subscribe(
        callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void,
        options?: HotbarEventOptions,
    ): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家选中的
     * 快捷栏槽位发生变化后被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void;
}

/**
 * 当玩家输入模式发生变化时的事件数据。
 */
export class PlayerInputModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家使用的新输入模式。
     *
     */
    readonly newInputModeUsed: InputMode;
    /**
     * @remarks
     * 输入模式发生变化的玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家之前使用的输入模式。
     *
     */
    readonly previousInputModeUsed: InputMode;
}

/**
 * 管理连接到玩家输入模式的回调。
 */
export class PlayerInputModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家输入模式
     * 改变后被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerInputModeChangeAfterEvent) => void,
    ): (arg0: PlayerInputModeChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家输入模式
     * 改变后被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}

/**
 * 包含玩家输入权限更改后事件的相关信息。
 */
export class PlayerInputPermissionCategoryChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已更改的输入权限类别。
     *
     */
    readonly category: InputPermissionCategory;
    /**
     * @remarks
     * 玩家输入权限的启用/禁用状态。
     *
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * 输入权限已被更改的玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家输入权限更改后相关联的回调。
 */
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家输入权限更改后被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void,
    ): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家输入权限更改后被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}

/**
 * 包含启用/禁用玩家输入权限的API。
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks
     * 如果输入权限已启用，则返回 true。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param permissionCategory - 要检查的输入权限类别。
     * @returns 若输入权限已启用则返回 true，否则返回 false。
     * @throws 此函数可能抛出错误。
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @remarks
     * 启用或禁用输入权限。启用时输入将正常工作，禁用时则无效。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param permissionCategory - 要设置状态的输入权限类别。
     * @param isEnabled - 是否启用该输入权限。
     * @throws 此函数可能抛出错误。
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}

/**
 * 包含玩家成功与方块交互后的事件相关信息。
 */
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 交互成功前的物品实例，若主手为空则为 undefined。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 将要被交互的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在被交互的方块面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的位置，物品被放置在此处。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 若事件是在玩家初次按下交互按钮时触发，则该值为 true；若事件是由长按交互按钮触发，则为 false。
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 交互成功后的物品实例，若主手为空则为 undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的来源玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家与方块交互后触发的回调。
 */
export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家与方块交互后被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要在玩家与方块交互后执行的回调函数。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockAfterEvent) => void,
    ): (arg0: PlayerInteractWithBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家与方块交互后调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): void;
}

/**
 * 包含关于玩家与方块交互之前的事件的信息。
 */
export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 将要被交互的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在被交互的方块的面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 如果设置为 true，交互将被取消。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 相对于方块底部西北角的位置，物品将放置在该位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件是在玩家初始按下交互按钮时触发的，则该值为 true；如果是按住交互按钮触发的事件，则为 false。
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 交互中使用的物品实例，如果手为空则为 undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的来源玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理在玩家与方块交互之前触发的回调。
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家与方块交互之前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg0: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在玩家与方块交互之前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}

/**
 * 包含玩家成功与实体交互后事件的相关信息。
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 交互成功前的物品实例，若手部为空则为 undefined。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 交互成功后的物品实例，若手部为空则为 undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的来源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 将要被交互的实体。
     *
     */
    readonly target: Entity;
}

/**
 * 管理与玩家与实体交互后相关的回调。
 */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家与实体交互后调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 玩家与实体交互后要调用的回调函数。
     * @returns 返回传入的回调函数，以便后续取消订阅。
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg0: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家与实体交互后调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}

/**
 * 包含关于玩家与实体交互前事件的信息。
 */
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为true，交互将被取消。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 交互中使用的物品实例，如果空手则为undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 将被交互的实体。
     *
     */
    readonly target: Entity;
}

/**
 * 管理与玩家与实体交互之前相关的回调。
 */
export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家与实体交互之前被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将以受限执行权限被调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void,
    ): (arg0: PlayerInteractWithEntityBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家与实体交互之前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): void;
}

/**
 * 包含关于事件的信息，在玩家
 * 物品栏物品变化后。
 */
export class PlayerInventoryItemChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 之前的物品实例。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 物品栏类型。
     *
     */
    readonly inventoryType: PlayerInventoryType;
    /**
     * @remarks
     * 新物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 变化的槽位索引。
     *
     */
    readonly slot: number;
}

/**
 * 管理在玩家物品栏物品发生变化后连接的回调。
 */
export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家物品栏物品发生变化后被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 事件触发时调用的函数回调。
     * @param options
     * 事件订阅的附加过滤选项。
     * @returns
     * 用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void,
        options?: InventoryItemEventOptions,
    ): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家物品栏物品发生变化后被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}

/**
 * 包含有关已加入游戏的玩家的信息。
 * 请参阅 playerSpawn 事件，以获取更详细的信息，这些信息
 * 可能在玩家首次于游戏中
 * 生成后返回。
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已加入游戏的玩家的不透明字符串标识符。
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * 已加入游戏的玩家的名称。
     *
     */
    readonly playerName: string;
}

/**
 * 管理与玩家加入世界相关的回调。
 */
export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家加入世界时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要注册的回调函数。
     * @returns
     * 返回一个函数，用于取消订阅该回调。
     *
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当玩家加入世界时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}

/**
 * 包含关于已离开世界的玩家的信息。
 */
export class PlayerLeaveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 离开世界的玩家的不透明字符串标识符。
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * 已离开世界的玩家。
     *
     */
    readonly playerName: string;
}

/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}

/**
 * 包含有关正在离开世界的玩家的信息。
 */
export class PlayerLeaveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 正在离开的玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理连接到玩家离开世界时的
 * 回调。
 */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家离开世界时
     * 将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当玩家离开世界时
     * 将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}

/**
 * 包含有关玩家放置方块事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 此事件中放置方块的玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家放置方块时关联的回调。
 */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家放置方块时将被调用。
     *
     * @param callback - 要添加的回调函数。
     * @param options - 可选的方块事件选项。
     * @returns 返回传入的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在玩家放置方块时不再被调用。
     *
     * @param callback - 要移除的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}

/**
 * @beta
 * 包含关于玩家放置方块前事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为true，则取消方块放置事件。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 新方块被放置的方块的面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 相对于新方块放置位置的方块底部西北角的位置。
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 如果事件未被取消，将被放置的方块变体。
     *
     */
    readonly permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * 此事件中放置方块的玩家。
     *
     */
    readonly player: Player;
}

/**
 * @beta
 * 管理与玩家放置方块前
 * 触发的回调。
 */
export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家放置方块前
     * 被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权进行调用。
     * @returns
     * 以受限执行特权进行调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家放置方块前
     * 被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权进行调用。
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void): void;
}

/**
 * 包含有关玩家
 * 生成的更多信息的事件。
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果为 true，则为玩家加入游戏后
     * 的初始生成。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * 表示加入游戏的玩家的对象。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    player: Player;
}

/**
 * 注册一个事件，当玩家在世界中生成（或死亡后重生）
 * 并完全准备就绪时。
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 为此特定类型的事件注册一个新的事件接收器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当玩家生成事件发生时调用的回调函数。
     * @returns 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * 取消注册玩家生成事件的事件接收器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 之前通过 subscribe 注册的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}

/**
 * 包含关于玩家开始破坏方块后
 * 事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerStartBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 玩家开始破坏的方块排列，
     * 即该方块的状态组合。
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 被破坏方块的面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 玩家用于破坏方块的物品实例，
     * 如果空手则为undefined。
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * 为此事件开始破坏方块的玩家。
     *
     */
    readonly player: Player;
}

/**
 * 管理与玩家开始破坏方块时触发的回调。
 */
export class PlayerStartBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当玩家开始破坏方块时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数，接收 PlayerStartBreakingBlockAfterEvent 事件。
     * @param options - 可选的事件选项。
     * @returns 传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerStartBreakingBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家开始破坏方块时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void): void;
}

/**
 * 包含有关玩家开始挥动其手臂的信息。
 */
export class PlayerSwingStartAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家开始挥动时手中持有的物品实例。
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的来源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 玩家挥动的来源，参见 {@link EntitySwingSource}。
     *
     */
    readonly swingSource: EntitySwingSource;
}

/**
 * 管理与玩家开始挥动手臂（例如：攻击、使用物品、交互）时相关联的回调。
 */
export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家开始挥动手臂时被调用（例如：攻击、使用物品、交互）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当玩家开始挥动手臂时被调用的回调（例如：攻击、使用物品、交互）。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}

/**
 * @beta
 * 包含玩家成功使用已命名的命名牌对实体进行命名时的相关信息。
 */
export class PlayerUseNameTagAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被玩家命名的实体。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    entityNamed: Entity;
    /**
     * @remarks
     * 玩家为实体指定的新名称。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    newName: string;
    /**
     * @remarks
     * 使用命名牌的玩家句柄。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    player: Player;
    /**
     * @remarks
     * 玩家使用命名牌前实体的旧名称。如果实体之前未被命名，则该值为 undefined。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    previousName?: string;
}

/**
 * @beta
 * 管理与玩家使用命名牌成功命名实体时相关的回调。
 */
export class PlayerUseNameTagAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅指定回调，以在玩家使用命名牌后事件触发时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): (arg0: PlayerUseNameTagAfterEvent) => void;
    /**
     * @remarks
     * 移除指定回调，以停止在玩家使用命名牌后事件触发时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): void;
}

/**
 * 追踪玩家位置的路点。扩展了 {@link
 * EntityWaypoint}，添加了玩家特定的可见性规则，如隐藏状态和旁观模式。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerWaypoint extends EntityWaypoint {
    /**
     * @remarks
     * 控制路点何时基于玩家状态（如隐藏、旁观模式、旁观者观看其他旁观者）显示的 {@link PlayerVisibilityRules}。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly playerRules: PlayerVisibilityRules;
    /**
     * @param player 玩家对象。
     * @param textureSelector 路点纹理选择器。
     * @param playerRules 控制路点可见性的玩家规则。
     * @param color 可选的路点颜色。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(
        player: Player,
        textureSelector: WaypointTextureSelector,
        playerRules: PlayerVisibilityRules,
        color?: RGB,
    );
}

/**
 * @beta
 * 描述查询返回的方块兴趣点（POI）实例。
 *
 * 所需实验性玩法：
 * - Poi
 *
 */
export class PoiBlockInstance {
    private constructor();
    /**
     * @remarks
     * 此 POI 实例的方块位置。
     *
     */
    readonly position: Vector3;
    /**
     * @remarks
     * 当前可从此 POI 实例领取的票券数量。
     *
     */
    readonly tickets: number;
    /**
     * @remarks
     * 此 POI 实例的类型。
     *
     */
    readonly 'type': PoiBlockType;
}

/**
 * @beta
 * 提供用于查询和管理维度中基于方块的兴趣点的方法。
 *
 * 所需实验：
 * - Poi
 *
 */
export class PoiBlockManager {
    private constructor();
    /**
     * @remarks
     * 在指定位置添加一个方块兴趣点。此方法用于临时用途，将在区块重新加载时被替换。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param position
     * 要添加 POI 的方块位置。
     * @param poi
     * 要添加的 POI 类型，可通过数字类型 ID、类型名称或 POI 类型对象指定。
     */
    addTemporary(position: Vector3, poi: PoiBlockType | string | number): void;
    /**
     * @remarks
     * 获取某个位置上方块兴趣点的类型。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param position
     * 要检查的方块位置。
     * @returns
     * 该位置的 POI 类型；如果该位置不存在 POI，则返回 undefined。
     */
    at(position: Vector3): PoiBlockType | undefined;
    /**
     * @remarks
     * 测试某个位置上方块兴趣点是否与类型过滤器匹配。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param position
     * 要检查的方块位置。
     * @param filter
     * 用于选择 POI 类型的过滤器。回调函数接收 POI 类型并返回是否匹配；名称过滤器匹配类型名称；标签过滤器要求满足所有指定标签。
     * @returns
     * 如果该位置存在 POI 且其类型与过滤器匹配，则返回 true；否则返回 false。
     */
    exists(position: Vector3, filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter): boolean;
    /**
     * @remarks
     * 返回指定位置指定距离内与所提供的类型和占用状态过滤器匹配的方块兴趣点。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param filter
     * 用于选择 POI 类型的过滤器。回调函数接收每个 POI 类型并返回是否应包含；名称过滤器匹配类型名称；标签过滤器要求满足所有指定标签。
     * @param center
     * 搜索中心。
     * @param blockRadius
     * 距中心的最大三维距离，以方块为单位。
     * @param occupancyFilter
     * 可选的占用状态过滤器，应用于匹配的 POI。如果省略，则返回任何占用状态的 POI。
     * @returns
     * 范围内匹配的 POI 实例。结果顺序不保证。
     */
    getInRange(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
        occupancyFilter?: PoiBlockOccupancyFilter,
    ): PoiBlockInstance[];
    /**
     * @remarks
     * 返回与所提供的类型和占用状态过滤器匹配的方块兴趣点，这些兴趣点位于以指定位置为中心的轴对齐正方形内，并按从近到远排序。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param filter
     * 用于选择 POI 类型的过滤器。回调函数接收每个 POI 类型并返回是否应包含；名称过滤器匹配类型名称；标签过滤器要求满足所有指定标签。
     * @param center
     * 搜索中心以及计算距离的位置。
     * @param blockRadius
     * 距中心的最大三维距离，以方块为单位。
     * @param occupancyFilter
     * 可选的占用状态过滤器，应用于匹配的 POI。如果省略，则返回任何占用状态的 POI。
     * @returns
     * 匹配的 POI 实例及其与中心的平方距离，按距离升序排序。
     */
    getInRangeSorted(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
        occupancyFilter?: PoiBlockOccupancyFilter,
    ): PoiDistancePair[];
    /**
     * @remarks
     * 返回与所提供的类型和占用状态过滤器匹配的方块兴趣点，这些兴趣点位于以指定位置为中心的轴对齐正方形内。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param filter
     * 用于选择 POI 类型的过滤器。回调函数接收每个 POI 类型并返回是否应包含；名称过滤器匹配类型名称；标签过滤器要求满足所有指定标签。
     * @param center
     * 搜索体积的中心。
     * @param blockRadius
     * 搜索体积沿每个轴的一半尺寸，以方块为单位。
     * @param occupancyFilter
     * 可选的占用状态过滤器，应用于匹配的 POI。如果省略，则返回任何占用状态的 POI。
     * @returns
     * 搜索体积内匹配的 POI 实例。
     */
    getInSquare(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
        occupancyFilter?: PoiBlockOccupancyFilter,
    ): PoiBlockInstance[];
    /**
     * @remarks
     * 释放一个方块兴趣点上一个先前领取的票证。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param center
     * 要释放其票证的 POI 的方块位置。
     * @returns
     * 如果释放了票证，则返回 true；如果该位置不存在 POI 或该 POI 没有已领取的票证，则返回 false。
     */
    release(center: Vector3): boolean;
    /**
     * @remarks
     * 从范围内匹配的方块兴趣点中领取一个可用票证。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param filter
     * 用于选择要领取的 POI 类型的过滤器。回调函数接收每个 POI 类型并返回是否应包含；名称过滤器匹配类型名称；标签过滤器要求满足所有指定标签。
     * @param center
     * 搜索中心。
     * @param blockRadius
     * 距中心的最大三维距离，以方块为单位。
     * @returns
     * 被领取的 POI 的方块位置；如果没有匹配的 POI 有可用票证，则返回 undefined。
     */
    take(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
    ): Vector3 | undefined;
}

/**
 * @beta
 * 描述一个方块兴趣点（POI）类型。
 *
 * 所需实验：
 * - Poi
 *
 */
export class PoiBlockType {
    private constructor();
    /**
     * @remarks
     * 此POI类型的数字标识符。
     *
     */
    readonly id: number;
    /**
     * @remarks
     * 此POI类型的命名空间标识符。
     *
     */
    readonly name: string;
    /**
     * @remarks
     * 可从此类型的每个POI实例领取的票券最大数量。
     *
     */
    readonly tickets: number;
    /**
     * @remarks
     * 该POI类型被视为可用的最大范围（以方块为单位）。
     *
     */
    readonly usableRange: number;
    /**
     * @remarks
     * 测试此对象与另一个对象是否描述相同的POI类型。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param other
     * 要与此类型进行比较的POI类型。
     * @returns
     * 如果两个对象描述相同的POI类型，则返回 true；否则返回 false。
     */
    equals(other: PoiBlockType): boolean;
    /**
     * @remarks
     * 测试该类型是否具有提供的标签属性。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param tag
     * 要检查的POI标签。
     * @returns
     * 如果POI包含该标签，则返回 true；否则返回 false。
     */
    has(tag: string): boolean;
}

/**
 * @beta
 * 提供对维度中兴趣点（POI）数据的访问。
 *
 * 所需实验：
 * - Poi
 *
 */
export class PoiManager {
    private constructor();
    /**
     * @remarks
     * 提供对维度中基于方块的兴趣点的访问。
     *
     */
    readonly blocks: PoiBlockManager;
}

/**
 * 表示药水效果的传递方式。
 */
export class PotionDeliveryType {
    private constructor();
    readonly id: string;
}

/**
 * 表示一种药水效果类型——例如治疗或
 * 跳跃。
 */
export class PotionEffectType {
    private constructor();
    /**
     * @remarks
     * 以刻为单位的效果持续时间，应用于实体时。
     * 未定义表示效果不会过期。
     *
     * @throws 当使用该属性时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly durationTicks?: number;
    readonly id: string;
}

/**
 * 用于访问所有药水效果类型、递送类型，
 * 以及创建药水。
 */
export class Potions {
    private constructor();
    /**
     * @remarks
     * 获取所有已注册的药水递送类型的句柄。
     *
     * @returns
     * 所有已注册递送类型句柄的数组。
     */
    static getAllDeliveryTypes(): PotionDeliveryType[];
    /**
     * @remarks
     * 获取所有已注册药水效果的类型句柄。
     *
     * @returns
     * 所有已注册效果类型句柄的数组。
     */
    static getAllEffectTypes(): PotionEffectType[];
    /**
     * @remarks
     * 获取指定药水递送 ID 的类型句柄。
     *
     * @param potionDeliveryId
     * 要查询的药水递送 ID。
     *
     * @returns
     * 包装有效递送 ID 的类型句柄；若递送 ID 无效，则返回 undefined。
     */
    static getDeliveryType(potionDeliveryId: string): PotionDeliveryType | undefined;
    /**
     * @remarks
     * 获取指定药水效果 ID 的类型句柄。
     *
     * @param potionEffectId
     * 有效的药水效果 ID。参见
     * @minecraft/vanilla-data.MinecraftPotionEffectTypes
     * @returns
     * 包装有效效果 ID 的类型句柄；若效果 ID 无效，
     * 则返回 undefined。
     */
    static getEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * 根据效果和递送类型创建药水。
     *
     * @param potionEffectType
     * 要使用的药水效果类型或有效的效果 ID。
     * @param potionDeliveryType
     * 要使用的药水递送类型或有效的递送 ID。
     * @returns
     * 包含所创建药水的物品实例。
     * @throws
     * 此函数可能抛出错误。
     *
     * 如果 `potionEffectType` 不是有效的药水效果类型，则抛出 {@link InvalidPotionEffectTypeError}。
     *
     * 如果 `potionDeliveryType` 不是有效的药水递送类型，则抛出 {@link InvalidPotionDeliveryTypeError}。
     *
     * 如果发生其他引擎错误，则抛出 {@link minecraftcommon.EngineError}。
     */
    static resolve<
        T extends string = minecraftvanilladata.MinecraftPotionEffectTypes,
        U extends string = minecraftvanilladata.MinecraftPotionDeliveryTypes,
    >(potionEffectType: PotionEffectType | T, potionDeliveryType: PotionDeliveryType | U): ItemStack;
}

/**
 * 包含与压力板弹起（pop）变化相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 压力板弹起前的红石能量。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 压力板弹起时的红石能量。
     *
     */
    readonly redstonePower: number;
}

/**
 * 管理在压力板被弹出时触发的回调函数。
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当压力板被弹出时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当压力板被弹出时被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}

/**
 * 包含与压力板
 * 按压变化相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 压力板被按压前的
     * 红石能量。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 压力板按压时的
     * 红石能量。
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 触发压力板按压的源实体。
     *
     */
    readonly source: Entity;
}

/**
 * 管理与压力板被按下时相关的回调。
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当压力板被按下时将会调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当压力板被按下时要调用的回调。
     * @returns 用于取消订阅的回调函数。
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当压力板被按下时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}

/**
 * 文本基元基类。表示世界中的一个对象及其基本属性。
 */
export class PrimitiveShape {
    private constructor();
    /**
     * @remarks
     * 此形状所附加的实体。设置后，此形状将复制附加实体的根位置，而形状的位置将用作偏移量。
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * 形状的颜色。
     *
     */
    color: RGBA;
    /**
     * @remarks
     * 形状可见的维度。如果维度未定义，则将在所有维度中显示。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 如果形状在移除前具有有限的时间跨度，则返回 true。
     *
     */
    readonly hasDuration: boolean;
    /**
     * @remarks
     * 形状的位置。
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 如果定义了，此距离将用于确定每个客户端渲染此基元的距离。默认情况下，距离将与客户端的渲染距离设置匹配。
     *
     * 最小值：0
     */
    maximumRenderDistance?: number;
    /**
     * @remarks
     * 形状的旋转（欧拉角 - [俯仰, 偏航, 翻滚]）。
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 形状的缩放。
     *
     * 范围：[-1000, 1000]
     */
    scale: number;
    /**
     * @remarks
     * 到此形状自动移除的剩余时间（秒）。如果形状没有有限的生命周期，则返回 undefined。
     *
     */
    timeLeft?: number;
    /**
     * @remarks
     * 到此形状自动移除的初始总时间跨度（秒）。如果形状没有有限的生命周期，则返回 undefined。
     *
     */
    readonly totalTimeLeft?: number;
    /**
     * @remarks
     * 此形状可见的玩家列表。如果留空，则形状对所有玩家可见。
     *
     */
    visibleTo: Player[];
    /**
     * @remarks
     * 从世界中移除该形状。可以通过 PrimitiveShapesManager 的 addText 方法重新添加该形状。
     *
     */
    remove(): void;
    /**
     * @remarks
     * 设置形状的位置和维度。如果维度未定义，则将在所有维度中显示。
     *
     * @param location 形状的位置和维度。
     */
    setLocation(location: DimensionLocation | Vector3): void;
}

/**
 * 原始形状类，用于向世界添加和移除文本原始形状。
 */
export class PrimitiveShapesManager {
    private constructor();
    /**
     * @remarks
     * 允许的原始形状的最大数量。
     *
     */
    readonly maxShapes: number;
    /**
     * @remarks
     * 向世界添加一个新的文本原始形状。
     *
     * @param text
     * 要添加的文本原始形状。
     * @param dimension
     * 可选维度，指定文本原始形状所在的维度。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 底层引擎发生错误时抛出。
     *
     * {@link PrimitiveShapeError} - 当文本原始形状无效或数量超过上限时抛出。
     */
    addText(text: TextPrimitive, dimension?: Dimension): void;
    /**
     * @beta
     * @remarks
     * 获取并查询管理器中的所有原始形状，并将结果作为形状句柄数组返回。
     *
     * @param options
     * 可选的查询选项，用于缩小结果范围。
     * @returns
     * 所有匹配的原始形状句柄数组。
     */
    getShapes(options?: PrimitiveShapeQueryOptions): PrimitiveShape[];
    /**
     * @remarks
     * 从世界中移除所有文本原始形状。
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * 从世界中移除一个文本原始形状实例。这等效于在文本本身调用 remove。
     *
     * @param text
     * 要移除的文本原始形状。
     */
    removeText(text: TextPrimitive): void;
}

/**
 * 包含与投射物击中
 * 方块相关的信息。
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * 投射物击中发生所在的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 投射物击中方块时的方向向量。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 投射物击中发生的位置。
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 击中方块的投射物实体。
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 发射该投射物的可选来源实体。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 包含有关被投射物击中的
     * 方块的附加信息。
     *
     * @returns 包含方块命中详细信息的对象。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getBlockHit(): BlockHitInformation;
}

/**
 * 管理当弹射物击中方块时连接的回调函数。
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当弹射物击中方块时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当弹射物击中方块时调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}

/**
 * 包含与抛射物击中实体相关的信息。
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此抛射物击中发生的维度。
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * 抛射物击中实体时的方向向量。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 抛射物击中事件发生的位置。
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * 代表击中实体的抛射物的实体。
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * 可选，发射该抛射物的源实体。
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * 包含关于被击中实体的额外信息。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回一个 EntityHitInformation 对象，包含被击中实体的信息。
     */
    getEntityHit(): EntityHitInformation;
}

/**
 * 管理当投射物击中实体时关联的回调。
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调在投射物击中实体时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在投射物击中实体时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}

/**
 * 随机修改掉落物品的数据值的
 * 战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomAuxValueFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择要分配的数据值的值范围。
     * 包含最小值和最大值。
     *
     */
    readonly values: minecraftcommon.NumberRange;
}

/**
 * 战利品物品函数，用于随机修改
 * 掉落物品的方块状态。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomBlockStateFunction extends LootItemFunction {
    private constructor();
    readonly blockState: string;
    /**
     * @remarks
     * 函数从中随机选择值的范围
     * 以分配给给定方块状态。包含最小值
     * 和最大值。
     *
     */
    readonly values: minecraftcommon.NumberRange;
}

/**
 * 战利品条件，将给定的值应用于
 * 战利品掉落几率。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的几率，范围从0.0到1.0。
     *
     */
    readonly chance: number;
}

/**
 * 战利品物品条件，将给定值应用于战利品掉落的几率，
 * 并根据所用工具上的抢夺附魔等级进行修改。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceWithLootingCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的基准几率，范围 0.0-1.0。将受
     * 'lootingMultiplier' 值影响。
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 每级抢夺附魔对战利品掉落几率的增加量。
     *
     */
    readonly lootingMultiplier: number;
}

/**
 * 战利品物品条件，根据当前难度等级将给定值应用于战利品掉落的几率。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 一个包含四个元素的数组，依次存储每种难度等级下战利品掉落的几率：
     * 和平、简单、普通、困难。
     *
     */
    readonly chances: number[];
}

/**
 * 随机染料战利品函数，用于为
 * 掉落物随机染色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomDyeFunction extends LootItemFunction {
    private constructor();
}

/**
 * 战利品掉落条件，将给定值应用于
 * 掉落的几率，并根据掉落发生区域
 * 进行修正。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 基础几率，范围为0.0-1.0，战利品将掉落。将
     * 由当前区域倍率修正。
     *
     */
    readonly maxChance: number;
}

/**
 * 包含记分板的目标和参与者。
 * @example updateScoreboard.ts
 * ```typescript
 * import { world, DisplaySlotId, ObjectiveSortOrder, DimensionLocation } from '@minecraft/server';
 *
 * function updateScoreboard(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const scoreboardObjectiveId = 'scoreboard_demo_objective';
 *   const scoreboardObjectiveDisplayName = 'Demo Objective';
 *
 *   const players = world.getPlayers();
 *
 *   // Ensure a new objective.
 *   let objective = world.scoreboard.getObjective(scoreboardObjectiveId);
 *
 *   if (!objective) {
 *     objective = world.scoreboard.addObjective(scoreboardObjectiveId, scoreboardObjectiveDisplayName);
 *   }
 *
 *   // get the scoreboard identity for player 0
 *   const player0Identity = players[0].scoreboardIdentity;
 *
 *   if (player0Identity === undefined) {
 *     log('Could not get a scoreboard identity for player 0.');
 *     return -1;
 *   }
 *
 *   // initialize player score to 100;
 *   objective.setScore(player0Identity, 100);
 *
 *   world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
 *     objective: objective,
 *     sortOrder: ObjectiveSortOrder.Descending,
 *   });
 *
 *   const playerScore = objective.getScore(player0Identity) ?? 0;
 *
 *   // score should now be 110.
 *   objective.setScore(player0Identity, playerScore + 10);
 * }
 * ```
 */
export class Scoreboard {
    private constructor();
    /**
     * @remarks
     * 向记分板添加一个新目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param objectiveId - 目标的标识符。
     * @param displayName - 目标的显示名称（可选）。
     * @returns 新添加的记分板目标。
     * @throws 此函数可能抛出错误。
     * @example updateScoreboard.ts
     * ```typescript
     * import { world, DisplaySlotId, ObjectiveSortOrder, DimensionLocation } from '@minecraft/server';
     *
     * function updateScoreboard(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const scoreboardObjectiveId = 'scoreboard_demo_objective';
     *   const scoreboardObjectiveDisplayName = 'Demo Objective';
     *
     *   const players = world.getPlayers();
     *
     *   // Ensure a new objective.
     *   let objective = world.scoreboard.getObjective(scoreboardObjectiveId);
     *
     *   if (!objective) {
     *     objective = world.scoreboard.addObjective(scoreboardObjectiveId, scoreboardObjectiveDisplayName);
     *   }
     *
     *   // get the scoreboard identity for player 0
     *   const player0Identity = players[0].scoreboardIdentity;
     *
     *   if (player0Identity === undefined) {
     *     log('Could not get a scoreboard identity for player 0.');
     *     return -1;
     *   }
     *
     *   // initialize player score to 100;
     *   objective.setScore(player0Identity, 100);
     *
     *   world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
     *     objective: objective,
     *     sortOrder: ObjectiveSortOrder.Descending,
     *   });
     *
     *   const playerScore = objective.getScore(player0Identity) ?? 0;
     *
     *   // score should now be 110.
     *   objective.setScore(player0Identity, playerScore + 10);
     * }
     * ```
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    /**
     * @remarks
     * 清除占据某个显示槽位的目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param displaySlotId - 要清除的显示槽位。
     * @returns 之前占据该显示槽位的目标；如果没有目标，则返回 `undefined`。
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 返回指定 ID 的目标。
     *
     * @param objectiveId - 目标的标识符。
     * @returns 对应的记分板目标，如果不存在则返回 `undefined`。
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 返回占据指定显示槽位的目标。
     *
     * @param displaySlotId - 要查询的显示槽位。
     * @returns 对应显示槽位的目标显示设置；如果未设置则返回 `undefined`。
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * 返回所有已定义的目标。
     *
     * @returns 所有已定义的目标数组。
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * 返回所有已定义的记分板身份。
     *
     * @returns 所有已定义的记分板身份数组。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 从记分板中移除一个目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param objectiveId - 要移除的目标或目标 ID。
     * @returns 如果目标被成功移除则返回 `true`。
     * @throws 此函数可能抛出错误。
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * 将目标设置到显示槽位，并附加显示设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param displaySlotId - 要设置的显示槽位。
     * @param objectiveDisplaySetting - 目标的显示设置。
     * @returns 返回之前设置在该显示槽位的 `ScoreboardObjective`；如果之前没有设置目标，则返回 `undefined`。
     * @throws 此函数可能抛出错误。
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}

/**
 * 包含计分板项目的身份标识。
 */
export class ScoreboardIdentity {
    private constructor();
    /**
     * @remarks
     * 返回此身份标识对玩家可见的名称。
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * 计分板身份标识的标识符。
     *
     */
    readonly id: number;
    /**
     * @remarks
     * 如果 ScoreboardIdentity 引用仍然有效，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 计分板身份标识的类型。
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * 如果计分板身份标识是实体或玩家，则返回此计分板项目对应的实体。
     *
     * @throws 此函数可能会抛出错误。
     */
    getEntity(): Entity | undefined;
}

/**
 * 包含计分板的目标和参与者。
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * 返回此计分板目标对玩家可见的名称。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 计分板目标的标识符。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly id: string;
    /**
     * @remarks
     * 如果计分板目标的引用仍然有效，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 为指定参与者和目标增加分数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param participant
     * 要应用计分板分数增加的参与者。
     * @throws 此函数可能抛出错误。
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * 返回所有目标参与者的身份。
     *
     * @throws 此函数可能抛出错误。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 返回参与者的特定分数。
     *
     * @param participant
     * 要检索分数的参与者标识符。
     * @throws 此函数可能抛出错误。
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * 返回此目标下所有参与者的特定分数。
     *
     * @throws 此函数可能抛出错误。
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * 返回指定身份是否为计分板目标的参与者。
     *
     * @throws 此函数可能抛出错误。
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 从计分板目标中移除一个参与者。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param participant
     * 要从此目标跟踪中移除的参与者。
     * @throws 此函数可能抛出错误。
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 为参与者设置分数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param participant
     * 参与者的身份标识。
     * @param score
     * 分数的新值。
     * @throws 此函数可能抛出错误。
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

/**
 * 包含一个计分板参与者及其对应分数的配对。
 */
export class ScoreboardScoreInfo {
    private constructor();
    /**
     * @remarks
     * 此分数的计分板参与者。
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * 此目标的标识的分数值。
     *
     */
    readonly score: number;
}

/**
 * 包含有关显示在屏幕上的
 * 用户界面元素的信息。
 * @example setTitle.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 *
 * function setTitle(targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   if (players.length > 0) {
 *     players[0].onScreenDisplay.setTitle('§o§6Fancy Title§r');
 *   }
 * }
 * ```
 * @example setTitleAndSubtitle.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 *
 * function setTitleAndSubtitle(targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   players[0].onScreenDisplay.setTitle('Chapter 1', {
 *     stayDuration: 100,
 *     fadeInDuration: 2,
 *     fadeOutDuration: 4,
 *     subtitle: 'Trouble in Block Town',
 *   });
 * }
 * ```
 * @example countdown.ts
 * ```typescript
 * import { world, system, DimensionLocation } from '@minecraft/server';
 *
 * function countdown(targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   players[0].onScreenDisplay.setTitle('Get ready!', {
 *     stayDuration: 220,
 *     fadeInDuration: 2,
 *     fadeOutDuration: 4,
 *     subtitle: '10',
 *   });
 *
 *   let countdown = 10;
 *
 *   const intervalId = system.runInterval(() => {
 *     countdown--;
 *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
 *
 *     if (countdown == 0) {
 *       system.clearRun(intervalId);
 *     }
 *   }, 20);
 * }
 * ```
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @remarks
     * 如果当前对此屏幕显示管理器对象的引用有效且可用，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @returns 当前隐藏的 HUD 元素数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param hudElements
     * 可选的 HUD 元素列表，用于指定需要保持可见的元素。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param hudElement
     * 要检查是否被强制隐藏的 HUD 元素。
     * @returns 如果该 HUD 元素被强制隐藏，则返回 true。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    resetHudElementsVisibility(): void;
    /**
     * @remarks
     * 设置行动栏文本——显示在标题下方、快捷栏上方的文本。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param text
     * 行动栏文本的新值。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 设置平视显示器（HUD）中某个元素的可见性。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param visible
     * 是将 HUD 元素设置为不可见，还是将其重置为默认状态。
     * @param hudElements
     * 可选的 HUD 元素列表，用于配置可见性。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks
     * 将在玩家的屏幕显示上显示一个标题。如果设置为空字符串，将清除标题。你还可以选择指定附加副标题以及淡入、停留和淡出时间。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param title
     * 要显示的标题文本。
     * @param options
     * 标题显示选项，包括副标题及淡入、停留和淡出时间。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @example setTitle.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function setTitle(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   if (players.length > 0) {
     *     players[0].onScreenDisplay.setTitle('§o§6Fancy Title§r');
     *   }
     * }
     * ```
     * @example setTitleAndSubtitle.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function setTitleAndSubtitle(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle('Chapter 1', {
     *     stayDuration: 100,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: 'Trouble in Block Town',
     *   });
     * }
     * ```
     * @example countdown.ts
     * ```typescript
     * import { world, system, DimensionLocation } from '@minecraft/server';
     *
     * function countdown(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle('Get ready!', {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: '10',
     *   });
     *
     *   let countdown = 10;
     *
     *   const intervalId = system.runInterval(() => {
     *     countdown--;
     *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *     if (countdown == 0) {
     *       system.clearRun(intervalId);
     *     }
     *   }, 20);
     * }
     * ```
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * 如果副标题先前已通过 setTitle 方法显示，则更新副标题。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param subtitle
     * 新的副标题文本。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @example countdown.ts
     * ```typescript
     * import { world, system, DimensionLocation } from '@minecraft/server';
     *
     * function countdown(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle('Get ready!', {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: '10',
     *   });
     *
     *   let countdown = 10;
     *
     *   const intervalId = system.runInterval(() => {
     *     countdown--;
     *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *     if (countdown == 0) {
     *       system.clearRun(intervalId);
     *     }
     *   }, 20);
     * }
     * ```
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

/**
 * 返回关于 /scriptevent 命令调用的
 * 附加数据。
 */
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此 ScriptEvent 命令消息的标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 如果此命令是通过 NPC 发起的，则返回
     * 发起 NPC 对话的实体。
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * 随脚本事件命令传入的
     * 可选附加数据。
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 如果此命令是通过方块（例如命令方块）触发的，
     * 则为源方块。
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * 如果此命令是由实体（例如 NPC）触发的，
     * 则为源实体。
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * 返回触发此命令的源类型。
     *
     */
    readonly sourceType: ScriptEventSource;
}

/**
 * 用于注册一个事件处理器，该处理器响应于传入的 /scriptevent 命令。
 */
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册一个新的ScriptEvent处理器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg0: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks
     * 取消订阅一个特定的ScriptEvent事件处理器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}

/**
 * 描述此可骑乘实体上的一个
 * 特定座位位置。
 */
export class Seat {
    private constructor();
    /**
     * @remarks
     * 骑乘此实体时，骑乘者允许
     * 旋转的角度（以度为单位）。
     *
     */
    readonly lockRiderRotation: number;
    /**
     * @remarks
     * 此座位最多可支持的骑乘者数量。
     *
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * 若此座位需要被坐满，放置在该座位
     * 位置上的最少骑乘者数量。
     *
     */
    readonly minRiderCount: number;
    /**
     * @remarks
     * 此座位相对于实体位置
     * 的物理位置。
     *
     */
    readonly position: Vector3;
    /**
     * @remarks
     * 旋转骑乘者的角度（以度为单位）。
     *
     */
    readonly seatRotation: number;
}

/**
 * @beta
 * 管理用于向服务器传递消息的回调。此事件目前尚未完全实现，不应使用。
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当内部消息被传递时该回调将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调。
     * @returns 返回一个可用于移除该回调的函数。
     */
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在内部消息被传递时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}

/**
 * 修改掉落盔甲物品上纹饰的
 * 战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetArmorTrimFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于盔甲纹饰的材料。
     *
     */
    readonly material: string;
    /**
     * @remarks
     * 应用于盔甲纹饰的图案。
     *
     */
    readonly pattern: string;
}

/**
 * 战利品物品函数，用于修改
 * 掉落旗帜的类型。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBannerDetailsFunction extends LootItemFunction {
    private constructor();
    /**
     * @beta
     * @remarks
     * 掉落旗帜的基础颜色。
     *
     */
    readonly baseColor: string;
    /**
     * @beta
     * @remarks
     * 用于装饰旗帜的 {@link BannerPattern} 对象数组，
     * 包括颜色和图案类型。
     *
     */
    readonly patterns: BannerPattern[];
    /**
     * @remarks
     * 要掉落的旗帜类型。
     *
     */
    readonly 'type': number;
}

/**
 * 战利品物品函数，用于修改掉落的书的内容。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBookContentsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 这本书作者的姓名。
     *
     */
    readonly author: string;
    /**
     * @remarks
     * 一个文本数组，用于放置在书的页面中。
     *
     */
    readonly pages: string[];
    /**
     * @remarks
     * 这本书的标题。
     *
     */
    readonly title: string;
}

/**
 * 战利品物品函数，根据其颜色索引修改掉落物品的数据值。
 * 如果未设置颜色索引，则默认为零。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetDataFromColorIndexFunction extends LootItemFunction {
    private constructor();
}

/**
 * 战利品物品函数，用于修改从战利品池条目中掉落的物品数量。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemCountFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择掉落物品数量的取值范围。包含最小值和最大值。
     *
     */
    readonly count: minecraftcommon.NumberRange;
}

/**
 * 战利品物品函数，用于修改
 * 掉落物品的耐久度值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemDamageFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择要分配的
     * 耐久度值的范围。包含最小值和
     * 最大值。必须始终介于0.0和1.0之间。
     *
     */
    readonly damage: minecraftcommon.NumberRange;
}

/**
 * 战利品物品函数，用于修改掉落物品的数据值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemDataFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择要分配的数据值的取值范围。包含最小值和最大值。
     *
     */
    readonly data: minecraftcommon.NumberRange;
}

/**
 * 战利品物品函数，用于修改掉落物品的
 * lore。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemLoreFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于掉落物品的 lore。
     *
     */
    readonly lore: string[];
}

/**
 * 修改掉落物品名称的战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemNameFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于掉落物品的名称。
     *
     */
    readonly name: string;
}

/**
 * 此战利品物品函数用于修改不祥之瓶的放大器值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetOminousBottleFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数随机选择要分配的放大器值的取值范围。包含最小值和最大值。
     *
     */
    readonly amplifier: minecraftcommon.NumberRange;
}

/**
 * 战利品物品函数，用于为掉落的药水分配类型。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetPotionFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 要分配给掉落的药水的 id。
     *
     */
    readonly id: string;
}

/**
 * 战利品物品函数，用于将实体类型分配给掉落的刷怪蛋。
 * 除刷怪蛋外的任何物品均无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetSpawnEggFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 要分配给掉落刷怪蛋的实体。
     *
     */
    readonly id: string;
}

/**
 * 战利品物品函数，用于修改掉落的炖菜物品的效果。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetStewEffectFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 一组整数，对应可随机选择并应用于掉落物品的炖菜效果。
     *
     */
    readonly effects: number[];
}

/**
 * 为调用者提供可适配的接口，用于订阅在游戏世界关闭前触发的事件。
 * 该事件在玩家离开之后、世界关闭之前发生。
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 向此事件添加新的订阅者回调。
     *
     * 不能在受限执行模式下调用此函数。
     *
     * 可在早期执行模式下调用此函数。
     *
     * @param callback
     * 事件触发时调用的函数回调。该闭包将以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * 移除之前通过 subscribe 方法订阅的回调函数。
     *
     * 不能在受限执行模式下调用此函数。
     *
     * 可在早期执行模式下调用此函数。
     *
     * @param callback
     * 之前传递给 subscribe 方法的函数闭包。该闭包将以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}

/**
 * 游戏世界关闭时触发的事件对象。
 */
export class ShutdownEvent {
    private constructor();
}

/**
 * 战利品物品函数，处理掉落的物品时，
 * 会像在熔炉中冶炼或烹饪过一样。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SmeltItemFunction extends LootItemFunction {
    private constructor();
}

/**
 * @beta
 * 包含有关声音的声明持续时间
 * 已结束的信息。
 */
export class SoundCompletedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已完成的声音实例的标识符。
     * 与播放声音时返回的 `SoundInstance`
     * 的 `id` 属性匹配。
     *
     */
    readonly soundInstanceId: string;
}

/**
 * @beta
 * 管理当受跟踪声音的声明时长结束时被调用的回调。
 */
export class SoundCompletedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当受跟踪声音的声明时长结束时将调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: SoundCompletedAfterEvent) => void): (arg0: SoundCompletedAfterEvent) => void;
    /**
     * @remarks
     * 移除当受跟踪声音的声明时长结束时触发的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: SoundCompletedAfterEvent) => void): void;
}

/**
 * @beta
 * 关于在 sound_definitions.json 文件中
 * 声明的声音的静态元数据。
 */
export class SoundDefinition {
    private constructor();
    /**
     * @remarks
     * 此声音声明的持续时间元数据。当声音定义未指定
     * 持续时间时，该值为 undefined。
     *
     */
    readonly durationInfo?: SoundDefinitionDurationInfo;
    /**
     * @remarks
     * 此声音声明的音乐元数据。当声音定义未指定
     * music_info 块时，该值为 undefined。
     *
     */
    readonly musicInfo?: SoundDefinitionMusicInfo;
    /**
     * @remarks
     * 此定义所声明的声音事件标识符，
     * 格式为 'namespace:name'。
     *
     */
    readonly soundEventId: string;
    /**
     * @remarks
     * 此声音声明的标签元数据，作为一个记录，
     * 将每个标签名称映射到其声明的值。声明为
     * 单个字符串值的标签会以单元素数组形式呈现。
     * 当声音定义未指定任何标签时，
     * 该值为 undefined。
     *
     */
    readonly tags?: Record<string, string[]>;
}

/**
 * @beta
 * 提供对当前世界加载的声音定义的只读访问。
 */
export class SoundDefinitionRegistry {
    private constructor();
    /**
     * @remarks
     * 返回注册表中的声音定义，可选地通过过滤器缩小范围。
     *
     * @param filter
     * 应用于每个定义的可选过滤器。省略时，返回所有定义。
     * @returns
     * 所有匹配过滤器的声音定义，或未提供过滤器时返回所有声音定义。
     * @throws
     * 如果 filter.minDuration 大于 filter.maxDuration，将抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getDefinitions(filter?: SoundDefinitionFilter): SoundDefinition[];
}

/**
 * @beta
 * 提供持续时间以及播放信息，用于其定义声明了持续时间的音效。
 */
export class SoundDurationInfo {
    private constructor();
    /**
     * @remarks
     * 获取音效的总持续时间，以秒为单位。
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取音效是否仍在被追踪。
     *
     */
    readonly isActive: boolean;
    /**
     * @remarks
     * 返回音效中的当前播放位置，以秒为单位，从音效开头测量。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 当前播放位置，以秒为单位，从音效开头测量。
     */
    getPlaybackPosition(): number;
}

/**
 * 表示一个已播放声音的句柄。在
 * 声音播放期间，需要使用该句柄来控制声音
 * （例如调用 `stop`、`setVolume`、`setPitch`、
 * `fade` 或 `seekTo`）。无限循环的声音（通过
 * `loop: -1` 启动）会在最后一个
 * `SoundInstance` 引用被丢弃时自动停止；
 * 只要声音应继续播放，请保留该句柄。
 */
export class SoundInstance {
    private constructor();
    /**
     * @beta
     * @remarks
     * 获取此声音的时长和播放信息。
     *
     */
    readonly durationInfo?: SoundDurationInfo;
    /**
     * @beta
     * @remarks
     * 此声音实例的唯一标识符。
     *
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * 获取此声音为其播放的玩家。
     *
     */
    readonly recipient?: Player;
    /**
     * @beta
     * @remarks
     * 获取此实例启动时所依据的声音事件标识符。
     *
     */
    readonly soundEventId: string;
    /**
     * @beta
     * @remarks
     * 在指定持续时间内，将此声音实例从当前音量淡变到目标音量。
     * 若要从静音开始淡入，请先调用 `setVolume(0.0)`；若要淡出，
     * 请传入目标音量 `0.0`。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param duration
     * 淡变持续时长（秒）。必须为非负值。
     * 最小值：0
     * @param targetVolume
     * 要淡变到的音量。必须为非负值。
     * 最小值：0
     */
    fade(duration: number, targetVolume: number): void;
    /**
     * @beta
     * @remarks
     * 暂停此声音。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    pause(): void;
    /**
     * @beta
     * @remarks
     * 暂停后恢复此声音。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    resume(): void;
    /**
     * @beta
     * @remarks
     * 设置此声音实例的播放位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param seconds
     * 要跳转到的位置（秒）。必须为非负值。
     * 范围：[0, 107374184]
     * @throws
     * 如果 `seconds` 为负，或声音具有已知时长且 `seconds` 大于该时长，则抛出异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    seekTo(seconds: number): void;
    /**
     * @beta
     * @remarks
     * 设置此声音实例的音调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pitch
     * 音调倍率，介于 0.01 和 10.0 之间。1.0 表示正常音调。
     * 范围：[0.009999999776482582, 10]
     */
    setPitch(pitch: number): void;
    /**
     * @beta
     * @remarks
     * 设置此声音实例的音量。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param volume
     * 音量级别，介于 0.0 和 10.0 之间。
     * 范围：[0, 10]
     */
    setVolume(volume: number): void;
    /**
     * @remarks
     * 停止此声音实例的播放。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    stop(): void;
}

/**
 * 战利品物品函数，用于对掉落的物品应用一个或多个预定义的附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SpecificEnchantFunction extends LootItemFunction {
    private constructor();
    readonly enchantments: EnchantInfo[];
}

export class StartupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将以早期执行特权被调用。
     * @returns
     * 以早期执行特权被调用的闭包。
     */
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将以早期执行特权被调用。
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}

export class StartupEvent {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可以在早期执行模式下读取。
     *
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可以在早期执行模式下读取。
     *
     */
    readonly customCommandRegistry: CustomCommandRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可以在早期执行模式下读取。
     *
     */
    readonly dimensionRegistry: DimensionRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可以在早期执行模式下读取。
     *
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
    /**
     * @beta
     * @remarks
     * @privilege early-execution-readable - 此属性可以在早期执行模式下读取。
     *
     */
    readonly worldClockRegistry: WorldClockRegistry;
}

/**
 * 表示一个已加载的结构模板（.mcstructure 文件）。
 * 可以使用 /structure 命令或 {@link StructureManager} API
 * 将结构放置到世界中。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Structure extends ISerializable {
    private constructor();
    /**
     * @remarks
     * 结构的名称。标识符必须包含命名空间。
     * 对于通过 /structure 命令或结构方块创建的结构，
     * 此命名空间默认为 "mystructure"。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 返回结构是否有效。如果结构被删除，
     * 则可能变为无效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 结构的尺寸。例如，单个方块结构的尺寸为
     * {x:1, y:1, z:1}
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @remarks
     * 返回一个 BlockPermutation，表示 Structure 中
     * 指定位置所包含的方块。
     *
     * @param location
     * 相对于 Structure 原点的方块位置。
     * @returns
     * 返回一个 BlockPermutation。如果指定位置不存在方块，
     * 则返回 undefined。
     * @throws
     * 如果位置超出结构边界则抛出异常。
     * 如果 Structure 已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @remarks
     * 返回指定位置的方块是否含水。
     *
     * @param location
     * 相对于 Structure 原点的方块位置。
     * @returns
     * 返回指定位置的方块是否含水。
     * 如果指定位置不存在方块，则返回 false。
     * @throws
     * 如果位置超出结构边界则抛出异常。
     * 如果 Structure 已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @remarks
     * 创建一个 Structure 的副本，并使用新名称保存。
     *
     * 此函数无法在受限执行模式中调用。
     *
     * @param identifier
     * 新创建 Structure 的名称。
     * @param saveMode
     * 决定如何保存 Structure。默认为保存到世界。
     * 默认值：1
     * @returns
     * 返回新创建的结构。
     * @throws
     * 如果标识符无效则抛出异常。有效标识符必须
     * 包含命名空间且必须唯一。
     * 如果 Structure 已被删除则抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * 将修改后的 Structure 保存到世界文件。
     *
     * 此函数无法在受限执行模式中调用。
     *
     * @throws
     * 如果 Structure 已被删除则抛出异常。
     *
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /**
     * @remarks
     * 在 Structure 中设置 BlockPermutation。
     *
     * 此函数无法在受限执行模式中调用。
     *
     * @param location
     * 相对于 Structure 原点的方块位置。
     * @param blockPermutation
     * 要设置的 BlockPermutation。
     * 默认值：null
     * @param waterlogged
     * 指定方块是否应含水。空气和未定义的方块
     * 不能为含水状态。
     * 默认值：false
     * @throws
     * 如果方块类型为 StructureVoid 则抛出异常。
     * 如果方块为 undefined 且 waterlogged 设置为 true 则抛出异常。
     * 如果方块为空气且 waterlogged 设置为 true 则抛出异常。
     * 如果位置超出结构边界则抛出异常。
     * 如果 Structure 已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}

/**
 * 结构与相关 API 的管理器。包括创建、获取、放置和删除结构的
 * API。
 */
export class StructureManager {
    private constructor();
    /**
     * @remarks
     * 在内存中创建一个空白结构。使用 {@link
     * Structure.setBlockPermutation} 来用方块填充结构，
     * 并通过 {@link Structure.saveAs} 保存更改。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 结构的名称。有效标识符必须包含命名空间且必须唯一。
     * @param size
     * 结构的大小。例如，要创建单个方块结构，大小应为 {x:1, y:1, z:1}。
     * @param saveMode
     * 创建时结构的保存方式。默认为 StructureSaveMode.Memory。
     * 默认值：0
     * @returns
     * 返回新创建的结构。
     * @throws
     * 如果标识符无效，则抛出异常。有效标识符必须包含命名空间且必须唯一。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * 从世界中的方块创建一个新结构。这在功能上等同于 /structure save 命令。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 结构的名称。有效标识符必须包含命名空间且必须唯一。
     * @param dimension
     * 从中读取方块所用的维度。
     * @param from
     * 结构区域起始角的坐标。
     * @param to
     * 结构区域结束角的坐标。
     * @param options
     * 从世界创建结构时的附加选项。
     * @returns
     * 返回新创建的结构。
     * @throws
     * 如果标识符无效，则抛出异常。有效标识符必须包含命名空间且必须唯一。
     * 如果结构边界超过最大大小，则抛出异常。
     * 如果结构边界包含世界边界以外的方块，则抛出异常。
     *
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        from: Vector3,
        to: Vector3,
        options?: StructureCreateOptions,
    ): Structure;
    /**
     * @remarks
     * 从内存和世界（如果存在）中删除一个结构。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param structure
     * 要删除的结构标识符或 Structure 对象。注意，Structure 对象在删除后将失效。
     * @returns
     * 返回结构是否已被移除。
     * @throws
     * 如果结构无法被删除，则抛出异常。例如，从行为包加载的结构。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    /**
     * @remarks
     * 获取已保存到内存或世界中的结构。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 要获取的结构的名称。
     * @returns
     * 如果存在，返回结构；否则返回 undefined。
     */
    get(identifier: string): Structure | undefined;
    /**
     * @remarks
     * 返回行为包中包含的所有结构的列表。不包括已保存到世界或内存中的结构。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 结构标识符的列表。
     */
    getPackStructureIds(): string[];
    /**
     * @remarks
     * 返回已保存到世界和内存中的所有结构的列表。不包括行为包中包含的结构。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 结构标识符的列表。
     */
    getWorldStructureIds(): string[];
    /**
     * @remarks
     * 在世界中放置一个结构。放置在未加载区块中的结构将加入加载队列。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param structure
     * 结构的标识符或 Structure 对象。
     * @param dimension
     * 应放置结构的维度。
     * @param location
     * 维度中应放置结构的位置。
     * @param options
     * 结构放置的附加选项。
     * @throws
     * 如果完整性值超出 [0,1] 范围，则抛出异常。
     * 如果完整性种子无效，则抛出异常。
     * 如果放置位置包含世界边界以外的方块，则抛出异常。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    place(
        structure: string | Structure,
        dimension: Dimension,
        location: Vector3,
        options?: StructurePlaceOptions,
    ): void;
    /**
     * @remarks
     * 在世界中放置部分拼图结构。这对于调试拼图方块之间的连接非常有用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param pool
     * 起始模板池的标识符。
     * @param targetJigsaw
     * 起始拼图方块的名称。该方块必须包含在起始模板池的至少一个结构模板中。
     * @param maxDepth
     * 拼图结构的最大递归深度。
     * 范围：[1, 20]
     * @param dimension
     * 放置拼图结构所在的维度。
     * @param location
     * 拼图结构相对于 targetJigsaw 方块开始生成的位置。
     * @param options
     * 生成拼图结构时可选的设置。
     * @returns
     * 返回一个 {@link BlockBoundingBox} 对象，表示拼图结构的最大边界。
     * @throws
     * 如果 maxDepth 超出 [1,20] 范围，则抛出异常。
     * 如果由于无效参数或拼图配置导致生成失败，则抛出异常。
     * 如果放置位置包含世界边界以外的方块，则抛出异常。
     *
     * {@link PlaceJigsawError}
     */
    placeJigsaw(
        pool: string,
        targetJigsaw: string,
        maxDepth: number,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawPlaceOptions,
    ): BlockBoundingBox;
    /**
     * @remarks
     * 在世界中放置一个拼图结构。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 拼图结构的标识符。
     * @param dimension
     * 放置拼图结构所在的维度。
     * @param location
     * 拼图结构开始生成的位置。注意，除非设置了 ignoreStartHeight 选项，
     * 否则 y 值将被结构的起始高度覆盖。
     * @param options
     * 生成拼图结构时可选的设置。
     * @returns
     * 返回一个 {@link BlockBoundingBox} 对象，表示拼图结构的最大边界。
     * @throws
     * 如果由于无效参数或拼图配置导致生成失败，则抛出异常。
     * 如果放置位置包含世界边界以外的方块，则抛出异常。
     *
     * {@link PlaceJigsawError}
     */
    placeJigsawStructure(
        identifier: string,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawStructurePlaceOptions,
    ): BlockBoundingBox;
}

/**
 * 提供系统级事件和函数的类。
 */
export class System {
    private constructor();
    /**
     * @remarks
     * 返回系统级操作的 after 事件集合。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @remarks
     * 返回系统级操作的 before 事件集合。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * 表示服务器当前的游戏刻（tick）。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * 如果这是一个当前已加载编辑器的世界，则返回 true；否则返回 false。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly isEditorWorld: boolean;
    /**
     * @remarks
     * 包含服务器的设备信息。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly serverSystemInfo: SystemInfo;
    /**
     * @remarks
     * 取消通过 {@link System.runJob} 排队的任务的执行。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param jobId
     * 从 {@link System.runJob} 返回的任务 ID。
     */
    clearJob(jobId: number): void;
    /**
     * @remarks
     * 取消先前通过 {@link System.run} 调度的函数运行的执行。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param runId
     * 要取消的运行的 ID。
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * 在下一个可用的未来时间运行指定函数。这通常用于实现延迟行为和游戏循环。在事件处理程序上下文中运行时，通常会在事件发生的同一刻的末尾运行代码。在其他代码（如 system.run 回调）中运行时，将在下一刻运行该函数。但请注意，根据系统负载，不保证在同一刻或下一刻运行。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 要在下一个游戏刻运行的回调函数。
     * @returns
     * 一个不透明的标识符，可用于 `clearRun` 函数取消此运行的执行。
     * @example trapTick.ts
     * ```typescript
     * import { world, system } from '@minecraft/server';
     *
     * function trapTick() {
     *   try {
     *     // Minecraft runs at 20 ticks per second.
     *     if (system.currentTick % 1200 === 0) {
     *       world.sendMessage('Another minute passes...');
     *     }
     *   } catch (e) {
     *     console.warn('Error: ' + e);
     *   }
     *
     *   system.run(trapTick);
     * }
     * ```
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * 按时间间隔运行一组代码。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 当此时间间隔发生时运行的函数代码。
     * @param tickInterval
     * 运行回调的间隔刻数 N。
     * @returns
     * 一个不透明的句柄，可用于 clearRun 方法停止此函数按时间间隔运行。
     * @example every30Seconds.ts
     * ```typescript
     * import { world, system, DimensionLocation } from '@minecraft/server';
     *
     * function every30Seconds(targetLocation: DimensionLocation) {
     *   const intervalRunIdentifier = Math.floor(Math.random() * 10000);
     *
     *   system.runInterval(() => {
     *     world.sendMessage('This is an interval run ' + intervalRunIdentifier + ' sending a message every 30 seconds.');
     *   }, 600);
     * }
     * ```
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks
     * 将生成器排队运行至完成。生成器每刻会获得一个时间片，并运行到其让出（yield）或完成。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param generator
     * 要运行的生成器实例。
     * @returns
     * 一个不透明的句柄，可用于 {@link System.clearJob} 停止此生成器的运行。
     * @example cubeGenerator.ts
     * ```typescript
     * import { system, BlockPermutation, DimensionLocation } from '@minecraft/server';
     *
     * function cubeGenerator(targetLocation: DimensionLocation) {
     *   const blockPerm = BlockPermutation.resolve('minecraft:cobblestone');
     *
     *   system.runJob(blockPlacingGenerator(blockPerm, targetLocation, 15));
     * }
     *
     * function* blockPlacingGenerator(blockPerm: BlockPermutation, startingLocation: DimensionLocation, size: number) {
     *   for (let x = startingLocation.x; x < startingLocation.x + size; x++) {
     *     for (let y = startingLocation.y; y < startingLocation.y + size; y++) {
     *       for (let z = startingLocation.z; z < startingLocation.z + size; z++) {
     *         const block = startingLocation.dimension.getBlock({ x: x, y: y, z: z });
     *         if (block) {
     *           block.setPermutation(blockPerm);
     *         }
     *         yield;
     *       }
     *     }
     *   }
     * }
     * ```
     */
    runJob(generator: Generator<void, void, void>): number;
    /**
     * @remarks
     * 在由 tickDelay 指定的未来时间运行一组代码。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 当此超时发生时运行的函数代码。
     * @param tickDelay
     * 在调用该函数之前等待的时间（以刻为单位）。
     * @returns
     * 一个不透明的句柄，可用于 clearRun 方法停止此函数按时间间隔运行。
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @remarks
     * 在脚本中触发一个事件，包含指定的消息 ID 和负载。
     *
     * @param id
     * 要发送的消息的标识符。这是自定义的，取决于您在世界中可能安装的行为包和内容的类型。
     * @param message
     * 要发送的消息的数据组件。这是自定义的，取决于您在世界中可能安装的行为包和内容的类型。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 当引擎错误发生时。
     *
     * {@link minecraftcommon.InvalidArgumentError} - 当参数无效时。
     *
     * {@link NamespaceNameError} - 当命名空间名称无效时。
     */
    sendScriptEvent(id: string, message: string): void;
    /**
     * @remarks
     * waitTicks 返回一个在请求的刻数之后解决的 Promise。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param ticks
     * 要等待的刻数。最小值为 1。
     * @returns
     * 一个 Promise，当指定数量的刻已过后解决。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 当引擎错误发生时。
     */
    waitTicks(ticks: number): Promise<void>;
}

/**
 * 提供一组在更广泛的
 * Minecraft 脚本系统内触发的事件。
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * 当 /scriptevent 命令被设置时触发的事件。这
     * 为命令和其他系统提供了一种在脚本中触发
     * 行为的方式。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

/**
 * 一组在实际动作发生之前触发的事件。
 * 在大多数情况下，你有可能取消或修改
 * 即将发生的事件。请注意，在 before 事件中，
 * 任何修改游戏状态的 API 都不会生效，
 * 并且会抛出错误。
 */
export class SystemBeforeEvents {
    private constructor();
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly shutdown: ShutdownBeforeEventSignal;
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly startup: StartupBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 当脚本看门狗关闭服务器时触发。
     * 这可能是由于使用了过多内存，或导致了
     * 严重的减速或挂起。
     * 要阻止关闭，请将事件的 cancel 属性设置为
     * true。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}

/**
 * 包含设备信息，例如内存层级。
 */
export class SystemInfo {
    private constructor();
    /**
     * @remarks
     * 描述设备的内存。
     *
     */
    readonly memoryTier: MemoryTier;
}

/**
 * 包含与目标方块被击中时变化相关的信息。
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 源实体击中方块的位置。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 方块被击中前的红石能量。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 方块被击中时的红石能量。
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 击中目标方块的可选源实体。
     *
     */
    readonly source: Entity;
}

/**
 * 管理当目标方块被击中时
 * 触发的回调。
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当目标方块被击中时
     * 将会调用该回调。
     * @param callback - 将在目标方块被击中时调用的回调函数。
     * @returns 返回传入的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当目标方块被击中时
     * 不再被调用。
     * @param callback - 要移除的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}

/**
 * 一个原始形状类，表示世界中
 * 带有背景的文本标签。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TextPrimitive extends PrimitiveShape {
    /**
     * @remarks
     * 如果设置为 true，文本原始形状将渲染背景的背面。
     * 默认为 true，但若 'useRotation' 设置为 false，则始终为 false。
     *
     */
    backfaceVisible: boolean;
    /**
     * @remarks
     * 文本背景板的颜色。如果设置为 undefined，则使用默认颜色。
     *
     */
    backgroundColorOverride?: RGBA;
    /**
     * @remarks
     * 如果设置为 true，文本将被方块或实体遮挡。
     * 默认设置为 false（始终渲染）。
     *
     */
    depthTest: boolean;
    /**
     * @beta
     * @remarks
     * 该值决定 TextPrimitive 的行间距。
     * 默认行间距高度为 0。
     *
     */
    lineGapHeight: number;
    /**
     * @remarks
     * 获取调试文本形状的文本。如果 `setText` 是以 RawMessage 或
     * RawText 对象调用的，则返回相应 RawText，否则返回字符串。
     *
     */
    readonly text: RawMessage | string;
    /**
     * @remarks
     * 如果设置为 true，文本原始形状将渲染文本的背面。
     * 默认为 true，但若 'useRotation' 设置为 false，则始终为 false。
     *
     */
    textBackfaceVisible: boolean;
    /**
     * @remarks
     * 如果设置为 true，文本将不会面向摄像机，
     * 而是使用形状的旋转。
     *
     */
    useRotation: boolean;
    /**
     * @param location - 文本原始形状的位置。
     * @param text - 要显示的文本。
     */
    constructor(location: DimensionLocation | Vector3, text: RawMessage | string);
    /**
     * @remarks
     * 设置要显示的文本。
     *
     * @param text - 要显示的文本。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link RawMessageError}
     */
    setText(text: RawMessage | string): void;
}

/**
 * 此管理器用于向维度添加、移除或查询临时 ticking area。这些 ticking area 受限于每个包固定的区块数量，独立于命令的限制。无法修改或查询由其他包或命令添加的 ticking area。
 */
export class TickingAreaManager {
    private constructor();
    /**
     * @remarks
     * 此管理器中当前正在 tick 的区块数量。
     *
     */
    readonly chunkCount: number;
    /**
     * @remarks
     * 允许的最大 tick 区块数量。重叠的 ticking area 区块也会计入总数。
     *
     */
    readonly maxChunkCount: number;
    /**
     * @remarks
     * 创建一个 ticking area。当区域中所有区块加载并开始 tick 时，Promise 将完成。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 要创建的 ticking area 的标识符。
     * @param options - 用于定义 ticking area 的选项。
     * @returns 返回一个 Promise，当区域所有区块加载并开始 tick 时完成。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    /**
     * @remarks
     * 获取此管理器添加的所有 ticking area。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回一个包含所有 ticking area 的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getAllTickingAreas(): TickingArea[];
    /**
     * @remarks
     * 尝试通过标识符获取特定的 ticking area。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 要查找的 ticking area 的标识符或 TickingArea 对象。
     * @returns 返回找到的 ticking area，如果未找到则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    /**
     * @remarks
     * 如果管理器有足够的区块容量来容纳该 ticking area，则返回 true；否则返回 false。如果长度或宽度超过 255 个区块限制，也会返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param options - 用于定义 ticking area 的选项。
     * @returns 如果有足够容量则返回 true，否则返回 false。
     */
    hasCapacity(options: TickingAreaOptions): boolean;
    /**
     * @remarks
     * 如果标识符已存在于管理器中则返回 true，否则返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 要检查的标识符。
     * @returns 如果标识符已存在则返回 true，否则返回 false。
     */
    hasTickingArea(identifier: string): boolean;
    /**
     * @remarks
     * 移除此管理器添加的所有 ticking area。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    removeAllTickingAreas(): void;
    /**
     * @remarks
     * 通过唯一标识符移除特定的 ticking area。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 要移除的 ticking area 的标识符或 TickingArea 对象。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    removeTickingArea(identifier: string | TickingArea): void;
}

/**
 * @beta
 * 世界时钟上的一个具名时间点，可只出现一次或周期性出现。
 */
export class TimeMarker {
    private constructor();
    /**
     * @remarks
     * 表示此时间标记的标识符。
     *
     */
    readonly name: string;
    /**
     * @remarks
     * 时间标记重复的间隔（以刻为单位）。如果未指定，时间标记将仅出现一次。
     *
     * @throws
     * WorldClockInvalidTimeMarkerError：如果时间标记无效。
     *
     * {@link WorldClockInvalidTimeMarkerError}
     */
    readonly period?: number;
    /**
     * @remarks
     * 时间标记在世界时钟上发生的时间（以刻为单位）。
     *
     * @throws
     * WorldClockInvalidTimeMarkerError：如果时间标记无效。
     *
     * {@link WorldClockInvalidTimeMarkerError}
     */
    readonly time: number;
}

/**
 * 表示一个用于触发事件的触发器。
 */
export class Trigger {
    /**
     * @remarks
     * 触发器的事件名称。
     *
     */
    eventName: string;
    /**
     * @remarks
     * 创建一个新的触发器。
     * @param eventName 事件名称。
     */
    constructor(eventName: string);
}

/**
 * 包含与绊线触发变化相关的信息。
 * @example tripWireTripEvent.ts
 * ```typescript
 * import { world, system, BlockPermutation, TripWireTripAfterEvent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function tripWireTripEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // set up a tripwire
 *   const redstone = targetLocation.dimension.getBlock({
 *     x: targetLocation.x,
 *     y: targetLocation.y - 1,
 *     z: targetLocation.z,
 *   });
 *   const tripwire = targetLocation.dimension.getBlock(targetLocation);
 *
 *   if (redstone === undefined || tripwire === undefined) {
 *     log('Could not find block at location.');
 *     return -1;
 *   }
 *
 *   redstone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.RedstoneBlock));
 *   tripwire.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.TripWire));
 *
 *   world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {
 *     const eventLoc = tripWireTripEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
 *       log(
 *         'Tripwire trip event at tick ' +
 *           system.currentTick +
 *           (tripWireTripEvent.sources.length > 0 ? ' by entity ' + tripWireTripEvent.sources[0].id : '')
 *       );
 *     }
 *   });
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 方块是否具有红石信号。
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * 导致绊线被触发的源实体。
     *
     */
    readonly sources: Entity[];
}

/**
 * 管理连接到绊线被触发时的
 * 回调函数。
 * @example tripWireTripEvent.ts
 * ```typescript
 * import { world, system, BlockPermutation, TripWireTripAfterEvent, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function tripWireTripEvent(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   // set up a tripwire
 *   const redstone = targetLocation.dimension.getBlock({
 *     x: targetLocation.x,
 *     y: targetLocation.y - 1,
 *     z: targetLocation.z,
 *   });
 *   const tripwire = targetLocation.dimension.getBlock(targetLocation);
 *
 *   if (redstone === undefined || tripwire === undefined) {
 *     log('Could not find block at location.');
 *     return -1;
 *   }
 *
 *   redstone.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.RedstoneBlock));
 *   tripwire.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.TripWire));
 *
 *   world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {
 *     const eventLoc = tripWireTripEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
 *       log(
 *         'Tripwire trip event at tick ' +
 *           system.currentTick +
 *           (tripWireTripEvent.sources.length > 0 ? ' by entity ' + tripWireTripEvent.sources[0].id : '')
 *       );
 *     }
 *   });
 * }
 * ```
 */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在绊线被触发时
     * 调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 用于绊线触发事件的回调函数。
     * @returns - 用于取消订阅的函数。
     *
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在绊线被触发时
     * 调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}

/**
 * @beta
 * 包含与脚本看门狗终止相关的信息。
 */
export class WatchdogTerminateBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消脚本运行时的终止。
     * 请注意，根据服务器配置设置，可能不允许取消终止。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 包含脚本运行时将要被终止的原因。
     *
     */
    readonly terminateReason: WatchdogTerminateReason;
}

/**
 * @beta
 * 管理连接到某个回调的回调，该回调会在脚本运行时因违反性能看门狗系统而被终止时被调用。
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在脚本运行时因违反性能看门狗系统而被终止时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权被调用。
     * @returns
     * 以受限执行特权被调用的闭包。
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调原本会在脚本运行时因违反性能看门狗系统而被终止时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权被调用。
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}

/**
 * 显示在玩家定位栏上的路标点的基类。路标点可以追踪位置或实体，并使用可自定义的纹理和颜色进行渲染。
 *
 * 路标点作为共享句柄，可添加到多个玩家的定位栏中。当你修改路标点的属性（如颜色、纹理或启用状态）时，对于所有在其定位栏中包含该路标点的玩家，这些更改都会生效。这使你可以高效地管理多个玩家的路标点，而无需为每个玩家创建单独的实例。
 */
export class Waypoint {
    private constructor();
    /**
     * @remarks
     * 可选的 {@link RGB} 颜色色调，应用于路标点图标。若未指定，路标点将使用其默认颜色。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    color?: RGB;
    /**
     * @remarks
     * 控制路标点当前是否显示在玩家的屏幕上。禁用时，路标点会被隐藏，但仍保持有效。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    isEnabled: boolean;
    /**
     * @remarks
     * 返回路标点当前是否有效。当所追踪的实体不再有效时，路标点将变为无效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 用于根据距离或其他条件决定路标点显示哪种图标纹理的 {@link WaypointTextureSelector}。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    textureSelector: WaypointTextureSelector;
    /**
     * @remarks
     * 获取路标点当前的 {@link DimensionLocation}。对于实体路标点，返回实体的当前位置；对于位置路标点，返回存储的位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 该路标点当前的维度位置。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    getDimensionLocation(): DimensionLocation;
    /**
     * @remarks
     * 从所有已添加该路标点的定位栏中移除它。这会影响所有在其定位栏中包含该路标点的玩家。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    remove(): void;
}

/**
 * 包含与环境中天气变化相关的信息。
 */
export class WeatherChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 天气发生变化的维度。
     *
     */
    readonly dimension: string;
    /**
     * @remarks
     * 天气变化后的天气类型。
     *
     */
    readonly newWeather: WeatherType;
    /**
     * @remarks
     * 天气变化前的天气类型。
     *
     */
    readonly previousWeather: WeatherType;
}

/**
 * 管理与天气变化相关的回调。
 */
export class WeatherChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当天气变化时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数，接收一个 WeatherChangeAfterEvent 参数。
     * @returns 返回一个函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: WeatherChangeAfterEvent) => void): (arg0: WeatherChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在天气变化时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数，该函数之前通过 subscribe 添加。
     */
    unsubscribe(callback: (arg0: WeatherChangeAfterEvent) => void): void;
}

/**
 * 包含与环境中天气
 * 变化相关的信息。
 */
export class WeatherChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，天气变化将被取消。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 设置新天气的持续时间（以刻为单位）。
     *
     */
    duration: number;
    /**
     * @remarks
     * 将要应用的天气类型。
     *
     */
    newWeather: WeatherType;
    /**
     * @remarks
     * 事件触发之前的
     * 天气类型。
     *
     */
    readonly previousWeather: WeatherType;
}

/**
 * 管理天气变化前事件的回调。
 */
export class WeatherChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在天气变化前被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包将以受限执行权限被调用。
     * @returns
     * 返回以受限执行权限被调用的闭包。
     */
    subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在天气变化前被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包将以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}

/**
 * 封装世界状态的类——包含一组维度以及 Minecraft 的环境。
 */
export class World {
    private constructor();

    /**
     * @remarks
     * 包含一组适用于整个世界的事件。事件回调以延迟方式调用。事件回调在读写模式下执行。
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly afterEvents: WorldAfterEvents;

    /**
     * @beta
     * @remarks
     * 启用或禁用作弊。
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    allowCheats: boolean;

    /**
     * @remarks
     * 包含一组适用于整个世界的事件。事件回调立即调用。事件回调在只读模式下执行。
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     * @example customCommand.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function customCommand(targetLocation: DimensionLocation) {
     *   const chatCallback = world.beforeEvents.chatSend.subscribe(eventData => {
     *     if (eventData.message.includes('cancel')) {
     *       // Cancel event if the message contains "cancel"
     *       eventData.cancel = true;
     *     } else {
     *       const args = eventData.message.split(' ');
     *
     *       if (args.length > 0) {
     *         switch (args[0].toLowerCase()) {
     *           case 'echo':
     *             // Send a modified version of chat message
     *             world.sendMessage(`Echo '${eventData.message.substring(4).trim()}'`);
     *             break;
     *           case 'help':
     *             world.sendMessage(`Available commands: echo <message>`);
     *             break;
     *         }
     *       }
     *     }
     *   });
     * }
     * ```
     */
    readonly beforeEvents: WorldBeforeEvents;

    /**
     * @remarks
     * 适用于该世界的游戏规则。
     *
     */
    readonly gameRules: GameRules;

    readonly isHardcore: boolean;

    /**
     * @remarks
     * 用于在世界中添加和移除基本文本对象的管理器。
     *
     */
    readonly primitiveShapesManager: PrimitiveShapesManager;

    /**
     * @remarks
     * 返回适用于该世界的全局记分板。
     *
     */
    readonly scoreboard: Scoreboard;

    /**
     * @remarks
     * 世界种子。
     *
     */
    readonly seed: string;

    /**
     * @rc
     * @remarks
     * 提供对为该世界加载的声音定义的只读访问。
     *
     */
    readonly soundDefinitionRegistry: SoundDefinitionRegistry;

    /**
     * @remarks
     * 返回与 {@link Structure} 相关 API 的管理器。
     *
     */
    readonly structureManager: StructureManager;

    /**
     * @remarks
     * 用于添加、移除和查询包专属常加载区域的管理器。
     *
     */
    readonly tickingAreaManager: TickingAreaManager;

    /**
     * @beta
     * @remarks
     * 一个仅供内部使用的方法，用于在客户端与服务器之间广播特定消息。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param id
     * 消息标识符。
     * @param value
     * 消息内容。
     */
    broadcastClientMessage(id: string, value: string): void;

    /**
     * @remarks
     * 清除此行为包在该世界中声明的所有动态属性。
     *
     */
    clearDynamicProperties(): void;

    /**
     * @remarks
     * 返回自世界开始以来的绝对时间。
     *
     * @returns
     * 自世界开始以来的绝对时间。
     */
    getAbsoluteTime(): number;

    /**
     * @remarks
     * 返回可在世界中使用的瞄准辅助预设与类别。
     *
     * @returns
     * 瞄准辅助注册表。
     */
    getAimAssist(): AimAssistRegistry;

    /**
     * @remarks
     * 返回世界中所有活动玩家组成的数组。
     *
     * @returns
     * 包含所有活动玩家的数组。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getAllPlayers(): Player[];

    /**
     * @beta
     * @remarks
     * 根据名称获取世界时钟。
     *
     * @param name
     * 要获取的世界时钟的名称。
     * @returns
     * 具有给定名称的 {@link WorldClock}。
     * @throws
     * WorldClockNotFoundError：如果给定名称的世界时钟不存在。
     *
     * {@link WorldClockNotFoundError}
     */
    getClock(name: string): WorldClock;

    /**
     * @remarks
     * 返回当前的天数。
     *
     * @returns
     * 当前天数，由世界时间除以每天的刻数得出。新世界从第 0 天开始。
     */
    getDay(): number;

    /**
     * @remarks
     * 返回默认的主世界出生点位置。
     *
     * @returns
     * 默认的主世界出生点位置。默认情况下，Y 坐标为 32767，表示玩家的出生高度不固定，将由周围方块决定。
     */
    getDefaultSpawnLocation(): Vector3;

    /**
     * @remarks
     * 获取世界的难度。
     *
     * @returns
     * 返回世界难度。
     */
    getDifficulty(): Difficulty;

    /**
     * @remarks
     * 返回一个维度对象。
     *
     * @param dimensionId
     * 维度的名称。例如 "overworld"、"nether" 或 "the_end"。
     * @returns
     * 所请求的维度。
     * @throws
     * 如果给定的维度名称无效则抛出错误。
     */
    getDimension(dimensionId: string): Dimension;

    /**
     * @remarks
     * 返回一个属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回该属性的值，如果该属性尚未设置则返回 undefined。
     * @throws
     * 如果给定的动态属性标识符未定义则抛出错误。
     * @example incrementDynamicProperty.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function incrementDynamicProperty(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   let number = world.getDynamicProperty('samplelibrary:number');
     *
     *   log('Current value is: ' + number);
     *
     *   if (number === undefined) {
     *     number = 0;
     *   }
     *
     *   if (typeof number !== 'number') {
     *     log('Number is of an unexpected type.');
     *     return -1;
     *   }
     *
     *   world.setDynamicProperty('samplelibrary:number', number + 1);
     * }
     * ```
     * @example incrementDynamicPropertyInJsonBlob.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function incrementDynamicPropertyInJsonBlob(
     *   log: (message: string, status?: number) => void,
     *   targetLocation: DimensionLocation
     * ) {
     *   let paintStr = world.getDynamicProperty('samplelibrary:longerjson');
     *   let paint: { color: string; intensity: number } | undefined = undefined;
     *
     *   log('Current value is: ' + paintStr);
     *
     *   if (paintStr === undefined) {
     *     paint = {
     *       color: 'purple',
     *       intensity: 0,
     *     };
     *   } else {
     *     if (typeof paintStr !== 'string') {
     *       log('Paint is of an unexpected type.');
     *       return -1;
     *     }
     *
     *     try {
     *       paint = JSON.parse(paintStr);
     *     } catch (e) {
     *       log('Error parsing serialized struct.');
     *       return -1;
     *     }
     *   }
     *
     *   if (!paint) {
     *     log('Error parsing serialized struct.');
     *     return -1;
     *   }
     *
     *   paint.intensity++;
     *   paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
     *   world.setDynamicProperty('samplelibrary:longerjson', paintStr);
     * }
     * ```
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;

    /**
     * @remarks
     * 获取已在该世界中设置的一组动态属性标识符。
     *
     * @returns
     * 由活动动态属性标识符组成的字符串数组。
     */
    getDynamicPropertyIds(): string[];

    /**
     * @remarks
     * 获取动态属性的总字节数。这可用于你自己的分析，以确保你没有存储体量过大的动态属性集合。
     *
     * @returns
     * 动态属性的总字节数。
     */
    getDynamicPropertyTotalByteCount(): number;

    /**
     * @remarks
     * 根据提供的 id 返回一个实体。
     *
     * @param id
     * 实体的 id。
     * @returns
     * 所请求的实体对象。
     * @throws
     * 如果给定的实体 id 无效则抛出错误。
     */
    getEntity(id: string): Entity | undefined;

    /**
     * @remarks
     * 返回一个能够从多种来源生成战利品的管理器。
     *
     * @returns
     * 具有多种战利品生成方法的战利品表管理器。
     */
    getLootTableManager(): LootTableManager;

    /**
     * @remarks
     * 返回当前时间对应的月相。
     *
     * @returns
     * 当前时间的月相。
     */
    getMoonPhase(): MoonPhase;

    /**
     * @remarks
     * 返回由包设置名称与值组成的映射。
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @returns
     * 包设置名称与值的键值对映射。
     */
    getPackSettings(): Record<string, string[] | boolean | number | string>;

    /**
     * @remarks
     * 根据通过 EntityQueryOptions 筛选条件集定义的一组条件，返回一组玩家。
     *
     * @param options
     * 可用于筛选返回的玩家集合的附加选项。
     * @returns
     * 玩家数组。
     * @throws
     * 如果提供的 EntityQueryOptions 无效则抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];

    /**
     * @remarks
     * 返回一天中的时间。
     *
     * @returns
     * 一天中的时间，以刻为单位，介于 0 到 24000 之间。
     */
    getTimeOfDay(): number;

    /**
     * @remarks
     * 为所有玩家播放指定的音乐曲目。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param trackId
     * 要播放的音乐曲目标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws
     * 当 volume 小于 0.0 时抛出错误。
     * 当 fade 小于 0.0 时抛出错误。
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     * @example playMusicAndSound.ts
     * ```typescript
     * import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, DimensionLocation } from '@minecraft/server';
     *
     * function playMusicAndSound(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   const musicOptions: MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   world.playMusic('music.menu', musicOptions);
     *
     *   const worldSoundOptions: WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   world.playSound('ambient.weather.thunder', targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound('bucket.fill_water', playerSoundOptions);
     * }
     * ```
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;

    /**
     * @remarks
     * 为玩家额外排队一首音乐曲目。如果当前没有曲目正在播放，则会播放一首音乐曲目。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param trackId
     * 要播放的音乐曲目标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws
     * 当 volume 小于 0.0 时抛出错误。
     * 当 fade 小于 0.0 时抛出错误。
     *
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;

    /**
     * @remarks
     * 向所有玩家发送消息。
     *
     * @param message
     * 要显示的消息。
     * @throws
     * 如果提供的 {@link RawMessage} 格式无效，此方法可能抛出错误。例如，为 `score` 提供了空的 `name` 字符串时。
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;

    /**
     * @remarks
     * 设置世界时间。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param absoluteTime
     * 世界时间，以刻为单位。
     */
    setAbsoluteTime(absoluteTime: number): void;

    /**
     * @remarks
     * 为所有玩家设置默认出生点位置。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param spawnLocation
     * 出生点的位置。注意，该位置默认应位于主世界维度内。
     * @throws
     * 当提供的出生点位置超出边界时抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;

    /**
     * @remarks
     * 设置世界难度。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param difficulty
     * 要将世界设置为的难度。
     */
    setDifficulty(difficulty: Difficulty): void;

    /**
     * @remarks
     * 将多个动态属性设置为指定值。
     *
     * @param values
     * 要设置的动态属性键值对 Record。如果数据值为 null，则会改为移除该属性。
     * @throws
     * 当键或值超出允许范围时抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;

    /**
     * @remarks
     * 将指定属性设置为一个值。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性数据值。如果该值为 null，则会改为移除该属性。
     * @throws
     * 当给定的动态属性标识符未定义时抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     * @example incrementDynamicProperty.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function incrementDynamicProperty(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   let number = world.getDynamicProperty('samplelibrary:number');
     *
     *   log('Current value is: ' + number);
     *
     *   if (number === undefined) {
     *     number = 0;
     *   }
     *
     *   if (typeof number !== 'number') {
     *     log('Number is of an unexpected type.');
     *     return -1;
     *   }
     *
     *   world.setDynamicProperty('samplelibrary:number', number + 1);
     * }
     * ```
     * @example incrementDynamicPropertyInJsonBlob.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function incrementDynamicPropertyInJsonBlob(
     *   log: (message: string, status?: number) => void,
     *   targetLocation: DimensionLocation
     * ) {
     *   let paintStr = world.getDynamicProperty('samplelibrary:longerjson');
     *   let paint: { color: string; intensity: number } | undefined = undefined;
     *
     *   log('Current value is: ' + paintStr);
     *
     *   if (paintStr === undefined) {
     *     paint = {
     *       color: 'purple',
     *       intensity: 0,
     *     };
     *   } else {
     *     if (typeof paintStr !== 'string') {
     *       log('Paint is of an unexpected type.');
     *       return -1;
     *     }
     *
     *     try {
     *       paint = JSON.parse(paintStr);
     *     } catch (e) {
     *       log('Error parsing serialized struct.');
     *       return -1;
     *     }
     *   }
     *
     *   if (!paint) {
     *     log('Error parsing serialized struct.');
     *     return -1;
     *   }
     *
     *   paint.intensity++;
     *   paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
     *   world.setDynamicProperty('samplelibrary:longerjson', paintStr);
     * }
     * ```
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;

    /**
     * @remarks
     * 设置一天中的时间。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param timeOfDay
     * 一天中的时间，以刻为单位，范围为 0 到 24000。
     * @throws
     * 当提供的一天中的时间不在有效范围内时抛出错误。
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;

    /**
     * @remarks
     * 停止播放任何音乐曲目。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     */
    stopMusic(): void;

}

/**
 * 包含一组在世界范围内可用的事件。
 * 涵盖整个世界的作用域。
 */
export class WorldAfterEvents {
    private constructor();

    /**
     * @remarks
     * 当方块容器关闭时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly blockContainerClosed: BlockContainerClosedAfterEventSignal;

    /**
     * @remarks
     * 当方块容器打开时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly blockContainerOpened: BlockContainerOpenedAfterEventSignal;

    /**
     * @remarks
     * 爆炸摧毁的每个方块位置都会触发此事件。
     * 该事件在方块已被摧毁后触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;

    /**
     * @remarks
     * 当按钮被按下时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 聊天消息已广播或发送给玩家后触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly chatSend: ChatSendAfterEventSignal;

    /**
     * @remarks
     * 当实体事件被触发并会更新实体的组件定义状态时，
     * 触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;

    /**
     * @remarks
     * 当效果（如中毒）被添加到实体上时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;

    /**
     * @remarks
     * 当实体容器关闭时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityContainerClosed: EntityContainerClosedAfterEventSignal;

    /**
     * @remarks
     * 当实体容器打开时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityContainerOpened: EntityContainerOpenedAfterEventSignal;

    /**
     * @remarks
     * 当实体死亡时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityDie: EntityDieAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHeal: EntityHealAfterEventSignal;

    /**
     * @remarks
     * 当实体生命值发生任何程度的变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;

    /**
     * @remarks
     * 当实体击中方块（即近战攻击方块）时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;

    /**
     * @remarks
     * 当实体击中另一个实体（即近战攻击实体）时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;

    /**
     * @remarks
     * 当实体受伤（受到伤害）时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;

    /**
     * @remarks
     * 当实体掉落物品时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityItemDrop: EntityItemDropAfterEventSignal;

    /**
     * @remarks
     * 当实体拾取物品时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityItemPickup: EntityItemPickupAfterEventSignal;

    /**
     * @remarks
     * 当实体被加载时触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;

    /**
     * @remarks
     * 当实体被移除时触发（例如，可能被卸载，或在被击杀后被移除）。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;

    /**
     * @remarks
     * 当实体生成时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;

    /**
     * @rc
     * @remarks
     * 当实体开始潜行时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityStartSneaking: EntityStartSneakingAfterEventSignal;

    /**
     * @rc
     * @remarks
     * 当实体停止潜行时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityStopSneaking: EntityStopSneakingAfterEventSignal;

    /**
     * @rc
     * @remarks
     * 当实体被驯服时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityTamed: EntityTamedAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityUpgrade: EntityUpgradeAfterEventSignal;

    /**
     * @remarks
     * 爆炸发生后触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly explosion: ExplosionAfterEventSignal;

    /**
     * @remarks
     * 当 world.gameRules 属性发生变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品完成充能时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品停止充能时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品开始充能时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;

    /**
     * @remarks
     * 当玩家按下“使用物品 / 放置方块”按钮并成功使用物品或放置方块时触发此事件。
     * 如果放置了多个方块，此事件只会在方块放置开始时触发一次。
     * 注意：此事件不适用于锄头或斧头物品。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;

    /**
     * @remarks
     * 当可充能物品停止充能时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;

    /**
     * @remarks
     * 当玩家成功使用物品后松开“使用物品 / 放置方块”按钮时触发此事件。
     * 注意：此事件不适用于锄头或斧头物品。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;

    /**
     * @remarks
     * 当玩家成功使用物品时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;

    /**
     * @remarks
     * 拉杆被拉动。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 此事件是内部实现细节，目前不具备实际功能。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当某个包（pack）设置被更改时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly packSettingChange: PackSettingChangeAfterEventSignal;

    /**
     * @remarks
     * 当活塞伸展或收缩时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;

    /**
     * @remarks
     * 当玩家破坏方块时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;

    /**
     * @remarks
     * 当 {@link InputButton} 状态发生变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;

    /**
     * @remarks
     * 当玩家取消破坏方块时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerCancelBreakingBlock: PlayerCancelBreakingBlockAfterEventSignal;

    /**
     * @remarks
     * 当玩家移动到不同维度时触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerEmote: PlayerEmoteAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家选择的槽位发生变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家的 {@link InputMode} 发生变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家的输入权限发生变化时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家与方块交互时触发的事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;

    /**
     * @remarks
     * 当玩家与实体交互时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;

    /**
     * @remarks
     * 当物品被添加或移除到玩家物品栏时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal;

    /**
     * @remarks
     * 当玩家加入世界时触发此事件。另请参阅 playerSpawn，这是另一个相关事件，可用于捕获玩家在世界中首次生成的情况。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;

    /**
     * @remarks
     * 当玩家离开世界时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;

    /**
     * @remarks
     * 当玩家放置方块时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;

    /**
     * @remarks
     * 当玩家生成或重生时触发此事件。请注意，此事件中的一个附加标志会告诉你玩家是在加入后立即生成还是重生。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;

    /**
     * @remarks
     * 当玩家开始破坏方块时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerStartBreakingBlock: PlayerStartBreakingBlockAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerSwingStart: PlayerSwingStartAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当玩家对实体使用命名牌时触发的事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerUseNameTag: PlayerUseNameTagAfterEventSignal;

    /**
     * @remarks
     * 压力板已弹起（即压力板上没有实体）。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;

    /**
     * @remarks
     * 压力板已被按下（至少有一个实体移动到压力板上）。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;

    /**
     * @remarks
     * 当投射物击中方块时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;

    /**
     * @remarks
     * 当投射物击中实体时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;

    /**
     * @rc
     * @remarks
     * 跟踪的声音的声明时长已结束。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly soundCompleted: SoundCompletedAfterEventSignal;

    /**
     * @remarks
     * 目标方块被击中。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;

    /**
     * @remarks
     * 绊线被触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;

    /**
     * @remarks
     * 当 Minecraft 中的天气发生变化时，将触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当 {@link WorldClock} 被暂停时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldClockOnPaused: WorldClockOnPausedAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当 {@link WorldClock} 被恢复时触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldClockOnResumed: WorldClockOnResumedAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当 {@link WorldClock} 的时间到达时钟上的 {@link TimeMarker} 时触发此事件。这可能发生在常规游戏 tick 期间或设置时间时。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldClockOnTimeMarker: WorldClockOnTimeMarkerAfterEventSignal;

    /**
     * @beta
     * @remarks
     * 当 {@link WorldClock} 的时间被更改时触发此事件。当通过脚本或命令直接设置时间，或时钟达到最大时间并重新开始时，可能会发生这种情况。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldClockOnTimeModified: WorldClockOnTimeModifiedAfterEventSignal;

    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldLoad: WorldLoadAfterEventSignal;

}

/**
 * 一组在实际动作发生之前触发的事件。在大多数情况下，你可以取消或修改即将发生的事件。
 * 请注意，在 before 事件中，任何修改游戏状态的 API 将无法生效并会抛出错误。
 * （例如，dimension.spawnEntity）
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * 当聊天消息被广播或发送给玩家后触发此事件。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     * @example customCommand.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function customCommand(targetLocation: DimensionLocation) {
     *   const chatCallback = world.beforeEvents.chatSend.subscribe(eventData => {
     *     if (eventData.message.includes('cancel')) {
     *       // Cancel event if the message contains "cancel"
     *       eventData.cancel = true;
     *     } else {
     *       const args = eventData.message.split(' ');
     *
     *       if (args.length > 0) {
     *         switch (args[0].toLowerCase()) {
     *           case 'echo':
     *             // Send a modified version of chat message
     *             world.sendMessage(`Echo '${eventData.message.substring(4).trim()}'`);
     *             break;
     *           case 'help':
     *             world.sendMessage(`Available commands: echo <message>`);
     *             break;
     *         }
     *       }
     *     }
     *   });
     * }
     * ```
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * @remarks
     * 此事件在向实体添加效果后触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHeal: EntityHealBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityHurt: EntityHurtBeforeEventSignal;
    /**
     * @remarks
     * 此事件在实体拾取物品之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityItemPickup: EntityItemPickupBeforeEventSignal;
    /**
     * @remarks
     * 在实体从世界中移除之前触发（例如，实体被卸载或在被击杀后移除）。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @rc
     * @remarks
     * 在实体被驯服之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly entityTamed: EntityTamedBeforeEventSignal;
    /**
     * @remarks
     * 此事件在爆炸发生前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks
     * 此事件在玩家成功使用物品时触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * 此事件在玩家破坏方块之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @remarks
     * 在玩家与方块交互之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @remarks
     * 在玩家与实体交互之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks
     * 在玩家离开游戏时触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 此事件在玩家放置方块之前触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly weatherChange: WeatherChangeBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 此事件在 {@link WorldClock} 达到其最大时间并即将重启时触发。
     *
     * @privilege early-execution-readable - 此属性可在早期执行模式下读取。
     *
     */
    readonly worldClockOnRestart: WorldClockOnRestartBeforeEventSignal;
}

/**
 * @beta
 * 表示世界中某个特定时钟的类。
 */
export class WorldClock {
    private constructor();
    /**
     * @remarks
     * 获取或设置世界时钟当前是否暂停。
     *
     * @privilege restricted-execution-read-only - 此属性在受限执行模式下无法编辑。
     *
     */
    isPaused: boolean;
    /**
     * @remarks
     * 表示此世界时钟的标识符。
     *
     */
    readonly name: string;
    /**
     * @remarks
     * 获取或设置世界时钟的当前时间（以刻为单位）。
     *
     * @privilege restricted-execution-read-only - 此属性在受限执行模式下无法编辑。
     *
     * 最小值：0
     */
    time: number;
    /**
     * @remarks
     * 获取世界时钟当前的时间标记。
     *
     */
    readonly timeMarkers: TimeMarker[];
    /**
     * @remarks
     * 向世界时钟添加新的时间标记。
     *
     * @privilege no-restricted-execution - 此函数在受限执行模式下无法调用。
     *
     * @param timeMarkerOptions
     * 用于创建时间标记的选项。
     * @throws 此函数可能抛出错误。
     *
     * {@link WorldClockAddTimeMarkerError}
     */
    addTimeMarker(timeMarkerOptions: TimeMarkerOptions): void;
    /**
     * @remarks
     * 从世界时钟中移除现有的时间标记。
     *
     * @privilege no-restricted-execution - 此函数在受限执行模式下无法调用。
     *
     * @param timeMarker
     * 要移除的时间标记或时间标记名称。
     * @throws
     * WorldClockTimeMarkerNotFoundError：如果该时间标记不存在于世界时钟上。
     * WorldClockRemoveMinecraftTimeMarkerError：如果该时间标记使用了“minecraft”命名空间。
     *
     * {@link WorldClockRemoveMinecraftTimeMarkerError}
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    removeTimeMarker(timeMarker: string | TimeMarker): void;
    /**
     * @remarks
     * 将世界时钟的时间回退到指定时间标记的上一次出现位置。
     *
     * @privilege no-restricted-execution - 此函数在受限执行模式下无法调用。
     *
     * @param timeMarker
     * 要将世界时钟的时间回退到的时间标记或时间标记名称。
     * @throws
     * WorldClockTimeMarkerNotFoundError：如果该时间标记不存在于世界时钟上。
     * WorldClockRewindError：如果世界时钟的当前时间早于该时间标记的首次出现时间。
     *
     * {@link WorldClockRewindError}
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    rewindTo(timeMarker: string | TimeMarker): void;
    /**
     * @remarks
     * 将世界时钟的时间设置为指定的时间标记。
     *
     * @privilege no-restricted-execution - 此函数在受限执行模式下无法调用。
     *
     * @param timeMarker
     * 要将世界时钟的时间设置到的时间标记或时间标记名称。
     * @throws
     * WorldClockTimeMarkerNotFoundError：如果该时间标记不存在于世界时钟上。
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    set(timeMarker: string | TimeMarker): void;
    /**
     * @remarks
     * 将世界时钟的时间快进到指定时间标记的下一次出现位置。
     * 如果下一次出现位置超出世界时钟的时间范围，则将时间重置为首次出现位置。
     *
     * @privilege no-restricted-execution - 此函数在受限执行模式下无法调用。
     *
     * @param timeMarker
     * 要将世界时钟的时间快进到的时间标记或时间标记名称。
     * @throws
     * WorldClockTimeMarkerNotFoundError：如果该时间标记不存在于世界时钟上。
     *
     * {@link WorldClockTimeMarkerNotFoundError}
     */
    skipTo(timeMarker: string | TimeMarker): void;
}

/**
 * @beta
 * 包含与 {@link WorldClock} 被暂停相关的信息。
 */
export class WorldClockOnPausedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被暂停的世界时钟。
     *
     */
    readonly clock: WorldClock;
}

/**
 * @beta
 * 管理与 {@link WorldClock} 被暂停相关的
 * 回调。
 */
export class WorldClockOnPausedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当世界时钟暂停时
     * 会被调用。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback 回调函数，在世界时钟暂停时被调用。
     * @param options （可选）世界时钟事件的附加选项。
     * @returns 返回一个函数，可用于移除已添加的回调。
     */
    subscribe(
        callback: (arg0: WorldClockOnPausedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnPausedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在世界时钟暂停时
     * 会被调用的回调。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: WorldClockOnPausedAfterEvent) => void): void;
}

/**
 * @beta
 * 包含与 {@link WorldClock} 重启相关的信息。
 */
export class WorldClockOnRestartBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消世界时钟重启事件。这将使世界时钟保持最大时间值，并阻止其继续前进。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 正在重启的世界时钟。
     *
     */
    readonly clock: WorldClock;
    /**
     * @remarks
     * 世界时钟重启后将设置的时间。如果未设置，世界时钟将设置为 0。
     *
     * 最小值：0
     */
    newTime: number;
}

/**
 * @beta
 * 管理与 {@link WorldClock} 重启相关联的回调。
 */
export class WorldClockOnRestartBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在世界时钟重启时会被调用的回调。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将在受限执行权限下被调用。
     * @param options
     * 可选参数，指定世界时钟事件的选项。
     * @returns
     * 返回一个在受限执行权限下被调用的闭包。
     */
    subscribe(
        callback: (arg0: WorldClockOnRestartBeforeEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnRestartBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在世界时钟重启时会被调用的回调。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: WorldClockOnRestartBeforeEvent) => void): void;
}

/**
 * @beta
 * 包含与 {@link WorldClock} 被恢复时相关的信息。
 */
export class WorldClockOnResumedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被恢复的世界时钟。
     *
     */
    readonly clock: WorldClock;
}

/**
 * @beta
 * 管理与 {@link WorldClock} 被恢复时相关的回调。
 */
export class WorldClockOnResumedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在世界时钟恢复时会被调用的回调。
     *
     * @param callback - 当世界时钟恢复时要调用的回调函数。
     * @param options - 事件订阅的可选选项。
     * @returns 返回一个函数，调用该函数可移除已订阅的回调。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnResumedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnResumedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在世界时钟恢复时不再被调用的回调。
     *
     * @param callback - 要移除的回调函数。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnResumedAfterEvent) => void): void;
}

/**
 * @beta
 * 包含当 {@link WorldClock} 的时间命中
 * {@link TimeMarker} 时相关的信息。
 */
export class WorldClockOnTimeMarkerAfterEvent {
    private constructor();
    /**
     * @remarks
     * 命中时间标记的世界时钟。
     *
     */
    readonly clock: WorldClock;
    /**
     * @remarks
     * 被世界时钟命中的时间标记。
     *
     */
    readonly timeMarker: TimeMarker;
}

/**
 * @beta
 * 管理与 {@link WorldClock} 的时间到达 {@link TimeMarker} 时相关的回调。
 */
export class WorldClockOnTimeMarkerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当世界时钟的时间到达时间标记时将被调用。
     *
     * @privilege no-restricted-execution - 此函数无法在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback 要添加的回调。
     * @param options 可选的事件选项。
     * @returns 返回传入的回调函数，可用于随后取消订阅。
     */
    subscribe(
        callback: (arg0: WorldClockOnTimeMarkerAfterEvent) => void,
        options?: WorldClockTimeMarkerEventOptions,
    ): (arg0: WorldClockOnTimeMarkerAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在世界时钟的时间到达时间标记时被调用的回调。
     *
     * @privilege no-restricted-execution - 此函数无法在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调。
     */
    unsubscribe(callback: (arg0: WorldClockOnTimeMarkerAfterEvent) => void): void;
}

/**
 * @beta
 * 包含与 {@link WorldClock} 时间变化相关的信息。
 */
export class WorldClockOnTimeModifiedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 其时间被修改的世界时钟。
     *
     */
    readonly clock: WorldClock;
}

/**
 * @beta
 * 管理与 {@link WorldClock} 的时间变更
 * 相关联的回调。
 */
export class WorldClockOnTimeModifiedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在世界时钟的时间被修改时
     * 调用的回调。
     *
     * @param callback - 要在世界时钟的时间被修改时调用的回调函数。
     * @param options - 订阅事件的附加选项。
     * @returns - 已订阅的回调函数，可用于取消订阅。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可在早期执行模式下调用。
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnTimeModifiedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnTimeModifiedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在世界时钟的时间被修改时
     * 调用的回调。
     *
     * @param callback - 要移除的回调函数。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnTimeModifiedAfterEvent) => void): void;
}

/**
 * @beta
 * 提供注册自定义世界时钟的功能。世界时钟只能在系统启动事件期间注册。
 */
export class WorldClockRegistry {
    private constructor();
    /**
     * @remarks
     * 注册新的自定义世界时钟。必须在系统启动事件期间调用。
     *
     * @privilege early-execution-allowed - 此函数可在早期执行模式下调用。
     *
     * @param name
     * 表示此世界时钟的名称。必须包含命名空间且仅使用有效的标识符字符（例如：'mypack:my_clock'）。
     * @param registrationOptions
     * 注册世界时钟的附加选项，例如在注册时包含时间标记。
     * @throws 此函数可能抛出错误。
     *
     * {@link WorldClockInvalidRegistryError}
     *
     * {@link WorldClockRegistrationError}
     *
     * {@link WorldClockReloadNewWorldClockError}
     *
     * {@link WorldClockReloadTimeMarkerError}
     */
    registerClock(name: string, registrationOptions?: WorldClockRegistrationOptions): void;
}

export class WorldLoadAfterEvent {
    private constructor();
}

export class WorldLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}

/**
 * 轴对齐的包围盒。
 */
export interface AABB {
    /**
     * @remarks
     * 盒子的中心点。
     *
     */
    center: Vector3;
    /**
     * @remarks
     * 从中心点到盒子边界的绝对距离。相当于盒子长度、高度和宽度的一半。始终被视为正值。
     *
     */
    extent: Vector3;
}

/**
 * 用于创建相机动画。
 */
export interface AnimationOptions {
    /**
     * @remarks
     * 相机动画的关键帧。
     *
     */
    animation: SplineAnimation;
    /**
     * @remarks
     * 相机动画的总时长（秒）。
     *
     */
    totalTimeSeconds: number;
}

export interface BiomeFilter {
    excludeBiomes?: string[];
    excludeTags?: string[];
    includeBiomes?: string[];
    includeTags?: string[];
}

/**
 * 包含用于
 * dimension.findNearestBiome API 搜索的附加选项。
 */
export interface BiomeSearchOptions {
    /**
     * @remarks
     * 要查找的边界体积大小。
     *
     */
    boundingSize?: Vector3;
}

/**
 * BlockBoundingBox 是一个接口，表示一个与坐标轴对齐的矩形（AABB 对齐矩形）。
 * BlockBoundingBox 假设其创建时处于有效状态（min <= max），但无法保证这一点（除非它是使用相关的 {@link BlockBoundingBoxUtils} 工具函数创建的）。
 * min/max 坐标表示矩形对角相对的顶点。
 * BlockBoundingBox 不是方块的表示——它与任何类型无关，只是一个数学构造——因此一个 (0,0,0) -> (0,0,0) 的矩形的大小为 (0,0,0)（与非常相似的 {@link BlockVolume} 对象不同）。
 */
export interface BlockBoundingBox {
    /**
     * @remarks
     * 表示矩形最大角点的 {@link Vector3}
     *
     */
    max: Vector3;
    /**
     * @remarks
     * 表示矩形最小角点的 {@link Vector3}
     *
     */
    min: Vector3;
}

/**
 * 用于过滤方块容器访问事件的选项。
 */
export interface BlockContainerAccessEventOptions {
    /**
     * @remarks
     * 若存在，将过滤哪些容器访问源可以
     * 触发事件。
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 若存在，将过滤哪些容器方块可以
     * 触发事件。
     *
     */
    blockFilter?: BlockFilter;
}

/**
 * 包含一组将为方块触发的事件。
 * 必须使用BlockRegistry绑定此对象。
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * 此函数将在玩家放置方块前被调用。
     *
     */
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters) => void;
    onBlockStateChange?: (arg0: BlockComponentBlockStateChangeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在特定方块被破坏时被调用。
     * 方块变种的变化不会触发此事件。
     * 仅在破坏模式下使用填充命令和设置方块命令更改方块变种时，才会触发此事件。
     * 具有“minecraft:replaceable”组件的自定义方块在被替换时不会触发此事件。
     *
     */
    onBreak?: (arg0: BlockComponentBlockBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体向世界中的该方块触发事件时被调用。
     *
     */
    onEntity?: (arg0: BlockComponentEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体落到此自定义组件所绑定的方块上时被调用。
     *
     */
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在放置此自定义组件所绑定的方块时被调用。
     *
     */
    onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;
    onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在玩家成功与此自定义组件所绑定的方块交互时被调用。
     *
     */
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在方块随机刻时被调用。
     *
     */
    onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 如果方块具有`minecraft:redstone_consumer`组件且红石信号强度大于等于该组件的`min_power`字段，当发生“onRedstoneUpdate”引擎事件时，此函数将被调用。
     *
     */
    onRedstoneUpdate?: (arg0: BlockComponentRedstoneUpdateEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体离开此自定义组件所绑定的方块时被调用。
     *
     */
    onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体踏入此自定义组件所绑定的方块时被调用。
     *
     */
    onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在方块刻时被调用。
     *
     */
    onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;
}

/**
 * 包含用于注册方块事件的可选参数。
 */
export interface BlockEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的方块类型与此参数匹配时，
     * 才会触发此事件。
     *
     */
    blockTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的方块的置换与此参数匹配时，
     * 才会触发此事件。
     *
     */
    permutations?: BlockPermutation[];
}

/**
 * 包含方块填充操作的其他选项。
 */
export interface BlockFillOptions {
    /**
     * @remarks
     * 指定后，填充操作将包含/排除添加到方块过滤器中的方块。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 当为 true 时，如果部分填充体积超出已加载区块边界，fillBlocks 不会报错，而是只填充已加载区块边界内的方块，并忽略边界外的方块。
     *
     */
    ignoreChunkBoundErrors?: boolean;
}

/**
 * 基于类型、标签或置换来包含或排除方块的选项。如果未添加任何包含选项，
 * 将选择所有未被排除选项拒绝的方块。如果添加了至少一个包含选项，
 * 方块必须匹配其中一个包含选项才不会被拒绝。
 */
export interface BlockFilter {
    /**
     * @remarks
     * 过滤器在任一匹配时应拒绝的方块置换数组。
     *
     */
    excludePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 过滤器在任一匹配时应拒绝的方块标签数组。
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 过滤器在任一匹配时应拒绝的方块类型数组。
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 过滤器在至少一个匹配时应选择的方块置换数组。
     *
     */
    includePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 过滤器在至少一个匹配时应选择的方块标签数组。
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 过滤器在至少一个匹配时应选择的方块类型数组。
     *
     */
    includeTypes?: string[];
}

/**
 * 包含方块被击中事件的更多信息。
 */
export interface BlockHitInformation {
    /**
     * @remarks
     * 被击中的方块。
     *
     */
    block: Block;
    /**
     * @remarks
     * 被击中方块的朝向面。
     *
     */
    face: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的位置。
     *
     */
    faceLocation: Vector3;
}

/**
 * @beta
 * 在体积内查询方块的选项。扩展 BlockFilter，
 * 增加了基于距离位置的排序和限制选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockQueryOptions extends BlockFilter {
    /**
     * @remarks
     * 如果指定，则返回距离该位置最近的 N 个方块。
     * 必须大于 0。不能与 farthest 同时使用。
     * 需要设置 location。
     *
     */
    closest?: number;
    /**
     * @remarks
     * 如果指定，则返回距离该位置最远的 N 个方块。
     * 必须大于 0。不能与 closest 同时使用。
     * 需要设置 location。
     *
     */
    farthest?: number;
    /**
     * @remarks
     * 用作 closest 或 farthest 距离计算的参考点位置。
     * 当指定了 closest 或 farthest 时需要设置。
     *
     */
    location?: Vector3;
}

/**
 * 包含方块射线检测命中结果的信息。
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * 被命中的方块。
     *
     */
    block: Block;
    /**
     * @remarks
     * 被命中方块的面。
     *
     */
    face: Direction;
    /**
     * @remarks
     * 相对于方块底部西北角的
     * 命中位置。
     *
     */
    faceLocation: Vector3;
}

/**
 * 包含用于配置方块射线检测查询的其他选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockRaycastOptions extends BlockFilter {
    /**
     * @remarks
     * 若为 true，液体方块将被视为会‘阻挡’射线检测的方块。
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * 若为 true，藤蔓和花等可通过方块将被视为会‘阻挡’射线检测的方块。
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * 处理射线检测的最大距离（以方块为单位）。
     *
     */
    maxDistance?: number;
}

/**
 * 用于将相机附加到非玩家实体。
 */
export interface CameraAttachOptions {
    /**
     * @remarks
     * 设置相机要瞄准的非玩家实体。
     *
     */
    entity: Entity;
    /**
     * @remarks
     * 你想要瞄准的实体的位置（例如头部、脚部、眼睛）。
     *
     */
    locator: EntityAttachPoint;
}

/**
 * 用于启动全屏颜色淡化。
 */
export interface CameraFadeOptions {
    /**
     * @remarks
     * 要使用的淡入淡出颜色。
     *
     */
    fadeColor?: RGB;
    /**
     * @remarks
     * 淡入、保持和淡出阶段的时间（秒）。
     *
     */
    fadeTime?: CameraFadeTimeOptions;
}

/**
 * 包含淡入淡出过渡的时间设置。
 */
export interface CameraFadeTimeOptions {
    /**
     * @remarks
     * 淡入的时间，以秒为单位。
     *
     */
    fadeInTime: number;
    /**
     * @remarks
     * 淡出的时间，以秒为单位。
     *
     */
    fadeOutTime: number;
    /**
     * @remarks
     * 保持全屏颜色的时间，以秒为单位。
     *
     */
    holdTime: number;
}

/**
 * 控制第三人称视角吊杆预设的枢轴点与偏移
 * 的选项。
 */
export interface CameraFixedBoomOptions {
    /**
     * @remarks
     * 将枢轴点更改为与玩家相距 <x, y, z>
     * 的位置。
     *
     */
    entityOffset?: Vector3;
    /**
     * @remarks
     * 将摄像机从中心偏移 <x, y>。
     *
     */
    viewOffset?: Vector2;
}

/**
 * 用于更改当前摄像机的视野。
 */
export interface CameraFovOptions {
    easeOptions?: EaseOptions;
    /**
     * @remarks
     * 设置视野的值。
     *
     */
    fov?: number;
}

export interface CameraSetFacingOptions {
    easeOptions?: EaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}

export interface CameraSetLocationOptions {
    easeOptions?: EaseOptions;
    location: Vector3;
}

export interface CameraSetPosOptions {
    easeOptions?: EaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}

export interface CameraSetRotOptions {
    easeOptions?: EaseOptions;
    location?: Vector3;
    rotation: Vector2;
}

/**
 * @beta
 * 用于通过 `Camera.addShake` 对玩家相机应用相机抖动效果的
 * 选项。每次调用 `addShake` 都会为指定的 `type` 排队
 * 一个新的独立抖动事件；
 * 位置抖动和旋转抖动分别在不同的队列中跟踪，
 * 并且并发运行。任意时刻的渲染强度
 * 是该类型所有活动事件强度之和，
 * 上限为 `4.0`。事件在其 `duration` 结束时
 * 自然过期。
 */
export interface CameraShakeOptions {
    /**
     * @remarks
     * 此抖动事件的持续时间（以秒为单位）。必须为
     * 正值。
     *
     */
    duration: number;
    /**
     * @remarks
     * 此抖动事件的强度。必须为正数，
     * 最大值为 `4.0`。同一 `type` 的多个活动事件
     * 会相加，上限为 `4.0`。
     *
     */
    intensity: number;
    /**
     * @remarks
     * 要应用的相机抖动类型。位置抖动和旋转抖动
     * 维护各自独立的事件队列并并发应用，
     * 因此添加每种类型的抖动不会
     * 使它们相互干扰。
     *
     */
    type: CameraShakeType;
}

/**
 * 用于以自由摄像机瞄准一个实体。
 */
export interface CameraTargetOptions {
    /**
     * @remarks
     * 设置从目标实体中心出发的 <x, y, z> 偏移量。
     *
     */
    offsetFromTargetCenter?: Vector3;
    /**
     * @remarks
     * 你想瞄准的单个实体。
     *
     */
    targetEntity: Entity;
}

/**
 * 表示容器访问的来源。
 */
export interface ContainerAccessSource {
    /**
     * @remarks
     * 触发容器访问的实体。
     *
     */
    entity?: Entity;
}

/**
 * 用于筛选容器访问来源时使用的选项。
 */
export interface ContainerAccessSourceFilter {
    /**
     * @remarks
     * 筛选访问容器的来源实体的筛选选项。
     *
     */
    entityFilter?: EntityFilter;
}

/**
 * 容器操作中违反这些规则将抛出
 * 错误。
 */
export interface ContainerRules {
    /**
     * @remarks
     * 定义容器中唯一允许的物品。如果为空，则允许所有物品在
     * 容器中。
     *
     */
    allowedItems: string[];
    /**
     * @remarks
     * 确定是否可以将其他存储物品放入
     * 容器中。
     *
     */
    allowNestedStorageItems: boolean;
    /**
     * @remarks
     * 定义容器中不允许的物品。
     *
     */
    bannedItems: string[];
    /**
     * @remarks
     * 定义所有物品的最大允许总重量在
     * 存储物品容器中。如果未定义，容器没有重量
     * 限制。
     *
     */
    weightLimit?: number;
}

/**
 * 定义自定义命令，包括名称、权限和
 * 参数。
 */
export interface CustomCommand {
    /**
     * @remarks
     * 必须启用作弊才能运行此命令。默认为
     * true。
     *
     */
    cheatsRequired?: boolean;
    /**
     * @remarks
     * 命令描述，在命令行中显示。
     *
     */
    description: string;
    /**
     * @remarks
     * 必选命令参数列表。
     *
     */
    mandatoryParameters?: CustomCommandParameter[];
    /**
     * @remarks
     * 命令的名称。需要命名空间。
     *
     */
    name: string;
    /**
     * @remarks
     * 可选命令参数列表。
     *
     */
    optionalParameters?: CustomCommandParameter[];
    /**
     * @remarks
     * 执行命令所需的权限级别。
     *
     */
    permissionLevel: CommandPermissionLevel;
}

/**
 * 自定义命令每个参数
 * 的定义。
 */
export interface CustomCommandParameter {
    /**
     * @beta
     * @remarks
     * 可用于引用枚举名称，当 {@link
     * CustomCommandParamType} 为 'Enum' 时。允许参数名称
     * 与枚举名称不同。
     *
     */
    enumName?: string;
    /**
     * @remarks
     * 参数在命令行中显示的名称。
     *
     */
    name: string;
    /**
     * @remarks
     * 参数的数据类型。
     *
     */
    type: CustomCommandParamType;
}

/**
 * 从自定义命令回调函数返回的接口。
 */
export interface CustomCommandResult {
    /**
     * @remarks
     * 命令执行后显示在聊天中的消息。
     *
     */
    message?: string;
    /**
     * @remarks
     * 命令执行成功或失败。决定状态消息的
     * 显示方式。
     *
     */
    status: CustomCommandStatus;
}

export interface CustomTexture {
    /**
     * @remarks
     * 图标的高度，以相对单位表示。值必须介于 0.0 和 1.0 之间（含）。
     *
     * 范围：[0, 1]
     */
    iconHeight: number;
    /**
     * @remarks
     * 图标的宽度，以相对单位表示。值必须介于 0.0 和 1.0 之间（含）。
     *
     * 范围：[0, 1]
     */
    iconWidth: number;
    /**
     * @remarks
     * 自定义纹理的资源路径。应为指向纹理资源的有效字符串路径。
     *
     */
    path: string;
}

/**
 * 包含对实体组件定义状态的一组更新。
 */
export interface DefinitionModifier {
    /**
     * @remarks
     * 检索将通过此定义修改添加的组件组列表。
     *
     */
    addedComponentGroups: string[];
    /**
     * @remarks
     * 将通过此定义修改移除的组件组列表。
     *
     */
    removedComponentGroups: string[];
    /**
     * @beta
     * @remarks
     * 将通过此更新触发的实体定义事件列表。
     *
     */
    triggers: Trigger[];
}

/**
 * 世界中的精确坐标，包括其维度和位置。
 */
export interface DimensionLocation {
    /**
     * @remarks
     * 该坐标关联的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 此维度位置的X分量。
     *
     */
    x: number;
    /**
     * @remarks
     * 此维度位置的Y分量。
     *
     */
    y: number;
    /**
     * @remarks
     * 此维度位置的Z分量。
     *
     */
    z: number;
}

/**
 * 包含与在位置和/或旋转之间进行缓动相关的选项。
 */
export interface EaseOptions {
    /**
     * @remarks
     * 缓动操作的时间。
     *
     */
    easeTime?: number;
    /**
     * @remarks
     * 要使用的缓动操作类型。
     *
     */
    easeType?: EasingType;
}

/**
 * 此接口表示特定等级附魔，
 * 应用于物品上。
 */
export interface Enchantment {
    /**
     * @remarks
     * 此附魔实例的等级。
     *
     */
    level: number;
    /**
     * @remarks
     * 此实例的附魔类型。
     *
     */
    type: EnchantmentType;
}

/**
 * 通过投射物造成伤害时的附加选项。
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * @remarks
     * 发射该投射物的可选实体。
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * 造成伤害的投射物。
     *
     */
    damagingProjectile: Entity;
}

/**
 * 伤害事件的额外描述与元数据。
 */
export interface EntityApplyDamageOptions {
    /**
     * @remarks
     * 伤害的根本原因。
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * 造成伤害的可选实体。
     *
     */
    damagingEntity?: Entity;
}

/**
 * 用于过滤实体容器访问事件的选项。
 */
export interface EntityContainerAccessEventOptions {
    /**
     * @remarks
     * 如果存在，将过滤哪些容器访问来源可以触发事件。
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 如果存在，将过滤哪些实体容器可以触发事件。
     *
     */
    entityFilter?: EntityFilter;
}

/**
 * 提供关于伤害如何应用于实体的信息。
 */
export interface EntityDamageSource {
    /**
     * @remarks
     * 伤害的原因枚举。
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * 可选的造成伤害的实体。
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * 可能造成伤害的可选抛射物。
     *
     */
    damagingProjectile?: Entity;
}

/**
 * 指定用于为实体注册数据驱动触发事件时使用的附加过滤器。
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的实体与此集合中的实体匹配时，
     * 此事件才会触发。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的实体类型
     * 与此参数匹配时，此事件才会触发。
     *
     */
    entityTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的触发事件
     * 与此参数中列出的事件之一匹配时，
     * 此事件才会触发。
     *
     */
    eventTypes?: string[];
}

/**
 * 包含实体效果的附加选项。
 */
export interface EntityEffectOptions {
    /**
     * @remarks
     * 效果的强度。
     *
     */
    amplifier?: number;
    /**
     * @remarks
     * 如果为true，则在实体上有效果时显示粒子。
     *
     */
    showParticles?: boolean;
}

/**
 * 包含用于注册实体事件的可选参数。
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * 若设置此值，则仅当实体与集合中的实体匹配时才会触发此事件。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 若设置此值，则仅当受影响的实体类型与此参数匹配时才会触发此事件。
     *
     */
    entityTypes?: string[];
}

/**
 * 用于过滤实体的选项。
 */
export interface EntityFilter {
    /**
     * @remarks
     * 排除匹配一个或多个指定族的实体。
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * 排除具有与指定游戏模式匹配的特定游戏模式的实体。
     *
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * 排除名称与指定值之一匹配的实体。
     *
     */
    excludeNames?: string[];
    /**
     * @remarks
     * 排除带有与指定值之一匹配的标签的实体。
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 排除属于指定类型之一的实体。
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 若指定，则包含与所有指定族匹配的实体。
     *
     */
    families?: string[];
    /**
     * @remarks
     * 若指定，则包含游戏模式与指定游戏模式匹配的实体。
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * 若指定，则仅包含水平旋转角度不超过此值的实体。
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * 若已定义，则仅返回等级不超过此值的玩家。
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * 若指定，则仅返回垂直旋转角度不超过此值的实体。
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * 若指定，则仅包含水平旋转角度至少为此值的实体。
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * 若已定义，则仅返回等级不低于此值的玩家。
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * 若指定，则仅返回垂直旋转角度至少为此值的实体。
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * 包含具有指定名称的实体。
     *
     */
    name?: string;
    propertyOptions?: EntityQueryPropertyOptions[];
    /**
     * @remarks
     * 获取/设置一个 EntityQueryScoreOptions 对象集合，用于过滤特定的计分板目标。
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * 包含匹配所有指定标签的实体。
     *
     */
    tags?: string[];
    /**
     * @remarks
     * 若已定义，则包含与此类型匹配的实体。
     *
     */
    type?: string;
}

/**
 * 包含用于注册实体治疗事件
 * 的可选参数。
 */
export interface EntityHealEventOptions {
    /**
     * @remarks
     * 若设置此值，则仅当治疗原因
     * 匹配时触发此事件。
     *
     */
    allowedHealCauses?: EntityHealCause[];
    /**
     * @remarks
     * 若设置此值，则仅当实体
     * 匹配时触发此事件。
     *
     */
    entityFilter?: EntityFilter;
}

/**
 * 包含关于被击中的实体的
 * 附加信息。
 */
export interface EntityHitInformation {
    /**
     * @remarks
     * 被击中的实体。
     *
     */
    entity?: Entity;
}

/**
 * 包含用于注册实体受伤后事件的可选参数。
 */
export interface EntityHurtAfterEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对匹配的伤害来源触发。
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对与此集合中的实体匹配的实体触发。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅当受影响实体的类型与此参数匹配时触发。
     *
     */
    entityTypes?: string[];
}

/**
 * 包含用于注册实体受伤前事件的可选参数。
 */
export interface EntityHurtBeforeEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对匹配的伤害原因触发。
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
}

/**
 * 传递给 {@link EntityItemDropAfterEventSignal.subscribe} 的接口，用于过滤哪些事件会被传递给所提供的回调函数。
 */
export interface EntityItemDropEventOptions {
    /**
     * @remarks
     * 如果设置了此值，此事件将仅对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，此事件将仅当事件中的物品匹配时触发。
     *
     */
    itemFilter?: ItemFilter;
}

/**
 * 一个接口，传递给 {@link
 * EntityItemPickupAfterEventSignal.subscribe} 和 {@link
 * EntityItemPickupBeforeEventSignal.subscribe}，用于过滤
 * 哪些事件会传递给提供的回调函数。
 */
export interface EntityItemPickupEventOptions {
    /**
     * @remarks
     * 如果设置了此值，此事件将仅针对
     * 匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，此事件将仅当物品
     * 在事件中匹配时触发。
     *
     */
    itemFilter?: ItemFilter;
}

/**
 * 包含用于选择区域内实体的选项。
 * @example blockConditional.ts
 * ```typescript
 * import { DimensionLocation } from '@minecraft/server';
 *
 * function blockConditional(targetLocation: DimensionLocation) {
 *   targetLocation.dimension
 *     .getEntities({
 *       type: 'fox',
 *     })
 *     .filter(entity => {
 *       const block = targetLocation.dimension.getBlock({
 *         x: entity.location.x,
 *         y: entity.location.y - 1,
 *         z: entity.location.z,
 *       });
 *
 *       return block !== undefined && block.matches('minecraft:stone');
 *     })
 *     .forEach(entity => {
 *       targetLocation.dimension.spawnEntity('salmon', entity.location);
 *     });
 * }
 * ```
 * @example findEntitiesHavingPropertyEqualsTo.ts
 * ```typescript
 * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
 *
 * function findEntitiesHavingPropertyEqualsTo(targetLocation: DimensionLocation) {
 *   // Minecraft bees have a has_nectar boolean property
 *   const queryOption: EntityQueryOptions = {
 *     propertyOptions: [{ propertyId: 'minecraft:has_nectar', value: { equals: true } }],
 *   };
 *
 *   const entities = targetLocation.dimension.getEntities(queryOption);
 * }
 * ```
 * @example playSoundChained.ts
 * ```typescript
 * import { DimensionLocation } from '@minecraft/server';
 *
 * function playSoundChained(targetLocation: DimensionLocation) {
 *   const targetPlayers = targetLocation.dimension.getPlayers();
 *   const originEntities = targetLocation.dimension.getEntities({
 *     type: 'armor_stand',
 *     name: 'myArmorStand',
 *     tags: ['dummyTag1'],
 *     excludeTags: ['dummyTag2'],
 *   });
 *
 *   originEntities.forEach(entity => {
 *     targetPlayers.forEach(player => {
 *       player.playSound('raid.horn');
 *     });
 *   });
 * }
 * ```
 * @example setScoreboardChained.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 *
 * function setScoreboardChained(targetLocation: DimensionLocation) {
 *   const objective = world.scoreboard.addObjective('scoreObjective1', 'dummy');
 *   targetLocation.dimension
 *     .getEntities({
 *       type: 'armor_stand',
 *       name: 'myArmorStand',
 *     })
 *     .forEach(entity => {
 *       if (entity.scoreboardIdentity !== undefined) {
 *         objective.setScore(entity.scoreboardIdentity, -1);
 *       }
 *     });
 * }
 * ```
 * @example summonMobChained.ts
 * ```typescript
 * import { DimensionLocation } from '@minecraft/server';
 *
 * function summonMobChained(targetLocation: DimensionLocation) {
 *   const armorStandArray = targetLocation.dimension.getEntities({
 *     type: 'armor_stand',
 *   });
 *   const playerArray = targetLocation.dimension.getPlayers({
 *     location: { x: 0, y: -60, z: 0 },
 *     closest: 4,
 *     maxDistance: 15,
 *   });
 *   armorStandArray.forEach(entity => {
 *     playerArray.forEach(player => {
 *       targetLocation.dimension.spawnEntity('pig', {
 *         x: player.location.x + 1,
 *         y: player.location.y,
 *         z: player.location.z,
 *       });
 *     });
 *   });
 * }
 * ```
 * @example bounceSkeletons.ts
 * ```typescript
 * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
 *
 * function bounceSkeletons(targetLocation: DimensionLocation) {
 *   const mobs = ['creeper', 'skeleton', 'sheep'];
 *
 *   // create some sample mob data
 *   for (let i = 0; i < 10; i++) {
 *     targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
 *   }
 *
 *   const eqo: EntityQueryOptions = {
 *     type: 'skeleton',
 *   };
 *
 *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
 *     entity.applyKnockback(0, 0, 0, 1);
 *   }
 * }
 * ```
 * @example tagsQuery.ts
 * ```typescript
 * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
 *
 * function tagsQuery(targetLocation: DimensionLocation) {
 *   const mobs = ['creeper', 'skeleton', 'sheep'];
 *
 *   // create some sample mob data
 *   for (let i = 0; i < 10; i++) {
 *     const mobTypeId = mobs[i % mobs.length];
 *     const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
 *     entity.addTag('mobparty.' + mobTypeId);
 *   }
 *
 *   const eqo: EntityQueryOptions = {
 *     tags: ['mobparty.skeleton'],
 *   };
 *
 *   for (const entity of targetLocation.dimension.getEntities(eqo)) {
 *     entity.kill();
 *   }
 * }
 * ```
 * @example testThatEntityIsFeatherItem.ts
 * ```typescript
 * import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
 *
 * function testThatEntityIsFeatherItem(
 *   log: (message: string, status?: number) => void,
 *   targetLocation: DimensionLocation
 * ) {
 *   const items = targetLocation.dimension.getEntities({
 *     location: targetLocation,
 *     maxDistance: 20,
 *   });
 *
 *   for (const item of items) {
 *     const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;
 *
 *     if (itemComp) {
 *       if (itemComp.itemStack.typeId.endsWith('feather')) {
 *         log('Success! Found a feather', 1);
 *       }
 *     }
 *   }
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityQueryOptions extends EntityFilter {
    /**
     * @remarks
     * 限制返回的实体数量，选择此属性指定的最近 N 个实体。
     * 查询选项对象中也必须指定 location 值。
     *
     */
    closest?: number;
    /**
     * @remarks
     * 限制返回的实体数量，选择此属性指定的最远 N 个实体。
     * 查询选项对象中也必须指定 location 值。
     *
     */
    farthest?: number;
    /**
     * @remarks
     * 为查询添加一个种子位置，该位置与 closest、farthest、limit、volume 和 distance 属性配合使用。
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * 如果指定，则包含与 location 属性中指定的位置距离小于此值的实体。
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * 如果指定，则包含与 location 属性中指定的位置距离至少为此值的实体。
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * 与 location 结合，指定一个包含实体的长方体体积。
     *
     */
    volume?: Vector3;
}

export interface EntityQueryPropertyOptions {
    exclude?: boolean;
    propertyId: string;
    value?:
        | boolean
        | string
        | EqualsComparison
        | GreaterThanComparison
        | GreaterThanOrEqualsComparison
        | LessThanComparison
        | LessThanOrEqualsComparison
        | NotEqualsComparison
        | RangeComparison;
}

/**
 * 包含用于根据目标的分数过滤玩家的附加选项。
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * 如果设置为 true，则此分数范围内的实体和玩家将从查询结果中排除。
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * 如果定义，则只包含分数等于或低于 maxScore 的玩家。
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * 如果定义，则只包含分数等于或高于 minScore 的玩家。
     *
     */
    minScore?: number;
    /**
     * @remarks
     * 要筛选的计分板目标标识符。
     *
     */
    objective?: string;
}

/**
 * 包含实体射线检测命中结果的信息。
 */
export interface EntityRaycastHit {
    /**
     * @remarks
     * 从射线起点到实体边界框的距离。
     *
     */
    distance: number;
    /**
     * @remarks
     * 被命中的实体。
     *
     */
    entity: Entity;
}

/**
 * 包含实体射线投射操作的附加选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityRaycastOptions extends EntityFilter {
    /**
     * @remarks
     * 如果为 true，则方块不会被视作可'阻挡'
     * 射线投射。
     *
     */
    ignoreBlockCollision?: boolean;
    /**
     * @remarks
     * 如果为 true，则液体方块将被视作可'阻挡'
     * 射线投射。
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * 如果为 true，则藤蔓和花朵等可通过方块将
     * 被视作可'阻挡'射线投射的方块。
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * 处理射线投射的最大距离，以方块为单位。
     *
     */
    maxDistance?: number;
}

/**
 * @beta
 * 用于过滤实体开始潜行和停止
 * 潜行事件的选项。
 */
export interface EntitySneakingChangedEventOptions {
    entityFilter?: EntityFilter;
}

/**
 * @rc
 * 包含用于筛选实体被驯服事件的选项。
 */
export interface EntityTamedEventOptions {
    entityFilter?: EntityFilter;
    tamingEntityFilter?: EntityFilter;
}

/**
 * 控制航点何时显示，基于其追踪实体的状态。
 * 这些规则允许根据实体条件（如潜行、隐形和死亡状态）过滤航点的可见性。
 */
export interface EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪实体死亡时是否显示航点。
     * 如果未定义，默认为 true。
     *
     */
    showDead?: boolean;
    /**
     * @remarks
     * 控制当被追踪实体隐形时是否显示航点。
     * 如果未定义，默认为 true。
     *
     */
    showInvisible?: boolean;
    /**
     * @remarks
     * 控制当被追踪实体潜行时是否显示航点。
     * 如果未定义，默认为 true。
     *
     */
    showSneaking?: boolean;
}

/**
 * 等于运算符。
 */
export interface EqualsComparison {
    /**
     * @remarks
     * 与之比较的阈值。
     *
     */
    equals: boolean | number | string;
}

/**
 * 为 {@link
 * Dimension.createExplosion} 方法提供的额外配置选项。
 * @example createNoBlockExplosion.ts
 * ```typescript
 * import { DimensionLocation } from '@minecraft/server';
 * import { Vector3Utils } from '@minecraft/math';
 *
 * function createNoBlockExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const explodeNoBlocksLoc = Vector3Utils.floor(Vector3Utils.add(targetLocation, { x: 1, y: 2, z: 1 }));
 *
 *   log('Creating an explosion of radius 15 that does not break blocks.');
 *   targetLocation.dimension.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
 * }
 * ```
 * @example createExplosions.ts
 * ```typescript
 * import { DimensionLocation } from '@minecraft/server';
 * import { Vector3Utils } from '@minecraft/math';
 *
 * function createExplosions(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const explosionLoc = Vector3Utils.add(targetLocation, { x: 0.5, y: 0.5, z: 0.5 });
 *
 *   log('Creating an explosion of radius 15 that causes fire.');
 *   targetLocation.dimension.createExplosion(explosionLoc, 15, { causesFire: true });
 *
 *   const belowWaterLoc = Vector3Utils.add(targetLocation, { x: 3, y: 1, z: 3 });
 *
 *   log('Creating an explosion of radius 10 that can go underwater.');
 *   targetLocation.dimension.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
 * }
 * ```
 */
export interface ExplosionOptions {
    /**
     * @remarks
     * 是否爆炸的部分也会影响水下。
     *
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * 爆炸是否会破坏爆炸半径内的方块。
     *
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * 如果为 true，则爆炸会在爆炸半径内或附近产生火焰。
     *
     */
    causesFire?: boolean;
    /**
     * @remarks
     * 爆炸的可选来源。
     *
     */
    source?: Entity;
}

/**
 * 为getBlockStandingOn和getAllBlocksStandingOn提供额外选项。
 */
export interface GetBlocksStandingOnOptions {
    /**
     * @remarks
     * 当指定时，函数将根据方块过滤器包含或排除返回的方块。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 如果为true，所有高度为0.2或更低的方块（如活板门和地毯）将被忽略，并返回其下方的方块。
     *
     */
    ignoreThinBlocks?: boolean;
}

/**
 * 大于运算符。
 */
export interface GreaterThanComparison {
    /**
     * @remarks
     * 比较的阈值。
     *
     */
    greaterThan: number;
}

/**
 * 大于或等于运算符。
 */
export interface GreaterThanOrEqualsComparison {
    /**
     * @remarks
     * 用于比较的阈值。
     *
     */
    greaterThanOrEquals: number;
}

/**
 * 包含用于快捷栏事件的其他过滤选项。
 */
export interface HotbarEventOptions {
    /**
     * @remarks
     * 要考虑的槽位索引。值应在 0 到 8 之间（含 0 和 8）。如果未指定，则考虑所有槽位。
     *
     * 范围：[0, 8]
     */
    allowedSlots?: number[];
}

/**
 * 一个接口，它被传入 {@link
 * PlayerButtonInputAfterEventSignal.subscribe} 中，用于过滤
 * 哪些事件会被传递给所提供的回调函数。
 */
export interface InputEventOptions {
    /**
     * @remarks
     * 回调应被调用的按钮。如果未定义，
     * 则回调会为所有按钮调用。
     *
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * 回调应被调用的状态。如果未定义，
     * 则回调会为所有按钮状态调用。
     *
     */
    state?: ButtonState;
}

/**
 * 包含物品栏物品事件的额外过滤选项。
 */
export interface InventoryItemEventOptions {
    /**
     * @remarks
     * 要考虑的槽位索引。值应为正数。
     * 如果未指定，则考虑所有槽位。
     *
     * 范围：[0, 1000]
     */
    allowedSlots?: number[];
    /**
     * @remarks
     * 要排除的物品名称。
     *
     */
    excludeItems?: string[];
    /**
     * @remarks
     * 要排除的物品标签。
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 标志，用于指定仅忽略数量变化。为 true 时忽略数量变化，为 false 时不忽略数量变化。
     *
     */
    ignoreQuantityChange?: boolean;
    /**
     * @remarks
     * 要考虑的物品名称。
     *
     */
    includeItems?: string[];
    /**
     * @remarks
     * 要考虑的物品标签。
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 要考虑的玩家物品栏类型。
     *
     */
    inventoryType?: PlayerInventoryType;
}

/**
 * 包含将针对某个物品引发的一组事件。
 * 此对象必须使用 ItemComponentRegistry 进行绑定。
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * 当包含此组件的物品击中实体并即将损失耐久度时，将调用此函数。
     *
     * @param arg0 - 耐久度损失前的物品组件事件。
     * @param arg1 - 自定义组件的参数。
     */
    onBeforeDurabilityDamage?: (
        arg0: ItemComponentBeforeDurabilityDamageEvent,
        arg1: CustomComponentParameters,
    ) => void;
    /**
     * @remarks
     * 当包含此组件的物品使用时长完成时，将调用此函数。
     *
     * @param arg0 - 物品使用完成事件。
     * @param arg1 - 自定义组件的参数。
     */
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被实体食用时，将调用此函数。
     *
     * @param arg0 - 物品食用事件。
     * @param arg1 - 自定义组件的参数。
     */
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品用于击中另一个实体时，将调用此函数。
     *
     * @param arg0 - 物品击中实体事件。
     * @param arg1 - 自定义组件的参数。
     */
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品用于挖掘方块时，将调用此函数。
     *
     * @param arg0 - 物品挖掘方块事件。
     * @param arg1 - 自定义组件的参数。
     */
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被玩家使用时，将调用此函数。
     *
     * @param arg0 - 物品使用事件。
     * @param arg1 - 自定义组件的参数。
     */
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被用在方块上时，将调用此函数。
     *
     * @param arg0 - 物品在方块上使用的事件。
     * @param arg1 - 自定义组件的参数。
     */
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}

/**
 * 包含用于筛选物品的选项。
 */
export interface ItemFilter {
    /**
     * @remarks
     * 若已定义，则包含匹配这些类型的物品。
     *
     */
    includeTypes?: (ItemType | string)[];
}

/**
 * 为 {@link
 * StructureManager.placeJigsaw} 提供额外的选项。
 */
export interface JigsawPlaceOptions {
    /**
     * @remarks
     * 结构生成时是否应包含实体。
     * 默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否应保留 Jigsaw 方块。
     * 默认为 false。
     *
     */
    keepJigsaws?: boolean;
    /**
     * @remarks
     * 指定如何处理与现有液体重叠的可含水方块。
     * 默认为 `ApplyWaterlogging`。
     *
     */
    liquidSettings?: LiquidSettings;
}

/**
 * 为 {@link StructureManager.placeJigsawStructure} 提供额外的选项。
 */
export interface JigsawStructurePlaceOptions {
    /**
     * @remarks
     * 是否应忽略拼图结构定义中定义的起始高度，并使用指定的 y 坐标覆盖。
     * 默认为 false。
     *
     */
    ignoreStartHeight?: boolean;
    /**
     * @remarks
     * 是否应在结构中包含实体。
     * 默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 生成结构时是否应保留拼图方块。
     * 默认为 false。
     *
     */
    keepJigsaws?: boolean;
    /**
     * @remarks
     * 指定如何处理与现有液体重叠的可含水方块。
     * 默认为 `ApplyWaterlogging`。
     *
     */
    liquidSettings?: LiquidSettings;
}

/**
 * 小于运算符。
 */
export interface LessThanComparison {
    /**
     * @remarks
     * 进行比较的阈值。
     *
     */
    lessThan: number;
}

/**
 * 小于或等于比较运算符。
 */
export interface LessThanOrEqualsComparison {
    /**
     * @remarks
     * 用于比较的阈值。
     *
     */
    lessThanOrEquals: number;
}

/**
 * 用于 {@link
 * World.playMusic}/{@link World.queueMusic} 方法的附加配置选项。
 */
export interface MusicOptions {
    /**
     * @remarks
     * 指定音乐播放结束时的淡出重叠。
     *
     */
    fade?: number;
    /**
     * @remarks
     * 如果设置为 true，此音乐曲目将重复播放。
     *
     */
    loop?: boolean;
    /**
     * @remarks
     * 音乐的相对音量级别。
     *
     */
    volume?: number;
}

/**
 * 不等于运算符。
 */
export interface NotEqualsComparison {
    /**
     * @remarks
     * 用于比较的阈值。
     *
     */
    notEquals: boolean | number | string;
}

/**
 * 包含关于动画播放方式的额外选项。
 */
export interface PlayAnimationOptions {
    /**
     * @remarks
     * 动画停止后淡出所需的时间。
     *
     */
    blendOutTime?: number;
    /**
     * @remarks
     * 指定一个要使用的控制器，该控制器已在实体上
     * 定义。
     *
     */
    controller?: string;
    /**
     * @remarks
     * 指定要转换到的状态。
     *
     */
    nextState?: string;
    /**
     * @remarks
     * 动画将可见的玩家列表。
     *
     */
    players?: Player[];
    /**
     * @remarks
     * 指定一个 Molang 表达式，用于此动画应
     * 完成时。
     *
     */
    stopExpression?: string;
}

/**
 * 与玩家的瞄准辅助目标相关的设置。
 */
export interface PlayerAimAssistSettings {
    /**
     * @remarks
     * 用于瞄准辅助目标定位的视距限制。
     *
     */
    distance?: number;
    /**
     * @remarks
     * 要激活的瞄准辅助预设的 ID。
     * 必须具有命名空间。
     *
     */
    presetId: string;
    /**
     * @remarks
     * 用于瞄准辅助目标定位的模式。
     *
     */
    targetMode?: AimAssistTargetMode;
    /**
     * @remarks
     * 用于瞄准辅助目标定位的视角限制。
     *
     */
    viewAngle?: Vector2;
}

/**
 * 一个接口，传入 {@link
 * PlayerStartBreakingBlockAfterEventSignal.subscribe} 或
 * {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe}
 * 用于筛选哪些事件会传递给所提供的
 * 回调函数。
 */
export interface PlayerBreakingBlockEventOptions {
    /**
     * @remarks
     * 回调应对其调用的 {@link BlockFilter}。
     * 若未定义，则回调将对所有方块调用。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 回调应对其调用的 {@link EntityFilter}。
     * 若未定义，则回调将对所有玩家调用。
     *
     */
    playerFilter?: EntityFilter;
}

/**
 * 声音播放给玩家时的附加选项。
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * 声音的位置；若未指定，则在玩家附近播放。
     *
     */
    location?: Vector3;
    /**
     * @beta
     * @remarks
     * 初始播放后声音重复的额外次数。`0`（默认值）播放一次，`-1` 无限循环，正整数 `N` 总共播放 `N + 1` 次。例如，`loopCount: 1` 播放两次。循环次数在声音开始播放时固定，之后无法更改。使用 `-1` 时，句柄生命周期要求请参见 `SoundInstance`。
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 声音的可选音调。
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 声音的可选音量。
     *
     */
    volume?: number;
}

/**
 * 一个接口，被传入 {@link
 * @minecraft/server.PlayerSwingStartAfterEvent.subscribe} 中，
 * 用于过滤哪些事件会传递给所提供的回调函数。
 */
export interface PlayerSwingEventOptions {
    /**
     * @remarks
     * 回调所针对的手持物品选项。
     * 如果未定义，则无论玩家手中是否持有物品，都会调用回调函数。
     *
     */
    heldItemOption?: HeldItemOption;
    /**
     * @remarks
     * 回调所针对的 {@link EntitySwingSource}。
     * 如果未定义，则回调将针对所有挥动来源调用。
     *
     */
    swingSource?: EntitySwingSource;
}

/**
 * 控制航点基于玩家特定状态何时可见。
 * 通过附加仅适用于玩家的状态规则（如隐藏模式和旁观模式）扩展 {@link EntityVisibilityRules}。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface PlayerVisibilityRules extends EntityVisibilityRules {
    /**
     * @remarks
     * 控制当被追踪的玩家处于隐藏状态时是否显示航点。若未定义，默认为 true。
     *
     */
    showHidden?: boolean;
    /**
     * @remarks
     * 控制当被追踪的玩家处于旁观模式时是否显示航点。若未定义，默认为 true。
     *
     */
    showSpectator?: boolean;
    /**
     * @remarks
     * 控制当旁观者查看另一名旁观者玩家时是否显示航点。若未定义，默认为 true。
     *
     */
    showSpectatorToSpectator?: boolean;
}

/**
 * @beta
 * 将方块兴趣点实例与其到查询中心的
 * 平方距离关联起来。
 */
export interface PoiDistancePair {
    /**
     * @remarks
     * 从查询中心到 POI 位置的平方三维距离
     * （以方块平方为单位）。
     *
     */
    distance: number;
    /**
     * @remarks
     * 位于此距离处的 POI 实例。
     *
     */
    poi: PoiBlockInstance;
}

/**
 * @beta
 * 选择方块兴趣点类型，依据其精确的
 * 命名空间标识符。
 */
export interface PoiNameFilter {
    /**
     * @remarks
     * 精确的命名空间兴趣点类型标识符以匹配。
     *
     */
    name: string;
}

/**
 * @beta
 * 选择方块兴趣点类型，这些类型具有所有
 * 指定标签。
 */
export interface PoiTagFilter {
    /**
     * @remarks
     * 命名空间 POI 标签，匹配类型必须包含这些标签。数组中的
     * 所有标签都是必需的。
     *
     */
    tags: string[];
}

/**
 * @beta
 * 包含可选筛选条件，用于控制从基础形状查询中返回哪些基础形状。
 */
export interface PrimitiveShapeQueryOptions {
    /**
     * @remarks
     * 如果指定，则仅返回附加到该实体的形状。
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * 向查询添加一个种子位置，该位置与距离属性结合使用。
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * 如果指定，则仅包含距离 location 属性中指定位置小于此距离的形状。
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * 如果指定，则仅包含距离 location 属性中指定位置至少为此距离的形状。
     *
     */
    minDistance?: number;
}

/**
 * 持有摄像机动画进度的关键帧。
 */
export interface ProgressKeyFrame {
    /**
     * @remarks
     * 表示摄像机在曲线上所处位置的值。
     * 取值范围为 [0.0, 1.0]（含）。
     *
     */
    alpha: number;
    /**
     * @remarks
     * 该关键帧用于位置的可选缓动类型。
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 摄像机达到给定 alpha 值时对应的时间值。
     *
     */
    timeSeconds: number;
}

/**
 * 可选参数，用于
 * @minecraft/server.EntityProjectileComponent.shoot.
 */
export interface ProjectileShootOptions {
    /**
     * @remarks
     * 控制射击的精度。值为0时表示完美
     * 精度。
     *
     */
    uncertainty?: number;
}

/**
 * Operator 表示用于表达潜在数字范围的下界/上界结构。
 */
export interface RangeComparison {
    /**
     * @remarks
     * 范围中的下界。
     *
     */
    lowerBound: number;
    /**
     * @remarks
     * 范围中的上界。
     *
     */
    upperBound: number;
}

/**
 * 定义一种 JSON 结构，用于更灵活的消息表示。
 * @example addTranslatedSign.ts
 * ```typescript
 * import { DimensionLocation, world, BlockPermutation, BlockComponentTypes } from '@minecraft/server';
 *
 * function placeTranslatedSign(location: DimensionLocation, text: string) {
 *   const signBlock = location.dimension.getBlock(location);
 *
 *   if (!signBlock) {
 *     console.warn('Could not find a block at specified location.');
 *     return;
 *   }
 *   const signPerm = BlockPermutation.resolve('minecraft:standing_sign', { ground_sign_direction: 8 });
 *   signBlock.setPermutation(signPerm);
 *
 *   const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
 *   if (signComponent) {
 *     signComponent.setText({ translate: 'item.skull.player.name', with: [text] });
 *   } else {
 *     console.error('Could not find a sign component on the block.');
 *   }
 * }
 *
 * placeTranslatedSign(
 *   {
 *     dimension: world.getDimension('overworld'),
 *     x: 0,
 *     y: 0,
 *     z: 0,
 *   },
 *   'Steve'
 * );
 * ```
 * @example showTranslatedMessageForm.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 * import { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';
 *
 * function showTranslatedMessageForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   const messageForm = new MessageFormData()
 *     .title({ translate: 'permissions.removeplayer' })
 *     .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] })
 *     .button1('Player 1')
 *     .button2('Player 2');
 *
 *   messageForm
 *     .show(players[0])
 *     .then((formData: MessageFormResponse) => {
 *       // player canceled the form, or another dialog was up and open.
 *       if (formData.canceled || formData.selection === undefined) {
 *         return;
 *       }
 *
 *       log(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);
 *     })
 *     .catch((error: Error) => {
 *       log('Failed to show form: ' + error);
 *       return -1;
 *     });
 * }
 * ```
 * @example addTranslatedSign.ts
 * ```typescript
 * import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   const dim = players[0].dimension;
 *
 *   const signBlock = dim.getBlock(targetLocation);
 *
 *   if (!signBlock) {
 *     log('Could not find a block at specified location.');
 *     return -1;
 *   }
 *   const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
 *
 *   signBlock.setPermutation(signPerm);
 *
 *   const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
 *
 *   signComponent?.setText({ translate: 'item.skull.player.name', with: [players[0].name] });
 * }
 * ```
 */
export interface RawMessage {
    /**
     * @remarks
     * 提供当前消息的原始文本（raw-text）等价形式。
     *
     */
    rawtext?: RawMessage[];
    /**
     * @remarks
     * 提供一个令牌，该令牌将被替换为某个分数（score）的值。
     *
     */
    score?: RawMessageScore;
    /**
     * @remarks
     * 提供一个要使用的字符串字面量值。
     *
     */
    text?: string;
    /**
     * @remarks
     * 提供一个翻译令牌；如果客户端在玩家语言环境中具有匹配该令牌的可用资源，则会在客户端上进行翻译。
     *
     */
    translate?: string;
    /**
     * @remarks
     * 翻译令牌的参数。可以是字符串数组，也可以是包含原始文本对象数组的 RawMessage。
     *
     */
    with?: string[] | RawMessage;
}

/**
 * 提供在原始消息中使用的分数令牌的
 * 描述。
 */
export interface RawMessageScore {
    /**
     * @remarks
     * 要匹配的分数值的名称。
     *
     */
    name?: string;
    /**
     * @remarks
     * 要匹配的分数值的名称。
     *
     */
    objective?: string;
}

/**
 * 一个仅包含 `rawtext` 属性的 `RawMessage`。当 `RawMessage` 被序列化时，内容会被放入 rawtext 属性，因此在读取已保存的 RawMessage 时非常有用。有关示例，请参见 `BlockSignComponent.setText` 和 `BlockSignComponent.getRawText`。
 */
export interface RawText {
    /**
     * @remarks
     * 关联告示牌当前值的序列化。
     *
     */
    rawtext?: RawMessage[];
}

/**
 * 表示 Minecraft 中可完全自定义的颜色。
 */
export interface RGB {
    /**
     * @remarks
     * 确定颜色的蓝色分量。有效值
     * 在 0 到 1.0 之间。
     *
     */
    blue: number;
    /**
     * @remarks
     * 确定颜色的绿色分量。有效值
     * 在 0 到 1.0 之间。
     *
     */
    green: number;
    /**
     * @remarks
     * 确定颜色的红色分量。有效值在
     * 0 到 1.0 之间。
     *
     */
    red: number;
}

/**
 * 表示 Minecraft 中一个完全可自定义的颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface RGBA extends RGB {
    /**
     * @remarks
     * 确定颜色的 alpha（不透明度）分量。有效值介于
     * 0（透明）和 1.0（不透明）之间。
     *
     */
    alpha: number;
}

/**
 * 持有相机动画旋转的关键帧。
 */
export interface RotationKeyFrame {
    /**
     * @remarks
     * 该帧用于旋转的可选缓动类型。
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 相机旋转的值。
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 相机处于给定旋转时的时间值。
     *
     */
    timeSeconds: number;
}

/**
 * 包含关于记分板在其显示槽内如何显示的
 * 额外选项。
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * @remarks
     * 要显示的记分项。
     *
     */
    objective: ScoreboardObjective;
    /**
     * @remarks
     * 显示记分项条目所用的排序顺序。
     *
     */
    sortOrder?: ObjectiveSortOrder;
}

/**
 * 包含用于注册脚本事件回调的额外选项。
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * 用于过滤入站脚本事件消息的可选命名空间列表。
     *
     */
    namespaces: string[];
}

/**
 * @beta
 * 在声音定义中声明的持续时间元数据。
 */
export interface SoundDefinitionDurationInfo {
    /**
     * @remarks
     * 以秒为单位的声音总持续时间，如声音定义中所声明。
     *
     */
    duration: number;
}

/**
 * @beta
 * 用于缩小声音定义集合的筛选条件。每个
 * 字段都是可选的，仅在定义时应用其约束；
 * 一个定义必须满足所有已定义的字段才能通过。
 */
export interface SoundDefinitionFilter {
    /**
     * @remarks
     * 用于匹配定义中 music_info.artist 的艺术家名称。
     * 比较不区分大小写。当定义为非空数组时，
     * 仅当定义中声明的艺术家与提供的某个值匹配时才通过。
     * 当未定义时，不应用艺术家约束。
     *
     */
    artists?: string[];
    /**
     * @remarks
     * 用于匹配定义中 music_info.genres 的音乐类型。
     * 比较不区分大小写。当定义为非空数组时，
     * 仅当定义中声明的音乐类型与提供的某个值至少有一个匹配时才通过。
     * 当未定义时，不应用音乐类型约束。
     *
     */
    genres?: string[];
    /**
     * @remarks
     * 以秒为单位的包含上限。定义时，时长更长的定义和
     * 未声明时长的定义将被排除。未定义时，不应用上限。
     *
     */
    maxDuration?: number;
    /**
     * @remarks
     * 以秒为单位的包含下限。定义时，时长更短的定义和
     * 未声明时长的定义将被排除。未定义时，不应用下限。
     *
     */
    minDuration?: number;
    /**
     * @remarks
     * 用于匹配定义中 music_info.moods 的情绪。
     * 比较不区分大小写。当定义为非空数组时，
     * 仅当定义中声明的情绪与提供的某个值至少有一个匹配时才通过。
     * 当未定义时，不应用情绪约束。
     *
     */
    moods?: string[];
    /**
     * @remarks
     * 用于匹配定义中 tags 的标签约束。
     * 标签名称和值的比较不区分大小写。
     * 当定义为非空记录时，仅当对于每个具有非空值数组的条目，
     * 定义上存在该标签名称且至少有一个匹配值时，定义才通过。
     * 未定义时，不应用标签约束。
     *
     */
    tags?: Record<string, string[]>;
    /**
     * @remarks
     * 用于匹配定义中 music_info.title 的标题。
     * 比较不区分大小写。当定义为非空数组时，
     * 仅当定义中声明的标题与提供的某个值匹配时才通过。
     * 当未定义时，不应用标题约束。
     *
     */
    titles?: string[];
}

/**
 * @beta
 * 声音定义中声明的音乐元数据。
 * 每个字段都是可选的，当声音定义未声明该字段的值时，
 * 该字段为 undefined。
 */
export interface SoundDefinitionMusicInfo {
    /**
     * @remarks
     * 为该声音声明的艺术家。
     * 未声明艺术家时为 undefined。
     *
     */
    artist?: string;
    /**
     * @remarks
     * 该声音声明的流派。
     * 未声明流派时为 undefined。
     *
     */
    genres?: string[];
    /**
     * @remarks
     * 该声音声明的情绪。
     * 未声明情绪时为 undefined。
     *
     */
    moods?: string[];
    /**
     * @remarks
     * 该声音声明的标题。
     * 未声明标题时为 undefined。
     *
     */
    title?: string;
}

/**
 * 包含生成实体的附加选项。
 */
export interface SpawnEntityOptions {
    /**
     * @remarks
     * 可选的布尔值，决定此实体是否应在游戏世界中持久存在。持久性可防止实体自动消失。
     *
     */
    initialPersistence?: boolean;
    /**
     * @remarks
     * 可选初始旋转角度（以度为单位），在实体生成时设置。
     *
     */
    initialRotation?: number;
    /**
     * @remarks
     * 可选生成事件，在实体生成后发送给实体。
     *
     */
    spawnEvent?: string;
}

/**
 * 相机动画的关键帧集合。
 */
export interface SplineAnimation {
    /**
     * @remarks
     * 用于相机沿给定曲线前进的关键帧。
     *
     */
    progressKeyFrames: ProgressKeyFrame[];
    /**
     * @remarks
     * 用于相机旋转的关键帧。
     *
     */
    rotationKeyFrames: RotationKeyFrame[];
}

/**
 * 为 {@link
 * StructureManager.createFromWorld} 提供附加选项。
 */
export interface StructureCreateOptions {
    /**
     * @remarks
     * 是否应在结构中包含方块。默认为 true。
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 是否应在结构中包含实体。默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 结构应如何保存。默认为 StructureSaveMode.World。
     *
     */
    saveMode?: StructureSaveMode;
}

/**
 * 为 {@link
 * StructureManager.place} 提供额外选项。
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * 放置结构时应如何播放动画。
     *
     */
    animationMode?: StructureAnimationMode;
    /**
     * @remarks
     * 动画播放所需的秒数。
     *
     */
    animationSeconds?: number;
    /**
     * @remarks
     * 结构中是否包含方块。默认为 true。
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * 结构中是否包含实体。默认为 true。
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * 应放置方块的百分比。值为 1
     * 时将放置 100% 的方块，值为 0 时不放置
     * 任何方块。方块将基于 {@link
     * StructurePlaceOptions.integritySeed} 随机选择。
     *
     */
    integrity?: number;
    /**
     * @remarks
     * 决定哪些方块会被随机选择放置的种子。默认为随机种子。
     *
     */
    integritySeed?: string;
    /**
     * @remarks
     * 放置时结构应沿哪些轴进行镜像。默认为 StructureMirrorAxis.None。
     *
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * 放置时结构应如何旋转。默认为 AxisAlignedRotation.None。
     *
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * 放置时结构是否应含水。默认为 false。如果为 true，方块放置在水中时将变为含水状态。
     *
     */
    waterlogged?: boolean;
}

/**
 * 包含传送实体时的附加选项。
 * @example teleport.ts
 * ```typescript
 * import { system, DimensionLocation } from '@minecraft/server';
 * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function teleport(targetLocation: DimensionLocation) {
 *   const cow = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Cow, targetLocation);
 *
 *   system.runTimeout(() => {
 *     cow.teleport(
 *       { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 },
 *       {
 *         facingLocation: targetLocation,
 *       }
 *     );
 *   }, 20);
 * }
 * ```
 * @example teleportMovement.ts
 * ```typescript
 * import { system, DimensionLocation } from '@minecraft/server';
 * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
 *
 * function teleportMovement(targetLocation: DimensionLocation) {
 *   const pig = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Pig, targetLocation);
 *
 *   let inc = 1;
 *   const runId = system.runInterval(() => {
 *     pig.teleport(
 *       { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
 *       {
 *         facingLocation: targetLocation,
 *       }
 *     );
 *
 *     if (inc > 100) {
 *       system.clearRun(runId);
 *     }
 *     inc++;
 *   }, 4);
 * }
 * ```
 */
export interface TeleportOptions {
    /**
     * @remarks
     * 是否检查方块是否会在传送后阻挡实体。
     *
     */
    checkForBlocks?: boolean;
    /**
     * @remarks
     * 可能要将实体移动到的维度。若未指定，实体将在其当前所处的维度内进行传送。
     *
     */
    dimension?: Dimension;
    /**
     * @remarks
     * 传送后实体应面向的位置。
     *
     */
    facingLocation?: Vector3;
    forceProvidedPositionOnDimensionChange?: boolean;
    /**
     * @remarks
     * 是否在传送后保留实体的速度。
     *
     */
    keepVelocity?: boolean;
    /**
     * @remarks
     * 传送后实体的旋转角度。
     *
     */
    rotation?: Vector2;
}

/**
 * 一个提供关于特定常加载区域信息的
 * 上下文。
 */
export interface TickingArea {
    /**
     * @remarks
     * 包含该常加载区域中所有常加载方块的
     * 包围盒。
     *
     */
    boundingBox: BlockBoundingBox;
    /**
     * @remarks
     * 该常加载区域包含的区块数量。
     *
     */
    chunkCount: number;
    /**
     * @remarks
     * 该常加载区域所在的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 该常加载区域的唯一标识符。
     *
     */
    identifier: string;
    /**
     * @remarks
     * 如果该常加载区域的所有区块都已加载则为 true
     * 否则为 false。
     *
     */
    isFullyLoaded: boolean;
}

/**
 * Options to create a ticking area using the
 * {@link TickingAreaManager}.
 */
export interface TickingAreaOptions {
    /**
     * @remarks
     * The dimension the ticking area will be in.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * Corner block location of the bounding box.
     *
     */
    from: Vector3;
    /**
     * @remarks
     * Opposite corner block location of the bounding box.
     *
     */
    to: Vector3;
}

/**
 * @beta
 * 用于为世界时钟创建时间标记的选项。
 */
export interface TimeMarkerOptions {
    /**
     * @remarks
     * 时间标记将具有的名称。必须具有命名空间，并且只使用有效的标识符字符
     * （例如，
     * 'mypack:my_time_marker'）。
     *
     */
    name: string;
    /**
     * @remarks
     * 时间标记将具有的可选重复周期（以 tick 为单位）。如果未指定，
     * 时间标记将仅发生
     * 一次。
     *
     * 最小值：0
     */
    period?: number;
    /**
     * @remarks
     * 时间标记将发生的时间（以 tick 为单位）。
     *
     * 最小值：0
     */
    time: number;
}

/**
 * 包含用于显示标题和
 * 可选副标题的附加选项。
 */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * 标题和副标题的淡入时长，以刻为单位。
     * 每秒有 20 刻。使用 {@link TicksPerSecond} 常量
     * 在刻与秒之间进行转换。
     *
     */
    fadeInDuration: number;
    /**
     * @remarks
     * 标题和副标题的淡出时长，以刻为单位。
     * 每秒有 20 刻。使用 {@link TicksPerSecond} 常量
     * 在刻与秒之间进行转换。
     *
     */
    fadeOutDuration: number;
    /**
     * @remarks
     * 标题和副标题保持显示的时间，
     * 以刻为单位。每秒有 20 刻。
     * 使用 {@link TicksPerSecond} 常量
     * 在刻与秒之间进行转换。
     *
     */
    stayDuration: number;
    /**
     * @remarks
     * 可选的副标题文本。
     *
     */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}

/**
 * 表示一个二维向量。
 */
export interface Vector2 {
    /**
     * @remarks
     * 二维向量的 X 分量。
     *
     */
    x: number;
    /**
     * @remarks
     * 二维向量的 Y 分量。
     *
     */
    y: number;
}

/**
 * 包含一个向量的描述。
 */
export interface Vector3 {
    /**
     * @remarks
     * 此向量的 X 分量。
     *
     */
    x: number;
    /**
     * @remarks
     * 此向量的 Y 分量。
     *
     */
    y: number;
    /**
     * @remarks
     * 此向量的 Z 分量。
     *
     */
    z: number;
}

export interface VectorXZ {
    x: number;
    z: number;
}

/**
 * 定义一个纹理及其应显示的距离范围。用于 {@link WaypointTextureSelector} 中，以实现基于距离的纹理切换。
 */
export interface WaypointTextureBounds {
    /**
     * @remarks
     * 该纹理的距离下限。当与航点的距离大于此值时显示该纹理。值必须大于或等于 0。
     *
     * 最小值：0
     */
    lowerBound: number;
    /**
     * @remarks
     * 在此距离范围内显示的 {@link WaypointTexture} 或 {@link CustomTexture}。
     *
     */
    texture: CustomTexture | WaypointTexture;
    /**
     * @remarks
     * 该纹理的距离上限。当与航点的距离小于或等于此值时显示该纹理。若未定义，则没有上限。值必须大于或等于 0。
     *
     * 最小值：0
     */
    upperBound?: number;
}

/**
 * 定义路径点纹理如何根据距离变化。
 * 包含一个纹理边界列表，用于确定
 * 在不同距离范围内显示哪种纹理。
 */
export interface WaypointTextureSelector {
    /**
     * @remarks
     * 一个由 {@link WaypointTextureBounds} 组成的数组，定义了
     * 不同距离范围内显示的纹理。系统会评估
     * 这些边界，以根据当前到路径点的距离确定
     * 合适的纹理。该列表的最大数量限制为
     * 16。
     *
     */
    textureBoundsList: WaypointTextureBounds[];
}

/**
 * @beta
 * 包含世界时钟事件的参数，用于筛选将哪些事件传递给提供的回调函数。
 */
export interface WorldClockEventOptions {
    /**
     * @remarks
     * 此事件应针对的时钟名称。
     *
     */
    clock: string;
}

/**
 * @beta
 * 包含用于注册世界时钟的附加选项。
 */
export interface WorldClockRegistrationOptions {
    /**
     * @remarks
     * 一组选项，用于在世界时钟注册期间包含时间标记。
     *
     */
    timeMarkers?: TimeMarkerOptions[];
}

/**
 * @beta
 * 包含世界时钟时间标记事件的参数，
 * 用于筛选哪些事件会传递给
 * 提供的回调。
 */
export interface WorldClockTimeMarkerEventOptions {
    /**
     * @remarks
     * 此事件应触发的世界时钟的名称。
     *
     */
    clock: string;
    /**
     * @remarks
     * 此事件应触发的时间标记的名称。
     * 如果未定义，则此事件将触发
     * 世界时钟上的所有时间标记。
     *
     */
    timeMarker?: string;
}

/**
 * 包含 playSound 调用的附加选项。
 */
export interface WorldSoundOptions {
    /**
     * @beta
     */
    isBroadcast?: boolean;
    /**
     * @beta
     * @remarks
     * 初始播放后额外重复播放声音的次数。`0`（默认值）播放一次，`-1` 无限循环，正整数 `N` 总共播放 `N + 1` 次。例如，`loopCount: 1` 播放两次。循环次数在声音开始时固定，之后无法更改。使用 `-1` 时，请参阅 `SoundInstance` 了解句柄生命周期要求。
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 播放声音的音调。
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 此声音被听到的相对音量和空间范围。
     *
     */
    volume?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentReloadNewEventError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentReloadVersionError extends Error {
    private constructor();
}

/**
 * 使用 {@link
 * ItemBookComponent} 时可能抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookError extends Error {
    private constructor();
    /**
     * @remarks
     * 错误原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: BookErrorReason;
}

/**
 * 当设置在 {@link
 * ItemBookComponent} 上的页面内容无效时（即超过最大页面长度）
 * 调用的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookPageContentError extends Error {
    private constructor();
    /**
     * @remarks
     * 请求修改的页面的索引。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly pageIndex: number;
    /**
     * @remarks
     * 错误的原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: BookErrorReason;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CommandError extends Error {
    private constructor();
}

/**
 * 当容器操作违反 {@link ContainerRules} 时抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ContainerRulesError extends Error {
    private constructor();
    /**
     * @remarks
     * 抛出错误的具体原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: ContainerRulesErrorReason;
}

/**
 * 当 CustomCommandRegistry 错误发生时抛出的错误对象。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomCommandError extends Error {
    private constructor();
    /**
     * @remarks
     * 错误原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: CustomCommandErrorReason;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentInvalidRegistryError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentNameError extends Error {
    private constructor();
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: CustomComponentNameErrorReason;
}

/**
 * 尝试注册一个自定义维度时，如果该名称已被注册，
 * 则抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionAlreadyRegisteredError extends Error {
    private constructor();
}

/**
 * 当尝试在系统启动事件之外注册自定义维度时抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionInvalidRegistryError extends Error {
    private constructor();
}

/**
 * 当尝试注册一个名称包含无效字符的自定义维度时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionNameError extends Error {
    private constructor();
}

/**
 * 在使用 /reload 命令后尝试注册一个之前未注册的自定义维度时抛出。
 * 在重载期间不能添加新的自定义维度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomDimensionReloadNewDimensionError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentLevelOutOfBoundsError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeNotCompatibleError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeUnknownIdError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySpawnError extends Error {
    private constructor();
}

/**
 * @beta
 * 当迷雾堆栈限制超出或提供了无效的迷雾标识符时，
 * {@link FogSettings} 操作将抛出此错误。
 * 
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FogSettingsError extends Error {
    private constructor();
}

/**
 * 当方块无效时可能发生此错误。在访问不具有某些组件的
 * 方块上的组件时也可能发生。
 * 这些组件是该方块所缺失的。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidBlockComponentError extends Error {
    private constructor();
}

/**
 * 容器无效。当容器缺失或已被删除时可能出现此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerError extends Error {
    private constructor();
}

/**
 * 容器槽位无效。当所属容器被销毁或卸载时，
 * 可能出现此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerSlotError extends Error {
    private constructor();
}

/**
 * 当访问不含某组件的实体上的组件时，
 * 可能会发生此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityComponentError extends Error {
    private constructor();
}

/**
 * 当实体无效时引发的错误。可能在访问已移除实体上的组件时发生。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks
     * 现在无效的实体的ID。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 现在无效的实体的类型。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly type: string;
}

/**
 * 当物品无效时引发的错误。这可能发生在访问已移除物品上的组件时。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidItemStackError extends Error {
    private constructor();
    /**
     * @remarks
     * 现已无效的物品类型。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemType: ItemType;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidIteratorError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidPotionDeliveryTypeError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidPotionEffectTypeError extends Error {
    private constructor();
}

/**
 * 当结构无效时抛出。结构被删除时会变得无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidStructureError extends Error {
    private constructor();
}

/**
 * 当尝试对无效路径点执行操作时抛出的错误。
 * 路径点在被移除或其跟踪的实体不再有效时
 * 变为无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWaypointError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWaypointTextureSelectorError extends Error {
    private constructor();
}

/**
 * 当尝试注册一个名称已被注册的物品自定义组件时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

/**
 * 在使用 /reload 命令后尝试注册
 * 之前未注册的物品自定义组件时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

/**
 * 使用 /reload 命令后，尝试注册一个之前已注册的、处理新事件的物品自定义组件时抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}

/**
 * 在使用 /reload 命令时，如果尝试使用更新的 API 版本
 * 注册一个先前已注册的物品自定义组件，
 * 则会抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}

/**
 * 当提供的坐标或区域所在的
 * 区块未加载时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}

/**
 * 当提供的位置或边界区域超出
 * 最小或最大维度高度时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationOutOfWorldBoundariesError extends Error {
    private constructor();
}

/**
 * 当定位条操作失败时抛出的错误。包含一个原因代码，指示错误的具体原因。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocatorBarError extends Error {
    private constructor();
    /**
     * @remarks
     * {@link LocatorBarErrorReason} 代码，指示定位条操作失败的原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: LocatorBarErrorReason;
}

/**
 * 当某个名称需要命名空间，且在验证该命名空间
 * 时发生错误时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NamespaceNameError extends Error {
    private constructor();
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: NamespaceNameErrorReason;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PlaceJigsawError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PrimitiveShapeError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class RawMessageError extends Error {
    private constructor();
}

/**
 * 从无效的 {@link TickingAreaManager}
 * 方法调用返回的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TickingAreaError extends Error {
    private constructor();
    /**
     * @remarks
     * 抛出该错误的具体原因。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly reason: TickingAreaErrorReason;
}

/**
 * 当指定区域包含一个或多个未加载区块时抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class UnloadedChunksError extends Error {
    private constructor();
}

/**
 * @beta
 * 当向世界时钟添加时间标记失败时，由 {@link WorldClock.addTimeMarker} 抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockAddTimeMarkerError extends Error {
    private constructor();
}

/**
 * @beta
 * 当尝试在系统启动事件之外
 * 注册世界时钟时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockInvalidRegistryError extends Error {
    private constructor();
}

/**
 * @beta
 * 当时间标记无效时抛出的错误。这可能在尝试访问已被移除的时间标记上的数据时发生。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockInvalidTimeMarkerError extends Error {
    private constructor();
}

/**
 * @beta
 * 当在世界时钟注册表中找不到世界时钟时抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockNotFoundError extends Error {
    private constructor();
}

/**
 * @beta
 * 由 {@link WorldClockRegistry.registerClock} 在注册世界时钟失败时抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockRegistrationError extends Error {
    private constructor();
}

/**
 * @beta
 * 当尝试注册一个之前未注册的世界时钟时，使用 /reload 命令后会抛出此错误。
 * 重载期间无法添加新的世界时钟。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockReloadNewWorldClockError extends Error {
    private constructor();
}

/**
 * @beta
 * 在使用 /reload 命令后，尝试使用无效的时间标记重新注册已有世界时钟时抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockReloadTimeMarkerError extends Error {
    private constructor();
}

/**
 * @beta
 * 由 {@link WorldClock.removeTimeMarker} 抛出的错误，当尝试从世界时钟中移除
 * 具有 'minecraft' 命名空间的时间标记时。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockRemoveMinecraftTimeMarkerError extends Error {
    private constructor();
}

/**
 * @beta
 * 由 {@link WorldClock.rewindTo} 抛出的错误，当世界时钟的时间
 * 已经早于时间标记的首次出现时。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockRewindError extends Error {
    private constructor();
}

/**
 * @beta
 * 对带有不存在的时间标记的世界时钟执行操作时抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WorldClockTimeMarkerNotFoundError extends Error {
    private constructor();
}

export const HudElementsCount = 13;
export const HudVisibilityCount = 2;
/**
 * @remarks
 * 表示月相的数量
 *
 */
export const MoonPhaseCount = 8;
/**
 * @remarks
 * 服务器在一个游戏日内的刻数。
 *
 */
export const TicksPerDay = 24000;
/**
 * @remarks
 * 服务器每现实秒的 tick 次数。
 *
 */
export const TicksPerSecond = 20;
/**
 * @remarks
 * 提供系统级别事件和功能的类。
 *
 */
export const system: System;
/**
 * @remarks
 * 一个封装世界状态的类——一组
 * 维度和Minecraft的环境。
 *
 */
export const world: World;
