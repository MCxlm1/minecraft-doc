/**
 * 方块的类型（或模板）。不包含
 * 除其表示的方块类型之外的置换数据（状态）
 * 它表示。此类型在版本
 * 1.17.10.21 中引入。
 */
export class BlockType {
    private constructor();
    /**
     * @remarks
     * 方块类型名称 - 例如 `minecraft:acacia_stairs`。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 用于此 BlockType 名称本地化的键，在
     * .lang 文件中使用。
     *
     */
    readonly localizationKey: string;
}