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
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly camera: Camera;
    /**
     * @beta
     * @remarks
     * 玩家的聊天显示名称，由 {@link Player.chatNamePrefix} + {@link Player.name} + {@link Player.chatNameSuffix} 组成。这是显示为该玩家发送的聊天消息作者的名字。要更改玩家头顶显示的名称，请使用 {@link Entity.nameTag}。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly chatDisplayName: string;
    /**
     * @beta
     * @remarks
     * 一个可选字符串，设置后，会附加到该玩家发送的聊天消息文本之前。可用于对消息应用格式或颜色代码（例如，'§a' 使消息变绿）。不影响玩家的名称显示——使用 {@link Player.chatNamePrefix} 更改聊天中显示的名称，或使用 {@link Entity.nameTag} 更改头顶显示的名称。设置为 undefined 以清除。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    chatMessagePrefix?: string;
    /**
     * @beta
     * @remarks
     * 一个可选字符串，设置后，会附加到该玩家在聊天消息中的名称之前。不影响玩家头顶的名称标签或玩家列表——使用 {@link Entity.nameTag} 来实现。要为消息文本本身添加前缀，请使用 {@link Player.chatMessagePrefix}。设置为 undefined 以清除。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    chatNamePrefix?: string;
    /**
     * @beta
     * @remarks
     * 一个可选字符串，设置后，会附加到该玩家在聊天消息中的名称之后。不影响玩家头顶的名称标签或玩家列表——使用 {@link Entity.nameTag} 来实现。另请参阅 {@link Player.chatNamePrefix}。设置为 undefined 以清除。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    chatNameSuffix?: string;
    /**
     * @remarks
     * 包含玩家的设备信息。
     *
     * @throws 此属性在使用时可能抛出错误。
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
     * 获取玩家客户端当前的图形模式。可在设置菜单的视频部分根据可用硬件进行更改。
     *
     * @throws 此属性在使用时可能抛出错误。
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
     * 如果为 true，则玩家当前正在做表情。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isEmoting: boolean;
    /**
     * @remarks
     * 玩家是否在飞行。例如，在创造或旁观模式中。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isFlying: boolean;
    /**
     * @remarks
     * 玩家是否在使用鞘翅滑翔。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isGliding: boolean;
    /**
     * @remarks
     * 玩家是否在跳跃。当玩家按住跳跃动作时，此属性保持为 true。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isJumping: boolean;
    /**
     * @remarks
     * 玩家当前的总等级，基于其经验值。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly level: number;
    /**
     * @remarks
     * 玩家的定位器栏。此属性用于管理 HUD 上显示的路点。
     *
     */
    readonly locatorBar: LocatorBar;
    /**
     * @remarks
     * 玩家的名称。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly name: string;
    /**
     * @remarks
     * 包含用于操作玩家屏幕显示的方法。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @beta
     * @remarks
     * 可用于在会话间识别玩家的标识符。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly persistentId: string;
    /**
     * @throws 此属性在使用时可能抛出错误。
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
     * 玩家升到下一级所需的总经验值。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @remarks
     * 玩家在当前等级已获得的经验值。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks
     * 向玩家添加/移除经验，并返回玩家当前的经验值。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param amount
     * 要添加的经验量。注意可以是负数。最小/最大边界为 -2^24 ~ 2^24
     * 范围：[-16777216, 16777216]
     * @returns
     * 返回玩家当前的经验值。
     * @throws 此函数可能抛出错误。
     */
    addExperience(amount: number): number;
    /**
     * @remarks
     * 向玩家添加/移除等级，并返回玩家当前等级。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param amount
     * 要添加的等级量。最小/最大边界为 -2^24 ~ 2^24
     * 范围：[-16777216, 16777216]
     * @returns
     * 返回玩家当前等级。
     * @throws 此函数可能抛出错误。
     */
    addLevels(amount: number): number;
    /**
     * @remarks
     * 对于此玩家，移除目标实体上所有实体属性的覆盖。此更改将在下一个 tick 应用，并且不会影响其他玩家。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param targetEntity
     * 要清除实体属性覆盖的实体或实体 ID。
     * @throws
     * 如果实体或实体 ID 无效，则抛出错误。
     */
    clearPropertyOverridesForEntity(targetEntity: Entity | string): void;
    /**
     * @beta
     * @remarks
     * 吃一个物品，为玩家提供该物品的饥饿与饱和度效果。仅能用于食物物品。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param itemStack
     * 要吃的物品。
     * @throws
     * 如果物品不是食物，则抛出错误。
     */
    eatItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * 获取玩家的瞄准辅助设置。
     *
     * @returns
     * 玩家的瞄准辅助设置。
     */
    getAimAssist(): PlayerAimAssist;
    /**
     * @remarks
     * 返回玩家当前的控制方案。
     *
     * @returns
     * 玩家当前的控制方案。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getControlScheme(): ControlScheme;
    /**
     * @remarks
     * 获取此玩家的活跃游戏模式（如果已指定）。
     *
     * @returns
     * 玩家的游戏模式。
     * @throws 此函数可能抛出错误。
     */
    getGameMode(): GameMode;
    /**
     * @remarks
     * 获取特定冷却类别的当前物品冷却时间。
     *
     * @param cooldownCategory
     * 指定要获取当前冷却时间的冷却类别。
     * @returns
     * 当前冷却时间（数字）。
     * @throws 此函数可能抛出错误。
     */
    getItemCooldown(cooldownCategory: string): number;
    /**
     * @beta
     * @remarks
     * 获取玩家的延迟（毫秒）。
     *
     * @returns
     * 玩家的延迟（毫秒）。
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
     * @returns
     * 玩家的出生点，如果未设置则返回 undefined。
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
     * 获取玩家的总经验值。
     *
     * @returns
     * 玩家的总经验值。
     * @throws 此函数可能抛出错误。
     */
    getTotalXp(): number;
    /**
     * @remarks
     * 播放只有该特定玩家可以听到的音乐曲目。
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
     * 播放只有该特定玩家可以听到的声音。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param soundId
     * 要播放的声音的标识符或定义。
     * @param soundOptions
     * 声音的附加可选选项。
     * @returns
     * 声音实例。
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
}

postClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * 排队播放一首额外的音乐曲目，仅该玩家可以听到。如果当前没有曲目在播放，则会播放一首音乐曲目。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param trackId
     * 要播放的音乐曲目的标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws
     * 如果音量小于 0.0，将抛出错误。
     * 如果淡入淡出值小于 0.0，将抛出错误。
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 移除该玩家对某个实体属性（Entity Property）的覆盖。此更改不会立即生效，而是在下一个游戏刻应用，并且不会影响其他玩家。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param targetEntity
     * 正在移除其实体属性覆盖的实体。
     * @param identifier
     * 实体属性的标识符。
     * @throws
     * 如果实体无效，则抛出错误。
     * 如果提供了无效的标识符，则抛出错误。
     * 如果提供的值类型与属性类型不匹配，则抛出错误。
     */
    removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void;
    /**
     * @remarks
     * 重置玩家的等级。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    resetLevel(): void;
    /**
     * @remarks
     * 向玩家发送一条消息。
     *
     * @param message
     * 要显示的消息。
     * @throws
     * 如果提供的 {@link RawMessage} 格式无效，此方法可能抛出错误。例如，为 `score` 提供了空的 `name` 字符串。
     *
     * 可能抛出 {@link InvalidEntityError} 或 {@link RawMessageError}。
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
     * 设置玩家的控制方案。玩家的当前相机预设必须通过脚本（如 camera.setCamera()）或命令设置。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param controlScheme
     * 控制方案类型。如果此参数为 undefined，此方法将清除玩家的控制方案，恢复为玩家相机的默认控制方案。
     * @returns
     * 如果控制方案成功添加或更新，则不返回任何内容。如果玩家当前相机不允许该控制方案，则可能抛出 InvalidArgumentError。
     * @throws 此函数可能抛出错误。
     *
     * 可能抛出 {@link minecraftcommon.EngineError}、{@link minecraftcommon.InvalidArgumentError} 或 {@link InvalidEntityError}。
     */
    setControlScheme(controlScheme?: ControlScheme): void;
    /**
     * @remarks
     * 为该玩家设置游戏模式覆盖。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param gameMode
     * 要设置的当前游戏模式。
     * @throws 此函数可能抛出错误。
     */
    setGameMode(gameMode?: GameMode): void;
    /**
     * @remarks
     * 为该玩家将目标实体上的某个实体属性（Entity Property）覆盖为指定的值。此属性必须为客户端同步。此更改不会立即生效，而是在下一个游戏刻应用，并且不会影响其他玩家。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param targetEntity
     * 正在覆盖其实体属性的实体。
     * @param identifier
     * 实体属性的标识符。
     * @param value
     * 覆盖值。提供的类型必须与实体定义中指定的类型兼容。
     * @throws
     * 如果实体无效，则抛出错误。
     * 如果提供了无效的标识符，则抛出错误。
     * 如果提供的值类型与属性类型不匹配，则抛出错误。
     * 如果提供的值超出预期范围（int、float 属性），则抛出错误。
     * 如果提供的字符串值与可接受的枚举值集合不匹配（enum 属性），则抛出错误。
     */
    setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * 为该玩家设置当前的出生点。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     *
     * 可能抛出 {@link Error} 或 {@link LocationOutOfWorldBoundariesError}。
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * @remarks
     * 在世界中的指定位置创建一个新的粒子发射器。仅对目标玩家可见。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param effectName
     * 要创建的粒子的标识符。
     * @param location
     * 创建粒子发射器的位置。
     * @param molangVariables
     * 一组可选的、可自定义的变量，可用于调整该粒子。
     * @throws 此函数可能抛出错误。
     *
     * 可能抛出 {@link Error}、{@link LocationInUnloadedChunkError} 或 {@link LocationOutOfWorldBoundariesError}。
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
     * 物品冷却的时长（以游戏刻为单位）。取值范围：[0, 32767]
     * @throws 此函数可能抛出错误。
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /**
     * @beta
     * @remarks
     * 停止为该玩家播放的所有声音。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     *
     * 可能抛出 {@link InvalidEntityError}。
     */
    stopAllSounds(): void;
    /**
     * @remarks
     * 停止为该玩家播放的所有音乐曲目。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    stopMusic(): void;
    /**
     * @beta
     * @remarks
     * 停止为该玩家播放的指定声音。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param soundId
     * 声音的标识符。
     * @throws 此函数可能抛出错误。
     *
     * 可能抛出 {@link InvalidEntityError}。
     */
    stopSound(soundId: string): void;
}