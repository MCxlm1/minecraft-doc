/**
 * 指定如何处理与现有液体重叠的可含水方块。
 */
export enum LiquidSettings {
    /**
     * @remarks
     * 使与现有液体重叠的可含水方块变为含水状态。
     *
     */
    ApplyWaterlogging = 'ApplyWaterlogging',
    /**
     * @remarks
     * 不使任何与现有液体重叠的可含水方块含水。
     *
     */
    IgnoreWaterlogging = 'IgnoreWaterlogging',
}