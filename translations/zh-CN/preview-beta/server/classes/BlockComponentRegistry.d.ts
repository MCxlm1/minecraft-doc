export class BlockComponentRegistry {
    private constructor();
    /**
     * @remarks
     * 此函数可在早期执行模式中被调用。
     *
     * @param name - 自定义组件的名称。
     * @param customComponent - 自定义组件对象。
     * @throws 此函数可能会抛出错误。
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