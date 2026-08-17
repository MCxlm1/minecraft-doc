/**
 * 一个提供系统级事件和函数的类。
 */
export class System {
    private constructor();
    /**
     * @remarks
     * 返回系统级操作的事后事件集合。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @remarks
     * 返回系统级操作的事前事件集合。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * 表示服务器当前世界的 tick。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * 如果当前世界已加载编辑器，则返回 true；否则返回 false。
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
     * 取消通过 {@link
     * System.runJob} 排队的任务的执行。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param jobId
     * 由 {@link System.runJob} 返回的任务 ID。
     */
    clearJob(jobId: number): void;
    /**
     * @remarks
     * 取消之前通过 {@link System.run} 调度的函数运行的执行。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param runId
     * 之前通过 {@link System.run} 调度的函数运行的 ID。
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * 在下一个可用的未来时间运行指定的函数。这通常用于实现延迟行为和游戏循环。在事件处理程序上下文中运行时，通常会在事件发生的同一 tick 结束时执行代码。在其他代码（如 system.run 调用）中运行时，该函数将在下一 tick 执行。但请注意，根据系统负载，无法保证在同一 tick 或下一 tick 执行。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 要在下一个游戏 tick 运行的函数回调。
     * @returns
     * 一个不透明的标识符，可与 `clearRun` 函数一起使用以取消此次运行。
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
     * 在此时间间隔发生时将运行的功能代码。
     * @param tickInterval
     * 每隔 N 个 tick 调用一次回调的时间间隔。
     * @returns
     * 一个不透明的句柄，可与 clearRun 方法一起使用以停止此函数在时间间隔上的运行。
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
     * 将生成器加入队列并运行至完成。生成器每 tick 会获得一个时间片，并持续运行直到让出（yield）或完成。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param generator
     * 要运行的生成器实例。
     * @returns
     * 一个不透明的句柄，可与 {@link
     * System.clearJob} 一起使用以停止此生成器的运行。
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
     * 在由 tickDelay 指定的未来时间运行一组代码。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 在超时发生时将运行的功能代码。
     * @param tickDelay
     * 在调用该超时之前的时间量，以 tick 为单位。
     * @returns
     * 一个不透明的句柄，可与 clearRun 方法一起使用以停止此函数在时间间隔上的运行。
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @remarks
     * 在脚本中触发一个带有指定消息 ID 和负载的事件。
     *
     * @param id
     * 要发送的消息的标识符。这是自定义的，取决于你可能在世界中安装的行为包和内容类型。
     * @param message
     * 要发送的消息的数据组件。这是自定义的，取决于你可能在世界中安装的行为包和内容类型。
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
     * waitTicks 返回一个 Promise，在请求的 tick 数量之后 resolve。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param ticks
     * 要等待的 tick 数量。最小值为 1。
     * @returns
     * 一个 Promise，在指定的 tick 数量已经过时被 resolve。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}