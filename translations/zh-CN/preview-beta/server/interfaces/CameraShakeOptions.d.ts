/**
 * @beta
 * 用于通过 `Camera.addShake` 对玩家相机应用相机抖动效果的
 * 选项。每次调用 `addShake` 都会
 * 为指定的 `type` 排队一个新的独立抖动事件；
 * 位置抖动和旋转抖动在单独的队列中跟踪，
 * 并同时运行。任意时刻的渲染强度是
 * 该类型所有活动事件强度之和，
 * 上限为 `4.0`。事件会在其 `duration` 结束时
 * 自然过期。
 */
export interface CameraShakeOptions {
    /**
     * @remarks
     * 此抖动事件的持续时间（秒）。必须为
     * 正值。
     *
     */
    duration: number;
    /**
     * @remarks
     * 此抖动事件的强度。必须为正值，最大为 `4.0`。
     * 同一 `type` 的多个活动事件强度会累加，
     * 上限为 `4.0`。
     *
     */
    intensity: number;
    /**
     * @remarks
     * 要应用的相机抖动类型。位置抖动和旋转抖动
     * 维护各自独立的事件队列并同时应用，
     * 因此添加每种类型的抖动不会使它们
     * 互相干扰。
     *
     */
    type: CameraShakeType;
}