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
     * 表示世界中方块的物品栏。用于箱子之类的方块。
     *
     */
    Inventory = 'minecraft:inventory',
    /**
     * @remarks
     * 表示方块在地图上显示时的颜色。
     *
     */
    MapColor = 'minecraft:map_color',
    /**
     * @remarks
     * 表示可移动的方块（如活塞）。
     *
     */
    Movable = 'minecraft:movable',
    /**
     * @remarks
     * 如果存在，此方块具有类似活塞的行为。包含用于查询方块活塞状态的附加属性。
     *
     */
    Piston = 'minecraft:piston',
    /**
     * @remarks
     * 表示方块如何与降水（如雨或雪）进行交互。
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
     * 表示可以在其上显示文本的方块。
     *
     */
    Sign = 'minecraft:sign',
}