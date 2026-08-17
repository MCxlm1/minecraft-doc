/**
 * 描述此可骑行实体上的一个特定座位位置。
 */
export class Seat {
    private constructor();
    /**
     * @remarks
     * 骑乘此实体时，骑手允许旋转的角度（以度为单位）。
     *
     */
    readonly lockRiderRotation: number;
    /**
     * @remarks
     * 此座位可以支持的最大骑手数量。
     *
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * 如果此座位需要被占据，则可以放置在此座位位置的最小骑手数量。
     *
     */
    readonly minRiderCount: number;
    /**
     * @remarks
     * 此座位的物理位置，相对于实体的位置。
     *
     */
    readonly position: Vector3;
    /**
     * @remarks
     * 用于旋转骑手的角度（以度为单位）。
     *
     */
    readonly seatRotation: number;
}