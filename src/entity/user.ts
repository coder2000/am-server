/* Copyright (c) 2019 Dieter Lunn */

import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  emailAddress: string;

  @Column()
  password: string;

  @Column()
  googleId: string;

  @Column()
  facebookId: string;

  @CreateDateColumn()
  createdAt: Date;
}
