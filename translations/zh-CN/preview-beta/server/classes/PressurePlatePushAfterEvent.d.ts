/**
 * 包含与压力板被按下相关的变更信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 压力板被按下之前的红石信号强度。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 压力板被按下时的红石信号强度。
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * 触发压力板被按下的来源实体。
     *
     */
    readonly source: Entity;
}