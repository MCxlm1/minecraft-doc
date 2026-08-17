/**
 * BlockVolume 的基础类型。
 */
export class BlockVolumeBase {
    private constructor();
    /**
     * @remarks
     * 获取一个 {@link BlockLocationIterator}，它表示指定体积内的所有方块世界位置。
     *
     * @returns 返回一个 {@link BlockLocationIterator}，用于遍历该体积内的所有方块位置。
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @beta
     * @remarks
     * 返回一个 {@link BlockBoundingBox} 对象，表示体积的已验证最小和最大坐标。
     *
     * @returns 返回一个 {@link BlockBoundingBox} 对象，包含验证后的最小和最大坐标。
     * @throws 此函数可能抛出错误。
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 返回 BlockVolume 的容量（体积），即宽×深×高（W*D*H）。
     *
     * @returns 返回该 BlockVolume 的容量（体积），即宽×深×高（W*D*H）。
     */
    getCapacity(): number;
    /**
     * @beta
     * @remarks
     * 返回体积内距离给定位置最近的方块位置列表，按距离排序（最近的优先）。
     *
     * @param count 要返回的最近位置数量
     * @param location 用于测量距离的位置
     * @returns 返回体积内距离给定位置最近的方块位置列表，按距离排序（最近的优先）。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getClosest(count: number, location: Vector3): Vector3[];
    /**
     * @beta
     * @remarks
     * 返回体积内距离给定位置最远的方块位置列表，按距离排序（最远的优先）。
     *
     * @param count 要返回的最远位置数量
     * @param location 用于测量距离的位置
     * @returns 返回体积内距离给定位置最远的方块位置列表，按距离排序（最远的优先）。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getFarthest(count: number, location: Vector3): Vector3[];
    /**
     * @remarks
     * 获取体积的最大角位置（保证大于或等于最小值）。
     *
     * @returns 返回体积的最大角位置。
     * @throws 此函数可能抛出错误。
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取体积的最小角位置（保证小于或等于最大值）。
     *
     * @returns 返回体积的最小角位置。
     * @throws 此函数可能抛出错误。
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取一个 {@link Vector3} 对象，其中每个分量表示沿该轴的方块数量。
     *
     * @returns 返回一个 {@link Vector3} 对象，表示沿各轴的方块数量。
     */
    getSpan(): Vector3;
    /**
     * @remarks
     * 检查给定的世界方块位置是否在 BlockVolume 内。
     *
     * @param location 要检查的世界方块位置
     * @returns 如果该位置在 BlockVolume 内则返回 true，否则返回 false。
     */
    isInside(location: Vector3): boolean;
    /**
     * @remarks
     * 将 BlockVolume 移动指定的量。
     *
     * @param delta 要移动的方块数量
     */
    translate(delta: Vector3): void;
}