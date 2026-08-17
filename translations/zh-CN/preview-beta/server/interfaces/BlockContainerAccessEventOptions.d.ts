/**
 * 用于过滤方块容器访问事件的选项。
 */
export interface BlockContainerAccessEventOptions {
    /**
     * @remarks
     * 若存在，则将过滤哪些容器访问来源可以触发事件。
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 若存在，则将过滤哪些容器方块可以触发事件。
     *
     */
    blockFilter?: BlockFilter;
}