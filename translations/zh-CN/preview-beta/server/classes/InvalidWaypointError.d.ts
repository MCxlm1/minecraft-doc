/**
 * 当尝试对无效航点执行操作时抛出的错误。航点在被移除或其跟踪的实体不再有效时变得无效。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidWaypointError extends Error {
    private constructor();
}