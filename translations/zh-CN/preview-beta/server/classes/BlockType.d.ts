/**
 * 方块的类型（或模板）。不包含排列数据（状态），除了它代表的方块类型。
 * 此类型自 1.17.10.21 版本引入。
 */
export class BlockType {
    private constructor();
    /**
     * @remarks
     * 方块类型名称 - 例如，`minecraft:acacia_stairs`。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 此 BlockType 名称在 .lang 文件中使用的本地化键。
     *
     */
    readonly localizationKey: string;
}