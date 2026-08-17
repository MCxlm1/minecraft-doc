/**
 * @beta
 * 包含有关声音的声明持续时间
 * 已结束的信息。
 */
export class SoundCompletedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已完成的声音实例的标识符。
     * 与播放声音时返回的 `SoundInstance`
     * 的 `id` 属性匹配。
     *
     */
    readonly soundInstanceId: string;
}