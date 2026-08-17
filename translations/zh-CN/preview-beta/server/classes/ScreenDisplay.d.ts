/**
 * 包含有关显示在屏幕上的
 * 用户界面元素的信息。
 * @example setTitle.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 *
 * function setTitle(targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   if (players.length > 0) {
 *     players[0].onScreenDisplay.setTitle('§o§6Fancy Title§r');
 *   }
 * }
 * ```
 * @example setTitleAndSubtitle.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 *
 * function setTitleAndSubtitle(targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   players[0].onScreenDisplay.setTitle('Chapter 1', {
 *     stayDuration: 100,
 *     fadeInDuration: 2,
 *     fadeOutDuration: 4,
 *     subtitle: 'Trouble in Block Town',
 *   });
 * }
 * ```
 * @example countdown.ts
 * ```typescript
 * import { world, system, DimensionLocation } from '@minecraft/server';
 *
 * function countdown(targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   players[0].onScreenDisplay.setTitle('Get ready!', {
 *     stayDuration: 220,
 *     fadeInDuration: 2,
 *     fadeOutDuration: 4,
 *     subtitle: '10',
 *   });
 *
 *   let countdown = 10;
 *
 *   const intervalId = system.runInterval(() => {
 *     countdown--;
 *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
 *
 *     if (countdown == 0) {
 *       system.clearRun(intervalId);
 *     }
 *   }, 20);
 * }
 * ```
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @remarks
     * 如果当前对此屏幕显示管理器对象的引用有效且可用，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @returns 当前隐藏的 HUD 元素数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param hudElements
     * 可选的 HUD 元素列表，用于指定需要保持可见的元素。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param hudElement
     * 要检查是否被强制隐藏的 HUD 元素。
     * @returns 如果该 HUD 元素被强制隐藏，则返回 true。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    resetHudElementsVisibility(): void;
    /**
     * @remarks
     * 设置行动栏文本——显示在标题下方、快捷栏上方的文本。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param text
     * 行动栏文本的新值。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 设置平视显示器（HUD）中某个元素的可见性。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param visible
     * 是将 HUD 元素设置为不可见，还是将其重置为默认状态。
     * @param hudElements
     * 可选的 HUD 元素列表，用于配置可见性。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks
     * 将在玩家的屏幕显示上显示一个标题。如果设置为空字符串，将清除标题。你还可以选择指定附加副标题以及淡入、停留和淡出时间。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param title
     * 要显示的标题文本。
     * @param options
     * 标题显示选项，包括副标题及淡入、停留和淡出时间。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @example setTitle.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function setTitle(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   if (players.length > 0) {
     *     players[0].onScreenDisplay.setTitle('§o§6Fancy Title§r');
     *   }
     * }
     * ```
     * @example setTitleAndSubtitle.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function setTitleAndSubtitle(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle('Chapter 1', {
     *     stayDuration: 100,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: 'Trouble in Block Town',
     *   });
     * }
     * ```
     * @example countdown.ts
     * ```typescript
     * import { world, system, DimensionLocation } from '@minecraft/server';
     *
     * function countdown(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle('Get ready!', {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: '10',
     *   });
     *
     *   let countdown = 10;
     *
     *   const intervalId = system.runInterval(() => {
     *     countdown--;
     *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *     if (countdown == 0) {
     *       system.clearRun(intervalId);
     *     }
     *   }, 20);
     * }
     * ```
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * 如果副标题先前已通过 setTitle 方法显示，则更新副标题。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param subtitle
     * 新的副标题文本。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @example countdown.ts
     * ```typescript
     * import { world, system, DimensionLocation } from '@minecraft/server';
     *
     * function countdown(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle('Get ready!', {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: '10',
     *   });
     *
     *   let countdown = 10;
     *
     *   const intervalId = system.runInterval(() => {
     *     countdown--;
     *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *     if (countdown == 0) {
     *       system.clearRun(intervalId);
     *     }
     *   }, 20);
     * }
     * ```
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}