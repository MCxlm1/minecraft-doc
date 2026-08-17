/**
 * 修改掉落盔甲物品装饰的战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetArmorTrimFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 要应用于盔甲装饰的材料。
     *
     */
    readonly material: string;
    /**
     * @remarks
     * 要应用于盔甲装饰的图案。
     *
     */
    readonly pattern: string;
}