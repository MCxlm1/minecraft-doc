/**
 * 表示物品的类型 - 例如，羊毛。
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * 返回物品类型的标识符 - 例如，
     * 'minecraft:apple'。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于 .lang 文件中此 ItemType 名称本地化的键。
     *
     */
    readonly localizationKey: string;
}