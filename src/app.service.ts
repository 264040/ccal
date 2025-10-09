import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CommentSchema, Comment } from "./user.schema";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(Comment.name)
        private readonly connection: Model<Comment>
    ) {}
    // ✅ 获取所有集合（类似“查看数据库所有表”）
    async dball() {
        return 1;
    }

    // ✅ 查询指定集合
    async findCollectionData() {
        const data = this.connection.find().limit(10).lean();
        return data;
    }

    // ✅ 创建用户（示例）
    createUser(obj: any) {
        console.log("创建用户:", obj);
        return { success: true };
    }

    // ✅ 根据 id 查找（示例）
    findOne(id: string) {
        console.log("查找用户 id:", id);
        return { id, name: "示例用户" };
    }

    // ✅ 查找全部（示例）
    findAll() {
        console.log("查找全部用户");
        return [
            { id: "1", name: "用户A" },
            { id: "2", name: "用户B" }
        ];
    }

    // ✅ 删除（示例）
    del(id: string) {
        console.log("删除用户 id:", id);
        return { success: true, id };
    }

    // ✅ 示例方法
    getHello(a: number): string {
        console.log("Param: ", a);
        return "Hello World! " + JSON.stringify(a);
    }
}
