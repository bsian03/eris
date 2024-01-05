import ApplicationCommand from "./ApplicationCommand";
import Base from "./Base";

export default class AuditLog extends Base {
  applicationCommands: ApplicationCommand[]; // TODO Collection?
  auditLogEntries: unknown[]; // TODO Audit Log Entries CAUTION rename
  autoModerationRules: unknown[]; // TODO Automod rules
  guildScheduledEvents: unknown[]; // TODO Guild Scheduled Events
  integrations: unknown[]; // TODO Partial Integration
  threads: unknown[]; // TODO Channel<Thread>
  users: unknown[]; // TODO User
  webhooks: unknown[]; // Webhook
}