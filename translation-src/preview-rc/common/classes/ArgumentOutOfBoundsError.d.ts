/**
 * This type of error is thrown when a parameter to a method or
 * property is out of expected bounds.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly index: number;
    /**
     * @remarks
     * Max expected value for the condition.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly maxValue?: number;
    /**
     * @remarks
     * Min expected value for the condition.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly minValue?: number;
    /**
     * @remarks
     * Passed-in value for the argument.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly value?: number;
}
