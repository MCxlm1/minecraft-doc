/**
 * 管理与效果被添加到实体时相关的回调。
 */
export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当效果被添加到实体时将会调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包将以受限执行权限被调用。
     * @returns
     * 将以受限执行权限被调用的闭包。
     */
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在效果被添加到实体时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包将以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}