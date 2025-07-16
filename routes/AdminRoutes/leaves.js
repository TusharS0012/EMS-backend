import {Router} from "express";
import {getAllTodayLeaves, getLeaveById, approveLeave, rejectLeave, getAllLeavesOfEmployee, approveLeave, rejectLeave} from "../../controllers/adminControllers/leave.js";

const router = Router();

router.get('/leaves/today', getAllTodayLeaves);
router.get('/leaves/:leaveId', getLeaveById);
router.get('/leaves/employee/:employeeId', getAllLeavesOfEmployee);
router.put('/leaves/approve/:leaveId/', approveLeave);
router.put('/leaves/reject/:leaveId', rejectLeave);


export default router;