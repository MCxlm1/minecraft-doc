/**
 * Operator 表示用于表达潜在数字范围的下界/上界结构。
 */
export interface RangeComparison {
    /**
     * @remarks
     * 范围中的下界。
     *
     */
    lowerBound: number;
    /**
     * @remarks
     * 范围中的上界。
     *
     */
    upperBound: number;
}