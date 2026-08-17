/**
 * 方块的类型（或模板）。不包含排列数据（状态），除了它所表示的方块类型。
 * 此类型自版本 1.17.10.21 起引入。
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
     * 用于此 BlockType 名称本地化的键，用于 .lang 文件中。
     *
     */
    readonly localizationKey: string;
}