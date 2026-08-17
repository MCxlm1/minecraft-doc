/**
 * 包含关于某个容器方块被关闭时的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerClosedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 正在关闭的方块容器的来源。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    closeSource: ContainerAccessSource;
}