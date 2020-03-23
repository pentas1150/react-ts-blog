import { Table, Column, Model, ForeignKey, HasMany } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { User } from "./User";
import { Comment } from "./Comment";

@Table
export class Post extends Model<Post> {
  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  content: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  author: string;

  @HasMany(() => Comment)
  comments: Comment[];
}
