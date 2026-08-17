/**
 * 包含用于注册方块事件的可选参数。
 */
export interface BlockEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的方块类型与此参数匹配时，
     * 才会触发此事件。
     *
     */
    blockTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的方块的置换与此参数匹配时，
     * 才会触发此事件。
     *
     */
    permutations?: BlockPermutation[];
}