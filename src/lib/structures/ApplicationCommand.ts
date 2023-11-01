import Base from "./Base";

export default class ApplicationCommand extends Base {
  name: string;
  icon: string | null;
  description: string;
  rpcOrigins?: string;
  botPublic: boolean;
  botRequireCodeGrant: boolean;
  bot?: unknown; //TODO - Partial User object
  termsOfServiceURL?: string;
  privacyPolicyURL?: string;
  owner?: unknown; // TODO - Partial User object
  /** @deprecated Will be removed in Discord API v11 */
  summary: "";
  verifyKey: string;
  team: unknown | null; // TODO - Team object
  guildID?: string;
  guild?: unknown; // TODO - Partial Guild object
  primarySKUID?: string;
  slug?: string;
  coverImage?: string;
  flags?: number;
  approximateGuildCount?: number;
  redirectURIs?: string[];
  interactionsEndpointURL?: string;
  roleConnectionsVerificationURL?: string;
  tags?: string[];
  installParams?: unknown; // TODO - Install params object
  customInstallURL?: string;
}