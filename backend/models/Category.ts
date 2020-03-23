import { Table, Column, Model, PrimaryKey, HasMany } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { Post } from "./Post";

@Table
export class Category extends Model<Category> {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Post)
  posts: Post[];
}
