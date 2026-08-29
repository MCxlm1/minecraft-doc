/**
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddEvent {
    /**
     * Additional properties and details of the effect.
     */
    "effect": Effect;
    /**
     * Additional variant number for the effect.
     */
    "effectState": number;
    /**
     * Entity that the effect is being added to.
     */
    "entity": Entity;
    protected constructor();
}
