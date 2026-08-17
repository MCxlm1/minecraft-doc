/**
 * 表示物品的类型 - 例如，羊毛。
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * 返回物品类型的标识符 - 例如，'minecraft:apple'。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 此 ItemType 名称在 .lang 文件中使用的本地化键。
     *
     */
    readonly localizationKey: string;
}