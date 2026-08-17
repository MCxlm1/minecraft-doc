/**
 * 包含关于实体从特定方块上走下的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 从方块上走下的实体。
     *
     */
    readonly entity?: Entity;
}