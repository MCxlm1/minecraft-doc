/**
 * 额外的变体值。可用于进一步区分变体。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此实体的标记变体值。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:mark_variant';
}