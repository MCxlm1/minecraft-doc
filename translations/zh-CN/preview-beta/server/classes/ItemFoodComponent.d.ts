/**
 * 当存在于物品上时，该物品可被实体消耗。注意，此组件仅适用于数据驱动物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 如果为 true，则玩家始终可以食用此物品（即使不饿）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * 表示该食物被食用时将为实体提供多少营养值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly nutrition: number;
    /**
     * @remarks
     * 当物品被食用时，此值根据公式（营养值 * 饱和度修正值 * 2）用于应用饱和效果。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * 当指定时，将当前物品转换为此属性指定的物品。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}