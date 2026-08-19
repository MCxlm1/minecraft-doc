/**
 * Used for accessing all available dimension types. Currently
 * only works with Vanilla dimensions.
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves a dimension type using a string-based identifier.
     * Works with both vanilla dimensions and custom dimensions.
     * Custom dimensions cannot be retrieved until after the system
     * startup event has completed.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * Retrieves an array of all dimension types. Includes both
     * vanilla dimensions and custom dimensions. Custom dimensions
     * are not included until after the system startup event has
     * completed.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    static getAll(): DimensionType[];
}
