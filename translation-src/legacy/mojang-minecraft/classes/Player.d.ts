/**
 * Represents a player within the world.
 */
export class Player extends Entity {
    /**
     * Dimension that the entity is currently within.
     * @throws This property can throw when used.
     */
    readonly "dimension": Dimension;
    /**
     * Location of the center of the head component of the player.
     * @throws This property can throw when used.
     */
    readonly "headLocation": Location;
    /**
     * Identifier for the player.
     * @throws This property can throw when used.
     */
    readonly "id": string;
    /**
     * True if the player is currently using a sneaking movement.
     */
    "isSneaking": boolean;
    /**
     * Current location of the player.
     * @throws This property can throw when used.
     */
    readonly "location": Location;
    /**
     * Name of the player.
     * @throws This property can throw when used.
     */
    readonly "name": string;
    /**
     * Optional name tag of the player.
     */
    "nameTag": string;
    /**
     * Contains methods for manipulating the on-screen display of a
     * Player.
     */
    readonly "onScreenDisplay": ScreenDisplay;
    /**
     * Main rotation of the entity.
     * @throws This property can throw when used.
     */
    readonly "rotation": XYRotation;
    /**
     * Returns a scoreboard identity that represents this entity.
     * @throws This property can throw when used.
     */
    readonly "scoreboard": ScoreboardIdentity;
    /**
     * Manages the selected slot in the player's hotbar.
     */
    "selectedSlot": number;
    /**
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking. For players, which
     * don't use any AI semantics, this property does not do
     * anything.
     */
    "target": Entity;
    /**
     * Current speed of the player across X, Y, and Z dimensions.
     * @throws This property can throw when used.
     */
    readonly "velocity": Vector;
    /**
     * Vector of the current view of the player.
     * @throws This property can throw when used.
     */
    readonly "viewVector": Vector;
    /**
     * @remarks
     * Adds an effect, like poison, to the entity.
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply.
     * @param amplifier
     * Optional amplification of the effect to apply.
     * @param showParticles
     * @throws This function can throw errors.
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * @remarks
     * Adds a specified tag to an entity.
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * Gets the first block that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromViewVector(options?: BlockRaycastOptions): Block;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     */
    getComponent(componentId: string): IEntityComponent;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents(): IEntityComponent[];
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
     * Returns the effect for the specified EffectType on the
     * entity, or undefined if the effect is not present.
     * @param effectType
     * @returns
     * Effect object for the specified effect, or undefined if the
     * effect is not present.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType): Effect;
    /**
     * @remarks
     * Gets the first entity that intersects with the vector of the
     * view of this entity.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];
    /**
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(itemCategory: string): number;
    /**
     * @remarks
     * Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     * @throws This function can throw errors.
     */
    kill(): void;
    /**
     * @remarks
     * Plays a sound that only this particular player can hear.
     * @param soundID
     * Identifier of the sound to play.
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /**
     * @remarks
     * Removes a specified property.
     * @param identifier
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @remarks
     * Removes a specified tag from an entity.
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * Runs a particular command from the context of this player.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     * @example commands.js
     * ```typescript
     *        player.runCommand("say You got a new high score!");
     *        player.runCommand("scoreboard players set @s score 10");
     *
     * ```
     */
    runCommand(commandString: string): any;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity. Where possible, running a command
     * asynchronously is recommended, especially for long running
     * operations.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
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
     * Sets the main rotation of the entity.
     * @param degreesX
     * @param degreesY
     * @throws This function can throw errors.
     */
    setRotation(degreesX: number, degreesY: number): void;
    /**
     * @remarks
     * Sets a velocity for the entity to move with.
     * @param velocity
     * X/Y/Z components of the velocity.
     * @throws This function can throw errors.
     */
    setVelocity(velocity: Vector3): void;
    /**
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * @throws This function can throw errors.
     */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    /**
     * @remarks
     * Teleports the selected player to a new location
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param xRotation
     * X rotation of the player after teleportation.
     * @param yRotation
     * Y rotation of the player after teleportation.
     * @param keepVelocity
     * @throws This function can throw errors.
     */
    teleport(
        location: Vector3,
        dimension: Dimension,
        xRotation: number,
        yRotation: number,
        keepVelocity?: boolean,
    ): void;
    /**
     * @remarks
     * Teleports the selected player to a new location, and will
     * have the player facing a specified location.
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param facingLocation
     * Location that this player will be facing.
     * @param keepVelocity
     * @throws This function can throw errors.
     */
    teleportFacing(location: Vector3, dimension: Dimension, facingLocation: Vector3, keepVelocity?: boolean): void;
    /**
     * @remarks
     * Sends a message that is displayed on the connected client
     * for this player.
     * @param message
     * @throws This function can throw errors.
     */
    tell(message: RawMessage | string): void;
    /**
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
    protected constructor();
}
