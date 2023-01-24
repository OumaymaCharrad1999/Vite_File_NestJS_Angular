import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { FileEntity } from './entities/file.entity';
import * as bcrypt from 'bcrypt';
import { etatactuelfile } from './etatfile/enumguichet';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private FileRepository: Repository<FileEntity>
  ){}

 async addFile(createFileDto: CreateFileDto): Promise<FileEntity> {
  const newfile=new FileEntity
  const chaine=createFileDto.Id+createFileDto.Adress
  newfile.Id=await bcrypt.hash(chaine,10)
  newfile.Adress=createFileDto.Adress
  newfile.numerofile=0
  newfile.guichet="A"
  newfile.adminId=createFileDto.Id
  return await this.FileRepository.save(newfile);
  }

  async getFilelist(adminId: string):Promise<FileEntity[]> {

    const fileList = await this.FileRepository.find({where:{adminId:adminId}})
    if (!fileList) {
      throw new NotFoundException("Compte not found!");}
   else
    return fileList
    }

async updateFile(updatefile:Partial<FileEntity>):Promise<FileEntity> {

const Id=updatefile.Id
  const new_file= await this.FileRepository.findOne({where:{Id}});
  if (new_file){
    Object.assign(new_file, updatefile);
    return await this.FileRepository.save(new_file);
  }
  else {
      throw new NotFoundException("Compte not found to be updated!");
  }
}

async updateFileState( Id:string,guichet:string):Promise<any> {

  const new_file= await this.FileRepository.findOne({where:{Id}});
  if (new_file){
    console.log(new_file)
    new_file.numerofile=new_file.numerofile%100+1;
    new_file.guichet=guichet
    await this.FileRepository.save(new_file);
    return {"numerofile" : new_file.numerofile, "guichet" : new_file.guichet}
  }
  else {
      throw new NotFoundException("Compte not found to be updated!");
  }

}
async verifyCredentials(Id: string): Promise<etatactuelfile> {
  const user = await this.FileRepository.findOne({ where: {Id} });
 
  if(user)
 {

 const filestat=new etatactuelfile
 filestat.guichet=user.guichet
 filestat.numerofile=user.numerofile
  return filestat
}
  else {
  throw new NotFoundException
  }
}
}



