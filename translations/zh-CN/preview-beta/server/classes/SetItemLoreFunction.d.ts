/**
 * 修改掉落物品 lore 的战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetItemLoreFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 要应用于掉落物品的 lore。
     *
     */
    readonly lore: string[];
}