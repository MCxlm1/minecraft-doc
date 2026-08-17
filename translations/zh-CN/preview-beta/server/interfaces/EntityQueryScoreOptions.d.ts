/**
 * 包含用于根据目标分数筛选玩家的附加选项。
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * 若设为 true，则此分数范围内的实体和玩家将从查询结果中排除。
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * 若已定义，则仅包含分数等于或低于 maxScore 的玩家。
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * 若已定义，则仅包含分数等于或高于 minScore 的玩家。
     *
     */
    minScore?: number;
    /**
     * @remarks
     * 用于筛选的计分板目标标识符。
     *
     */
    objective?: string;
}