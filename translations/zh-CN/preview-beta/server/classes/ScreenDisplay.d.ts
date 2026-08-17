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
     * 如果当前对此屏幕显示管理器对象的引用有效且可用，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * @returns 当前隐藏的HUD元素列表。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * @param hudElements 要保留的HUD元素列表，其他元素将被隐藏。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * @param hudElement 要检查的HUD元素。
     * @returns 如果该HUD元素被强制隐藏，则返回 true。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    resetHudElementsVisibility(): void;
    /**
     * @remarks
     * 设置动作栏文本——显示在标题下方和快捷栏上方的文本。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param text 动作栏文本的新值。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * 设置抬头显示（HUD）特定元素的可见性。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param visible 是否将HUD元素设置为不可见，或重置为默认值。
     * @param hudElements 可选的要配置可见性的HUD元素列表。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks
     * 将导致标题显示在玩家的屏幕上。如果设置为空字符串，则清除标题。
     * 您可以选择指定附加副标题以及淡入、停留和淡出时间。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param title 要显示的标题文本，可以是字符串或RawMessage。
     * @param options 可选的标题显示选项，包括副标题和淡入淡出时间等。
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
     * 如果之前通过setTitle方法显示了副标题，则更新副标题。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param subtitle 副标题的新值。
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