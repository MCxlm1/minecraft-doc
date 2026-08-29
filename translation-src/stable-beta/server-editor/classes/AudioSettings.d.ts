export class AudioSettings {
    private constructor();
    get<T extends keyof AudioSettingsPropertyTypeMap>(property: T): AudioSettingsPropertyTypeMap[T] | undefined;
    getAll(): AudioSettingsPropertyTypeMap;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    set<T extends keyof AudioSettingsPropertyTypeMap>(property: T, value: AudioSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setAll(properties: AudioSettingsPropertyTypeMap): void;
}
