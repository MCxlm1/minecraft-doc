```typescript
/**
 * 当物品上存在此组件时，该物品可被实体食用。
 * 注意，此组件仅适用于数据驱动物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 如果为 true，玩家可以随时食用此物品（即使不饥饿）。
     *
     * @throws
     * 此属性在使用时可能抛出异常。
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * 表示该食物物品被食用后为实体提供的营养值。
     *
     * @throws
     * 此属性在使用时可能抛出异常。
     */
    readonly nutrition: number;
    /**
     * @remarks
     * 当物品被食用时，此值用于根据公式（营养值 * 饱和度修正值 * 2）计算并应用饱和度增益。
     *
     * @throws
     * 此属性在使用时可能抛出异常。
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * 如果指定，使用中的物品会转换为该属性指定的物品。
     *
     * @throws
     * 此属性在使用时可能抛出异常。
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}
```