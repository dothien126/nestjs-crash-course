
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfor } from "./contact-infor.entity";
import { Employee } from "./employee.entity";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Employee, employee => employee.tasks, {onDelete: 'SET NULL'})
    employee: Employee;
}
