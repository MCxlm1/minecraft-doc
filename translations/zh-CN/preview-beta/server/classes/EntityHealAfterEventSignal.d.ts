/**
 * 管理与实体被治疗时触发的回调。
 */
export class EntityHealAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在实体被治疗时会被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要订阅的回调函数。
     * @param options 事件订阅选项。
     * @returns 用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityHealAfterEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体被治疗时会被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}