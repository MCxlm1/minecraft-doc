/**
 * @beta
 * 管理与玩家使用已命名的命名牌物品成功命名实体时相关的回调。
 */
export class PlayerUseNameTagAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅指定回调，以在玩家使用命名牌命名实体后事件触发时调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要订阅的回调函数。
     * @returns 返回传入的回调函数。
     * @throws 在受限执行模式下调用时将抛出错误。
     */
    subscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): (arg0: PlayerUseNameTagAfterEvent) => void;
    /**
     * @remarks
     * 从玩家使用命名牌命名实体后事件信号中移除指定的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     * @throws 在受限执行模式下调用时将抛出错误。
     */
    unsubscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): void;
}