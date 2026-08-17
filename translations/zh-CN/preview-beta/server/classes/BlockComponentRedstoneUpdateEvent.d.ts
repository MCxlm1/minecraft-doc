/**
 * 包含关于特定方块红石更新事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRedstoneUpdateEvent extends BlockEvent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 红石组件的第一个更新事件。
     *
     */
    readonly firstUpdate: boolean;
    /**
     * @remarks
     * 通过此方块的红石信号强度。保证大于或等于方块 'minecraft:redstone_consumer' 组件的 min_power。
     *
     */
    readonly powerLevel: number;
    /**
     * @remarks
     * 上一个游戏刻通过此方块的红石信号强度。保证大于或等于方块 'minecraft:redstone_consumer' 组件的 min_power。
     *
     */
    readonly previousPowerLevel: number;
}