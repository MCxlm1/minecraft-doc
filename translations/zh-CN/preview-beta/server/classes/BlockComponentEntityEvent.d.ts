/**
 * 包含关于一个由实体发送到世界中此方块的事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回接收此事件的方块的状态信息。
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