/*
 * This example demonstrates how easy it is to create a bot
 * that sends chat messages whenever something interesting happens
 * on the server you are connected to.
 *
 * Below you can find a wide range of different events you can watch
 * but remember to check out the API documentation to find even more!
 *
 * Some events may be commented out because they are very frequent and
 * may flood the chat, feel free to check them out for other purposes though.
 *
 * This bot also replies to some specific chat messages so you can ask him
 * a few informations while you are in game.
 */
const mineflayer = require('mineflayer')
const Vec3 = require('vec3').Vec3
var navigatePlugin = require('mineflayer-navigate')(mineflayer);
var forgeHandshake = require('minecraft-protocol-forge').forgeHandshake;


// if (process.argv.length < 4 || process.argv.length > 6) {
//   console.log('Usage : node chatterbot.js <host> <port> [<name>] [<password>]')
//   process.exit(1)
// }

const bot = mineflayer.createBot({
  host: process.argv[2] ? process.argv[2] : 'oxforduniversity.aternos.me',
  port: parseInt(process.argv[3]) ? process.argv[3] : '',
  username: process.argv[4] ? process.argv[4] : 'Botox',
  password: process.argv[5],
  version: "1.12.2",
  verbose: true
})

navigatePlugin(bot);
bot.navigate.blocksToAvoid[132] = true; // avoid tripwire
bot.navigate.blocksToAvoid[59] = false; // ok to trample crops
bot.navigate.on('pathFound', function (path) {
  bot.chat("found path. I can get there in " + path.length + " moves.");
});
bot.navigate.on('cannotFind', function (closestPath) {
  bot.chat("unable to find path. getting as close as possible");
  bot.navigate.walk(closestPath);
});
bot.navigate.on('arrived', function () {
  bot.chat("I have arrived");
});
bot.navigate.on('interrupted', function() {
  bot.chat("stopping");
});

forgeHandshake(bot._client, {
  forgeMods: [
    { modid: 'botania', version: 'r1.10-353' },
    { modid: 'silentgems', version: '2.6.7' },
    { modid: 'autoreglib', version: '1.3-15' },
    { modid: 'rftools', version: '7.29' },
    { modid: 'veining', version: '1.2.0' },
    { modid: 'p455w0rdslib', version: '2.0.28' },
    { modid: 'bdlib', version: '1.14.3.12' },
    { modid: 'theoneprobe', version: '1.4.19' },
    { modid: 'silentlib', version: '2.2.16' },
    { modid: 'dailies', version: '1.12.2-6' },
    { modid: 'ironchest', version: '1.12.2-7.0.40.824' },
    { modid: 'bigreactors', version: '1.12.2-0.4.5.46' },
    { modid: 'thermalfoundation', version: '2.3.10' },
    { modid: 'cosmeticarmorreworked', version: '1.12.2-v1' },
    { modid: 'chococraft', version: '0.9.1.52' },
    { modid: 'clockhud', version: '1.4.0' },
    { modid: 'redstonearsenal', version: '2.3.10' },
    { modid: 'waystones', version: '4.0.20' },
    { modid: 'mtlib', version: '@VERSION@' },
    { modid: 'vc', version: '5.6.1' },
    { modid: 'embers', version: '0.230' },
    { modid: 'bookshelf', version: '2.3.526' },
    { modid: 'teamlapen-lib', version: '1.3.7' },
    { modid: 'platforms', version: '1.4.4' },
    { modid: 'evilcraft', version: '0.10.48' },
    { modid: 'magipsi', version: '1.3' },
    { modid: 'brandonscore', version: '2.4.0' },
    { modid: 'wholetreeaxe', version: '1.7.1' },
    { modid: 'yabba', version: '1.0.11' },
    { modid: 'cyclopscore', version: '0.11.4' },
    { modid: 'cookingforblockheads', version: '6.3.17' },
    { modid: 'betterbuilderswands', version: '0.11.1' },
    { modid: 'modtweaker', version: '4.0.7' },
    { modid: 'opencomputers', version: '1.7.1.43' },
    { modid: 'ironbackpacks', version: '1.12.2-3.0.5-6' },
    { modid: 'codechickenlib', version: '3.1.5.331' },
    { modid: 'morphtool', version: '1.2-16' },
    { modid: 'advgenerators', version: '0.9.20.12' },
    { modid: 'thermaldynamics', version: '2.3.10' },
    { modid: 'oregen', version: '1.12.2-0.6.5Beta' },
    { modid: 'signals', version: '1.0' },
    { modid: 'zerocore', version: '1.12-0.1.1.0' },
    { modid: 'shadowmc', version: '3.8.0' },
    { modid: 'enderutilities', version: '0.7.7' },
    { modid: 'commoncapabilities', version: '1.4.0' },
    { modid: 'limelib', version: '1.7.9' },
    { modid: 'chiselsandbits', version: '14.13' },
    { modid: 'scalinghealth', version: '1.3.10' },
    { modid: 'unidict', version: '1.12.2-2.3.3' },
    { modid: 'quark', version: 'r1.4-122' },
    { modid: 'packguard', version: '2.3.3' },
    { modid: 'openmods', version: '0.11.5' },
    { modid: 'twilightforest', version: '3.6.345' },
    { modid: 'extrarails', version: '1.3.0' },
    { modid: 'yummy', version: '2.3.0' },
    { modid: 'teslacorelib', version: '1.0.12' },
    { modid: 'xreliquary', version: '1.12.2-1.3.4.742' },
    { modid: 'immersivepetroleum', version: '@VERSION@' },
    { modid: 'quantumstorage', version: '4.4.8' },
    { modid: 'teslacorelib_registries', version: '1.0.12' },
    { modid: 'stevescarts', version: '2.4.17.88' },
    { modid: 'psi', version: 'r1.1-59' },
    { modid: 'flexibletools', version: '1.2.7' },
    { modid: 'akashictome', version: '1.2-10' },
    { modid: 'cofhcore', version: '4.3.10' },
    { modid: 'tombstone', version: '2.6.0' },
    { modid: 'enderfuge', version: '1.4.2' },
    { modid: 'torchmaster', version: '1.6.1.53' },
    { modid: 'crafttweakerjei', version: '2.0.0' },
    { modid: 'reborncore', version: '3.6.8.214' },
    { modid: 'cofhworld', version: '1.1.1' },
    { modid: 'appliedenergistics2', version: 'rv5-stable-8' },
    { modid: 'secretroomsmod', version: '5.3.2' },
    { modid: 'draconicevolution', version: '2.3.9' },
    { modid: 'fuelcanister', version: '1.1.3' },
    { modid: 'roots', version: '0.104' },
    { modid: 'openblocks', version: '1.7.6' },
    { modid: 'extrautils2', version: '1.0' },
    { modid: 'shetiphiancore', version: '3.5.6' },
    { modid: 'wanionlib', version: '1.12.2-1.5' },
    { modid: 'industrialforegoing', version: '1.12.2-1.12.2' },
    { modid: 'xlfoodmod', version: '1.12.2-1.4.0' },
    { modid: 'ctdcore', version: '1.2.4' },
    { modid: 'vampirism', version: '1.3.7' },
    { modid: 'gravelores', version: '1.8' },
    { modid: 'astikoor', version: '1.0.0' },
    { modid: 'horsepower', version: '2.5.11' },
    { modid: 'crafttweaker', version: '4.1.5' },
    { modid: 'chisel', version: 'MC1.12-0.2.0.29' },
    { modid: 'baubles', version: '1.5.2' },
    { modid: 'immersivetech', version: '1.3.5' },
    { modid: 'immersiveengineering', version: '0.12-77' },
    { modid: 'actuallyadditions', version: '1.12.2-r131' },
    { modid: 'redstonepaste', version: '1.7.5' },
    { modid: 'sgextraparts', version: '1.4.1' },
    { modid: 'chickenchunks', version: '2.4.1.71' },
    { modid: 'evilcraftcompat', version: '1.0.0' },
    { modid: 'thermalexpansion', version: '5.3.10' },
    { modid: 'astralsorcery', version: '1.8.5' },
    { modid: 'redstoneflux', version: '2.0.1' },
    { modid: 'usefulnullifiers', version: '1.4.1' },
    { modid: 'claybucket', version: '1.1' },
    { modid: 'hammercore', version: '1.9.6.8' },
    { modid: 'darkutils', version: '1.8.192' },
    { modid: 'enderstorage', version: '2.4.2.126' },
    { modid: 'colossalchests', version: '1.6.9' }]
});


function sayPosition(username) {
  bot.chat(`I am at ${bot.entity.position}`)
  bot.chat(`You are at ${bot.players[username].entity.position}`)
}

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  //const result = /canSee (-?[0-9]+),(-?[0-9]+),(-?[0-9]+)/.exec(message)
  //if (result) {
  //canSee(new Vec3(result[1], result[2], result[3]))
  //return
  //}
  switch (message) {
    case 'pos':
      sayPosition(username)
      break
    case 'wearing':
      sayEquipment()
      break
    case 'spawn':
      saySpawnPoint()
      break
    case 'block':
      sayBlockUnder(username)
      break
    case 'quit':
      quit(username)
      break
    case 'sleep':
      goToSleep()
      break
    case 'wakeup':
      wakeUp()
      break
    case 'come':
      bot.navigate.to(target.position);
      break
    case 'halt':
      bot.navigate.stop();
      break
    default:
      bot.chat("That's nice")
  }

  // function canSee (pos) {
  //   const block = bot.blockAt(pos)
  //   const r = bot.canSeeBlock(block)
  //   if (r) {
  //     bot.chat(`I can see the block of ${block.displayName} at ${pos}`)
  //   } else {
  //     bot.chat(`I cannot see the block of ${block.displayName} at ${pos}`)
  //   }
  // }

  function sayEquipment() {
    const eq = bot.players[username].entity.equipment
    const eqText = []
    if (eq[0]) eqText.push(`holding a ${eq[0].displayName}`)
    if (eq[1]) eqText.push(`wearing a ${eq[1].displayName} on your feet`)
    if (eq[2]) eqText.push(`wearing a ${eq[2].displayName} on your legs`)
    if (eq[3]) eqText.push(`wearing a ${eq[3].displayName} on your torso`)
    if (eq[4]) eqText.push(`wearing a ${eq[4].displayName} on your head`)
    if (eqText.length) {
      bot.chat(`You are ${eqText.join(', ')}.`)
    } else {
      bot.chat('You are naked!')
    }
  }

  function saySpawnPoint() {
    bot.chat(`Spawn is at ${bot.spawnPoint}`)
  }

  // function sayBlockUnder () {
  //   const block = bot.blockAt(bot.players[username].entity.position.offset(0, -1, 0))
  //   bot.chat(`Block under you is ${block.displayName} in the ${block.biome.name} biome`)
  //   console.log(block)
  // }

  function quit(username) {
    bot.quit(`${username} told me to`)
  }

  function goToSleep() {
    const bed = bot.findBlock({
      matching: 26
    })
    if (bed) {
      bot.sleep(bed, (err) => {
        if (err) {
          bot.chat(`I can't sleep: ${err.message}`)
        } else {
          bot.chat("I'm sleeping")
        }
      })
    } else {
      bot.chat('No nearby bed')
    }
  }

  function wakeUp() {
    bot.wake((err) => {
      if (err) {
        bot.chat(`I can't wake up: ${err.message}`)
      } else {
        bot.chat('I woke up')
      }
    })
  }
})

// bot.on('whisper', (username, message, rawMessage) => {
//   console.log(`I received a message from ${username}: ${message}`)
//   bot.whisper(username, 'I can tell secrets too.')
// })
bot.on('nonSpokenChat', (message) => {
  console.log(`Non spoken chat: ${message}`)
})

bot.on('login', () => {
  bot.chat(`Ciao bellezze! Sono sbucato in ${bot.entity.position}`)
})
bot.on('spawn', () => {
  bot.chat('I spawned, watch out!')
})
bot.on('spawnReset', (message) => {
  bot.chat('Oh noez! My bed is broken.')
})
bot.on('forcedMove', () => {
  bot.chat(`I have been forced to move to ${bot.entity.position}`)
})
bot.on('health', () => {
  bot.chat(`I have ${bot.health} health and ${bot.food} food`)
})
bot.on('death', () => {
  bot.chat('I died x.x')
})
bot.on('kicked', (reason) => {
  console.log(`I got kicked for ${reason}`)
})

bot.on('time', () => {
  // bot.chat("Current time: " + bot.time.day % 24000);
})
// bot.on('rain', () => {
//   if (bot.isRaining) {
//     bot.chat('It started raining.')
//   } else {
//     bot.chat('It stopped raining.')
//   }
// })
// bot.on('noteHeard', (block, instrument, pitch) => {
//   bot.chat(`Music for my ears! I just heard a ${instrument.name}`)
// })
// bot.on('chestLidMove', (block, isOpen) => {
//   const action = isOpen ? 'open' : 'close'
//   bot.chat(`Hey, did someone just ${action} a chest?`)
// })
// bot.on('pistonMove', (block, isPulling, direction) => {
//   const action = isPulling ? 'pulling' : 'pushing'
//   bot.chat(`A piston is ${action} near me, i can hear it.`)
// })

bot.on('playerJoined', (player) => {
  if (player.username !== bot.username) {
    bot.chat(`Benvenuto, ${player.username}!`)
  }
})
bot.on('playerLeft', (player) => {
  if (player.username === bot.username) return
  bot.chat(`Bye ${player.username}`)
})
// bot.on('playerCollect', (collector, collected) => {
//   if (collector.type === 'player' && collected.type === 'object') {
//     const rawItem = collected.metadata[10]
//     const item = mineflayer.Item.fromNotch(rawItem)
//     bot.chat(`${collector.username !== bot.username ? ("I'm so jealous. " + collector.username) : 'I '} collected ${item.count} ${item.displayName}`)
//   }
// })

// bot.on('entitySpawn', (entity) => {
//   if (entity.type === 'mob') {
//     //console.log(`Look out! A ${entity.mobType} spawned at ${entity.position}`)
//   } else if (entity.type === 'player') {
//     bot.chat(`Look who decided to show up: ${entity.username}`)
//   } else if (entity.type === 'object') {
//     //bot.chat(`There's a ${entity.objectType} at ${entity.position}`)
//   } else if (entity.type === 'global') {
//     bot.chat('Ooh lightning!')
//   } else if (entity.type === 'orb') {
//     bot.chat('Gimme dat exp orb!')
//   }
// })
// bot.on('entityHurt', (entity) => {
//   if (entity.type === 'mob') {
//     // bot.chat(`Haha! The ${entity.mobType} got hurt!`)
//     bot.chat(`Haha! The mob got hurt!`)
//   } else if (entity.type === 'player') {
//     bot.chat(`Aww, poor ${entity.username} got hurt. Maybe you shouldn't have a ping of ${bot.players[entity.username].ping}`)
//   }
// })
// bot.on('entitySwingArm', (entity) => {
//   bot.chat(`${entity.username}, I see that your arm is working fine.`)
// })
// bot.on('entityCrouch', (entity) => {
//   bot.chat(`${entity.username}: you so sneaky.`)
// })
// bot.on('entityUncrouch', (entity) => {
//   bot.chat(`${entity.username}: welcome back from the land of hunchbacks.`)
// })
bot.on('entitySleep', (entity) => {
  bot.chat(`Good night, ${entity.username}`)
})
bot.on('entityWake', (entity) => {
  bot.chat(`Top of the morning, ${entity.username}`)
})
bot.on('entityEat', (entity) => {
  bot.chat(`${entity.username}: OM NOM NOM NOMONOM. That's what you sound like.`)
})

bot.on('sleep', () => {
  bot.chat('Good night!')
})
bot.on('wake', () => {
  bot.chat('Good morning!')
})
// bot.on('entityAttach', (entity, vehicle) => {
//   if (entity.type === 'player' && vehicle.type === 'object') {
//     bot.chat(`Sweet, ${entity.username} is riding that ${vehicle.objectType}`)
//   }
// })
// bot.on('entityDetach', (entity, vehicle) => {
//   if (entity.type === 'player' && vehicle.type === 'object') {
//     bot.chat(`Lame, ${entity.username} stopped riding the ${vehicle.objectType}`)
//   }
// })
// bot.on('entityEquipmentChange', (entity) => {
  // console.log('entityEquipmentChange', entity)
// })
// bot.on('entityEffect', (entity, effect) => {
  // console.log('entityEffect', entity, effect)
// })
// bot.on('entityEffectEnd', (entity, effect) => {
  // console.log('entityEffectEnd', entity, effect)
// })
