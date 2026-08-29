/**
 * Represents a min/max structure for expressing a potential
 * range of numbers.
 */
export class NumberRange {
    /**
     * Maximum value within a range.
     */
    "max": number;
    /**
     * Minimum value within a range.
     */
    "min": number;
    /**
     * @remarks
     * Returns a random number between the minimum and maximum of
     * the range.
     */
    next(): number;
    protected constructor();
}
