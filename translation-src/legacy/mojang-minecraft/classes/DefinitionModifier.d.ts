/**
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export class DefinitionModifier {
    /**
     * A list of components that will be added via this definition
     * modification.
     */
    readonly "componentGroupsToAdd": string[];
    /**
     * A list of components that will be removed via this
     * definition modification.
     */
    readonly "componentGroupsToRemove": string[];
    /**
     * A list of entity definition events that will be fired via
     * this update.
     */
    "triggers": Trigger[];
}
