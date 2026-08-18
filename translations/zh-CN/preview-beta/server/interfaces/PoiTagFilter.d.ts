/**
 * @beta
 * 选择方块兴趣点类型，这些类型具有所有
 * 指定标签。
 */
export interface PoiTagFilter {
    /**
     * @remarks
     * 命名空间 POI 标签，匹配类型必须包含这些标签。数组中的
     * 所有标签都是必需的。
     *
     */
    tags: string[];
}