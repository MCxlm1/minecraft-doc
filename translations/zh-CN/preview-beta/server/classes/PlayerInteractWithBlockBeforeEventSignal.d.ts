/**
 * 管理与玩家与方块交互之前相关的回调。
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家与方块交互之前被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     * @returns
     * 在受限执行权限下被调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg0: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在玩家与方块交互之前被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}