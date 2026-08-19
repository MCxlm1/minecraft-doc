/**
 * Specifies that a passed-in argument to a method is not
 * correct or allowed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidArgumentError extends Error {
    /**
     * @remarks
     * Index of the argument that is in error.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly index: number;
    /**
     * @remarks
     * Type of the argument error.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly type: InvalidArgumentErrorType;
    /**
     * @remarks
     * @param funcName
     * @param argTypeName
     * @param errorType
     * @param argIndex
     */
    constructor(funcName: string, argTypeName: string, errorType: InvalidArgumentErrorType, argIndex?: number);
}
