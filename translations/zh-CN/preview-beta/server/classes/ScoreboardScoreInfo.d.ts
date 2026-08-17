/**
 * 包含一个计分板参与者及其对应分数的配对。
 */
export class ScoreboardScoreInfo {
    private constructor();
    /**
     * @remarks
     * 此分数的计分板参与者。
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * 此目标的标识的分数值。
     *
     */
    readonly score: number;
}