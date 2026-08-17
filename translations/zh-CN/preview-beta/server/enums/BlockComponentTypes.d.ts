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