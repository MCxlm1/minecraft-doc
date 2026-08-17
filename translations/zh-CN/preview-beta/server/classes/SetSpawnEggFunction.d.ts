/**
 * 战利品物品函数，用于将实体类型分配给掉落的刷怪蛋。不适用于除刷怪蛋以外的任何物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetSpawnEggFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 要分配给掉落蛋的实体。
     *
     */
    readonly id: string;
}