/**
 * 支持 Minecraft 中已注册的可用生物群系类型目录。
 */
export class BiomeTypes {
    private constructor();
    /**
     * @remarks
     * 返回特定的生物群系类型。
     *
     * @param typeName
     * 生物群系的标识符。通常应使用命名空间标识符（如 minecraft:frozen_peaks）。
     * @returns
     * 如果该生物群系存在，则返回 BiomeType 对象；否则返回 undefined。
     */
    static get(typeName: string): BiomeType | undefined;
    /**
     * @remarks
     * 返回 Minecraft 中所有已注册的生物群系类型。
     *
     * @returns
     * 所有已注册的生物群系类型数组。
     */
    static getAll(): BiomeType[];
}