/**
 * @remarks
 * Gives the player op permissions.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 * @param player
 * Player to add permissions to.
 * @throws This function can throw errors.
 *
 * {@link minecraftcommon.EngineError}
 *
 * {@link minecraftcommon.InvalidArgumentError}
 *
 * {@link PlayerAlreadyOpError}
 */
export function opPlayer(player: minecraftserver.Player): void;
