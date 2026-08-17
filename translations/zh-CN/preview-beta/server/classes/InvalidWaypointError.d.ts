/**
 * 当尝试对无效的路径点执行操作时抛出的错误。
 * 路径点在其被移除或其所跟踪的实体不再有效时变为无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWaypointError extends Error {
    private constructor();
}