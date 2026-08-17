/**
 * 当此组件存在于物品上时，该物品可被实体食用。注意此组件仅适用于数据驱动物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 如果为 true，玩家始终可以食用此物品（即使不饿）。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * 表示此食物物品被食用后将为实体提供的营养值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly nutrition: number;
    /**
     * @remarks
     * 当物品被食用时，此值将按照公式 (nutrition * saturation_modifier * 2) 用于施加饱和度增益。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * 若指定，则将当前物品转换为该属性所指定的物品。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}