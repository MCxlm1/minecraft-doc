/**
 * 表示物品的类型，例如羊毛。
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * 返回物品类型的标识符，例如 'minecraft:apple'。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于在 .lang 文件中本地化此 ItemType 名称的键。
     *
     */
    readonly localizationKey: string;
}