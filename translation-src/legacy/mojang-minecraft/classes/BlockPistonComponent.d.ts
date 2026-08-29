/**
 * When present, this block has piston-like behavior. Contains
 * additional properties for discovering block piston state.
 */
export class BlockPistonComponent extends BlockComponent {
    /**
     * A set of locations for blocks that are impacted by the
     * activation of this piston.
     * @throws This property can throw when used.
     */
    readonly "attachedBlocks": BlockLocation[];
    /**
     * Whether the piston is fully expanded.
     * @throws This property can throw when used.
     */
    readonly "isExpanded": boolean;
    /**
     * Whether the piston is in the process of expanding.
     * @throws This property can throw when used.
     */
    readonly "isExpanding": boolean;
    /**
     * Whether the piston is in the process of expanding or
     * retracting.
     * @throws This property can throw when used.
     */
    readonly "isMoving": boolean;
    /**
     * Whether the piston is fully retracted.
     * @throws This property can throw when used.
     */
    readonly "isRetracted": boolean;
    /**
     * Whether the piston is in the process of retracting.
     * @throws This property can throw when used.
     */
    readonly "isRetracting": boolean;
    /**
     * Source location of the block.
     */
    readonly "location": BlockLocation;
    static readonly "id" = "piston";
    protected constructor();
}
