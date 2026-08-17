/**
 * 包含世界中某个实体向此方块发送的事件相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回接收该事件的方块的置换信息。
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
     * 实体触发的该事件的名称。
     *
     */
    readonly name: string;
}