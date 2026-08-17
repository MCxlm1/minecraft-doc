/**
 * @beta
 * 在 sound_definitions.json 文件中声明的声音的静态元数据。
 */
export class SoundDefinition {
    private constructor();
    /**
     * @remarks
     * 此声音声明的持续时间元数据。当声音定义未指定持续时间时为 Undefined。
     *
     */
    readonly durationInfo?: SoundDefinitionDurationInfo;
    /**
     * @remarks
     * 此声音声明的音乐元数据。当声音定义未指定 music_info 块时为 Undefined。
     *
     */
    readonly musicInfo?: SoundDefinitionMusicInfo;
    /**
     * @remarks
     * 此定义所声明的声音事件的标识符，格式为“命名空间:名称”。
     *
     */
    readonly soundEventId: string;
    /**
     * @remarks
     * 此声音声明的标签元数据，作为记录映射，将每个标签名称映射到其声明的值。
     * 使用单个字符串值声明的标签显示为单元素数组。
     * 当声音定义未指定任何标签时为 Undefined。
     *
     */
    readonly tags?: Record<string, string[]>;
}