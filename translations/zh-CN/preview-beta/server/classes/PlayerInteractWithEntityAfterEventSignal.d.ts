/**
 * 管理回调，这些回调在玩家与实体交互后被触发。
 */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家与实体交互后被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 一个将在玩家与实体交互后被调用的回调函数。
     * @returns - 一个用于移除回调的函数。
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg0: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调将在玩家与实体交互后被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}