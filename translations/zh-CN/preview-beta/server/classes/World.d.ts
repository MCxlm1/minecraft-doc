/**
 * 表示世界状态（一组维度与 Minecraft 环境）的类。
 */
export class World {
    private constructor();

    /**
     * @remarks
     * 包含适用于整个世界的一组事件。事件回调以延迟方式调用。事件回调在读写模式下执行。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly afterEvents: WorldAfterEvents;

    /**
     * @beta
     * @remarks
     * 启用或禁用作弊。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    allowCheats: boolean;

    /**
     * @remarks
     * 包含适用于整个世界的一组事件。事件回调会立即调用。事件回调在只读模式下执行。
     *
     * This property can be read in early-execution mode.
     *
     * @example customCommand.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function customCommand(targetLocation: DimensionLocation) {
     *   const chatCallback = world.beforeEvents.chatSend.subscribe(eventData => {
     *     if (eventData.message.includes('cancel')) {
     *       // Cancel event if the message contains "cancel"
     *       eventData.cancel = true;
     *     } else {
     *       const args = eventData.message.split(' ');
     *
     *       if (args.length > 0) {
     *         switch (args[0].toLowerCase()) {
     *           case 'echo':
     *             // Send a modified version of chat message
     *             world.sendMessage(`Echo '${eventData.message.substring(4).trim()}'`);
     *             break;
     *           case 'help':
     *             world.sendMessage(`Available commands: echo <message>`);
     *             break;
     *         }
     *       }
     *     }
     *   });
     * }
     * ```
     */
    readonly beforeEvents: WorldBeforeEvents;

    /**
     * @remarks
     * 适用于世界的游戏规则。
     *
     */
    readonly gameRules: GameRules;

    readonly isHardcore: boolean;

    /**
     * @remarks
     * 用于在世界中添加和移除基础文本对象的管理器。
     *
     */
    readonly primitiveShapesManager: PrimitiveShapesManager;

    /**
     * @remarks
     * 返回适用于世界的通用全局记分板。
     *
     */
    readonly scoreboard: Scoreboard;

    /**
     * @remarks
     * 世界种子。
     *
     */
    readonly seed: string;

    /**
     * @beta
     * @remarks
     * 提供对本次世界加载的声音定义的只读访问。
     *
     */
    readonly soundDefinitionRegistry: SoundDefinitionRegistry;

    /**
     * @remarks
     * 返回用于 {@link Structure} 相关 API 的管理器。
     *
     */
    readonly structureManager: StructureManager;

    /**
     * @remarks
     * 用于添加、移除和查询特定于包的常加载区域的管理器。
     *
     */
    readonly tickingAreaManager: TickingAreaManager;

    /**
     * @beta
     * @remarks
     * 仅供内部使用的方法，用于在客户端与服务器之间广播特定消息。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param id
     * 消息标识符。
     * @param value
     * 消息内容。
     */
    broadcastClientMessage(id: string, value: string): void;

    /**
     * @remarks
     * 清除世界内为此行为包声明的一组动态属性。
     *
     */
    clearDynamicProperties(): void;

    /**
     * @remarks
     * 返回自世界开始以来的绝对时间。
     *
     * @returns
     * 自世界开始以来的绝对时间。
     */
    getAbsoluteTime(): number;

    /**
     * @remarks
     * 可以在世界中使用的瞄准辅助预设和类别。
     *
     * @returns
     * 可在世界中使用的瞄准辅助注册表。
     */
    getAimAssist(): AimAssistRegistry;

    /**
     * @remarks
     * 返回世界中所有活跃玩家的数组。
     *
     * @returns
     * 世界中所有活跃玩家的数组。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getAllPlayers(): Player[];

    /**
     * @remarks
     * 返回当前天数。
     *
     * @returns
     * 当前天数，由世界时间除以每天的游戏刻数确定。新世界从第 0 天开始。
     */
    getDay(): number;

    /**
     * @remarks
     * 返回默认的主世界出生点位置。
     *
     * @returns
     * 默认的主世界出生点位置。默认情况下，Y 坐标为 32767，表示玩家的出生高度不固定，而是由周围方块决定。
     */
    getDefaultSpawnLocation(): Vector3;

    /**
     * @remarks
     * 获取世界的难度。
     *
     * @returns
     * 返回世界的难度。
     */
    getDifficulty(): Difficulty;

    /**
     * @remarks
     * 返回一个维度对象。
     *
     * @param dimensionId
     * 维度名称。例如 "overworld"、"nether" 或 "the_end"。
     * @returns
     * 请求的维度。
     * @throws
     * 如果给定的维度名称无效则抛出错误。
     */
    getDimension(dimensionId: string): Dimension;

    /**
     * @remarks
     * 返回一个属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回属性的值；如果该属性尚未设置，则返回 undefined。
     * @throws
     * 如果给定的动态属性标识符未定义，则抛出错误。
     * @example incrementDynamicProperty.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function incrementDynamicProperty(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   let number = world.getDynamicProperty('samplelibrary:number');
     *
     *   log('Current value is: ' + number);
     *
     *   if (number === undefined) {
     *     number = 0;
     *   }
     *
     *   if (typeof number !== 'number') {
     *     log('Number is of an unexpected type.');
     *     return -1;
     *   }
     *
     *   world.setDynamicProperty('samplelibrary:number', number + 1);
     * }
     * ```
     * @example incrementDynamicPropertyInJsonBlob.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function incrementDynamicPropertyInJsonBlob(
     *   log: (message: string, status?: number) => void,
     *   targetLocation: DimensionLocation
     * ) {
     *   let paintStr = world.getDynamicProperty('samplelibrary:longerjson');
     *   let paint: { color: string; intensity: number } | undefined = undefined;
     *
     *   log('Current value is: ' + paintStr);
     *
     *   if (paintStr === undefined) {
     *     paint = {
     *       color: 'purple',
     *       intensity: 0,
     *     };
     *   } else {
     *     if (typeof paintStr !== 'string') {
     *       log('Paint is of an unexpected type.');
     *       return -1;
     *     }
     *
     *     try {
     *       paint = JSON.parse(paintStr);
     *     } catch (e) {
     *       log('Error parsing serialized struct.');
     *       return -1;
     *     }
     *   }
     *
     *   if (!paint) {
     *     log('Error parsing serialized struct.');
     *     return -1;
     *   }
     *
     *   paint.intensity++;
     *   paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
     *   world.setDynamicProperty('samplelibrary:longerjson', paintStr);
     * }
     * ```
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;

    /**
     * @remarks
     * 获取已在世界中设置的一组动态属性标识符。
     *
     * @returns
     * 活动动态属性标识符的字符串数组。
     */
    getDynamicPropertyIds(): string[];

    /**
     * @remarks
     * 获取动态属性的总字节数。该值可用于你自己的分析，以确保不会存储过大的动态属性集合。
     *
     * @returns
     * 动态属性的总字节数。
     */
    getDynamicPropertyTotalByteCount(): number;

    /**
     * @remarks
     * 根据提供的 id 返回实体。
     *
     * @param id
     * 实体的 id。
     * @returns
     * 请求的实体对象；若未找到则返回 undefined。
     * @throws
     * 如果给定的实体 id 无效则抛出错误。
     */
    getEntity(id: string): Entity | undefined;

    /**
     * @remarks
     * 返回一个能够从多种来源生成战利品的管理器。
     *
     * @returns
     * 一个具有多种战利品生成方法的战利品表管理器。
     */
    getLootTableManager(): LootTableManager;

    /**
     * @remarks
     * 返回当前时间的月相。
     *
     * @returns
     * 当前时间的月相。
     */
    getMoonPhase(): MoonPhase;

    /**
     * @remarks
     * 返回包设置名称和值的映射。
     *
     * This function can be called in early-execution mode.
     *
     * @returns
     * 包含包设置名称和值的映射对象。
     */
    getPackSettings(): Record<string, boolean | number | string>;

    /**
     * @remarks
     * 根据 EntityQueryOptions 筛选条件集合返回一组玩家。
     *
     * @param options
     * 可用于筛选返回玩家集合的附加选项。
     * @returns
     * 玩家数组。
     * @throws
     * 如果提供的 EntityQueryOptions 无效则抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];

    /**
     * @remarks
     * 返回一天中的时间。
     *
     * @returns
     * 一天中的时间，以游戏刻为单位，介于 0 和 24000 之间。
     */
    getTimeOfDay(): number;

    /**
     * @remarks
     * 为所有玩家播放特定的音乐曲目。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param trackId
     * 要播放的音乐曲目标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
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
    playMusic(trackId: string, musicOptions?: MusicOptions): void;

    /**
     * @remarks
     * 为玩家排队一首额外的音乐曲目。如果当前没有曲目在播放，则会播放该曲目。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param trackId
     * 要播放的音乐曲目标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws
     * 如果音量小于 0.0，则抛出错误。
     * 如果淡入时间小于 0.0，则抛出错误。
     *
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;

/**
     * @remarks
     * 向所有玩家发送一条消息。
     *
     * @param message
     * 要显示的消息。
     * @throws
     * 如果提供的 {@link RawMessage} 格式无效，
     * 此方法可能抛出错误。
     * 例如，为 `score` 提供了空的 `name` 字符串。
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;

    /**
     * @remarks
     * 设置世界时间。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param absoluteTime
     * 世界时间，以刻为单位。
     */
    setAbsoluteTime(absoluteTime: number): void;

    /**
     * @remarks
     * 设置所有玩家的默认出生点位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param spawnLocation
     * 出生点的位置。注意，假定此位置
     * 位于主世界维度内。
     * @throws
     * 如果提供的出生点位置超出边界，则抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;

    /**
     * @remarks
     * 设置世界难度。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param difficulty
     * 我们要设置的世界难度。
     */
    setDifficulty(difficulty: Difficulty): void;

    /**
     * @remarks
     * 设置多个具有特定值的动态属性。
     *
     * @param values
     * 要设置的动态属性的键值对记录。
     * 如果数据值为 null，则会移除该属性
     * 而不是设置它。
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;

    /**
     * @remarks
     * 将指定属性设置为某个值。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性的数据值。如果值为 null，则
     * 会移除该属性而不是设置它。
     * @throws
     * 如果给定的动态属性标识符未定义，
     * 则抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     * @example incrementDynamicProperty.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function incrementDynamicProperty(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   let number = world.getDynamicProperty('samplelibrary:number');
     *
     *   log('Current value is: ' + number);
     *
     *   if (number === undefined) {
     *     number = 0;
     *   }
     *
     *   if (typeof number !== 'number') {
     *     log('Number is of an unexpected type.');
     *     return -1;
     *   }
     *
     *   world.setDynamicProperty('samplelibrary:number', number + 1);
     * }
     * ```
     * @example incrementDynamicPropertyInJsonBlob.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function incrementDynamicPropertyInJsonBlob(
     *   log: (message: string, status?: number) => void,
     *   targetLocation: DimensionLocation
     * ) {
     *   let paintStr = world.getDynamicProperty('samplelibrary:longerjson');
     *   let paint: { color: string; intensity: number } | undefined = undefined;
     *
     *   log('Current value is: ' + paintStr);
     *
     *   if (paintStr === undefined) {
     *     paint = {
     *       color: 'purple',
     *       intensity: 0,
     *     };
     *   } else {
     *     if (typeof paintStr !== 'string') {
     *       log('Paint is of an unexpected type.');
     *       return -1;
     *     }
     *
     *     try {
     *       paint = JSON.parse(paintStr);
     *     } catch (e) {
     *       log('Error parsing serialized struct.');
     *       return -1;
     *     }
     *   }
     *
     *   if (!paint) {
     *     log('Error parsing serialized struct.');
     *     return -1;
     *   }
     *
     *   paint.intensity++;
     *   paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
     *   world.setDynamicProperty('samplelibrary:longerjson', paintStr);
     * }
     * ```
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;

    /**
     * @remarks
     * 设置一天中的时间。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param timeOfDay
     * 一天中的时间，以刻为单位，介于 0 到 24000 之间。
     * @throws
     * 如果提供的一天中的时间不在有效范围内，则抛出错误。
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;

    /**
     * @remarks
     * 停止播放任何音乐曲目。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    stopMusic(): void;

}