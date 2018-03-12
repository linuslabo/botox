/*
 * This is one of the simplest examples.
 *
 * We created a simple bot that echoes back everything that is said on chat.
 *
 * It's not very useful yet, but you can use this as a starting point
 * to create your own bot.
 */
const mineflayer = require('mineflayer')
var forgeHandshake = require('minecraft-protocol-forge').forgeHandshake;

if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node echo.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}

const bot = mineflayer.createBot({
  host: process.argv[2],
  port: parseInt(process.argv[3]),
  username: process.argv[4] ? process.argv[4] : 'chatterbox',
  password: process.argv[5],
  version:"1.12.2",
  verbose: true
})

forgeHandshake(bot._client, { forgeMods: [
{ modid: 'botania', version: 'r1.10-353'},
{ modid: 'silentgems', version: '2.6.7'},
{ modid: 'autoreglib', version: '1.3-15'},
{ modid: 'rftools', version: '7.29'},
{ modid: 'veining', version: '1.2.0'},
{ modid: 'p455w0rdslib', version: '2.0.28'},
{ modid: 'bdlib', version: '1.14.3.12'},
{ modid: 'theoneprobe', version: '1.4.19'},
{ modid: 'silentlib', version: '2.2.16'},
{ modid: 'dailies', version: '1.12.2-6'},
{ modid: 'ironchest', version: '1.12.2-7.0.40.824'},
{ modid: 'bigreactors', version: '1.12.2-0.4.5.46'},
{ modid: 'thermalfoundation', version: '2.3.10'},
{ modid: 'cosmeticarmorreworked', version: '1.12.2-v1'},
{ modid: 'chococraft', version: '0.9.1.52'},
{ modid: 'clockhud', version: '1.4.0'},
{ modid: 'redstonearsenal', version: '2.3.10'},
{ modid: 'waystones', version: '4.0.20'},
{ modid: 'mtlib', version: '@VERSION@'},
{ modid: 'vc', version: '5.6.1'},
{ modid: 'embers', version: '0.230'},
{ modid: 'bookshelf', version: '2.3.526'},
{ modid: 'teamlapen-lib', version: '1.3.7'},
{ modid: 'platforms', version: '1.4.4'},
{ modid: 'evilcraft', version: '0.10.48'},
{ modid: 'magipsi', version: '1.3'},
{ modid: 'brandonscore', version: '2.4.0'},
{ modid: 'wholetreeaxe', version: '1.7.1'},
{ modid: 'yabba', version: '1.0.11'},
{ modid: 'cyclopscore', version: '0.11.4'},
{ modid: 'cookingforblockheads', version: '6.3.17'},
{ modid: 'betterbuilderswands', version: '0.11.1'},
{ modid: 'modtweaker', version: '4.0.7'},
{ modid: 'opencomputers', version: '1.7.1.43'},
{ modid: 'ironbackpacks', version: '1.12.2-3.0.5-6'},
{ modid: 'codechickenlib', version: '3.1.5.331'},
{ modid: 'morphtool', version: '1.2-16'},
{ modid: 'advgenerators', version: '0.9.20.12'},
{ modid: 'thermaldynamics', version: '2.3.10'},
{ modid: 'oregen', version: '1.12.2-0.6.5Beta'},
{ modid: 'signals', version: '1.0'},
{ modid: 'zerocore', version: '1.12-0.1.1.0'},
{ modid: 'shadowmc', version: '3.8.0'},
{ modid: 'enderutilities', version: '0.7.7'},
{ modid: 'commoncapabilities', version: '1.4.0'},
{ modid: 'limelib', version: '1.7.9'},
{ modid: 'chiselsandbits', version: '14.13'},
{ modid: 'scalinghealth', version: '1.3.10'},
{ modid: 'unidict', version: '1.12.2-2.3.3'},
{ modid: 'quark', version: 'r1.4-122'},
{ modid: 'packguard', version: '2.3.3'},
{ modid: 'openmods', version: '0.11.5'},
{ modid: 'twilightforest', version: '3.6.345'},
{ modid: 'extrarails', version: '1.3.0'},
{ modid: 'yummy', version: '2.3.0'},
{ modid: 'teslacorelib', version: '1.0.12'},
{ modid: 'xreliquary', version: '1.12.2-1.3.4.742'},
{ modid: 'immersivepetroleum', version: '@VERSION@'},
{ modid: 'quantumstorage', version: '4.4.8'},
{ modid: 'teslacorelib_registries', version: '1.0.12'},
{ modid: 'stevescarts', version: '2.4.17.88'},
{ modid: 'psi', version: 'r1.1-59'},
{ modid: 'flexibletools', version: '1.2.7'},
{ modid: 'akashictome', version: '1.2-10'},
{ modid: 'cofhcore', version: '4.3.10'},
{ modid: 'tombstone', version: '2.6.0'},
{ modid: 'enderfuge', version: '1.4.2'},
{ modid: 'torchmaster', version: '1.6.1.53'},
{ modid: 'crafttweakerjei', version: '2.0.0'},
{ modid: 'reborncore', version: '3.6.8.214'},
{ modid: 'cofhworld', version: '1.1.1'},
{ modid: 'appliedenergistics2', version: 'rv5-stable-8'},
{ modid: 'secretroomsmod', version: '5.3.2'},
{ modid: 'draconicevolution', version: '2.3.9'},
{ modid: 'fuelcanister', version: '1.1.3'},
{ modid: 'roots', version: '0.104'},
{ modid: 'openblocks', version: '1.7.6'},
{ modid: 'extrautils2', version: '1.0'},
{ modid: 'shetiphiancore', version: '3.5.6'},
{ modid: 'wanionlib', version: '1.12.2-1.5'},
{ modid: 'industrialforegoing', version: '1.12.2-1.12.2'},
{ modid: 'xlfoodmod', version: '1.12.2-1.4.0'},
{ modid: 'ctdcore', version: '1.2.4'},
{ modid: 'vampirism', version: '1.3.7'},
{ modid: 'gravelores', version: '1.8'},
{ modid: 'astikoor', version: '1.0.0'},
{ modid: 'horsepower', version: '2.5.11'},
{ modid: 'crafttweaker', version: '4.1.5'},
{ modid: 'chisel', version: 'MC1.12-0.2.0.29'},
{ modid: 'baubles', version: '1.5.2'},
{ modid: 'immersivetech', version: '1.3.5'},
{ modid: 'immersiveengineering', version: '0.12-77'},
{ modid: 'actuallyadditions', version: '1.12.2-r131'},
{ modid: 'redstonepaste', version: '1.7.5'},
{ modid: 'sgextraparts', version: '1.4.1'},
{ modid: 'chickenchunks', version: '2.4.1.71'},
{ modid: 'evilcraftcompat', version: '1.0.0'},
{ modid: 'thermalexpansion', version: '5.3.10'},
{ modid: 'astralsorcery', version: '1.8.5'},
{ modid: 'redstoneflux', version: '2.0.1'},
{ modid: 'usefulnullifiers', version: '1.4.1'},
{ modid: 'claybucket', version: '1.1'},
{ modid: 'hammercore', version: '1.9.6.8'},
{ modid: 'darkutils', version: '1.8.192'},
{ modid: 'enderstorage', version: '2.4.2.126'},
{ modid: 'colossalchests', version: '1.6.9'}] });

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})
