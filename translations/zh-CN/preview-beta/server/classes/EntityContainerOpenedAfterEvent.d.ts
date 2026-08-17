/**
 * 包含有关特定实体容器被打开的信息。
 */
export class EntityContainerOpenedAfterEvent {
    private constructor();
    readonly entity: Entity;
    /**
     * @remarks
     * 被打开的实体容器的来源。
     *
     */
    readonly openSource: ContainerAccessSource;
}