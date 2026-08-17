/**
 * 表示可以播放唱片的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:record_player';
    /**
     * @remarks
     * 弹出此唱片播放方块当前设置的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 当无法弹出唱片时抛出错误。
     */
    ejectRecord(): void;
    /**
     * @remarks
     * 获取此唱片播放方块当前设置的唱片。
     *
     * @returns 当前设置的唱片，若未设置则返回 undefined。
     * @throws 当无法获取唱片时抛出错误。
     */
    getRecord(): ItemStack | undefined;
    /**
     * @remarks
     * 若唱片播放方块当前正在播放唱片，则返回 true。
     *
     * @returns 是否正在播放唱片。
     * @throws 当无法获取播放状态时抛出错误。
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * 暂停此唱片播放方块当前正在播放的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 当无法暂停唱片时抛出错误。
     */
    pauseRecord(): void;
    /**
     * @remarks
     * 播放此唱片播放方块当前设置的唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 当无法播放唱片时抛出错误。
     */
    playRecord(): void;
    /**
     * @remarks
     * 根据物品类型设置并播放唱片。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param recordItemType
     * 要设置的唱片物品类型。
     * @param startPlaying
     * 是否立即开始播放。默认为 true。
     * @throws 当唱片设置失败时抛出错误。
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}