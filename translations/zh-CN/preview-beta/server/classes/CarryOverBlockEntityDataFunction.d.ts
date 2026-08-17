/**
 * @beta
 * 战利品物品函数，将尝试从被破坏的方块复制方块实体数据到掉落的物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CarryOverBlockEntityDataFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 如果为true，并且方块实体有动态属性（dynamic_properties），该函数将复制动态属性从方块实体到掉落的物品。
     *
     */
    readonly dynamicProperties: boolean;
}