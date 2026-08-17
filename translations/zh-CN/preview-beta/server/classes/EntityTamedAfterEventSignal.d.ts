/**
 * @beta
 * 管理当实体被驯服时连接的回调。
 */
export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 不能在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     *
     */
    subscribe(
        callback: (arg0: EntityTamedAfterEvent) => void,
        options?: EntityTamedEventFilter,
    ): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks
     * 不能在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     *
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}