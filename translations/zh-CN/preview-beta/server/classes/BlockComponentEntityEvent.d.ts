/**
 * 包含关于世界中实体向此方块发送的事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回关于接收该事件的方块的置换信息。
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 发送该事件的实体。
     *
     */
    readonly entitySource: Entity;
    /**
     * @remarks
     * 实体触发的事件名称。
     *
     */
    readonly name: string;
}