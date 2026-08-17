/**
 * 当结构无效时抛出。结构被删除后即变为无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidStructureError extends Error {
    private constructor();
}