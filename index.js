require("dotenv").config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
console.log(bot)
const web_app_link = "https://thedogtapcoin-1a304.web.app";
// bot.start((ctx) => ctx.reply('Welcome to Toenail Coin', {reply_markup:{ keyboard: [[{ text: "Toenail Coin Web App", web_app: { url: web_app_link }}]],}}));
bot.start((ctx) => ctx.reply("Welcome to DogTap.\nTap, tap and tap.\nThere may be a reward at the end. Who knows? 🐶", {reply_markup:{ inline_keyboard: [[{ text: "Play DogTap 🐶", web_app: { url: web_app_link }},]],}}));

bot.launch()

