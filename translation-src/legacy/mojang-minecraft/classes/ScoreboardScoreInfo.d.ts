/**
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
    /**
     * This scoreboard participant for this score.
     */
    readonly "participant": ScoreboardIdentity;
    /**
     * Score value of the identity for this objective.
     */
    readonly "score": number;
    protected constructor();
}
