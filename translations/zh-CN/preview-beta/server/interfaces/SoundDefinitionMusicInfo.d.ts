/**
 * @beta
 * 在声音定义上声明的音乐元数据。每个字段是
 * 可选的，并且当声音定义没有为其声明值时，
 * 该字段为 undefined。
 */
export interface SoundDefinitionMusicInfo {
    /**
     * @remarks
     * 声明此声音的艺术家。当未声明艺术家时，
     * 为 undefined。
     *
     */
    artist?: string;
    /**
     * @remarks
     * 声明此声音的流派。当未声明流派时，
     * 为 undefined。
     *
     */
    genres?: string[];
    /**
     * @remarks
     * 声明此声音的情绪。当未声明情绪时，
     * 为 undefined。
     *
     */
    moods?: string[];
    /**
     * @remarks
     * 声明此声音的标题。当未声明标题时，
     * 为 undefined。
     *
     */
    title?: string;
}