/**
 * 管理与实体撞击方块时相关的回调。
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体撞击方块时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @param options - 可选的事件选项。
     * @returns 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体撞击方块时调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}