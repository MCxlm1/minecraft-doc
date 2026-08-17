/**
 * 当出现在物品上时，该物品在被实体使用时具有冷却效果。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 表示此物品关联的冷却类别。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly cooldownCategory: string;
    /**
     * @remarks
     * 该物品冷却所需的时间（以刻为单位）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly cooldownTicks: number;
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param player
     * 要查询剩余冷却时间的玩家。
     * @returns
     * 该物品剩余的冷却时间（以刻为单位）。
     * @throws 此函数可能抛出错误。
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * 如果物品属于传入的冷却类别，则返回 true，否则返回 false。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param cooldownCategory
     * 可能与此物品关联的冷却类别。
     * @returns
     * 如果物品属于给定的冷却类别，则返回 true。
     * @throws 此函数可能抛出错误。
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks
     * 开始此物品的新冷却周期。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param player
     * 触发此冷却的玩家。
     * @throws 此函数可能抛出错误。
     */
    startCooldown(player: Player): void;
}