/**
 * @symbol World
 * @description 世界对象，表示当前 Minecraft 世界的实例。提供访问世界状态、实体、方块等的方法。
 */
export declare class World {
    /**
     * @symbol getDimension
     * @description 获取指定维度的实例。
     * @param id 维度 ID（如 "overworld", "nether", "end"）
     */
    getDimension(id: string): Dimension;

    /**
     * @symbol getPlayers
     * @description 获取当前世界中的所有玩家。
     * @returns 玩家对象数组
     */
    getPlayers(): Player[];

    /**
     * @symbol getEntities
     * @description 获取当前世界中的所有实体。
     * @param options 筛选选项（可选）
     * @returns 实体对象数组
     */
    getEntities(options?: EntityQueryOptions): Entity[];

    /**
     * @symbol spawnEntity
     * @description 在指定位置生成一个实体。
     * @param identifier 实体类型标识符（如 "minecraft:cow"）
     * @param location 生成位置坐标
     * @returns 生成的实体对象
     */
    spawnEntity(identifier: string, location: Location): Entity;

    /**
     * @symbol spawnItem
     * @description 在指定位置生成一个物品实体。
     * @param itemStack 物品堆对象
     * @param location 生成位置坐标
     * @returns 生成的物品实体
     */
    spawnItem(itemStack: ItemStack, location: Location): Entity;

    /**
     * @symbol getBlock
     * @description 获取指定位置的方块。
     * @param location 方块位置坐标
     * @returns 方块对象
     */
    getBlock(location: Location): Block | undefined;

    /**
     * @symbol setBlock
     * @description 在指定位置设置方块。
     * @param location 方块位置坐标
     * @param blockType 方块类型
     */
    setBlock(location: Location, blockType: BlockType): void;

    /**
     * @symbol playSound
     * @description 在世界中播放一个声音。
     * @param location 声音播放位置
     * @param sound 声音标识符
     * @param volume 音量（默认 1.0）
     * @param pitch 音调（默认 1.0）
     */
    playSound(location: Location, sound: string, volume?: number, pitch?: number): void;

    /**
     * @symbol sendMessage
     * @description 向所有玩家发送一条消息。
     * @param message 要发送的消息内容
     */
    sendMessage(message: string): void;

    /**
     * @symbol runCommand
     * @description 在世界中执行一个命令。
     * @param command 要执行的命令字符串
     * @returns 命令执行结果
     */
    runCommand(command: string): CommandResult;

    /**
     * @symbol getTime
     * @description 获取当前世界时间。
     * @returns 当前世界时间（游戏刻）
     */
    getTime(): number;

    /**
     * @symbol setTime
     * @description 设置当前世界时间。
     * @param time 要设置的时间（游戏刻）
     */
    setTime(time: number): void;

    /**
     * @symbol getWeather
     * @description 获取当前天气状态。
     * @returns 当前天气状态（"clear", "rain", "thunder"）
     */
    getWeather(): string;

    /**
     * @symbol setWeather
     * @description 设置当前天气状态。
     * @param weather 要设置的天气状态
     * @param duration 持续时间（秒）
     */
    setWeather(weather: string, duration?: number): void;
}
