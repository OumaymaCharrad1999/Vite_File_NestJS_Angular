import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { randFullName, randSequence, randPhoneNumber, randEmail, randCompanyName, randBic, randPassword } from "@ngneat/falso";
import { CompteEntity } from "../compte/entity/compte.entity"
import { CompteService } from "../compte/compte.service";

async function bootstrap () {
    const app = await NestFactory.createApplicationContext(AppModule);
    const compteService = app.get(CompteService);
    for (let i=0;i<10;i++){
        const newCompte = new CompteEntity();
        newCompte.name = randFullName();
        newCompte.cin = randSequence();
        newCompte.phoneNumber = parseInt(randPhoneNumber());
        newCompte.email = randEmail();
        newCompte.compagny = randCompanyName();
        newCompte.taxIdentificationNumber = randBic();
        newCompte.password = randPassword();
        await compteService.addCompte(newCompte);
    }
    await app.close();
}
bootstrap();