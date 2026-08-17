/**
 * 当此组件存在时，如果堆肥几率在 [1 - 100] 范围内，
 * 该物品可以在堆肥桶方块中被堆肥。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 这是物品在堆肥桶方块中堆肥并生成一层堆肥层的百分比几率。
     * 请注意，此 API 也会返回原版物品中可堆肥但未使用堆肥物品组件
     * 的物品的堆肥几率。
     *
     * @throws
     * 如果值超出 [1 - 100] 范围，则抛出异常。
     */
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}