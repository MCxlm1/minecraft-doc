/**
 * Operator 表示用于表达数字潜在范围的下界/上界结构。
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