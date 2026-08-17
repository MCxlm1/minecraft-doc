/**
 * @beta
 * 尝试将已破坏方块的方块实体数据复制到掉落物品的战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CarryOverBlockEntityDataFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 如果为 true，且方块实体拥有 dynamic_properties，则函数会将方块实体的动态属性复制到掉落的物品上。
     *
     */
    readonly dynamicProperties: boolean;
}