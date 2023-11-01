import { DiscordEpoch } from "../Constants/constants";

/** Provides utilities for working with many Discord structures */
export default class Base {
  /** A Discord snowflake identifying the object */
  id: string;
  constructor(id: string) {
    this.id = id;
  }

  /** Timestamp of structure creation */
  get createdAt() {
    return Base.getCreatedAt(this.id);
  }

  /**
   * Calculates the timestamp in milliseconds associated with a Discord ID/snowflake
   * @param id The ID of a structure
   */
  static getCreatedAt(id: string) {
    return Base.getDiscordEpoch(id) + DiscordEpoch;
  }

  /**
   * Gets the number of milliseconds since epoch represented by an ID/snowflake
   * @param id The ID of a structure
   */
  static getDiscordEpoch(id: string) {
    return Math.floor(<unknown> id as number / 4194304); //NOTE - Type conversion necessary, this is the fastest way to get Discord Epoch
  }
  //TODO - Util inspect, toString and toJSON
}