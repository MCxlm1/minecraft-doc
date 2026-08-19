/**
 * Contains information regarding a specific container block
 * being closed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerClosedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The source of the block container being closed.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    closeSource: ContainerAccessSource;
}
