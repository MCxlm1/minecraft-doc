/**
 * 封装世界状态的类——包含一组维度以及 Minecraft 的环境。
 */
export class World {
    private constructor();

    /**
     * @remarks
     * 包含一组适用于整个世界的事件。事件回调以延迟方式调用。事件回调在读写模式下执行。
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly afterEvents: WorldAfterEvents;

    /**
     * @beta
     * @remarks
     * 启用或禁用作弊。
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    allowCheats: boolean;

    /**
     * @remarks
     * 包含一组适用于整个世界的事件。事件回调立即调用。事件回调在只读模式下执行。
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
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
     * 适用于该世界的游戏规则。
     *
     */
    readonly gameRules: GameRules;

    readonly isHardcore: boolean;

    /**
     * @remarks
     * 用于在世界中添加和移除基本文本对象的管理器。
     *
     */
    readonly primitiveShapesManager: PrimitiveShapesManager;

    /**
     * @remarks
     * 返回适用于该世界的全局记分板。
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
     * @rc
     * @remarks
     * 提供对为该世界加载的声音定义的只读访问。
     *
     */
    readonly soundDefinitionRegistry: SoundDefinitionRegistry;

    /**
     * @remarks
     * 返回与 {@link Structure} 相关 API 的管理器。
     *
     */
    readonly structureManager: StructureManager;

    /**
     * @remarks
     * 用于添加、移除和查询包专属常加载区域的管理器。
     *
     */
    readonly tickingAreaManager: TickingAreaManager;

    /**
     * @beta
     * @remarks
     * 一个仅供内部使用的方法，用于在客户端与服务器之间广播特定消息。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param id
     * 消息标识符。
     * @param value
     * 消息内容。
     */
    broadcastClientMessage(id: string, value: string): void;

    /**
     * @remarks
     * 清除此行为包在该世界中声明的所有动态属性。
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
     * 返回可在世界中使用的瞄准辅助预设与类别。
     *
     * @returns
     * 瞄准辅助注册表。
     */
    getAimAssist(): AimAssistRegistry;

    /**
     * @remarks
     * 返回世界中所有活动玩家组成的数组。
     *
     * @returns
     * 包含所有活动玩家的数组。
     * @throws
     * 此函数可能抛出错误。
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getAllPlayers(): Player[];

    /**
     * @beta
     * @remarks
     * 根据名称获取世界时钟。
     *
     * @param name
     * 要获取的世界时钟的名称。
     * @returns
     * 具有给定名称的 {@link WorldClock}。
     * @throws
     * WorldClockNotFoundError：如果给定名称的世界时钟不存在。
     *
     * {@link WorldClockNotFoundError}
     */
    getClock(name: string): WorldClock;

    /**
     * @remarks
     * 返回当前的天数。
     *
     * @returns
     * 当前天数，由世界时间除以每天的刻数得出。新世界从第 0 天开始。
     */
    getDay(): number;

    /**
     * @remarks
     * 返回默认的主世界出生点位置。
     *
     * @returns
     * 默认的主世界出生点位置。默认情况下，Y 坐标为 32767，表示玩家的出生高度不固定，将由周围方块决定。
     */
    getDefaultSpawnLocation(): Vector3;

    /**
     * @remarks
     * 获取世界的难度。
     *
     * @returns
     * 返回世界难度。
     */
    getDifficulty(): Difficulty;

    /**
     * @remarks
     * 返回一个维度对象。
     *
     * @param dimensionId
     * 维度的名称。例如 "overworld"、"nether" 或 "the_end"。
     * @returns
     * 所请求的维度。
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
     * 返回该属性的值，如果该属性尚未设置则返回 undefined。
     * @throws
     * 如果给定的动态属性标识符未定义则抛出错误。
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
     * 获取已在该世界中设置的一组动态属性标识符。
     *
     * @returns
     * 由活动动态属性标识符组成的字符串数组。
     */
    getDynamicPropertyIds(): string[];

    /**
     * @remarks
     * 获取动态属性的总字节数。这可用于你自己的分析，以确保你没有存储体量过大的动态属性集合。
     *
     * @returns
     * 动态属性的总字节数。
     */
    getDynamicPropertyTotalByteCount(): number;

    /**
     * @remarks
     * 根据提供的 id 返回一个实体。
     *
     * @param id
     * 实体的 id。
     * @returns
     * 所请求的实体对象。
     * @throws
     * 如果给定的实体 id 无效则抛出错误。
     */
    getEntity(id: string): Entity | undefined;

    /**
     * @remarks
     * 返回一个能够从多种来源生成战利品的管理器。
     *
     * @returns
     * 具有多种战利品生成方法的战利品表管理器。
     */
    getLootTableManager(): LootTableManager;

    /**
     * @remarks
     * 返回当前时间对应的月相。
     *
     * @returns
     * 当前时间的月相。
     */
    getMoonPhase(): MoonPhase;

    /**
     * @remarks
     * 返回由包设置名称与值组成的映射。
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @returns
     * 包设置名称与值的键值对映射。
     */
    getPackSettings(): Record<string, string[] | boolean | number | string>;

    /**
     * @remarks
     * 根据通过 EntityQueryOptions 筛选条件集定义的一组条件，返回一组玩家。
     *
     * @param options
     * 可用于筛选返回的玩家集合的附加选项。
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
     * 一天中的时间，以刻为单位，介于 0 到 24000 之间。
     */
    getTimeOfDay(): number;

    /**
     * @remarks
     * 为所有玩家播放指定的音乐曲目。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param trackId
     * 要播放的音乐曲目标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws
     * 当 volume 小于 0.0 时抛出错误。
     * 当 fade 小于 0.0 时抛出错误。
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
     * 为玩家额外排队一首音乐曲目。如果当前没有曲目正在播放，则会播放一首音乐曲目。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param trackId
     * 要播放的音乐曲目标识符。
     * @param musicOptions
     * 音乐曲目的附加选项。
     * @throws
     * 当 volume 小于 0.0 时抛出错误。
     * 当 fade 小于 0.0 时抛出错误。
     *
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;

    /**
     * @remarks
     * 向所有玩家发送消息。
     *
     * @param message
     * 要显示的消息。
     * @throws
     * 如果提供的 {@link RawMessage} 格式无效，此方法可能抛出错误。例如，为 `score` 提供了空的 `name` 字符串时。
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;

    /**
     * @remarks
     * 设置世界时间。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param absoluteTime
     * 世界时间，以刻为单位。
     */
    setAbsoluteTime(absoluteTime: number): void;

    /**
     * @remarks
     * 为所有玩家设置默认出生点位置。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param spawnLocation
     * 出生点的位置。注意，该位置默认应位于主世界维度内。
     * @throws
     * 当提供的出生点位置超出边界时抛出错误。
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
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param difficulty
     * 要将世界设置为的难度。
     */
    setDifficulty(difficulty: Difficulty): void;

    /**
     * @remarks
     * 将多个动态属性设置为指定值。
     *
     * @param values
     * 要设置的动态属性键值对 Record。如果数据值为 null，则会改为移除该属性。
     * @throws
     * 当键或值超出允许范围时抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3 | undefined>): void;

    /**
     * @remarks
     * 将指定属性设置为一个值。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性数据值。如果该值为 null，则会改为移除该属性。
     * @throws
     * 当给定的动态属性标识符未定义时抛出错误。
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
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @param timeOfDay
     * 一天中的时间，以刻为单位，范围为 0 到 24000。
     * @throws
     * 当提供的一天中的时间不在有效范围内时抛出错误。
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;

    /**
     * @remarks
     * 停止播放任何音乐曲目。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     */
    stopMusic(): void;

}