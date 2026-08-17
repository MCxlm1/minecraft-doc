/**
 * 管理与实体掉落物品时相关的回调。
 */
export class EntityItemDropAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体掉落物品时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调。
     * @param options - 用于配置事件回调的可选选项。
     * @returns 用于移除该回调的函数。
     */
    subscribe(
        callback: (arg0: EntityItemDropAfterEvent) => void,
        options?: EntityItemDropEventOptions,
    ): (arg0: EntityItemDropAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体掉落物品时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: EntityItemDropAfterEvent) => void): void;
}