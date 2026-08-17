/**
 * 用于向世界添加和移除文本基元的原始形状类。
 */
export class PrimitiveShapesManager {
    private constructor();
    /**
     * @remarks
     * 这是允许的最大原始形状数量。
     *
     */
    readonly maxShapes: number;
    /**
     * @remarks
     * 向世界添加一个新的文本基元。
     *
     * @param text
     * 要添加的文本基元。
     * @param dimension
     * 可选的目标维度。如果未指定，则默认使用当前维度。
     * @throws 该函数可能会抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link PrimitiveShapeError}
     */
    addText(text: TextPrimitive, dimension?: Dimension): void;
    /**
     * @beta
     * @remarks
     * 获取并查询管理器中存储的所有原始形状，并以形状句柄数组的形式返回结果。
     *
     * @param options
     * 用于查询现有形状的可选选项，以缩小结果范围。
     * @returns 返回一个形状句柄数组，其中包含所有匹配的原始形状。
     */
    getShapes(options?: PrimitiveShapeQueryOptions): PrimitiveShape[];
    /**
     * @remarks
     * 从世界中移除所有文本基元。
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * 从世界中移除一个文本基元实例。这等同于在文本本身上调用remove。
     *
     * @param text
     * 要移除的文本基元实例。
     */
    removeText(text: TextPrimitive): void;
}