/**
 * 战利品物品函数，用于修改
 * 掉落旗帜的类型。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBannerDetailsFunction extends LootItemFunction {
    private constructor();
    /**
     * @beta
     * @remarks
     * 掉落旗帜的基础颜色。
     *
     */
    readonly baseColor: string;
    /**
     * @beta
     * @remarks
     * 用于装饰旗帜的 {@link BannerPattern} 对象数组，
     * 包括颜色和图案类型。
     *
     */
    readonly patterns: BannerPattern[];
    /**
     * @remarks
     * 要掉落的旗帜类型。
     *
     */
    readonly 'type': number;
}