/**
 * 当方块无效时可能发生此错误。当访问没有组件的方块上的组件时也可能发生。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidBlockComponentError extends Error {
    private constructor();
}