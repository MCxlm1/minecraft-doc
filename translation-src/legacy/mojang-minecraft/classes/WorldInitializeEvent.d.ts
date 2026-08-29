/**
 * Contains information and methods that can be used at the
 * initialization of the scripting environment for a World.
 * Also, use the supplied propertyRegistry object to register
 * any dynamic properties, within the scope of the World
 * Initialize execution.
 */
export class WorldInitializeEvent {
    /**
     * Contains methods for scripts to initialize and register
     * dynamic properties they may wish to use within a world.
     * @example propertyRegistration.js
     * ```typescript
     *        import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "mojang-minecraft";
     *
     *        world.events.worldInitialize.subscribe((e) => {
     *          let def = new DynamicPropertiesDefinition();
     *
     *          def.defineNumber("rpgStrength");
     *          def.defineString("rpgRole", 16);
     *          def.defineBoolean("rpgIsHero");
     *
     *          e.propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.skeleton);
     *        });
     *
     * ```
     */
    readonly "propertyRegistry": PropertyRegistry;
    protected constructor();
}
