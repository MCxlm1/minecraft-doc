/**
 * @beta
 * 一个枚举，其中包含看门狗决定终止行为包脚本执行的原因。
 */
export enum WatchdogTerminateReason {
    /**
     * @remarks
     * 行为包的脚本运行时因脚本无响应（挂起或无限循环）而终止。
     *
     */
    Hang = 'Hang',
    /**
     * @remarks
     * 行为包的脚本运行时因栈溢出（函数调用链过长且可能无限）而终止。
     *
     */
    StackOverflow = 'StackOverflow',
}