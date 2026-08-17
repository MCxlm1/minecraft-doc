/**
 * BlockVolume 是一个简单的接口对象，表示在世界方块位置上的一个给定大小（以方块计）的 3D 矩形。
 * 注意，这些值并不类似于“min”和“max”值，因为向量分量不保证按任何顺序排列。
 * 此外，这些向量位置不能与 BlockLocation 互换。
 * 如果你想将此体积表示为 BlockLocations 的范围，可以使用 getBoundingBox 实用函数。
 * 此体积类将保持初始设置的角标顺序。想象一下，每个角都在编辑器中被指定——当你移动角时（可能反转边界的最小/最大关系），你最初选择为左上角的角通常会变成右下角。
 * 手动编辑这类体积时，需要在编辑过程中保持角的标识——BlockVolume 实用函数可以做到这一点。
 *
 * 重要说明：此方法测量的是方块大小（to/from）——从 (0,0,0) 到 (0,0,0) 的正常 AABB 传统上大小为 (0,0,0)，
 * 但因为我们测量的是方块，所以 BlockVolume 的大小或跨度实际上是 (1,1,1)。
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
     * 表示 3D 矩形中相对角的世界方块位置。
     *
     */
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    /**
     * @remarks
     * 检查给定位置是否直接相邻于 BlockVolume 的外表面。
     *
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
     * 如果两个方块体积的外表面在任何点接触且直接相邻，则返回 true。
     */
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    /**
     * @remarks
     * 返回一个枚举，表示两个 BlockVolume 对象之间的交集。
     *
     * @param other
     * 要与之检测交集的另一个 BlockVolume 对象。
     * @returns
     * 表示两个 BlockVolume 之间交集类型的枚举值。
     */
    intersects(other: BlockVolume): BlockVolumeIntersection;
}