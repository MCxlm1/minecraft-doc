/**
 * 与玩家的瞄准辅助目标相关的设置。
 */
export interface PlayerAimAssistSettings {
    /**
     * @remarks
     * 用于瞄准辅助目标定位的视距限制。
     *
     */
    distance?: number;
    /**
     * @remarks
     * 要激活的瞄准辅助预设的 ID。
     * 必须具有命名空间。
     *
     */
    presetId: string;
    /**
     * @remarks
     * 用于瞄准辅助目标定位的模式。
     *
     */
    targetMode?: AimAssistTargetMode;
    /**
     * @remarks
     * 用于瞄准辅助目标定位的视角限制。
     *
     */
    viewAngle?: Vector2;
}