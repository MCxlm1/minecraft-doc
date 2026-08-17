/**
 * 代表定位栏操作可能失败的不同原因的枚举。
 */
export enum LocatorBarErrorReason {
    /**
     * @remarks
     * 该路径点已存在于定位栏中，无法再次添加。
     *
     */
    WaypointAlreadyExists = 'WaypointAlreadyExists',
    /**
     * @remarks
     * 已达到路径点数量上限，无法继续添加。
     *
     */
    WaypointLimitExceeded = 'WaypointLimitExceeded',
    /**
     * @remarks
     * 指定的路径点不存在于定位栏中。
     *
     */
    WaypointNotFound = 'WaypointNotFound',
}