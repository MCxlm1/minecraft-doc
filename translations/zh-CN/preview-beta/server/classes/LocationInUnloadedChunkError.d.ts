/**
 * 当所提供位置或边界区域的区块未加载时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}