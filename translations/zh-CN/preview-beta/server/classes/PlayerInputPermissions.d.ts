/**
 * 包含启用/禁用玩家输入权限的API。
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks
     * 如果输入权限已启用，则返回true。
     *
     * 此函数无法在受限执行模式下调用。
     * @param permissionCategory - 输入权限类别。
     * @returns 如果权限已启用则返回true，否则返回false。
     *
     * @throws 此函数可能抛出错误。
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @remarks
     * 启用或禁用输入权限。启用时输入将生效，禁用时则无效。
     *
     * 此函数无法在受限执行模式下调用。
     * @param permissionCategory - 输入权限类别。
     * @param isEnabled - 若要启用输入权限，则设为true；若要禁用，则设为false。
     *
     * @throws 此函数可能抛出错误。
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}