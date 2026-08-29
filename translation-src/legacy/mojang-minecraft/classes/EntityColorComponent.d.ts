/**
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (sheep, llama, shulker).
 */
export class EntityColorComponent extends IEntityComponent {
    /**
     * The palette color value of the entity.
     */
    "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:color.
     */
    static readonly "id" = "minecraft:color";
    protected constructor();
}
