/**
 * The SelectionManager (accessible from the
 * {@link ExtensionContext}) is responsible for the management
 * of all {@link SelectionContainerVolume} objects, and
 * provides the user the ability to create new
 * {@link SelectionContainerVolume} objects for use within an
 * extension.
 */
export class SelectionManager {
    private constructor();
    readonly entity: SelectionContainerEntity;
    readonly volume: SelectionContainerVolume;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    deselectBlocks(blockIdentifier: string): Promise<number>;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    generateManifest(): Promise<SelectionManifestData>;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    getCurrentManifest(): SelectionManifestData | undefined;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    replaceBlocks(fromBlockIdentifier: string, toBlockIdentifier: string): Promise<number>;
}
