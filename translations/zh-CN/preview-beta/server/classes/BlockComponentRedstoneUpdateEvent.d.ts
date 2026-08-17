/**
 * 包含有关特定方块红石更新事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRedstoneUpdateEvent extends BlockEvent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 该红石组件的第一次更新事件。
     *
     */
    readonly firstUpdate: boolean;
    /**
     * @remarks
     * 通过此方块的红石信号强度。它保证大于等于该方块 'minecraft:redstone_consumer' 组件的 `min_power` 值。
     *
     */
    readonly powerLevel: number;
    /**
     * @remarks
     * 上一 tick 通过此方块的红石信号强度。它保证大于等于该方块 'minecraft:redstone_consumer' 组件的 `min_power` 值。
     *
     */
    readonly previousPowerLevel: number;
}