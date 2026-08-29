/**
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 */
export class EntityHitEvent {
    /**
     * Entity that made a hit/melee attack.
     */
    readonly "entity": Entity;
    /**
     * Block that was hit by the attack, or undefined if the hit
     * attack did not hit a block. If both hitEntity and hitBlock
     * are undefined, then the entity basically swiped into the
     * air.
     */
    readonly "hitBlock"?: Block;
    /**
     * Entity that was hit by the attack, or undefined if the hit
     * attack did not hit an entity. If both hitEntity and hitBlock
     * are undefined, then the entity basically swiped into the
     * air.
     */
    readonly "hitEntity"?: Entity;
    protected constructor();
}
