/**
 * 用于区分实体变体的组件组与其他实体。（例如豹猫、村民。）
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 该实体变体的当前值，通过组件指定。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:variant';
}