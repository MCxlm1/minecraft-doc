/**
 * An observable that holds a string value. Listeners are
 * notified whenever the value changes.
 */
export class ObservableString {
    /**
     * @remarks
     * Creates a new ObservableString with the provided initial
     * string value.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param data
     * The initial string value for this observable.
     * @param options
     * Optional configuration for the observable, such as whether
     * the value can be written by the client.
     */
    constructor(data: string, options?: ObservableOptions);
    /**
     * @remarks
     * Returns the current string value held by this observable.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    getData(): string;
    /**
     * @remarks
     * Gets filtered data from the Observable (only available for
     * strings). In case of failure, it will return an array of
     * TextFilteringError that can provide more context about the
     * filtering process. For testing purposes, the options are
     * available under 'Creator -> Text Filtering' settings menu.
     * This delay is only applied to the getFilteredText function
     * and can be used to simulate network latency when testing.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    getFilteredText(player: minecraftserver.Player): Promise<TextFilteringError[] | string>;
    /**
     * @remarks
     * Updates the string value held by this observable. If the new
     * value differs from the current value, all subscribed
     * listeners are notified with the new value.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param data
     * The new string value to set.
     */
    setData(data: string): void;
    /**
     * @remarks
     * Registers a callback to be invoked whenever the observable's
     * value changes. Returns the callback, which can be passed to
     * unsubscribe to remove the listener.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * A function that receives the new string value each time the
     * observable changes.
     */
    subscribe(callback: (arg0: string) => void): (arg0: string) => void;
    /**
     * @remarks
     * Removes a previously registered listener from this
     * observable. Returns true if the listener was found and
     * removed, false if it was not found.
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * The callback handle previously returned by subscribe.
     */
    unsubscribe(callback: (arg0: string) => void): boolean;
}
