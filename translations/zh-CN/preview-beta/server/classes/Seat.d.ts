/**
 * 描述此可骑乘实体上的特定座位位置。
 */
export class Seat {
    private constructor();
    /**
     * @remarks
     * 骑乘者在此实体上骑行时允许旋转的角度（以度为单位）。
     *
     */
    readonly lockRiderRotation: number;
    /**
     * @remarks
     * 此座位可容纳的最大骑乘者数量。
     *
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * 若要填满此座位位置，可放置在此座位上的最小骑乘者数量。
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
     * 骑乘者旋转的角度（以度为单位）。
     *
     */
    readonly seatRotation: number;
}