/**
 * 类型别名，用于 {@link BlockPermutation} 的 matches 和 resolve 函数，以将方块状态参数类型缩小为 {@link @minecraft/vanilla-data.BlockStateMapping} 映射的类型。
 */
export type BlockStateArg<T> = T extends `${minecraftvanilladata.MinecraftBlockTypes}`
    ? T extends keyof minecraftvanilladata.BlockStateMapping
        ? minecraftvanilladata.BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;