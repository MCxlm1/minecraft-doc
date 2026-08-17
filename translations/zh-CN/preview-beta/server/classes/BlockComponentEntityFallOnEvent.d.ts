/**
 * 包含关于实体掉落到某个特定方块上的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 掉落到该方块上的实体。
     *
     */
    readonly entity?: Entity;
    /**
     * @remarks
     * 实体掉落到该方块时的距离。
     *
     */
    readonly fallDistance: number;
}