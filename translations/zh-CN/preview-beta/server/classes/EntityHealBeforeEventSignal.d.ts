```
/**
 * 管理当实体将要被治疗时连接的回调。
 */
export class EntityHealBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调在实体将要被治疗时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     * @param options
     * 可选的事件选项。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityHealBeforeEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体将要被治疗时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: EntityHealBeforeEvent) => void): void;
}
```