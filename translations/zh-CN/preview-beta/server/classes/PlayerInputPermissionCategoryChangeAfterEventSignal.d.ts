/**
 * 管理在玩家输入权限改变后触发的回调函数。
 */
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家输入权限改变后调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 一个回调函数，接收一个 PlayerInputPermissionCategoryChangeAfterEvent 参数。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void,
    ): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个将在玩家输入权限改变后调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数，必须是通过 subscribe 注册的同一个函数。
     */
    unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}