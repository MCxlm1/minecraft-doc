/**
 * A collection of server secrets defined in dedicated server
 * configuration.
 */
export class ServerSecrets {
    /**
     * A list of available, configured server secrets.
     */
    readonly names: string[];
    /**
     * @remarks
     * Returns a SecretString that is a placeholder for a secret
     * configured in a JSON file. In certain objects, like an
     * HttpHeader, this Secret is resolved at the time of execution
     * but is not made available to the script environment.
     * @param name
     */
    get(name: string): SecretString;
    protected constructor();
}
