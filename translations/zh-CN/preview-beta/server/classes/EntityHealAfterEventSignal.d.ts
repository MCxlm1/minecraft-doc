/**
 * 管理与实体被治愈时相关的回调。
 */
export class EntityHealAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体被治愈时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 实体被治愈时调用的回调函数。
     * @param options - 可选的实体治愈事件选项。
     * @returns 返回传入的回调函数，用于后续调用 unsubscribe 取消订阅。
     */
    subscribe(
        callback: (arg0: EntityHealAfterEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体被治愈时调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}