import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Measure {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  customer_code: string;

  @Column()
  measure_datetime: Date;

  @Column()
  measure_type: string;

  @Column({ default: false })
  has_confirmed: boolean;

  @Column()
  image_url: string;

  @Column({ nullable: true })
  measure_value: number;
}
