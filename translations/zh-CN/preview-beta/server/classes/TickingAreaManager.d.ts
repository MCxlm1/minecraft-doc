/**
 * 此管理器用于向维度添加、移除或查询临时常加载区域（ticking areas）。这些常加载区域受每个包固定数量的常加载区块限制，与命令限制无关。无法修改或查询由其他包或命令添加的常加载区域。
 */
export class TickingAreaManager {
    private constructor();
    /**
     * @remarks
     * 此管理器中当前正在常加载（ticking）的区块数量。
     *
     */
    readonly chunkCount: number;
    /**
     * @remarks
     * 允许的最大常加载区块数量。重叠的常加载区域区块会计入总数。
     *
     */
    readonly maxChunkCount: number;
    /**
     * @remarks
     * 创建一个常加载区域。当该区域中的所有区块加载并开始 tick 时，返回的 Promise 将会 resolve。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 用于标识此常加载区域的唯一字符串。
     * @param options - 定义常加载区域的位置、尺寸等选项。
     * @returns 此函数返回一个 Promise，当该区域的所有区块加载并开始 tick 时 resolve。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    /**
     * @remarks
     * 获取由该管理器添加的所有常加载区域。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 由该管理器添加的所有常加载区域数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getAllTickingAreas(): TickingArea[];
    /**
     * @remarks
     * 尝试根据标识符获取特定的常加载区域。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 常加载区域的唯一标识符，或常加载区域对象本身。
     * @returns 与标识符匹配的常加载区域；如果未找到，则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    /**
     * @remarks
     * 如果管理器有足够区块容量来创建该常加载区域，则返回 true；否则返回 false。如果长度或宽度超过 255 个区块的限制，也会返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param options - 用于定义常加载区域位置、尺寸等选项。
     * @returns 如果管理器有足够区块容量，则返回 true；否则返回 false。如果长度或宽度超过 255 个区块限制，也返回 false。
     */
    hasCapacity(options: TickingAreaOptions): boolean;
    /**
     * @remarks
     * 如果该标识符已存在于管理器中，则返回 true；否则返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 要检查的常加载区域标识符。
     * @returns 如果该标识符已存在，则返回 true；否则返回 false。
     */
    hasTickingArea(identifier: string): boolean;
    /**
     * @remarks
     * 移除由该管理器添加的所有常加载区域。
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
     * 根据唯一标识符移除特定的常加载区域。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier - 要移除的常加载区域的唯一标识符，或常加载区域对象本身。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    removeTickingArea(identifier: string | TickingArea): void;
}