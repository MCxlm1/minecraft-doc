/**
 * 容器无效。当容器缺失或已被删除时可能出现此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerError extends Error {
    private constructor();
}