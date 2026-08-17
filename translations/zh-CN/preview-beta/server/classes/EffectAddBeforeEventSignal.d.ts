/**
 * 管理与效果添加到实体时相关的回调。
 */
export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当效果添加到实体时将会调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在效果添加到实体时不再被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}