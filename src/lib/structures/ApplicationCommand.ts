import { ApplicationCommandTypes } from "../Constants/constants";
import { ApplicationCommandOption } from "../Constants/types";
import Base from "./Base";

export default class ApplicationCommand extends Base {
  type?: ApplicationCommandTypes;
  applicationID: string;
  guildID?: string;
  name: string;
  nameLocalizations?: unknown | null; // TODO - Dictionary with keys in available locales https://discord.com/developers/docs/reference#locales
  description: string; // TODO - Force empty string on USER and MESSAGE commands
  desctiptionLocalizations?: unknown | null; // TODO - Dictionary with keys in available locales https://discord.com/developers/docs/reference#locales
  options?: ApplicationCommandOption[];
  defaultMemberPermissions: string | null; // TODO - Permissions
  dmPermission?: boolean;
  /** @deprecated */
  defaultPermission?: boolean | null;
  nsfw?: boolean;
  version: string;
}