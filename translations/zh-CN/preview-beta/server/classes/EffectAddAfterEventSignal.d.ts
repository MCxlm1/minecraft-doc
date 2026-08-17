/**
 * 管理与向实体添加效果时触发的回调。
 */
export class EffectAddAfterEventSignal {
    private constructor();
    /**
     * @remarks
     ���加一个回调，当效果被添加到实体时会被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 当效果被添加到实体时要调用的回调函数。
     * @param options
     * 可选的实体事件选项。
     * @returns
     * 返回已订阅的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EffectAddAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当效果被添加到实体时调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}