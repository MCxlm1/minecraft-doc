/**
 * 包含关于特定实体容器被关闭的信息。
 */
export class EntityContainerClosedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被关闭的实体容器的来源。
     *
     */
    readonly closeSource: ContainerAccessSource;
    readonly entity: Entity;
}