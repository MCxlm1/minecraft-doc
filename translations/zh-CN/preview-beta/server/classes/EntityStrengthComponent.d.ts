/**
 * 定义实体携带物品的能力。具有较高力量的实体将拥有更高的潜在携带容量和更多的物品槽位。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该实体的最大力量，定义在实体类型定义中。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly max: number;
    /**
     * @remarks
     * 已为实体设置的力量组件的当前值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:strength';
}