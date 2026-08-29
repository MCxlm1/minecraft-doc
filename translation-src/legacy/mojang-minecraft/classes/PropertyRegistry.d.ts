/**
 * Provides methods that should be used within the World
 * Initialize event to register dynamic properties that can be
 * used and stored within Minecraft.
 */
export class PropertyRegistry {
    /**
     * @remarks
     * Registers a dynamic property for a particular entity type
     * (e.g., a minecraft:skeleton.).
     * @param propertiesDefinition
     * @param entityType
     * @throws This function can throw errors.
     */
    registerEntityTypeDynamicProperties(
        propertiesDefinition: DynamicPropertiesDefinition,
        entityType: EntityType,
    ): void;
    /**
     * @remarks
     * Registers a globally available dynamic property for a world.
     * @param propertiesDefinition
     * @throws This function can throw errors.
     */
    registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition): void;
    protected constructor();
}
