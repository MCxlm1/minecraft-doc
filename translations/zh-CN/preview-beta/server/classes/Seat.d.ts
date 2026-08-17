```typescript
/**
 * 描述此可骑乘实体上的一个特定座位位置。
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
     * 此座位可支持的最大骑乘者数量。
     *
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * 如果要填满此座位，此座位位置可放置的最小骑乘者数量。
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
```