/**
 * 战利品物品函数，用于将实体类型分配给掉落的刷怪蛋。
 * 除刷怪蛋外的任何物品均无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetSpawnEggFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 要分配给掉落刷怪蛋的实体。
     *
     */
    readonly id: string;
}