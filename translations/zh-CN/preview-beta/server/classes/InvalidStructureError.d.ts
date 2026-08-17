/**
 * 当结构无效时抛出。一个结构在被删除时变为无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidStructureError extends Error {
    private constructor();
}