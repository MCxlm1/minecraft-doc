/**
 * 基本形状类，用于向世界添加和移除文本原语。
 */
export class PrimitiveShapesManager {
    private constructor();
    /**
     * @remarks
     * 允许的最大原始形状数量。
     *
     */
    readonly maxShapes: number;
    /**
     * @remarks
     * 向世界添加一个新的文本原语。
     *
     * @param text
     * 要添加的文本原语。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link PrimitiveShapeError}
     */
    addText(text: TextPrimitive, dimension?: Dimension): void;
    /**
     * @beta
     * @remarks
     * 获取并查询管理器中存储的所有原始形状，并将结果作为形状句柄数组返回。
     *
     * @param options
     * 用于查询现有形状的选项，可以缩小结果范围。
     */
    getShapes(options?: PrimitiveShapeQueryOptions): PrimitiveShape[];
    /**
     * @remarks
     * 从世界中移除所有文本原语。
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * 从世界中移除一个文本原语实例。这相当于在文本本身上调用移除。
     *
     */
    removeText(text: TextPrimitive): void;
}