/**
 * Controls the allow list for the server. Only available on
 * dedicated server.
 */
export class AllowList {
    private constructor();
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    enabled: boolean;
    /**
     * @remarks
     * The list of entries in the allow list.
     *
     */
    readonly entries: AllowListEntry[];
    /**
     * @remarks
     * Adds a player to the server's allow list.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param playerDetails
     * Player or player name that should be added to the allow
     * list.
     * @param ignorePlayerLimit
     * If true, the player will be allowed onto the server even if
     * the server is at its player limit.
     * Defaults to: false
     * @throws This function can throw errors.
     *
     * {@link AllowListModificationError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    add(playerDetails: AllowListEntryNameInfo | minecraftserver.Player, ignorePlayerLimit?: boolean): void;
    /**
     * @remarks
     * Clears the allow list, removing all entries.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    clear(): void;
    /**
     * @remarks
     * Returns if the player is in the server's allow list.
     *
     * @param playerDetails
     * Player or player name that should be checked for.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    contains(playerDetails: AllowListEntryNameInfo | minecraftserver.Player): boolean;
    /**
     * @remarks
     * Reloads the server's allow list from disk.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link AllowListFileReloadError}
     */
    reloadFile(): void;
    /**
     * @remarks
     * Removes a player from the server's allow list.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param playerDetails
     * Player or player name that should be removed from the allow
     * list.
     * @throws This function can throw errors.
     *
     * {@link AllowListModificationError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    remove(playerDetails: AllowListEntryNameInfo | minecraftserver.Player): void;
}
