/**
 * 包含 playSound 调用的附加选项。
 */
export interface WorldSoundOptions {
    /**
     * @beta
     */
    isBroadcast?: boolean;
    /**
     * @beta
     * @remarks
     * 初始播放后额外重复播放声音的次数。`0`（默认值）播放一次，`-1` 无限循环，正整数 `N` 总共播放 `N + 1` 次。例如，`loopCount: 1` 播放两次。循环次数在声音开始时固定，之后无法更改。使用 `-1` 时，请参阅 `SoundInstance` 了解句柄生命周期要求。
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 播放声音的音调。
     *
     */
    pitch?: number;
    /**
     * @remarks
     * 此声音被听到的相对音量和空间范围。
     *
     */
    volume?: number;
}