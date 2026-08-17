export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要订阅事件时执行的回调函数。
     * @returns 返回传入的回调函数，以便后续用于取消订阅。
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}