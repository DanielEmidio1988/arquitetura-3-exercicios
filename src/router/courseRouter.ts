import express from "express"
import { CourseBusiness } from "../business/CourseBusiness"
import { CourseController } from "../controller/CourseController"
import { CourseDatabase } from "../database/CourseDatabase"
import { CourseDTO } from "../dtos/CourseDTO"

export const courseRouter = express.Router()

const courseController = new CourseController(
    new CourseDTO(),
    new CourseBusiness(
        new CourseDTO(),
        new CourseDatabase(),
    ),
)

courseRouter.get("/", courseController.getCourses)
courseRouter.post("/", courseController.createCourse)
courseRouter.put("/:id", courseController.editCourse)
courseRouter.delete("/:id", courseController.deleteCourse)
