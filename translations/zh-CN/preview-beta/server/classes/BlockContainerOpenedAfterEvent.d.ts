/**
 * 包含有关特定容器方块
 * 被打开时的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerOpenedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被打开的方块容器的来源。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    openSource: ContainerAccessSource;
}