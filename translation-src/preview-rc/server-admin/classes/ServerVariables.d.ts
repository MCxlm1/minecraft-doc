/**
 * A collection of server variables defined in dedicated server
 * configuration.
 */
export class ServerVariables {
    /**
     * A list of available, configured server variables.
     */
    readonly names: string[];
    /**
     * @remarks
     * Returns the value of variable that has been configured in a
     * dedicated server configuration JSON file.
     * @param name
     */
    get(name: string): any;
    protected constructor();
}
