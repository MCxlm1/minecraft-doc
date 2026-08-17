/**
 * @beta
 * 管理与玩家放置方块前相关的回调。
 */
export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家放置方块之前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家放置方块之前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void): void;
}