/**
 * 描述客户端的图形模式。由 {@link Player.graphicsMode} 使用。
 */
export enum GraphicsMode {
    /**
     * @remarks
     * 一种图形模式，指的是延迟技术预览图形模式设置。
     *
     */
    Deferred = 'Deferred',
    /**
     * @remarks
     * 一种图形模式，指的是精美图形模式设置。在此设置下，大多数特殊图形效果会被开启。
     *
     */
    Fancy = 'Fancy',
    /**
     * @remarks
     * 一种图形模式，指的是光线追踪图形模式设置。此设置会启用光线追踪。
     *
     */
    RayTraced = 'RayTraced',
    /**
     * @remarks
     * 一种图形模式，指的是简单图形模式设置。在此设置下，大多数图形效果会被关闭。
     *
     */
    Simple = 'Simple',
}