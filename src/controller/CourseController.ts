import { Request, Response } from "express"
import { CourseBusiness } from "../business/CourseBusiness"
import { CourseDTO } from "../dtos/CourseDTO"
import { BaseError } from "../errors/BaseError"

export class CourseController {
    constructor(
        private courseDTO: CourseDTO,
        private courseBusiness: CourseBusiness,
    ){}

    public getCourses = async (req: Request, res: Response) => {
        try {
            const input = {
                q: req.query.q
            }

            // const courseBusiness = new CourseBusiness()
            const output = await this.courseBusiness.getCourses(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public createCourse = async (req: Request, res: Response) => {
        try {

            // const courseDTO = new CourseDTO()

            const input = this.courseDTO.createCourseInput(
                req.body.id,
                req.body.name,
                req.body.lessons,
                )

            // const courseBusiness = new CourseBusiness()
            const output = await this.courseBusiness.createCourse(input)

            
            // const output = await courseDTO.createCourseInput(input)

            res.status(201).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public editCourse = async (req: Request, res: Response) => {
        try {

            const input = {
                idToEdit: req.params.id,
                newId: req.body.id,
                newName: req.body.name,
                newLessons: req.body.lessons
            }

            // const courseBusiness = new CourseBusiness()
            const output = await this.courseBusiness.editCourse(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public deleteCourse = async (req: Request, res: Response) => {
        try {

            const input = {
                idToDelete: req.params.id
            }

            // const courseBusiness = new CourseBusiness()
            const output = await this.courseBusiness.deleteCourse(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}