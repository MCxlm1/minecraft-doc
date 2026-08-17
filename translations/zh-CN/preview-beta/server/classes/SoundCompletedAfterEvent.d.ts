/**
 * @beta
 * 包含关于已声明持续时间结束的声音的信息。
 */
export class SoundCompletedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已完成的其实例的标识符。与播放声音时返回的 `SoundInstance` 的 `id` 属性匹配。
     *
     */
    readonly soundInstanceId: string;
}