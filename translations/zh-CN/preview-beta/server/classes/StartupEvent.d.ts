export class StartupEvent {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可以在早期执行模式下读取。
     *
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可以在早期执行模式下读取。
     *
     */
    readonly customCommandRegistry: CustomCommandRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可以在早期执行模式下读取。
     *
     */
    readonly dimensionRegistry: DimensionRegistry;
    /**
     * @remarks
     * @privilege early-execution-readable - 此属性可以在早期执行模式下读取。
     *
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
    /**
     * @beta
     * @remarks
     * @privilege early-execution-readable - 此属性可以在早期执行模式下读取。
     *
     */
    readonly worldClockRegistry: WorldClockRegistry;
}