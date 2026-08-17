/**
 * 用于过滤方块容器访问事件的选项。
 */
export interface BlockContainerAccessEventOptions {
    /**
     * @remarks
     * 如果存在，将过滤哪些容器访问源可以触发该事件。
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 如果存在，将过滤哪些容器方块可以触发该事件。
     *
     */
    blockFilter?: BlockFilter;
}