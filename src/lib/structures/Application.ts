import { ApplicationFlags } from "../Constants/constants";
import { ApplicationInstallParams } from "../Constants/types";
import Base from "./Base";

export default class Application extends Base {
  /** Name of the app */
  name: string;
  /** [Icon hash](https://discord.com/developers/docs/reference#image-formatting) of the app */
  icon: string | null;
  /** Description of the app */
  description: string;
  /** List of RPC origin URLs, if RPC is enabled */
  rpcOrigins?: string;
  /** When `false`, only the app owner can add the app to guilds */
  botPublic: boolean;
  /** When `true`, the app's bot will only join upon completion of the full OAuth2 code grant flow */
  botRequireCodeGrant: boolean;
  /** Partial user object for the bot user associated with the app */
  bot?: unknown; //TODO - Partial User object
  /** URL of the app's Terms of Service */
  termsOfServiceURL?: string;
  /** URL of the app's Privacy Policy */
  privacyPolicyURL?: string;
  /** Partial user object for the owner of the app */
  owner?: unknown; // TODO - Partial User object
  /** @deprecated Will be removed in Discord API v11 */
  summary: "";
  /** Hex encoded key for verification in interactions and the GameSDK's [GetTicket](https://discord.com/developers/docs/game-sdk/applications#getticket) */
  verifyKey: string;
  /** If the app belongs to a team, this will be a list of the members of that team */
  team: unknown | null; // TODO - Team object
  /** Guild associated with the app. For example, a developer support server. */
  guildID?: string;
  /** Partial object of the associated guild */
  guild?: unknown; // TODO - Partial Guild object
  /** If this app is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists */
  primarySKUID?: string;
  /** If this app is a game sold on Discord, this field will be the URL slug that links to the store page */
  slug?: string;
  /** App's default rich presence invite cover [image hash](https://discord.com/developers/docs/reference#image-formatting) */
  coverImage?: string;
  /** App's public [flags](https://discord.com/developers/docs/resources/application#application-object-application-flags) */
  flags?: ApplicationFlags;
  /** Approximate count of guilds the app has been added to */
  approximateGuildCount?: number;
  /** Array of redirect URIs for the app */
  redirectURIs?: string[];
  /** [Interactions endpoint URL](https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction) for the app */
  interactionsEndpointURL?: string;
  /** Role connection verification URL for the app */
  roleConnectionsVerificationURL?: string;
  /** List of tags describing the content and functionality of the app. Max of 5 tags. */
  tags?: string[];
  /** Settings for the app's default in-app authorization link, if enabled */
  installParams?: ApplicationInstallParams; // TODO - Install params object
  /** Default custom authorization URL for the app, if enabled */
  customInstallURL?: string;
}