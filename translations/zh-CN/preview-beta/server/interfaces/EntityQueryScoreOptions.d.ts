/**
 * 包含用于根据目标的分数过滤玩家的附加选项。
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * 如果设置为 true，则此分数范围内的实体和玩家将从查询结果中排除。
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * 如果定义，则只包含分数等于或低于 maxScore 的玩家。
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * 如果定义，则只包含分数等于或高于 minScore 的玩家。
     *
     */
    minScore?: number;
    /**
     * @remarks
     * 要筛选的计分板目标标识符。
     *
     */
    objective?: string;
}