/**
 * 指定放置时结构应如何镜像。
 */
export enum StructureMirrorAxis {
    /**
     * @remarks
     * 无镜像。
     *
     */
    None = 'None',
    /**
     * @remarks
     * 结构沿X轴镜像。
     *
     */
    X = 'X',
    /**
     * @remarks
     * 结构沿X轴和Z轴镜像。
     *
     */
    XZ = 'XZ',
    /**
     * @remarks
     * 结构沿Z轴镜像。
     *
     */
    Z = 'Z',
}