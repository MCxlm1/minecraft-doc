/**
 * 包含关于实体离开特定方块的
 * 信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 离开该方块的实体。
     *
     */
    readonly entity?: Entity;
}