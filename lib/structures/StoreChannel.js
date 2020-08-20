"use strict";

const GuildChannel = require("./GuildChannel");

/**
* Represents a store channel. See GuildChannel for more properties and methods.
* @extends GuildChannel
* @prop {String} id The ID of the channel
*/
class StoreChannel extends GuildChannel {
}

module.exports = StoreChannel;
