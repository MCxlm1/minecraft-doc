/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
    /**
     * Contains a set of events that are applicable to the entirety
     * of the world.
     */
    readonly "events": Events;
    /**
     * Returns the general global scoreboard that applies to the
     * world.
     */
    readonly "scoreboard": Scoreboard;
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @param dimensionId
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @remarks
     * Returns a property value.
     * @param identifier
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string;
    /**
     * @remarks
     * Returns all players currently in the world.
     * @param options
     * @returns
     * All players currently in the world.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    /**
     * @remarks
     * Plays a particular music track for all players.
     * @param trackID
     * @param musicOptions
     */
    playMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Plays a sound for all players.
     * @param soundID
     * @param soundOptions
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /**
     * @remarks
     * Queues an additional music track for players. If a track is
     * not playing, a music track will play.
     * @param trackID
     * @param musicOptions
     */
    queueMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Removes a specified property.
     * @param identifier
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @remarks
     * Broadcasts a message that is displayed on all connected
     * clients.
     * @param message
     * @throws This function can throw errors.
     */
    say(message: RawMessage | string): void;
    /**
     * @remarks
     * Sets a specified property to a value.
     * @param identifier
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * Stops any music tracks from playing.
     */
    stopMusic(): void;
    protected constructor();
}
