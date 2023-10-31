import { createSlice } from '@reduxjs/toolkit'

export const monsters = [
    {
        imgSrc: 'dokkebi.png',
        name: 'Dokkaebi, Oni',
        country: 'South Korea, Japan',
        description: 'Carries a big spiky magic club and plays tricks on people',
        funFact: 'Dokkaebi is the inspiration for the kdrama Dokkaebi',
        funFactImgSrc: 'dokkaebi-kdrama.jpg'
    },
    {
        imgSrc: 'krampus.jpeg',
        name: 'Krampus',
        country: 'Eastern Europe',
        description: 'Scares children on Christmas. He is the opposite of Santa',
        funFact: 'If you\'re not a good kid, Krampus will kidnap you in his backpack-basket',
        funFactImgSrc: 'krampus-basket.jpg'
    },
    {
        imgSrc: 'chupacabra.jpeg',
        name: 'Chupacabra',
        country: 'Latin America',
        description: 'They suck the blood of farm animals. Some people say they saw one, but know one knows if they exist',
        funFact: 'Some people think this guy is a Chupacabra',
        funFactImgSrc: 'puss.jpg'
    },
    {
        imgSrc: 'hiderigami.png',
        name: 'Hanba, Hinderigami',
        country: 'China, Japan',
        description: 'They can cause draught and are super hot (literally)',
        funFact: 'The chinese version, Hanba, is a goddess who got kicked out of heaven and turned into a demon',
        funFactImgSrc: 'hanba.jpg'
    },
    {
        imgSrc: 'jersey_devil.png',
        name: 'Jersey Devil',
        country: 'New Jersey, Philadelphia, United States',
        description: 'He looks like a Kangeroo with a horse+goat head, horns, bat wings, small claws on the front leg, and hooves on the back leg.',
        funFact: 'He flies around screaming in a high-pitch blood-curdling voice, and some people say he is a witch\'s son who got transformed',
        funFactImgSrc: 'jersey_devil_scream.jpeg'
    },
    {
        imgSrc: 'migoi_grafitti.jpeg',
        name: 'Migoi or Migoe',
        country: 'Bhutan',
        description: 'They are said to be able to walk backwards up and down mountains, turn invisible, and cast strange magic',
        funFact: 'They have a really cool fan-made poster',
        funFactImgSrc: 'migoi_poster.jpeg'
    },
    {
        imgSrc: 'tsuchinoko.jpeg',
        name: 'Tsuchinoko',
        country: 'Japan',
        description: 'They are shorter and wider talking snakes that always lie and like drinking alcohol',
        funFact: 'They can bite their tail and turn into a loop to roll down hills. They can also go really high by jumping and then jumping again in mid air. Plus, they\'re really cute',
        funFactImgSrc: 'tsuchinoko.png'
    },
    {
        imgSrc: 'makara.jpeg',
        name: 'Makara',
        country: 'India',
        description: 'They are water gods that are part elephant, part crocodile, and part fish',
        funFact: 'Makara statues guard gates and entrances in Hindu temples',
        funFactImgSrc: 'makara_bust.jpeg'
    },
    {
        imgSrc: 'aswang.jpg',
        name: 'Aswang',
        country: 'Philippines',
        description: 'They are shape-shifting part-human part-animal guys that want to eat your organs',
        funFact: 'They can be your friend and come to your parties. In fact, one could be in this party!',
        funFactImgSrc: 'halloween_party.jpeg'
    },
    {
        imgSrc: 'wendigo.jpeg',
        name: 'Wendigo',
        country: 'Native American',
        description: 'They are evil spirits that possess you and make you always hungry and make you want to kill and eat other people',
        funFact: 'When a Wendigo is approaching you, you feel cold and chilly and smell a bad stench.',
        funFactImgSrc: 'wendigo_possession.jpg'
    },
    {
        imgSrc: 'kamaitachi.png',
        name: 'Kamaitachi',
        country: 'Japan',
        description: 'They are dust devil spirits who attack people by turning into a tornado, spinning-blade-attacking with their sickle arms. Their attacks don\'t hurt tho, cuz they are wind.',
        funFact: 'Some people say Kamaitachi are upgraded ghosts of really strong mantises',
        funFactImgSrc: 'kamaitachi_collage.png'
    },
    {
        imgSrc: 'bunyip.jpeg',
        name: 'Bunyip',
        country: 'Australia',
        description: 'Some witnesses say they are seal-dogs. Others say they are elephant-horse-emus. Still others say they are a giant starfish?!',
        funFact: 'If a kid or someone who caught too much fish gets close to the water, Bunyip attacks them',
        funFactImgSrc: 'bunyip_attack.jpeg'
    },
    {
        imgSrc: 'draugr.jpg',
        name: 'Draugr',
        country: 'Norway',
        description: 'They are living-dead worriors whose spirit came back to their dead bodies in the grave, like zombies',
        funFact: 'They guard the treasure in the royal palace',
        funFactImgSrc: 'viking_treasure.jpeg'
    },
    {
        imgSrc: 'yaksha.png',
        name: 'Yaksha (male), Yakshi (female)',
        country: 'India, Thailand',
        description: 'They are forest spirits connected to trees and the wild. They sometimes guard treasures or a temple',
        funFact: 'Evil Yakshas are like Bhutas (ghosts). They eat travelers lost in the forest',
        funFactImgSrc: 'bhuta.jpeg'
    },
    {
        imgSrc: 'gumiho.jpg',
        name: 'Nine-tailed Fox',
        country: 'China, Japan, Korea',
        description: 'They live for thousands of years',
        funFact: 'They can turn into girls to trick people',
        funFactImgSrc: 'gumiho_human.png'
    },
    {
        imgSrc: 'lou_carcolh.jpg',
        name: 'Lou Carcolh',
        country: 'France',
        description: 'He is a giant snail-snake that lives in caves and swallows people whole',
        funFact: 'You know Lou Carcolh is nearby if you see a huge trail of slime. If you slip on the slime, Lou Calcolh will drag you to its cave with its tentacles',
        funFactImgSrc: 'lou_carcolh_fight.jpg'
    },
    {
        imgSrc: 'ghoul.png',
        name: 'Ghoul',
        country: 'Arabia',
        description: 'They live in graveyards and eat human flesh',
        funFact: 'Quran scholars say Ghouls are either Djinns (like Genie from Aladdin) or burned devils',
        funFactImgSrc: 'genie.jpg'
    },
    {
        imgSrc: 'gandaberunda.jpeg',
        name: 'Gandaberunda (original: Narasimha)',
        country: 'India',
        description: 'He was a dude with a lion\'s head before, but he leveled up into a two headed mega-bird and changed his name.',
        funFact: 'He is in the state emblem of Karnataka',
        funFactImgSrc: 'Karnataka.png'
    },
    {
        imgSrc: 'reaper.jpeg',
        name: 'East Asian Grim Reaper (Jeosengsaja in Korean)',
        country: 'China, Japan, Korea .etc',
        description: 'Their job is to bring dead souls to the underworld',
        funFact: 'A Jeosengsaja is also featured in the Kdrama Dokkaebi',
        funFactImgSrc: 'reaper_dokkaebi.jpg'
    },
    {
        imgSrc: 'kelpie.png',
        name: 'Kelpie',
        country: 'Scotland',
        description: 'They are water spirit horses that makes you want to get on their back and then drowns you',
        funFact: 'They can shape-shift, so they can turn into humans',
        funFactImgSrc: 'kelpie_human.jpeg'
    },
    {
        imgSrc: 'adze.jpg',
        name: 'Adze',
        country: 'Ghana',
        description: 'They are vampires that turn into fireflies, get into homes, and bite people. People who get bitted get sick and die',
        funFact: 'The Adze in human form can turn people into witches',
        funFactImgSrc: 'adze-human.jpg'
    },
    {
        imgSrc: 'mongolian-death-worm.png',
        name: 'Mongolian Death Worm (olgoi-khorkhoi)',
        country: 'Mongolia',
        description: 'They are huge worms that live in the desert and their name means \'large-intestine worm\'',
        funFact: 'Some people say they kill prey with electric shocks, and that they are so poisonous that you die just by touching them',
        funFactImgSrc: 'death-worm-in-book.png'
    },
    {
        imgSrc: 'vanara.jpg',
        name: 'Vanara',
        country: 'India',
        description: 'They are monkey people who live in the forest and fight demons',
        funFact: 'In the epic Ramayana, the main character Rama\'s best friend Hanuman is a Vanara',
        funFactImgSrc: 'hanuman-rama.jpeg'
    },
    {
        imgSrc: 'gashadokuro.jpg',
        name: 'Gashadokuro',
        country: 'Japan',
        description: 'They are giant 10m tall skeletons mades of the bones of people who died in battle',
        funFact: 'They hunt and kill people at 2:00 a.m. (go to sleep early kids). Once their anger is satisfied, they crumble back into a pile of bones.',
        funFactImgSrc: 'gashadokuro_japanese.jpg'
    },
    {
        imgSrc: 'grootslang.jpeg',
        name: 'Grootslang',
        country: 'South Africa',
        description: 'It is a huge half elephant half snake guy that live in a really really deep cave (64km deep)',
        funFact: 'The Grootslang\'s cave is is full of diamonds :)',
        funFactImgSrc: 'diamond_cave.jpg'
    },
    {
        imgSrc: 'virgin-ghost.jpg',
        name: 'Virgin Ghost, Ido',
        country: 'South Korea, Japan',
        description: 'Died unfairly, so she\'s super mad',
        funFact: 'She wears funeral clothes called Sobok (소복) in Korea',
        funFactImgSrc: 'sobok.jpg'
    },
    {
        imgSrc: 'naga.jpg',
        name: 'Naga, Nagi, Nagini',
        country: 'India, Cambodia, Indonesia',
        description: 'Their favorite topics are water and fertility, and they are really wise',
        funFact: 'Voldmort\'s pet snake\'s name is Nagini (Harry Potter series)',
        funFactImgSrc: 'Voldemort-Nagini.jpg'
    },
    {
        imgSrc: 'taotie.jpg',
        name: 'Taotie',
        country: 'China',
        description: 'They love eating and are always hungry. Their favorite food is us.',
        funFact: 'People make Taotie statues in front of buildings to keep out bad spirits',
        funFactImgSrc: 'taotie_statue.jpg'
    },
    {
        imgSrc: 'banshee.jpeg',
        name: 'Banshee',
        country: 'Ireland',
        description: 'You can hear her screaming when a family member is about to die',
        funFact: 'Some people say Banshee has red hair',
        funFactImgSrc: 'redhead-banshee.jpeg'
    },
    {
        imgSrc: 'diaosigui.jpeg',
        name: 'Diaosigui',
        country: 'China',
        description: 'They are the ghosts of people who died by hanging or got executed, and they always stick out their tongue',
        funFact: 'They live around the place they died and try to talk you into going to the underworld with them.',
        funFactImgSrc: 'diaosigui_sticker.jpeg'
    },

    {
        imgSrc: 'garuda.jpg',
        name: 'Garuda',
        country: 'China',
        description: 'He can make the earth, heaven, and hell stop spinning by flapping his wings really fast',
        funFact: 'He is Vishnu\'s car/driver. They sometimes do ride sharing',
        funFactImgSrc: 'garuda_sharing.jpeg'
    },
    {
        imgSrc: 'bull_demon_king.png',
        name: 'Bull Demon King',
        country: 'China',
        description: 'He is a supervillain who was sworn brothers with a monkey',
        funFact: 'He married Princess Iron Fan. Their son is Red Boy',
        funFactImgSrc: 'bull_demon_family.jpg'
    },
]


const initialState = {
    monsterIndex: 0,
    isNameVisible: false,
    isCountryVisible: false,
    isFunFactVisible: false,
    isHintVisible: false
}

const AppSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
        incMonsterIndex(state, action) {
            if (state.monsterIndex < monsters.length - 1){
                state.monsterIndex++;
            }

        },
        decMonsterIndex(state, action){
            if (state.monsterIndex > 0){
                state.monsterIndex--;
            }
        },
        setMonsterIndex(state, action){
            state.monsterIndex = action.payload
        },
        setIsNameVisible(state, action) {
            state.isNameVisible = action.payload
        },
        setIsCountryVisible(state, action) {
            state.isCountryVisible = action.payload
        },
        setIsFunFactVisible(state, action) {
            state.isFunFactVisible = action.payload
        },
        setIsHintVisible(state, action){
            state.isHintVisible = action.payload
        }
    }
})

export default AppSlice

