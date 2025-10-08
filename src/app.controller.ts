import { Controller, Get, Post, Body, Param, Query,Delete } from "@nestjs/common";
import { UserService } from "./app.service";
import { IsNotEmpty } from "class-validator";
class dtoapp {
    @IsNotEmpty({ message: "name不能为空" })
    name: String;
    age: Number;
}
@Controller("index")
export class AppController {
    //  constructor(private readonly appService: AppService) {}
    constructor(private readonly userService: UserService) {}

    @Post("add")
    async createOne(@Body() obj: dtoapp) {
        return this.userService.createUser(obj);
    }

    @Get("one/:id")
    async findOneuser(@Param("id") id: string) {
        return this.userService.findOne(id);
    }

    @Get("all")
    async findAlluser() {
        return this.userService.findAll();
    }

    @Delete("del/:id")
    async delOne(@Param("id") id: string) {
        return this.userService.del(id);
    }
}
