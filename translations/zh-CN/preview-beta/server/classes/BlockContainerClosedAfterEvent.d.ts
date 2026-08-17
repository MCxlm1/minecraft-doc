/**
 * 包含有关特定容器方块被关闭时的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerClosedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被关闭的容器方块的来源。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    closeSource: ContainerAccessSource;
}