import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service.js';
import { Employee } from './employee.entity.js';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Employee> {
    return this.employeeService.findById(id);
  }

  @Post()
  async createEmployee(@Body() body: Partial<Employee>): Promise<Employee> {
    return this.employeeService.create(body);
  }

  @Put(':id')
  async updateEmployee(
    @Param('id') id: number, @Body() updatedEmployeeData: Partial<Employee>):Promise<Employee> {
    return this.employeeService.update(id, updatedEmployeeData);
  }
}
