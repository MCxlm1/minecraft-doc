/**
 * 基于类型、标签或置换来包含或排除方块的选项。如果未添加任何包含选项，
 * 将选择所有未被排除选项拒绝的方块。如果添加了至少一个包含选项，
 * 方块必须匹配其中一个包含选项才不会被拒绝。
 */
export interface BlockFilter {
    /**
     * @remarks
     * 过滤器在任一匹配时应拒绝的方块置换数组。
     *
     */
    excludePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 过滤器在任一匹配时应拒绝的方块标签数组。
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 过滤器在任一匹配时应拒绝的方块类型数组。
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 过滤器在至少一个匹配时应选择的方块置换数组。
     *
     */
    includePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 过滤器在至少一个匹配时应选择的方块标签数组。
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 过滤器在至少一个匹配时应选择的方块类型数组。
     *
     */
    includeTypes?: string[];
}