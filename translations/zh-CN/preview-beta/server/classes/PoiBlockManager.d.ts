/**
 * @beta
 * 提供用于查询和管理维度中基于方块的兴趣点的方法。
 *
 * 所需实验：
 * - Poi
 *
 */
export class PoiBlockManager {
    private constructor();
    /**
     * @remarks
     * 在指定位置添加一个方块兴趣点。此方法用于临时用途，将在区块重新加载时被替换。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param position
     * 要添加 POI 的方块位置。
     * @param poi
     * 要添加的 POI 类型，可通过数字类型 ID、类型名称或 POI 类型对象指定。
     */
    addTemporary(position: Vector3, poi: PoiBlockType | string | number): void;
    /**
     * @remarks
     * 获取某个位置上方块兴趣点的类型。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param position
     * 要检查的方块位置。
     * @returns
     * 该位置的 POI 类型；如果该位置不存在 POI，则返回 undefined。
     */
    at(position: Vector3): PoiBlockType | undefined;
    /**
     * @remarks
     * 测试某个位置上方块兴趣点是否与类型过滤器匹配。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param position
     * 要检查的方块位置。
     * @param filter
     * 用于选择 POI 类型的过滤器。回调函数接收 POI 类型并返回是否匹配；名称过滤器匹配类型名称；标签过滤器要求满足所有指定标签。
     * @returns
     * 如果该位置存在 POI 且其类型与过滤器匹配，则返回 true；否则返回 false。
     */
    exists(position: Vector3, filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter): boolean;
    /**
     * @remarks
     * 返回指定位置指定距离内与所提供的类型和占用状态过滤器匹配的方块兴趣点。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param filter
     * 用于选择 POI 类型的过滤器。回调函数接收每个 POI 类型并返回是否应包含；名称过滤器匹配类型名称；标签过滤器要求满足所有指定标签。
     * @param center
     * 搜索中心。
     * @param blockRadius
     * 距中心的最大三维距离，以方块为单位。
     * @param occupancyFilter
     * 可选的占用状态过滤器，应用于匹配的 POI。如果省略，则返回任何占用状态的 POI。
     * @returns
     * 范围内匹配的 POI 实例。结果顺序不保证。
     */
    getInRange(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
        occupancyFilter?: PoiBlockOccupancyFilter,
    ): PoiBlockInstance[];
    /**
     * @remarks
     * 返回与所提供的类型和占用状态过滤器匹配的方块兴趣点，这些兴趣点位于以指定位置为中心的轴对齐正方形内，并按从近到远排序。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param filter
     * 用于选择 POI 类型的过滤器。回调函数接收每个 POI 类型并返回是否应包含；名称过滤器匹配类型名称；标签过滤器要求满足所有指定标签。
     * @param center
     * 搜索中心以及计算距离的位置。
     * @param blockRadius
     * 距中心的最大三维距离，以方块为单位。
     * @param occupancyFilter
     * 可选的占用状态过滤器，应用于匹配的 POI。如果省略，则返回任何占用状态的 POI。
     * @returns
     * 匹配的 POI 实例及其与中心的平方距离，按距离升序排序。
     */
    getInRangeSorted(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
        occupancyFilter?: PoiBlockOccupancyFilter,
    ): PoiDistancePair[];
    /**
     * @remarks
     * 返回与所提供的类型和占用状态过滤器匹配的方块兴趣点，这些兴趣点位于以指定位置为中心的轴对齐正方形内。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param filter
     * 用于选择 POI 类型的过滤器。回调函数接收每个 POI 类型并返回是否应包含；名称过滤器匹配类型名称；标签过滤器要求满足所有指定标签。
     * @param center
     * 搜索体积的中心。
     * @param blockRadius
     * 搜索体积沿每个轴的一半尺寸，以方块为单位。
     * @param occupancyFilter
     * 可选的占用状态过滤器，应用于匹配的 POI。如果省略，则返回任何占用状态的 POI。
     * @returns
     * 搜索体积内匹配的 POI 实例。
     */
    getInSquare(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
        occupancyFilter?: PoiBlockOccupancyFilter,
    ): PoiBlockInstance[];
    /**
     * @remarks
     * 释放一个方块兴趣点上一个先前领取的票证。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param center
     * 要释放其票证的 POI 的方块位置。
     * @returns
     * 如果释放了票证，则返回 true；如果该位置不存在 POI 或该 POI 没有已领取的票证，则返回 false。
     */
    release(center: Vector3): boolean;
    /**
     * @remarks
     * 从范围内匹配的方块兴趣点中领取一个可用票证。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param filter
     * 用于选择要领取的 POI 类型的过滤器。回调函数接收每个 POI 类型并返回是否应包含；名称过滤器匹配类型名称；标签过滤器要求满足所有指定标签。
     * @param center
     * 搜索中心。
     * @param blockRadius
     * 距中心的最大三维距离，以方块为单位。
     * @returns
     * 被领取的 POI 的方块位置；如果没有匹配的 POI 有可用票证，则返回 undefined。
     */
    take(
        filter: ((arg0: PoiBlockType) => boolean) | PoiNameFilter | PoiTagFilter,
        center: Vector3,
        blockRadius: number,
    ): Vector3 | undefined;
}