/**
 * 表示一个可以播放唱片的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:record_player';
    /**
     * @remarks
     * 弹出此播放唱片的方块当前设置的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    ejectRecord(): void;
    /**
     * @remarks
     * 获取此播放唱片的方块当前设置的唱片。
     *
     * @returns 当前设置的唱片，如果没有设置唱片则返回 undefined。
     * @throws 此函数可能抛出错误。
     */
    getRecord(): ItemStack | undefined;
    /**
     * @remarks
     * 如果播放唱片的方块当前正在播放唱片，则返回 true。
     *
     * @returns 如果正在播放唱片则返回 true，否则返回 false。
     * @throws 此函数可能抛出错误。
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * 暂停此播放唱片的方块当前正在播放的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    pauseRecord(): void;
    /**
     * @remarks
     * 播放此播放唱片的方块当前设置的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    playRecord(): void;
    /**
     * @remarks
     * 根据物品类型设置并播放唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param recordItemType
     * 要设置并播放的唱片物品类型。
     * @param startPlaying
     * 默认为：true
     * @throws 此函数可能抛出错误。
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}