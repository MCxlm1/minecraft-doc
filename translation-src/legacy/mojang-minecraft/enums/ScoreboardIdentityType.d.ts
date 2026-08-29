/**
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * This scoreboard participant is tied to an entity.
     */
    entity = "entity",
    /**
     * This scoreboard participant is tied to a pseudo player
     * entity - typically this is used to store scores as data or
     * as abstract progress.
     */
    fakePlayer = "fakePlayer",
    /**
     * This scoreboard participant is tied to a player.
     */
    player = "player",
}
