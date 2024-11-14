const express = require("express");
const router = express.Router();
const {
  renderEmployeeForm,
  Employee,
  renderallemployees,
} = require("../controller/AdminCtrl/EmployeeCtrl");

const { dashboard } = require("../controller/AdminCtrl/adminCtrl");

router.get("/addEmployee", renderEmployeeForm);

router.post("/addEmployee", Employee);

router.get("/showemployeespage", renderallemployees);

router.get("/dashboard", dashboard);
router.get("/addEventPage", AddEventPage);
router.get("/showEventPage", ShowEventPage);

router.post("/addEvent", AddEvent);
module.exports = router;
