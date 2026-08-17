/**
 * @beta
 * 提供声音的时长与播放信息，其定义中
 * 声明了时长。
 */
export class SoundDurationInfo {
    private constructor();
    /**
     * @remarks
     * 获取声音的总时长（以秒为单位）。
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取该声音是否仍处于跟踪状态。
     *
     */
    readonly isActive: boolean;
    /**
     * @remarks
     * 返回声音内当前的播放位置，以
     * 秒为单位，从声音起始处开始测量。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @returns
     * 当前播放位置（以秒为单位），从声音
     * 开始处起算。
     */
    getPlaybackPosition(): number;
}