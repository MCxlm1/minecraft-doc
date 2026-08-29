/**
 * Skin Id value. Can be used to differentiate skins, such as
 * base skins for villagers.
 */
export class EntitySkinIdComponent extends IEntityComponent {
    /**
     * The identifier of the skin. By convention, 0 is the
     * identifier of the base skin.
     */
    "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:skin_id.
     */
    static readonly "id" = "minecraft:skin_id";
    protected constructor();
}
