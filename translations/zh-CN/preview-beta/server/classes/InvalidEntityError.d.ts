/**
 * 当实体无效时调用的错误。当访问已移除实体上的组件时可能会发生。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks
     * 现在无效的实体的ID。
     *
     * 这个属性可以在早期执行模式下读取。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 现在无效的实体的类型。
     *
     * 这个属性可以在早期执行模式下读取。
     *
     */
    readonly type: string;
}