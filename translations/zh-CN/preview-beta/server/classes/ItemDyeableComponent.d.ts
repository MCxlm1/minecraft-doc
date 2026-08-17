/**
 * 当存在于物品上时，该物品可以被染色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDyeableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 设置并返回物品的当前颜色。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    color?: RGB;
    /**
     * @remarks
     * 返回物品的默认颜色。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly defaultColor?: RGB;
    static readonly componentId = 'minecraft:dyeable';
}