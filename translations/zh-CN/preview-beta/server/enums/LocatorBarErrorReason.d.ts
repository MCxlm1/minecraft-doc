/**
 * 表示定位栏操作可能失败的不同原因的枚举。
 */
export enum LocatorBarErrorReason {
    /**
     * @remarks
     * 该航点已存在于定位栏中，无法再次添加。
     *
     */
    WaypointAlreadyExists = 'WaypointAlreadyExists',
    /**
     * @remarks
     * 已达到航点数量上限，无法再添加更多。
     *
     */
    WaypointLimitExceeded = 'WaypointLimitExceeded',
    /**
     * @remarks
     * 指定的航点在定位栏中不存在。
     *
     */
    WaypointNotFound = 'WaypointNotFound',
}