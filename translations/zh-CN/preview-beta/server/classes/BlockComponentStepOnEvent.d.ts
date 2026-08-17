/**
 * 包含关于实体踩上特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 踩上方块的实体。
     *
     */
    readonly entity?: Entity;
}