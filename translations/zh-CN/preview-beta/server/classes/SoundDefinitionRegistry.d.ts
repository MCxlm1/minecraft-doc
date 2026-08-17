/**
 * @beta
 * 提供对当前世界加载的音效定义的只读访问。
 * for the current world.
 */
export class SoundDefinitionRegistry {
    private constructor();
    /**
     * @remarks
     * 返回注册表中的音效定义，可选择
     * 通过过滤器进行筛选。
     *
     * @param filter
     * 应用于每个定义的可选过滤器。如果省略，
     * 则返回所有定义。
     * @returns
     * 所有匹配过滤器的音效定义，或者如果未提供过滤器，
     * 则返回所有音效定义。
     * @throws
     * 如果 filter.minDuration 大于 filter.maxDuration，
     * 则会抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getDefinitions(filter?: SoundDefinitionFilter): SoundDefinition[];
}