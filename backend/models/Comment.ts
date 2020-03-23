import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { Post } from "./Post";

@Table
export class Comment extends Model<Comment> {
  @Column({ type: DataType.STRING })
  comment: string;

  @Column({ type: DataType.STRING })
  commenter: string;

  @ForeignKey(() => Post)
  @Column({ type: DataType.INTEGER })
  post: number;
}
