/**
 * 包含此世界中可用 Minecraft 方块类型的目录。
 */
export class BlockTypes {
    private constructor();
    /**
     * @remarks
     * 返回指定标识符对应的 BlockType 对象。
     *
     * @param typeName
     * 方块类型的标识符，应遵循命名空间:id 格式，例如 minecraft:dirt。
     * @returns
     * 对应的 BlockType 对象；如果该方块类型在此世界中不可用，则返回 undefined。
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