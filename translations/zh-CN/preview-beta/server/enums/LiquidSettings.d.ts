/**
 * 指定如何处理与现有液体重叠的可含水方块。
 */
export enum LiquidSettings {
    /**
     * @remarks
     * 如果与现有液体重叠，则使可含水方块变为含水状态。
     *
     */
    ApplyWaterlogging = 'ApplyWaterlogging',
    /**
     * @remarks
     * 不要对任何与现有液体重叠的可含水方块进行含水处理。
     *
     */
    IgnoreWaterlogging = 'IgnoreWaterlogging',
}