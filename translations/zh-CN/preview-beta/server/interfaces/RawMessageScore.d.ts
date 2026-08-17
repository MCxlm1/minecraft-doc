/**
 * 提供在原始消息中使用的分数令牌的
 * 描述。
 */
export interface RawMessageScore {
    /**
     * @remarks
     * 要匹配的分数值的名称。
     *
     */
    name?: string;
    /**
     * @remarks
     * 要匹配的分数值的名称。
     *
     */
    objective?: string;
}