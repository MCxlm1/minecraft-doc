/**
 * Contains information related to an entity getting hurt by
 * another entity.
 */
export class EntityHurtEvent {
    /**
     * A summary of the reason that damage was caused.
     */
    readonly "cause": EntityDamageCause;
    /**
     * Describes the amount of damage caused.
     */
    readonly "damage": number;
    /**
     * Optional entity that caused the damaging attack, or
     * undefined if the hurt reason was not because of another
     * entity.
     */
    readonly "damagingEntity": Entity;
    /**
     * Entity that was hurt.
     */
    readonly "hurtEntity": Entity;
    /**
     * Optional entity for a projectile that potentially hurt an
     * entity.
     */
    readonly "projectile": Entity;
    protected constructor();
}
