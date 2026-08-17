/**
 * 指定如何处理与现有液体重叠的可含水方块。
 */
export enum LiquidSettings {
    /**
     * @remarks
     * 导致可含水方块在与现有液体重叠时变为含水状态。
     *
     */
    ApplyWaterlogging = 'ApplyWaterlogging',
    /**
     * @remarks
     * 不对任何与现有液体重叠的可含水方块进行含水处理。
     *
     */
    IgnoreWaterlogging = 'IgnoreWaterlogging',
}