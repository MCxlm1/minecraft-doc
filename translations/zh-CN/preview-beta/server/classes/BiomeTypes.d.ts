/**
 * 支持目录中可用的生物群系类型，这些类型在 Minecraft 中注册。
 */
export class BiomeTypes {
    private constructor();
    /**
     * @remarks
     * 返回特定的生物群系类型。
     *
     * @param typeName
     * 生物群系的标识符。通常应使用带命名空间的标识符（例如 minecraft:frozen_peaks）。
     * @returns
     * 如果生物群系存在，则返回 BiomeType 对象；如果不存在，则返回 undefined。
     */
    static get(typeName: string): BiomeType | undefined;
    /**
     * @remarks
     * 返回 Minecraft 中所有已注册的生物群系类型。
     *
     */
    static getAll(): BiomeType[];
}