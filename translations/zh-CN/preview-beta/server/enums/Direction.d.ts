/**
 * 一个通用的相对方向枚举。
 */
export enum Direction {
    /**
     * @remarks
     * 返回此物品下方（y - 1）的 {@link Block}。
     *
     */
    Down = 'Down',
    /**
     * @remarks
     * 返回此物品东侧（x + 1）的 {@link Block}。
     *
     */
    East = 'East',
    /**
     * @remarks
     * 返回此物品北侧（z - 1）的 {@link Block}。
     *
     */
    North = 'North',
    /**
     * @remarks
     * 返回此物品南侧（z + 1）的 {@link Block}。
     *
     */
    South = 'South',
    /**
     * @remarks
     * 返回此物品上方（y + 1）的 {@link Block}。
     *
     */
    Up = 'Up',
    /**
     * @remarks
     * 返回此物品西侧（x - 1）的 {@link Block}。
     *
     */
    West = 'West',
}