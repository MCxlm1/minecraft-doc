/**
 * 表示一个可以播放唱片的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:record_player';
    /**
     * @remarks
     * 弹出此唱片播放方块当前设置的唱片。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    ejectRecord(): void;
    /**
     * @remarks
     * 获取此唱片播放方块当前设置的唱片。
     *
     * @returns 当前设置的唱片，如果没有则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getRecord(): ItemStack | undefined;
    /**
     * @remarks
     * 返回唱片播放方块当前是否正在播放唱片。
     *
     * @returns 如果正在播放唱片则返回 true。
     * @throws 此函数可能抛出错误。
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * 暂停此唱片播放方块当前正在播放的唱片。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    pauseRecord(): void;
    /**
     * @remarks
     * 播放此唱片播放方块当前设置的唱片。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    playRecord(): void;
    /**
     * @remarks
     * 根据物品类型设置并播放唱片。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param recordItemType
     * 要设置和播放的唱片物品类型。
     * @param startPlaying
     * 是否立即开始播放。默认为 true。
     * @throws 此函数可能抛出错误。
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}