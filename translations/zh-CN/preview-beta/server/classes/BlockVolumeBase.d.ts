/**
 * BlockVolume 的基类型。
 */
export class BlockVolumeBase {
    private constructor();
    /**
     * @remarks
     * 获取一个 {@link BlockLocationIterator}，它表示指定体积内的所有方块世界位置。
     *
     * @returns 用于遍历体积内所有方块位置的 {@link BlockLocationIterator} 对象。
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @beta
     * @remarks
     * 返回一个 {@link BlockBoundingBox} 对象，表示该体积经过验证的最小和最大坐标。
     *
     * @returns 表示体积边界框的 {@link BlockBoundingBox} 对象。
     * @throws 此函数可能抛出错误。
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 返回 BlockVolume 的容量（体积），即宽×深×高。
     *
     * @returns 表示该体积容量的数值。
     */
    getCapacity(): number;
    /**
     * @beta
     * @remarks
     * 返回体积内距离给定位置最近的一组方块位置，按距离排序（最近的在前）。
     *
     * @param count 要返回的最近位置数量
     * @param location 用于测量距离的位置
     * @returns 按距离从近到远排序的方块位置列表。
     * @throws 当 count 超出有效范围时抛出 {@link minecraftcommon.ArgumentOutOfBoundsError}。
     */
    getClosest(count: number, location: Vector3): Vector3[];
    /**
     * @beta
     * @remarks
     * 返回体积内距离给定位置最远的一组方块位置，按距离排序（最远的在前）。
     *
     * @param count 要返回的最远位置数量
     * @param location 用于测量距离的位置
     * @returns 按距离从远到近排序的方块位置列表。
     * @throws 当 count 超出有效范围时抛出 {@link minecraftcommon.ArgumentOutOfBoundsError}。
     */
    getFarthest(count: number, location: Vector3): Vector3[];
    /**
     * @remarks
     * 获取该体积的最大角落位置（保证大于等于最小值）。
     *
     * @returns 最大角落位置的 {@link Vector3} 对象。
     * @throws 此函数可能抛出错误。
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取该体积的最小角落位置（保证小于等于最大值）。
     *
     * @returns 最小角落位置的 {@link Vector3} 对象。
     * @throws 此函数可能抛出错误。
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取一个 {@link Vector3} 对象，其中每个分量表示该轴方向上的方块数量。
     *
     * @returns 表示体积在各轴方向上方块数量的 {@link Vector3} 对象。
     */
    getSpan(): Vector3;
    /**
     * @remarks
     * 检查给定的世界方块位置是否位于 BlockVolume 内。
     *
     * @param location 要检查的世界方块位置
     * @returns 如果位置在体积内则返回 true，否则返回 false。
     */
    isInside(location: Vector3): boolean;
    /**
     * @remarks
     * 将 BlockVolume 按指定量移动。
     *
     * @param delta 移动的方块数量
     */
    translate(delta: Vector3): void;
}