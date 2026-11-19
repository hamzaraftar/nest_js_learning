import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(employeeData: Partial<Employee>): Promise<Employee> {
    const employee = this.employeeRepository.create(employeeData);
    return await this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }
  
  async findById(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Empolyee with ID:${id} not found `);
    }
    return employee;
  }

  async update(id:number, updatedEmployeeData: Partial<Employee>): Promise<Employee> 
  {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Empolyee with ID:${id} not found `);
    }

    const updated = Object.assign(employee, updatedEmployeeData);
    return await this.employeeRepository.save(updated);
  }


  async delete(id: number):Promise<{message:string }>{
    const result = await this.employeeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Employee with ID:${id} not found `);
    }
    return { message: `Employee with ID:${id} deleted successfully` };
  }

  async search (filters:{name?:string, department?:string}):Promise<Employee[]>{
    const query = this.employeeRepository.createQueryBuilder('employee');

    if (filters.name) {
      query.andWhere('employee.name ILIKE :name', { name: `%${filters.name}%` });
    }

    if (filters.department) {
      query.andWhere('employee.department ILIKE :department', { department: `%${filters.department}%` });
    }

    return await query.getMany();
  }
}
