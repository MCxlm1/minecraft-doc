/**
 * 包含启用/禁用玩家输入权限的 API。
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks
     * 如果某个输入权限已启用，则返回 true。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param permissionCategory - 要查询的输入权限类别。
     * @returns 如果输入权限已启用，则为 true；否则为 false。
     * @throws 此函数可能抛出错误。
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @remarks
     * 启用或禁用某个输入权限。启用时输入将正常工作，禁用时则无法正常工作。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param permissionCategory - 要设置状态的输入权限类别。
     * @param isEnabled - 是否启用该输入权限。
     * @throws 此函数可能抛出错误。
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}