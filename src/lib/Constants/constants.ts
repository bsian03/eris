export enum ActivityTypes {
  GAME,
  STREAMING,
  LISTENING,
  WATCHING,
  CUSTOM,
  COMPETING,
}

export enum ApplicationCommandOptionTypes {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP,
  STRING,
  INTEGER,
  BOOLEAN,
  USER,
  CHANNEL,
  ROLE,
  MENTIONABLE,
  NUMBER,
}

export enum ApplicationCommandPermissionTypes {
  ROLE = 1,
  USER,
  CHANNEL, //NOTE - New
}

export enum ApplcationCommandTypes {
  CHAT_INPUT = 1,
  USER,
  MESSAGE,
}

export enum AuditLogActions {
  GUILD_UPDATE = 1,

  CHANNEL_CREATE = 10,
  CHANNEL_UPDATE,
  CHANNEL_DELETE,
  CHANNEL_OVERWRITE_CREATE,
  CHANNEL_OVERWRITE_UPDATE,
  CHANNEL_OVERWRITE_DELETE,

  MEMBER_KICK = 20,
  MEMBER_PRUNE,
  MEMBER_BAN_ADD,
  MEMBER_BAN_REMOVE,
  MEMBER_UPDATE,
  MEMBER_ROLE_UPDATE,
  MEMBER_MOVE,
  MEMBER_DISCONNECT,
  BOT_ADD,

  ROLE_CREATE = 30,
  ROLE_UPDATE,
  ROLE_DELETE,

  INVITE_CREATE = 40,
  INVITE_UPDATE,
  INVITE_DELETE,

  WEBHOOK_CREATE = 50,
  WEBHOOK_UPDATE,
  WEBHOOK_DELETE,

  EMOJI_CREATE = 60,
  EMOJI_UPDATE,
  EMOJI_DELETE,

  MESSAGE_DELETE = 72,
  MESSAGE_BULK_DELETE,
  MESSAGE_PIN,
  MESSAGE_UNPIN,

  INTEGRATION_CREATE = 80,
  INTEGRATION_UPDATE,
  INTEGRATION_DELETE,

  STAGE_INSTANCE_CREATE,
  STAGE_INSTANCE_UPDATE,
  STAGE_INSTANCE_DELETE,

  STICKER_CREATE = 90,
  STICKER_UPDATE,
  STICKER_DELETE,

  GUILD_SCHEDULED_EVENT_CREATE = 100,
  GUILD_SCHEDULED_EVENT_UPDATE,
  GUILD_SCHEDULED_EVENT_DELETE,

  THREAD_CREATE = 110,
  THREAD_UPDATE,
  THREAD_DELETE,

  APPLICATION_COMMAND_PERMISSION_UPDATE = 121,

  AUTO_MODERATION_RULE_CREATE = 140, //NOTE - All below new
  AUTO_MODERATION_RULE_UPDATE,
  AUTO_MODERATION_RULE_DELETE,
  AUTO_MODERATION_BLOCK_MESSAGE,
  AUTO_MODERATION_FLAG_TO_CHANNEL,
  AUTO_MODERATION_USER_COMMUNICATION_DISABLED,

  CREATOR_MONETIZATION_REQUEST_CREATED = 150,
  CREATOR_MONETIZATION_TERMS_ACCEPTED,
}

export enum ButtonStyles {
  PRIMARY = 1,
  SECONDARY,
  SUCCESS,
  DANGER,
  LINK
}

export enum ChannelTypes {
  GUILD_TEXT,
  DM,
  GUILD_VOICE,
  GROUP_DM,
  GUILD_CATEGORY,
  GUILD_ANNOUNCEMENT,
  /** @deprecated */
  GUILD_STORE, //FIXME - Deprecated

  ANNOUNCEMENT_THREAD = 10,
  PUBLIC_THREAD,
  PRIVATE_THREAD,
  GUILD_STAGE_VOICE, //NOTE - Deprecated GUILD_STAGE removed
  GUILD_DIRECTORY, //NOTE - All below new
  GUILD_FORUM,
  GUILD_MEDIA,
}

export enum ComponentTypes {
  ACTION_ROW = 1,
  BUTTON,
  STRING_SELECT,
  TEXT_INPUT, //NOTE - All below new
  USER_SELECT,
  ROLE_SELECT,
  MENTIONABLE_SELECT,
  CHANNEL_SELECT,
}

export enum ConnectionVisibilityTypes {
  NONE,
  EVERYONE,
}

export enum DefaultMessageNotificationLevels {
  ALL_MESSAGES,
  ONLY_MENTIONS,
}

export enum ExplicitContentFilterLevels {
  DISABLED,
  MEMBERS_WITHOUT_ROLES,
  ALL_MEMBERS,
}

export enum GatewayOPCodes {
  DISPATCH, //NOTE - Deprecated EVENT removed
  HEARTBEAT,
  IDENTIFY,
  PRESENCE_UPDATE, //NOTE - Deprecated STATUS_UPDATE removed
  VOICE_STATE_UPDATE,
  /** @deprecated */
  VOICE_SERVER_PING, //FIXME - Deprecated
  RESUME,
  RECONNECT,
  REQUEST_GUILD_MEMBERS, //NOTE - Deprecated GET_GUILD_MEMBERS removed
  INVALID_SESSION,
  HELLO,
  HEARTBEAT_ACK,
  //FIXME - Unsupported SYNC_GUILD and SYNC_CALL removed
}

export type GuildFeatures = "ANIMATED_BANNER"
  | "ANIMATED_ICON"
  | "APPLICATION_COMMAND_PERMISSIONS_V2"
  | "AUTO_MODERATION"
  | "BANNER"
  | "COMMERCE" //FIXME - Deprecated
  | "COMMUNITY"
  | "CREATOR_MONETIZABLE_PROVISIONAL"
  | "CREATOR_STORE_PAGE"
  | "DEVELOPER_SUPPORT_SERVER"
  | "DISCOVERABLE"
  | "FEATURABLE"
  | "INVITES_DISABLED"
  | "INVITE_SPLASH"
  | "MEMBER_VERIFICATION_GATE_ENABLED"
  | "MONETIZATION_ENABLED" //FIXME - Deprecated
  | "MORE_STICKERS"
  | "NEWS"
  | "PARTNERED"
  | "PREVIEW_ENABLED"
  | "PRIVATE_THREADS" //FIXME - Deprecated
  | "RAID_ALERTS_DISABLED"
  | "ROLE_ICONS"
  | "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE"
  | "ROLE_SUBSCRIPTIONS_ENABLED"
  | "SEVEN_DAY_THREAD_ARCHIVE" //FIXME - Deprecated
  | "THREE_DAY_THREAD_ARCHIVE" //FIXME - Deprecated
  | "TICKETED_EVENTS_ENABLED"
  | "VANITY_URL"
  | "VERIFIED"
  | "VIP_REGIONS"
  | "WELCOME_SCREEN_ENABLED";

export enum GuildIntegrationExpireBehaviors {
  REMOVE_ROLE,
  KICK,
}

export type GuildIntegrationTypes = "twitch" | "youtube" | "discord" | "guild_subscription"; //NOTE - guild_subscription new

export enum GuildNSFWLevels {
  DEFAULT,
  EXPLICIT,
  SAFE,
  AGE_RESTRICTED,
}

//TODO - Image formats - enum or type?

export enum ImageSizeBoundaries {
  MINIMUM = 16,
  MAXIMUM = 4096,
}

export enum Intents {
  guilds = 1 << 0,
  guildMembers = 1 << 1,
  guildModeration = 1 << 2, //FIXME - renamed from guildBans
  guildEmojisAndStickers = 1 << 3, //NOTE - Deprecated guildEmojis removed
  guildIntegrations = 1 << 4,
  guildWebhooks = 1 << 5,
  guildInvites = 1 << 6,
  guildVoiceStates = 1 << 7,
  guildPresences = 1 << 8,
  guildMessages = 1 << 9,
  guildMessageReactions = 1 << 10,
  guildMessageTyping = 1 << 11,
  directMessages = 1 << 12,
  directMessageReactions = 1 << 13,
  directMessageTyping = 1 << 14,
  messageContent = 1 << 15, //NOTE - New
  guildScheduledEvents = 1 << 16,

  autoModerationConfiguration = 1 << 20, //NOTE - Both new
  autoModerationExecution = 1 << 21,
  all = Intents.guilds
    | Intents.guildMembers
    | Intents.guildModeration
    | Intents.guildEmojisAndStickers
    | Intents.guildIntegrations
    | Intents.guildWebhooks
    | Intents.guildInvites
    | Intents.guildVoiceStates
    | Intents.guildPresences
    | Intents.guildMessages
    | Intents.guildMessageReactions
    | Intents.guildMessageTyping
    | Intents.directMessages
    | Intents.directMessageReactions
    | Intents.directMessageTyping
    | Intents.messageContent
    | Intents.guildScheduledEvents
    | Intents.autoModerationConfiguration
    | Intents.autoModerationExecution,
  allPrivileged = Intents.guildMembers
    | Intents.guildPresences
    | Intents.messageContent,
  allNonprivileged = Intents.all ^ Intents.allPrivileged,
}

export enum InteractionCallbackTypes { //FIXME - Renamed from InteractionResponseTypes
  PONG = 1,
  CHANNEL_MESSAGE_WITH_SOURCE = 4,
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
  DEFERRED_UPDATE_MESSAGE,
  UPDATE_MESSAGE,
  APPLICATION_COMMAND_AUTOCOMPLETE_RESULT,
  MODAL, //NOTE - All below new
  PREMIUM_REQUIRED,
}

export enum InteractionTypes {
  PING = 1,
  APPLICATION_COMMAND,
  MESSAGE_COMPONENT,
  APPLICATION_COMMAND_AUTOCOMPLETE,
  MODAL_SUBMIT, //NOTE - New
}

export enum InviteTargetTypes {
  STREAM = 1,
  EMBEDDED_APPLICATION,
}

export enum MFALevels {
  NONE,
  ELEVATED,
}

export enum MessageActivityFlags {
  INSTANCE = 1 << 0,
  JOIN = 1 << 1,
  SPECTATE = 1 << 2,
  JOIN_REQUEST = 1 << 3,
  SYNC = 1 << 4,
  PLAY = 1 << 5,
  PARTY_PRIVACY_FRIENDS = 1 << 6,
  PARTY_PRIVACY_VOICE_CHANNEL = 1 << 7,
  EMBEDDED = 1 << 8,
}

export enum MessageActivityTypes {
  JOIN = 1,
  SPECTATE,
  LISTEN,
  JOIN_REQUEST = 5,
}

export enum MessageFlags {
  CROSSPOSTED = 1 << 0,
  IS_CROSSPOST = 1 << 1,
  SUPPRESS_EMBEDS = 1 << 2,
  SOURCE_MESSAGE_DELETED = 1 << 3,
  URGENT = 1 << 4,
  HAS_THREAD = 1 << 5,
  EPHEMERAL = 1 << 6,
  LOADING = 1 << 7,
}

export enum MessageTypes {
  DEFAULT,
  RECIPIENT_ADD,
  RECIPIENT_REMOVE,
  CALL,
  CHANNEL_NAME_CHANGE,
  CHANNEL_ICON_CHANGE,
  CHANNEL_PINNED_MESSAGE,
  USER_JOIN, //FIXME - Renamed from GUILD_MEMBER_JOIN
  GUILD_BOOST, //FIXME - All guild boost renamed from USER_PREMIUM_GUILD_SUBSCRIPTION
  GUILD_BOOST_TIER_1,
  GUILD_BOOST_TIER_2,
  GUILD_BOOST_TIER_3,
  CHANNEL_FOLLOW_ADD,

  GUILD_DISCOVERY_DISQUALIFIED = 14,
  GUILD_DISCOVERY_REQUALIFIED,
  GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
  GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
  THREAD_CREATED,
  REPLY,
  CHAT_INPUT_COMMAND,
  THREAD_STARTER_MESSAGE,
  GUILD_INVITE_REMINDER,
  CONTEXT_MENU_COMMAND,
  AUTO_MODERATION_ACTION, //NOTE - All below new
  ROLE_SUBSCRIPTION_PURCHASE,
  INTERACTION_PREMIUM_UPSELL,
  STAGE_START,
  STAGE_END,
  STAGE_SPEAKER,
  STAGE_TOPIC,
  GUILD_APPLICATION_PREMIUM_SUBSCRIPTION,
}

export enum PermissionOverwriteTypes {
  ROLE,
  USER,
}

//TODO - Permissions - Enums do not support bigint!

export enum PremiumTiers {
  NONE,
  TIER_1,
  TIER_2,
  TIER_3,
}

export enum GuildScheduledEventStatus {
  SCHEDULED = 1,
  ACTIVE,
  COMPLETED,
  CANCELED,
}

export enum GuildScheduledEventEntityTypes {
  STAGE_INSTANCE = 1,
  VOICE,
  EXTERNAL,
}

export enum GuildScheduledEventPrivacyLevel {
  PUBLIC = 1, //FIXME - Deprecated
  GUILD_ONLY,
}

export enum PremiumTypes {
  NONE,
  NITRO_CLASSIC,
  NITRO,
  NITRO_BASIC, //NOTE - New
}

export enum StageInstancePrivacyLevel {
  PUBLIC = 1,
  GUILD_ONLY,
}

export enum StickerFormats {
  PNG = 1,
  APNG,
  LOTTIE,
  GIF, //NOTE - New
}

export enum StickerTypes {
  STANDARD = 1,
  GUILD,
}

export enum SystemChannelFlags {
  SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
  SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
  SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2,
  SUPPRESS_JOIN_NOTIFICATION_REPLIES = 1 << 3,
  SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS = 1 << 4,
  SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES = 1 << 5,
}

//FIXME - System Join Messages removed

//TODO - ThreadMemberFlags is undocumented. Have asked Donovan for info https://canary.discord.com/channels/831967755447828491/831967755447828500/1168340029408559184

export enum UserFlags { //FIXME - Removed UserFlags.NONE
  STAFF = 1 << 0, //FIXME - Renamed from DISCORD_STAFF
  PARTNER = 1 << 1, //NOTE - Removed deprecated PARTNERED_SERVER_OWNER and DISCORD_PARTNER
  HYPESQUAD = 1 << 2, //NOTE - Removed deprecated HYPESQUAD_EVENTS,
  BUG_HUNTER_LEVEL_1 = 1 << 3,
  HYPESQUAD_ONLINE_HOUSE_1 = 1 << 6, //FIXME - Removed HOUSE_NAME for all 3 houses
  HYPESQUAD_ONLINE_HOUSE_2 = 1 << 7,
  HYPESQUAD_ONLINE_HOUSE_3 = 1 << 8,
  PREMIUM_EARLY_SUPPORTER = 1 << 9, //NOTE - Remove deprecated EARLY_SUPPORTER
  TEAM_PSEUDO_USER = 1 << 10,
  SYSTEM = 1 << 12, //FIXME - Deprecated/Undocumented on API
  BUG_HUNTER_LEVEL_2 = 1 << 14,
  VERIFIED_BOT = 1 << 16,
  VERIFIED_DEVELOPER = 1 << 17, //NOTE - Removed deprecated EARLY_VERIFIED_BOT_DEVELOPER and VERIFIED_BOT_DEVELOPER
  CERTIFIED_MODERATOR = 1 << 18, //NOTE - Removed deprecated DISCORD_CERTIFIED_MODERATOR
  BOT_HTTP_INTERACTIONS = 1 << 19,
  ACTIVE_DEVELOPER = 1 << 22,
}

export enum VerificationLevels {
  NONE,
  LOW,
  MEDIUM,
  HIGH,
  VERY_HIGH,
}

export enum VideoQualityModes {
  AUTO = 1,
  FULL,
}

export enum VoiceOPCodes {
  IDENTIFY,
  SELECT_PROTOCOL,
  READY,
  HEARTBEAT,
  SESSION_DESCRIPTION,
  SPEAKING,
  HEARTBEAT_ACK,
  RESUME,
  HELLO,
  RESUMED,
  CLIENT_DISCONNECT = 13, //NOTE - Removed deprecated DISCONNECT
}

export enum WebhookTypes {
  INCOMING = 1,
  CHANNEL_FOLLOWER,
  APPLICATION,
}
