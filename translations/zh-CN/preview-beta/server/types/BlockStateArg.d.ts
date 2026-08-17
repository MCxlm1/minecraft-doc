/**
 * 用于 {@link BlockPermutation} 的 matches 和 resolve 函数的类型别名，
 * 用于将方块状态参数类型收窄为 {@link @minecraft/vanilla-data.BlockStateMapping} 所映射的类型。
 */
export type BlockStateArg<T> = T extends `${minecraftvanilladata.MinecraftBlockTypes}`
    ? T extends keyof minecraftvanilladata.BlockStateMapping
        ? minecraftvanilladata.BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;