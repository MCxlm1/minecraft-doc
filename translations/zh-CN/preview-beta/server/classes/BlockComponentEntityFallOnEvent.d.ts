/**
 * 包含有关实体坠落到特定方块上的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 落到该方块上的实体。
     *
     */
    readonly entity?: Entity;
    /**
     * @remarks
     * 实体落到该方块时下落的距离。
     *
     */
    readonly fallDistance: number;
}