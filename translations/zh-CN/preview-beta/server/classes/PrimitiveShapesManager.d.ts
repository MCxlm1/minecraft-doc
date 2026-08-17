/**
 * 原始形状类，用于向世界添加和移除文本图元。
 */
export class PrimitiveShapesManager {
    private constructor();
    /**
     * @remarks
     * 这是允许的图元形状的最大数量。
     *
     */
    readonly maxShapes: number;
    /**
     * @remarks
     * 向世界添加新的文本图元。
     *
     * @param text
     * 要添加的文本图元。
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
     * 获取并查询管理器存储的所有图元形状，并将结果作为形状句柄数组返回。
     *
     * @param options
     * 可选参数，用于查询现有形状以缩小结果范围。
     * @returns
     * 返回形状句柄数组。
     */
    getShapes(options?: PrimitiveShapeQueryOptions): PrimitiveShape[];
    /**
     * @remarks
     * 从世界中移除所有文本图元。
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * 从世界中移除文本图元的实例。这相当于对文本本身调用 remove。
     *
     * @param text
     * 要移除的文本图元实例。
     */
    removeText(text: TextPrimitive): void;
}