import { ImageFormats, StickerFormats } from "../Constants/constants";

export const CDN = {
  BASE_URL: "https://cdn.discordapp.com",

  CUSTOM_EMOJI: (emojiID: string, format: ImageFormats) => `/emojis/${emojiID}.${format}`,
  GUILD_ICON: (guildID: string, guildIcon: string, format: ImageFormats) => `/icons/${guildID}/${guildIcon}.${format}`,
  GUILD_SPLASH: (guildID: string, guildSplash: string, format: ImageFormats) => `/splashes/${guildID}/${guildSplash}.${format}`,
  GUILD_DISCOVERY_SPLASH: (guildID: string, guildDiscoverySplash: string, format: ImageFormats) => `/discovery-splashes/${guildID}/${guildDiscoverySplash}.${format}`,
  BANNER: (id: string, banner: string, format: ImageFormats) => `/banners/${id}/${banner}.${format}`, //NOTE - Covers Guild Banner and User Banner
  DEFAULT_USER_AVATAR: (discrim: string, format: ImageFormats) => `/embed/avatars/${Number(discrim) % 5}.${format}`,
  USER_AVATAR: (userID: string, userAvatar: string, format: ImageFormats) => `/avatars/${userID}/${userAvatar}.${format}`,
  GUILD_MEMBER_AVATAR: (guildID: string, userID: string, memberAvatar: string, format: ImageFormats) => `/guilds/${guildID}/users/${userID}/avatars/${memberAvatar}.${format}`,
  USER_AVATAR_DECORATION: (userID: string, decoration: string, format: ImageFormats) => `/avatar-decorations/${userID}/${decoration}.${format}`,
  APPLICATION_ICONS: (appID: string, icon: string, format: ImageFormats) => `/app-icons/${appID}/${icon}.${format}`, // Covers Application Icon and Application Cover
  APPLICATION_ASSET: (appID: string, assetID: string, format: ImageFormats) => `/app-assets/${appID}/${assetID}.${format}`,
  ACHIEVEMENT_ICON: (appID: string, achievementID: string, icon: string, format: ImageFormats) => `/app-assets/${appID}/achievements/${achievementID}/icons/${icon}.${format}`,
  STORE_PAGE_ASSET: (appID: string, assetID: string, format: ImageFormats) => `/app-assets/${appID}/store/${assetID}.${format}`,
  STICKER_PACK_BANNER: (assetID: string, format: ImageFormats) => `/app-assets/710982414301790216/store/${assetID}.${format}`,
  TEAM_ICON: (teamID: string, teamIcon: string, format: ImageFormats) => `/team-icons/${teamID}/${teamIcon}.${format}`,
  STICKER: (stickerID: string, format: StickerFormats) => `/stickers/${stickerID}.${format}`,
  ROLE_ICON: (roleID: string, roleIcon: string, format: ImageFormats) => `/role-icons/${roleID}/${roleIcon}.${format}`,
  GUILD_SCHEDULED_EVENT_COVER: (eventID: string, eventImage: string, format: ImageFormats) => `/guild-events/${eventID}/${eventImage}.${format}`,
  GUILD_MEMBER_BANNER: (guildID: string, userID: string, memberBanner: string, format: ImageFormats) => `/guilds/${guildID}/users/${userID}/banners/${memberBanner}.${format}`,
}


export const Endpoints = {
  BASE_URL: "https://discord.com/api",
  //SECTION - Application Commands
  /**
   * @docs `GET` {@link https://discord.dev/interactions/application-commands#get-global-application-commands Get Global Application Commands}
   * @docs `POST` {@link https://discord.dev/interactions/application-commands#create-global-application-command Create Global Application Command}
   * @docs `PUT` {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands Bulk Overwrite Global Application Commands}
   */
  GLOBAL_APPLICATION_COMMANDS: (appID: string) => `/applications/${appID}/commands`,
  /**
   * @docs `GET` {@link https://discord.dev/interactions/application-commands#get-global-application-command Get Global Application Command}
   * @docs `PATCH` {@link https://discord.dev/interactions/application-commands#edit-global-application-command Edit Global Application Command}
   * @docs `DELETE` {@link https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command Delete Global Application Command}
   */
  GLOBAL_APPLICATION_COMMAND: (appID: string, cmdID: string) => `/applications/${appID}/commands/${cmdID}`,
  /**
   * @docs `GET` {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands Get Guild Application Commands}
   * @docs `POST` {@link https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command Create Guild Application Command}
   * @docs `PUT` {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands Bulk Overwrite Guild Application Commands}
   */
  GUILD_APPLICATION_COMMANDS: (appID: string, guildID: string) => `/applications/${appID}/guilds/${guildID}/commands`,
  /**
   * @docs `GET` {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command Get Guild Application Command}
   * @docs `PATCH` {@link https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command Edit Guild Application Command}
   * @docs `DELETE` {@link https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command Delete Guild Application Command}
   */
  GUILD_APPLICATION_COMMAND: (appID: string, guildID: string, cmdID: string) => `/applications/${appID}/guilds/${guildID}/commands/${cmdID}`,
  /**
   * @docs `GET` {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions Get Guild Application Command Permissions}
   */
  GUILD_APPLICATION_COMMAND_PERMISSIONS: (appID: string, guildID: string) => `/applications/${appID}/guilds/${guildID}/commands/permissions`,
  /**
   * @docs `GET` {@link https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions Get Application Command Permissions}
   * @docs `PUT` {@link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions Edit Application Command Permissions}
   */
  APPLICATION_COMMAND_PERMISSIONS: (appID: string, guildID: string, cmdID: string) => `/applications/${appID}/guilds/${guildID}/commands/${cmdID}/permissions`,
  //!SECTION
  //SECTION - Interactions/Webhooks
  /**
   * @docs `POST` {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response Create Interaction Response}
   */
  INTERACTION_RESPONSE: (interactionID: string, interactionToken: string) => `/interactions/${interactionID}/${interactionToken}/callback`,
  /**
   * @docs `GET` {@link https://discord.com/developers/docs/interactions/receiving-and-responding#get-original-interaction-response Get Original Interaction Response}
   * @docs `PATCH` {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response Edit Original Interaction Response}
   * @docs `DELETE` {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-original-interaction-response Delete Original Interaction Response}
   */
  ORIGINAL_INTERACTION_RESPONSE: (appID: string, interactionToken: string) => `/interactions/${appID}/${interactionToken}/messages/@original`,
  /**
   * @docs `POST` {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message Create Followup Message}
   */
  WEBHOOK_TOKEN: (webhookID: string, token: string) => `/webhooks/${webhookID}/${token}`,
  /**
   * @docs `GET` {@link https://discord.com/developers/docs/interactions/receiving-and-responding#get-followup-message Get Followup Message}
   * @docs `PATCH` {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message Edit Followup Message}
   * @docs `DELETE` {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-followup-message Delete Followup Message}
   */
  WEBHOOK_MESSAGE: (webhookID: string, token: string, messageID: string) => `/webhooks/${webhookID}/${token}/messages/${messageID}`,
  //!SECTION
}