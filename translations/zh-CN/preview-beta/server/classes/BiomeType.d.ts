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
     * 返回生物群系的标签列表。
     *
     * @returns 生物群系标签的字符串数组。
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查生物群系是否拥有所有提供的标签。
     *
     * @param tags
     * 要检查的标签列表，与生物群系进行比对。
     * @returns 如果生物群系拥有所有提供的标签，则返回 true；否则返回 false。
     */
    hasTags(tags: string[]): boolean;
}