export class StartupEvent {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly customCommandRegistry: CustomCommandRegistry;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly dimensionRegistry: DimensionRegistry;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
}
