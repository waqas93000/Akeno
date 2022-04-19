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
			baseXp: 200,
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
				caption: `⚡ *Akeno* ⚡\n\n *Description: A modular WhatsApp Bot With Rich Anime Features developed by Fantox.*\n\n🌐 *GitHub URL: https://github.com/FantoX001/Akeno* \n\n 📒 *Akeno Guide: https://github.com/FantoX001/Akeno-Guides* \n`,
			}
		);
	};
}
