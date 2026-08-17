/**
 * 表示一个可以播放唱片的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:record_player';
    /**
     * @remarks
     * 弹出此唱片机方块当前设置的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    ejectRecord(): void;
    /**
     * @remarks
     * 获取此唱片机方块当前设置的唱片。
     *
     * @throws 此函数可能抛出错误。
     * @returns 当前设置的唱片，若没有则返回 undefined。
     */
    getRecord(): ItemStack | undefined;
    /**
     * @remarks
     * 若唱片机方块当前正在播放唱片，则返回 true。
     *
     * @throws 此函数可能抛出错误。
     * @returns 若正在播放唱片则为 true，否则为 false。
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * 暂停此唱片机方块当前正在播放的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    pauseRecord(): void;
    /**
     * @remarks
     * 播放此唱片机方块当前设置的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    playRecord(): void;
    /**
     * @remarks
     * 根据物品类型设置并播放一张唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param recordItemType
     * 要设置并播放的唱片物品类型。
     * @param startPlaying
     * 默认值为：true
     * @throws 此函数可能抛出错误。
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}