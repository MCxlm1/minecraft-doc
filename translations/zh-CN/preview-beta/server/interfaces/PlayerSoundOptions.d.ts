/**
 * 关于声音如何对玩家播放的额外选项。
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * 声音的位置；如果未指定，则在玩家附近播放声音。
     *
     */
    location?: Vector3;
    /**
     * @beta
     * @remarks
     * 初始播放后声音重复的额外次数。`0`（默认值）播放一次，`-1` 无限循环，正整数 `N` 总共播放 `N + 1` 次。例如，`loopCount: 1` 播放两次。循环次数在声音开始时固定，之后无法更改。使用 `-1` 时，请参阅 `SoundInstance` 了解句柄生命周期要求。
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 声音的可选音调。
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 声音的可选音量。
     *
     */
    volume?: number;
}