/**
 * 管理与玩家与实体交互之前相关联的回调。
 */
export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调会在玩家与实体交互之前被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void,
    ): (arg0: PlayerInteractWithEntityBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家与实体交互之前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): void;
}