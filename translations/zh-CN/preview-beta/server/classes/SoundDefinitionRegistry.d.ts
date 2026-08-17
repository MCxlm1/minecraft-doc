/**
 * @beta
 * 提供对当前世界加载的音效定义的只读访问。
 */
export class SoundDefinitionRegistry {
    private constructor();
    /**
     * @remarks
     * 返回注册表中的音效定义，可通过过滤器缩小范围。
     *
     * @param filter
     * 可选过滤器，应用于每个定义。如果省略，则返回所有定义。
     * @returns
     * 与过滤器匹配的所有音效定义，如果未提供过滤器，则返回所有音效定义。
     * @throws
     * 如果 filter.minDuration 大于 filter.maxDuration，则会抛出错误。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getDefinitions(filter?: SoundDefinitionFilter): SoundDefinition[];
}