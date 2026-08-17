/**
 * 用于筛选容器访问来源时使用的选项。
 */
export interface ContainerAccessSourceFilter {
    /**
     * @remarks
     * 筛选访问容器的来源实体的筛选选项。
     *
     */
    entityFilter?: EntityFilter;
}