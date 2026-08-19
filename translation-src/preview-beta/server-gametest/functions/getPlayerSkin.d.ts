/**
 * @remarks
 * Returns data about a player's skin.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 * @param player
 * The player who's skin is returned.
 * @throws This function can throw errors.
 *
 * {@link minecraftcommon.InvalidArgumentError}
 *
 * {@link minecraftserver.InvalidEntityError}
 */
export function getPlayerSkin(player: minecraftserver.Player): PlayerSkinData;
