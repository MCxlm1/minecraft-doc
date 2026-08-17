/**
 * BlockVolume 是一个简单的接口对象，表示世界方块位置中一个给定大小（以方块为单位）的 3D 矩形。
 * 注意，这些不等同于“最小”和“最大”值，因为向量分量不保证按任何顺序排列。
 * 此外，这些向量位置不能与 BlockLocation 互换。
 * 如果你想将此体积表示为 BlockLocations 的范围，可以使用 getBoundingBox 实用函数。
 * 此体积类将保持最初设置的角索引顺序。想象一下，每个角都在编辑器中分配——当你移动角时（可能反转边界的最小/最大关系），
 * 你最初选择的顶部/左侧角传统上会变成底部/右侧。
 * 当手动编辑此类体积时，你需要在编辑时保持角的标识——BlockVolume 实用函数实现了这一点。
 *
 * 需要说明的是，它测量的是方块大小（从/到）——通常的 AABB (0,0,0) 到 (0,0,0) 大小会是 (0,0,0)，
 * 但由于我们测量的是方块，BlockVolume 的大小或跨度实际上是 (1,1,1)。
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * 表示 3D 矩形中一个角的世界方块位置。
     *
     */
    'from': Vector3;
    /**
     * @remarks
     * 表示 3D 矩形中另一个相对角的世界方块位置。
     *
     */
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    /**
     * @remarks
     * 检查给定的位置是否直接与 BlockVolume 的外表面相邻。
     *
     *
     * @param pos
     * 要测试的世界方块位置。
     * @returns
     * 如果该位置在内部或距离超过 0 个方块，则函数返回 false。
     * 如果该位置直接接触 BlockVolume 的外表面，则函数返回 true。
     */
    doesLocationTouchFaces(pos: Vector3): boolean;
    /**
     * @remarks
     * 检查两个方块体积是否直接相邻且两个面接触。
     *
     * @param other
     * 要测试的体积。
     * @returns
     * 如果两个方块体积的外表面在任何点接触并直接相邻，则返回 true。
     */
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    /**
     * @remarks
     * 返回一个枚举，表示两个 BlockVolume 对象之间的交集。
     *
     * @returns
     * 表示两个 BlockVolume 对象之间交集的枚举。
     *
     */
    intersects(other: BlockVolume): BlockVolumeIntersection;
}