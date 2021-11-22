import 'dotenv/config'
import Tutorial from './structures/client'

const client = new Tutorial()

client.initLoaders()

client.login()