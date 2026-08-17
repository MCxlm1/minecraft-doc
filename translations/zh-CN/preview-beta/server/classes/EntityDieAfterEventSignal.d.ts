```18:08:43
/**
 * Supports registering for an event that fires after an entity
 * has died.
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅一个在实体死亡时触发的事件。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 实体死亡时要调用的函数。
     * @param options
     * 用于设置订阅触发条件的附加过滤选项。
     * @returns
     * 返回一个闭包，可用于后续调用以取消订阅。
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 当实体死亡时，停止此事件调用你的函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 需要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}
```