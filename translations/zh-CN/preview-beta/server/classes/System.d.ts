/**
 * 提供系统级事件和函数的类。
 */
export class System {
    private constructor();
    /**
     * @remarks
     * 返回系统级操作的 after 事件集合。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @remarks
     * 返回系统级操作的 before 事件集合。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * 表示服务器当前的游戏刻（tick）。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * 如果这是一个当前已加载编辑器的世界，则返回 true；否则返回 false。
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
     * 取消先前通过 {@link System.run} 调度的函数运行的执行。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param runId
     * 要取消的运行的 ID。
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * 在下一个可用的未来时间运行指定函数。这通常用于实现延迟行为和游戏循环。在事件处理程序上下文中运行时，通常会在事件发生的同一刻的末尾运行代码。在其他代码（如 system.run 回调）中运行时，将在下一刻运行该函数。但请注意，根据系统负载，不保证在同一刻或下一刻运行。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 要在下一个游戏刻运行的回调函数。
     * @returns
     * 一个不透明的标识符，可用于 `clearRun` 函数取消此运行的执行。
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
     * 当此时间间隔发生时运行的函数代码。
     * @param tickInterval
     * 运行回调的间隔刻数 N。
     * @returns
     * 一个不透明的句柄，可用于 clearRun 方法停止此函数按时间间隔运行。
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
     * 将生成器排队运行至完成。生成器每刻会获得一个时间片，并运行到其让出（yield）或完成。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param generator
     * 要运行的生成器实例。
     * @returns
     * 一个不透明的句柄，可用于 {@link System.clearJob} 停止此生成器的运行。
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
     * 当此超时发生时运行的函数代码。
     * @param tickDelay
     * 在调用该函数之前等待的时间（以刻为单位）。
     * @returns
     * 一个不透明的句柄，可用于 clearRun 方法停止此函数按时间间隔运行。
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @remarks
     * 在脚本中触发一个事件，包含指定的消息 ID 和负载。
     *
     * @param id
     * 要发送的消息的标识符。这是自定义的，取决于您在世界中可能安装的行为包和内容的类型。
     * @param message
     * 要发送的消息的数据组件。这是自定义的，取决于您在世界中可能安装的行为包和内容的类型。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 当引擎错误发生时。
     *
     * {@link minecraftcommon.InvalidArgumentError} - 当参数无效时。
     *
     * {@link NamespaceNameError} - 当命名空间名称无效时。
     */
    sendScriptEvent(id: string, message: string): void;
    /**
     * @remarks
     * waitTicks 返回一个在请求的刻数之后解决的 Promise。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param ticks
     * 要等待的刻数。最小值为 1。
     * @returns
     * 一个 Promise，当指定数量的刻已过后解决。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 当引擎错误发生时。
     */
    waitTicks(ticks: number): Promise<void>;
}