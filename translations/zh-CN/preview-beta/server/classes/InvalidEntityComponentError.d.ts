/**
 * 当访问不含某组件的实体上的组件时，
 * 可能会发生此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityComponentError extends Error {
    private constructor();
}