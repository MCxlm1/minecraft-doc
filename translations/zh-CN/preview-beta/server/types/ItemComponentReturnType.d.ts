export type ItemComponentReturnType<T extends string> = T extends keyof ItemComponentTypeMap
    ? ItemComponentTypeMap[T]
    : ItemCustomComponentInstance;