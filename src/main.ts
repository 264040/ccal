import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { AllResponseInterceptor } from "./all-response/all-response.interceptor";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalInterceptors(new AllResponseInterceptor());
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .setTitle("接口文档")
        .setDescription("一键生成接口文档")
        .setVersion("1.0")
        .addTag("全部")
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, documentFactory);

    await app.listen(process.env.PORT ?? 3000);

    const host = process.env.HOST || 'localhost'; 
    console.log(`API文档地址: http://${host}:${process.env.PORT ?? 3000}/api`);
}
bootstrap();
