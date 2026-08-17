/**
 * 包含一个记分板参与者和其对应分数的配对。
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
     * 该参与者在此目标下的分数值。
     *
     */
    readonly score: number;
}