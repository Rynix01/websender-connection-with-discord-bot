const {
  EmbedBuilder,
  PermissionsBitField,
  PermissionFlagsBits,
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("duyuru-gönder")
    .setDescription("Sunucuya duyuru göndermenizi sağlar!")
    .addStringOption((option) =>
      option
        .setName("duyuru-mesajı")
        .setDescription("Gönderilecek duyuru mesajınızı yazınız.")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  // komutu geliştirmek istersen guide: https://discordjs.guide/slash-commands/advanced-creation.html
  run: async (client, interaction) => {
    const mesaj = interaction.options.getString("duyuru-mesajı");
    interaction.reply(`Duyuru mesajınız başarıyla gönderildi: **${mesaj}**`);
    client.websender.sendCommand(`broadcast ${mesaj}`);
  },
};
