/**
 * @beta
 * Contains information related to when a player successfully
 * names an Entity with a named Name Tag item.
 */
export class PlayerUseNameTagAfterEvent {
    private constructor();
    /**
     * @remarks
     * The entity that was named by the player.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    entityNamed: Entity;
    /**
     * @remarks
     * The new name that the player has given to the entity.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    newName: string;
    /**
     * @remarks
     * Handle to the player that used the name tag.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    player: Player;
    /**
     * @remarks
     * The previous name of the entity before the player used the
     * name tag. This will be undefined if the entity was not
     * previously named.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    previousName?: string;
}
