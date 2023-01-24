import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompteEntity } from './entity/compte.entity';
import { AddCompteDto } from './dto/addCompte.dto';
import { UpdateCompteDto } from './dto/updateCompte.dto';

@Injectable()
export class CompteService {
    constructor( 
        @InjectRepository(CompteEntity)
        private readonly compteRepository: Repository<CompteEntity>) {}

    async addCompte(addCompteDto: AddCompteDto) {
        return this.compteRepository.save(addCompteDto);
    }

    async getCompte(email: string, password:string) {
        const compte = await this.compteRepository.findOne({where:{email:email, password:password}});
        if (!compte) {throw new NotFoundException("Compte not found!");}
        return compte;
    }

    getComptes() {
        if (!this.compteRepository) return ["You have nothing to do!"];
        return this.compteRepository.find();
    }

    async updateCompte(id: string, updateCompteDto: UpdateCompteDto) {
        const compte = await this.compteRepository.count({where:{id:id}});
        if (compte){
            await this.compteRepository.update(id, updateCompteDto);
            return "Compte has been updated successfully!";
        }
        else {
            throw new NotFoundException("Compte not found to be updated!");
        }
    }

    async deleteCompte(id: string) {
        const compte = await this.compteRepository.findOne({where:{id:id}});
        if (compte){
            await this.compteRepository.softDelete(id);
            return compte;
        }
        throw new NotFoundException("Compte not found already!"); 
    }

    async restoreCompte(id: string) {
        const compte = await this.compteRepository.restore(id);
        if (compte.affected) {
            return compte;
        }
        throw new NotFoundException('Compte not found!');
    }

    async getCompteByID(id : string) {
        const compte = await this.compteRepository.findOne({where:{id:id}});
        if (!compte) {throw new NotFoundException("Compte not found!");}
        return compte;

    }
}