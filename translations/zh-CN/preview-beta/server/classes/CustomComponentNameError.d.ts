export class CustomComponentNameError extends Error {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly reason: CustomComponentNameErrorReason;
}