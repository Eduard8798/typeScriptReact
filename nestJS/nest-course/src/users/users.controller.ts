import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/role.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";

@ApiTags('Many_Users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {

    }
    @ApiOperation({summary: 'Create User'})
    @ApiResponse({status:200,type : User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.userService.createUser(userDto)
    }
    @ApiOperation({summary: 'Выдать роль'})
    @ApiResponse({status:200})
    @UseGuards(JwtAuthGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto);
    }

    @ApiOperation({summary: 'Забанить позьзывателя'})
    @ApiResponse({status:200})
    @UseGuards(JwtAuthGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.userService.ban(dto);
    }
}
