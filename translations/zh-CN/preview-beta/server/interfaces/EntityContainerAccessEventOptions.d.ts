/**
 * 用于筛选实体容器访问事件的选项。
 */
export interface EntityContainerAccessEventOptions {
    /**
     * @remarks
     * 如果存在，将筛选哪些容器访问源可以触发该事件。
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 如果存在，将筛选哪些实体容器可以触发该事件。
     *
     */
    entityFilter?: EntityFilter;
}