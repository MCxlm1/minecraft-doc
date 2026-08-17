/**
 * 此管理器用于向维度添加、移除或查询临时常驻区域。
 * 这些常驻区域受每个包固定数量的常驻区块限制，与命令限制无关。
 * 无法修改或查询由其他包或命令添加的常驻区域。
 */
export class TickingAreaManager {
    private constructor();
    /**
     * @remarks
     * 此管理器当前常驻区块的数量。
     *
     */
    readonly chunkCount: number;
    /**
     * @remarks
     * 允许的最大常驻区块数量。重叠的常驻区域区块会计入总数。
     *
     */
    readonly maxChunkCount: number;
    /**
     * @remarks
     * 创建一个常驻区域。当该区域中的所有区块均已加载并开始常驻时，Promise 将返回。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier 常驻区域的标识符。
     * @param options 常驻区域选项。
     * @returns 一个 Promise，在所有区块加载并常驻后解析。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    /**
     * @remarks
     * 获取此管理器添加的所有常驻区域。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 所有常驻区域的数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getAllTickingAreas(): TickingArea[];
    /**
     * @remarks
     * 尝试通过标识符获取特定的常驻区域。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier 常驻区域的标识符或常驻区域对象。
     * @returns 如果找到则返回常驻区域，否则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    /**
     * @remarks
     * 如果管理器有足够的区块容量来容纳常驻区域，则返回 true，否则返回 false。
     * 如果长度或宽度超过 255 区块限制，也将返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param options 常驻区域选项。
     * @returns 如果容量足够且参数有效则返回 true，否则返回 false。
     */
    hasCapacity(options: TickingAreaOptions): boolean;
    /**
     * @remarks
     * 如果标识符已存在于管理器中，则返回 true，否则返回 false。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier 要检查的标识符。
     * @returns 如果标识符已存在则返回 true，否则返回 false。
     */
    hasTickingArea(identifier: string): boolean;
    /**
     * @remarks
     * 移除此管理器添加的所有常驻区域。
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
     * 通过唯一标识符移除特定的常驻区域。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier 常驻区域的标识符或常驻区域对象。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    removeTickingArea(identifier: string | TickingArea): void;
}