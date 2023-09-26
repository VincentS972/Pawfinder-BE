const router = require("express").Router();
const Foster = require("../models/foster");

// routes

router.get('/', async function (req, res) {
  try {
    const foster = await Foster.find();
    res.json(foster);
  } catch (error) {
    console.log("error fetching fosters:", error);
    res.json({ message: "error fetching foster" });
  }
});

router.get('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const foster = await Foster.findById(id);
    res.json(foster);
  } catch (error) {
    console.log("error finding this foster:", error);
    res.json({ message: "error fetching foster" });
  }
});

router.post('/', async function (req, res) {
  try {
    await new Foster(req.body).save();
    res.status(201).json({ message: "foster created" });
  } catch (error) {
    console.log("error creating foster:", error);
    res.json({ message: "error creating foster" });
  }
});

router.put('/:id', async function (req, res) {
  console.log(req.body);
  try {
    const { id } = req.params;
    await Foster.findByIdAndUpdate(id, req.body);
    res.status(204).json({ message: "foster updated" });
  } catch (error) {
    console.log("error updating foster:", error);
    res.json({ message: "error updating foster" });
  }
});

router.delete('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    await Foster.findByIdAndDelete(id);
    res.status(204).json({ message: "foster deleted" });
  } catch (error) {
    console.log("error deleting foster:", error);
    res.json({ message: "error deleting foster" });
  } 
});

// seeds pets
router.get('/data/seed', async function (req, res) {
  const data = [
    {
      userName: "Shawn_B",
      firstName: "Shawn",
      lastName: "Biltmore",
      emailAddress: "Shawn.01@gmail.com",
      getsUpdates: true,
      password: "password"
    },
    {
        userName: "Illi_A",
        firstName: "Ilana",
        lastName: "Wexler",
        emailAddress: "Ilanaaaa@gmail.com",
        getsUpdates: true,
        password: "password"
      },
      {
        userName: "Ash20",
        firstName: "Ashton",
        lastName: "Swank",
        emailAddress: "Ashton.swank@gmail.com",
        getsUpdates: true,
        password: "password"
      },
      {
        userName: "JackAttack",
        firstName: "Jackson",
        lastName: "Mutal",
        emailAddress: "JackMut@gmail.com",
        getsUpdates: true,
        password: "password"
      },
      {
        userName: "Alli_B",
        firstName: "Allison",
        lastName: "Burberry",
        emailAddress: "ABee@gmail.com",
        getsUpdates: true,
        password: "password"
      },
  ];

  await Foster.insertMany(data);
  res.status(303).redirect('/foster');
});

module.exports = router;



// const Foster = require('../models/Foster')

// async function getAllFosters(req, res) {
//     try {
//         const foster = await Foster.find()
//         res.json(foster)
//     } catch (error) {
//         console.log('error fetching Fosters:', error)
//         res.json({ 'message': 'error fetching foster' })
//     }
// }

// async function getFosterById( req, res){
//     try {
//         const { id } = req.params
//         const foster = await Foster.findById(id)
//         res.json(foster)
//     } catch (error) {
//         console.log('error finding this foster')
//         res.json({ 'message': 'error finding this foster'})   
//     }
// }
// async function createFoster(req, res) {
// try {
//     if (!req.body.image) req.body.image = undefined
//     await new Foster(req.body).save()
//     res.status(201).json({ 'message': 'Foster created' })
// } catch (error) {
//     console.log('error creating foster:', error)
//     res.json({ 'message': 'error creating foster' })
// }
// }

// async function updateFosterById( req,res ) {
//     try {
//         const { id } = req.params
//         if (!req.body.image) req.body.image = undefined
//         await Foster.findByIdAndUpdate(id, req.body)
//         res.status(204).json({ 'message': 'Foster updated'})
//     } catch (error) {
//         console.log('error updating foster:', error)
//         res.json({ 'message': 'error updating foster'})
//     }
// }

// async function deleteFosterById(req, res) {
//     try {
//         const { id } = req.params
//         await Foster.findByIdAndDelete(id)
//         res.status(204).json({ 'message': 'Foster deleted' })
//     } catch (error) {
//         console.log('error deleting foster:', error)
//         res.json({ 'message': 'error deleting foster' })
//     }
// }
// module.exports = {
//     getAllFosters,
//     createFoster,
//     deleteFosterById,
//     updateFosterById,
//     getFosterById
// }