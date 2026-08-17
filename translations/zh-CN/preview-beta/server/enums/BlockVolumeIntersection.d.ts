/**
 * 对两个 BlockVolume 对象进行相交测试的结果描述
 */
export enum BlockVolumeIntersection {
    /**
     * @remarks
     * 体积 B 与体积 A 没有交点
     *
     */
    Disjoint = 0,
    /**
     * @remarks
     * 体积 B 完全包含在体积 A 内部
     *
     */
    Contains = 1,
    /**
     * @remarks
     * 体积 B 与体积 A 部分相交
     *
     */
    Intersects = 2,
}