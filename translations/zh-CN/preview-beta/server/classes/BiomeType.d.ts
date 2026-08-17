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
     * 返回该生物群系标签的列表。
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查该生物群系是否拥有所有提供的标签。
     *
     * @param tags
     * 要检查的标签列表，用于与生物群系进行比对。
     */
    hasTags(tags: string[]): boolean;
}