/**
 * 当物品上存在此组件时，该物品被实体使用时会具有冷却效果。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 表示此物品关联的冷却类别。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly cooldownCategory: string;
    /**
     * @remarks
     * 此物品冷却所需的时间，以刻为单位。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly cooldownTicks: number;
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * @param player
     * 要获取冷却剩余时间的玩家。
     * @returns
     * 剩余冷却刻数。
     * @throws 此函数可能抛出错误。
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * 如果物品是传入的冷却类别，则返回 true，否则返回 false。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param cooldownCategory
     * 可能与此物品关联的冷却类别。
     * @returns
     * 如果物品是给定的冷却类别，则返回 true。
     * @throws 此函数可能抛出错误。
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks
     * 为此物品开始一个新的冷却周期。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param player
     * 要开始冷却的玩家。
     * @throws 此函数可能抛出错误。
     */
    startCooldown(player: Player): void;
}