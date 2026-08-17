/**
 * @beta
 * 表示方块的上、下表面可以分配的乐器。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInstrumentComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:instrument_sound';
    /**
     * @remarks
     * 获取指定有效面方向的乐器名称的 getter 方法。
     *
     * @param face
     * 要获取乐器名称的面方向。
     * @returns
     * 返回指定有效面方向对应的乐器名称。
     * @throws
     * 如果面方向无效，抛出 {@link minecraftcommon.InvalidArgumentError}。
     * 如果方块位置位于未加载区块中，抛出 {@link LocationInUnloadedChunkError}。
     * 如果方块位置超出世界边界，抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    getInstrumentName(face: Direction): string;
    /**
     * @remarks
     * 在组件的方块位置播放指定有效面方向的乐器声音，可使用可选的 WorldSoundOptions。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param face
     * 要播放乐器声音的面方向。
     * @param soundOptions
     * 播放乐器声音时使用的可选 WorldSoundOptions；如果省略，则使用默认值。
     * @throws
     * 如果面方向无效，抛出 {@link minecraftcommon.InvalidArgumentError}。
     * 如果方块位置位于未加载区块中，抛出 {@link LocationInUnloadedChunkError}。
     * 如果方块位置超出世界边界，抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    playInstrumentSound(face: Direction, soundOptions?: WorldSoundOptions): void;
}