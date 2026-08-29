/**
 * Used for accessing all available dimension types. Currently
 * only works with Vanilla dimensions.
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves a dimension type using a string-based identifier.
     * Currently only works with Vanilla dimensions.
     *
     * This function can be called in early-execution mode.
     *
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * Retrieves an array of all dimension types. Currently only
     * works with Vanilla dimensions.
     *
     * This function can be called in early-execution mode.
     *
     */
    static getAll(): DimensionType[];
}
