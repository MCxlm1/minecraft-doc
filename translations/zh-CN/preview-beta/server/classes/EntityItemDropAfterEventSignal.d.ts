/**
 * 管理与实体掉落物品时相关的回调。
 */
export class EntityItemDropAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体掉落物品时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当实体掉落物品时要调用的回调函数。
     * @param options - 可选的额外事件选项。
     * @returns 所订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityItemDropAfterEvent) => void,
        options?: EntityItemDropEventOptions,
    ): (arg0: EntityItemDropAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体掉落物品时不再被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityItemDropAfterEvent) => void): void;
}