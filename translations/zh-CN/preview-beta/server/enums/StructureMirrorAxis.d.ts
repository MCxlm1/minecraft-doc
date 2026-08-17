/**
 * 指定放置结构时应如何进行镜像。
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
     * 结构沿 X 轴镜像。
     *
     */
    X = 'X',
    /**
     * @remarks
     * 结构沿 X 轴和 Z 轴镜像。
     *
     */
    XZ = 'XZ',
    /**
     * @remarks
     * 结构沿 Z 轴镜像。
     *
     */
    Z = 'Z',
}