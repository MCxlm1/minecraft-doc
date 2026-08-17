/**
 * 当方块无效时可能发生此错误。当访问一个方块上不存在的组件时也可能发生此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidBlockComponentError extends Error {
    private constructor();
}