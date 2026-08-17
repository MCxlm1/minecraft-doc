/**
 * 包含此世界中可用的Minecraft方块类型的目录。
 */
export class BlockTypes {
    private constructor();
    /**
     * @remarks
     * 返回指定标识符的BlockType对象。
     *
     * @param typeName
     * 方块类型的标识符。应遵循命名空间:ID的模式，例如 minecraft:dirt。
     * @returns
     * BlockType对象，如果该方块类型在此世界中不可用，则返回undefined。
     */
    static get(typeName: string): BlockType | undefined;
    /**
     * @remarks
     * 返回所有可用方块类型的集合。
     *
     */
    static getAll(): BlockType[];
}