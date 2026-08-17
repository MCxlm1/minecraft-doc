/**
 * Operator 表示一个用于表达可能数字范围的上下界结构。
 */
export interface RangeComparison {
    /**
     * @remarks
     * 范围内的下界。
     *
     */
    lowerBound: number;
    /**
     * @remarks
     * 范围内的上界。
     *
     */
    upperBound: number;
}