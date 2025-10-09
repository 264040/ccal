import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { UserService } from "./app.service";
import { UserModule } from "./user/user.module";
import { CommentSchema, Comment } from "./user.schema";
const dbs = "sample_mflix";
const mgurl = `mongodb+srv://acerdbweb:123456qq@cluster-acer.tngdy13.mongodb.net/${dbs}?retryWrites=true&w=majority&appName=Cluster-ACER`;
@Module({
    imports: [
        UserModule,
        MongooseModule.forRoot(mgurl),
        MongooseModule.forFeature([
            { name: Comment.name, schema: CommentSchema, collection: "comments" }
        ])
    ],
    controllers: [AppController],
    providers: [UserService]
})
export class AppModule {}
