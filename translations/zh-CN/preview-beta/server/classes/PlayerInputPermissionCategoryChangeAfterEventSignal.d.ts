/**
 * 管理与玩家输入权限更改后相关的回调。
 */
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家输入权限更改后被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 一个回调函数，接收一个 PlayerInputPermissionCategoryChangeAfterEvent 参数。
     * @returns
     * 返回传入的回调函数，用于后续取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void,
    ): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家输入权限更改后会被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}