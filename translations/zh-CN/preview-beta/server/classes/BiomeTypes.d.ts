/**
 * 支持在Minecraft中注册的可用生物群系类型目录。
 */
export class BiomeTypes {
    private constructor();
    /**
     * @remarks
     * 返回一个特定的生物群系类型。
     *
     * @param typeName
     * 生物群系的标识符。通常，应使用命名空间标识符（例如，minecraft:frozen_peaks）。
     * @returns
     * 如果生物群系存在，则返回一个BiomeType对象。如果不存在，则返回undefined。
     */
    static get(typeName: string): BiomeType | undefined;
    /**
     * @remarks
     * 返回Minecraft中所有注册的生物群系类型。
     * @returns
     * 返回Minecraft中所有注册的生物群系类型。
     *
     */
    static getAll(): BiomeType[];
}