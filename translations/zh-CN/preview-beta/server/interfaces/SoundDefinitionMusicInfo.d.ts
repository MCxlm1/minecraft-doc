/**
 * @beta
 * 在声音定义上声明的音乐元数据。每个字段都是可选的，当声音定义未声明其值时未定义。
 */
export interface SoundDefinitionMusicInfo {
    /**
     * @remarks
     * 此声音声明的艺术家。当未声明艺术家时未定义。
     *
     */
    artist?: string;
    /**
     * @remarks
     * 此声音声明的流派。当未声明流派时未定义。
     *
     */
    genres?: string[];
    /**
     * @remarks
     * 此声音声明的情绪。当未声明情绪时未定义。
     *
     */
    moods?: string[];
    /**
     * @remarks
     * 此声音声明的标题。当未声明标题时未定义。
     *
     */
    title?: string;
}