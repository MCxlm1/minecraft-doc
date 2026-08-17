export class StartupEvent {
    private constructor();
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly customCommandRegistry: CustomCommandRegistry;
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly dimensionRegistry: DimensionRegistry;
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
}