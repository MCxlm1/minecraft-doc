/**
 * 用于过滤方块容器访问事件的选项。
 */
export interface BlockContainerAccessEventOptions {
    /**
     * @remarks
     * 如果存在，将过滤能够触发该事件的容器访问来源。
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 如果存在，将过滤能够触发该事件的容器方块。
     *
     */
    blockFilter?: BlockFilter;
}