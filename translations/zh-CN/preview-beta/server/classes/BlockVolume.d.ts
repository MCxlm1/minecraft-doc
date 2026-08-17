/**
 * BlockVolume 是一个简单接口，表示世界方块位置处一个给定大小（以方块为单位）的 3D 矩形。
 * 请注意，这些向量并不等同于“min”和“max”值，向量分量的顺序不保证。
 * 此外，这些向量位置不能与 BlockLocation 互换。
 * 如果你希望将此体积表示为 BlockLocation 的范围，可以使用 getBoundingBox 工具函数。
 * 该体积类会保持角索引的初始排序。想象在编辑器中每个角被指定 - 当你移动角时（可能反转边界的 min/max 关系），
 * 你最初选择的顶部/左侧角通常会变成底部/右侧。
 * 当手动编辑此类体积时，你需要在编辑过程中保持角的身份不变 - BlockVolume 工具函数会处理这一点。
 *
 * 重点注意，它测量的是方块大小（从/到） - 通常的 AABB (0,0,0) 到 (0,0,0) 大小为 (0,0,0)，
 * 然而，因为我们测量的是方块 - BlockVolume 的大小或跨度实际上是 (1,1,1)。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * 一个世界方块位置，代表 3D 矩形中的一个角。
     */
    'from': Vector3;
    /**
     * @remarks
     * 一个世界方块位置，代表 3D 矩形中的对角。
     */
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    /**
     * @remarks
     * 检查给定位置是否直接与 BlockVolume 的外表面相邻。
     *
     * @param pos
     * 要测试的世界方块位置
     * @returns
     * 如果位置在内部或距离超过 0 个方块，则返回 false。
     * 如果位置直接接触 BlockVolume 的外表面，则返回 true。
     */
    doesLocationTouchFaces(pos: Vector3): boolean;
    /**
     * @remarks
     * 检查两个方块体积是否直接相邻且两个面接触。
     *
     * @param other
     * 要测试的体积
     * @returns
     * 如果两个方块体积的外表面在任何点接触并且直接相邻，则返回 true。
     */
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    /**
     * @remarks
     * 返回一个枚举，表示两个 BlockVolume 对象之间的交集。
     */
    intersects(other: BlockVolume): BlockVolumeIntersection;
}