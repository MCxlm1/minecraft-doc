/**
 * @beta
 * 管理与实体停止潜行时触发的回调。
 */
export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体停止潜行时被调用。
     *
     * 此函数无法在受限执行模式下被调用。
     *
     * 此函数可以在早期执行模式下被调用。
     *
     * @param callback
     * 要添加的回调函数。
     * @param options
     * 可选的额外选项。
     * @returns
     * 返回传递给 subscribe 的回调函数。
     */
    subscribe(
        callback: (arg0: EntityStopSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体停止潜行时被调用的回调。
     *
     * 此函数无法在受限执行模式下被调用。
     *
     * 此函数可以在早期执行模式下被调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}