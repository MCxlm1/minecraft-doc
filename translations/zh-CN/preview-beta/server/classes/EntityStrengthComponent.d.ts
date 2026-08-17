/**
 * 定义实体携带物品的能力。具有更高强度的实体将具有更高的潜在携带容量和更多物品槽位。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该实体的最大强度，如实体类型定义中所定义。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly max: number;
    /**
     * @remarks
     * 已为实体设置的强度组件的当前值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:strength';
}