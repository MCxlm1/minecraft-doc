/**
 * 用于过滤实体容器访问事件的选项。
 */
export interface EntityContainerAccessEventOptions {
    /**
     * @remarks
     * 如果存在，将过滤哪些容器访问来源可以触发事件。
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 如果存在，将过滤哪些实体容器可以触发事件。
     *
     */
    entityFilter?: EntityFilter;
}