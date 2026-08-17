/**
 * 描述实体初始化原因的枚举。
 */
export enum EntityInitializationCause {
    /**
     * @remarks
     * 当实体作为其他实体的子实体被创建时的情况，例如牛生出小牛，或史莱姆死亡后分裂出更小的史莱姆。
     *
     */
    Born = 'Born',
    /**
     * @remarks
     * 当实体由某个事件创建时的情况，例如流浪商人生成羊驼。
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * 当实体被加载到世界中时的情况。
     *
     */
    Loaded = 'Loaded',
    /**
     * @remarks
     * 当实体在世界中自然生成时的情况。
     *
     */
    Spawned = 'Spawned',
    /**
     * @remarks
     * 当实体被转换为另一种实体时的情况。
     *
     */
    Transformed = 'Transformed',
}