import { Client, ClientOptions, Collection } from "discord.js";
import fs from 'fs'
import {promisify} from 'util'
import Commands from "./commands";

export default class Tutorial extends Client {
    commands: {
        general: Array<Commands>,
        subs: Array<Commands>
    }
    database: {}
    constructor() {
        const clientOptions: ClientOptions = {
            intents: 32767,
            allowedMentions: {parse: ["users"], repliedUser: true},
            messageCacheLifetime: 0,
            messageSweepInterval: 0
        }
        super(clientOptions)
        this.commands = {
            general: [],
            subs: []
        }
        this.database = {}
    }
    async clientLogin(token?: string) {
        token = process.env.token as string
        await super.login(token)
    }
    async initLoaders() {
        const readDir = promisify(fs.readdir)
        const loaders = await readDir('./src/loaders')
        loaders.forEach((file) => {
            const loader = new (require(`../loaders/${file}`).default)(this)
            loader.load()
            delete require.cache[require.resolve(`../loaders/${file}`)]
        })
    }
}