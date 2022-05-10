import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class ContactInfor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    phone: string;

    @Column()
    email: string;

    @Column()
    employeeId: number;

    @OneToOne(() => Employee, employee => employee.contactInfor, {onDelete: 'CASCADE'})
    @JoinColumn()
    employee: Employee
}

