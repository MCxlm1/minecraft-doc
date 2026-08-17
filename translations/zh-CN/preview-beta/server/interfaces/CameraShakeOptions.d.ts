/**
 * @beta
 * 用于通过 `Camera.addShake` 对玩家摄像机应用抖动效果的选项。每次调用 `addShake` 都会为指定的 `type` 排入一个独立的抖动事件；位置抖动和旋转抖动分别在不同的队列中跟踪并并发运行。任意时刻的渲染强度为该类型所有活动事件强度之和，上限为 `4.0`。事件在 `duration` 结束后自然过期。
 */
export interface CameraShakeOptions {
    /**
     * @remarks
     * 此抖动事件的持续时间（以秒为单位）。必须为正值。
     *
     */
    duration: number;
    /**
     * @remarks
     * 此抖动事件的强度。必须为正值，最大为 `4.0`。同一 `type` 的多个活动事件强度会累加，上限为 `4.0`。
     *
     */
    intensity: number;
    /**
     * @remarks
     * 要应用的摄像机抖动类型。位置抖动和旋转抖动有各自独立的事件队列，并同时应用，因此添加每种类型的抖动不会导致相互干扰。
     *
     */
    type: CameraShakeType;
}