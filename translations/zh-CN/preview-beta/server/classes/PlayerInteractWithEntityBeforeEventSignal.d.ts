/**
 * 管理与玩家与实体交互前相关的回调函数。
 */
export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家与实体交互前调用的回调函数。
     *
     * 此函数不能在 restricted-execution mode 下调用。
     *
     * 此函数可以在 early-execution mode 下调用。
     *
     * @param callback
     * 此闭包在 restricted-execution privilege 下被调用。
     * @returns
     * 在 restricted-execution privilege 下被调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void,
    ): (arg0: PlayerInteractWithEntityBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在玩家与实体交互前调用的回调函数。
     *
     * 此函数不能在 restricted-execution mode 下调用。
     *
     * 此函数可以在 early-execution mode 下调用。
     *
     * @param callback
     * 此闭包在 restricted-execution privilege 下被调用。
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): void;
}