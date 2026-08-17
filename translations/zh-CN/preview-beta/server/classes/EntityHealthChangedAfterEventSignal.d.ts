/**
 * @remarks
 * 添加一个回调函数，该函数将在实体的生命值发生变化时被调用。
 *
 * This function can't be called in restricted-execution mode.
 *
 * This function can be called in early-execution mode.
 *
 * @param callback - 要添加的回调函数，参数为实体生命值变化事件。
 * @param options - （可选）事件选项。
 * @returns 返回传入的回调函数。
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，该函数将在实体的生命值发生变化时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数，参数为实体生命值变化事件。
     * @param options - （可选）事件选项。
     * @returns 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其不再在实体生命值变化时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}