/**
 * 用于区分实体的某个变体与其他变体的组件组（例如豹猫、村民）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体的当前变体值，通过组件指定。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:variant';
}