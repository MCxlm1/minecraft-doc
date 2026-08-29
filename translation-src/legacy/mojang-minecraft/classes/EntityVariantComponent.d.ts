/**
 * Used to differentiate the component group of a variant of an
 * entity from others. (e.g. ocelot, villager).
 */
export class EntityVariantComponent extends IEntityComponent {
    /**
     * The identifier of the variant. By convention, 0 is the
     * identifier of the base entity.
     * @throws This property can throw when used.
     */
    readonly "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:variant.
     */
    static readonly "id" = "minecraft:variant";
    protected constructor();
}
