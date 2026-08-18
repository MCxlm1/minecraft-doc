/**
 * @beta
 * 指定方块兴趣点查询如何根据票券占用情况筛选实例。
 */
export enum PoiBlockOccupancyFilter {
    /**
     * @remarks
     * 包含所有 POI 实例，无论其占用情况或可用票券数量如何。
     *
     */
    Any = 'Any',
    /**
     * @remarks
     * 包含没有可用票券的 POI 实例。
     *
     */
    Full = 'Full',
    /**
     * @remarks
     * 包含至少有一个票券可供领取的 POI 实例。
     *
     */
    HasVacancy = 'HasVacancy',
}