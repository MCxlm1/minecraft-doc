/**
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class BeforeDataDrivenEntityTriggerEvent {
    /**
     * If set to true, this entity event is not triggered.
     */
    "cancel": boolean;
    /**
     * Entity that the event triggered on.
     */
    readonly "entity": Entity;
    /**
     * Name of the data driven event being triggered.
     */
    readonly "id": string;
    /**
     * An updateable list of modifications to component state that
     * are the effect of this triggered event.
     */
    "modifiers": DefinitionModifier[];
    protected constructor();
}
