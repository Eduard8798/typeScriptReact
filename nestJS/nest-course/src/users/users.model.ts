import {Model, Table, Column, DataType,BelongsToMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/userRoles.model";

interface UserCreationAttrs {
    email: string;
    password:string;
}

@Table({tableName: 'users'})
export class User extends Model <User,UserCreationAttrs > {
    @ApiProperty({example: '1' , description: 'Unique identity'})
@Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
declare id: number;
    @ApiProperty({example: 'user@gmail.com' , description: 'email'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
     email: string;
    @ApiProperty({example: '123456' , description: 'password user'})
    @Column({type: DataType.STRING, allowNull:false})
    password: string;
    @ApiProperty({example: 'true' , description: 'banned on not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    @ApiProperty({example: 'simple banned' , description: 'text banned'})
    @Column({type: DataType.BOOLEAN, allowNull:true})
    banReason: boolean;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
