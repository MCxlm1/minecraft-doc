/**
 * 当访问实体上不存在的组件时，可能会发生此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityComponentError extends Error {
    private constructor();
}