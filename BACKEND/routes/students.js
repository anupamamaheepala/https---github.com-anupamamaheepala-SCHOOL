const router = require ("express").Router();
let Student = require("../models/student");

http://localhost:8070/student/add

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender; 

    const newStudent = new Student({
        name,
        age,
        gender

    })

    newStudent.save().then(() =>{
        res.json("Student added")
    }).catch((err)=>{
        console.log(err);
    }) 
})

http://localhost:8070/student

router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })

})

http://localhost:8070/student/update/

router.route("/update/:id").put(async (req,res) =>{
    let userId = req.params.id;
    const {name, age, gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByAndUpdate(userId, updateStudent).then(() =>{
        res.status(200).send({status: "User updated", user: update})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

router.route("/delete/:id").delete(async (req,res) =>{
    let userId = req.params.id;

    await Student.findByAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.massage);
        res.status(500).send({status: "Error with delete user", error: err.massage});
    })
})

router.route("/get/id").get(async (req,res) =>{
    let userId = req.params.id;
    const user = await Student.findById(userId).then(() =>{
        res.status(200).send({status : "User fetched"})
    }).catch(() => {
        console.log(err.massage);
        res.status(500).send({status: "Error with get user", error: err.massage});
    })
})

module.exports = router;