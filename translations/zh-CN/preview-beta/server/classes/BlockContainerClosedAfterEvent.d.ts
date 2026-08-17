/**
 * 包含关于特定容器方块
 * 被关闭的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerClosedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 被关闭的方块容器的来源。
     *
     * 此属性在受限执行模式下无法编辑。
     *
     */
    closeSource: ContainerAccessSource;
}