export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap
    ? BlockComponentTypeMap[T]
    : BlockCustomComponentInstance;