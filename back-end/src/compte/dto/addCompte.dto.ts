import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, ValidationArguments } from 'class-validator';

export class AddCompteDto {
  id: string;

  @IsString()
  @IsNotEmpty({message: ()=>("'Name' field is empty!")})
  @MinLength(5,{
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is short, the minimum size of ${validationData.property} is ${validationData.constraints[0]}`
    }
    })
  @MaxLength(20, { 
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is long, the maximum size of ${validationData.property} is ${validationData.constraints[0]}`
    }
    })
  name: string;

  @IsString()
  @IsNotEmpty({message: ()=>("'CIN' field is empty!")})
  cin: string;

  @IsNumber()
  @IsNotEmpty({message: ()=>("'Phone Number' field is empty!")})
  phoneNumber: number;

  @IsEmail()
  @IsNotEmpty({message: ()=>("'E-mail' field is empty!")})
  email: string;

  @IsString()
  @IsNotEmpty({message: ()=>("'Compagny' field is empty!")})
  compagny: string;

  @IsString()
  @IsNotEmpty({message: ()=>("'Tax Identification Number' field is empty!")})
  taxIdentificationNumber: string;

  @IsString()
  @IsNotEmpty({message: ()=>("'Password' field is empty!")})
  @MinLength(8,{
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is short, the minimum size of ${validationData.property} is ${validationData.constraints[0]}`
    }
    })
  @MaxLength(20, { 
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is long, the maximum size of ${validationData.property} is ${validationData.constraints[0]}`
    }
    })
  password: string;  
}