/**
 * 包含 playSound 事件的附加选项。
 */
export interface WorldSoundOptions {
    /**
     * @beta
     * @remarks
     * 在首次播放后额外重复播放声音的次数。`0`（默认值）表示只播放一次，`-1` 表示无限循环，正整数 `N` 表示总共播放 `N + 1` 次。例如，`loopCount: 1` 表示播放两次。循环次数在声音开始时固定，之后无法更改。使用 `-1` 时，请参阅 `SoundInstance` 以了解句柄的生命周期要求。
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
     * 听到该声音的相对音量和空间范围。
     *
     */
    volume?: number;
}