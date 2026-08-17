/**
 * 两个BlockVolume对象相交测试结果的描述
 */
export enum BlockVolumeIntersection {
    /**
     * @remarks
     * 体积B与体积A没有交点
     *
     */
    Disjoint = 0,
    /**
     * @remarks
     * 体积B完全位于体积A内部
     *
     */
    Contains = 1,
    /**
     * @remarks
     * 体积B部分与体积A相交
     *
     */
    Intersects = 2,
}