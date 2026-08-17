/**
 * 包含与压力板弹起变化相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 该压力板在弹起之前的红石能量。
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * 该压力板在弹起时的红石能量。
     *
     */
    readonly redstonePower: number;
}