export class BlockComponentRegistry {
    private constructor();
    /**
     * @remarks
     * 此函数可在早期执行模式下调用。
     *
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