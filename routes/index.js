var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST form data*/
router.post('/story', function(req, res) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story',{
  newStory: newStory
  });
})

module.exports = router;

function getStory(formData){
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `John’s ${formData.noun1}, Pete, was a serial ${formData.noun2} but he never stayed ${formData.noun3} before he ${formData.verb1} onto something new but the next time they met he told John he was a ${formData.adjective1}. Since the local council had promoted all their litter pickers to Clean Champions the town had been spotless. Complete with tabard, safety gloves, dayglo jacket and distinctive bag he roamed his territory.`
}

function generateStory2(formData){
  return `From where I sit, ${formData.noun1} pass by in seismic waves, like bad ${formData.noun2}. The primary ${formData.noun3} put me where I am. Where I am ${formData.verb1} of my ${formData.adjective1} (for my own good apparently). The after-shocks keep coming. I measure the effect depending on the dosages: Critical, has me curled up under the bed. Fear has me foetal under the sheets. Sensitive, I draw the curtains and passive, where I don’t know one day from the next. I have lost my footing. Motes of dust revolving in the first rays of the sun are all it takes to make me afraid.`
}

function generateStory3(formData){
  return `She’s there again, staring down the ${formData.noun1}. I don’t think she knows I’m ${formData.adjective1}, waiting for her to throw some ${formData.noun2} out of the window. She usually does this when the ${formData.noun3} arrives. I haven’t seen him for days; I wish he’d hurry up. When he arrives I hear her ${formData.verb1} a tin, then bits of biscuit or cake come flying out for me to grab.
It’s so quiet in there. No sound except occasional sobs. She spends most of the day looking into the distance. She’s waiting, just like me. I hope she doesn’t forget.`
}


