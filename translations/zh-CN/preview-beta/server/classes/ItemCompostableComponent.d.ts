/**
 * 当存在时，如果堆肥几率在[1 - 100]范围内，该物品可以在堆肥方块中被堆肥。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 这是在堆肥方块中物品堆肥并生成堆肥层的百分比几率。请注意，此API也会返回原版中可堆肥但未使用堆肥物品组件的物品的堆肥几率。
     *
     * @throws
     * 如果值超出[1 - 100]范围，则抛出错误。
     */
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}