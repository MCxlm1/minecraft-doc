/**
 * 包含关于实体落在特定方块上的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 落在方块上的实体。
     *
     */
    readonly entity?: Entity;
    /**
     * @remarks
     * 实体落在这个方块上时的距离。
     *
     */
    readonly fallDistance: number;
}