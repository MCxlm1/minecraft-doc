/**
 * 包含与目标方块被击中时变化相关的信息。
 */
// @ts-ignore 类继承允许原生定义类
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 源实体击中方块的位置。
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * 方块被击中之前的红石能量。
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 方块被击中时的红石能量。
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 击中目标方块的源实体（可选）。
     */
    readonly source: Entity;
}