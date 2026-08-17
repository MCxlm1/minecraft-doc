export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 事件触发时调用的回调函数。
     * @returns - 可用于取消订阅的函数。
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的事件回调函数。
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}