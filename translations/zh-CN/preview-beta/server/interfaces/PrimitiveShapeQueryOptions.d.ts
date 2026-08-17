/**
 * @beta
 * 包含可选过滤器，用于控制从原始形状查询中返回哪些原始形状。
 */
export interface PrimitiveShapeQueryOptions {
    /**
     * @remarks
     * 如果指定，则仅返回附加到此实体的形状。
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * 向查询添加一个种子位置，该位置与距离属性一起使用。
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * 如果指定，则仅包含距离 location 属性中指定位置的距离小于此值的形状。
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * 如果指定，则仅包含距离 location 属性中指定位置的距离至少为此值的形状。
     *
     */
    minDistance?: number;
}