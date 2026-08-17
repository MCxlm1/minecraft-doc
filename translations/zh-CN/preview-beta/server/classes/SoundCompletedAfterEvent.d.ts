/**
 * @beta
 * 包含关于声音已声明持续时间结束的信息。
 */
export class SoundCompletedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已完成的声音实例的标识符。与该声音播放时返回的 `SoundInstance` 的 `id` 属性匹配。
     *
     */
    readonly soundInstanceId: string;
}