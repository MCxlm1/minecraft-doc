/**
 * @beta
 * 在声音定义上声明的音乐元数据。每个字段都是可选的，当声音定义未声明其值时，该字段为 undefined。
 */
export interface SoundDefinitionMusicInfo {
    /**
     * @remarks
     * 为此声音声明的艺术家。当未声明艺术家时为 undefined。
     *
     */
    artist?: string;
    /**
     * @remarks
     * 为此声音声明的流派。当未声明流派时为 undefined。
     *
     */
    genres?: string[];
    /**
     * @remarks
     * 为此声音声明的情绪。当未声明情绪时为 undefined。
     *
     */
    moods?: string[];
    /**
     * @remarks
     * 为此声音声明的标题。当未声明标题时为 undefined。
     *
     */
    title?: string;
}