const bot = require('./index')

module.exports = async function(ctx) {
    await bot.handleUpdate(ctx.request.body, ctx.response); // make Telegraf process that data
    ctx.status(200).end()
};
  