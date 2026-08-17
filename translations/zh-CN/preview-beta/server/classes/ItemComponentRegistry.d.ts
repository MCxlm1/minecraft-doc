/**
 * 为物品提供注册自定义组件的功能。
 */
export class ItemComponentRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个物品自定义组件，该组件可以在物品的 JSON 配置中使用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param name
     * 代表此自定义组件的 ID。必须具有命名空间。此 ID 可以在物品的 JSON 配置中，在 'minecraft:custom_components' 物品组件下指定。
     * @param itemCustomComponent
     * 事件函数的集合，当使用此自定义组件 ID 的物品上发生事件时，将调用这些函数。
     * @throws 此函数可能会抛出错误。
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link ItemCustomComponentAlreadyRegisteredError}
     *
     * {@link ItemCustomComponentReloadNewComponentError}
     *
     * {@link ItemCustomComponentReloadNewEventError}
     *
     * {@link ItemCustomComponentReloadVersionError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}