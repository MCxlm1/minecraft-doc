/**
 * @beta
 * 音乐元数据在音效定义上声明。每个字段都是可选的，
 * 当音效定义未声明该字段的值时，该字段为 undefined。
 */
export interface SoundDefinitionMusicInfo {
    /**
     * @remarks
     * 为此音效声明的艺术家。未声明艺术家时为 undefined。
     *
     */
    artist?: string;
    /**
     * @remarks
     * 为此音效声明的流派。未声明流派时为 undefined。
     *
     */
    genres?: string[];
    /**
     * @remarks
     * 为此音效声明的情绪。未声明情绪时为 undefined。
     *
     */
    moods?: string[];
    /**
     * @remarks
     * 为此音效声明的标题。未声明标题时为 undefined。
     *
     */
    title?: string;
}