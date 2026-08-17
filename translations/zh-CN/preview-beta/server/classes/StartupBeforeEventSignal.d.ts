export class StartupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将以早期执行权限调用。
     * @returns
     * 以早期执行权限调用的闭包。
     */
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将以早期执行权限调用。
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}