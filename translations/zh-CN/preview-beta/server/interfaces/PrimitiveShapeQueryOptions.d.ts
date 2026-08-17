/**
 * @beta
 * 包含可选筛选条件，用于控制从基础形状查询中返回哪些基础形状。
 */
export interface PrimitiveShapeQueryOptions {
    /**
     * @remarks
     * 如果指定，则仅返回附加到该实体的形状。
     *
     */
    attachedTo?: Entity;
    /**
     * @remarks
     * 向查询添加一个种子位置，该位置与距离属性结合使用。
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * 如果指定，则仅包含距离 location 属性中指定位置小于此距离的形状。
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * 如果指定，则仅包含距离 location 属性中指定位置至少为此距离的形状。
     *
     */
    minDistance?: number;
}