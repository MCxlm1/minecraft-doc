export class GameTestCompletedError extends Error {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly reason: GameTestCompletedErrorReason;
}
