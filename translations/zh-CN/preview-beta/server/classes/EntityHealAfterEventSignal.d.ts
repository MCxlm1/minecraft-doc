/**
 * 管理当实体被治疗时连接的回调。
 */
export class EntityHealAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体被治疗时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调函数，接收 EntityHealAfterEvent 事件。
     * @param options - 可选参数，用于配置实体治疗事件的选项。
     * @returns 返回传递的回调函数，以便后续使用。
     */
    subscribe(
        callback: (arg0: EntityHealAfterEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调在实体被治疗时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}