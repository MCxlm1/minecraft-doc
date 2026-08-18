/**
 * @beta
 * 描述查询返回的方块兴趣点（POI）实例。
 *
 * 所需实验性玩法：
 * - Poi
 *
 */
export class PoiBlockInstance {
    private constructor();
    /**
     * @remarks
     * 此 POI 实例的方块位置。
     *
     */
    readonly position: Vector3;
    /**
     * @remarks
     * 当前可从此 POI 实例领取的票券数量。
     *
     */
    readonly tickets: number;
    /**
     * @remarks
     * 此 POI 实例的类型。
     *
     */
    readonly 'type': PoiBlockType;
}