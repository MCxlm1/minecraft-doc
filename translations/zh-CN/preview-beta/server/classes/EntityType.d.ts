/**
 * 表示关于一种实体类型的信息。
 */
export class EntityType {
    private constructor();
    /**
     * @remarks
     * 此实体类型的标识符 - 例如，
     * 'minecraft:skeleton'。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于在 .lang 文件中本地化此 EntityType 名称的键。
     *
     */
    readonly localizationKey: string;
}