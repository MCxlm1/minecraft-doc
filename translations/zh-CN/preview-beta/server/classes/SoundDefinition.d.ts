/**
 * @beta
 * 关于 sound_definitions.json 文件中声明的声音的静态元数据。
 */
export class SoundDefinition {
    private constructor();
    /**
     * @remarks
     * 此声音的持续时间元数据。当声音定义未指定持续时间时为 undefined。
     *
     */
    readonly durationInfo?: SoundDefinitionDurationInfo;
    /**
     * @remarks
     * 此声音的音乐元数据。当声音定义未指定 music_info 块时为 undefined。
     *
     */
    readonly musicInfo?: SoundDefinitionMusicInfo;
    /**
     * @remarks
     * 此定义所声明的声音事件的标识符，格式为 'namespace:name'。
     *
     */
    readonly soundEventId: string;
    /**
     * @remarks
     * 此声音的标签元数据，以记录形式将每个标签名称映射到其声明的值。使用单个字符串值声明的标签以单元素数组形式呈现。当声音定义未指定任何标签时为 undefined。
     *
     */
    readonly tags?: Record<string, string[]>;
}