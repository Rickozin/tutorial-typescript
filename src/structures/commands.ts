import { CommandInteraction, CommandInteractionOptionResolver, Guild, TextChannel, User } from "discord.js";
import Tutorial from "./client";

export default class Commands {
    client: Tutorial
    name: string
    category: string
    description: string
    reference: string
    options: Array<{}>
    enabled: boolean
    sub: boolean
    permissions: Array<string>
    dev: boolean
    constructor(client: Tutorial) {
        this.client = client

        this.name = 'nome'
        this.category = 'categoria'
        this.description = 'descrição'
        this.reference = this.name
        this.options = []

        this.enabled = true
        this.sub = false

        
        this.permissions = []
        this.dev = false
    }
    async run(ctx: CommandInteraction, options: CommandInteractionOptionResolver, channel: TextChannel, guild: Guild, user: User): Promise<any> {}
}