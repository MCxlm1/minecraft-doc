/**
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
export class EntityMountTamingComponent extends IEntityComponent {
    /**
     * Identifier of this component. Should always be
     * minecraft:mount_taming.
     */
    static readonly "id" = "minecraft:tamemount";
    /**
     * @remarks
     * Sets this rideable entity as tamed.
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    setTamed(showParticles: boolean): void;
    protected constructor();
}
