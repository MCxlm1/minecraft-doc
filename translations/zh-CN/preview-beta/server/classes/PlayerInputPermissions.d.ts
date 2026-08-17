/**
 * 包含用于启用/禁用玩家输入权限的API。
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks
     * 如果输入权限已启用，则返回true。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param permissionCategory - 要检查的输入权限类别。
     * @returns 如果该输入权限已启用，则返回true；否则返回false。
     * @throws 此函数可能抛出错误。
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @remarks
     * 启用或禁用输入权限。启用时输入将正常工作，禁用时则不会。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param permissionCategory - 要设置或切换的输入权限类别。
     * @param isEnabled - 如果为true，则启用输入权限；如果为false，则禁用。
     * @throws 此函数可能抛出错误。
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}