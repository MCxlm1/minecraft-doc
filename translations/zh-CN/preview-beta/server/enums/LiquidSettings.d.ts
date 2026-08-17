/**
 * 指定如何处理与现有液体重叠的可含水方块。
 */
export enum LiquidSettings {
    /**
     * @remarks
     * 使可含水方块在与现有液体重叠时变为含水状态。
     *
     */
    ApplyWaterlogging = 'ApplyWaterlogging',
    /**
     * @remarks
     * 不使任何与现有液体重叠的可含水方块变为含水状态。
     *
     */
    IgnoreWaterlogging = 'IgnoreWaterlogging',
}