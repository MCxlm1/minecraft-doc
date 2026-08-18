/**
 * @beta
 * 用于为世界时钟创建时间标记的选项。
 */
export interface TimeMarkerOptions {
    /**
     * @remarks
     * 时间标记将具有的名称。必须具有命名空间，并且只使用有效的标识符字符
     * （例如，
     * 'mypack:my_time_marker'）。
     *
     */
    name: string;
    /**
     * @remarks
     * 时间标记将具有的可选重复周期（以 tick 为单位）。如果未指定，
     * 时间标记将仅发生
     * 一次。
     *
     * 最小值：0
     */
    period?: number;
    /**
     * @remarks
     * 时间标记将发生的时间（以 tick 为单位）。
     *
     * 最小值：0
     */
    time: number;
}