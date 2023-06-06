import { Controller, Get, Param, Query, Req } from '@nestjs/common';

@Controller('cats')
export class CatController {
  @Get('all')
  findAll(@Query('name') name: string){
    console.log(name)
    return `test ${name}`;
  }
  @Get('none/:param')
  findNone(@Param() params: {param: string}){
    console.log(params);
    return `test #${params.param}`
  }
}
