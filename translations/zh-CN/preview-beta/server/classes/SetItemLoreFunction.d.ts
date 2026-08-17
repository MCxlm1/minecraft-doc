/**
 * 战利品物品函数，用于修改掉落物品的
 * lore。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemLoreFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于掉落物品的 lore。
     *
     */
    readonly lore: string[];
}