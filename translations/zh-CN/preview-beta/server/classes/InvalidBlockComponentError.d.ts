/**
 * 当方块无效时可能发生此错误。在访问不具有某些组件的
 * 方块上的组件时也可能发生。
 * 这些组件是该方块所缺失的。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidBlockComponentError extends Error {
    private constructor();
}