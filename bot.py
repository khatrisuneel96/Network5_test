import discord
from decouple import config
from pymongo import MongoClient

def get_database():
    CONNECTION_STRING = config('MONGO')
    
    client = MongoClient(CONNECTION_STRING)

    return client['test']

class ForwardingBot(discord.Client):
    async def on_ready(self):
        print('Logged on as', self.user)

    async def on_message(self, message):
        # don't respond to ourselves
        if message.author == self.user:
            return

        content = {
            "user": message.author.name,
            "content": message.content,
            "channel": message.channel.name,
            "server": message.guild.name,
            "timestamp": message.created_at
        }

        dbname = get_database()
        collection_name = dbname["discordmessages"]
        collection_name.insert_one(content)
    
if __name__ == "__main__":
    client = ForwardingBot()
    client.run(config('DISCORD_TOKEN'))