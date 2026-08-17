/**
 * 包含关于当前屏幕上显示的用户界面元素的信息。
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
     * 如果当前引用的屏幕显示管理器对象有效且可用，则返回 true。
     *
     */
    readonly isValid: boolean;
    /**
     * 获取当前被隐藏的 HUD 元素列表。
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @returns 当前被隐藏的 HUD 元素数组。
     * @throws 当此屏幕显示管理器所关联的实体不再有效时，抛出 {@link InvalidEntityError}。
     */
    getHiddenHudElements(): HudElement[];
    /**
     * 隐藏除指定元素之外的所有 HUD 元素。
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param hudElements
     * 需要保持可见的 HUD 元素列表。省略时，将隐藏所有 HUD 元素。
     * @throws 当此屏幕显示管理器所关联的实体不再有效时，抛出 {@link InvalidEntityError}。
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * 检查指定的 HUD 元素是否被强制隐藏。
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param hudElement
     * 要检查的 HUD 元素。
     * @returns 如果该 HUD 元素被强制隐藏，则返回 true；否则返回 false。
     * @throws 当此屏幕显示管理器所关联的实体不再有效时，抛出 {@link InvalidEntityError}。
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * 将所有 HUD 元素的可见性重置为默认状态。
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 当此屏幕显示管理器所关联的实体不再有效时，抛出 {@link InvalidEntityError}。
     */
    resetHudElementsVisibility(): void;
    /**
     * 设置动作栏文本——即显示在标题下方、快捷栏上方的文本。
     * 此函数无法在受限执行模式下调用。
     *
     * @param text
     * 动作栏文本的新值。
     * @throws 当此屏幕显示管理器所关联的实体不再有效时，抛出 {@link InvalidEntityError}；当原始消息格式无效时抛出 {@link RawMessageError}。
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * 设置特定 HUD 元素的可见性。
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param visible
     * 是否将 HUD 元素设置为不可见，或重置回默认状态。
     * @param hudElements
     * 可选的要配置可见性的 HUD 元素列表。
     * @throws 当此屏幕显示管理器所关联的实体不再有效时，抛出 {@link InvalidEntityError}。
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * 让标题显示在玩家的屏幕显示上。如果设置为空字符串，将清除标题。你还可以选择指定附加字幕以及淡入、停留和淡出时间。
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param title
     * 要显示的标题文本。
     * @param options
     * 可选的标题显示选项，包括字幕以及淡入、停留和淡出时间。
     * @throws 当某个参数超出允许范围时抛出 {@link minecraftcommon.ArgumentOutOfBoundsError}；当此屏幕显示管理器所关联的实体不再有效时抛出 {@link InvalidEntityError}；当原始消息格式无效时抛出 {@link RawMessageError}。
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
     * 如果之前已通过 setTitle 方法显示了字幕，则更新该字幕。
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * @param subtitle
     * 新的字幕文本。
     * @throws 当此屏幕显示管理器所关联的实体不再有效时，抛出 {@link InvalidEntityError}；当原始消息格式无效时抛出 {@link RawMessageError}。
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