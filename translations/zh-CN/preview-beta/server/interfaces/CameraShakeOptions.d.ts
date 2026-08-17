/**
 * @beta
 * 用于通过 `Camera.addShake` 对玩家相机应用抖动效果时提供的选项。
 * 每次调用 `addShake` 都会为指定的 `type` 排入一个独立的抖动事件；
 * 位置抖动和旋转抖动分别在不同的队列中跟踪并并发运行。
 * 任意时刻的渲染强度为该类型所有活动事件强度的总和，上限为 `4.0`。
 * 事件在其 `duration` 结束时自然消失。
 */
export interface CameraShakeOptions {
    /**
     * @remarks
     * 该抖动事件的持续时间，以秒为单位。必须为正值。
     *
     */
    duration: number;
    /**
     * @remarks
     * 该抖动事件的强度。必须为正值，最大为 `4.0`。多个相同 `type` 的活动事件会累加，上限为 `4.0`。
     *
     */
    intensity: number;
    /**
     * @remarks
     * 要应用的相机抖动类型。位置抖动和旋转抖动分别维护独立的队列并并发应用，
     * 因此添加两种类型的抖动不会相互干扰。
     *
     */
    type: CameraShakeType;
}