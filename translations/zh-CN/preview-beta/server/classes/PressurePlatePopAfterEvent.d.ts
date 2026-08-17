/**
 * 包含与压力板弹起（pop）变化相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 压力板弹起前的红石能量。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 压力板弹起时的红石能量。
     *
     */
    readonly redstonePower: number;
}