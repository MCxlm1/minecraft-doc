/**
 * BlockVolume 是一个简单接口对象，表示世界方块位置处给定大小（以方块为单位）的 3D 矩形。
 * 请注意，这些值并不类似于 “min” 和 “max” 值，因为向量分量不保证按任何顺序排列。
 * 此外，这些向量位置不能与 BlockLocation 互换。
 * 如果你希望将此体积表示为 BlockLocation 的范围，可以使用 getBoundingBox 工具函数。
 * 该体积类会保持角索引的初始顺序。想象一下在编辑器中为每个角分配的位置——当你移动角时
 * （可能会反转边界的最小/最大关系）——你最初选择的左上角通常会变成右下角。
 * 在手动编辑此类体积时，你需要在编辑时保持角的身份——BlockVolume 工具函数会处理这一点。
 *
 * 需要注意，这里衡量的是方块大小（to/from）——普通 AABB (0,0,0) 到 (0,0,0) 传统上大小为 (0,0,0)。
 * 然而，由于我们测量的是方块，BlockVolume 的大小或跨度实际上为 (1,1,1)。
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * 世界方块位置，表示 3D 矩形中的一个角。
     *
     */
    'from': Vector3;
    /**
     * @remarks
     * 世界方块位置，表示 3D 矩形中相对的另一个角。
     *
     */
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    /**
     * @remarks
     * 检查给定位置是否直接与 BlockVolume 的外表面相邻。
     *
     *
     * @param pos
     * 要测试的世界方块位置。
     * @returns
     * 如果位置在内部或距离超过 0 个方块，则返回 false；
     * 如果位置直接接触 BlockVolume 的外表面，则返回 true。
     */
    doesLocationTouchFaces(pos: Vector3): boolean;
    /**
     * @remarks
     * 检查两个 BlockVolume 是否直接相邻且两个面接触。
     *
     * @param other
     * 要测试的体积。
     * @returns
     * 如果两个 BlockVolume 的外表面在任意点接触且直接相邻，则返回 true。
     */
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    /**
     * @remarks
     * 返回一个枚举，表示两个 BlockVolume 对象之间的交集。
     *
     * @returns
     * 两个 BlockVolume 对象的交集类型。
     */
    intersects(other: BlockVolume): BlockVolumeIntersection;
}