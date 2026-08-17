/**
 * @beta
 * 关于在 sound_definitions.json 文件中
 * 声明的声音的静态元数据。
 */
export class SoundDefinition {
    private constructor();
    /**
     * @remarks
     * 此声音声明的持续时间元数据。当声音定义未指定
     * 持续时间时，该值为 undefined。
     *
     */
    readonly durationInfo?: SoundDefinitionDurationInfo;
    /**
     * @remarks
     * 此声音声明的音乐元数据。当声音定义未指定
     * music_info 块时，该值为 undefined。
     *
     */
    readonly musicInfo?: SoundDefinitionMusicInfo;
    /**
     * @remarks
     * 此定义所声明的声音事件标识符，
     * 格式为 'namespace:name'。
     *
     */
    readonly soundEventId: string;
    /**
     * @remarks
     * 此声音声明的标签元数据，作为一个记录，
     * 将每个标签名称映射到其声明的值。声明为
     * 单个字符串值的标签会以单元素数组形式呈现。
     * 当声音定义未指定任何标签时，
     * 该值为 undefined。
     *
     */
    readonly tags?: Record<string, string[]>;
}