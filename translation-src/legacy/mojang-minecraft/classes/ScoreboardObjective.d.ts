/**
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    /**
     * Returns the player-visible name of this scoreboard
     * objective.
     * @throws This property can throw when used.
     */
    readonly "displayName": string;
    /**
     * Identifier of the scoreboard objective.
     * @throws This property can throw when used.
     */
    readonly "id": string;
    /**
     * @remarks
     * Returns all objective participant identities.
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Returns a specific score for a participant.
     * @param participant
     * @throws This function can throw errors.
     */
    getScore(participant: ScoreboardIdentity): number;
    /**
     * @remarks
     * Returns specific scores for this objective for all
     * participants.
     * @throws This function can throw errors.
     */
    getScores(): ScoreboardScoreInfo[];
    protected constructor();
}
