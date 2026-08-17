/**
 * 一个通用的相对方向枚举。
 */
export enum Direction {
    /**
     * @remarks
     * 返回此物品下方（y-1）的方块。
     *
     */
    Down = 'Down',
    /**
     * @remarks
     * 返回此物品东边（x+1）的方块。
     *
     */
    East = 'East',
    /**
     * @remarks
     * 返回此物品北边（z+1）的方块。
     *
     */
    North = 'North',
    /**
     * @remarks
     * 返回此物品南边（z-1）的方块。
     *
     */
    South = 'South',
    /**
     * @remarks
     * 返回此物品上方（y+1）的方块。
     *
     */
    Up = 'Up',
    /**
     * @remarks
     * 返回此物品西边（x-1）的方块。
     *
     */
    West = 'West',
}