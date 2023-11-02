import { ApplicationCommandOptionTypes, ApplicationCommandPermissionTypes, ChannelTypes } from "./constants";

export interface ApplicationInstallParams {
  scopes: string[]; // TODO - Scopes https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
  permissions: unknown; // TODO - Permissions
}

export interface ApplicationCommandOption {
  type: ApplicationCommandOptionTypes;
  name: string;
  name_localizations?: unknown | null; // TODO - Dictionary with keys in available locales https://discord.com/developers/docs/reference#locales
  description: string;
  description_localizations?: unknown | null; // TODO - Dictionary with keys in available locales https://discord.com/developers/docs/reference#locales
  required?: boolean;
  choices?: ApplicationCommandOptionChoice[];
  options?: ApplicationCommandOption[];
  channel_types?: ChannelTypes[];
  min_value?: number;
  max_value?: number;
  min_length?: number;
  max_length?: number;
  autocomplete?: boolean;
}

export interface ApplicationCommandOptionChoice {
  name: string;
  name_localizations?: unknown; // TODO - Dictionary with keys in available locales https://discord.com/developers/docs/reference#locales
  value: string | number;
}

export interface GuildApplicationCommandPermissions {
  id: string;
  application_id: string;
  guild_id: string;
  permissions?: ApplicationCommandPermissions[];
}

export interface ApplicationCommandPermissions {
  id: string;
  type: ApplicationCommandPermissionTypes;
  permission: boolean;
}
