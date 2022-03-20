
/* eslint-disable no-unused-vars */
const artilleristSkillNameText = ["Enhanced Shell", "Freeze Shell", "Buckshot", "Multiple Rocket Launcher", "Howitzer", "Summon Turret", "Air Raid", "Flamethrower", "Swing", "Jump Barrage", "Energy Field", "Gatling Gun", "Napalm Shot", "Forward Barrage", "Gravity Explosion", "Plasma Storm", "Homing Barrage"]
const bardSkillNameText = ["Sound Shock", "Conviction Core", "Sound Wave", "Dissonance", "Wind of Music", "Prelude of Storm", "Stigma", "Note Bundle", "Soundholic", "Rhythm Buckshot", "Heavenly Tune", "Sonic Vibration", "Harp of Rhythm", "Prelude of Death", "Guardian Tune", "Rhapsody of Light", "March"]
const berserkerSkillNameText = ["Power Break", "Crime Hazard", "Shoulder Charge", "Whirlwind", "Hell Blade", "Strike Wave", "Double Slash", "Assault Blade", "Red Dust", "Tempest Slash", "Diving Slash", "Mountain Crash", "Finish Strike", "Aura Blade", "Chain Sword", "Sword Storm", "Wind Blade", "Maelstrom"]
const deadeyeSkillNameText = ["Enforce Execution", "Sign of Apocalypse", "Hour of Judgement", "Spiral Flame", "Triple Explosion", "Catastrophe", "Death Fire", "Meteor Stream", "Shotgun Dominator", "AT02 Grenade", "Plasma Bullet", "Shotgun Rapid Fire", "Spiral Tracker", "Cruel Tracker", "Dexterous Shot", "Somersault Shot", "Equilibrium", "Last Request", "Aimed Shot", "Quick Shot", "Perfect Shot"]
const deathbladeSkillNameText = ["Surprise Attack", "Wind Cut", "Upper Slash", "Earth Cleaver", "Death Sentence", "Twin Shadows", "Blade Dance", "Soul Absorber", "Spincutter", "Turning Slash", "Moonlight Sonic", "Dark Axel", "Maelstrom", "Polestar", "Void Strike", "Fatal Wave", "Blitz Rush", "Head Hunt"]
const gunlancerSkillNameText = ["Sharp Gunlance", "Bash", "Shield Charge", "Fire Bullet", "Rising Gunlance", "Dash Upper Fire", "Hook Chain", "Shield Shock", "Leap Attack", "Nellasia's Energy", "Guardian's Thunderbolt", "Shield Bash", "Gunlance Shot", "Shout of Hatred", "Counter Gunlance", "Surge Cannon", "Charged Stinger"]
const gunslingerSkillNameText = ["Quick Step", "Dual Buckshot", "Hour of Judgement", "Spiral Flame", "Target Down", "Catastrophe", "Death Fire", "Meteor Stream", "Sharpshooter", "AT02 Grenade", "Plasma Bullet", "Shotgun Rapid Fire", "Spiral Tracker", "Bullet Rain", "Dexterous Shot", "Somersault Shot", "Equilibrium", "Last Request", "Focused Shot", "Peacekeeper", "Perfect Shot"]
const paladinSkillNameText = ["Spin Slash", "Flash Thrust", "Light Shock", "Light of Judgement", "Charge", "Sword of Justice", "Flash Shash", "Holy Explosion", "Punishment", "Holy Area", "Dash Slash", "Holy Protection ", "Godsent Law", "Executor's Sword", "Wrath of God", "Execution of Justice", "Holy Sword", "Heavenly Blessings"]
const scrapperSkillNameText = ["Charging Blow", "Dragon Advent", "Judgement", "Earthquake Chain", "Chain of Resonance", "Crushing Smite", "Chain Destruction Fist", "Death Rattle", "Supernova", "Instant Hit", "Roundup Sweep", "Fierce Tiger Strike", "Continuous Push", "Critical Blow", "Battering Fists", "Iron Cannon Blow", "True Rising Fist", "Shredding Strike"]
const shadowhunterSkillNameText = ["Demonic Slash", "Nimble Cut", "Slasher", "Brutal Cross", "Demon's Grip", "Rising Claw", "Piercing Thorn", "Demon Vision", "Grind Chain", "Spinning Dive", "Howl", "Cruel Cutter", "Thrust Impact", "Demonic Clone", "Demolition", "Spinning Weapon", "Decimate", "Sharpened Cut"]
const sharpshooterSkillNameText = ["Rapid Shot", "Salvo", "Atomic Arrow", "Electric Nova", "Smokescreen Arrow", "Arrow Wave", "Arrow Shower", "Charged Shot", "Evasive Fire", "Sharp Shooter", "DM-42", "Deadly Slash", "Moving Slash", "Blade Storm", "Claymore Mine", "Shadow Arrow", "Stalker", "Snipe"]
const sorceressSkillNameText = ["Blaze", "Lightning Vortex", "Ice Shower", "Inferno", "Energy Discharge", "Rime Arrow", "Esoteric Reaction", "Punishing Strike", "Reverse Gravity", "Elegian's Touch", "Lightning Bolt", "Squall", "Seraphic Hail", "Explosion", "Frost's Call", "Doomsday"]
const soulfistSkillNameText = ["Energy Blast", "Venomous Fist", "Lightning Palm", "Energy Bullet", "Palm Burst", "Heavenly Squash", "Crippling Barrier", "Magnetic Palm", "Pulverizing Palm", "Tempest Blast", "Shadowbreaker", "Merciless Pummel", "Bolting Crash", "Force Orb", "Flash Step", "Energy Release", "Deadly Finger"]
const strikerSkillNameText = ["Esoteric Skill: Blast Formation", "Esoteric Skill: Spiral Impact", "Esoteric Skill: Tiger Emerges", "Flash Heat Fang", "Sleeping Ascent Celebration", "Lightning Whisper", "Berserk Circle", "Esoteric Skill: Lightning Tiger Strike", "Esoteric Skill: Call the Wind God", "Storm Dragon Awakening", "Phoenix Advent", "Sky Shattering Blow", "Lightning Kick", "Triple Fist", "Moon Flash Kick", "Swift Wind Kick", "Violent Tiger", "Sweeping Kick"]
const wardancerSkillNameText = ["Esoteric Skill: Blast Formation", "Esoteric Skill: Spiral Impact", "Esoteric Skill: Rising Fire Dragon", "Flash Heat Fang", "Sleeping Ascent Celebration", "Roar of Courage", "Seismic Strike", "Esoteric Skill: Lightning Strike", "Esoteric Skill: Call of the Wind God", "Wind's Whisper", "Phoenix Advent", "Sky Shattering Blow", "Lightning Kick", "Triple Fist", "Moon Flash Kick", "Swift Wind Kick", "Energy Combustion", "Sweeping Kick"]


function createTripod(skillClicked) {
    var defaultImg = require("./triportimages/Tripod_Tier_1_0.png");
    var defaultTripodName = "Skill"
    var skillImages = []
    var tripodName = []

    //Artillerist
    if (skillClicked === "Enhanced Shell") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_98.png"), require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_60.png"),
            require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_6.png"),
            require("./triportimages/Tripod_Tier_3_2.png"), require("./triportimages/Tripod_Tier_3_13.png"));

        tripodName.push("Armor Destruction", "Vital Point Barrage", "Repulse",
            "Bullet Enhancement", "Law of the Jungle", "Swift Fingers",
            "Piercing Shell", "Internal Ignition")

    }
    else if (skillClicked === "Freeze Shell") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_7.png"),
            require("./triportimages/Tripod_Tier_3_53.png"), require("./triportimages/Tripod_Tier_3_43.png"));

        tripodName.push("Range Barrage", "Magick Control", "Freeze Enhancement",
            "Frost Shell", "Enhanced Shell", "Wide Explosion",
            "Chain Explosion", "Glacier Explosion")

    }
    else if (skillClicked === "Buckshot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_21.png"), require("./triportimages/Tripod_Tier_1_60.png"), require("./triportimages/Tripod_Tier_1_33.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_2.png"), require("./triportimages/Tripod_Tier_2_7.png"),
            require("./triportimages/Tripod_Tier_3_40.png"), require("./triportimages/Tripod_Tier_3_13.png"));

        tripodName.push("Weak Point Enhancement", "Repulse", "Weak Point Detection",
            "Vital Point Hit", "Piercing Strike", "Ranged Buckshot",
            "Decimation Buckshot", "Internal Ignition")
    }
    else if (skillClicked === "Multiple Rocket Launcher") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_13.png"), require("./triportimages/Tripod_Tier_1_14.png"), require("./triportimages/Tripod_Tier_1_62.png"),
            require("./triportimages/Tripod_Tier_2_40.png"), require("./triportimages/Tripod_Tier_2_30.png"), require("./triportimages/Tripod_Tier_2_54.png"),
            require("./triportimages/Tripod_Tier_3_87.png"), require("./triportimages/Tripod_Tier_3_8.png"));

        tripodName.push("Flame Rocket", "Frost Rocket", "Giant Rocket",
            "Back Step", "Stun Effect", "Quick Barrage",
            "Laser Cannon", "Access Denied")
    }
    else if (skillClicked === "Howitzer") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_98.png"), require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_34.png"),
            require("./triportimages/Tripod_Tier_2_29.png"), require("./triportimages/Tripod_Tier_2_32.png"), require("./triportimages/Tripod_Tier_2_0.png"),
            require("./triportimages/Tripod_Tier_3_53.png"), require("./triportimages/Tripod_Tier_3_8.png"));

        tripodName.push("Armor Destruction", "Swift Fingers", "Magick Control",
            "Opportunist", "Final Barrage", "Focused Barrage",
            "Flash Shell", "Firework")
    }
    else if (skillClicked === "Summon Turret") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_51.png"), require("./triportimages/Tripod_Tier_1_98.png"),
            require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_52.png"), require("./triportimages/Tripod_Tier_2_41.png"),
            require("./triportimages/Tripod_Tier_3_36.png"), require("./triportimages/Tripod_Tier_3_18.png"));

        tripodName.push("High-Speed Recharge", "Sub Battery", "Armor Destruction",
            "Enhanced Turret", "Ranged Turret", "Quicker Dispatch",
            "Big Pack", "Laser Turret")
    }
    else if (skillClicked === "Air Raid") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_60.png"), require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_69.png"),
            require("./triportimages/Tripod_Tier_2_13.png"), require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_17.png"),
            require("./triportimages/Tripod_Tier_3_54.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Prepare to Fire", "Quickfire", "Concussion",
            "Flame Barrage", "Frost Barrage", "Lightning Barrage",
            "Ruthless Barrage", "The Big One")
    }
    else if (skillClicked === "Flamethrower") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_37.png"),
            require("./triportimages/Tripod_Tier_2_12.png"), require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_75.png"),
            require("./triportimages/Tripod_Tier_3_5.png"), require("./triportimages/Tripod_Tier_3_45.png"));

        tripodName.push("Vital Point Attack", "Quick Prep", "Firepower Control",
            "Ignore Collision", "Ranged Flame", "Shield",
            "Azure Flame", "Scorching Blaze")
    }
    else if (skillClicked === "Swing") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_22.png"), require("./triportimages/Tripod_Tier_1_41.png"),
            require("./triportimages/Tripod_Tier_2_10.png"), require("./triportimages/Tripod_Tier_2_40.png"), require("./triportimages/Tripod_Tier_2_79.png"),
            require("./triportimages/Tripod_Tier_3_0.png"), require("./triportimages/Tripod_Tier_3_44.png"));

        tripodName.push("Magick Control", "Weak Point Enhancement", "Quick Attack",
            "Advancing Hit", "Spin Attack", "Magick Extortion",
            "Enhancing Strike", "Stunner")
    }
    else if (skillClicked === "Jump Barrage") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_9.png"),
            require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_54.png"), require("./triportimages/Tripod_Tier_3_10.png"));

        tripodName.push("Quick Jump", "Magick Control", "Muscle Spasm",
            "Wide Explosion", "Enhanced Barrage", "Weak Point Detection",
            "Triple Barrage", "Rocket Jump")
    }
    else if (skillClicked === "Energy Field") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_37.png"), require("./triportimages/Tripod_Tier_1_1.png"), require("./triportimages/Tripod_Tier_1_34.png"),
            require("./triportimages/Tripod_Tier_2_75.png"), require("./triportimages/Tripod_Tier_2_51.png"), require("./triportimages/Tripod_Tier_2_56.png"),
            require("./triportimages/Tripod_Tier_3_25.png"), require("./triportimages/Tripod_Tier_3_65.png"));

        tripodName.push("Firepower Concentration", "Field Release", "Mind Concentration",
            "Shield Enhancement", "Energy Increase", "Quick Prep",
            "Solid Shield", "Energy Share")
    }
    else if (skillClicked === "Gatling Gun") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_0.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_32.png"),
            require("./triportimages/Tripod_Tier_2_58.png"), require("./triportimages/Tripod_Tier_2_23.png"), require("./triportimages/Tripod_Tier_2_25.png"),
            require("./triportimages/Tripod_Tier_3_42.png"), require("./triportimages/Tripod_Tier_3_7.png"));

        tripodName.push("Enhanced Shot", "Quick Prep", "Kill Confirmation",
            "Growth Bullet", "Tenacity", "Sturdy Armor",
            "Will of the Destroyer", "Aimed Shot")
    }
    else if (skillClicked === "Napalm Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_22.png"), require("./triportimages/Tripod_Tier_1_7.png"), require("./triportimages/Tripod_Tier_1_69.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_45.png"), require("./triportimages/Tripod_Tier_2_30.png"),
            require("./triportimages/Tripod_Tier_3_8.png"), require("./triportimages/Tripod_Tier_3_58.png"));

        tripodName.push("Weak Point Enhancement", "Wide Explosion", "Target Focus",
            "Vital Point Barrage", "Fierce Heat", "Flash Explosion",
            "Chain Explosion", "Dancing Flame")
    }
    else if (skillClicked === "Forward Barrage") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_53.png"), require("./triportimages/Tripod_Tier_1_37.png"), require("./triportimages/Tripod_Tier_1_7.png"),
            require("./triportimages/Tripod_Tier_2_56.png"), require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_4.png"),
            require("./triportimages/Tripod_Tier_3_54.png"), require("./triportimages/Tripod_Tier_3_40.png"));

        tripodName.push("Coordinate Change", "Firepower Control", "Wide Explosion",
            "Quick Prep", "Enhanced Barrage", "Keen Strike",
            "Dancing Explosion", "Focused Barrage")
    }
    else if (skillClicked === "Gravity Explosion") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_72.png"), require("./triportimages/Tripod_Tier_1_0.png"), require("./triportimages/Tripod_Tier_1_30.png"),
            require("./triportimages/Tripod_Tier_2_75.png"), require("./triportimages/Tripod_Tier_2_27.png"), require("./triportimages/Tripod_Tier_2_41.png"),
            require("./triportimages/Tripod_Tier_3_81.png"), require("./triportimages/Tripod_Tier_3_71.png"));

        tripodName.push("Free Fire", "The More the Merrier", "Stun Effect",
            "Sturdy Armor", "Stabilize", "Sweeping Gravity",
            "Sweep", "Planetary Gravity")
    }
    else if (skillClicked === "Plasma Storm") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_25.png"), require("./triportimages/Tripod_Tier_1_44.png"),
            require("./triportimages/Tripod_Tier_2_11.png"), require("./triportimages/Tripod_Tier_2_51.png"), require("./triportimages/Tripod_Tier_2_7.png"),
            require("./triportimages/Tripod_Tier_3_58.png"), require("./triportimages/Tripod_Tier_3_14.png"));

        tripodName.push("Swift Fingers", "Sturdy Armor", "Stun Effect",
            "High-Speed Flight", "Sustain Enhancement", "Large Plasma",
            "Plasma Growth", "Ice Storm")
    }
    else if (skillClicked === "Homing Barrage") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_18.png"), require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_1.png"),
            require("./triportimages/Tripod_Tier_3_54.png"), require("./triportimages/Tripod_Tier_3_81.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
   
    } /** End of Artillerist Abilities */
    /***************************************Here is where we start */
    else if (skillClicked === "Sound Shock") { // Bard start
        skillImages.push(require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_7.png"), require("./triportimages/Tripod_Tier_1_8.png"),
            require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_50.png"), require("./triportimages/Tripod_Tier_2_34.png"),
            require("./triportimages/Tripod_Tier_3_53.png"), require("./triportimages/Tripod_Tier_3_54.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Conviction Core") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_51.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_1.png"),
            require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_50.png"), require("./triportimages/Tripod_Tier_2_34.png"),
            require("./triportimages/Tripod_Tier_3_53.png"), require("./triportimages/Tripod_Tier_3_54.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sound Wave") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_10.png"), require("./triportimages/Tripod_Tier_1_7.png"),
            require("./triportimages/Tripod_Tier_2_34.png"), require("./triportimages/Tripod_Tier_2_65.png"), require("./triportimages/Tripod_Tier_2_64.png"),
            require("./triportimages/Tripod_Tier_3_1.png"), require("./triportimages/Tripod_Tier_3_44.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Dissonance") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_64.png"), require("./triportimages/Tripod_Tier_1_34.png"),
            require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_46.png"), require("./triportimages/Tripod_Tier_2_7.png"),
            require("./triportimages/Tripod_Tier_3_81.png"), require("./triportimages/Tripod_Tier_3_1.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Harmony Enhancement",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Wind of Music") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_41.png"),
            require("./triportimages/Tripod_Tier_2_64.png"), require("./triportimages/Tripod_Tier_2_1.png"), require("./triportimages/Tripod_Tier_2_24.png"),
            require("./triportimages/Tripod_Tier_3_38.png"), require("./triportimages/Tripod_Tier_3_75.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Prelude of Storm") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_61.png"),
            require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_64.png"), require("./triportimages/Tripod_Tier_2_1.png"),
            require("./triportimages/Tripod_Tier_3_8.png"), require("./triportimages/Tripod_Tier_3_17.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Stigma") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_7.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_51.png"),
            require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_18.png"), require("./triportimages/Tripod_Tier_2_81.png"),
            require("./triportimages/Tripod_Tier_3_53.png"), require("./triportimages/Tripod_Tier_3_64.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Note Bundle") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_65.png"), require("./triportimages/Tripod_Tier_1_38.png"), require("./triportimages/Tripod_Tier_1_78.png"),
            require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_18.png"), require("./triportimages/Tripod_Tier_2_58.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Soundholic") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_58.png"), require("./triportimages/Tripod_Tier_1_1.png"), require("./triportimages/Tripod_Tier_1_79.png"),
            require("./triportimages/Tripod_Tier_2_42.png"), require("./triportimages/Tripod_Tier_2_75.png"), require("./triportimages/Tripod_Tier_2_47.png"),
            require("./triportimages/Tripod_Tier_3_64.png"), require("./triportimages/Tripod_Tier_3_40.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Rhythm Buckshot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_64.png"), require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_9.png"),
            require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_23.png"), require("./triportimages/Tripod_Tier_2_9.png"),
            require("./triportimages/Tripod_Tier_3_6.png"), require("./triportimages/Tripod_Tier_3_50.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Heavenly Tune") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_34.png"),
            require("./triportimages/Tripod_Tier_2_65.png"), require("./triportimages/Tripod_Tier_2_46.png"), require("./triportimages/Tripod_Tier_2_7.png"),
            require("./triportimages/Tripod_Tier_3_1.png"), require("./triportimages/Tripod_Tier_3_24.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sonic Vibration") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_75.png"), require("./triportimages/Tripod_Tier_1_23.png"),
            require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_18.png"), require("./triportimages/Tripod_Tier_2_81.png"),
            require("./triportimages/Tripod_Tier_3_7.png"), require("./triportimages/Tripod_Tier_3_54.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Harp of Rhythm") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_51.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_34.png"),
            require("./triportimages/Tripod_Tier_2_6.png"), require("./triportimages/Tripod_Tier_2_40.png"), require("./triportimages/Tripod_Tier_2_64.png"),
            require("./triportimages/Tripod_Tier_3_65.png"), require("./triportimages/Tripod_Tier_3_39.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Prelude of Death") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_64.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_34.png"),
            require("./triportimages/Tripod_Tier_2_1.png"), require("./triportimages/Tripod_Tier_2_47.png"), require("./triportimages/Tripod_Tier_2_51.png"),
            require("./triportimages/Tripod_Tier_3_50.png"), require("./triportimages/Tripod_Tier_3_44.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Guardian Tune") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_23.png"), require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_6.png"),
            require("./triportimages/Tripod_Tier_2_75.png"), require("./triportimages/Tripod_Tier_2_25.png"), require("./triportimages/Tripod_Tier_2_53.png"),
            require("./triportimages/Tripod_Tier_3_56.png"), require("./triportimages/Tripod_Tier_3_65.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Rhapsody of Light") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_41.png"),
            require("./triportimages/Tripod_Tier_2_23.png"), require("./triportimages/Tripod_Tier_2_76.png"), require("./triportimages/Tripod_Tier_2_51.png"),
            require("./triportimages/Tripod_Tier_3_58.png"), require("./triportimages/Tripod_Tier_3_65.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "March") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_11.png"),
            require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_47.png"),
            require("./triportimages/Tripod_Tier_3_1.png"), require("./triportimages/Tripod_Tier_3_37.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } /*** End of Bard */
    else if (skillClicked === "Power Break") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_34.png"),
            require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_29.png"),
            require("./triportimages/Tripod_Tier_3_42.png"), require("./triportimages/Tripod_Tier_3_39.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Crime Hazard") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_51.png"), require("./triportimages/Tripod_Tier_1_0.png"), require("./triportimages/Tripod_Tier_1_4.png"),
            require("./triportimages/Tripod_Tier_2_33.png"), require("./triportimages/Tripod_Tier_2_37.png"), require("./triportimages/Tripod_Tier_2_5.png"),
            require("./triportimages/Tripod_Tier_3_39.png"), require("./triportimages/Tripod_Tier_3_8.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shoulder Charge") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_75.png"), require("./triportimages/Tripod_Tier_1_13.png"), require("./triportimages/Tripod_Tier_1_10.png"),
            require("./triportimages/Tripod_Tier_2_38.png"), require("./triportimages/Tripod_Tier_2_8.png"), require("./triportimages/Tripod_Tier_2_39.png"),
            require("./triportimages/Tripod_Tier_3_15.png"), require("./triportimages/Tripod_Tier_3_78.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Whirlwind") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_11.png"), require("./triportimages/Tripod_Tier_1_42.png"), require("./triportimages/Tripod_Tier_1_56.png"),
            require("./triportimages/Tripod_Tier_2_39.png"), require("./triportimages/Tripod_Tier_2_58.png"), require("./triportimages/Tripod_Tier_2_0.png"),
            require("./triportimages/Tripod_Tier_3_7.png"), require("./triportimages/Tripod_Tier_3_40.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Hell Blade") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_7.png"), require("./triportimages/Tripod_Tier_1_10.png"), require("./triportimages/Tripod_Tier_1_71.png"),
            require("./triportimages/Tripod_Tier_2_46.png"), require("./triportimages/Tripod_Tier_2_85.png"), require("./triportimages/Tripod_Tier_2_32.png"),
            require("./triportimages/Tripod_Tier_3_15.png"), require("./triportimages/Tripod_Tier_3_13.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Strike Wave") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_0.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_56.png"),
            require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_58.png"), require("./triportimages/Tripod_Tier_2_8.png"),
            require("./triportimages/Tripod_Tier_3_13.png"), require("./triportimages/Tripod_Tier_3_15.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Double Slash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_0.png"), require("./triportimages/Tripod_Tier_1_39.png"), require("./triportimages/Tripod_Tier_1_41.png"),
            require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_40.png"), require("./triportimages/Tripod_Tier_2_10.png"),
            require("./triportimages/Tripod_Tier_3_42.png"), require("./triportimages/Tripod_Tier_3_88.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Assault Blade") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_2.png"), require("./triportimages/Tripod_Tier_1_0.png"),
            require("./triportimages/Tripod_Tier_2_37.png"), require("./triportimages/Tripod_Tier_2_20.png"), require("./triportimages/Tripod_Tier_2_28.png"),
            require("./triportimages/Tripod_Tier_3_8.png"), require("./triportimages/Tripod_Tier_3_38.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Red Dust") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_34.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_20.png"), require("./triportimages/Tripod_Tier_2_45.png"),
            require("./triportimages/Tripod_Tier_3_0.png"), require("./triportimages/Tripod_Tier_3_2.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Tempest Slash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_37.png"), require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_56.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_39.png"), require("./triportimages/Tripod_Tier_3_8.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Diving Slash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_10.png"), require("./triportimages/Tripod_Tier_1_37.png"), require("./triportimages/Tripod_Tier_1_56.png"),
            require("./triportimages/Tripod_Tier_2_11.png"), require("./triportimages/Tripod_Tier_2_9.png"), require("./triportimages/Tripod_Tier_2_51.png"),
            require("./triportimages/Tripod_Tier_3_0.png"), require("./triportimages/Tripod_Tier_3_45.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Mountain Crash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_37.png"), require("./triportimages/Tripod_Tier_1_51.png"),
            require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_48.png"), require("./triportimages/Tripod_Tier_2_47.png"),
            require("./triportimages/Tripod_Tier_3_8.png"), require("./triportimages/Tripod_Tier_3_15.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Finish Strike") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_23.png"), require("./triportimages/Tripod_Tier_1_45.png"), require("./triportimages/Tripod_Tier_1_0.png"),
            require("./triportimages/Tripod_Tier_2_32.png"), require("./triportimages/Tripod_Tier_2_51.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_8.png"), require("./triportimages/Tripod_Tier_3_40.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Aura Blade") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_52.png"),
            require("./triportimages/Tripod_Tier_2_20.png"), require("./triportimages/Tripod_Tier_2_45.png"), require("./triportimages/Tripod_Tier_2_2.png"),
            require("./triportimages/Tripod_Tier_3_39.png"), require("./triportimages/Tripod_Tier_3_38.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Chain Sword") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_4.png"), require("./triportimages/Tripod_Tier_1_10.png"), require("./triportimages/Tripod_Tier_1_6.png"),
            require("./triportimages/Tripod_Tier_2_39.png"), require("./triportimages/Tripod_Tier_2_45.png"), require("./triportimages/Tripod_Tier_2_48.png"),
            require("./triportimages/Tripod_Tier_3_56.png"), require("./triportimages/Tripod_Tier_3_7.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sword Storm") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_4.png"),
            require("./triportimages/Tripod_Tier_2_8.png"), require("./triportimages/Tripod_Tier_2_33.png"), require("./triportimages/Tripod_Tier_2_23.png"),
            require("./triportimages/Tripod_Tier_3_13.png"), require("./triportimages/Tripod_Tier_3_15.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Wind Blade") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_11.png"), require("./triportimages/Tripod_Tier_1_45.png"), require("./triportimages/Tripod_Tier_1_56.png"),
            require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_37.png"),
            require("./triportimages/Tripod_Tier_3_40.png"), require("./triportimages/Tripod_Tier_3_39.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Maelstrom") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_6.png"), require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_37.png"),
            require("./triportimages/Tripod_Tier_2_23.png"), require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_4.png"),
            require("./triportimages/Tripod_Tier_3_8.png"), require("./triportimages/Tripod_Tier_3_15.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } /** End of berserker */ 
    //////////////////////start here
    else if (skillClicked === "Enforce Execution") { // start of  deadeye
        skillImages.push(require("./triportimages/Tripod_Tier_1_11.png"), require("./triportimages/Tripod_Tier_1_7.png"), require("./triportimages/Tripod_Tier_1_4.png"),
            require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_23.png"), require("./triportimages/Tripod_Tier_2_32.png"),
            require("./triportimages/Tripod_Tier_3_29.png"), require("./triportimages/Tripod_Tier_3_8.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sign of Apocalypse") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_70.png"), require("./triportimages/Tripod_Tier_1_7.png"), require("./triportimages/Tripod_Tier_1_44.png"),
            require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_2.png"), require("./triportimages/Tripod_Tier_2_56.png"),
            require("./triportimages/Tripod_Tier_3_38.png"), require("./triportimages/Tripod_Tier_3_5.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Hour of Judgement") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_56.png"), require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_26.png"),
            require("./triportimages/Tripod_Tier_2_87.png"), require("./triportimages/Tripod_Tier_2_70.png"), require("./triportimages/Tripod_Tier_2_54.png"),
            require("./triportimages/Tripod_Tier_3_78.png"), require("./triportimages/Tripod_Tier_3_7.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Spiral Flame") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_31.png"), require("./triportimages/Tripod_Tier_1_78.png"), require("./triportimages/Tripod_Tier_1_41.png"),
            require("./triportimages/Tripod_Tier_2_58.png"), require("./triportimages/Tripod_Tier_2_82.png"), require("./triportimages/Tripod_Tier_2_32.png"),
            require("./triportimages/Tripod_Tier_3_81.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Triple Explosion") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_32.png"), require("./triportimages/Tripod_Tier_1_55.png"),
            require("./triportimages/Tripod_Tier_2_6.png"), require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_13.png"),
            require("./triportimages/Tripod_Tier_3_38.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Catastrophe") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_23.png"), require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"),
            require("./triportimages/Tripod_Tier_2_32.png"), require("./triportimages/Tripod_Tier_2_29.png"), require("./triportimages/Tripod_Tier_2_69.png"),
            require("./triportimages/Tripod_Tier_3_54.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Death Fire") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_23.png"), require("./triportimages/Tripod_Tier_1_4.png"),
            require("./triportimages/Tripod_Tier_2_13.png"), require("./triportimages/Tripod_Tier_2_14.png"), require("./triportimages/Tripod_Tier_2_54.png"),
            require("./triportimages/Tripod_Tier_3_10.png"), require("./triportimages/Tripod_Tier_3_42.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Meteor Stream") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_34.png"), require("./triportimages/Tripod_Tier_1_9.png"), require("./triportimages/Tripod_Tier_1_33.png"),
            require("./triportimages/Tripod_Tier_2_7.png"), require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_2.png"),
            require("./triportimages/Tripod_Tier_3_54.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shotgun Dominator") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_7.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_70.png"),
            require("./triportimages/Tripod_Tier_2_33.png"), require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_56.png"),
            require("./triportimages/Tripod_Tier_3_42.png"), require("./triportimages/Tripod_Tier_3_49.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "AT02 Grenade") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_7.png"), require("./triportimages/Tripod_Tier_1_99.png"),
            require("./triportimages/Tripod_Tier_2_0.png"), require("./triportimages/Tripod_Tier_2_9.png"), require("./triportimages/Tripod_Tier_2_43.png"),
            require("./triportimages/Tripod_Tier_3_54.png"), require("./triportimages/Tripod_Tier_3_78.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Plasma Bullet") { //here??
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shotgun Rapid Fire") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Spiral Tracker") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Cruel Tracker") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Dexterous Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Somersault Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Equilibrium") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Last Request") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Aimed Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Quick Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Perfect Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } /* End of Deadeye */
    else if (skillClicked === "Surprise Attack") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Wind Cut") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }

    else if (skillClicked === "Upper Slash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Earth Cleaver") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Death Sentence") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Twin Shadows") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Blade Dance") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Soul Absorber") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Spincutter") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Turning Slash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Moonlight Sonic") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Dark Axel") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Maelstrom") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Polestar") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Void Strike") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Fatal Wave") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Blitz Rush") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Head Hunt") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } /*** End of Deathblade */
    else if (skillClicked === "Sharp Gunlance") { /** Gunlancer */
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Bash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shield Charge") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Fire Bullet") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Rising Gunlance") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Dash Upper Fire") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Hook Chain") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shield Shock") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Leap Attack") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Nellasia's Energy") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Guardian's Thunderbolt") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shield Bash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Gunlance Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shout of Hatred") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Counter Gunlance") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Surge Cannon") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Charged Stinger") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } /**End of Gunlance */
    else if (skillClicked === "Quick Step") {  // Gunslinger start 
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Dual Buckshot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Hour of Judgement") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Spiral Flame") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Target Down") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Catastrophe") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Death Fire") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Meteor Stream") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sharpshooter") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "AT02 Grenade") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Plasma Bullet") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shotgun Rapid Fire") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Spiral Tracker") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Bullet Rain") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Dexterous Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Somersault Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Equilibrium") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Last Request") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Focused Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Peacekeeper") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Perfect Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } // End of Gunslinger
    else if (skillClicked === "Spin Slash") { // start of Paladin
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Flash Thrust") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Light Shock") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Charge") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sword of Justice") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Flash Shash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Holy Explosion") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Punishment") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Holy Area") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Holy Area") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Dash Slash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Holy Protection") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Godsent Law") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Executor's Sword") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Wrath of God") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Execution of Justice") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Holy Sword") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Heavenly Blessing") { 
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } // End of paladin
    else if (skillClicked === "Charging Blow") {  // Start of Scrapper
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Dragon Advent") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Judgement") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Earthquake Chain") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Chain of Resonance") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Crushing Smite") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Chain Destruction Fist") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Death Rattle") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Supernova") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Instant Hit") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Roundup Sweep") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Fierce Tiger Strike") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Continuous Push") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Critical Blow") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Battering Fists") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Iron Cannon Blow") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "True Rising Fist") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shredding Strike") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } // End of Scrapper
    else if (skillClicked === "Demonic Slash") { // Start of Shadowhunter
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Nimble Cut") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Slasher") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Brutal Cross") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Demon's Grip") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Rising Claw") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Piercing Thorn") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Demon Vision") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Grind Chain") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Spinning Dive") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Howl") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Cruel Cutter") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Thrust Impact") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Demonic Clone") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Demolition") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Spinning Weapon") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Decimate") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sharpened Cut") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } // End of Shadowhunter
    else if (skillClicked === "Rapid Shot") { // start of sharpshooter
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Salvo") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Atomic Arrow") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Electric Nova") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Smokescreen Arrow") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Arrow Wave") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Arrow Shower") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Charged Shot") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Evasive Fire") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sharp Shooter") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "DM-42") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Deadly Slash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Moving Slash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Blade Storm") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Claymore Mine") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shadow Arrow") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Stalker") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Snipe") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } // End of sharpshooter
    else if (skillClicked === "Blaze") { // Start of Sorceress
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Lightning Vortex") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Ice Shower") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Inferno") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Energy Discharge") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Rime Arrow") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Esoteric Reaction") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Pushing Strike") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Reverse Gravity") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Elegian's Touch") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Lightning Bolt") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Squall") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Seraphic Hail") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Explosion") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Frost's Call") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Doomsday") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } // end of sorceress
    else if (skillClicked === "Energy Blast") { // Start of Soulfist
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Venomous Fist") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Lightning Palm") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Energy Bullet") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Palm Burst") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Heavenly Squash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Crippling Barrier") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Magnetic Palm") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Pulverizing Palm") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Tempest Blast") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Shadowbreaker") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Merciless Pummel") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Bolting Crash") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Force Orb") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Flash Step") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Energy Release") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Deadly Finger") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } // Soulfist End
    else if (skillClicked === "Esoteric Skill: Blast Formation") { // start of Striker
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Esoteric Skill: Spiral Impact") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Esoteric Skill: Tiger Emerges") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Flash Heat Fang") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sleeping Ascent Celebration") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Lightning Whisper") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Berserk Circle") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Esoteric Skill: Lightning Tiger Strike") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Esoteric Skill: Call the Wind God") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Storm Dragon Awakening") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Phoenix Advent") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sky Shattering Blow") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Lightning Kick") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Triple Fist") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Moon Flash Kick") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Swift Wind Kick") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Violent Tiger") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sweeping Kick") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } // end of striker
    else if (skillClicked === "Esoteric Skill: Blast Formation") { // Start of wardancer
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Esoteric Skill: Spiral Impact") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Esoteric Skill: Rising Fire Dragon") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Flash Heat Fang") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sleeping Ascent Celebration") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Roar of Courage") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Seismic Strike") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Esoteric Skill: Lightning Strike") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Esoteric Skill: Call of the Wind God") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Wind's Whisper") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Phoenix Advent") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sky Shattering Blow") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Lightning Kick") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Triple Fist") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Moon Flash Kick") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Swift Wind Kick") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Energy Combustion") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    }
    else if (skillClicked === "Sweeping Kick") {
        skillImages.push(require("./triportimages/Tripod_Tier_1_52.png"), require("./triportimages/Tripod_Tier_1_41.png"), require("./triportimages/Tripod_Tier_1_47.png"),
            require("./triportimages/Tripod_Tier_2_4.png"), require("./triportimages/Tripod_Tier_2_61.png"), require("./triportimages/Tripod_Tier_2_33.png"),
            require("./triportimages/Tripod_Tier_3_44.png"), require("./triportimages/Tripod_Tier_3_53.png"));

        tripodName.push("Range Install", "Guilding Enhancement", "Slow Effect",
            "Vital Point Bombardment", "Law of the Jungle", "Weak Point Detection",
            "EMP Explosion", "Power Bomb")
    } // end of wardancer
    else {
        return [defaultImg, defaultTripodName];
    }
    return [skillImages, tripodName]
} 

 export  { artilleristSkillNameText, bardSkillNameText, berserkerSkillNameText,
deadeyeSkillNameText, deathbladeSkillNameText, gunlancerSkillNameText, gunslingerSkillNameText,
paladinSkillNameText, scrapperSkillNameText, shadowhunterSkillNameText, sharpshooterSkillNameText,
sorceressSkillNameText, soulfistSkillNameText, strikerSkillNameText, wardancerSkillNameText};
export default createTripod;

