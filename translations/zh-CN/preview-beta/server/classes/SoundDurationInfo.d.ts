```
/**
 * @beta
 * 为声明了持续时间的声音提供时长和播放信息。
 */
export class SoundDurationInfo {
    private constructor();
    /**
     * @remarks
     * 获取声音的总时长（秒）。
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取声音是否仍在被跟踪。
     *
     */
    readonly isActive: boolean;
    /**
     * @remarks
     * 返回声音的当前播放位置（秒），从声音开头开始测量。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 当前播放位置（秒），从声音开头开始测量。
     */
    getPlaybackPosition(): number;
}
```