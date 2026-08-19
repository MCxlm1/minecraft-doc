/**
 * An observable that holds a numeric value. Listeners are
 * notified whenever the value changes.
 */
export class ObservableNumber {
    /**
     * @remarks
     * Creates a new ObservableNumber with the provided initial
     * numeric value.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param data
     * The initial numeric value for this observable.
     * @param options
     * Optional configuration for the observable, such as whether
     * the value can be written by the client.
     */
    constructor(data: number, options?: ObservableOptions);
    /**
     * @remarks
     * Returns the current numeric value held by this observable.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    getData(): number;
    /**
     * @remarks
     * Updates the numeric value held by this observable. If the
     * new value differs from the current value, all subscribed
     * listeners are notified with the new value.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param data
     * The new numeric value to set.
     */
    setData(data: number): void;
    /**
     * @remarks
     * Registers a callback to be invoked whenever the observable's
     * value changes. Returns the callback, which can be passed to
     * unsubscribe to remove the listener.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * A function that receives the new numeric value each time the
     * observable changes.
     */
    subscribe(callback: (arg0: number) => void): (arg0: number) => void;
    /**
     * @remarks
     * Removes a previously registered listener from this
     * observable. Returns true if the listener was found and
     * removed, false if it was not found.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * The callback handle previously returned by subscribe.
     */
    unsubscribe(callback: (arg0: number) => void): boolean;
}
