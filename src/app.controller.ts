import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Query,
    Delete
} from "@nestjs/common";
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
    @Get("dball")
    async dballname() {
        return  this.userService.findCollectionData();
    }
    @Post("add")
    async createOne(@Body() obj: dtoapp) {
        return 2;
    }

    @Get("one/:id")
    async findOneuser(@Param("id") id: string) {
        return 4;
    }

    @Get("all")
    async findAlluser() {
        return 3;
    }

    @Delete("del/:id")
    async delOne(@Param("id") id: string) {
        return 5;
    }
}
