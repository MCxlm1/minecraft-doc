/**
 * @beta
 * 关于在 sound_definitions.json 文件中声明的
 * 声音的静态元数据。
 */
export class SoundDefinition {
    private constructor();
    /**
     * @remarks
     * 为此声音声明的持续时间元数据。当声音定义
     * 未指定持续时间时未定义。
     *
     */
    readonly durationInfo?: SoundDefinitionDurationInfo;
    /**
     * @remarks
     * 为此声音声明的音乐元数据。当声音定义
     * 未指定 music_info 块时未定义。
     *
     */
    readonly musicInfo?: SoundDefinitionMusicInfo;
    /**
     * @remarks
     * 此定义声明的声音事件的标识符，格式为
     * 'namespace:name'。
     *
     */
    readonly soundEventId: string;
    /**
     * @remarks
     * 为此声音声明的标签元数据，作为记录映射
     * 每个标签名称到其声明的值。使用单个字符串值声明的标签
     * 暴露为单元素数组。
     * 当声音定义未指定任何
     * 标签时未定义。
     *
     */
    readonly tags?: Record<string, string[]>;
}