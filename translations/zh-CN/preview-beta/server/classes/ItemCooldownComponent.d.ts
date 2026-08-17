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