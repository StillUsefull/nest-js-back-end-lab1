import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CostController } from './cost.controller';
import { CostService } from './cost.service';
@Module({
    imports: [],
    controllers: [CostController],
    providers: [CostService],
  })
  export class CostModule {}
  