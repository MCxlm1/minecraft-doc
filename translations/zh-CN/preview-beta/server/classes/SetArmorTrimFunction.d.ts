/**
 * 修改掉落盔甲物品上纹饰的
 * 战利品物品函数。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetArmorTrimFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 应用于盔甲纹饰的材料。
     *
     */
    readonly material: string;
    /**
     * @remarks
     * 应用于盔甲纹饰的图案。
     *
     */
    readonly pattern: string;
}