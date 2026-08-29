/**
 * An event that contains more information about a player
 * spawning.
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * If true, this is the initial spawn of a player after joining
     * the game.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * Object that represents the player that joined the game.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    player: Player;
}
