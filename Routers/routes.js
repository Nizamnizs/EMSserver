
const express=require('express')
const { adminLogin, addEmployee, getAllEmployees, getEmployee, removeEmployee, updateEmployee, filterEmployee } = require('../Controls/adminlogic')
const upload = require('../middleware/multerMiddleware')


const router=new express.Router()

router.post('/admin/login',adminLogin)

//admin new employeee
router.post('/admin/addemployee',upload.single('user_profile'),addEmployee)

//get all employees
router.get('/admin/get-all-employees',getAllEmployees)

//get  employee
router.get('/admin/get-employee/:id',getEmployee)

//delete employee
router.delete('/admin/remove-employee/:id',removeEmployee)

//edit employee details
router.put('/admin/update-employee/:id',upload.single('user_profile'),updateEmployee)

//filter status
router.get('/admin/filter',filterEmployee)


module.exports=router