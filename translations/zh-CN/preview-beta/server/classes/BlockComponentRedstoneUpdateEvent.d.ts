/**
 * 包含有关特定方块红石更新事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRedstoneUpdateEvent extends BlockEvent {
    private constructor();
    /**
     * @beta
     * @remarks
     * 红石组件的第一次更新事件。
     *
     */
    readonly firstUpdate: boolean;
    /**
     * @remarks
     * 经过此方块的当前红石信号强度。它确保大于或等于该方块'minecraft:redstone_consumer'组件的'min_power'。
     *
     */
    readonly powerLevel: number;
    /**
     * @remarks
     * 上一游戏刻经过此方块的红石信号强度。它确保大于或等于该方块'minecraft:redstone_consumer'组件的'min_power'。
     *
     */
    readonly previousPowerLevel: number;
}