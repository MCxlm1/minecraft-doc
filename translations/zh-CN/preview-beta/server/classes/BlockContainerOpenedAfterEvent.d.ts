/**
 * Contains information regarding a specific container block
 * being opened.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockContainerOpenedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The source of the block container being opened.
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    openSource: ContainerAccessSource;
}