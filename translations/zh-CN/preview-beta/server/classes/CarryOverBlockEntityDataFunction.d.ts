/**
 * @beta
 * 尝试将破坏的方块中的方块实体数据复制到掉落物品的战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CarryOverBlockEntityDataFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 如果为true，并且方块实体具有动态属性，则函数将把动态属性从方块实体复制到掉落物品。
     *
     */
    readonly dynamicProperties: boolean;
}