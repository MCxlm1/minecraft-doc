/**
 * 生物的设备槽位。包括盔甲、副手和主手槽位。
 */
export enum EquipmentSlot {
    /**
     * @beta
     * @remarks
     * 身体槽位。此槽位用于为非人形生物装备盔甲。
     *
     */
    Body = 'Body',
    /**
     * @remarks
     * 胸部槽位。此槽位用于存放诸如胸甲或鞘翅之类的物品。
     *
     */
    Chest = 'Chest',
    /**
     * @remarks
     * 脚部槽位。此槽位用于存放诸如靴子之类的物品。
     *
     */
    Feet = 'Feet',
    /**
     * @remarks
     * 头部槽位。此槽位用于存放诸如头盔或雕刻南瓜之类的物品。
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * 腿部槽位。此槽位用于存放诸如护腿之类的物品。
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
     * 副手槽位。此槽位用于存放诸如盾牌和地图之类的物品。
     *
     */
    Offhand = 'Offhand',
}