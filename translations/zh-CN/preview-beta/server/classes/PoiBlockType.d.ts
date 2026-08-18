/**
 * @beta
 * 描述一个方块兴趣点（POI）类型。
 *
 * 所需实验：
 * - Poi
 *
 */
export class PoiBlockType {
    private constructor();
    /**
     * @remarks
     * 此POI类型的数字标识符。
     *
     */
    readonly id: number;
    /**
     * @remarks
     * 此POI类型的命名空间标识符。
     *
     */
    readonly name: string;
    /**
     * @remarks
     * 可从此类型的每个POI实例领取的票券最大数量。
     *
     */
    readonly tickets: number;
    /**
     * @remarks
     * 该POI类型被视为可用的最大范围（以方块为单位）。
     *
     */
    readonly usableRange: number;
    /**
     * @remarks
     * 测试此对象与另一个对象是否描述相同的POI类型。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param other
     * 要与此类型进行比较的POI类型。
     * @returns
     * 如果两个对象描述相同的POI类型，则返回 true；否则返回 false。
     */
    equals(other: PoiBlockType): boolean;
    /**
     * @remarks
     * 测试该类型是否具有提供的标签属性。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param tag
     * 要检查的POI标签。
     * @returns
     * 如果POI包含该标签，则返回 true；否则返回 false。
     */
    has(tag: string): boolean;
}