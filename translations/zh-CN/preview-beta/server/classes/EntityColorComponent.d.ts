/**
 * 定义实体的颜色。仅对某些具有预定义颜色值的实体有效（例如，羊、羊驼、潜影贝）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * 此属性在限制执行模式下无法编辑。
     *
     */
    value: number;
    static readonly componentId = 'minecraft:color';
}