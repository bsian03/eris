import { ApplicationCommandTypes } from "../Constants/constants";
import { ApplicationCommandOption } from "../Constants/types";
import Base from "./Base";

export default class ApplicationCommand extends Base {
  /** [Type of command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types), defaults to `1` */
  type?: ApplicationCommandTypes;
  /** ID of the parent application */
  applicationID: string;
  /** Guild ID of the command, if not global */
  guildID?: string;
  /** [Name of command](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-naming), 1-32 characters */
  name: string;
  /** Localization dictionary for `name` field. Values follow the same restrictions as `name` */
  nameLocalizations?: unknown | null; // TODO - Dictionary with keys in available locales https://discord.com/developers/docs/reference#locales
  /** Description for `CHAT_INPUT` commands, 1-100 characters. Empty string for `USER` and `MESSAGE` commands */
  description: string; // TODO - Force empty string on USER and MESSAGE commands
  /** Localization dictionary for `description` field. Values follow the same restrictions as `description` */
  desctiptionLocalizations?: unknown | null; // TODO - Dictionary with keys in available locales https://discord.com/developers/docs/reference#locales
  /** Parameters for the command, max of 25 */
  options?: ApplicationCommandOption[];
  /** Set of [permissions](https://discord.com/developers/docs/topics/permissions) represented as a bit set */
  defaultMemberPermissions: string | null; // TODO - Permissions
  /** Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible. */
  dmPermission?: boolean;
  /** @deprecated Not recommended for use as field will soon be deprecated. Indicates whether the command is enabled by default when the app is added to a guild, defaults to `true` */
  defaultPermission?: boolean | null;
  /** Indicates whether the command is [age-restricted](https://discord.com/developers/docs/interactions/application-commands#agerestricted-commands), defaults to `false` */
  nsfw?: boolean;
  /** Autoincrementing version identifier updated during substantial record changes */
  version: string;
}