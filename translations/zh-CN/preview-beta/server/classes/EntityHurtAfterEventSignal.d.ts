/**
 * 管理当实体受到伤害时触发的回调。
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体受到伤害时调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @param options - 可选的回调选项。
     * @returns 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityHurtAfterEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当实体受到伤害时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}