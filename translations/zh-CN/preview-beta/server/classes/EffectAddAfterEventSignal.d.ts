/**
 * 管理与效果添加到实体时
 * 相关的回调。
 */
export class EffectAddAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在
     * 效果添加到实体时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当效果添加到实体时调用的回调函数。
     * @param options - 可选的事件选项。
     * @returns 返回传入的回调函数，便于后续用于取消订阅。
     */
    subscribe(
        callback: (arg0: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EffectAddAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当效果添加到实体时
     * 会被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}