/**
 * 表示世界中的一名玩家。
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
     * 玩家在聊天中显示的名称，由 {@link Player.chatNamePrefix} + {@link Player.name} +
     * {@link Player.chatNameSuffix} 组合而成。此名称会显示为该玩家发送聊天消息的作者名。
     * 若要更改显示在玩家头顶的名称，请使用 {@link Entity.nameTag}。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly chatDisplayName: string;

    /**
     * @beta
     * @remarks
     * 一个可选字符串；设置后会被前置到该玩家发送的聊天消息文本之前。
     * 适用于为玩家消息应用格式或颜色代码（例如使用 '§a' 使消息变为绿色）。
     * 不会影响玩家名称的显示——要修改聊天中显示的名称请使用 {@link Player.chatNamePrefix}，
     * 要修改玩家头顶的名称请使用 {@link Entity.nameTag}。设为 undefined 可清除。
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    chatMessagePrefix?: string;

    /**
     * @beta
     * @remarks
     * 一个可选字符串；设置后会被前置到聊天消息中的玩家名称之前。
     * 不会影响玩家头顶的名称标签或玩家列表——请使用 {@link Entity.nameTag} 修改那些内容。
     * 若要前置消息文本本身，请使用 {@link Player.chatMessagePrefix}。设为 undefined 可清除。
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    chatNamePrefix?: string;

    /**
     * @beta
     * @remarks
     * 一个可选字符串；设置后会被追加到聊天消息中的玩家名称之后。
     * 不会影响玩家头顶的名称标签或玩家列表——请使用 {@link Entity.nameTag} 修改那些内容。
     * 另请参阅 {@link Player.chatNamePrefix}。设为 undefined 可清除。
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
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
     * 玩家的命令权限等级。
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    commandPermissionLevel: CommandPermissionLevel;

    /**
     * @rc
     * @remarks
     * 包含用于操作玩家视距雾设置的方法。
     *
     */
    readonly fogSettings: FogSettings;

    /**
     * @remarks
     * 获取玩家客户端当前的图形模式。该模式可根据可用硬件在设置菜单的“视频”部分中更改。
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
     * 如果为 true，表示玩家当前正在播放表情动作。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isEmoting: boolean;

    /**
     * @remarks
     * 玩家是否正在飞行。例如处于创造模式或旁观模式时。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isFlying: boolean;

    /**
     * @remarks
     * 玩家是否正在使用鞘翅滑翔。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isGliding: boolean;

    /**
     * @remarks
     * 玩家是否正在跳跃。在玩家按住跳跃动作期间，该值会保持为 true。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly isJumping: boolean;

    /**
     * @remarks
     * 玩家基于其经验值获得的当前总等级。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly level: number;

    /**
     * @remarks
     * 玩家的定位条。此属性用于管理显示在 HUD 上的路径点。
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
     * 包含用于操作玩家屏幕显示内容的方法。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly onScreenDisplay: ScreenDisplay;

    /**
     * @beta
     * @remarks
     * 一个可用于跨会话识别玩家的标识符。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly persistentId: string;

    /**
     * @remarks
     * 玩家的权限等级。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly playerPermissionLevel: PlayerPermissionLevel;

    /**
     * @remarks
     * 当前选中的快捷栏槽位索引。
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    selectedSlotIndex: number;

    /**
     * @remarks
     * 玩家升到下一级所需的总体经验值。
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
     * 为玩家增加/移除经验值，并返回玩家当前的经验值。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param amount
     * 要增加的经验值数量。注意此值可以为负数。
     * 最小/最大范围为 -2^24 ~ 2^24
     * Bounds: [-16777216, 16777216]
     * @returns
     * 返回玩家当前的经验值。
     * @throws 此函数可能抛出错误。
     */
    addExperience(amount: number): number;

    /**
     * @remarks
     * 为玩家增加/移除等级，并返回玩家当前的等级。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param amount
     * 要增加到玩家的等级数量。最小/最大范围为 -2^24 ~ 2^24
     * Bounds: [-16777216, 16777216]
     * @returns
     * 返回玩家当前的等级。
     * @throws 此函数可能抛出错误。
     */
    addLevels(amount: number): number;

    /**
     * @remarks
     * 对于此玩家，移除目标实体上所有实体属性的覆盖。此更改直到下一刻才会应用，且不会影响其他玩家。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param targetEntity
     * 要清除其实体属性覆盖的实体或实体 ID。
     * @throws
     * 当实体或实体 ID 无效时抛出。
     */
    clearPropertyOverridesForEntity(targetEntity: Entity | string): void;

    /**
     * @beta
     * @remarks
     * 食用一个物品，将该物品的饥饿值与饱和度效果提供给玩家。只能用于食物物品。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param itemStack
     * 要食用的物品。
     * @throws
     * 当该物品不是食物时抛出。
     */
    eatItem(itemStack: ItemStack): void;

    /**
     * @remarks
     * 玩家的辅助瞄准设置。
     *
     * @returns
     * 玩家的辅助瞄准设置。
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
     * 检索此玩家当前激活的游戏模式（如果已指定）。
     *
     * @returns
     * 玩家当前的游戏模式。
     * @throws 此函数可能抛出错误。
     */
    getGameMode(): GameMode;

    /**
     * @remarks
     * 获取特定冷却类别当前的物品冷却时间。
     *
     * @param cooldownCategory
     * 指定要检索当前冷却时间的冷却类别。
     * @returns
     * 指定冷却类别当前的冷却时间。
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
     * @returns
     * 玩家当前的出生点；如果未设置则为 undefined。
     * @throws 此函数可能抛出错误。
     */
    getSpawnPoint(): DimensionLocation | undefined;

    /**
     * @beta
     * @remarks
     * 返回玩家的分屏槽位。
     *
     * @returns
     * 玩家的分屏槽位；如果玩家不在分屏会话中则为 undefined。
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
     * 播放一首只有该特定玩家能听到的音乐曲目。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param trackId
     * 要播放的音乐曲目标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws 此函数可能抛出错误。
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;

    /**
     * @remarks
     * 播放只有此特定玩家才能听到的声音。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param soundOptions
     * 声音的附加可选选项。
     * @throws
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
     * 这是一个内部方法，用于向下游客户端发布系统消息。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param id
     * 消息标识符。
     * @param value
     * 消息内容。
     */
    postClientMessage(id: string, value: string): void;

    /**
     * @remarks
     * 将一首额外的音乐曲目加入队列，只有此特定玩家才能听到。如果当前没有曲目在播放，则会播放一首音乐曲目。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param trackId
     * 要播放的音乐曲目标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws
     * 当音量小于 0.0 时抛出错误。
     * 当淡入淡出时间小于 0.0 时抛出错误。
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;

    /**
     * @remarks
     * 对于此玩家，移除某个实体属性上的覆盖值。此更改要到下一刻（tick）才会生效，且不会对其他玩家生效。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param targetEntity
     * 要移除其属性覆盖值的实体。
     * @param identifier
     * 实体属性标识符。
     * @throws
     * 当实体无效时抛出错误。
     * 当提供的标识符无效时抛出错误。
     * 当提供的值类型与属性类型不匹配时抛出错误。
     */
    removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void;

    /**
     * @remarks
     * 重置该玩家的等级。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    resetLevel(): void;

    /**
     * @remarks
     * 向该玩家发送一条消息。
     *
     * @param message
     * 要显示的消息。
     * @throws
     * 当提供的 {@link RawMessage} 格式无效时，此方法会抛出错误。例如，向 `score` 提供了空的 `name` 字符串。
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
     * 设置玩家的操控方案。玩家当前生效的摄像机预设必须通过脚本（例如使用 camera.setCamera()）或命令来设置。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param controlScheme
     * 操控方案类型。如果此参数为 undefined，此方法会将玩家的操控方案清除，恢复为该玩家摄像机的默认操控方案。
     * @throws
     * 当玩家当前的摄像机不允许该操控方案时，抛出 InvalidArgumentError。
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
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param gameMode
     * 生效的游戏模式。
     */
    setGameMode(gameMode?: GameMode): void;

    /**
     * @remarks
     * 对于此玩家，将目标实体上的某个实体属性覆盖为提供的值。该属性必须是与客户端同步的。此更改要到下一刻（tick）才会生效，且不会对其他玩家生效。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param targetEntity
     * 要覆盖其实体属性的实体。
     * @param identifier
     * 实体属性标识符。
     * @param value
     * 覆盖值。所提供的类型必须与实体定义中指定的类型兼容。
     * @throws
     * 当实体无效时抛出错误。
     * 当提供的标识符无效时抛出错误。
     * 当提供的值类型与属性类型不匹配时抛出错误。
     * 当提供的值超出预期范围时抛出错误（整型、浮点型属性）。
     * 当提供的字符串值不在可接受的枚举值集合中时抛出错误（枚举属性）。
     */
    setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void;

    /**
     * @remarks
     * 设置此特定玩家当前的初始出生点。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param spawnPoint
     * 要设置的出生点位置（包含维度）。如果未提供，则清除自定义出生点。
     * @throws
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;

    /**
     * @remarks
     * 在世界中的指定位置创建一个新的粒子发射器。仅对目标玩家可见。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param effectName
     * 要创建的粒子的标识符。
     * @param location
     * 创建粒子发射器的位置。
     * @param molangVariables
     * 一组可选的、可自定义的变量，可用于调整该粒子效果。
     * @throws
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
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param cooldownCategory
     * 指定要操作的冷却类别。
     * @param tickDuration
     * 物品冷却的持续时间（以刻为单位）。
     * 取值范围：[0, 32767]
     * @throws 此函数可能抛出错误。
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;

    /**
     * @beta
     * @remarks
     * 停止此玩家正在播放的所有声音。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    stopAllSounds(): void;

    /**
     * @remarks
     * 停止此玩家正在播放的所有音乐曲目。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    stopMusic(): void;

    /**
     * @beta
     * @remarks
     * 停止此玩家正在播放的某个声音。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param soundId
     * 声音的标识符。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    stopSound(soundId: string): void;

}