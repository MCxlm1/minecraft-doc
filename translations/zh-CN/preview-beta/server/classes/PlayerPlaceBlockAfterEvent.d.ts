/**
 * 包含有关玩家放置方块事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 放置此事件中方块的玩家。
     *
     */
    readonly player: Player;
}