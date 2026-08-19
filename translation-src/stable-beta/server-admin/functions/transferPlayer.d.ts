/**
 * @remarks
 * Transfer player to another server.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 * @param player
 * Player to transfer.
 * @param options
 * Options for where to send the player.
 * @throws This function can throw errors.
 */
export function transferPlayer(
    player: minecraftserver.Player,
    options: TransferPlayerIpPortOptions | TransferPlayerNetherNetOptions,
): void;
