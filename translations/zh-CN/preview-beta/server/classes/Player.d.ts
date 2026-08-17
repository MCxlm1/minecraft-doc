/**
 * 表示世界中的玩家。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();

    /**
     * @remarks
     * 玩家的相机。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly camera: Camera;

    /**
     * @beta
     * @remarks
     * 玩家的聊天显示名称，由 {@link
     * Player.chatNamePrefix} + {@link Player.name} + {@link
     * Player.chatNameSuffix} 组成。这是该玩家发送的聊天消息中
     * 显示的作者名称。要更改玩家头顶显示的名称，
     * 请使用 {@link Entity.nameTag}。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly chatDisplayName: string;

    /**
     * @beta
     * @remarks
     * 一个可选字符串，设置后会添加到该玩家发送的聊天消息文本之前。
     * 可用于对玩家的消息应用格式或颜色代码（例如，'§a' 使消息变为绿色）。
     * 不影响玩家的名称显示 - 若要修改聊天中显示的名称，请使用 {@link
     * Player.chatNamePrefix}；若要修改玩家头顶的名称，请使用 {@link Entity.nameTag}。
     * 设置为 undefined 以清除。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    chatMessagePrefix?: string;

    /**
     * @beta
     * @remarks
     * 一个可选字符串，设置后会添加到玩家在聊天消息中的名称之前。
     * 不影响玩家头顶的名称标签或玩家列表 - 若要修改这些，请使用 {@link
     * Entity.nameTag}。若要为消息文本本身添加前缀，请使用 {@link
     * Player.chatMessagePrefix}。设置为 undefined 以清除。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    chatNamePrefix?: string;

    /**
     * @beta
     * @remarks
     * 一个可选字符串，设置后会附加到玩家在聊天消息中的名称之后。
     * 不影响玩家头顶的名称标签或玩家列表 - 若要修改这些，请使用 {@link
     * Entity.nameTag}。另请参阅 {@link Player.chatNamePrefix}。
     * 设置为 undefined 以清除。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    chatNameSuffix?: string;

    /**
     * @remarks
     * 包含玩家的设备信息。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly clientSystemInfo: ClientSystemInfo;

    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    commandPermissionLevel: CommandPermissionLevel;

    /**
     * @beta
     * @remarks
     * 包含用于操作玩家渲染距离雾设置的方法。
     *
     */
    readonly fogSettings: FogSettings;

    /**
     * @remarks
     * 获取玩家客户端的当前图形模式。该模式可在设置菜单的视频部分更改，
     * 具体取决于可用的硬件。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly graphicsMode: GraphicsMode;

    /**
     * @remarks
     * 包含玩家的输入信息。
     *
     */
    readonly inputInfo: InputInfo;

    /**
     * @remarks
     * 玩家的输入权限。
     *
     */
    readonly inputPermissions: PlayerInputPermissions;

    /**
     * @remarks
     * 如果为 true，表示玩家当前正在做表情。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isEmoting: boolean;

    /**
     * @remarks
     * 玩家是否在飞行。例如，在创造模式或旁观者模式中。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isFlying: boolean;

    /**
     * @remarks
     * 玩家是否正在使用鞘翅滑翔。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isGliding: boolean;

    /**
     * @remarks
     * 玩家是否正在跳跃。当玩家按住跳跃动作时，此值将保持为 true。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly isJumping: boolean;

    /**
     * @remarks
     * 玩家当前的总等级，基于其经验。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly level: number;

    /**
     * @remarks
     * 玩家的定位器栏。此属性用于管理 HUD 上显示的路标点。
     *
     */
    readonly locatorBar: LocatorBar;

    /**
     * @remarks
     * 玩家的名称。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly name: string;

    /**
     * @remarks
     * 包含用于操作玩家屏幕显示的方法。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly onScreenDisplay: ScreenDisplay;

    /**
     * @beta
     * @remarks
     * 一个可用于跨会话识别玩家的标识符。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly persistentId: string;

    /**
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly playerPermissionLevel: PlayerPermissionLevel;

    /**
     * @remarks
     * This property can't be edited in restricted-execution mode.
     *
     */
    selectedSlotIndex: number;

    /**
     * @remarks
     * 玩家达到下一等级所需的总经验值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly totalXpNeededForNextLevel: number;

    /**
     * @remarks
     * 玩家在当前等级已获得的经验值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly xpEarnedAtCurrentLevel: number;

    /**
     * @remarks
     * 向玩家添加/移除经验，并返回玩家当前的经验值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param amount
     * 要添加的经验量。注意可以为负数。
     * 最小/最大边界为 -2^24 ~ 2^24
     * 边界：[-16777216, 16777216]
     * @returns
     * 返回玩家当前的经验值。
     * @throws 此函数可能抛出错误。
     */
    addExperience(amount: number): number;

    /**
     * @remarks
     * 向玩家添加/移除等级，并返回玩家当前的等级。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param amount
     * 要添加到玩家的量。最小/最大边界为 -2^24 ~ 2^24
     * 边界：[-16777216, 16777216]
     * @returns
     * 返回玩家当前的等级。
     * @throws 此函数可能抛出错误。
     */
    addLevels(amount: number): number;

    /**
     * @remarks
     * 对于该玩家，移除目标实体上所有实体属性覆盖。此更改将在下一 tick 生效，
     * 并且不会应用于其他玩家。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targetEntity
     * 要清除实体属性覆盖的实体或实体 ID。
     * @throws
     * 如果实体或实体 ID 无效，则抛出异常。
     */
    clearPropertyOverridesForEntity(targetEntity: Entity | string): void;

    /**
     * @beta
     * @remarks
     * 吃一个物品，向玩家提供该物品的饥饿度和饱和度效果。只能用于食物物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param itemStack
     * 要吃的物品。
     * @throws
     * 如果该物品不是食物，则抛出异常。
     */
    eatItem(itemStack: ItemStack): void;

    /**
     * @remarks
     * 玩家的瞄准辅助设置。
     *
     * @returns 玩家的瞄准辅助设置。
     */
    getAimAssist(): PlayerAimAssist;

    /**
     * @remarks
     * 返回玩家当前的操作模式（控制方案）。
     *
     * @returns 玩家当前的控制方案。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getControlScheme(): ControlScheme;

    /**
     * @remarks
     * 获取该玩家的当前游戏模式（如果已指定）。
     *
     * @returns 该玩家的当前游戏模式。
     * @throws 此函数可能抛出错误。
     */
    getGameMode(): GameMode;

    /**
     * @remarks
     * 获取特定冷却类别的当前物品冷却时间。
     *
     * @param cooldownCategory
     * 指定要获取当前冷却时间的冷却类别。
     * @returns 该冷却类别的当前冷却时间。
     * @throws 此函数可能抛出错误。
     */
    getItemCooldown(cooldownCategory: string): number;

    /**
     * @beta
     * @remarks
     * 获取玩家的延迟（以毫秒为单位）。
     *
     * @returns
     * 玩家的延迟（以毫秒为单位）。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getPing(): number;

    /**
     * @remarks
     * 获取玩家当前的出生点。
     *
     * @returns 玩家当前的出生点，如果未设置则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getSpawnPoint(): DimensionLocation | undefined;

    /**
     * @beta
     * @remarks
     * 返回玩家的分屏槽位。
     *
     * @returns
     * 玩家的分屏槽位，如果玩家不在分屏会话中则返回 undefined。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getSplitScreenSlot(): PlayerSplitScreenSlot | undefined;

    /**
     * @remarks
     *  获取玩家的总经验值。
     *
     * @throws 此函数可能抛出错误。
     */
    getTotalXp(): number;

    /**
     * @remarks
     * 播放只有该特定玩家能听到的音乐曲目。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param trackId
     * 要播放的音乐曲目的标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws 此函数可能抛出错误。
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;

    /**
     * @remarks
     * 播放只有该特定玩家能听到的声音。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param soundId
     * 要播放的声音的标识符或声音定义。
     * @param soundOptions
     * 声音的附加可选选项。
     * @returns
     * 返回播放的声音实例。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     * @example playMusicAndSound.ts
     * ```typescript
     * import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, DimensionLocation } from '@minecraft/server';
     *
     * function playMusicAndSound(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   const musicOptions: MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   world.playMusic('music.menu', musicOptions);
     *
     *   const worldSoundOptions: WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   world.playSound('ambient.weather.thunder', targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound('bucket.fill_water', playerSoundOptions);
     * }
     * ```
     */
    playSound(soundId: SoundDefinition | string, soundOptions?: PlayerSoundOptions): SoundInstance;

/**
     * @beta
     * @remarks
     * 这是一个面向内部的方法，用于向下游客户端发送系统消息。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能会抛出错误。
     */
    postClientMessage(id: string, value: string): void;

    /**
     * @remarks
     * 排队一首额外的音乐曲目，仅此特定玩家可以听到。如果当前没有曲目播放，则会播放一首音乐曲目。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param trackId
     * 要播放的音乐曲目的标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws
     * 如果音量小于0.0，则会抛出错误。
     * 如果淡入淡出小于0.0，则会抛出错误。
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;

    /**
     * @remarks
     * 对于此玩家，移除对实体属性的覆盖。此更改直到下一个刻才会应用，并且不会应用于其他玩家。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param targetEntity
     * 要移除其实体属性覆盖的实体。
     * @param identifier
     * 实体属性标识符。
     * @throws
     * 如果实体无效，则抛出。
     * 如果提供了无效的标识符，则抛出。
     * 如果提供的值类型与属性类型不匹配，则抛出。
     */
    removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void;

    /**
     * @remarks
     * 重置玩家的等级。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能会抛出错误。
     */
    resetLevel(): void;

    /**
     * @remarks
     * 向玩家发送一条消息。
     *
     * @param message
     * 要显示的消息。
     * @throws
     * 如果提供的 {@link RawMessage} 格式无效，此方法可能会抛出。例如，如果向 `score` 提供了空 `name` 字符串。
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @example nestedTranslation.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function nestedTranslation(targetLocation: DimensionLocation) {
     *   // Displays "Apple or Coal"
     *   const rawMessage = {
     *     translate: 'accessibility.list.or.two',
     *     with: { rawtext: [{ translate: 'item.apple.name' }, { translate: 'item.coal.name' }] },
     *   };
     *   world.sendMessage(rawMessage);
     * }
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function scoreWildcard(targetLocation: DimensionLocation) {
     *   // Displays the player's score for objective "obj". Each player will see their own score.
     *   const rawMessage = { score: { name: '*', objective: 'obj' } };
     *   world.sendMessage(rawMessage);
     * }
     * ```
     * @example sendBasicMessage.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function sendBasicMessage(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].sendMessage('Hello World!');
     * }
     * ```
     * @example sendPlayerMessages.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function sendPlayerMessages(targetLocation: DimensionLocation) {
     *   for (const player of world.getAllPlayers()) {
     *     // Displays "First or Second"
     *     const rawMessage = { translate: 'accessibility.list.or.two', with: ['First', 'Second'] };
     *     player.sendMessage(rawMessage);
     *
     *     // Displays "Hello, world!"
     *     player.sendMessage('Hello, world!');
     *
     *     // Displays "Welcome, Amazing Player 1!"
     *     player.sendMessage({ translate: 'authentication.welcome', with: ['Amazing Player 1'] });
     *
     *     // Displays the player's score for objective "obj". Each player will see their own score.
     *     const rawMessageWithScore = { score: { name: '*', objective: 'obj' } };
     *     player.sendMessage(rawMessageWithScore);
     *
     *     // Displays "Apple or Coal"
     *     const rawMessageWithNestedTranslations = {
     *       translate: 'accessibility.list.or.two',
     *       with: { rawtext: [{ translate: 'item.apple.name' }, { translate: 'item.coal.name' }] },
     *     };
     *     player.sendMessage(rawMessageWithNestedTranslations);
     *   }
     * }
     * ```
     * @example sendTranslatedMessage.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function sendTranslatedMessage(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].sendMessage({ translate: 'authentication.welcome', with: ['Amazing Player 1'] });
     * }
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;

    /**
     * @remarks
     * 设置玩家的控制方案。玩家的活动相机预设必须通过脚本（如 camera.setCamera()）或命令设置。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param controlScheme
     * 控制方案类型。如果此参数未定义，此方法将清除玩家的控制方案，恢复为玩家相机的默认控制方案。
     * @returns
     * 如果控制方案成功添加或更新，则返回空。如果玩家的当前相机不允许该控制方案，则可能抛出 InvalidArgumentError。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setControlScheme(controlScheme?: ControlScheme): void;

    /**
     * @remarks
     * 为此玩家设置游戏模式覆盖。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param gameMode
     * 活动的游戏模式。
     * @throws 此函数可能会抛出错误。
     */
    setGameMode(gameMode?: GameMode): void;

    /**
     * @remarks
     * 对于此玩家，覆盖目标实体上的实体属性为提供的值。此属性必须为客户端同步。此更改直到下一个刻才会应用，并且不会应用于其他玩家。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param targetEntity
     * 要被覆盖实体属性的实体。
     * @param identifier
     * 实体属性标识符。
     * @param value
     * 覆盖值。提供的类型必须与实体定义中指定的类型兼容。
     * @throws
     * 如果实体无效，则抛出。
     * 如果提供了无效的标识符，则抛出。
     * 如果提供的值类型与属性类型不匹配，则抛出。
     * 如果提供的值超出预期范围（整数、浮点数属性），则抛出。
     * 如果提供的字符串值与接受的枚举值集合不匹配（枚举属性），则抛出。
     */
    setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void;

    /**
     * @remarks
     * 设置此特定玩家的当前起始重生点。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能会抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;

    /**
     * @remarks
     * 在世界中指定位置创建一个新的粒子发射器。仅对目标玩家可见。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param effectName
     * 要创建的粒子的标识符。
     * @param location
     * 创建粒子发射器的位置。
     * @param molangVariables
     * 一组可选的、可自定义的变量，可以为此粒子调整。
     * @throws 此函数可能会抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example spawnParticle.ts
     * ```typescript
     * import { world, MolangVariableMap, Vector3 } from '@minecraft/server';
     *
     * world.afterEvents.playerSpawn.subscribe(event => {
     *   const targetLocation = event.player.location;
     *   for (let i = 0; i < 100; i++) {
     *     const molang = new MolangVariableMap();
     *
     *     molang.setColorRGB('variable.color', {
     *       red: Math.random(),
     *       green: Math.random(),
     *       blue: Math.random(),
     *     });
     *
     *     const newLocation: Vector3 = {
     *       x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
     *       y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
     *       z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
     *     };
     *     event.player.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
     *   }
     * });
     * ```
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;

    /**
     * @remarks
     * 设置特定冷却类别的物品冷却时间。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param cooldownCategory
     * 指定要获取当前冷却时间的冷却类别。
     * @param tickDuration
     * 物品冷却的持续时间（以刻为单位）。范围：[0, 32767]
     * @throws 此函数可能会抛出错误。
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;

    /**
     * @beta
     * @remarks
     * 停止所有正在为此特定玩家播放的声音。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    stopAllSounds(): void;

    /**
     * @remarks
     * 停止所有正在为此特定玩家播放的音乐曲目。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能会抛出错误。
     */
    stopMusic(): void;

    /**
     * @beta
     * @remarks
     * 停止为此特定玩家播放的声音。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param soundId
     * 声音的标识符。
     * @throws 此函数可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    stopSound(soundId: string): void;

}