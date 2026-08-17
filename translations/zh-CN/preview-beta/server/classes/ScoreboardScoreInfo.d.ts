/**
 * 包含一个记分板参与者及其对应分数的配对。
 */
export class ScoreboardScoreInfo {
    private constructor();
    /**
     * @remarks
     * 该分数的记分板参与者。
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * 该身份在此目标下的分数值。
     *
     */
    readonly score: number;
}