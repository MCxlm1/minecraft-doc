/**
 * 当物品上存在此组件时，该物品在由实体使用时将具有冷却效果。
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
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * 如果物品是传入的冷却类别，则返回 true，否则返回 false。
     *
     * This function can't be called in restricted-execution mode.
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
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    startCooldown(player: Player): void;
}