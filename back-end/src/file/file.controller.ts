import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity } from './entities/file.entity';
import { etatfile } from './etatfile/etatfile';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('add-file')
  async addFile(@Body() createFileDto: CreateFileDto ) {
    return this.fileService.addFile(createFileDto);
  }


  @Get(':adminId')
  async  getList(@Param('adminId') adminId: string) {
    return await this.fileService.getFilelist(adminId)
  }

  @Patch('update')
  update( @Body() updateFileDto: Partial<FileEntity>) {
    return this.fileService.updateFile( updateFileDto);
  }
 
  
  @Get('guichet/:Id')
  async verification(@Param('Id') Id: string) {
    return this.fileService.verifyCredentials(Id);
   
  }

  @Patch('guichet-update')
  async updateFilestate (@Body() stat:etatfile) {
    return await this.fileService.updateFileState(stat.Id,stat.guichet)
  }

}
