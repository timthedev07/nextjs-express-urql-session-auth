import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

type ProviderType = "Google" | "Discord" | "Microsoft";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column({ type: "text", unique: true })
  email: string;

  @Field(() => String)
  @Column({ type: "varchar", length: "45", unique: true })
  username: string;

  @Field(() => String, { nullable: false })
  @Column("text", { nullable: false })
  provider: ProviderType;

  @Field(() => String)
  @Column("text")
  avatarUrl: string;

  @Column({ type: "text", nullable: false })
  externalId: string;

  @Field(() => Boolean)
  @Column({ type: "boolean", default: false })
  emailPublic: boolean;
}
