/**
 * 声音播放给玩家时的附加选项。
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * 声音的位置；若未指定，则在玩家附近播放。
     *
     */
    location?: Vector3;
    /**
     * @beta
     * @remarks
     * 初始播放后声音重复的额外次数。`0`（默认值）播放一次，`-1` 无限循环，正整数 `N` 总共播放 `N + 1` 次。例如，`loopCount: 1` 播放两次。循环次数在声音开始播放时固定，之后无法更改。使用 `-1` 时，句柄生命周期要求请参见 `SoundInstance`。
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