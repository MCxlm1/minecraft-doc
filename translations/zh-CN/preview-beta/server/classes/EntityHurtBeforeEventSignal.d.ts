/**
 * 管理当实体即将受到伤害时触发的
 * 回调。
 */
export class EntityHurtBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体即将受到伤害时
     * 调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 这个闭包在受限执行权限下被调用。
     * @returns
     * 在受限执行权限下被调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityHurtBeforeEvent) => void,
        options?: EntityHurtBeforeEventOptions,
    ): (arg0: EntityHurtBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当实体即将受到伤害时
     * 不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 这个闭包在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: EntityHurtBeforeEvent) => void): void;
}