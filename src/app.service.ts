import { Injectable, Param } from "@nestjs/common";

import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(obj) {
        const user = new this.userModel({
            name: obj.name,
            age: obj.age
        });
        await user.save();
        return { message: "添加成功", user };
    }

    async findOne(id) {
        return this.userModel.findById(id);
    }

    async findAll() {
        return this.userModel.find();
    }

    async del(id) {
        return this.userModel.findByIdAndDelete(id);
    }

    getHello(a: number): string {
        console.log("Param: ", a);
        return "Hello World!" + JSON.stringify(a);
    }
}
