/**
 * 一个描述实体初始化原因的枚举。
 */
export enum EntityInitializationCause {
    /**
     * @remarks
     * 当实体作为其他实体的子实体创建时的情况，例如牛生小牛或史莱姆死后分裂成更小的史莱姆。
     *
     */
    Born = 'Born',
    /**
     * @remarks
     * 当实体由事件创建时的情况，例如流浪商人生成羊驼。
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * 当实体加载到世界中时的情况。
     *
     */
    Loaded = 'Loaded',
    /**
     * @remarks
     * 当实体自然生成在世界中时的情况。
     *
     */
    Spawned = 'Spawned',
    /**
     * @remarks
     * 当实体转化为另一个实体时的情况。
     *
     */
    Transformed = 'Transformed',
}