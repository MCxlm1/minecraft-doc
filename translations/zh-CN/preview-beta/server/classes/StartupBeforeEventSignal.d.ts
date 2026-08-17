export class StartupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在早期执行权限下被调用。
     * @returns
     * 返回在早期执行权限下被调用的闭包。
     */
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在早期执行权限下被调用。
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}