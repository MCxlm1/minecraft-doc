/**
 * 管理当实体生命值改变时触发的回调。
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体生命值改变时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数。
     * @param options - 可选的实体事件选项。
     * @returns 返回传入的回调函数。
     *
     */
    subscribe(
        callback: (arg0: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当实体生命值改变时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}