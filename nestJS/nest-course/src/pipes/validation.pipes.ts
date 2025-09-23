import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../exceptions/validation.exception";

@Injectable()
export class ValidationPipes implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        if (!metadata.metatype || !this.toValidate(metadata.metatype)) {
            return value;
        }

        const obj = plainToInstance(metadata.metatype, value);
        const errors = await validate(obj);

        if (errors.length) {
            const messages = errors.map(err => {
                return `${err.property} - ${Object.values(err.constraints ?? {}).join(', ')
                }`;
            });
            throw new ValidationException(messages);
        }

        return value;
    }

    // Вспомогательная проверка, что это реально класс, а не строка/число/булево
    private toValidate(metatype: any): boolean {
        const types: any[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}
