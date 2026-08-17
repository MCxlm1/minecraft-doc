/**
 * @beta
 * 用于通过 `Camera.addShake` 对玩家相机应用相机抖动效果的
 * 选项。每次调用 `addShake` 都会为指定的 `type` 排队
 * 一个新的独立抖动事件；
 * 位置抖动和旋转抖动分别在不同的队列中跟踪，
 * 并且并发运行。任意时刻的渲染强度
 * 是该类型所有活动事件强度之和，
 * 上限为 `4.0`。事件在其 `duration` 结束时
 * 自然过期。
 */
export interface CameraShakeOptions {
    /**
     * @remarks
     * 此抖动事件的持续时间（以秒为单位）。必须为
     * 正值。
     *
     */
    duration: number;
    /**
     * @remarks
     * 此抖动事件的强度。必须为正数，
     * 最大值为 `4.0`。同一 `type` 的多个活动事件
     * 会相加，上限为 `4.0`。
     *
     */
    intensity: number;
    /**
     * @remarks
     * 要应用的相机抖动类型。位置抖动和旋转抖动
     * 维护各自独立的事件队列并并发应用，
     * 因此添加每种类型的抖动不会
     * 使它们相互干扰。
     *
     */
    type: CameraShakeType;
}