import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfor } from "./contact-infor.entity";
import { Meeting } from "./meeting.entity";
import { Task } from "./task.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Employee, (employee) => employee.directReports, {onDelete: 'SET NULL'})
    manager: Employee;

    @OneToMany(() => Employee, employee => employee.manager)
    directReports: Employee[];

    @OneToOne(() => ContactInfor, contactInfor => contactInfor.employee)
    contactInfor: ContactInfor;

    @OneToMany(() => Task, task => task.employee) 
    tasks: Task[];

    @ManyToMany(() => Meeting, (meeting) => meeting.employee)
    @JoinTable()
    meetings: Meeting[];
}

