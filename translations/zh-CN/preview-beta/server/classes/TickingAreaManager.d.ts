/**
 * 此管理器用于向维度添加、移除或查询临时 ticking 区域。这些 ticking 区域受每个包固定数量 tick 区块的限制，与命令限制无关。不能修改或查询由其他包或命令添加的 ticking 区域。
 */
export class TickingAreaManager {
    private constructor();
    /**
     * @remarks
     * 此管理器中当前 tick 的区块数量。
     *
     */
    readonly chunkCount: number;
    /**
     * @remarks
     * 允许的 tick 区块最大数量。重叠的 ticking 区域区块会计入总数。
     *
     */
    readonly maxChunkCount: number;
    /**
     * @remarks
     * 创建一个 ticking 区域。当区域内的所有区块都加载并开始 tick 时，Promise 将返回。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param identifier - 要创建的 ticking 区域的标识符。
     * @param options - 定义 ticking 区域位置和大小的选项。
     * @returns 当所有区块已加载并开始 tick 时解析的 Promise。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    /**
     * @remarks
     * 获取由此管理器添加的所有 ticking 区域。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @returns 由此管理器添加的 ticking 区域数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getAllTickingAreas(): TickingArea[];
    /**
     * @remarks
     * 尝试根据标识符获取特定的 ticking 区域。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param identifier - 要获取的 ticking 区域的标识符，或 TickingArea 对象。
     * @returns 如果找到则返回对应的 TickingArea，否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    /**
     * @remarks
     * 如果管理器有足够的区块容量来容纳该 ticking 区域，则返回 true，否则返回 false。如果长度或宽度超过 255 个区块的限制，也会返回 false。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param options - 定义 ticking 区域位置和大小的选项。
     * @returns 如果管理器有足够容量则返回 true，否则返回 false。
     */
    hasCapacity(options: TickingAreaOptions): boolean;
    /**
     * @remarks
     * 如果该标识符已在管理器中，则返回 true，否则返回 false。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param identifier - 要检查的 ticking 区域标识符。
     * @returns 如果标识符已存在则返回 true，否则返回 false。
     */
    hasTickingArea(identifier: string): boolean;
    /**
     * @remarks
     * 移除由此管理器添加的所有 ticking 区域。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    removeAllTickingAreas(): void;
    /**
     * @remarks
     * 根据唯一标识符移除特定的 ticking 区域。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param identifier - 要移除的 ticking 区域的标识符，或 TickingArea 对象。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    removeTickingArea(identifier: string | TickingArea): void;
}