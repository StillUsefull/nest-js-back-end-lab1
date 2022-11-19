import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryModule } from './category/category.module';
import { CostModule } from './cost/cost.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SequelizeModule.forRoot(
    {
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'debis',
      password: 'root',
      models: [],
      autoLoadModels: true
    }
  ), 
  UserModule, 
  CategoryModule,
  CostModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
