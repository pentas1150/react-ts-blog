import { Table, Column, Model, PrimaryKey, HasMany } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { Post } from "./Post";

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  userId: string;

  @Column({ type: DataType.STRING })
  userPw: string;

  @HasMany(() => Post)
  posts: Post[];
}
