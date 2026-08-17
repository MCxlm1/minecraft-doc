/**
 * 容器无效。这可能发生在容器缺失或已删除时。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerError extends Error {
    private constructor();
}