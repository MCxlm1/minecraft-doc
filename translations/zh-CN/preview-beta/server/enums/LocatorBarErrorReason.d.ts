/**
 * 表示定位条操作可能失败的不同原因的枚举。
 */
export enum LocatorBarErrorReason {
    /**
     * @remarks
     * 航点已存在于定位条中，无法再次添加。
     *
     */
    WaypointAlreadyExists = 'WaypointAlreadyExists',
    /**
     * @remarks
     * 已达到最大航点数，无法继续添加。
     *
     */
    WaypointLimitExceeded = 'WaypointLimitExceeded',
    /**
     * @remarks
     * 指定的航点在定位条中不存在。
     *
     */
    WaypointNotFound = 'WaypointNotFound',
}