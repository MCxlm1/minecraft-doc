/**
 * @beta
 * 表示方块的上表面和下表面可以分配的乐器。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInstrumentComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:instrument_sound';
    /**
     * @remarks
     * 一个 getter 方法，用于获取指定有效面方向对应的乐器名称。
     *
     * @param face
     * 要获取乐器名称的面方向。
     * @returns
     * 返回给定有效面方向对应的乐器名称。
     * @throws 当 face 无效时抛出 {@link minecraftcommon.InvalidArgumentError}。
     * 当组件位置位于未加载区块中时抛出 {@link LocationInUnloadedChunkError}。
     * 当组件位置超出世界边界时抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    getInstrumentName(face: Direction): string;
    /**
     * @remarks
     * 在组件的方块位置使用可选的 WorldSoundOptions 播放指定有效面方向的乐器声音。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param face
     * 要播放乐器声音的面方向。
     * @param soundOptions
     * 播放乐器声音时要使用的可选 WorldSoundOptions；如果省略，则使用默认值。
     * @throws 当 face 无效时抛出 {@link minecraftcommon.InvalidArgumentError}。
     * 当组件位置位于未加载区块中时抛出 {@link LocationInUnloadedChunkError}。
     * 当组件位置超出世界边界时抛出 {@link LocationOutOfWorldBoundariesError}。
     */
    playInstrumentSound(face: Direction, soundOptions?: WorldSoundOptions): void;
}