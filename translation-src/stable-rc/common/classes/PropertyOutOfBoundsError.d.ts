export class PropertyOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly maxValue?: number;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly minValue?: number;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly value: number;
}
