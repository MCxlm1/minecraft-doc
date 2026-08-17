/**
 * 管理当实体被治疗时
 * 触发的回调。
 */
export class EntityHealAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体被治疗时
     * 将调用该回调。
     * @param callback - 当实体被治疗时要执行的回调函数。
     * @param options - 可选的事件选项。
     * @returns 返回一个函数，可用于取消此订阅。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(
        callback: (arg0: EntityHealAfterEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调在实体被治疗时
     * 将不再被调用。
     * @param callback - 要移除的回调函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}