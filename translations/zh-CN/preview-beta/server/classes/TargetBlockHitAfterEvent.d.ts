/**
 * 包含与目标方块被击中相关的更改信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 来源击中方块时的位置。
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 方块被击中之前的红石信号强度。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 方块被击中时的红石信号强度。
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 击中目标方块的可选来源实体。
     *
     */
    readonly source: Entity;
}