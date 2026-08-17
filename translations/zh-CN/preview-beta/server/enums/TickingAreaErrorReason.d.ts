/**
 * 抛出 {@link
 * @minecraft/server.TickingAreaError} 的原因。
 */
export enum TickingAreaErrorReason {
    /**
     * @remarks
     * 添加了一个标识符已存在的常加载区域。
     *
     */
    IdentifierAlreadyExists = 'IdentifierAlreadyExists',
    /**
     * @remarks
     * 添加此常加载区域导致常加载区域数量超过 {@link TickingAreaManager.maxChunkCount} 指定的限制。
     *
     */
    OverChunkLimit = 'OverChunkLimit',
    /**
     * @remarks
     * 常加载区域的长度或宽度超过了 255 个区块的限制。
     *
     */
    SideLengthExceeded = 'SideLengthExceeded',
    /**
     * @remarks
     * 尝试删除标识符未在 {@link TickingAreaManager} 中注册的常加载区域。
     *
     */
    UnknownIdentifier = 'UnknownIdentifier',
}