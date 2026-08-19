/**
 * The error called if page content being set on an
 * {@link ItemBookComponent} are invalid ie. exceeding the
 * maximum page length.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookPageContentError extends Error {
    private constructor();
    /**
     * @remarks
     * The index of the page requested to be modified.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly pageIndex: number;
    /**
     * @remarks
     * The reason for the error.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly reason: BookErrorReason;
}
