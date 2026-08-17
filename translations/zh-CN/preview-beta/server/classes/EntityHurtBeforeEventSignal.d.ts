/**
 * 管理与实体将要受到伤害时相关的回调。
 */
export class EntityHurtBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体将要受到伤害时调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包会以受限执行权限被调用。
     * @param options
     * 可选的回调选项。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityHurtBeforeEvent) => void,
        options?: EntityHurtBeforeEventOptions,
    ): (arg0: EntityHurtBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个当实体将要受到伤害时会被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包会以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: EntityHurtBeforeEvent) => void): void;
}