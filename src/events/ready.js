const { ActivityType } = require("discord.js");
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    let activities = [
        `RynixElChavo Tarafından Geliştirildi`,
        `${client.user.username}`,
      ],
      i = 0;
    setInterval(
      () =>
        client.user.setActivity({
          name: `${activities[i++ % activities.length]}`,
          type: ActivityType.Custom,
        }),
      22000
    );
  },
};
