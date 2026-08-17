/**
 * 包含与压力板弹起变化相关的信息。
 */
// @ts-ignore 类继承允许原生定义类
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