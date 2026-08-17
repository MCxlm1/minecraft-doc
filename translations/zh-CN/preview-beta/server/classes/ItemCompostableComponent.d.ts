/**
 * 当存在时，如果堆肥几率在[1-100]范围内，该物品可以在堆肥方块中被堆肥。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 这是物品在堆肥方块中堆肥并生成堆肥层的百分比几率。注意，此API也会返回原版可堆肥物品（即使这些物品不使用可堆肥物品组件）的堆肥几率。
     *
     * @throws
     * 如果值超出范围[1-100]则抛出异常。
     */
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}