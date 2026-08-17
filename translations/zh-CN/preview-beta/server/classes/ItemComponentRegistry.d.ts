/**
 * 提供注册物品自定义组件的功能。
 */
export class ItemComponentRegistry {
    private constructor();
    /**
     * @remarks
     * 注册一个可用于物品JSON配置的自定义组件。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param name
     * 表示此自定义组件的ID。必须具有命名空间。此ID可以在物品的JSON配置中的'minecraft:custom_components'物品组件下指定。
     * @param itemCustomComponent
     * 事件函数集合，当使用此自定义组件ID的物品上发生事件时将调用这些函数。
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