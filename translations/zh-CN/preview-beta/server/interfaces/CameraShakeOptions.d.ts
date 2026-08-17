/**
 * @beta
 * 通过 `Camera.addShake` 对玩家相机应用相机抖动效果的选项。
 * 每次调用 `addShake` 都会为指定的 `type` 排队一个新的独立抖动事件；
 * 位置抖动和旋转抖动分别在单独的队列中跟踪并同时运行。
 * 任何时刻的渲染强度是当前所有活跃事件对该类型强度的总和，上限为 `4.0`。
 * 事件在 `duration` 时间结束后自然过期。
 */
export interface CameraShakeOptions {
    /**
     * @remarks
     * 此抖动事件的持续时间，以秒为单位。必须为正值。
     *
     */
    duration: number;
    /**
     * @remarks
     * 此抖动事件的强度。必须为正值，最大值 `4.0`。
     * 多个相同 `type` 的活跃事件强度会累加，上限为 `4.0`。
     *
     */
    intensity: number;
    /**
     * @remarks
     * 要应用的相机抖动类型。位置抖动和旋转抖动维护独立的事件队列并同时应用，
     * 因此添加每种类型的抖动不会相互干扰。
     *
     */
    type: CameraShakeType;
}