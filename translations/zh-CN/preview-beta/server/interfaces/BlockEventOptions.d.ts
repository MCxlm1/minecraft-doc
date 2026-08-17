包含注册方块事件的可选参数。
export interface BlockEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的方块类型与此参数匹配时，此事件才会触发。
     *
     */
    blockTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的方块排列与此参数匹配时，此事件才会触发。
     *
     */
    permutations?: BlockPermutation[];
}