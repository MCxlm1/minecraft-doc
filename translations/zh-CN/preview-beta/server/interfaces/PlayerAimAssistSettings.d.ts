/**
 * 与玩家瞄准辅助目标相关的设置。
 */
export interface PlayerAimAssistSettings {
    /**
     * @remarks
     * 瞄准辅助目标使用的视距限制。
     *
     */
    distance?: number;
    /**
     * @remarks
     * 要激活的瞄准辅助预设的 Id。必须包含命名空间。
     *
     */
    presetId: string;
    /**
     * @remarks
     * 瞄准辅助目标使用的模式。
     *
     */
    targetMode?: AimAssistTargetMode;
    /**
     * @remarks
     * 瞄准辅助目标使用的视角限制。
     *
     */
    viewAngle?: Vector2;
}