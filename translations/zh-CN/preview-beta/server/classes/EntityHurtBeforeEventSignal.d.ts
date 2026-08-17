/**
 * 管理当实体将要受到伤害时连接的回调。
 */
export class EntityHurtBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体将要受到伤害时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权调用。
     * @param options
     * 可选，配置事件回调的选项。
     * @returns
     * 以受限执行特权调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityHurtBeforeEvent) => void,
        options?: EntityHurtBeforeEventOptions,
    ): (arg0: EntityHurtBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个当实体将要受到伤害时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权调用。
     */
    unsubscribe(callback: (arg0: EntityHurtBeforeEvent) => void): void;
}