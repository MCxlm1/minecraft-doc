/**
 * 表示一种实体类型的信息。
 */
export class EntityType {
    private constructor();
    /**
     * @remarks
     * 此实体类型的标识符 - 例如 'minecraft:skeleton'。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于 .lang 文件中此 EntityType 名称本地化的键。
     *
     */
    readonly localizationKey: string;
}