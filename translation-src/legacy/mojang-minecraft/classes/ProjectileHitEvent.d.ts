/**
 * Contains information related to a projectile hitting an
 * entity or block.
 */
export class ProjectileHitEvent {
    /**
     * Contains additional information about the block that was hit
     * by the projectile, or undefined if the projectile did not
     * hit a block.
     */
    readonly "blockHit"?: BlockHitInformation;
    /**
     * Dimension where this projectile hit took place.
     */
    readonly "dimension": Dimension;
    /**
     * Contains additional information about a block that was hit.
     */
    readonly "entityHit"?: EntityHitInformation;
    /**
     * Direction vector of the projectile as it hit a block/entity.
     */
    readonly "hitVector": Vector;
    /**
     * Location where the projectile hit occurred.
     */
    readonly "location": Location;
    /**
     * Entity for the projectile that hit a block/entity.
     */
    readonly "projectile": Entity;
    /**
     * Optional source entity that fired the projectile.
     */
    readonly "source": Entity;
    protected constructor();
}
