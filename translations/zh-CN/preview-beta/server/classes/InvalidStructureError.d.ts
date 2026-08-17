/**
 * 当结构无效时抛出。当结构被删除时，它变得无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidStructureError extends Error {
    private constructor();
}