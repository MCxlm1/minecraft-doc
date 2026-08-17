/**
 * 当实体无效时抛出的错误。可能在访问已移除实体上的组件时发生。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks
     * 当前无效实体的 id。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 当前无效实体的类型。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly type: string;
}