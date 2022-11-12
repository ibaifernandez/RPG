// Character's Properties
    let character = {};
        character.name = "";
        character.kingdom = "";
        character.guild = "";
        character.health = 100;
        character.healthBase = 100;
        character.mana = 0;
        character.experience = 0;
        character.strength = 2;
        character.dexterity = 2;
        character.stamina = 2;
        character.charisma = 2;
        character.looks = 2;
        character.vibe = 2;
        character.intelligence = 2;
        character.wits = 2;
        character.perception = 2;
        character.inventory = {};
        character.gold = 0;

// HTML Spots Declaration
    let inventoryListBox;
    let goldQty;
    let manaQty;
    
// Items description
    let dagger = {name: 'Dagger', damage: 1, weight: 1, resistance: 10}

// Identity SetUp
function identitySetUp() {
    // HTML Spots Association
        inventoryListBox = document.getElementById('inventory-list');
        goldQty = document.getElementById('goldQty');
        manaQty = document.getElementById('manaQty');

    // Values inputted from CG-identity-form
        let characterName = document.getElementById('CG-name').value;
        let kingdom = document.getElementById('kingdom-selector').value;
        let guild = document.getElementById('guild-selector').value;
        
    // Character's Sheet Outputs
        let characterNameBox = document.querySelector("#nameText");
        let characterKingdomBox = document.querySelector("#kingdomText");
        let characterGuildBox = document.querySelector("#guildText");

    // Character's Properties Association
        character.name = characterName;    
        character.kingdom = kingdom;
        character.guild = guild;

    // Validation & Association

    if (characterName === "") {
        alert("You haven't written any name at all!")
    } else {
        characterNameBox.innerText = characterName
    }

    if (kingdom === "") {
        alert("You haven't chosen a kingdom!")
    } else {
        characterKingdomBox.innerText = kingdom;
    }
    
    if (guild === "") {
        alert("You haven't chosen a guild!")
    } else {
        characterGuildBox.innerText = guild;

        // Speacial Features according to the chosen Guild

        switch (characterGuildBox.innerText) {
            
            case "The Guild of Assasins":
                alert("You're a proud member of the Guild of Assasins now.");
                alert("As such, you get your first weapon: a dagger.");
                character.inventory.dagger = dagger;
                const li = document.createElement('li');
                li.innerHTML =  `<li class="inventory-item">${dagger.name}</li>`;
                inventoryListBox.appendChild(li);
            break;

            case "The Guild of Thieves":
                alert("You're a proud member of the Guild of Thieves now.");
                alert("As such, you've managed to steal some gold already.");
                character.gold += 50;
                goldQty.innerText = character.gold;
            break;
            
            case "The Guild of Sorcerers":
                alert("You're a proud member of the Guild of Sorcerers now.");
                alert("As such, you get some additional mana to start with.");
                character.mana += 50;
                manaQty.innerText = 50;
            break;
            
            case "The Guild of Faith":
                alert("You're a proud member of the Guild of Faith now.");
                alert("As such, you get 20 more points for your health base.");
                document.getElementById('healthBase').innerText = 120;
                healthBase += 20;
            break;
        }
    }
    
    // alert(`Welcome, ${document.getElementById('CG-name').value} from ${document.getElementById('kingdom-selector').value}.\n I can see that you're a proud member of ${document.getElementById('guild-selector').value}.`);

    if (characterName !== "" && kingdom !== "" && guild !== "") {
        document.getElementById('identity').style.background = 'white';
        document.getElementById('stats').style.background = 'white';
        document.getElementById('CG-identity-form').style.display = 'none';
        document.getElementById('CG-physical-attributes-form').style.display = 'block';
    }
}

function physicalAttributesSetUp() {

    let strengthValue = parseInt(document.querySelector('input[name="strength"]:checked').value);
    let dexterityValue = parseInt(document.querySelector('input[name="dexterity"]:checked').value);
    let staminaValue = parseInt(document.querySelector('input[name="stamina"]:checked').value);
 
    if (strengthValue + dexterityValue + staminaValue === 6) {
        character.strength = strengthValue;
        character.dexterity = dexterityValue;
        character.stamina = staminaValue;
    document.querySelector("#strengthScore").innerText = strengthValue;
    document.querySelector("#dexterityScore").innerText = dexterityValue;
    document.querySelector("#staminaScore").innerText = staminaValue;
    document.getElementById('CG-physical-attributes-form').style.display = 'none';
    document.getElementById('physical-attributes').style.background = 'white';
    document.getElementById('CG-social-attributes-form').style.display = 'block';

    } else {
        alert('You\'ve got 6 points to distribute among your physical attributes.')
    }

    if (character.kingdom === "The Kingdom of Elves") {
        alert("Since you come from the Kingdom of Elves, all your physical attributes get an extra point.");
        character.strength += 1;
        character.dexterity += 1;
        character.stamina += 1;
        document.querySelector("#strengthScore").innerText = character.strength;
        document.querySelector("#dexterityScore").innerText = character.dexterity;
        document.querySelector("#staminaScore").innerText = character.stamina;    
    }
}

function socialAttributesSetUp() {

    let charismaValue = parseInt(document.querySelector('input[name="charisma"]:checked').value);
    let looksValue = parseInt(document.querySelector('input[name="looks"]:checked').value);
    let vibeValue = parseInt(document.querySelector('input[name="vibe"]:checked').value);
 
    if (charismaValue + looksValue + vibeValue == 6) {
        character.charisma = charismaValue;
        character.looks = looksValue;
        character.vibe = vibeValue;
    document.querySelector("#charismaScore").innerText = charismaValue;
    document.querySelector("#looksScore").innerText = looksValue;
    document.querySelector("#vibeScore").innerText = vibeValue;
    document.getElementById('CG-social-attributes-form').style.display = 'none';
    document.getElementById('social-attributes').style.background = 'white';
    document.getElementById('CG-mental-attributes-form').style.display = 'block';
    } else {
        alert('You\'ve got 6 points to distribute among your social attributes.')
    }

    if (character.kingdom === "The Kingdom of Humans") {
        alert("Since you come from the Kingdom of Humans, all your social attributes get an extra point.");
        character.charisma += 1;
        character.looks += 1;
        character.vibe += 1;
        document.querySelector("#charismaScore").innerText = character.charisma;
        document.querySelector("#looksScore").innerText = character.looks;
        document.querySelector("#vibeScore").innerText = character.vibe;    
    }
}

function mentalAttributesSetUp() {

    let intelligenceValue = parseInt(document.querySelector('input[name="intelligence"]:checked').value);
    let witsValue = parseInt(document.querySelector('input[name="wits"]:checked').value);
    let perceptionValue = parseInt(document.querySelector('input[name="perception"]:checked').value);
 
    if (intelligenceValue + witsValue + perceptionValue == 6) {
        character.intelligence = intelligenceValue;
        character.wits = witsValue;
        character.perception = perceptionValue;
    document.querySelector("#intelligenceScore").innerText = intelligenceValue;
    document.querySelector("#witsScore").innerText = witsValue;
    document.querySelector("#perceptionScore").innerText = perceptionValue;
    document.getElementById('CG-mental-attributes-form').style.display = 'none';
    document.getElementById('mental-attributes').style.background = 'white';
    document.getElementById('CG-skills-priority-form').style.display = 'block';
    } else {
        alert('You\'ve got 6 points to distribute among your mental attributes.')
    }
    if (character.kingdom === "The Kingdom of Dwarves") {
        alert("Since you come from the Kingdom of Humans, all your social attributes get an extra point.");
        character.charisma += 1;
        character.looks += 1;
        character.vibe += 1;
    }
}

let talentsSkillPoints = 0;
let techniquesSkillPoints = 0;
let knowledgeSkillPoints = 0;


function assignSkillsPriorities() {
    
    let talentsPriority = parseInt(document.querySelector('input[name="talents"]:checked').value);
    let techniquesPriority = parseInt(document.querySelector('input[name="techniques"]:checked').value);
    let knowledgePriority = parseInt(document.querySelector('input[name="knowledge"]:checked').value);
    
    if (talentsPriority != techniquesPriority && techniquesPriority != knowledgePriority && talentsPriority != knowledgePriority) {
        switch (talentsPriority) {
            case 1: talentsSkillPoints = 15;
            break;
            case 2: talentsSkillPoints = 9;
            break;
            case 3: talentsSkillPoints = 5;
            break;
        }
        switch (techniquesPriority) {
            case 1: techniquesSkillPoints = 15;
            break;
            case 2: techniquesSkillPoints = 9;
            break;
            case 3: techniquesSkillPoints = 5;
            break;
        }
        switch (knowledgePriority) {
            case 1: knowledgeSkillPoints = 15;
            break;
            case 2: knowledgeSkillPoints = 9;
            break;
            case 3: knowledgeSkillPoints = 5;
            break;
        }
        document.getElementById('CG-skills-priority-form').style.display = 'none';
        document.getElementById('CG-talents-form').style.display = 'block';

    } else {
        alert("Priorize accordingly, please.")
    }

    document.getElementById('talentsPoints').innerText = talentsSkillPoints;

}

function assignTalents() {

    let alertnessValue = parseInt(document.querySelector('input[name="alertness"]:checked').value);
    let athleticsValue = parseInt(document.querySelector('input[name="athletics"]:checked').value);
    let awarenessValue = parseInt(document.querySelector('input[name="awareness"]:checked').value);
    let brawlValue = parseInt(document.querySelector('input[name="brawl"]:checked').value);
    let empathyValue = parseInt(document.querySelector('input[name="empathy"]:checked').value);
    let expressionValue = parseInt(document.querySelector('input[name="expression"]:checked').value);
    let intimidationValue = parseInt(document.querySelector('input[name="intimidation"]:checked').value);
    let leadershipValue = parseInt(document.querySelector('input[name="leadership"]:checked').value);
    let streetwiseValue = parseInt(document.querySelector('input[name="streetwise"]:checked').value);
    let subterfugeValue = parseInt(document.querySelector('input[name="subterfuge"]:checked').value);

    if (alertnessValue + athleticsValue + awarenessValue + brawlValue + empathyValue + expressionValue + intimidationValue + leadershipValue + streetwiseValue + subterfugeValue === talentsSkillPoints) {
        document.querySelector("#alertnessScore").innerText = alertnessValue;
        document.querySelector("#athleticsScore").innerText = athleticsValue;
        document.querySelector("#awarenessScore").innerText = awarenessValue;
        document.querySelector("#brawlScore").innerText = brawlValue;
        document.querySelector("#empathyScore").innerText = empathyValue;
        document.querySelector("#expressionScore").innerText = expressionValue;
        document.querySelector("#intimidationScore").innerText = intimidationValue;
        document.querySelector("#leadershipScore").innerText = leadershipValue;
        document.querySelector("#streetwiseScore").innerText = streetwiseValue;
        document.querySelector("#subterfugeScore").innerText = subterfugeValue;

        document.getElementById('talent-skills').style.background = 'white';
        document.getElementById('CG-talents-form').style.display = 'none';
        document.getElementById('CG-techniques-form').style.display = 'block';
    } else {
        alert(`You have ${talentsSkillPoints} points to distribute. Do it accordingly.`)
    }

    document.getElementById('techniquesPoints').innerText = techniquesSkillPoints;
}

function assignTechniques() {

    let animalKenValue = parseInt(document.querySelector('input[name="animalKen"]:checked').value);
    let craftsValue = parseInt(document.querySelector('input[name="crafts"]:checked').value);
    let ridingValue = parseInt(document.querySelector('input[name="riding"]:checked').value);
    let etiquetteValue = parseInt(document.querySelector('input[name="etiquette"]:checked').value);
    let archeryValue = parseInt(document.querySelector('input[name="archery"]:checked').value);
    let larcenyValue = parseInt(document.querySelector('input[name="larceny"]:checked').value);
    let meleeValue = parseInt(document.querySelector('input[name="melee"]:checked').value);
    let performanceValue = parseInt(document.querySelector('input[name="performance"]:checked').value);
    let stealthValue = parseInt(document.querySelector('input[name="stealth"]:checked').value);
    let survivalValue = parseInt(document.querySelector('input[name="survival"]:checked').value);

    console.log(techniquesSkillPoints)

    if (animalKenValue + craftsValue + ridingValue + etiquetteValue + archeryValue + larcenyValue + meleeValue + performanceValue + stealthValue + survivalValue === techniquesSkillPoints) {
        document.querySelector("#animalKenScore").innerText = animalKenValue;
        document.querySelector("#craftsScore").innerText = craftsValue;
        document.querySelector("#ridingScore").innerText = ridingValue;
        document.querySelector("#etiquetteScore").innerText = etiquetteValue;
        document.querySelector("#archeryScore").innerText = archeryValue;
        document.querySelector("#larcenyScore").innerText = larcenyValue;
        document.querySelector("#meleeScore").innerText = meleeValue;
        document.querySelector("#performanceScore").innerText = performanceValue;
        document.querySelector("#stealthScore").innerText = stealthValue;
        document.querySelector("#survivalScore").innerText = survivalValue;
    
        document.getElementById('technique-skills').style.background = 'white';
        document.getElementById('CG-techniques-form').style.display = 'none';
        document.getElementById('CG-knowledge-form').style.display = 'block';
    } else {
        alert(`You have ${techniquesSkillPoints} points to distribute. Do it accordingly.`)
    }

    document.getElementById('knowledgePoints').innerText = knowledgeSkillPoints;
}

function assignKnowledge() {

    let academyValue = parseInt(document.querySelector('input[name="academy"]:checked').value);
    let artsValue = parseInt(document.querySelector('input[name="arts"]:checked').value);
    let financesValue = parseInt(document.querySelector('input[name="finances"]:checked').value);
    let investigationValue = parseInt(document.querySelector('input[name="investigation"]:checked').value);
    let lawValue = parseInt(document.querySelector('input[name="law"]:checked').value);
    let medicineValue = parseInt(document.querySelector('input[name="medicine"]:checked').value);
    let occultismValue = parseInt(document.querySelector('input[name="occultism"]:checked').value);
    let politicsValue = parseInt(document.querySelector('input[name="politics"]:checked').value);
    let scienceValue = parseInt(document.querySelector('input[name="science"]:checked').value);
    let techValue = parseInt(document.querySelector('input[name="tech"]:checked').value);

    if (academyValue + artsValue + financesValue + investigationValue + lawValue + medicineValue + occultismValue + politicsValue + scienceValue + techValue === knowledgeSkillPoints) {
        document.querySelector("#academyScore").innerText = academyValue;
        document.querySelector("#artsScore").innerText = artsValue;
        document.querySelector("#financesScore").innerText = financesValue;
        document.querySelector("#investigationScore").innerText = investigationValue;
        document.querySelector("#lawScore").innerText = lawValue;
        document.querySelector("#medicineScore").innerText = medicineValue;
        document.querySelector("#occultismScore").innerText = occultismValue;
        document.querySelector("#politicsScore").innerText = politicsValue;
        document.querySelector("#scienceScore").innerText = scienceValue;
        document.querySelector("#techScore").innerText = techValue;
    
        document.getElementById('knowledge-skills').style.background = 'white';
        document.getElementById('CG-knowledge-form').style.display = 'none';
    } else {
        alert(`You have ${knowledgeSkillPoints} points to distribute. Do it accordingly.`)
    }

    document.getElementById('knowledgePoints').innerText = knowledgeSkillPoints;



}
