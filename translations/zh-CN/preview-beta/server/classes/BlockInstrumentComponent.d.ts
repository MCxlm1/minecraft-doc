/**
 * @beta
 * 表示方块可分配给其上下面的乐器。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInstrumentComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:instrument_sound';
    /**
     * @remarks
     * 一个获取有效面方向对应乐器名称的 getter 方法。
     *
     * @param face
     * 要获取乐器名称的面方向。
     * @returns
     * 返回给定有效面方向对应的乐器名称。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getInstrumentName(face: Direction): string;
    /**
     * @remarks
     * 在组件的方块位置，使用可选的 WorldSoundOptions 播放给定有效面方向的乐器声音。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param face
     * 要播放乐器声音的面方向。
     * @param soundOptions
     * 播放乐器声音时使用的可选 WorldSoundOptions；如果省略，则使用默认值。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    playInstrumentSound(face: Direction, soundOptions?: WorldSoundOptions): void;
}