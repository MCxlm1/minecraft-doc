/**
 * @beta
 * 包含可选过滤器，用于控制从原始形状查询中返回哪些原始形状。
 */
export interface PrimitiveShapeQueryOptions {
    /**
     * @remarks
     * 如果指定，仅返回附加到此实体的形状。
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * 为查询添加一个种子位置，用于与距离属性配合使用。
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * 如果指定，仅包含距离由 location 属性指定的位置小于此值的形状。
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * 如果指定，仅包含距离由 location 属性指定的位置至少为此值的形状。
     *
     */
    minDistance?: number;
}