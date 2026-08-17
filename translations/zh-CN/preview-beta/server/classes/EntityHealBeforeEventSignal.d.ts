/**
 * 管理与实体即将被治愈时相关的回调。
 */
export class EntityHealBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体即将被治愈时会被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包使用受限执行权限调用。
     * @param options
     * 用于指定事件过滤的选项。
     * @returns
     * 返回使用受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityHealBeforeEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个当实体即将被治愈时会被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包使用受限执行权限调用。
     */
    unsubscribe(callback: (arg0: EntityHealBeforeEvent) => void): void;
}