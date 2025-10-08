import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { UserService } from "./app.service";
import { UserModule } from "./user/user.module";
import {UserSchema,User} from "./user.schema"
const mgurl =
    "mongodb+srv://acerdbweb:123456qq@cluster-acer.tngdy13.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-ACER";
@Module({
    imports: [
      UserModule, 
      MongooseModule.forRoot(mgurl),
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
],
    controllers: [AppController],
    providers: [UserService]
})
export class AppModule {}
