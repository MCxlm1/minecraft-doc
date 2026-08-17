/**
 * 描述此可骑乘实体上的一个
 * 特定座位位置。
 */
export class Seat {
    private constructor();
    /**
     * @remarks
     * 骑乘此实体时，骑乘者允许
     * 旋转的角度（以度为单位）。
     *
     */
    readonly lockRiderRotation: number;
    /**
     * @remarks
     * 此座位最多可支持的骑乘者数量。
     *
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * 若此座位需要被坐满，放置在该座位
     * 位置上的最少骑乘者数量。
     *
     */
    readonly minRiderCount: number;
    /**
     * @remarks
     * 此座位相对于实体位置
     * 的物理位置。
     *
     */
    readonly position: Vector3;
    /**
     * @remarks
     * 旋转骑乘者的角度（以度为单位）。
     *
     */
    readonly seatRotation: number;
}