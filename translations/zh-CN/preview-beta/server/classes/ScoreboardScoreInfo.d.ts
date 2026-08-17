/**
 * 包含一个记分板参与者和其各自分数的配对。
 */
export class ScoreboardScoreInfo {
    private constructor();
    /**
     * @remarks
     * 此分数的记分板参与者。
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * 此目标下该身份对应的分数值。
     *
     */
    readonly score: number;
}