/**
 * @remarks
 * Kicks a player from the server.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 * @param player
 * Player to kick.
 * @param reason
 * Reason for kicking the player.
 * @throws This function can throw errors.
 *
 * {@link CannotKickPlayerError}
 *
 * {@link minecraftcommon.EngineError}
 *
 * {@link minecraftcommon.InvalidArgumentError}
 */
export function kickPlayer(player: minecraftserver.Player, reason?: string): void;
