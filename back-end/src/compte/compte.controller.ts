import { Controller, Body, Param, Get, Post, Patch, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/user/guard/jwt-auth.guard';
import { CompteService } from './compte.service';
import { AddCompteDto } from './dto/addCompte.dto';
import { UpdateCompteDto } from './dto/updateCompte.dto';

@Controller('compte')
export class CompteController {
  constructor(private readonly compteService: CompteService) {}

  @Post()
  //@UseGuards(JwtAuthGuard)
  addCompte(@Body() addCompteDto: AddCompteDto) {
    return this.compteService.addCompte(addCompteDto);
  }

  @Get(':email/:password')
  getCompte(@Param('email') email: string, @Param('password') password: string) {
    return this.compteService.getCompte(email,password);
  }

  @Get()
  getComptes() {
    return this.compteService.getComptes();
  }

  @Patch(':id')
  updateCompte(@Param('id') id: string, @Body() updateCompteDto: UpdateCompteDto) {
      return this.compteService.updateCompte(id, updateCompteDto);
  }

  @Delete(':id')
  deleteCompte(@Param('id') id: string) {
    return this.compteService.deleteCompte(id);
  }

  @Get(':id')
    restoreCompte(@Param('id') id:string) {
      return this.compteService.restoreCompte(id);
    } 
}