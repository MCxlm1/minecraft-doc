/**
 * 原始形状类，用于向世界添加和移除文本原始形状。
 */
export class PrimitiveShapesManager {
    private constructor();
    /**
     * @remarks
     * 允许的原始形状的最大数量。
     *
     */
    readonly maxShapes: number;
    /**
     * @remarks
     * 向世界添加一个新的文本原始形状。
     *
     * @param text
     * 要添加的文本原始形状。
     * @param dimension
     * 可选维度，指定文本原始形状所在的维度。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 底层引擎发生错误时抛出。
     *
     * {@link PrimitiveShapeError} - 当文本原始形状无效或数量超过上限时抛出。
     */
    addText(text: TextPrimitive, dimension?: Dimension): void;
    /**
     * @beta
     * @remarks
     * 获取并查询管理器中的所有原始形状，并将结果作为形状句柄数组返回。
     *
     * @param options
     * 可选的查询选项，用于缩小结果范围。
     * @returns
     * 所有匹配的原始形状句柄数组。
     */
    getShapes(options?: PrimitiveShapeQueryOptions): PrimitiveShape[];
    /**
     * @remarks
     * 从世界中移除所有文本原始形状。
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * 从世界中移除一个文本原始形状实例。这等效于在文本本身调用 remove。
     *
     * @param text
     * 要移除的文本原始形状。
     */
    removeText(text: TextPrimitive): void;
}