/**
 * 抛出 {@link @minecraft/server.TickingAreaError} 的原因。
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
     * 添加此常加载区域导致其数量超过了 {@link TickingAreaManager.maxChunkCount} 指定的上限。
     *
     */
    OverChunkLimit = 'OverChunkLimit',
    /**
     * @remarks
     * 常加载区域的长或宽超过了 255 个区块的限制。
     *
     */
    SideLengthExceeded = 'SideLengthExceeded',
    /**
     * @remarks
     * 尝试移除的常加载区域标识符未在 {@link TickingAreaManager} 中注册。
     *
     */
    UnknownIdentifier = 'UnknownIdentifier',
}