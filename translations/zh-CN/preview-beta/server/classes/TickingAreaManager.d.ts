/**
 * 此管理器用于向维度添加、移除或查询临时 ticking area。这些 ticking area 受限于每个包固定的区块数量，独立于命令的限制。无法修改或查询由其他包或命令添加的 ticking area。
 */
export class TickingAreaManager {
    private constructor();
    /**
     * @remarks
     * 此管理器中当前正在 tick 的区块数量。
     *
     */
    readonly chunkCount: number;
    /**
     * @remarks
     * 允许的最大 tick 区块数量。重叠的 ticking area 区块也会计入总数。
     *
     */
    readonly maxChunkCount: number;
    /**
     * @remarks
     * 创建一个 ticking area。当区域中所有区块加载并开始 tick 时，Promise 将完成。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 要创建的 ticking area 的标识符。
     * @param options - 用于定义 ticking area 的选项。
     * @returns 返回一个 Promise，当区域所有区块加载并开始 tick 时完成。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    /**
     * @remarks
     * 获取此管理器添加的所有 ticking area。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回一个包含所有 ticking area 的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getAllTickingAreas(): TickingArea[];
    /**
     * @remarks
     * 尝试通过标识符获取特定的 ticking area。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 要查找的 ticking area 的标识符或 TickingArea 对象。
     * @returns 返回找到的 ticking area，如果未找到则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    /**
     * @remarks
     * 如果管理器有足够的区块容量来容纳该 ticking area，则返回 true；否则返回 false。如果长度或宽度超过 255 个区块限制，也会返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param options - 用于定义 ticking area 的选项。
     * @returns 如果有足够容量则返回 true，否则返回 false。
     */
    hasCapacity(options: TickingAreaOptions): boolean;
    /**
     * @remarks
     * 如果标识符已存在于管理器中则返回 true，否则返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 要检查的标识符。
     * @returns 如果标识符已存在则返回 true，否则返回 false。
     */
    hasTickingArea(identifier: string): boolean;
    /**
     * @remarks
     * 移除此管理器添加的所有 ticking area。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    removeAllTickingAreas(): void;
    /**
     * @remarks
     * 通过唯一标识符移除特定的 ticking area。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 要移除的 ticking area 的标识符或 TickingArea 对象。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    removeTickingArea(identifier: string | TickingArea): void;
}