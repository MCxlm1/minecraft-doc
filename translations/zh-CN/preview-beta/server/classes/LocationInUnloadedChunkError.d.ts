/**
 * 当提供的坐标或区域所在的
 * 区块未加载时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}