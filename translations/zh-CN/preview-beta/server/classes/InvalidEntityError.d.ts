/**
 * 当实体无效时引发的错误。可能在访问已移除实体上的组件时发生。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks
     * 现在无效的实体的ID。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 现在无效的实体的类型。
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly type: string;
}