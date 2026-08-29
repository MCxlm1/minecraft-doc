/**
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerEvent {
    /**
     * Entity that the event triggered on.
     */
    readonly "entity": Entity;
    /**
     * Name of the data driven event being triggered.
     */
    readonly "id": string;
    /**
     * A list of modifications to component state that are the
     * effect of this triggered event.
     */
    readonly "modifiers": DefinitionModifier[];
    protected constructor();
}
