// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * The `@minecraft/server-net` module contains types for
 * executing HTTP-based requests. This module can only be used
 * on Bedrock Dedicated Server. These APIs do not function
 * within the Minecraft game client or within Minecraft Realms.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-net",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserver from '@minecraft/server';
import * as minecraftserveradmin from '@minecraft/server-admin';
export enum HttpRequestMethod {
    /**
     * @remarks
     * Represents the method for an HTTP DELETE request. DELETE
     * requests are used to delete the specified resource from the
     * server.
     *
     */
    Delete = 'Delete',
    /**
     * @remarks
     * Represents the method for an HTTP GET request. GET requests
     * are commonly used to retrieve data from the specified URI.
     *
     */
    Get = 'Get',
    /**
     * @remarks
     * Represents the method for an HTTP HEAD request. HEAD
     * requests are similar to a GET request, but are commonly used
     * to retrieve just the HTTP response headers from the
     * specified URI, and not the body contents.
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * Represents the method for an HTTP PATCH request. PATCH
     * requests are commonly used to apply partial modifications to
     * a resource.
     *
     */
    Patch = 'Patch',
    /**
     * @remarks
     * Represents the method for an HTTP POST request. POST
     * requests are commonly used to submit data to be processed to
     * the specified URI.
     *
     */
    Post = 'Post',
    /**
     * @remarks
     * Represents the method for an HTTP PUT request. PUT requests
     * are commonly used to update a single resource that already
     * exists in a resource collection.
     *
     */
    Put = 'Put',
}

export enum HttpStatusCode {
    Continue = 100,
    SwitchingProtocols = 101,
    Processing = 102,
    OK = 200,
    Created = 201,
    Accepted = 202,
    NonAuthoritativeInformation = 203,
    NoContent = 204,
    ResetContent = 205,
    PartialContent = 206,
    MultiStatus = 207,
    AlreadyReported = 208,
    IMUsed = 226,
    MultipleChoices = 300,
    MovedPermanently = 301,
    Found = 302,
    SeeOther = 303,
    NotModified = 304,
    UseProxy = 305,
    TemporaryRedirect = 307,
    PermanentRedirect = 308,
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    ProxyAuthenticationRequired = 407,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    LengthRequired = 411,
    PreconditionFailed = 412,
    PayloadTooLarge = 413,
    RequestURITooLong = 414,
    UnsupportedMediaType = 415,
    RequestedRangeNotSatisfiable = 416,
    ExpectationFailed = 417,
    MisdirectedRequest = 421,
    UnprocessableEntity = 422,
    Locked = 423,
    FailedDependency = 424,
    TooEarly = 425,
    UpgradeRequired = 426,
    PreconditionRequired = 428,
    TooManyRequests = 429,
    RequestHeaderFieldsTooLarge = 431,
    ConnectionClosedWithoutResponse = 444,
    UnavailableForLegalReasons = 451,
    ClientRequestTimeout = 498,
    ClientClosedRequest = 499,
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
    HttpVersionNotSupported = 505,
    VariantAlsoNegotiates = 506,
    InsufficientStorage = 507,
    LoopDetected = 508,
    NotExtended = 510,
    NetworkAuthenticationRequired = 511,
    NetworkConnectionTimeoutError = 599,
}

/**
 * Represents the unique type of network packet.
 */
export enum PacketId {
    ActorEventPacket = 'ActorEventPacket',
    ActorPickRequestPacket = 'ActorPickRequestPacket',
    AddActorPacket = 'AddActorPacket',
    AddBehaviorTreePacket = 'AddBehaviorTreePacket',
    AddItemActorPacket = 'AddItemActorPacket',
    AddPaintingPacket = 'AddPaintingPacket',
    AddPlayerPacket = 'AddPlayerPacket',
    AddVolumeEntityPacket = 'AddVolumeEntityPacket',
    AgentActionEventPacket = 'AgentActionEventPacket',
    AgentAnimationPacket = 'AgentAnimationPacket',
    AnimateEntityPacket = 'AnimateEntityPacket',
    AnimatePacket = 'AnimatePacket',
    AnvilDamagePacket = 'AnvilDamagePacket',
    AutomationClientConnectPacket = 'AutomationClientConnectPacket',
    AvailableActorIdentifiersPacket = 'AvailableActorIdentifiersPacket',
    AvailableCommandsPacket = 'AvailableCommandsPacket',
    AwardAchievementPacket = 'AwardAchievementPacket',
    BiomeDefinitionListPacket = 'BiomeDefinitionListPacket',
    BlockActorDataPacket = 'BlockActorDataPacket',
    BlockEventPacket = 'BlockEventPacket',
    BlockPickRequestPacket = 'BlockPickRequestPacket',
    BookEditPacket = 'BookEditPacket',
    BossEventPacket = 'BossEventPacket',
    CameraAimAssistActorPriorityPacket = 'CameraAimAssistActorPriorityPacket',
    CameraAimAssistPacket = 'CameraAimAssistPacket',
    CameraAimAssistPresetsPacket = 'CameraAimAssistPresetsPacket',
    CameraInstructionPacket = 'CameraInstructionPacket',
    CameraPacket = 'CameraPacket',
    CameraPresetsPacket = 'CameraPresetsPacket',
    CameraShakePacket = 'CameraShakePacket',
    CameraSplinePacket = 'CameraSplinePacket',
    ChangeDimensionPacket = 'ChangeDimensionPacket',
    ChangeMobPropertyPacket = 'ChangeMobPropertyPacket',
    ChunkRadiusUpdatedPacket = 'ChunkRadiusUpdatedPacket',
    ClientboundAttributeLayerSyncPacket = 'ClientboundAttributeLayerSyncPacket',
    ClientboundCloseFormPacket = 'ClientboundCloseFormPacket',
    ClientboundControlSchemeSetPacket = 'ClientboundControlSchemeSetPacket',
    ClientboundDataDrivenUICloseScreenPacket = 'ClientboundDataDrivenUICloseScreenPacket',
    ClientboundDataDrivenUIReloadPacket = 'ClientboundDataDrivenUIReloadPacket',
    ClientboundDataDrivenUIShowScreenPacket = 'ClientboundDataDrivenUIShowScreenPacket',
    ClientboundDataStorePacket = 'ClientboundDataStorePacket',
    ClientboundDebugRendererPacket = 'ClientboundDebugRendererPacket',
    ClientboundMapItemDataPacket = 'ClientboundMapItemDataPacket',
    ClientboundTextureShiftPacket = 'ClientboundTextureShiftPacket',
    ClientboundUpdateSoundDataPacket = 'ClientboundUpdateSoundDataPacket',
    ClientCacheBlobStatusPacket = 'ClientCacheBlobStatusPacket',
    ClientCacheMissResponsePacket = 'ClientCacheMissResponsePacket',
    ClientCacheStatusPacket = 'ClientCacheStatusPacket',
    ClientCameraAimAssistPacket = 'ClientCameraAimAssistPacket',
    ClientMovementPredictionSyncPacket = 'ClientMovementPredictionSyncPacket',
    ClientToServerHandshakePacket = 'ClientToServerHandshakePacket',
    CodeBuilderPacket = 'CodeBuilderPacket',
    CodeBuilderSourcePacket = 'CodeBuilderSourcePacket',
    CommandBlockUpdatePacket = 'CommandBlockUpdatePacket',
    CommandOutputPacket = 'CommandOutputPacket',
    CommandRequestPacket = 'CommandRequestPacket',
    CompletedUsingItemPacket = 'CompletedUsingItemPacket',
    ContainerClosePacket = 'ContainerClosePacket',
    ContainerOpenPacket = 'ContainerOpenPacket',
    ContainerRegistryCleanupPacket = 'ContainerRegistryCleanupPacket',
    ContainerSetDataPacket = 'ContainerSetDataPacket',
    CorrectPlayerMovePredictionPacket = 'CorrectPlayerMovePredictionPacket',
    CraftingDataPacket = 'CraftingDataPacket',
    CreatePhotoPacket = 'CreatePhotoPacket',
    CreativeContentPacket = 'CreativeContentPacket',
    CurrentStructureFeaturePacket = 'CurrentStructureFeaturePacket',
    DeathInfoPacket = 'DeathInfoPacket',
    DebugInfoPacket = 'DebugInfoPacket',
    DimensionDataPacket = 'DimensionDataPacket',
    DisconnectPacket = 'DisconnectPacket',
    EditorNetworkPacket = 'EditorNetworkPacket',
    EducationSettingsPacket = 'EducationSettingsPacket',
    EduUriResourcePacket = 'EduUriResourcePacket',
    EmoteListPacket = 'EmoteListPacket',
    EmotePacket = 'EmotePacket',
    FeatureRegistryPacket = 'FeatureRegistryPacket',
    GameRulesChangedPacket = 'GameRulesChangedPacket',
    GameTestRequestPacket = 'GameTestRequestPacket',
    GameTestResultsPacket = 'GameTestResultsPacket',
    GraphicsOverrideParameterPacket = 'GraphicsOverrideParameterPacket',
    GuiDataPickItemPacket = 'GuiDataPickItemPacket',
    HurtArmorPacket = 'HurtArmorPacket',
    InteractPacket = 'InteractPacket',
    InventoryContentPacket = 'InventoryContentPacket',
    InventorySlotPacket = 'InventorySlotPacket',
    InventoryTransactionPacket = 'InventoryTransactionPacket',
    ItemRegistryPacket = 'ItemRegistryPacket',
    ItemStackRequestPacket = 'ItemStackRequestPacket',
    ItemStackResponsePacket = 'ItemStackResponsePacket',
    JigsawStructureDataPacket = 'JigsawStructureDataPacket',
    LabTablePacket = 'LabTablePacket',
    LecternUpdatePacket = 'LecternUpdatePacket',
    LegacyTelemetryEventPacket = 'LegacyTelemetryEventPacket',
    LessonProgressPacket = 'LessonProgressPacket',
    LevelChunkPacket = 'LevelChunkPacket',
    LevelEventGenericPacket = 'LevelEventGenericPacket',
    LevelEventPacket = 'LevelEventPacket',
    LevelSoundEventPacket = 'LevelSoundEventPacket',
    LocatorBarPacket = 'LocatorBarPacket',
    LoginPacket = 'LoginPacket',
    MapCreateLockedCopyPacket = 'MapCreateLockedCopyPacket',
    MapInfoRequestPacket = 'MapInfoRequestPacket',
    MobArmorEquipmentPacket = 'MobArmorEquipmentPacket',
    MobEffectPacket = 'MobEffectPacket',
    MobEquipmentPacket = 'MobEquipmentPacket',
    ModalFormRequestPacket = 'ModalFormRequestPacket',
    ModalFormResponsePacket = 'ModalFormResponsePacket',
    MotionPredictionHintsPacket = 'MotionPredictionHintsPacket',
    MoveActorAbsolutePacket = 'MoveActorAbsolutePacket',
    MoveActorDeltaPacket = 'MoveActorDeltaPacket',
    MovementEffectPacket = 'MovementEffectPacket',
    MovePlayerPacket = 'MovePlayerPacket',
    MultiplayerSettingsPacket = 'MultiplayerSettingsPacket',
    NetworkChunkPublisherUpdatePacket = 'NetworkChunkPublisherUpdatePacket',
    NetworkSettingsPacket = 'NetworkSettingsPacket',
    NetworkStackLatencyPacket = 'NetworkStackLatencyPacket',
    NpcDialoguePacket = 'NpcDialoguePacket',
    NpcRequestPacket = 'NpcRequestPacket',
    OnScreenTextureAnimationPacket = 'OnScreenTextureAnimationPacket',
    OpenSignPacket = 'OpenSignPacket',
    PacketViolationWarningPacket = 'PacketViolationWarningPacket',
    PartyChangedPacket = 'PartyChangedPacket',
    PartyDestinationCookieResponsePacket = 'PartyDestinationCookieResponsePacket',
    PhotoTransferPacket = 'PhotoTransferPacket',
    PlayerActionPacket = 'PlayerActionPacket',
    PlayerArmorDamagePacket = 'PlayerArmorDamagePacket',
    PlayerAuthInputPacket = 'PlayerAuthInputPacket',
    PlayerEnchantOptionsPacket = 'PlayerEnchantOptionsPacket',
    PlayerFogPacket = 'PlayerFogPacket',
    PlayerHotbarPacket = 'PlayerHotbarPacket',
    PlayerListPacket = 'PlayerListPacket',
    PlayerLocationPacket = 'PlayerLocationPacket',
    PlayerSkinPacket = 'PlayerSkinPacket',
    PlayerStartItemCooldownPacket = 'PlayerStartItemCooldownPacket',
    PlayerToggleCrafterSlotRequestPacket = 'PlayerToggleCrafterSlotRequestPacket',
    PlayerUpdateEntityOverridesPacket = 'PlayerUpdateEntityOverridesPacket',
    PlaySoundPacket = 'PlaySoundPacket',
    PlayStatusPacket = 'PlayStatusPacket',
    PositionTrackingDBClientRequestPacket = 'PositionTrackingDBClientRequestPacket',
    PositionTrackingDBServerBroadcastPacket = 'PositionTrackingDBServerBroadcastPacket',
    PrimitiveShapesPacket = 'PrimitiveShapesPacket',
    PurchaseReceiptPacket = 'PurchaseReceiptPacket',
    RecordStartedPacket = 'RecordStartedPacket',
    RefreshEntitlementsPacket = 'RefreshEntitlementsPacket',
    RemoveActorPacket = 'RemoveActorPacket',
    RemoveObjectivePacket = 'RemoveObjectivePacket',
    RemoveVolumeEntityPacket = 'RemoveVolumeEntityPacket',
    RequestAbilityPacket = 'RequestAbilityPacket',
    RequestChunkRadiusPacket = 'RequestChunkRadiusPacket',
    RequestNetworkSettingsPacket = 'RequestNetworkSettingsPacket',
    RequestPermissionsPacket = 'RequestPermissionsPacket',
    ResourcePackChunkDataPacket = 'ResourcePackChunkDataPacket',
    ResourcePackChunkRequestPacket = 'ResourcePackChunkRequestPacket',
    ResourcePackClientResponsePacket = 'ResourcePackClientResponsePacket',
    ResourcePackDataInfoPacket = 'ResourcePackDataInfoPacket',
    ResourcePacksInfoPacket = 'ResourcePacksInfoPacket',
    ResourcePacksReadyForValidationPacket = 'ResourcePacksReadyForValidationPacket',
    ResourcePackStackPacket = 'ResourcePackStackPacket',
    RespawnPacket = 'RespawnPacket',
    ScriptMessagePacket = 'ScriptMessagePacket',
    SendPartyDestinationCookiePacket = 'SendPartyDestinationCookiePacket',
    ServerboundDataDrivenScreenClosedPacket = 'ServerboundDataDrivenScreenClosedPacket',
    ServerboundDataStorePacket = 'ServerboundDataStorePacket',
    ServerboundDiagnosticsPacket = 'ServerboundDiagnosticsPacket',
    ServerboundLoadingScreenPacket = 'ServerboundLoadingScreenPacket',
    ServerboundPackSettingChangePacket = 'ServerboundPackSettingChangePacket',
    ServerPlayerPostMovePositionPacket = 'ServerPlayerPostMovePositionPacket',
    ServerPresenceInfoPacket = 'ServerPresenceInfoPacket',
    ServerSettingsRequestPacket = 'ServerSettingsRequestPacket',
    ServerSettingsResponsePacket = 'ServerSettingsResponsePacket',
    ServerStatsPacket = 'ServerStatsPacket',
    ServerStoreInfoPacket = 'ServerStoreInfoPacket',
    ServerToClientHandshakePacket = 'ServerToClientHandshakePacket',
    SetActorDataPacket = 'SetActorDataPacket',
    SetActorLinkPacket = 'SetActorLinkPacket',
    SetActorMotionPacket = 'SetActorMotionPacket',
    SetCommandsEnabledPacket = 'SetCommandsEnabledPacket',
    SetDefaultGameTypePacket = 'SetDefaultGameTypePacket',
    SetDifficultyPacket = 'SetDifficultyPacket',
    SetDisplayObjectivePacket = 'SetDisplayObjectivePacket',
    SetHealthPacket = 'SetHealthPacket',
    SetHudPacket = 'SetHudPacket',
    SetLastHurtByPacket = 'SetLastHurtByPacket',
    SetLocalPlayerAsInitializedPacket = 'SetLocalPlayerAsInitializedPacket',
    SetPlayerFurnaceOptionsPacket = 'SetPlayerFurnaceOptionsPacket',
    SetPlayerGameTypePacket = 'SetPlayerGameTypePacket',
    SetPlayerInventoryOptionsPacket = 'SetPlayerInventoryOptionsPacket',
    SetScoreboardIdentityPacket = 'SetScoreboardIdentityPacket',
    SetScorePacket = 'SetScorePacket',
    SetSpawnPositionPacket = 'SetSpawnPositionPacket',
    SetTimePacket = 'SetTimePacket',
    SettingsCommandPacket = 'SettingsCommandPacket',
    SetTitlePacket = 'SetTitlePacket',
    ShowCreditsPacket = 'ShowCreditsPacket',
    ShowProfilePacket = 'ShowProfilePacket',
    ShowStoreOfferPacket = 'ShowStoreOfferPacket',
    SimpleEventPacket = 'SimpleEventPacket',
    SimulationTypePacket = 'SimulationTypePacket',
    SpawnExperienceOrbPacket = 'SpawnExperienceOrbPacket',
    SpawnParticleEffectPacket = 'SpawnParticleEffectPacket',
    StartGamePacket = 'StartGamePacket',
    StopSoundPacket = 'StopSoundPacket',
    StructureBlockUpdatePacket = 'StructureBlockUpdatePacket',
    StructureTemplateDataRequestPacket = 'StructureTemplateDataRequestPacket',
    StructureTemplateDataResponsePacket = 'StructureTemplateDataResponsePacket',
    SubChunkPacket = 'SubChunkPacket',
    SubChunkRequestPacket = 'SubChunkRequestPacket',
    SubClientLoginPacket = 'SubClientLoginPacket',
    SyncActorPropertyPacket = 'SyncActorPropertyPacket',
    SyncWorldClocksPacket = 'SyncWorldClocksPacket',
    TakeItemActorPacket = 'TakeItemActorPacket',
    TextPacket = 'TextPacket',
    TickingAreasLoadStatusPacket = 'TickingAreasLoadStatusPacket',
    ToastRequestPacket = 'ToastRequestPacket',
    TransferPacket = 'TransferPacket',
    TrimDataPacket = 'TrimDataPacket',
    UnlockedRecipesPacket = 'UnlockedRecipesPacket',
    UpdateAbilitiesPacket = 'UpdateAbilitiesPacket',
    UpdateAdventureSettingsPacket = 'UpdateAdventureSettingsPacket',
    UpdateAttributesPacket = 'UpdateAttributesPacket',
    UpdateBlockPacket = 'UpdateBlockPacket',
    UpdateBlockSyncedPacket = 'UpdateBlockSyncedPacket',
    UpdateClientInputLocksPacket = 'UpdateClientInputLocksPacket',
    UpdateClientOptionsPacket = 'UpdateClientOptionsPacket',
    UpdateEquipPacket = 'UpdateEquipPacket',
    UpdatePlayerGameTypePacket = 'UpdatePlayerGameTypePacket',
    UpdateSoftEnumPacket = 'UpdateSoftEnumPacket',
    UpdateSubChunkBlocksPacket = 'UpdateSubChunkBlocksPacket',
    UpdateTradePacket = 'UpdateTradePacket',
    VoxelShapesPacket = 'VoxelShapesPacket',
}

export enum WebSocketClientCloseReasons {
    /**
     * @remarks
     * The server has closed the socket.
     *
     */
    ClosedByServer = 0,
    /**
     * @remarks
     * The client has closed the socket.
     *
     */
    ClosedByClient = 1,
    /**
     * @remarks
     * The client has received payloads whose body exceeds the
     * configured maximum size allowed per tick so the client has
     * closed the socket.
     *
     */
    IncomingPayloadsTooLarge = 2,
}

export class CloseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: WebSocketClientCloseAfterEvent) => void): (arg0: WebSocketClientCloseAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: WebSocketClientCloseAfterEvent) => void): void;
}

/**
 * @example simpleHttpRequest.ts
 * ```typescript
 * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
 *
 * async function updateScore() {
 *   const req = new HttpRequest('http://localhost:3000/updateScore');
 *
 *   req.body = JSON.stringify({
 *     score: 22,
 *   });
 *
 *   req.method = HttpRequestMethod.Post;
 *   req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', 'my-auth-token')];
 *
 *   await http.request(req);
 * }
 * ```
 */
export class HttpClient {
    private constructor();
    /**
     * @remarks
     * Cancels all pending requests.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    cancelAll(reason: string): void;
    /**
     * @remarks
     * Performs a simple HTTP get request.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param uri
     * URL to make an HTTP Request to.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    get(uri: string): Promise<HttpResponse>;
    /**
     * @remarks
     * Performs an HTTP request.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param config
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * An awaitable promise that contains the HTTP response.
     * @example simpleHttpRequest.ts
     * ```typescript
     * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
     *
     * async function updateScore() {
     *   const req = new HttpRequest('http://localhost:3000/updateScore');
     *
     *   req.body = JSON.stringify({
     *     score: 22,
     *   });
     *
     *   req.method = HttpRequestMethod.Post;
     *   req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', 'my-auth-token')];
     *
     *   await http.request(req);
     * }
     * ```
     */
    request(config: HttpRequest): Promise<HttpResponse>;
}

/**
 * Represents an HTTP header - a key/value pair of
 * meta-information about a request.
 * @example simpleHttpRequest.ts
 * ```typescript
 * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
 *
 * async function updateScore() {
 *   const req = new HttpRequest('http://localhost:3000/updateScore');
 *
 *   req.body = JSON.stringify({
 *     score: 22,
 *   });
 *
 *   req.method = HttpRequestMethod.Post;
 *   req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', 'my-auth-token')];
 *
 *   await http.request(req);
 * }
 * ```
 */
export class HttpHeader {
    /**
     * @remarks
     * Key of the HTTP header.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    key: string;
    /**
     * @remarks
     * Value of the HTTP header.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}

/**
 * Main object for structuring a request.
 * @example simpleHttpRequest.ts
 * ```typescript
 * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
 *
 * async function updateScore() {
 *   const req = new HttpRequest('http://localhost:3000/updateScore');
 *
 *   req.body = JSON.stringify({
 *     score: 22,
 *   });
 *
 *   req.method = HttpRequestMethod.Post;
 *   req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', 'my-auth-token')];
 *
 *   await http.request(req);
 * }
 * ```
 */
export class HttpRequest {
    /**
     * @remarks
     * Content of the body of the HTTP request.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    body: minecraftserver.ISerializable | string;
    /**
     * @remarks
     * A collection of HTTP headers to add to the outbound request.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    headers: HttpHeader[];
    /**
     * @remarks
     * HTTP method (e.g., GET or PUT or PATCH) to use for making
     * the request.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    method: HttpRequestMethod;
    /**
     * @remarks
     * Amount of time, in seconds, before the request times out and
     * is abandoned.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    timeout: number;
    /**
     * @remarks
     * The HTTP resource to access.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    uri: string;
    constructor(uri: string);
    /**
     * @remarks
     * Adds an additional header to the overall list of headers
     * used in the corresponding HTTP request.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    /**
     * @remarks
     * Updates the content of the body of the HTTP request.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    setBody(body: minecraftserver.ISerializable | string): HttpRequest;
    /**
     * @remarks
     * Replaces and applies a set of HTTP Headers for the request.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    /**
     * @remarks
     * Sets the desired HTTP method (e.g., GET or PUT or PATCH) to
     * use for making the request.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /**
     * @remarks
     * Sets the maximum amount of time, in seconds, before the
     * request times out and is cancelled.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param timeout
     * The timeout value, in seconds.
     */
    setTimeout(timeout: number): HttpRequest;
}

/**
 * Main object that contains result information from a request.
 */
export class HttpResponse {
    private constructor();
    /**
     * @remarks
     * Body content of the HTTP response.
     *
     */
    readonly body: string;
    /**
     * @remarks
     * A collection of HTTP response headers returned from the
     * request.
     *
     */
    readonly headers: HttpHeader[];
    /**
     * @remarks
     * Information that was used to formulate the HTTP response
     * that this object represents.
     *
     */
    readonly request: HttpRequest;
    /**
     * @remarks
     * HTTP response code for the request. For example, 404
     * represents resource not found, and 500 represents an
     * internal server error.
     *
     */
    readonly status: number;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link SerializableParseError}
     */
    deserialize(identifier: string): minecraftserver.ISerializable;
}

export class MessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: WebSocketClientReceiveAfterEvent) => void,
    ): (arg0: WebSocketClientReceiveAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: WebSocketClientReceiveAfterEvent) => void): void;
}

export class NetworkBeforeEvents {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly packetReceive: PacketReceiveBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly packetSend: PacketSendBeforeEventSignal;
}

export class PacketReceiveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PacketReceivedBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg0: PacketReceivedBeforeEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PacketReceivedBeforeEvent) => void): void;
}

/**
 * Sent as the server receives a network packet from a client.
 * If cancelled, the server will not parse the network packet
 * and will silently ignore it.
 */
export class PacketReceivedBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * The type of network packet.
     *
     */
    readonly packetId: PacketId;
    /**
     * @remarks
     * The size of the network packet in bytes.
     *
     */
    readonly packetSize: number;
    /**
     * @remarks
     * Which client sent the network packet to the game server.
     *
     */
    readonly sender?: minecraftserver.Player;
}

/**
 * Sent as the server sends a network packet to clients.  If
 * cancelled, the server will not send the network packet to
 * the receiving clients.
 */
export class PacketSendBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * The type of network packet.
     *
     */
    readonly packetId: PacketId;
    /**
     * @remarks
     * Which clients the network packet is being sent to.
     *
     */
    readonly recipients: (minecraftserver.Player | undefined)[];
}

export class PacketSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PacketSendBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg0: PacketSendBeforeEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PacketSendBeforeEvent) => void): void;
}

/**
 * Used to manage WebSocket connections.
 */
export class WebSocket {
    private constructor();
    /**
     * @remarks
     * Attempts to connect a WebSocket client.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param uri
     * URL to make connection to.
     * @returns
     * An awaitable promise that contains the WebSocket client that
     * was connected.
     */
    connect(uri: string, headers?: HttpHeader[]): Promise<WebSocketClient>;
}

/**
 * An active WebSocket client.
 */
export class WebSocketClient {
    private constructor();
    /**
     * @remarks
     * Contains a set of events related to this WebSocket client.
     *
     */
    readonly afterEvents: WebSocketClientAfterEvents;
    /**
     * @remarks
     * Set to true if the socket is current connected to the
     * server.
     *
     */
    readonly isOpen: boolean;
    /**
     * @remarks
     * Closes the connection with the server.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link WebSocketNotConnectedError}
     */
    close(): void;
    /**
     * @remarks
     * Sends the provided payload to the server.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param payload
     * The payload that will be included in the network packet.
     * @throws This function can throw errors.
     *
     * {@link RequestBodyTooLargeError}
     *
     * {@link WebSocketNotConnectedError}
     */
    send(payload: string): void;
}

export class WebSocketClientAfterEvents {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly close: CloseAfterEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly message: MessageAfterEventSignal;
}

export class WebSocketClientCloseAfterEvent {
    private constructor();
    readonly reason: WebSocketClientCloseReasons;
}

export class WebSocketClientReceiveAfterEvent {
    private constructor();
    readonly message: string;
}

/**
 * Options for events triggered by network packets.
 */
export interface PacketEventOptions {
    /**
     * @remarks
     * If provided, packet IDs in this list will not trigger the
     * event subscriptions.
     *
     */
    ignoredPacketIds?: PacketId[];
    /**
     * @remarks
     * If provided only packet IDs in this list will trigger the
     * event subscriptions.
     *
     */
    monitoredPacketIds?: PacketId[];
}

/**
 * An error thrown when the maximum number of concurrent HTTP
 * requests has been reached.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class HttpRequestLimitExceededError extends Error {
    private constructor();
    /**
     * @remarks
     * Number of requests already in flight when rejected.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly inFlightRequests: number;
    /**
     * @remarks
     * Configured maximum concurrent HTTP requests.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly maxConcurrentRequests: number;
}

/**
 * An error thrown when a platform-level HTTP error occurs.
 * Information provided in this class may be useful for
 * diagnostics purposes but will differ from platform to
 * platform.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InternalHttpRequestError extends Error {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly errorCode: number;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly errorMessage: string;
}

/**
 * An error thrown when a platform-level WebSocket error
 * occurs.  Information provided in this class may be useful
 * for diagnostics purposes but will differ from platform to
 * platform.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InternalWebSocketError extends Error {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly errorCode: number;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly errorMessage: string;
}

/**
 * An error thrown when a malformed URI is used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MalformedUriError extends Error {
    private constructor();
}

/**
 * An error thrown when an network request body exceeds the
 * configured size limit.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RequestBodyTooLargeError extends Error {
    private constructor();
    /**
     * @remarks
     * Configured maximum body size in bytes.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly maxBytes: number;
    /**
     * @remarks
     * Request body size in bytes.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly providedBytes: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class SerializableParseError extends Error {
    private constructor();
}

/**
 * An error thrown when secure URI scheme is required but a
 * non-secure URI was provided.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TLSOnlyError extends Error {
    private constructor();
    /**
     * @remarks
     * URI that was rejected for not using secure scheme.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly uri: string;
}

/**
 * An error thrown when a network request targets a URI that is
 * not in the configured allow list.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class UriNotAllowedError extends Error {
    private constructor();
    /**
     * @remarks
     * URI that was rejected because it is not allowed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly uri: string;
}

/**
 * An error thrown when the connection with the WebSocket
 * server has failed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketConnectionFailedError extends Error {
    private constructor();
    /**
     * @remarks
     * The error code received when attempting to connect with the
     * server.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly errorCode: HttpStatusCode;
    /**
     * @remarks
     * The URI provided to make this connection attempt that
     * failed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly uri: string;
}

/**
 * An error that is thrown when the maximum number of connected
 * WebSockets is reached.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketLimitExceededError extends Error {
    private constructor();
    /**
     * @remarks
     * Number of WebSocket connections already active when
     * rejected.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly connectedSockets: number;
    /**
     * @remarks
     * Configured maximum active WebSocket connections.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly maxConcurrentConnections: number;
}

/**
 * An error thrown when attempting to use a WebSocket while the
 * socket is not connected to a server.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketNotConnectedError extends Error {
    private constructor();
}

export const beforeEvents: NetworkBeforeEvents;
export const http: HttpClient;
/**
 * @remarks
 * Used to manage WebSocket connections.
 *
 */
export const websocket: WebSocket;
