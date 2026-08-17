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