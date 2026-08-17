/**
 * 管理在玩家与实体交互后触发的回调。
 */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，该函数将在玩家与实体交互后被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数，接受一个 PlayerInteractWithEntityAfterEvent 事件对象。
     * @returns 返回用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg0: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家与实体交互后调用的回调函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数，必须与订阅时引用一致。
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}