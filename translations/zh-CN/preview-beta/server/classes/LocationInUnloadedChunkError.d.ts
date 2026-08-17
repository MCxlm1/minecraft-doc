/**
 * 当提供的坐标或边界区域的区块未加载时抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}