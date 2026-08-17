/**
 * 当实体无效时引发的错误。这可能在访问已移除实体上的组件时发生。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks
     * 当前无效实体的 ID。
     *
     * 此属性可以在早期执行模式下读取。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 当前无效实体的类型。
     *
     * 此属性可以在早期执行模式下读取。
     *
     */
    readonly type: string;
}