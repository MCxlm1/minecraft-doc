/**
 * 容器槽位无效。当所属容器被销毁或卸载时，
 * 可能出现此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerSlotError extends Error {
    private constructor();
}