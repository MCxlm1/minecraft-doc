/**
 * 根据类型、标签或排列来包含或排除方块的选项。如果没有添加任何包含选项，将选择所有未被排除选项拒绝的方块。如果添加了至少一个包含选项，则方块必须匹配其中一个包含选项才能不被拒绝。
 */
export interface BlockFilter {
    /**
     * @remarks
     * 方块排列数组，如果任何匹配，则过滤器应拒绝这些排列。
     *
     */
    excludePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 方块标签数组，如果任何匹配，则过滤器应拒绝这些标签。
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 方块类型数组，如果任何匹配，则过滤器应拒绝这些类型。
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * 方块排列数组，如果至少有一个匹配，则过滤器应选择这些排列。
     *
     */
    includePermutations?: BlockPermutation[];
    /**
     * @remarks
     * 方块标签数组，如果至少有一个匹配，则过滤器应选择这些标签。
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 方块类型数组，如果至少有一个匹配，则过滤器应选择这些类型。
     *
     */
    includeTypes?: string[];
}