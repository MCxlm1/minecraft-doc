/**
 * 管理与实体即将被治愈时
 * 相关的回调。
 */
export class EntityHealBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体即将被治愈时
     * 调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * @param options
     * 可选的事件选项。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityHealBeforeEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在实体即将被治愈时
     * 调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: EntityHealBeforeEvent) => void): void;
}