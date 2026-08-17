/**
 * 包含此世界中可用的 Minecraft 方块类型
 * 的目录。
 */
export class BlockTypes {
    private constructor();
    /**
     * @remarks
     * 返回指定标识符的 BlockType 对象。
     *
     * @param typeName
     * 方块类型的标识符。应遵循 namespace:id
     * 模式，例如 minecraft:dirt。
     * @returns
     * BlockType 对象，如果方块类型在此世界中不可用，
     * 则返回 undefined。
     */
    static get(typeName: string): BlockType | undefined;
    /**
     * @remarks
     * 返回所有可用方块类型的集合。
     *
     * @returns
     * 包含所有可用方块类型的 BlockType 数组。
     */
    static getAll(): BlockType[];
}