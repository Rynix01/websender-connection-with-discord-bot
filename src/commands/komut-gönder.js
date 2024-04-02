const {
  EmbedBuilder,
  PermissionsBitField,
  PermissionFlagsBits,
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("komut-gönder")
    .setDescription("Sunucuya komut göndermenizi sağlar!")
    .addStringOption((option) =>
      option
        .setName("komut")
        .setDescription("Gönderilecek komutu yazınız.")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  // komutu geliştirmek istersen guide: https://discordjs.guide/slash-commands/advanced-creation.html
  run: async (client, interaction) => {
    const komut = interaction.options.getString("komut");
    interaction.reply(`Komutunuz başarıyla gönderildi: **${komut}**`);
    client.websender.sendCommand(`${komut}`);
  },
};
