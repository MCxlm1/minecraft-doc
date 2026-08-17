/**
 * 表示定位栏操作可能失败的不同原因的枚举。
 */
export enum LocatorBarErrorReason {
    /**
     * @remarks
     * 定位栏中已存在该航点，无法再次添加。
     *
     */
    WaypointAlreadyExists = 'WaypointAlreadyExists',
    /**
     * @remarks
     * 已达航点数量上限，无法添加更多。
     *
     */
    WaypointLimitExceeded = 'WaypointLimitExceeded',
    /**
     * @remarks
     * 指定的航点不存在于定位栏中。
     *
     */
    WaypointNotFound = 'WaypointNotFound',
}