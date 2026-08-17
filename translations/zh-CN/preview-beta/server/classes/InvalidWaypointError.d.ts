/**
 * 当尝试对无效路径点执行操作时抛出的错误。路径点在移除或其跟踪的实体不再有效时变为无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWaypointError extends Error {
    private constructor();
}