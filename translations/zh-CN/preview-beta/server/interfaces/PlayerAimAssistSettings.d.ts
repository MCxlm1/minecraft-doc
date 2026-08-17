/**
 * 关于玩家瞄准辅助目标的设置。
 */
export interface PlayerAimAssistSettings {
    /**
     * @remarks
     * 用于瞄准辅助目标的视野距离限制。
     *
     */
    distance?: number;
    /**
     * @remarks
     * 要激活的瞄准辅助预设的 ID。必须包含命名空间。
     *
     */
    presetId: string;
    /**
     * @remarks
     * 用于瞄准辅助目标的模式。
     *
     */
    targetMode?: AimAssistTargetMode;
    /**
     * @remarks
     * 用于瞄准辅助目标的视角角度限制。
     *
     */
    viewAngle?: Vector2;
}