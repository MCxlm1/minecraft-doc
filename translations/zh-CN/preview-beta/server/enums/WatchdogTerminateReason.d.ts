/**
 * @beta
 * 一个枚举，用于说明看门狗决定终止行为包脚本执行的原因。
 */
export enum WatchdogTerminateReason {
    /**
     * @remarks
     * 行为包的脚本运行时因脚本无响应（挂起或无限循环）而被终止。
     *
     */
    Hang = 'Hang',
    /**
     * @remarks
     * 行为包的脚本运行时因栈溢出（长且可能无限的函数调用链）而被终止。
     *
     */
    StackOverflow = 'StackOverflow',
}