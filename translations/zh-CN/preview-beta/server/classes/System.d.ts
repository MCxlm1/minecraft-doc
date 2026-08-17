/**
 * 提供系统级事件和函数的类。
 */
export class System {
    private constructor();
    /**
     * @remarks
     * 返回系统级操作的 after-events（事件后）集合。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @remarks
     * 返回系统级操作的 before-events（事件前）集合。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * 表示服务器当前的游戏 tick（刻度）。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * 如果这是当前已加载编辑器的世界，则返回 true，否则返回 false。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly isEditorWorld: boolean;
    /**
     * @remarks
     * 包含服务器的设备信息。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly serverSystemInfo: SystemInfo;
    /**
     * @remarks
     * 取消通过 {@link System.runJob} 排队的任务的执行。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param jobId
     * 从 {@link System.runJob} 返回的任务 ID。
     */
    clearJob(jobId: number): void;
    /**
     * @remarks
     * 取消之前通过 {@link System.run} 计划执行的函数的运行。
     *
     * 此函数可在早期执行模式下调用。
     *
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * 在下一个可用的将来时间运行指定的函数。
     * 这通常用于实现延迟行为和游戏循环。在事件处理程序上下文中运行时，
     * 通常会在事件发生的同一 tick 结束时运行代码。在其他代码中（例如
     * system.run 回调）运行时，将在下一个 tick 运行该函数。但请注意，
     * 根据系统负载情况，无法保证在同一 tick 或下一个 tick 中运行。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 要在下一个游戏 tick 运行的函数回调。
     * @returns
     * 一个不透明的标识符，可与 `clearRun` 函数一起使用以取消此运行的执行。
     * @example trapTick.ts
     * ```typescript
     * import { world, system } from '@minecraft/server';
     *
     * function trapTick() {
     *   try {
     *     // Minecraft runs at 20 ticks per second.
     *     if (system.currentTick % 1200 === 0) {
     *       world.sendMessage('Another minute passes...');
     *     }
     *   } catch (e) {
     *     console.warn('Error: ' + e);
     *   }
     *
     *   system.run(trapTick);
     * }
     * ```
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * 按时间间隔运行一组代码。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 在间隔发生时运行的函数代码。
     * @param tickInterval
     * 每隔 N 个 tick 调用一次回调的间隔。
     * @returns
     * 一个不透明的句柄，可与 clearRun 方法一起使用以停止此函数按间隔运行。
     * @example every30Seconds.ts
     * ```typescript
     * import { world, system, DimensionLocation } from '@minecraft/server';
     *
     * function every30Seconds(targetLocation: DimensionLocation) {
     *   const intervalRunIdentifier = Math.floor(Math.random() * 10000);
     *
     *   system.runInterval(() => {
     *     world.sendMessage('This is an interval run ' + intervalRunIdentifier + ' sending a message every 30 seconds.');
     *   }, 600);
     * }
     * ```
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks
     * 将一个生成器排队运行直至完成。该生成器每个 tick 会被分配一个时间片，
     * 并持续运行直到其 yield 或完成。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param generator
     * 要运行的生成器实例。
     * @returns
     * 一个不透明的句柄，可与 {@link System.clearJob} 一起使用以停止此生成器的运行。
     * @example cubeGenerator.ts
     * ```typescript
     * import { system, BlockPermutation, DimensionLocation } from '@minecraft/server';
     *
     * function cubeGenerator(targetLocation: DimensionLocation) {
     *   const blockPerm = BlockPermutation.resolve('minecraft:cobblestone');
     *
     *   system.runJob(blockPlacingGenerator(blockPerm, targetLocation, 15));
     * }
     *
     * function* blockPlacingGenerator(blockPerm: BlockPermutation, startingLocation: DimensionLocation, size: number) {
     *   for (let x = startingLocation.x; x < startingLocation.x + size; x++) {
     *     for (let y = startingLocation.y; y < startingLocation.y + size; y++) {
     *       for (let z = startingLocation.z; z < startingLocation.z + size; z++) {
     *         const block = startingLocation.dimension.getBlock({ x: x, y: y, z: z });
     *         if (block) {
     *           block.setPermutation(blockPerm);
     *         }
     *         yield;
     *       }
     *     }
     *   }
     * }
     * ```
     */
    runJob(generator: Generator<void, void, void>): number;
    /**
     * @remarks
     * 在由 tickDelay 指定的将来时间运行一组代码。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 在超时发生时运行的函数代码。
     * @param tickDelay
     * 在调用间隔之前等待的时间量（以 tick 为单位）。
     * @returns
     * 一个不透明的句柄，可与 clearRun 方法一起使用以停止此函数按间隔运行。
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @remarks
     * 在脚本中触发一个带有指定消息 ID 和负载的事件。
     *
     * @param id
     * 要发送的消息标识符。这是自定义的，取决于你在世界中可能安装的行为包和内容的类型。
     * @param message
     * 要发送的消息的数据组件。这是自定义的，取决于你在世界中可能安装的行为包和内容的类型。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    sendScriptEvent(id: string, message: string): void;
    /**
     * @remarks
     * waitTicks 返回一个在请求的 tick 数量后解决的 promise。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param ticks
     * 要等待的 tick 数量。最小值为 1。
     * @returns
     * 一个在指定数量的 tick 发生后解决的 promise。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}