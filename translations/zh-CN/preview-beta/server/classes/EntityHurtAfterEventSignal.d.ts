/**
 * 管理与实体受到伤害时相关的回调。
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当实体受到伤害时会被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当实体受到伤害时要调用的回调函数。
     * @param options - （可选）额外的选项。
     * @returns 返回被订阅的回调函数。
     *
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityHurtAfterEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当实体受到伤害时会被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}