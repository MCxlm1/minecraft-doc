/**
 * 用于根据类型、标签或置换来包含或排除方块的选项。
 * 如果未添加任何包含选项，则将选择所有未被排除选项拒绝的方块。
 * 如果添加了至少一个包含选项，则方块必须匹配其中一个包含选项，否则将被拒绝。
 */
export interface BlockFilter {
    /**
     * @remarks
     * 方块置换数组，如果任何一项匹配，过滤器应将其排除。
     *
     */
    excludePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 方块标签数组，如果任何一项匹配，过滤器应将其排除。
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 方块类型数组，如果任何一项匹配，过滤器应将其排除。
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 方块置换数组，如果至少一项匹配，过滤器应将其包含。
     *
     */
    includePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 方块标签数组，如果至少一项匹配，过滤器应将其包含。
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 方块类型数组，如果至少一项匹配，过滤器应将其包含。
     *
     */
    includeTypes?: string[];
}