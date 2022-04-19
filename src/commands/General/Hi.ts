/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const akeno =
			"https://media.tenor.com/videos/e54b3d54255b0b8a49c28d2fce8bd604/mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: akeno },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `Hi👋, i am *Akeno* nice ti meet ya. Use any command from *${this.client.config.prefix}help* list if you want me to do anything. \n`,
			}
		);
	};
}
