/**
 * 管理与效果添加到实体时相关的回调。
 */
export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当效果被添加到实体时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当效果被添加到实体时不再调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}