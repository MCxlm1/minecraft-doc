/**
 * 皮肤ID值。可用于区分皮肤，例如村民的基础皮肤。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 获取实体的皮肤ID标识符的值。
     *
     * @throws 当使用该属性时可能会抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:skin_id';
}