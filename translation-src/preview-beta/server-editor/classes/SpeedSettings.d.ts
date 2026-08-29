export class SpeedSettings {
    private constructor();
    get<T extends keyof SpeedSettingsPropertyTypeMap>(property: T): SpeedSettingsPropertyTypeMap[T] | undefined;
    getAll(): SpeedSettingsPropertyTypeMap;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    set<T extends keyof SpeedSettingsPropertyTypeMap>(property: T, value: SpeedSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setAll(properties: SpeedSettingsPropertyTypeMap): void;
}
