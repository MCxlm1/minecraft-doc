/**
 * @remarks
 * Sets a callback that is called before the batch gets called.
 * This will overwrite previously set callbacks for this batch.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 * @privilege early-execution-allowed - This function can be called in early-execution mode.
 *
 * @param batchName
 * Name of the batch of tests the callback will run before.
 * @throws This function can throw errors.
 *
 * {@link GameTestError}
 */
export function setBeforeBatchCallback(batchName: string, batchCallback: () => void): void;
