// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * Contains types related to administering a Bedrock Dedicated
 * Server. These types allow for the configuration of variables
 * and secrets in JSON files in the Bedrock Dedicated Server
 * folder. These types cannot be used on Minecraft clients or
 * within Minecraft Realms.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-admin",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserver from '@minecraft/server';
export class AdminBeforeEvents {
    private constructor();
    /**
     * @remarks
     * This event is fired before a player joins the world. Unlike
     * other before events, this event is a before event that you
     * can delay several ticks by not resolving the promise
     * returned in the subscribe function. If the promise is
     * rejected, the client is rejected.
     *
     */
    readonly asyncPlayerJoin: AsyncPlayerJoinBeforeEventSignal;
}

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

/**
 * The data available before a player joins the world.
 */
export class AsyncPlayerJoinBeforeEvent {
    private constructor();
    /**
     * @remarks
     * The player's name
     *
     */
    readonly name: string;
    /**
     * @remarks
     * An identifier that can be used to identify a player across
     * sessions.
     *
     */
    readonly persistentId: string;
    /**
     * @remarks
     * The split screen slot of the joining player or undefined if
     * the player is not in a split screen session.
     *
     */
    readonly splitScreenSlot?: minecraftserver.PlayerSplitScreenSlot;
    /**
     * @remarks
     * Call this to explicitly allow the player to join the server.
     * This is useful when player joining is disabled
     * (`allow-player-joining` is set to `false` when playing on
     * dedicated server).
     *
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    allowJoin(): void;
    /**
     * @remarks
     * Call this to disallow the player from joining the server.
     * This is useful for preventing unauthorized access to the
     * server.
     *
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disallowJoin(reason?: string): void;
    /**
     * @remarks
     * Deprecated - use
     * {@link AsyncPlayerJoinBeforeEvent.disallowJoin} instead.
     * Call this to disconnect a player. They will be allowed to
     * try to join again. They will be allowed to try to join again
     * after being disconnected.
     *
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disconnect(reason?: string): void;
    /**
     * @remarks
     * Will return true if the player is still waiting to join the
     * world. If they disconnect then it will return false.
     *
     */
    isValid(): boolean;
}

export class AsyncPlayerJoinBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Add a callback that's ran before a player joins the world.
     * This callback returns a promise and the player won't join
     * until that promise is resolved. If the promise is not
     * resolved within a reasonable time, the player joining will
     * be rejected. If the player joining leaves/disconnects, then
     * the event data's isValid will return false.
     *
     */
    subscribe(
        callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>,
    ): (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>;
    unsubscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>): boolean;
}

/**
 * Contains apis that are only available when in Bedrock
 * Dedicated Server.
 */
export class DedicatedServerUtils {
    private constructor();
    /**
     * @remarks
     * Returns an object that manages the server's allow list.
     *
     */
    readonly allowList: AllowList;
    /**
     * @remarks
     * Returns an object that manages the level's storage.
     *
     */
    readonly levelStorage: LevelStorage;
    /**
     * @remarks
     * Reloads the cdn configuration from disk.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    reloadCDNConfig(): void;
    /**
     * @remarks
     * Reloads the permissions for the server from disk.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    reloadPermissions(): void;
    /**
     * @remarks
     * Reloads the script configuration for the server from disk.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    reloadScriptingConfig(): void;
    /**
     * @remarks
     * Shuts down the dedicated server.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    stopServer(): void;
}

/**
 * Controls how the server saves to disk. Only available on
 * dedicated server.
 */
export class LevelStorage {
    private constructor();
    /**
     * @remarks
     * Disables the server writing to the world files and begins
     * creating a snapshot.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveHold(): void;
    /**
     * @remarks
     * Returns the path and size of every file in the current
     * snapshot if a snapshot is being taken.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveQuery(): LevelStorageQuerySnapshotFile[];
    /**
     * @remarks
     * Re-enables server writing world state to files and removes
     * snapshot.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveResume(): void;
}

/**
 * Contains information about a file that was gathered during a
 * snapshot.
 */
export class LevelStorageQuerySnapshotFile {
    private constructor();
    /**
     * @remarks
     * The path to the file in the snapshot.
     *
     */
    readonly fileName: string;
    /**
     * @remarks
     * The size of the file in the snapshot.
     *
     */
    readonly fileSize: number;
}

/**
 * This represents a placeholder object that represents a
 * secret string. The contents of that string are not available
 * to script; this object is just a placeholder.
 */
export class SecretString {
    constructor(value: string);
}

/**
 * A collection of server secrets defined in dedicated server
 * configuration.
 * @example getPlayerProfile.ts
 * ```typescript
 * import { variables, secrets } from '@minecraft/server-admin';
 * import { http, HttpRequest, HttpRequestMethod, HttpHeader, HttpResponse } from '@minecraft/server-net';
 *
 * const serverUrl = variables.get('serverEndpoint');
 *
 * function getPlayerProfile(playerId: string): Promise<HttpResponse> {
 *   const req = new HttpRequest(serverUrl + 'getPlayerProfile');
 *
 *   req.body = JSON.stringify({
 *     playerId,
 *   });
 *
 *   const authTokenSec = secrets.get('authtoken');
 *
 *   if (!authTokenSec) {
 *     throw new Error('authtoken secret not defined.');
 *   }
 *
 *   req.method = HttpRequestMethod.Post;
 *   req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', authTokenSec)];
 *
 *   return http.request(req);
 * }
 * ```
 */
export class ServerSecrets {
    private constructor();
    /**
     * @remarks
     * A list of available, configured server secrets.
     *
     */
    readonly names: string[];
    /**
     * @remarks
     * Returns a SecretString that is a placeholder for a secret
     * configured in a JSON file. In certain objects, like an
     * HttpHeader, this Secret is resolved at the time of execution
     * but is not made available to the script environment.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    get(name: string): SecretString | undefined;
}

/**
 * A collection of server variables defined in dedicated server
 * configuration.
 * @example getPlayerProfile.ts
 * ```typescript
 * import { variables, secrets } from '@minecraft/server-admin';
 * import { http, HttpRequest, HttpRequestMethod, HttpHeader, HttpResponse } from '@minecraft/server-net';
 *
 * const serverUrl = variables.get('serverEndpoint');
 *
 * function getPlayerProfile(playerId: string): Promise<HttpResponse> {
 *   const req = new HttpRequest(serverUrl + 'getPlayerProfile');
 *
 *   req.body = JSON.stringify({
 *     playerId,
 *   });
 *
 *   const authTokenSec = secrets.get('authtoken');
 *
 *   if (!authTokenSec) {
 *     throw new Error('authtoken secret not defined.');
 *   }
 *
 *   req.method = HttpRequestMethod.Post;
 *   req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', authTokenSec)];
 *
 *   return http.request(req);
 * }
 * ```
 */
export class ServerVariables {
    private constructor();
    /**
     * @remarks
     * A list of available, configured server variables.
     *
     */
    readonly names: string[];
    /**
     * @remarks
     * Returns the value of variable that has been configured in a
     * dedicated server configuration JSON file.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    get(name: string): unknown | undefined;
}

/**
 * Represents an entry in the allow list.
 */
export interface AllowListEntry {
    /**
     * @remarks
     * Allows the player onto the server even when the server is at
     * the player limit.
     *
     */
    ignoresPlayerLimit: boolean;
    /**
     * @remarks
     * The player's name.
     *
     */
    name?: string;
    /**
     * @remarks
     * The player's xuid.
     *
     */
    xuid?: string;
}

/**
 * Represents an entry to use with the allow list.
 */
export interface AllowListEntryNameInfo {
    /**
     * @remarks
     * The player's name.
     *
     */
    name?: string;
    /**
     * @remarks
     * The player's xuid.
     *
     */
    xuid?: string;
}

/**
 * Options when transferring a player to a server that supports
 * direct host/port connections.
 */
export interface TransferPlayerIpPortOptions {
    /**
     * @remarks
     * Hostname of the destination server.
     *
     */
    hostname: string;
    /**
     * @remarks
     * Port of the destination server.
     *
     */
    port: number;
}

/**
 * Options when transferring a player to a server that supports
 * NetherNet connections.
 */
export interface TransferPlayerNetherNetOptions {
    /**
     * @remarks
     * NetherNet ID of the destination server.
     *
     */
    netherNetId: string;
}

/**
 * An error that is thrown when the allow list file fails to
 * reload.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class AllowListFileReloadError extends Error {
    private constructor();
}

/**
 * An error which is thrown when modifying the allow list has
 * failed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class AllowListModificationError extends Error {
    private constructor();
}

/**
 * An error which is thrown when attempting to deop a player
 * which cannot have their permissions removed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CannotDeopPlayerError extends Error {
    private constructor();
}

/**
 * An error which is thrown when attempting to kick a player
 * who cannot be kicked.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CannotKickPlayerError extends Error {
    private constructor();
}

/**
 * An error that is thrown when trying to interact with a join
 * event and the player is disconnected.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DisconnectedError extends Error {
    private constructor();
    /**
     * @remarks
     * The id of the player that was disconnected.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly id: string;
}

/**
 * An error that is thrown when level storage save state
 * management are used out of sequence or are repeated in an
 * invalid way.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LevelStorageSaveStateChangeError extends Error {
    private constructor();
}

/**
 * An error which is thrown when attempting to op a player that
 * already has op permissions.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerAlreadyOpError extends Error {
    private constructor();
}

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
export const beforeEvents: AdminBeforeEvents;
/**
 * @remarks
 * A globally available, optional object that contains
 * dedicated-server only apis.
 *
 */
export const dedicatedServer: DedicatedServerUtils | undefined;
/**
 * @remarks
 * A globally available object that returns a list of
 * dedicated-server configured secrets.
 *
 */
export const secrets: ServerSecrets;
/**
 * @remarks
 * A globally available object that returns a list of
 * dedicated-server configured variables.
 *
 */
export const variables: ServerVariables;
