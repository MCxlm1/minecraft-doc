/**
 * 描述一种生物群系类型。
 */
export class BiomeType {
    private constructor();
    /**
     * @remarks
     * 生物群系类型的标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 返回该生物群系的标签列表。
     *
     * @returns 该生物群系的标签列表。
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查该生物群系是否拥有所有指定的标签。
     *
     * @param tags
     * 用于检查该生物群系的标签列表。
     * @returns 如果该生物群系拥有所有指定的标签，则返回 true；否则返回 false。
     */
    hasTags(tags: string[]): boolean;
}