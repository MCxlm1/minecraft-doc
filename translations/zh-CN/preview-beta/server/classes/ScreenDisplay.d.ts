/**
 * 包含关于屏幕上显示的用户界面元素的信息。
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
     * 如果当前此屏幕显示管理器对象的引用有效且功能正常，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @returns 当前隐藏的 HUD 元素数组。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @param hudElements
     * 可选的 HUD 元素列表，表示要保留显示（不隐藏）的元素。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @param hudElement
     * 要检查是否强制隐藏的 HUD 元素。
     * @returns 如果该 HUD 元素被强制隐藏，则返回 true，否则返回 false。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    resetHudElementsVisibility(): void;
    /**
     * @remarks
     * 设置动作栏文本 - 显示在标题下方和快捷栏上方的一段文本。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param text
     * 动作栏文本的新值。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 设置抬头显示器（HUD）特定元素的可见性。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param visible
     * 是否将 HUD 元素设置为不可见，或将其重置回默认值。
     * @param hudElements
     * 可选的 HUD 元素列表，用于配置其可见性。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks
     * 将导致标题显示在玩家的屏幕上显示。如果设置为空字符串，则会清除标题。您可以选择指定额外的副标题以及淡入、停留和淡出时间。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param title
     * 要显示的标题文本。如果设置为空字符串，则清除标题。
     * @param options
     * 可选的标题显示选项，包括副标题、淡入时间、停留时间和淡出时间。
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
     * 如果副标题先前通过 setTitle 方法显示，则更新副标题。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param subtitle
     * 要更新的副标题文本。
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