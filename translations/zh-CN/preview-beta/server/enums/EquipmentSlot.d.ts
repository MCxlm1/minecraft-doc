/**
 * 生物（mob）的装备槽。包括盔甲、副手和主手槽。
 */
export enum EquipmentSlot {
    /**
     * @beta
     * @remarks
     * 身体槽。该槽用于容纳非人形生物的盔甲。
     *
     */
    Body = 'Body',
    /**
     * @remarks
     * 胸部槽。该槽用于容纳胸甲或鞘翅等物品。
     *
     */
    Chest = 'Chest',
    /**
     * @remarks
     * 脚部槽。该槽用于容纳靴子等物品。
     *
     */
    Feet = 'Feet',
    /**
     * @remarks
     * 头部槽。该槽用于容纳头盔或雕刻南瓜等物品。
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * 腿部槽。该槽用于容纳护腿等物品。
     *
     */
    Legs = 'Legs',
    /**
     * @remarks
     * 主手槽。对于玩家而言，主手槽指的是当前选中的快捷栏槽位。
     *
     */
    Mainhand = 'Mainhand',
    /**
     * @remarks
     * 副手槽。该槽用于容纳盾牌和地图等物品。
     *
     */
    Offhand = 'Offhand',
}