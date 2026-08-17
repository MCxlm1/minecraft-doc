/**
 * 包含与压力板
 * 按压变化相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 压力板被按压前的
     * 红石能量。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 压力板按压时的
     * 红石能量。
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 触发压力板按压的源实体。
     *
     */
    readonly source: Entity;
}