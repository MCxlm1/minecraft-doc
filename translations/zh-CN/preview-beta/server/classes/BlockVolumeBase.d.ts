/**
 * 方块体积的基类型。
 */
export class BlockVolumeBase {
    private constructor();
    /**
     * @remarks
     * 获取一个 {@link BlockLocationIterator}，表示指定体积内的所有方块世界位置。
     *
     * @returns
     * 一个用于遍历该体积中所有方块世界位置的 {@link BlockLocationIterator}。
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @beta
     * @remarks
     * 返回一个 {@link BlockBoundingBox} 对象，表示该体积经过校验的最小和最大坐标。
     *
     * @returns
     * 表示该体积最小和最大坐标的 {@link BlockBoundingBox}。
     *
     * @throws
     * 此函数可能抛出错误。
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks
     * 返回 BlockVolume 的容量（体积），即 W*D*H。
     *
     * @returns
     * 该体积的容量（长×宽×高）。
     *
     */
    getCapacity(): number;
    /**
     * @beta
     * @remarks
     * 返回体积内距离给定位置最近的方块位置列表，按距离排序（最近的在前）。
     *
     * @param count
     * 要返回的最近位置的数量。
     * @param location
     * 用于测量距离的位置。
     * @returns
     * 按距离升序排列的方块位置数组，包含距离 `location` 最近的 `count` 个位置。
     * @throws
     * 当 `count` 超出有效范围时抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getClosest(count: number, location: Vector3): Vector3[];
    /**
     * @beta
     * @remarks
     * 返回体积内距离给定位置最远的方块位置列表，按距离排序（最远的在前）。
     *
     * @param count
     * 要返回的最远位置的数量。
     * @param location
     * 用于测量距离的位置。
     * @returns
     * 按距离降序排列的方块位置数组，包含距离 `location` 最远的 `count` 个位置。
     * @throws
     * 当 `count` 超出有效范围时抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getFarthest(count: number, location: Vector3): Vector3[];
    /**
     * @remarks
     * 获取该体积的最大角位置（保证 >= min）。
     *
     * @returns
     * 表示最大角位置的 {@link Vector3}。
     *
     * @throws
     * 此函数可能抛出错误。
     */
    getMax(): Vector3;
    /**
     * @remarks
     * 获取该体积的最小角位置（保证 <= max）。
     *
     * @returns
     * 表示最小角位置的 {@link Vector3}。
     *
     * @throws
     * 此函数可能抛出错误。
     */
    getMin(): Vector3;
    /**
     * @remarks
     * 获取一个 {@link Vector3} 对象，其中每个分量表示沿该轴的方块数量。
     *
     * @returns
     * 一个 {@link Vector3} 对象，其分量分别表示沿 X、Y、Z 轴的方块数量。
     *
     */
    getSpan(): Vector3;
    /**
     * @remarks
     * 检查给定的世界方块位置是否位于 BlockVolume 内。
     *
     * @param location
     * 要检查的世界方块位置。
     * @returns
     * 如果该位置位于体积内，则返回 `true`；否则返回 `false`。
     *
     */
    isInside(location: Vector3): boolean;
    /**
     * @remarks
     * 将 BlockVolume 移动指定数量。
     *
     * @param delta
     * 要移动的方块数量。
     */
    translate(delta: Vector3): void;
}