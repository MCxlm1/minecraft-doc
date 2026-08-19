/**
 * Validates min/max limits of observable objects that support
 * Vector2
 */
export declare class Vector2LimitObservableValidator implements ObservableValidator<minecraftserver.Vector2> {
    /**
     * @remarks
     * @privilege restricted-execution-unusable - This property can't be used in restricted-execution mode.
     *
     */
    protected _isInteger?: boolean;
    /**
     * @remarks
     * @privilege restricted-execution-unusable - This property can't be used in restricted-execution mode.
     *
     */
    protected _max: Partial<minecraftserver.Vector2>;
    /**
     * @remarks
     * @privilege restricted-execution-unusable - This property can't be used in restricted-execution mode.
     *
     */
    protected _min: Partial<minecraftserver.Vector2>;
    /**
     * @remarks
     * Constructs a new instance of the
     * `Vector2LimitObservableValidator` class
     *
     */
    constructor(min: Partial<minecraftserver.Vector2>, max: Partial<minecraftserver.Vector2>, isInteger?: boolean);
    updateLimits(min: Partial<minecraftserver.Vector2>, max: Partial<minecraftserver.Vector2>): void;
    validate(newValue: minecraftserver.Vector2): minecraftserver.Vector2;
}
