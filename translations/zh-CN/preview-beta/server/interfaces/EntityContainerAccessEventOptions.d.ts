```ts
/**
 * 用于筛选实体容器访问事件的选项。
 */
export interface EntityContainerAccessEventOptions {
    /**
     * @remarks
     * 若存在，将筛选可触发事件的容器访问来源。
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * 若存在，将筛选可触发事件的实体容器。
     *
     */
    entityFilter?: EntityFilter;
}
```