/**
 * 皮肤ID值。可用于区分皮肤，例如村民的基础皮肤。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 返回实体的皮肤ID标识符的值。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:skin_id';
}