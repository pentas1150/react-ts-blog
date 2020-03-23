import { Table, Column, Model, CreatedAt, PrimaryKey } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  userId: string;

  @Column({ type: DataType.STRING })
  userPw: string;
}
