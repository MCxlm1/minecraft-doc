/**
 * @remarks
 * Removes the player's op permissions.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 * @param player
 * Player to remove permissions from.
 * @throws This function can throw errors.
 *
 * {@link CannotDeopPlayerError}
 *
 * {@link minecraftcommon.EngineError}
 *
 * {@link minecraftcommon.InvalidArgumentError}
 */
export function deopPlayer(player: minecraftserver.Player): void;
