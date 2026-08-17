/**
 * 定义实体的次要颜色。仅对某些具有预定义次要颜色的实体有效（例如，热带鱼）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 此特定颜色的值。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly value: PaletteColor;
    static readonly componentId = 'minecraft:color2';
}