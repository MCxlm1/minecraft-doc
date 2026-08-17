/**
 * 支持注册一个在实体死亡后触发的事件。
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅一个在实体死亡时触发的事件。
     *
     * 该函数无法在限制执行模式下调用。
     *
     * 该函数可以在早期执行模式下调用。
     *
     * @param callback
     * 实体死亡时调用的函数。
     * @param options
     * 订阅触发时的额外过滤选项。
     * @returns
     * 返回可用于后续解订阅调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 阻止此事件在实体死亡时调用你的函数。
     *
     * 该函数无法在限制执行模式下调用。
     *
     * 该函数可以在早期执行模式下调用。
     *
     * @param callback
     * 需要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}