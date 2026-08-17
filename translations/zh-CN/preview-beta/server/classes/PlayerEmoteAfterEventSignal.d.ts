export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调函数。
     * @returns 用于取消订阅的函数。
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}