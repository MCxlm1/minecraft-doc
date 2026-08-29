export class StartupEvent {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly customCommandRegistry: CustomCommandRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly dimensionRegistry: DimensionRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
    /**
     * @beta
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly worldClockRegistry: WorldClockRegistry;
}
