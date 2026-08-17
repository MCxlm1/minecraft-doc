/**
 * 此管理器用于向维度添加、移除或查询临时 ticking 区域。这些 ticking 区域受每个包固定数量的 ticking 区块限制，与命令限制无关。无法修改或查询由其他包或命令添加的 ticking 区域。
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
     * 允许的 ticking 区块最大数量。重叠的 ticking 区域区块会计入总数。
     *
     */
    readonly maxChunkCount: number;
    /**
     * @remarks
     * 创建一个 ticking 区域。当该区域内的所有区块都已加载并开始 tick 时，Promise 将返回。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier ticking 区域的唯一标识符。
     * @param options ticking 区域的配置选项。
     * @returns 返回一个 Promise，在区域内的所有区块加载并开始 tick 时完成。
     * @throws 当创建 ticking 区域失败时抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    /**
     * @remarks
     * 获取此管理器添加的所有 ticking 区域。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 返回此管理器添加的所有 ticking 区域的数组。
     * @throws 当获取 ticking 区域时发生引擎错误，抛出 {@link minecraftcommon.EngineError}。
     */
    getAllTickingAreas(): TickingArea[];
    /**
     * @remarks
     * 尝试按标识符获取特定的 ticking 区域。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier ticking 区域的标识符或 {@link TickingArea} 对象。
     * @returns 返回找到的 {@link TickingArea}；若未找到则返回 undefined。
     * @throws 当获取 ticking 区域时发生引擎错误，抛出 {@link minecraftcommon.EngineError}。
     */
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    /**
     * @remarks
     * 如果管理器有足够的区块容量来容纳该 ticking 区域，则返回 true，否则返回 false。如果长度或宽度超过 255 区块限制，也会返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param options 用于计算所需容量的 ticking 区域配置。
     * @returns 若有足够容量且尺寸合法则返回 true，否则返回 false。
     */
    hasCapacity(options: TickingAreaOptions): boolean;
    /**
     * @remarks
     * 如果该标识符已存在于管理器中，则返回 true，否则返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier 要检查的 ticking 区域标识符。
     * @returns 若标识符已存在则返回 true，否则返回 false。
     */
    hasTickingArea(identifier: string): boolean;
    /**
     * @remarks
     * 移除该管理器添加的所有 ticking 区域。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 当移除 ticking 区域时发生引擎错误，抛出 {@link minecraftcommon.EngineError}。
     */
    removeAllTickingAreas(): void;
    /**
     * @remarks
     * 按唯一标识符移除特定的 ticking 区域。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier 要移除的 ticking 区域的标识符或 {@link TickingArea} 对象。
     * @throws 当移除 ticking 区域失败时抛出 {@link minecraftcommon.EngineError} 或 {@link TickingAreaError}。
     */
    removeTickingArea(identifier: string | TickingArea): void;
}