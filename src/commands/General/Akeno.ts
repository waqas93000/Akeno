/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "akeno",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}akeno`,
			baseXp: 500,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const akeno =
			"https://media.tenor.com/videos/5247cadffccf9826bb464b78039f7a90/mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: akeno },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `⚡ *Akeno* ⚡\n\n *Description: A modular WhatsApp Bot With Rich Anime Features developed by Fantox.*\n\n📓 *My GitHub URL: https://github.com/FantoX001/Akeno* \n\n 📒 *Akeno Guide: https://github.com/FantoX001/Akeno-Guides* \n`,
			}
		);
	};
}
