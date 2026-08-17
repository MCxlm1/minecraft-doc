/**
 * 管理与实体将受到伤害时相关的回调。
 */
export class EntityHurtBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体将受到伤害时
     * 调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行权限下调用。
     * @returns
     * 在受限执行权限下调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityHurtBeforeEvent) => void,
        options?: EntityHurtBeforeEventOptions,
    ): (arg0: EntityHurtBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当实体将受到伤害时
     * 被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行权限下调用。
     */
    unsubscribe(callback: (arg0: EntityHurtBeforeEvent) => void): void;
}