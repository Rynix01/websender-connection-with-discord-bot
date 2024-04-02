const {
  EmbedBuilder,
  PermissionsBitField,
  PermissionFlagsBits,
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mesaj-gönder")
    .setDescription("Sunucuya mesaj göndermenizi sağlar!")
    .addStringOption((option) =>
      option
        .setName("mesaj")
        .setDescription("Gönderilecek mesajı yazınız.")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  // komutu geliştirmek istersen guide: https://discordjs.guide/slash-commands/advanced-creation.html
  run: async (client, interaction) => {
    const message = interaction.options.getString("mesaj");
    interaction.reply(`Mesajınız başarıyla gönderildi: **${message}**`);
    client.websender.sendCommand(`say ${message}`);
  },
};
