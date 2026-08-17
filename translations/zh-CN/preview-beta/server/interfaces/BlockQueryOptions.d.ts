/**
 * @beta
 * 用于在体积内查询方块时使用的选项。继承自 BlockFilter，并增加了基于与某个位置距离的额外排序和限制选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockQueryOptions extends BlockFilter {
    /**
     * @remarks
     * 如果指定，则返回距离该位置最近的 N 个方块。必须大于 0。不能与 farthest 同时使用。需要设置 location。
     *
     */
    closest?: number;
    /**
     * @remarks
     * 如果指定，则返回距离该位置最远的 N 个方块。必须大于 0。不能与 closest 同时使用。需要设置 location。
     *
     */
    farthest?: number;
    /**
     * @remarks
     * 用作 closest 或 farthest 距离计算参考点的位置。当指定 closest 或 farthest 时必须设置。
     *
     */
    location?: Vector3;
}