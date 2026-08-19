/**
 * Provides the functionality for registering custom
 * dimensions. Custom dimensions can only be registered during
 * the system startup event.
 */
export class DimensionRegistry {
    private constructor();
    /**
     * @remarks
     * Registers a new custom dimension type. Must be called during
     * the system startup event. The dimension will be created
     * using the void generator.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param typeId
     * The namespaced identifier for the custom dimension (e.g.,
     * 'mypack:my_dimension'). Must include a namespace and use
     * only valid identifier characters.
     * @throws This function can throw errors.
     *
     * {@link CustomDimensionAlreadyRegisteredError}
     *
     * {@link CustomDimensionInvalidRegistryError}
     *
     * {@link CustomDimensionNameError}
     *
     * {@link CustomDimensionReloadNewDimensionError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomDimension(typeId: string): void;
}
