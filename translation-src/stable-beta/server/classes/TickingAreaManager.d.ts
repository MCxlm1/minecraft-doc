/**
 * This manager is used to add, remove or query temporary
 * ticking areas to a dimension. These ticking areas are
 * limited by a fixed amount of ticking chunks per pack
 * independent of the command limits. Cannot modify or query
 * ticking areas added by other packs or commands.
 */
export class TickingAreaManager {
    private constructor();
    /**
     * @remarks
     * The number of currently ticking chunks in this manager.
     *
     */
    readonly chunkCount: number;
    /**
     * @remarks
     * The maximum number of allowed ticking chunks. Overlapping
     * ticking area chunks do count towards total.
     *
     */
    readonly maxChunkCount: number;
    /**
     * @remarks
     * Creates a ticking area. Promise will return when all the
     * chunks in the area are loaded and ticking.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    /**
     * @remarks
     * Gets all ticking areas added by this manager.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    getAllTickingAreas(): TickingArea[];
    /**
     * @remarks
     * Tries to get specific ticking area by identifier.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    /**
     * @remarks
     * Returns true if the manager has enough chunk capacity for
     * the ticking area and false otherwise. Will also return false
     * if the length or width exceeds the 255 chunk limit.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    hasCapacity(options: TickingAreaOptions): boolean;
    /**
     * @remarks
     * Returns true if the identifier is already in the manager and
     * false otherwise.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    hasTickingArea(identifier: string): boolean;
    /**
     * @remarks
     * Removes all ticking areas added by this manager.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    removeAllTickingAreas(): void;
    /**
     * @remarks
     * Removes specific ticking area by unique identifier.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    removeTickingArea(identifier: string | TickingArea): void;
}
