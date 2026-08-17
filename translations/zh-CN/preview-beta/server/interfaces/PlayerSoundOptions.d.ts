/**
 * 关于声音如何为玩家播放的附加选项。
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * 声音的位置；如果未指定，则声音在玩家附近播放。
     *
     */
    location?: Vector3;
    /**
     * @beta
     * @remarks
     * 初始播放后重复声音的额外次数。`0`（默认值）播放一次，`-1`永远循环，正整数`N`总共播放`N + 1`次。例如，`loopCount: 1`播放两次。循环次数在声音开始时固定，之后无法更改。使用`-1`时，请参阅`SoundInstance`以了解句柄生命周期要求。
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * 声音的可选音高。
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