/**
 * 当尝试对无效路径点执行操作时抛出的错误。
 * 路径点在被移除或其跟踪的实体不再有效时
 * 变为无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWaypointError extends Error {
    private constructor();
}