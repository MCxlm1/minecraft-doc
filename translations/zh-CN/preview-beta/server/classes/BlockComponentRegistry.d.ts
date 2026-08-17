export class BlockComponentRegistry {
    private constructor();
    /**
     * @remarks
     * 此函数可在早期执行模式下调用。
     *
     * @param name - 要注册的自定义组件的名称。
     * @param customComponent - 要注册的自定义方块组件实例。
     * @throws 此函数可能抛出错误。
     *
     * {@link BlockCustomComponentAlreadyRegisteredError}
     *
     * {@link BlockCustomComponentReloadNewComponentError}
     *
     * {@link BlockCustomComponentReloadNewEventError}
     *
     * {@link BlockCustomComponentReloadVersionError}
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}