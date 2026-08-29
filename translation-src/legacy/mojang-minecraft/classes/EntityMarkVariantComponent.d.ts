/**
 * Additional variant value. Can be used to further
 * differentiate variants.
 */
export class EntityMarkVariantComponent extends IEntityComponent {
    /**
     * The identifier of the variant. By convention, 0 is the
     * identifier of the base entity.
     */
    "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:mark_variant.
     */
    static readonly "id" = "minecraft:mark_variant";
    protected constructor();
}
