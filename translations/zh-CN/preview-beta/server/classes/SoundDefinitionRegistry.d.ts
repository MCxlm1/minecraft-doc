/**
 * @beta
 * 提供对当前世界加载的声音定义的只读访问。
 */
export class SoundDefinitionRegistry {
    private constructor();
    /**
     * @remarks
     * 返回注册表中的声音定义，可选地通过过滤器缩小范围。
     *
     * @param filter
     * 应用于每个定义的可选过滤器。省略时，返回所有定义。
     * @returns
     * 所有匹配过滤器的声音定义，或未提供过滤器时返回所有声音定义。
     * @throws
     * 如果 filter.minDuration 大于 filter.maxDuration，将抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getDefinitions(filter?: SoundDefinitionFilter): SoundDefinition[];
}