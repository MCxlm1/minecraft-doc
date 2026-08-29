/**
 * Sets the entity's visual size.
 */
export class EntityScaleComponent extends IEntityComponent {
    /**
     * The value of the scale. 1.0 means the entity will appear at
     * the scale they are defined in their model. Higher numbers
     * make the entity bigger.
     */
    "value": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:scale.
     */
    static readonly "id" = "minecraft:scale";
    protected constructor();
}
