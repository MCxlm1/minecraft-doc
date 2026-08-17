/**
 * 包含根据目标分数过滤玩家的附加选项。
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * 如果设置为true，则此分数范围内的实体和玩家将从查询结果中排除。
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * 如果定义，则仅包含分数等于或低于maxScore的玩家。
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * 如果定义，则仅包含分数等于或高于minScore的玩家。
     *
     */
    minScore?: number;
    /**
     * @remarks
     * 要过滤的记分板目标的标识符。
     *
     */
    objective?: string;
}