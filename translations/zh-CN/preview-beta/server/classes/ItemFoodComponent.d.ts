/**
 * 当存在于物品上时，该物品可被实体消耗。请注意，此组件仅适用于数据驱动的物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 如果为 true，则玩家始终可以食用该物品（即使不饿）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * 表示该食物物品被食用时会为实体提供多少营养值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly nutrition: number;
    /**
     * @remarks
     * 当物品被食用时，此值将根据公式（营养值 * 饱和度修饰符 * 2）用于应用饱和度增益效果。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * 若指定，则会将当前使用的物品转换为该属性所指定的物品。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}