/**
 * 管理当效果被添加到实体时触发的回调。
 */
export class EffectAddAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当效果被添加到实体时将会调用该函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当效果被添加到实体时要调用的回调函数。
     * @param options - （可选）用于配置事件监听的选项。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EffectAddAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当效果被添加到实体时会被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}