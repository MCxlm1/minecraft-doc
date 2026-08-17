/**
 * 用于区分实体变体的组件组，
 * 与其他实体不同（例如：豹猫, 村民）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 实体的当前变体值，通过
     * 组件指定。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:variant';
}