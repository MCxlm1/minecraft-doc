/**
 * @beta
 * 在体积内查询方块的选项。扩展 BlockFilter，
 * 增加了基于距离位置的排序和限制选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockQueryOptions extends BlockFilter {
    /**
     * @remarks
     * 如果指定，则返回距离该位置最近的 N 个方块。
     * 必须大于 0。不能与 farthest 同时使用。
     * 需要设置 location。
     *
     */
    closest?: number;
    /**
     * @remarks
     * 如果指定，则返回距离该位置最远的 N 个方块。
     * 必须大于 0。不能与 closest 同时使用。
     * 需要设置 location。
     *
     */
    farthest?: number;
    /**
     * @remarks
     * 用作 closest 或 farthest 距离计算的参考点位置。
     * 当指定了 closest 或 farthest 时需要设置。
     *
     */
    location?: Vector3;
}